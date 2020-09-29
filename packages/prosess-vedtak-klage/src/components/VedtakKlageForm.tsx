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
  Aksjonspunkt, Behandling, KlageVurdering, KodeverkMedNavn,
} from '@fpsak-frontend/types';

import VedtakKlageSubmitPanel from './VedtakKlageSubmitPanel';
import VedtakKlageKaSubmitPanel from './VedtakKlageKaSubmitPanel';

export const VEDTAK_KLAGE_FORM_NAME = 'VEDTAK_KLAGE_FORM';

const getPreviewVedtakCallback = (previewVedtakCallback: any) => () => previewVedtakCallback({
  gjelderVedtak: true,
});

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  behandlingsresultat: Behandling['behandlingsresultat'];
  behandlingPaaVent: boolean;
  klageVurdering: KlageVurdering;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: any) => Promise<any>;
  previewVedtakCallback: (data: any) => Promise<any>;
  readOnly: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

interface MappedOwnProps {
  isAvvist: boolean;
  isOmgjort: boolean;
  isOpphevOgHjemsend: boolean;
  behandlingsResultatTekst: string;
  klageVurderingResultat: KlageVurdering['klageVurderingResultatNK'] | KlageVurdering['klageVurderingResultatNFP'];
  avvistArsaker?: any[];
  omgjortAarsak?: string;
  fritekstTilBrev?: string;
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
  fritekstTilBrev,
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
          { avvistArsaker.map((arsak: any) => <Normaltekst key={arsak.kode}>{kodeverknavn(arsak)}</Normaltekst>) }
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
          begrunnelse={fritekstTilBrev}
          klageResultat={klageVurderingResultat}
          previewVedtakCallback={getPreviewVedtakCallback(previewVedtakCallback)}
          formProps={formProps}
          readOnly={readOnly}
          behandlingPaaVent={behandlingPaaVent}
        />
        )}
        {klageVurderingResultat.klageVurdertAv === 'NFP' && (
        <VedtakKlageSubmitPanel
          begrunnelse={fritekstTilBrev}
          klageResultat={klageVurderingResultat}
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

const transformValues = (values: { fritekstTilBrev: string, aksjonspunktKoder: string[] }) => values.aksjonspunktKoder.map((apCode: string) => ({
  kode: apCode,
  begrunnelse: values.fritekstTilBrev,
}));

export const getAvvisningsAarsaker = createSelector([(ownProps: PureOwnProps) => ownProps.klageVurdering], (klageVurderingResultat) => {
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
  (behandlingKlageVurdering) => (behandlingKlageVurdering.klageVurderingResultatNK
    ? behandlingKlageVurdering.klageVurderingResultatNK : behandlingKlageVurdering.klageVurderingResultatNFP),
);

const getResultatText = createSelector(
  [(ownProps: PureOwnProps) => ownProps.klageVurdering],
  (behandlingKlageVurdering) => {
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
        return omgjoerTekstMap[klageResultat.klageVurderingOmgjoer];
      default:
        return null;
    }
  },
);

const getOmgjortAarsak = createSelector(
  [(ownProps: PureOwnProps) => ownProps.klageVurdering],
  (klageVurderingResultat) => {
    if (klageVurderingResultat) {
      if (klageVurderingResultat.klageVurderingResultatNK) {
        return klageVurderingResultat.klageVurderingResultatNK.klageMedholdArsakNavn;
      }
      if (klageVurderingResultat.klageVurderingResultatNFP) {
        return klageVurderingResultat.klageVurderingResultatNFP.klageMedholdArsakNavn;
      }
    }
    return null;
  },
);

const getIsOmgjort = createSelector(
  [(ownProps: PureOwnProps) => ownProps.behandlingsresultat],
  (behandlingsresultat) => behandlingsresultat.type.kode === behandlingResultatType.KLAGE_MEDHOLD,
);

export const getIsAvvist = createSelector(
  [(ownProps: PureOwnProps) => ownProps.behandlingsresultat],
  (behandlingsresultat) => behandlingsresultat.type.kode === behandlingResultatType.KLAGE_AVVIST,
);

export const getIsOpphevOgHjemsend = createSelector(
  [(ownProps: PureOwnProps) => ownProps.behandlingsresultat],
  (behandlingsresultat) => behandlingsresultat.type.kode === behandlingResultatType.KLAGE_YTELSESVEDTAK_OPPHEVET,
);

export const getFritekstTilBrev = createSelector(
  [(ownProps: PureOwnProps) => ownProps.klageVurdering],
  (behandlingKlageVurdering) => {
    const klageResultat = behandlingKlageVurdering.klageVurderingResultatNK
      ? behandlingKlageVurdering.klageVurderingResultatNK : behandlingKlageVurdering.klageVurderingResultatNFP;
    return klageResultat.fritekstTilBrev;
  },
);

export const buildInitialValues = createSelector([(ownProps: PureOwnProps) => ownProps.aksjonspunkter], (aksjonspunkter) => {
  const behandlingAksjonspunktCodes = aksjonspunkter.map((ap: Aksjonspunkt) => ap.definisjon.kode);
  return {
    aksjonspunktKoder: behandlingAksjonspunktCodes,
  };
});

const mapStateToPropsFactory = (_initialState, initialOwnProps: PureOwnProps) => {
  const onSubmit = (values: any) => initialOwnProps.submitCallback(transformValues(values));
  return (state: any, ownProps: PureOwnProps) => ({
    onSubmit,
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
};

export default connect(mapStateToPropsFactory)(behandlingForm({
  form: VEDTAK_KLAGE_FORM_NAME,
})(injectIntl(VedtakKlageForm)));
