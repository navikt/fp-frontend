import React, { FunctionComponent, useMemo } from 'react';
import { connect } from 'react-redux';
import { change, InjectedFormProps } from 'redux-form';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import { injectIntl, IntlShape, WrappedComponentProps } from 'react-intl';
import moment from 'moment';

import {
  DDMMYYYY_DATE_FORMAT, decodeHtmlEntity, getKodeverknavnFn,
} from '@fpsak-frontend/utils';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { isAvslag, isInnvilget, isOpphor } from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import BehandlingArsakType from '@fpsak-frontend/kodeverk/src/behandlingArsakType';

import {
  KodeverkMedNavn, Behandling, BeregningsresultatFp, BeregningsresultatEs, Vilkar,
  Aksjonspunkt, SimuleringResultat, Kodeverk, TilbakekrevingValg,
} from '@fpsak-frontend/types';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import { behandlingForm, behandlingFormValueSelector, getBehandlingFormPrefix } from '@fpsak-frontend/form';

import vedtakResultType from '../../kodeverk/vedtakResultType';
import VedtakInnvilgetRevurderingPanel from './VedtakInnvilgetRevurderingPanel';
import VedtakAvslagArsakOgBegrunnelsePanel from './VedtakAvslagArsakOgBegrunnelsePanel';
import VedtakOpphorRevurderingPanel from './VedtakOpphorRevurderingPanel';
import VedtakFellesPanel from '../felles/VedtakFellesPanel';
import { getTilbakekrevingText } from '../felles/VedtakHelper';
import VedtakFritekstbrevModal from '../felles/svp/VedtakFritekstbrevModal';

