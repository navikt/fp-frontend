import React, { FunctionComponent, useMemo } from 'react';
import { connect } from 'react-redux';
import {
  change, formValueSelector, InjectedFormProps, reduxForm,
} from 'redux-form';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { injectIntl, IntlShape, WrappedComponentProps } from 'react-intl';

import {
  KodeverkMedNavn, Behandling, BeregningsresultatFp, BeregningsresultatEs, Vilkar,
  Aksjonspunkt, SimuleringResultat, TilbakekrevingValg,
} from '@fpsak-frontend/types';
import klageBehandlingArsakType from '@fpsak-frontend/kodeverk/src/behandlingArsakType';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import { decodeHtmlEntity } from '@fpsak-frontend/utils';
import behandlingResultatType, { isAvslag, isInnvilget } from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import { validerApKodeOgHentApEnum } from '@fpsak-frontend/prosess-felles';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  BekreftVedtakUtenTotrinnskontrollAp, ForeslaVedtakAp, ForeslaVedtakManueltAp, VurdereAnnenYtelseForVedtakAp, VurdereDokumentForVedtakAp,
} from '@fpsak-frontend/types-avklar-aksjonspunkter';

import { getTilbakekrevingText } from '../felles/VedtakHelper';
import VedtakInnvilgetPanel from './VedtakInnvilgetPanel';
import VedtakAvslagPanel from './VedtakAvslagPanel';
import VedtakFellesPanel from '../felles/VedtakFellesPanel';
import VedtakFritekstbrevModal from '../felles/svp/VedtakFritekstbrevModal';

export const findAvslagResultatText = (behandlingResultatTypeKode: string, ytelseType: string): string => {
  if (behandlingResultatTypeKode === behandlingResultatType.KLAGE_YTELSESVEDTAK_OPPHEVET) {
    return 'VedtakForm.ResultatKlageYtelsesvedtakOpphevet';
  }
  if (behandlingResultatTypeKode === behandlingResultatType.KLAGE_AVVIST) {
    return 'VedtakForm.ResultatKlageAvvist';
  }

  if (ytelseType === fagsakYtelseType.ENGANGSSTONAD) {
    return 'VedtakForm.EngangsstonadIkkeInnvilget';
  }

  if (ytelseType === fagsakYtelseType.SVANGERSKAPSPENGER) {
    return 'VedtakForm.SvangerskapspengerIkkeInnvilget';
  }

  return 'VedtakForm.ForeldrepengerIkkeInnvilget';
};

export const findInnvilgetResultatText = (behandlingResultatTypeKode: string, ytelseType: string): string => {
  if (behandlingResultatTypeKode === behandlingResultatType.KLAGE_YTELSESVEDTAK_STADFESTET) {
    return 'VedtakForm.ResultatOpprettholdVedtak';
  }
  if (behandlingResultatTypeKode === behandlingResultatType.KLAGE_MEDHOLD) {
    return 'VedtakForm.ResultatKlageMedhold';
  }

  if (ytelseType === fagsakYtelseType.ENGANGSSTONAD) {
    return 'VedtakForm.VilkarStatusInnvilgetEngangsstonad';
  }

  if (ytelseType === fagsakYtelseType.SVANGERSKAPSPENGER) {
    return 'VedtakForm.SvangerskapspengerInnvilget';
  }

  return 'VedtakForm.VilkarStatusInnvilgetForeldrepenger';
};

export type ForhandsvisData = {
  fritekst: string;
  dokumentMal?: string;
  tittel?: string;
  gjelderVedtak: boolean;
  vedtaksbrev?: { kode: string };
}

const getPreviewManueltBrevCallback = (
  formProps: InjectedFormProps,
  begrunnelse: string,
  brodtekst: string,
  overskrift: string,
  skalOverstyre: boolean,
  previewCallback: (data: ForhandsvisData) => Promise<any>,
) => (e: React.MouseEvent): void => {
  if (formProps.valid || formProps.pristine) {
    const data = {
      fritekst: skalOverstyre ? brodtekst : begrunnelse,
      dokumentMal: skalOverstyre ? 'FRITKS' : undefined,
      tittel: skalOverstyre ? overskrift : undefined,
      gjelderVedtak: true,
      vedtaksbrev: !skalOverstyre ? {
        kode: 'AUTOMATISK',
      } : undefined,
    };

    previewCallback(data);
  } else {
    // @ts-ignore
    formProps.submit();
  }
  e.preventDefault();
};

