import React, { FunctionComponent, useMemo } from 'react';
import { connect } from 'react-redux';
import {
  FieldArray, formValueSelector, InjectedFormProps, reduxForm,
} from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { createSelector } from 'reselect';
import { Location } from 'history';
import { Hovedknapp } from 'nav-frontend-knapper';

import vurderPaNyttArsakType from '@fpsak-frontend/kodeverk/src/vurderPaNyttArsakType';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import konsekvensForYtelsen from '@fpsak-frontend/kodeverk/src/konsekvensForYtelsen';
import { ariaCheck, isRequiredMessage, decodeHtmlEntity } from '@fpsak-frontend/utils';
import { VerticalSpacer, AksjonspunktHelpTextHTML } from '@fpsak-frontend/shared-components';
import {
  Behandling, Kodeverk, KodeverkMedNavn, KlageVurdering, TotrinnskontrollAksjonspunkt, TotrinnskontrollSkjermlenkeContext,
} from '@fpsak-frontend/types';

import AksjonspunktGodkjenningFieldArray, { AksjonspunktGodkjenningData } from './AksjonspunktGodkjenningFieldArray';

import styles from './totrinnskontrollBeslutterForm.less';

const erAlleGodkjent = (formState: TotrinnskontrollAksjonspunkt[] = []) => formState
  .every((ap) => ap.totrinnskontrollGodkjent && ap.totrinnskontrollGodkjent === true);

const erAlleGodkjentEllerAvvist = (formState: TotrinnskontrollAksjonspunkt[] = []) => formState
  .every((ap) => ap.totrinnskontrollGodkjent !== null);

const harIkkeKonsekvenserForYtelsen = (konsekvenserForYtelsenKoder: string[], behandlingResultat?: Behandling['behandlingsresultat']) => {
  if (!behandlingResultat) {
    return true;
  }
  const { konsekvenserForYtelsen } = behandlingResultat;
  if (!Array.isArray(konsekvenserForYtelsen) || konsekvenserForYtelsen.length !== 1) {
    return true;
  }
  return !konsekvenserForYtelsenKoder.some((kode) => kode === konsekvenserForYtelsen[0].kode);
};

export type FormValues = {
  aksjonspunktGodkjenning: AksjonspunktGodkjenningData[];
};

interface PureOwnProps {
  behandling: Behandling;
  totrinnskontrollSkjermlenkeContext: TotrinnskontrollSkjermlenkeContext[];
  forhandsvisVedtaksbrev: () => void;
  behandlingKlageVurdering?: KlageVurdering;
  erBehandlingEtterKlage?: boolean;
  readOnly: boolean;
  erTilbakekreving: boolean;
  erForeldrepengerFagsak: boolean;
  arbeidsforholdHandlingTyper: KodeverkMedNavn[],
  skjemalenkeTyper: KodeverkMedNavn[];
  faktaOmBeregningTilfeller: KodeverkMedNavn[];
  lagLenke: (skjermlenkeCode: string) => Location;
}

interface MappedOwnProps {
  initialValues: FormValues;
  aksjonspunktGodkjenning: TotrinnskontrollAksjonspunkt[];
}

/*
  * TotrinnskontrollBeslutterForm
  *
  * Presentasjonskomponent. Holds the form of the totrinnkontroll
  */