type ForhandsvisData = {
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
  previewCallback: (data: ForhandsvisData) => void,
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
  .some((bt) => bt.kode === BehandlingArsakType.ETTER_KLAGE
    || bt.kode === BehandlingArsakType.KLAGE_U_INNTK
    || bt.kode === BehandlingArsakType.KLAGE_M_INNTK);

const createAarsakString = (
  revurderingAarsaker: Kodeverk[],
  getKodeverknavn: (kodeverk: Kodeverk) => string,
): string | undefined => {
  if (revurderingAarsaker === undefined || revurderingAarsaker.length < 1) {
    return undefined;
  }
  const aarsakTekstList = [];
  const endringFraBrukerAarsak = revurderingAarsaker
    .find((aarsak) => aarsak.kode === BehandlingArsakType.RE_ENDRING_FRA_BRUKER);
  const alleAndreAarsakerNavn = revurderingAarsaker
    .filter((aarsak) => aarsak.kode !== BehandlingArsakType.RE_ENDRING_FRA_BRUKER)
    .map((aarsak) => getKodeverknavn(aarsak));
  // Dersom en av årsakene er "RE_ENDRING_FRA_BRUKER" skal alltid denne vises først
  if (endringFraBrukerAarsak !== undefined) {
    aarsakTekstList.push(getKodeverknavn(endringFraBrukerAarsak));
  }
  aarsakTekstList.push(...alleAndreAarsakerNavn);
  return aarsakTekstList.join(', ');
};

const isNewBehandlingResult = (
  beregningResultat?: BeregningsresultatFp | BeregningsresultatEs,
  originaltBeregningResultat?: BeregningsresultatFp | BeregningsresultatEs,
): boolean => {
  const vedtakResult = beregningResultat ? vedtakResultType.INNVILGET : vedtakResultType.AVSLAG;
  const vedtakResultOriginal = originaltBeregningResultat ? vedtakResultType.INNVILGET : vedtakResultType.AVSLAG;
  return vedtakResultOriginal !== vedtakResult;
};

export const lagKonsekvensForYtelsenTekst = (
  getKodeverknavn: (kodeverk: Kodeverk) => string,
  konsekvenser?: Behandling['behandlingsresultat']['konsekvenserForYtelsen'],
): string => {
  if (!konsekvenser || konsekvenser.length < 1) {
    return '';
  }
  return konsekvenser.map((k) => getKodeverknavn(k)).join(' og ');
};

const isNewAmount = (
  erInnvilget: boolean,
  beregningResultat?: BeregningsresultatFp | BeregningsresultatEs,
  originaltBeregningResultat?: BeregningsresultatFp | BeregningsresultatEs,
): boolean => {
  if (!beregningResultat) {
    return false;
  }

  if (!originaltBeregningResultat) {
    return true;
  }

  if (erInnvilget
    && 'beregnetTilkjentYtelse' in beregningResultat
    && 'beregnetTilkjentYtelse' in originaltBeregningResultat) {
    return beregningResultat.beregnetTilkjentYtelse !== originaltBeregningResultat.beregnetTilkjentYtelse;
  }

  if ('antallBarn' in beregningResultat
    && 'antallBarn' in originaltBeregningResultat) {
    return beregningResultat.antallBarn !== originaltBeregningResultat.antallBarn;
  }
  return false;
};

const resultText = (
  erInnvilget: boolean,
  beregningResultat?: BeregningsresultatFp | BeregningsresultatEs,
  originaltBeregningResultat?: BeregningsresultatFp | BeregningsresultatEs,
): string => {
  if (isNewBehandlingResult(beregningResultat, originaltBeregningResultat)) {
    return beregningResultat ? 'VedtakForm.Resultat.EndretTilInnvilget' : 'VedtakForm.Resultat.EndretTilAvslag';
  }
  if (erInnvilget) {
    return isNewAmount(erInnvilget, beregningResultat, originaltBeregningResultat)
      ? 'VedtakForm.Resultat.EndretTilkjentYtelse'
      : 'VedtakForm.Resultat.IngenEndring';
  }
  return isNewAmount(erInnvilget, beregningResultat, originaltBeregningResultat)
    ? 'VedtakForm.Resultat.EndretAntallBarn'
    : 'VedtakForm.Resultat.IngenEndring';
};

const finnInvilgetRevurderingTekst = (
  intl: IntlShape,
  ytelseTypeKode: string,
  getKodeverknavn: (kodeverk: Kodeverk) => string,
  tilbakekrevingText: string,
  konsekvenserForYtelsen?: Behandling['behandlingsresultat']['konsekvenserForYtelsen'],
  beregningResultat?: BeregningsresultatFp | BeregningsresultatEs,
  originaltBeregningResultat?: BeregningsresultatFp | BeregningsresultatEs,
): string => {
  if (ytelseTypeKode === fagsakYtelseType.ENGANGSSTONAD) {
    return intl.formatMessage({ id: resultText(true, beregningResultat, originaltBeregningResultat) });
  }
  const konsekvens = lagKonsekvensForYtelsenTekst(getKodeverknavn, konsekvenserForYtelsen);
  return `${konsekvens}${konsekvens !== '' ? tilbakekrevingText : '. '}`;
};

const getOpphorsdato = (
  resultatstruktur?: BeregningsresultatFp | BeregningsresultatEs,
  medlemskapFom?: string,
  behandlingsresultat?: Behandling['behandlingsresultat'],
): string => {
  if (resultatstruktur && 'opphoersdato' in resultatstruktur && resultatstruktur.opphoersdato) {
    return resultatstruktur.opphoersdato;
  }
  if (medlemskapFom) {
    return medlemskapFom;
  }
  return behandlingsresultat.skjæringstidspunkt
    ? behandlingsresultat.skjæringstidspunkt.dato : '';
};

const finnVedtakstatusTekst = (
  intl: IntlShape,
  ytelseTypeKode: string,
  getKodeverknavn: (kodeverk: Kodeverk) => string,
  tilbakekrevingtekst: string,
  behandlingsresultat?: Behandling['behandlingsresultat'],
  resultatstruktur?: BeregningsresultatFp | BeregningsresultatEs,
  resultatstrukturOriginalBehandling?: BeregningsresultatFp | BeregningsresultatEs,
  medlemskapFom?: string,
): string => {
  const konsekvenserForYtelsen = behandlingsresultat !== undefined ? behandlingsresultat.konsekvenserForYtelsen : undefined;
  if (isInnvilget(behandlingsresultat.type.kode)) {
    return finnInvilgetRevurderingTekst(intl, ytelseTypeKode, getKodeverknavn, tilbakekrevingtekst,
      konsekvenserForYtelsen, resultatstruktur, resultatstrukturOriginalBehandling);
  }
  if (isAvslag(behandlingsresultat.type.kode)) {
    return intl.formatMessage({ id: resultText(false, resultatstruktur, resultatstrukturOriginalBehandling) });
  }
  if (isOpphor(behandlingsresultat.type.kode)) {
    return intl.formatMessage({
      id: ytelseTypeKode === fagsakYtelseType.SVANGERSKAPSPENGER
        ? 'VedtakForm.RevurderingSVP.SvangerskapspengerOpphoerer' : 'VedtakForm.RevurderingFP.ForeldrepengerOpphoerer',
    }, { dato: moment(getOpphorsdato(resultatstruktur, medlemskapFom, behandlingsresultat)).format(DDMMYYYY_DATE_FORMAT) });
  }
  return '';
};

interface FormValues {
  aksjonspunktKoder?: string[];
  begrunnelse?: string;
  brødtekst?: string;
  overskrift?: string;
}

interface PureOwnProps {
  behandling: Behandling;
  readOnly: boolean;
  aksjonspunkter: Aksjonspunkt[];
  previewCallback: (data: ForhandsvisData) => void,
  ytelseTypeKode: string;
  resultatstruktur?: BeregningsresultatFp | BeregningsresultatEs;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  tilbakekrevingvalg?: TilbakekrevingValg;
  simuleringResultat?: SimuleringResultat;
  vilkar?: Vilkar[];
  beregningErManueltFastsatt: boolean;
  medlemskapFom?: string;
  resultatstrukturOriginalBehandling?: BeregningsresultatFp | BeregningsresultatEs;
  behandlingId: number;
  behandlingVersjon: number;
  submitCallback: (data: any) => void;
}

interface MappedOwnProps {
  begrunnelse?: string;
  brødtekst?: string;
  overskrift?: string;
  onSubmit: (formValues: FormValues) => any;
  initialValues: FormValues;
}

interface DispatchProps {
  clearFormField: (fieldId: string) => void;
}

export const VedtakRevurderingForm: FunctionComponent<PureOwnProps & MappedOwnProps & DispatchProps & InjectedFormProps & WrappedComponentProps> = ({
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
  medlemskapFom,
  resultatstrukturOriginalBehandling,
  clearFormField,
  ...formProps
}) => {
  const {
    behandlingsresultat, sprakkode, status, behandlingÅrsaker,
  } = behandling;

  const erBehandlingEtterKlage = useMemo(() => erArsakTypeBehandlingEtterKlage(behandling.behandlingÅrsaker), [behandling.behandlingÅrsaker]);
  const revurderingsAarsakString = useMemo(() => createAarsakString(behandlingÅrsaker
    .map((arsak) => arsak.behandlingArsakType), getKodeverknavnFn(alleKodeverk, kodeverkTyper)), [behandlingÅrsaker]);
  const tilbakekrevingtekst = useMemo(() => getTilbakekrevingText(alleKodeverk, simuleringResultat, tilbakekrevingvalg), [
    simuleringResultat, tilbakekrevingvalg]);

  // TODO (TOR) Kan ein forenkle dette? Frykteleg mykje kode for utleding av ein enkel tekst
  const vedtakstatusTekst = useMemo(() => finnVedtakstatusTekst(intl, ytelseTypeKode, getKodeverknavnFn(alleKodeverk, kodeverkTyper),
    tilbakekrevingtekst, behandlingsresultat, resultatstruktur, resultatstrukturOriginalBehandling, medlemskapFom), [
    behandlingsresultat, tilbakekrevingtekst, resultatstruktur, medlemskapFom]);

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
        renderPanel={(skalBrukeOverstyrendeFritekstBrev, erInnvilget, erAvslatt, erOpphor) => {
          if (erInnvilget) {
            return (
              <VedtakInnvilgetRevurderingPanel
                ytelseTypeKode={ytelseTypeKode}
                revurderingsAarsakString={revurderingsAarsakString}
                readOnly={readOnly}
                resultatstruktur={resultatstruktur}
                sprakKode={sprakkode}
                behandlingsresultat={behandlingsresultat}
                beregningErManueltFastsatt={beregningErManueltFastsatt}
                skalBrukeOverstyrendeFritekstBrev={skalBrukeOverstyrendeFritekstBrev}
              />
            );
          }

          if (erAvslatt) {
            return (
              <VedtakAvslagArsakOgBegrunnelsePanel
                behandlingStatusKode={status.kode}
                vilkar={vilkar}
                behandlingsresultat={behandlingsresultat}
                sprakkode={sprakkode}
                readOnly={readOnly}
                alleKodeverk={alleKodeverk}
                skalBrukeOverstyrendeFritekstBrev={skalBrukeOverstyrendeFritekstBrev}
              />
            );
          }

          return erOpphor ? (
            <VedtakOpphorRevurderingPanel
              revurderingsAarsakString={revurderingsAarsakString}
              readOnly={readOnly}
              behandlingsresultat={behandlingsresultat}
              sprakKode={sprakkode}
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
    (ownProps: PureOwnProps) => ownProps.behandling],
  (aksjonspunkter, behandling): FormValues => ({
    aksjonspunktKoder: aksjonspunkter.filter((ap) => ap.kanLoses).map((ap) => ap.definisjon.kode),
    overskrift: decodeHtmlEntity(behandling.behandlingsresultat.overskrift),
    brødtekst: decodeHtmlEntity(behandling.behandlingsresultat.fritekstbrev),
  }),
);

const transformValues = (values: FormValues): any => values.aksjonspunktKoder.map((apCode) => ({
  kode: apCode,
  begrunnelse: values.begrunnelse,
  fritekstBrev: values.brødtekst,
  skalBrukeOverstyrendeFritekstBrev: !!values.brødtekst,
  overskrift: values.overskrift,
  isVedtakSubmission: true,
}));

export const VEDTAK_REVURDERING_FORM_NAME = 'VEDTAK_REVURDERING_FORM';

const lagSubmitFn = createSelector([(ownProps: PureOwnProps) => ownProps.submitCallback],
  (submitCallback) => (values: FormValues) => submitCallback(transformValues(values)));

const mapStateToProps = (state, ownProps: PureOwnProps): MappedOwnProps => ({
  onSubmit: lagSubmitFn(ownProps),
  initialValues: buildInitialValues(ownProps),
  ...behandlingFormValueSelector(VEDTAK_REVURDERING_FORM_NAME, ownProps.behandling.id, ownProps.behandling.versjon)(
    state,
    'aksjonspunktKoder',
    'begrunnelse',
    'overskrift',
    'brødtekst',
  ),
});

const mapDispatchToProps = (dispatch, ownProps: PureOwnProps): DispatchProps => ({
  ...bindActionCreators({
    clearFormField: (fieldId) => change(`${getBehandlingFormPrefix(
      ownProps.behandlingId, ownProps.behandlingVersjon,
    )}.${VEDTAK_REVURDERING_FORM_NAME}`, fieldId, null),
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(behandlingForm({
  form: VEDTAK_REVURDERING_FORM_NAME,
})(injectIntl(VedtakRevurderingForm)));
