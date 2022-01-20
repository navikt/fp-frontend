import React, {
  FunctionComponent, useCallback, useMemo, useState,
} from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst, Undertekst, Undertittel } from 'nav-frontend-typografi';

import { getKodeverknavnFn } from '@fpsak-frontend/utils';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import behandlingResultatType from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import klageVurderingCodes from '@fpsak-frontend/kodeverk/src/klageVurdering';
import {
  Aksjonspunkt, Behandling, KlageVurdering, AlleKodeverk,
} from '@fpsak-frontend/types';
import { BekreftVedtakUtenTotrinnskontrollAp, ForeslaVedtakAp, ForeslaVedtakManueltAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import { validerApKodeOgHentApEnum } from '@fpsak-frontend/prosess-felles';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';

import VedtakKlageSubmitPanel from './VedtakKlageSubmitPanel';
import VedtakKlageKaSubmitPanel from './VedtakKlageKaSubmitPanel';

export const VEDTAK_KLAGE_FORM_NAME = 'VEDTAK_KLAGE_FORM';

const OMGJOER_TEKST_MAP = {
  GUNST_MEDHOLD_I_KLAGE: 'VedtakKlageForm.KlageOmgjortGunst',
  UGUNST_MEDHOLD_I_KLAGE: 'VedtakKlageForm.KlageOmgjortUgunst',
  DELVIS_MEDHOLD_I_KLAGE: 'VedtakKlageForm.KlageOmgjortDelvis',
};

export type ForhandsvisData = {
  gjelderVedtak: boolean;
}

const getPreviewVedtakCallback = (previewVedtakCallback: (data: ForhandsvisData) => Promise<any>) => () => previewVedtakCallback({
  gjelderVedtak: true,
});

type AksjonspunktData = Array<ForeslaVedtakAp | ForeslaVedtakManueltAp | BekreftVedtakUtenTotrinnskontrollAp>;

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

const getOmgjortAarsak = (
  klageVurderingResultat: KlageVurdering,
  alleKodeverk: AlleKodeverk,
): string | null => {
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk);
  if (klageVurderingResultat) {
    if (klageVurderingResultat.klageVurderingResultatNK) {
      return getKodeverknavn(klageVurderingResultat.klageVurderingResultatNK.klageMedholdArsak, KodeverkType.KLAGE_MEDHOLD_ARSAK);
    }
    if (klageVurderingResultat.klageVurderingResultatNFP) {
      return getKodeverknavn(klageVurderingResultat.klageVurderingResultatNFP.klageMedholdArsak, KodeverkType.KLAGE_MEDHOLD_ARSAK);
    }
  }
  return null;
};

const getResultatText = (behandlingKlageVurdering: KlageVurdering): string | null => {
  const klageResultat = behandlingKlageVurdering.klageVurderingResultatNK
    ? behandlingKlageVurdering.klageVurderingResultatNK : behandlingKlageVurdering.klageVurderingResultatNFP;
  switch (klageResultat.klageVurdering) {
    case klageVurderingCodes.AVVIS_KLAGE:
      return 'VedtakKlageForm.KlageAvvist';
    case klageVurderingCodes.STADFESTE_YTELSESVEDTAK:
      return 'VedtakKlageForm.KlageStadfestet';
    case klageVurderingCodes.OPPHEVE_YTELSESVEDTAK:
      return 'VedtakKlageForm.YtelsesvedtakOpphevet';
    case klageVurderingCodes.HJEMSENDE_UTEN_Å_OPPHEVE:
      return 'VedtakKlageForm.HjemmsendUtenOpphev';
    case klageVurderingCodes.MEDHOLD_I_KLAGE:
      return OMGJOER_TEKST_MAP[klageResultat.klageVurderingOmgjoer];
    default:
      return null;
  }
};

interface OwnProps {
  behandlingsresultat: Behandling['behandlingsresultat'];
  behandlingPaaVent: boolean;
  klageVurdering: KlageVurdering;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: AksjonspunktData) => Promise<void>;
  previewVedtakCallback: (data: ForhandsvisData) => Promise<any>;
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
}

/**
 * VedtakKlageForm
 */