const erArsakTypeBehandlingEtterKlage = (behandlingArsakTyper: Behandling['behandlingÅrsaker'] = []): boolean => behandlingArsakTyper
  .map(({ behandlingArsakType }) => behandlingArsakType)
  .some((bt) => bt.kode === klageBehandlingArsakType.ETTER_KLAGE
    || bt.kode === klageBehandlingArsakType.KLAGE_U_INNTK
    || bt.kode === klageBehandlingArsakType.KLAGE_M_INNTK);

const finnVedtakstatusTekst = (behandlingsresultat: Behandling['behandlingsresultat'], intl: IntlShape, ytelseTypeKode: string): string => {
  const erInnvilget = isInnvilget(behandlingsresultat.type.kode);
  const erAvslatt = isAvslag(behandlingsresultat.type.kode);

  if (erInnvilget) {
    return intl.formatMessage({ id: findInnvilgetResultatText(behandlingsresultat.type.kode, ytelseTypeKode) });
  }
  if (erAvslatt) {
    return intl.formatMessage({ id: findAvslagResultatText(behandlingsresultat.type.kode, ytelseTypeKode) });
  }
  return '';
};

type VedtakAksjonspunkter = ForeslaVedtakAp
  | ForeslaVedtakManueltAp
  | BekreftVedtakUtenTotrinnskontrollAp
  | VurdereAnnenYtelseForVedtakAp
  | VurdereDokumentForVedtakAp;

type FormValues = {
  beregningErManueltFastsatt?: boolean;
  aksjonspunktKoder?: string[];
  overskrift?: string;
  brødtekst?: string;
  begrunnelse?: string;
}

interface PureOwnProps {
  behandling: Behandling;
  readOnly: boolean;
  aksjonspunkter: Aksjonspunkt[];
  previewCallback: (data: ForhandsvisData) => Promise<any>,
  ytelseTypeKode: string;
  resultatstruktur?: BeregningsresultatFp | BeregningsresultatEs;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  tilbakekrevingvalg?: TilbakekrevingValg;
  simuleringResultat?: SimuleringResultat;
  vilkar?: Vilkar[];
  beregningErManueltFastsatt: boolean;
  submitCallback: (data: VedtakAksjonspunkter[]) => Promise<void>;
}

interface MappedOwnProps {
  onSubmit: (formValues: FormValues) => any;
  initialValues: FormValues;
  begrunnelse?: string;
  brødtekst?: string;
  overskrift?: string;
}

interface DispatchProps {
  clearFormField: (fieldId: string) => void;
}

