import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { InjectedFormProps } from 'redux-form';
import { Normaltekst, Undertekst, Undertittel } from 'nav-frontend-typografi';

import { getKodeverknavnFn } from '@fpsak-frontend/utils';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { behandlingForm, behandlingFormValueSelector } from '@fpsak-frontend/form';
import behandlingResultatType from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import klageVurderingCodes from '@fpsak-frontend/kodeverk/src/klageVurdering';
import {
  Aksjonspunkt, Behandling, KlageVurdering, KlageVurderingResultat, KodeverkMedNavn,
} from '@fpsak-frontend/types';

import VedtakKlageSubmitPanel from './VedtakKlageSubmitPanel';
import VedtakKlageKaSubmitPanel from './VedtakKlageKaSubmitPanel';

export const VEDTAK_KLAGE_FORM_NAME = 'VEDTAK_KLAGE_FORM';

export type ForhandsvisData = {
  gjelderVedtak: boolean;
}

const getPreviewVedtakCallback = (previewVedtakCallback: (data: ForhandsvisData) => Promise<any>) => () => previewVedtakCallback({
  gjelderVedtak: true,
});

type FormValues = {
  aksjonspunktKoder?: string[];
  fritekstTilBrev?: string;
}

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  behandlingsresultat: Behandling['behandlingsresultat'];
  behandlingPaaVent: boolean;
  klageVurdering: KlageVurdering;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: any) => Promise<any>;
  previewVedtakCallback: (data: ForhandsvisData) => Promise<any>;
  readOnly: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

interface MappedOwnProps {
  isAvvist: boolean;
  isOmgjort: boolean;
  isOpphevOgHjemsend: boolean;
  behandlingsResultatTekst: string;
  klageVurderingResultat: KlageVurdering['klageVurderingResultatNK'] | KlageVurdering['klageVurderingResultatNFP'];
  avvistArsaker?: KodeverkMedNavn[];
  omgjortAarsak?: string;
  onSubmit: (formValues: FormValues) => any;
  initialValues: FormValues;
}

/**
 * VedtakKlageForm
 *
 * Redux-form-komponent for klage-vedtak.
 */
export const VedtakKlageForm: FunctionComponent<PureOwnProps & MappedOwnProps & WrappedComponentProps & InjectedFormProps> = ({
  intl,
  readOnly,
  omgjortAarsak,
  previewVedtakCallback,
  isAvvist,
  isOmgjort,
  isOpphevOgHjemsend,
  avvistArsaker,
  behandlingsResultatTekst,
  klageVurderingResultat,
  behandlingPaaVent,
  alleKodeverk,
  ...formProps
}) => {
  const kodeverknavn = getKodeverknavnFn(alleKodeverk, kodeverkTyper);
  return (
    <>
      <Undertittel>{intl.formatMessage({ id: 'VedtakKlageForm.Header' })}</Undertittel>
      <VerticalSpacer twentyPx />
      <>
        <div>
          <Undertekst>{intl.formatMessage({ id: 'VedtakKlageForm.Resultat' })}</Undertekst>
        </div>
        <Normaltekst>
          {intl.formatMessage({ id: behandlingsResultatTekst })}
        </Normaltekst>
        <VerticalSpacer sixteenPx />
        {isAvvist && (
        <div>
          <Undertekst>{intl.formatMessage({ id: 'VedtakKlageForm.ArsakTilAvvisning' })}</Undertekst>
          { avvistArsaker.map((arsak) => <Normaltekst key={arsak.kode}>{kodeverknavn(arsak)}</Normaltekst>) }
          <VerticalSpacer sixteenPx />
        </div>
        )}
        {isOmgjort && (
        <div>
          <Undertekst>{intl.formatMessage({ id: 'VedtakKlageForm.ArsakTilOmgjoring' })}</Undertekst>
          { omgjortAarsak }
          <VerticalSpacer sixteenPx />
        </div>
        )}
        {isOpphevOgHjemsend && (
        <div>
          <Undertekst>{intl.formatMessage({ id: 'VedtakKlageForm.ArsakTilOppheving' })}</Undertekst>
          { omgjortAarsak }
          <VerticalSpacer sixteenPx />
        </div>
        )}
        {klageVurderingResultat.klageVurdertAv === 'NK' && (
        <VedtakKlageKaSubmitPanel
          klageResultat={klageVurderingResultat}
          previewVedtakCallback={getPreviewVedtakCallback(previewVedtakCallback)}
          formProps={formProps}
          readOnly={readOnly}
          behandlingPaaVent={behandlingPaaVent}
        />
        )}
        {klageVurderingResultat.klageVurdertAv === 'NFP' && (
        <VedtakKlageSubmitPanel
          previewVedtakCallback={getPreviewVedtakCallback(previewVedtakCallback)}
          formProps={formProps}
          readOnly={readOnly}
          behandlingPaaVent={behandlingPaaVent}
        />
        )}
      </>
    </>
  );
};

const transformValues = (values: FormValues): any => values.aksjonspunktKoder.map((apCode) => ({
  kode: apCode,
  begrunnelse: values.fritekstTilBrev,
}));

export const getAvvisningsAarsaker = createSelector([
  (ownProps: PureOwnProps) => ownProps.klageVurdering,
], (klageVurderingResultat): { navn?: string}[] | null => {
  if (klageVurderingResultat) {
    if (klageVurderingResultat.klageFormkravResultatKA && klageVurderingResultat.klageVurderingResultatNK) {
      return klageVurderingResultat.klageFormkravResultatKA.avvistArsaker;
    }
    if (klageVurderingResultat.klageFormkravResultatNFP) {
      return klageVurderingResultat.klageFormkravResultatNFP.avvistArsaker;
    }
  }
  return null;
});

