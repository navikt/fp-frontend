import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Heading, VStack } from '@navikt/ds-react';
import { LabeledValue } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { validerApKodeOgHentApEnum } from '@navikt/fp-prosess-felles';
import { type Aksjonspunkt, type AlleKodeverk, type Behandlingsresultat, type KlageVurdering } from '@navikt/fp-types';
import type { ForeslaVedtakAp, ForeslaVedtakManueltAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { erAksjonspunktÅpent, isKlageOmgjort, usePanelDataContext } from '@navikt/fp-utils';

import { VedtakKlageSubmitPanel } from './VedtakKlageSubmitPanel';

const OMGJOER_TEKST_MAP = {
  GUNST_MEDHOLD_I_KLAGE: 'VedtakKlageForm.KlageOmgjortGunst',
  UGUNST_MEDHOLD_I_KLAGE: 'VedtakKlageForm.KlageOmgjortUgunst',
  DELVIS_MEDHOLD_I_KLAGE: 'VedtakKlageForm.KlageOmgjortDelvis',
  '-': '',
};

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
    void submitCallback(transformValues(aksjonspunkterForPanel)).finally(() => setIsSubmitting(false));
  };

  return (
    <VStack gap="space-16">
      <Heading size="small" level="2">
        <FormattedMessage id="VedtakKlageForm.Tittel" />
      </Heading>

      <LabeledValue
        size="small"
        label={<FormattedMessage id="VedtakKlageForm.Resultat" />}
        value={behandlingsResultatTekst ? <FormattedMessage id={behandlingsResultatTekst} /> : '-'}
      />

      {behandlingsresultat.type === 'KLAGE_AVVIST' && (
        <LabeledValue
          size="small"
          label={<FormattedMessage id="VedtakKlageForm.ArsakTilAvvisning" />}
          fieldType="component"
          value={
            <>
              {avvistArsaker.map(arsak => (
                <BodyShort size="small" key={arsak}>
                  {alleKodeverk['KlageAvvistÅrsak'].find(({ kode }) => kode === arsak)?.navn ?? ''}
                </BodyShort>
              ))}
            </>
          }
        />
      )}

      {erOmgjort && (
        <LabeledValue
          size="small"
          label={<FormattedMessage id="VedtakKlageForm.ArsakTilOmgjoring" />}
          value={omgjortAarsak ?? '-'}
        />
      )}

      {behandlingsresultat.type === 'KLAGE_YTELSESVEDTAK_OPPHEVET' && (
        <LabeledValue
          size="small"
          label={<FormattedMessage id="VedtakKlageForm.ArsakTilOppheving" />}
          value={omgjortAarsak ?? '-'}
        />
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
  if (klageVurderingResultat.klageFormkravResultatKA && klageVurderingResultat.klageVurderingResultatNK) {
    return klageVurderingResultat.klageFormkravResultatKA.avvistÅrsaker;
  }
  if (klageVurderingResultat.klageFormkravResultatNFP) {
    return klageVurderingResultat.klageFormkravResultatNFP.avvistÅrsaker;
  }
  return [];
};

const getOmgjortAarsak = (klageVurderingResultat: KlageVurdering, alleKodeverk: AlleKodeverk): string | null => {
  if (klageVurderingResultat.klageVurderingResultatNK?.klageMedholdÅrsak) {
    return (
      alleKodeverk['KlageMedholdÅrsak'].find(
        ({ kode }) => kode === klageVurderingResultat.klageVurderingResultatNK?.klageMedholdÅrsak,
      )?.navn ?? ''
    );
  }
  if (klageVurderingResultat.klageVurderingResultatNFP?.klageMedholdÅrsak) {
    return (
      alleKodeverk['KlageMedholdÅrsak'].find(
        ({ kode }) => kode === klageVurderingResultat.klageVurderingResultatNFP?.klageMedholdÅrsak,
      )?.navn ?? ''
    );
  }
  return null;
};

const getResultatText = (behandlingKlageVurdering: KlageVurdering) => {
  const klageResultat =
    behandlingKlageVurdering.klageVurderingResultatNK ?? behandlingKlageVurdering.klageVurderingResultatNFP;
  switch (klageResultat?.klageVurdering) {
    case 'AVVIS_KLAGE': {
      return 'VedtakKlageForm.KlageAvvist';
    }
    case 'STADFESTE_YTELSESVEDTAK': {
      return 'VedtakKlageForm.KlageStadfestet';
    }
    case 'OPPHEVE_YTELSESVEDTAK': {
      return 'VedtakKlageForm.YtelsesvedtakOpphevet';
    }
    case 'HJEMSENDE_UTEN_Å_OPPHEVE': {
      return 'VedtakKlageForm.HjemmsendUtenOpphev';
    }
    case 'MEDHOLD_I_KLAGE': {
      return klageResultat.klageVurderingOmgjør ? OMGJOER_TEKST_MAP[klageResultat.klageVurderingOmgjør] : undefined;
    }
    default: {
      return 'VedtakKlageForm.IkkeFastsatt';
    }
  }
};

const transformValues = (aksjonspunkter: Aksjonspunkt[]): AksjonspunktData =>
  aksjonspunkter
    .filter(erAksjonspunktÅpent)
    .map(ap => ap.definisjon)
    .map(apCode => ({
      kode: validerApKodeOgHentApEnum(apCode, AksjonspunktKode.FORESLÅ_VEDTAK, AksjonspunktKode.FORESLÅ_VEDTAK_MANUELT),
    }));