export const TotrinnskontrollBeslutterForm: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps<FormValues>> = ({
  behandling,
  handleSubmit,
  forhandsvisVedtaksbrev,
  readOnly,
  erBehandlingEtterKlage,
  behandlingKlageVurdering,
  erForeldrepengerFagsak,
  arbeidsforholdHandlingTyper,
  skjemalenkeTyper,
  erTilbakekreving,
  aksjonspunktGodkjenning,
  totrinnskontrollSkjermlenkeContext,
  faktaOmBeregningTilfeller,
  lagLenke,
  ...formProps
}) => {
  const erKlage = behandlingKlageVurdering && (!!behandlingKlageVurdering.klageVurderingResultatNFP || !!behandlingKlageVurdering.klageVurderingResultatNK);
  const erAnke = behandling && behandling.type.kode === BehandlingType.ANKE;
  const harIkkeKonsekvensForYtelse = useMemo(() => harIkkeKonsekvenserForYtelsen([
    konsekvensForYtelsen.ENDRING_I_FORDELING_AV_YTELSEN, konsekvensForYtelsen.INGEN_ENDRING,
  ], behandling.behandlingsresultat), [behandling.behandlingsresultat]);

  if (!behandling.toTrinnsBehandling) {
    return null;
  }

  return (
    <form name="toTrinn" onSubmit={handleSubmit}>
      {!readOnly && (
        <>
          <AksjonspunktHelpTextHTML>
            {[<FormattedMessage key={1} id="HelpText.ToTrinnsKontroll" />]}
          </AksjonspunktHelpTextHTML>
          <VerticalSpacer sixteenPx />
        </>
      )}
      <FieldArray
        name="aksjonspunktGodkjenning"
        component={AksjonspunktGodkjenningFieldArray}
        erForeldrepengerFagsak={erForeldrepengerFagsak}
        klagebehandlingVurdering={behandlingKlageVurdering}
        behandlingStatus={behandling.status}
        erTilbakekreving={erTilbakekreving}
        arbeidsforholdHandlingTyper={arbeidsforholdHandlingTyper}
        readOnly={readOnly}
        klageKA={!!behandlingKlageVurdering?.klageVurderingResultatNK}
        totrinnskontrollSkjermlenkeContext={totrinnskontrollSkjermlenkeContext}
        skjemalenkeTyper={skjemalenkeTyper}
        faktaOmBeregningTilfeller={faktaOmBeregningTilfeller}
        lagLenke={lagLenke}
      />
      <div className={styles.buttonRow}>
        <Hovedknapp
          mini
          disabled={!erAlleGodkjent(aksjonspunktGodkjenning) || !erAlleGodkjentEllerAvvist(aksjonspunktGodkjenning) || formProps.submitting}
          spinner={formProps.submitting}
        >
          <FormattedMessage id="ToTrinnsForm.Godkjenn" />
        </Hovedknapp>
        <Hovedknapp
          mini
          disabled={erAlleGodkjent(aksjonspunktGodkjenning) || !erAlleGodkjentEllerAvvist(aksjonspunktGodkjenning) || formProps.submitting}
          spinner={formProps.submitting}
          onClick={ariaCheck}
        >
          <FormattedMessage id="ToTrinnsForm.SendTilbake" />
        </Hovedknapp>
        {!erKlage && !erBehandlingEtterKlage && !erAnke && !erTilbakekreving && harIkkeKonsekvensForYtelse && (
          <>
            <VerticalSpacer eightPx />
            <button
              type="button"
              className={styles.buttonLink}
              onClick={forhandsvisVedtaksbrev}
            >
              <FormattedMessage id="ToTrinnsForm.ForhandvisBrev" />
            </button>
          </>
        )}
      </div>
    </form>
  );
};

const validate = (values: FormValues) => {
  const errors = {};
  if (!values.aksjonspunktGodkjenning) {
    return errors;
  }

  return {
    aksjonspunktGodkjenning: values.aksjonspunktGodkjenning.map((kontekst) => {
      if (!kontekst.feilFakta && !kontekst.feilLov && !kontekst.feilRegel && !kontekst.annet) {
        return {
          missingArsakError: isRequiredMessage(),
        };
      }

      return undefined;
    }),
  };
};

const finnArsaker = (vurderPaNyttArsaker: Kodeverk[]) => vurderPaNyttArsaker.reduce((acc, arsak) => {
  if (arsak.kode === vurderPaNyttArsakType.FEIL_FAKTA) {
    return { ...acc, feilFakta: true };
  }
  if (arsak.kode === vurderPaNyttArsakType.FEIL_LOV) {
    return { ...acc, feilLov: true };
  }
  if (arsak.kode === vurderPaNyttArsakType.FEIL_REGEL) {
    return { ...acc, feilRegel: true };
  }
  if (arsak.kode === vurderPaNyttArsakType.ANNET) {
    return { ...acc, annet: true };
  }
  return {};
}, {});

const buildInitialValues = createSelector([(ownProps: PureOwnProps) => ownProps.totrinnskontrollSkjermlenkeContext],
  (totrinnskontrollContext): FormValues => ({
    aksjonspunktGodkjenning: totrinnskontrollContext
      .map((context) => context.totrinnskontrollAksjonspunkter)
      .flat()
      .map((ap) => ({
        aksjonspunktKode: ap.aksjonspunktKode,
        totrinnskontrollGodkjent: ap.totrinnskontrollGodkjent,
        besluttersBegrunnelse: decodeHtmlEntity(ap.besluttersBegrunnelse),
        ...finnArsaker(ap.vurderPaNyttArsaker),
      })),
  }));

const formName = 'toTrinnForm';

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  initialValues: buildInitialValues(ownProps),
  aksjonspunktGodkjenning: formValueSelector(formName)(state, 'aksjonspunktGodkjenning'),
});

export default connect(mapStateToProps)(reduxForm<FormValues>({
  form: formName,
  destroyOnUnmount: false,
  keepDirtyOnReinitialize: true,
  validate,
})(TotrinnskontrollBeslutterForm));
