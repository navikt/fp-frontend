import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Heading, Label, VStack } from '@navikt/ds-react';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  BehandlingResultatType,
  getKodeverknavnFn,
  isKlageOmgjort,
  KlageVurdering as klageVurderingCodes,
  KodeverkType,
} from '@navikt/fp-kodeverk';
import { validerApKodeOgHentApEnum } from '@navikt/fp-prosess-felles';
import type { AlleKodeverk, Behandlingsresultat, KlageVurdering } from '@navikt/fp-types';
import type { ForeslaVedtakAp, ForeslaVedtakManueltAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { usePanelDataContext } from '@navikt/fp-utils';

import { VedtakKlageSubmitPanel } from './VedtakKlageSubmitPanel';

export const VEDTAK_KLAGE_FORM_NAME = 'VEDTAK_KLAGE_FORM';

const OMGJOER_TEKST_MAP = {
  GUNST_MEDHOLD_I_KLAGE: 'VedtakKlageForm.KlageOmgjortGunst',
  UGUNST_MEDHOLD_I_KLAGE: 'VedtakKlageForm.KlageOmgjortUgunst',
  DELVIS_MEDHOLD_I_KLAGE: 'VedtakKlageForm.KlageOmgjortDelvis',
} as Record<string, string>;

export type ForhandsvisData = {
  gjelderVedtak: boolean;
};

type AksjonspunktData = Array<ForeslaVedtakAp | ForeslaVedtakManueltAp>;

const getAvvisningsAarsaker = (klageVurderingResultat: KlageVurdering): string[] => {
  if (klageVurderingResultat) {
    if (klageVurderingResultat.klageFormkravResultatKA && klageVurderingResultat.klageVurderingResultatNK) {
      return klageVurderingResultat.klageFormkravResultatKA.avvistArsaker;
    }
    if (klageVurderingResultat.klageFormkravResultatNFP) {
      return klageVurderingResultat.klageFormkravResultatNFP.avvistArsaker;
    }
  }
  return [];
};

const getOmgjortAarsak = (klageVurderingResultat: KlageVurdering, alleKodeverk: AlleKodeverk): string | null => {
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk);
  if (klageVurderingResultat) {
    if (klageVurderingResultat.klageVurderingResultatNK?.klageMedholdArsak) {
      return getKodeverknavn(
        klageVurderingResultat.klageVurderingResultatNK.klageMedholdArsak,
        KodeverkType.KLAGE_MEDHOLD_ARSAK,
      );
    }
    if (klageVurderingResultat.klageVurderingResultatNFP?.klageMedholdArsak) {
      return getKodeverknavn(
        klageVurderingResultat.klageVurderingResultatNFP.klageMedholdArsak,
        KodeverkType.KLAGE_MEDHOLD_ARSAK,
      );
    }
  }
  return null;
};

const getResultatText = (behandlingKlageVurdering: KlageVurdering): string | null => {
  const klageResultat = behandlingKlageVurdering.klageVurderingResultatNK
    ? behandlingKlageVurdering.klageVurderingResultatNK
    : behandlingKlageVurdering.klageVurderingResultatNFP;
  switch (klageResultat?.klageVurdering) {
    case klageVurderingCodes.AVVIS_KLAGE:
      return 'VedtakKlageForm.KlageAvvist';
    case klageVurderingCodes.STADFESTE_YTELSESVEDTAK:
      return 'VedtakKlageForm.KlageStadfestet';
    case klageVurderingCodes.OPPHEVE_YTELSESVEDTAK:
      return 'VedtakKlageForm.YtelsesvedtakOpphevet';
    case klageVurderingCodes.HJEMSENDE_UTEN_Å_OPPHEVE:
      return 'VedtakKlageForm.HjemmsendUtenOpphev';
    case klageVurderingCodes.MEDHOLD_I_KLAGE:
      return OMGJOER_TEKST_MAP[klageResultat?.klageVurderingOmgjoer || ''];
    default:
      return 'VedtakKlageForm.IkkeFastsatt';
  }
};

interface Props {
  klageVurdering: KlageVurdering;
  previewVedtakCallback: (data: ForhandsvisData) => void;
  behandlingsresultat: Behandlingsresultat;
}

export const VedtakKlageForm = ({ klageVurdering, previewVedtakCallback, behandlingsresultat }: Props) => {
  const { behandling, isReadOnly, alleKodeverk, aksjonspunkterForPanel, submitCallback } =
    usePanelDataContext<AksjonspunktData>();

  const avvistArsaker = getAvvisningsAarsaker(klageVurdering);
  const omgjortAarsak = getOmgjortAarsak(klageVurdering, alleKodeverk);
  const behandlingsResultatTekst = getResultatText(klageVurdering);

  const klageVurderingResultat = klageVurdering.klageVurderingResultatNK
    ? klageVurdering.klageVurderingResultatNK
    : klageVurdering.klageVurderingResultatNFP;
  const erOmgjort = isKlageOmgjort(behandlingsresultat.type);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const lagreVedtak = () => {
    setIsSubmitting(true);

    const behandlingAksjonspunktKodes = aksjonspunkterForPanel
      .filter(ap => ap.status === AksjonspunktStatus.OPPRETTET)
      .map(ap => ap.definisjon);
    const input = behandlingAksjonspunktKodes.map(apCode => ({
      kode: validerApKodeOgHentApEnum(apCode, AksjonspunktKode.FORESLA_VEDTAK, AksjonspunktKode.FORESLA_VEDTAK_MANUELT),
    }));

    submitCallback(input).then(() => setIsSubmitting(false));
  };

  const kodeverknavn = getKodeverknavnFn(alleKodeverk);
  return (
    <VStack gap="4">
      <Heading size="small">
        <FormattedMessage id="VedtakKlageForm.Header" />
      </Heading>
      <VStack gap="1">
        <Label size="small">
          <FormattedMessage id="VedtakKlageForm.Resultat" />
        </Label>
        {behandlingsResultatTekst && (
          <BodyShort size="small">
            <FormattedMessage id={behandlingsResultatTekst} />
          </BodyShort>
        )}
      </VStack>
      {behandlingsresultat.type === BehandlingResultatType.KLAGE_AVVIST && (
        <VStack gap="1">
          <Label size="small">
            <FormattedMessage id="VedtakKlageForm.ArsakTilAvvisning" />
          </Label>
          {avvistArsaker.map(arsak => (
            <BodyShort size="small" key={arsak}>
              {kodeverknavn(arsak, KodeverkType.KLAGE_AVVIST_AARSAK)}
            </BodyShort>
          ))}
        </VStack>
      )}
      {erOmgjort && (
        <VStack gap="1">
          <Label size="small">
            <FormattedMessage id="VedtakKlageForm.ArsakTilOmgjoring" />
          </Label>
          {omgjortAarsak}
        </VStack>
      )}
      {behandlingsresultat.type === BehandlingResultatType.KLAGE_YTELSESVEDTAK_OPPHEVET && (
        <VStack gap="1">
          <Label size="small">
            <FormattedMessage id="VedtakKlageForm.ArsakTilOppheving" />
          </Label>
          {omgjortAarsak}
        </VStack>
      )}
      {klageVurderingResultat?.klageVurdertAv === 'NFP' && (
        <VedtakKlageSubmitPanel
          previewVedtakCallback={previewVedtakCallback}
          readOnly={isReadOnly}
          behandlingPaaVent={behandling.behandlingPaaVent}
          lagreVedtak={lagreVedtak}
          isSubmitting={isSubmitting}
        />
      )}
    </VStack>
  );
};