const VedtakKlageForm: FunctionComponent<OwnProps> = ({
  submitCallback,
  klageVurdering,
  behandlingsresultat,
  readOnly,
  aksjonspunkter,
  previewVedtakCallback,
  behandlingPaaVent,
  alleKodeverk,
}) => {
  const avvistArsaker = useMemo(() => getAvvisningsAarsaker(klageVurdering), [klageVurdering]);
  const omgjortAarsak = useMemo(() => getOmgjortAarsak(klageVurdering, alleKodeverk), [klageVurdering]);
  const behandlingsResultatTekst = useMemo(() => getResultatText(klageVurdering), [klageVurdering]);
  const klageVurderingResultat = klageVurdering.klageVurderingResultatNK
    ? klageVurdering.klageVurderingResultatNK : klageVurdering.klageVurderingResultatNFP;

  const [isSubmitting, setSubmitting] = useState(false);
  const lagreVedtak = useCallback(() => {
    setSubmitting(true);

    const behandlingAksjonspunktCodes = aksjonspunkter
      .filter((ap) => ap.status === aksjonspunktStatus.OPPRETTET)
      .map((ap) => ap.definisjon);
    const input = behandlingAksjonspunktCodes.map((apCode) => ({
      kode: validerApKodeOgHentApEnum(apCode, AksjonspunktCode.FORESLA_VEDTAK,
        AksjonspunktCode.FORESLA_VEDTAK_MANUELT,
        AksjonspunktCode.VEDTAK_UTEN_TOTRINNSKONTROLL),
    }));

    submitCallback(input).then(() => setSubmitting(false));
  }, [aksjonspunkter]);

  const kodeverknavn = getKodeverknavnFn(alleKodeverk);
  return (
    <>
      <Undertittel><FormattedMessage id="VedtakKlageForm.Header" /></Undertittel>
      <VerticalSpacer twentyPx />
      <Undertekst><FormattedMessage id="VedtakKlageForm.Resultat" /></Undertekst>
      <Normaltekst><FormattedMessage id={behandlingsResultatTekst} /></Normaltekst>
      <VerticalSpacer sixteenPx />
      {behandlingsresultat.type === behandlingResultatType.KLAGE_AVVIST && (
        <>
          <Undertekst><FormattedMessage id="VedtakKlageForm.ArsakTilAvvisning" /></Undertekst>
          { avvistArsaker.map((arsak) => <Normaltekst key={arsak}>{kodeverknavn(arsak, KodeverkType.KLAGE_AVVIST_AARSAK)}</Normaltekst>) }
          <VerticalSpacer sixteenPx />
        </>
      )}
      {behandlingsresultat.type === behandlingResultatType.KLAGE_MEDHOLD && (
        <>
          <Undertekst><FormattedMessage id="VedtakKlageForm.ArsakTilOmgjoring" /></Undertekst>
          { omgjortAarsak }
          <VerticalSpacer sixteenPx />
        </>
      )}
      {behandlingsresultat.type === behandlingResultatType.KLAGE_YTELSESVEDTAK_OPPHEVET && (
        <>
          <Undertekst><FormattedMessage id="VedtakKlageForm.ArsakTilOppheving" /></Undertekst>
          { omgjortAarsak }
          <VerticalSpacer sixteenPx />
        </>
      )}
      {klageVurderingResultat.klageVurdertAv === 'NK' && (
        <VedtakKlageKaSubmitPanel
          klageResultat={klageVurderingResultat}
          previewVedtakCallback={getPreviewVedtakCallback(previewVedtakCallback)}
          readOnly={readOnly}
          behandlingPaaVent={behandlingPaaVent}
          lagreVedtak={lagreVedtak}
          isSubmitting={isSubmitting}
        />
      )}
      {klageVurderingResultat.klageVurdertAv === 'NFP' && (
        <VedtakKlageSubmitPanel
          previewVedtakCallback={getPreviewVedtakCallback(previewVedtakCallback)}
          readOnly={readOnly}
          behandlingPaaVent={behandlingPaaVent}
          lagreVedtak={lagreVedtak}
          isSubmitting={isSubmitting}
        />
      )}
    </>
  );
};

export default VedtakKlageForm;
