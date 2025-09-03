import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Heading, Label, VStack } from '@navikt/ds-react';

import {
  AksjonspunktKode,
  BehandlingResultatType,
  erAksjonspunktÅpent,
  isKlageOmgjort,
  KlageVurdering as klageVurderingCodes,
} from '@navikt/fp-kodeverk';
import { validerApKodeOgHentApEnum } from '@navikt/fp-prosess-felles';
import type { AlleKodeverk, Behandlingsresultat, KlageVurdering } from '@navikt/fp-types';
import type { ForeslaVedtakAp, ForeslaVedtakManueltAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { usePanelDataContext } from '@navikt/fp-utils';

import { VedtakKlageSubmitPanel } from './VedtakKlageSubmitPanel';

const OMGJOER_TEKST_MAP = {
  GUNST_MEDHOLD_I_KLAGE: 'VedtakKlageForm.KlageOmgjortGunst',
  UGUNST_MEDHOLD_I_KLAGE: 'VedtakKlageForm.KlageOmgjortUgunst',
  DELVIS_MEDHOLD_I_KLAGE: 'VedtakKlageForm.KlageOmgjortDelvis',
} as Record<string, string>;

export type VedtakKlageForhandsvisData = {
  gjelderVedtak: boolean;
};

type AksjonspunktData = Array<ForeslaVedtakAp | ForeslaVedtakManueltAp>;

interface Props {
  klageVurdering: KlageVurdering;
  previewVedtakCallback: (data: VedtakKlageForhandsvisData) => void;
  behandlingsresultat: Behandlingsresultat;
}

export const VedtakKlageForm = ({ klageVurdering, previewVedtakCallback, behandlingsresultat }: Props) => {
  const { behandling, isReadOnly, alleKodeverk, aksjonspunkterForPanel, submitCallback } =
    usePanelDataContext<AksjonspunktData>();

  const avvistArsaker = getAvvisningsAarsaker(klageVurdering);
  const omgjortAarsak = getOmgjortAarsak(klageVurdering, alleKodeverk);
  const behandlingsResultatTekst = getResultatText(klageVurdering);

  const klageVurderingResultat = klageVurdering.klageVurderingResultatNK ?? klageVurdering.klageVurderingResultatNFP;
  const erOmgjort = isKlageOmgjort(behandlingsresultat.type);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const lagreVedtak = () => {
    setIsSubmitting(true);

    const behandlingAksjonspunktKodes = aksjonspunkterForPanel.filter(erAksjonspunktÅpent).map(ap => ap.definisjon);
    const input = behandlingAksjonspunktKodes.map(apCode => ({
      kode: validerApKodeOgHentApEnum(apCode, AksjonspunktKode.FORESLA_VEDTAK, AksjonspunktKode.FORESLA_VEDTAK_MANUELT),
    }));

    submitCallback(input).then(() => setIsSubmitting(false));
  };

  return (
    <VStack gap="space-16">
      <Heading size="small" level="2">
        <FormattedMessage id="VedtakKlageForm.Header" />
      </Heading>
      <VStack gap="space-4">
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
        <VStack gap="space-4">
          <Label size="small">
            <FormattedMessage id="VedtakKlageForm.ArsakTilAvvisning" />
          </Label>
          {avvistArsaker.map(arsak => (
            <BodyShort size="small" key={arsak}>
              {alleKodeverk['KlageAvvistÅrsak'].find(({ kode }) => kode === arsak)?.navn ?? ''}
            </BodyShort>
          ))}
        </VStack>
      )}
      {erOmgjort && (
        <VStack gap="space-4">
          <Label size="small">
            <FormattedMessage id="VedtakKlageForm.ArsakTilOmgjoring" />
          </Label>
          {omgjortAarsak}
        </VStack>
      )}
      {behandlingsresultat.type === BehandlingResultatType.KLAGE_YTELSESVEDTAK_OPPHEVET && (
        <VStack gap="space-4">
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
          behandlingPåVent={behandling.behandlingPåVent}
          lagreVedtak={lagreVedtak}
          isSubmitting={isSubmitting}
        />
      )}
    </VStack>
  );
};
const getAvvisningsAarsaker = (klageVurderingResultat: KlageVurdering) => {
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
  if (klageVurderingResultat?.klageVurderingResultatNK?.klageMedholdArsak) {
    return (
      alleKodeverk['KlageMedholdÅrsak'].find(
        ({ kode }) => kode === klageVurderingResultat.klageVurderingResultatNK?.klageMedholdArsak,
      )?.navn ?? ''
    );
  }
  if (klageVurderingResultat?.klageVurderingResultatNFP?.klageMedholdArsak) {
    return (
      alleKodeverk['KlageMedholdÅrsak'].find(
        ({ kode }) => kode === klageVurderingResultat.klageVurderingResultatNFP?.klageMedholdArsak,
      )?.navn ?? ''
    );
  }
  return null;
};

const getResultatText = (behandlingKlageVurdering: KlageVurdering): string | null => {
  const klageResultat =
    behandlingKlageVurdering.klageVurderingResultatNK ?? behandlingKlageVurdering.klageVurderingResultatNFP;
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
      return OMGJOER_TEKST_MAP[klageResultat?.klageVurderingOmgjoer ?? ''];
    default:
      return 'VedtakKlageForm.IkkeFastsatt';
  }
};