export const VedtakForm: FunctionComponent<PureOwnProps & MappedOwnProps & DispatchProps & InjectedFormProps & WrappedComponentProps> = ({
  intl,
  behandling,
  readOnly,
  aksjonspunkter,
  previewCallback,
  begrunnelse,
  brødtekst,
  overskrift,
  ytelseTypeKode,
  resultatstruktur,
  alleKodeverk,
  tilbakekrevingvalg,
  simuleringResultat,
  vilkar,
  beregningErManueltFastsatt,
  clearFormField,
  ...formProps
}) => {
  const {
    behandlingsresultat, sprakkode, status,
  } = behandling;

  const erBehandlingEtterKlage = useMemo(() => erArsakTypeBehandlingEtterKlage(behandling.behandlingÅrsaker), [behandling.behandlingÅrsaker]);
  const tilbakekrevingtekst = useMemo(() => getTilbakekrevingText(alleKodeverk, simuleringResultat, tilbakekrevingvalg), [
    simuleringResultat, tilbakekrevingvalg]);
  const vedtakstatusTekst = useMemo(() => finnVedtakstatusTekst(behandlingsresultat, intl, ytelseTypeKode), [behandlingsresultat]);

  const previewOverstyrtBrev = getPreviewManueltBrevCallback(formProps, begrunnelse, brødtekst, overskrift, true, previewCallback);
  const previewDefaultBrev = getPreviewManueltBrevCallback(formProps, begrunnelse, brødtekst, overskrift, false, previewCallback);

  return (
    <>
      {ytelseTypeKode === fagsakYtelseType.SVANGERSKAPSPENGER && (
        <VedtakFritekstbrevModal
          readOnly={readOnly}
          behandlingsresultat={behandlingsresultat}
        />
      )}
      <VedtakFellesPanel
        behandling={behandling}
        vedtakstatusTekst={vedtakstatusTekst}
        aksjonspunkter={aksjonspunkter}
        readOnly={readOnly}
        previewAutomatiskBrev={previewDefaultBrev}
        previewOverstyrtBrev={previewOverstyrtBrev}
        tilbakekrevingtekst={tilbakekrevingtekst}
        erBehandlingEtterKlage={erBehandlingEtterKlage}
        handleSubmit={formProps.handleSubmit}
        submitting={formProps.submitting}
        clearFormField={clearFormField}
        renderPanel={(skalBrukeOverstyrendeFritekstBrev, erInnvilget, erAvslatt) => {
          if (erInnvilget) {
            return (
              <VedtakInnvilgetPanel
                behandlingsresultat={behandlingsresultat}
                readOnly={readOnly}
                skalBrukeOverstyrendeFritekstBrev={skalBrukeOverstyrendeFritekstBrev}
                ytelseTypeKode={ytelseTypeKode}
                sprakkode={sprakkode}
                resultatstruktur={resultatstruktur}
                beregningErManueltFastsatt={beregningErManueltFastsatt}
              />
            );
          }

          return erAvslatt ? (
            <VedtakAvslagPanel
              behandlingStatusKode={status.kode}
              behandlingsresultat={behandlingsresultat}
              readOnly={readOnly}
              ytelseTypeKode={ytelseTypeKode}
              sprakkode={sprakkode}
              alleKodeverk={alleKodeverk}
              vilkar={vilkar}
              beregningErManueltFastsatt={beregningErManueltFastsatt}
              skalBrukeOverstyrendeFritekstBrev={skalBrukeOverstyrendeFritekstBrev}
            />
          ) : null;
        }}
      />
    </>
  );
};

export const buildInitialValues = createSelector(
  [(ownProps: PureOwnProps) => ownProps.aksjonspunkter,
    (ownProps: PureOwnProps) => ownProps.behandling,
    ((ownProps: PureOwnProps) => ownProps.beregningErManueltFastsatt)],
  (aksjonspunkter, behandling, beregningErManueltFastsatt): FormValues => ({
    beregningErManueltFastsatt,
    aksjonspunktKoder: aksjonspunkter.filter((ap) => ap.kanLoses).map((ap) => ap.definisjon.kode),
    overskrift: decodeHtmlEntity(behandling.behandlingsresultat.overskrift),
    brødtekst: decodeHtmlEntity(behandling.behandlingsresultat.fritekstbrev),
  }),
);

const transformValues = (values: FormValues): VedtakAksjonspunkter[] => values.aksjonspunktKoder.map((apCode) => ({
  kode: validerApKodeOgHentApEnum(apCode, AksjonspunktCode.FORESLA_VEDTAK,
    AksjonspunktCode.FORESLA_VEDTAK_MANUELT,
    AksjonspunktCode.VEDTAK_UTEN_TOTRINNSKONTROLL,
    AksjonspunktCode.VURDERE_ANNEN_YTELSE,
    AksjonspunktCode.VURDERE_DOKUMENT),
  begrunnelse: values.begrunnelse,
  fritekstBrev: values.brødtekst,
  skalBrukeOverstyrendeFritekstBrev: !!values.brødtekst,
  overskrift: values.overskrift,
}));

const formName = 'VedtakForm';

const lagSubmitFn = createSelector([(ownProps: PureOwnProps) => ownProps.submitCallback],
  (submitCallback) => (values: FormValues) => submitCallback(transformValues(values)));

const mapStateToProps = (state, ownProps: PureOwnProps): MappedOwnProps => ({
  onSubmit: lagSubmitFn(ownProps),
  initialValues: buildInitialValues(ownProps),
  ...formValueSelector(formName)(
    state,
    'aksjonspunktKoder',
    'begrunnelse',
    'overskrift',
    'brødtekst',
  ),
});

const mapDispatchToProps = (dispatch): DispatchProps => ({
  ...bindActionCreators({
    clearFormField: (fieldId) => change(formName, fieldId, null),
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: formName,
  destroyOnUnmount: false,
})(injectIntl(VedtakForm)));