const omgjoerTekstMap = {
  GUNST_MEDHOLD_I_KLAGE: 'VedtakKlageForm.KlageOmgjortGunst',
  UGUNST_MEDHOLD_I_KLAGE: 'VedtakKlageForm.KlageOmgjortUgunst',
  DELVIS_MEDHOLD_I_KLAGE: 'VedtakKlageForm.KlageOmgjortDelvis',
};

const getKlageResultat = createSelector(
  [(ownProps: PureOwnProps) => ownProps.klageVurdering],
  (behandlingKlageVurdering): KlageVurderingResultat => (behandlingKlageVurdering.klageVurderingResultatNK
    ? behandlingKlageVurdering.klageVurderingResultatNK : behandlingKlageVurdering.klageVurderingResultatNFP),
);

const getResultatText = createSelector(
  [(ownProps: PureOwnProps) => ownProps.klageVurdering],
  (behandlingKlageVurdering): string | null => {
    const klageResultat = behandlingKlageVurdering.klageVurderingResultatNK
      ? behandlingKlageVurdering.klageVurderingResultatNK : behandlingKlageVurdering.klageVurderingResultatNFP;
    switch (klageResultat.klageVurdering.kode) {
      case klageVurderingCodes.AVVIS_KLAGE:
        return 'VedtakKlageForm.KlageAvvist';
      case klageVurderingCodes.STADFESTE_YTELSESVEDTAK:
        return 'VedtakKlageForm.KlageStadfestet';
      case klageVurderingCodes.OPPHEVE_YTELSESVEDTAK:
        return 'VedtakKlageForm.YtelsesvedtakOpphevet';
      case klageVurderingCodes.HJEMSENDE_UTEN_Å_OPPHEVE:
        return 'VedtakKlageForm.HjemmsendUtenOpphev';
      case klageVurderingCodes.MEDHOLD_I_KLAGE:
        return omgjoerTekstMap[klageResultat.klageVurderingOmgjoer.kode];
      default:
        return null;
    }
  },
);

const getOmgjortAarsak = createSelector(
  [(ownProps: PureOwnProps) => ownProps.klageVurdering, (ownProps: PureOwnProps) => ownProps.alleKodeverk],
  (klageVurderingResultat, alleKodeverk): string | null => {
    const getKodeverknavn = getKodeverknavnFn(alleKodeverk, kodeverkTyper);
    if (klageVurderingResultat) {
      if (klageVurderingResultat.klageVurderingResultatNK) {
        return getKodeverknavn(klageVurderingResultat.klageVurderingResultatNK.klageMedholdArsak);
      }
      if (klageVurderingResultat.klageVurderingResultatNFP) {
        return getKodeverknavn(klageVurderingResultat.klageVurderingResultatNFP.klageMedholdArsak);
      }
    }
    return null;
  },
);

const getIsOmgjort = createSelector(
  [(ownProps: PureOwnProps) => ownProps.behandlingsresultat],
  (behandlingsresultat): boolean => behandlingsresultat.type.kode === behandlingResultatType.KLAGE_MEDHOLD,
);

export const getIsAvvist = createSelector(
  [(ownProps: PureOwnProps) => ownProps.behandlingsresultat],
  (behandlingsresultat): boolean => behandlingsresultat.type.kode === behandlingResultatType.KLAGE_AVVIST,
);

export const getIsOpphevOgHjemsend = createSelector(
  [(ownProps: PureOwnProps) => ownProps.behandlingsresultat],
  (behandlingsresultat): boolean => behandlingsresultat.type.kode === behandlingResultatType.KLAGE_YTELSESVEDTAK_OPPHEVET,
);

export const getFritekstTilBrev = createSelector(
  [(ownProps: PureOwnProps) => ownProps.klageVurdering],
  (behandlingKlageVurdering): string | undefined => {
    const klageResultat = behandlingKlageVurdering.klageVurderingResultatNK
      ? behandlingKlageVurdering.klageVurderingResultatNK : behandlingKlageVurdering.klageVurderingResultatNFP;
    return klageResultat.fritekstTilBrev;
  },
);

export const buildInitialValues = createSelector([(ownProps: PureOwnProps) => ownProps.aksjonspunkter], (aksjonspunkter): FormValues => {
  const behandlingAksjonspunktCodes = aksjonspunkter.map((ap) => ap.definisjon.kode);
  return {
    aksjonspunktKoder: behandlingAksjonspunktCodes,
  };
});

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback],
(submitCallback) => (values: FormValues) => submitCallback(transformValues(values)));

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  onSubmit: lagSubmitFn(ownProps),
  initialValues: buildInitialValues(ownProps),
  isAvvist: getIsAvvist(ownProps),
  avvistArsaker: getAvvisningsAarsaker(ownProps),
  isOpphevOgHjemsend: getIsOpphevOgHjemsend(ownProps),
  isOmgjort: getIsOmgjort(ownProps),
  omgjortAarsak: getOmgjortAarsak(ownProps),
  fritekstTilBrev: getFritekstTilBrev(ownProps),
  behandlingsResultatTekst: getResultatText(ownProps),
  klageVurderingResultat: getKlageResultat(ownProps),
  ...behandlingFormValueSelector(VEDTAK_KLAGE_FORM_NAME, ownProps.behandlingId, ownProps.behandlingVersjon)(
    state,
    'begrunnelse',
    'aksjonspunktKoder',
  ),
});

export default connect(mapStateToProps)(behandlingForm({
  form: VEDTAK_KLAGE_FORM_NAME,
})(injectIntl(VedtakKlageForm)));
