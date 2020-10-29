import React, { FunctionComponent, useMemo } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { InjectedFormProps, FieldArray } from 'redux-form';
import { Hovedknapp } from 'nav-frontend-knapper';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import konsekvensForYtelsen from '@fpsak-frontend/kodeverk/src/konsekvensForYtelsen';
import { ariaCheck, isRequiredMessage } from '@fpsak-frontend/utils';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { behandlingForm, behandlingFormValueSelector } from '@fpsak-frontend/form';
import {
  Behandling, Kodeverk, KodeverkMedNavn, TotrinnsKlageVurdering, TotrinnskontrollAksjonspunkt, TotrinnskontrollSkjermlenkeContext,
} from '@fpsak-frontend/types';

import AksjonspunktGodkjenningFieldArray from './AksjonspunktGodkjenningFieldArray';
import TotrinnContext from '../TotrinnContextTsType';

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

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  totrinnskontrollSkjermlenkeContext?: TotrinnskontrollSkjermlenkeContext[];
  forhandsvisVedtaksbrev: () => void;
  behandlingKlageVurdering?: TotrinnsKlageVurdering;
  behandlingsresultat?: Behandling['behandlingsresultat'];
  erBehandlingEtterKlage?: boolean;
  readOnly: boolean;
  erTilbakekreving: boolean;
  behandlingStatus: Kodeverk;
  erForeldrepengerFagsak: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

interface MappedOwnProps {
  aksjonspunkter: TotrinnskontrollAksjonspunkt[];
  aksjonspunktGodkjenning: TotrinnskontrollAksjonspunkt[];
}

/*
  * TotrinnskontrollBeslutterForm
  *
  * Presentasjonskomponent. Holds the form of the totrinnkontroll
  */
const TotrinnskontrollBeslutterForm: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps> = ({
  handleSubmit,
  forhandsvisVedtaksbrev,
  readOnly,
  erBehandlingEtterKlage,
  behandlingKlageVurdering,
  behandlingStatus,
  erForeldrepengerFagsak,
  alleKodeverk,
  erTilbakekreving,
  behandlingsresultat,
  aksjonspunktGodkjenning,
  totrinnskontrollSkjermlenkeContext,
  ...formProps
}) => {
  const erKlage = behandlingKlageVurdering && (!!behandlingKlageVurdering.klageVurderingResultatNFP || !!behandlingKlageVurdering.klageVurderingResultatNK);

  const harIkkeKonsekvensForYtelse = useMemo(() => harIkkeKonsekvenserForYtelsen([
    konsekvensForYtelsen.ENDRING_I_FORDELING_AV_YTELSEN, konsekvensForYtelsen.INGEN_ENDRINGbehandlingsresultat,
  ], behandlingsresultat), [behandlingsresultat]);

  return (
    <form name="toTrinn" onSubmit={handleSubmit}>
      <FieldArray
        name="aksjonspunktGodkjenning"
        component={AksjonspunktGodkjenningFieldArray}
        erForeldrepengerFagsak={erForeldrepengerFagsak}
        klagebehandlingVurdering={behandlingKlageVurdering}
        behandlingStatus={behandlingStatus}
        erTilbakekreving={erTilbakekreving}
        arbeidsforholdHandlingTyper={alleKodeverk[kodeverkTyper.ARBEIDSFORHOLD_HANDLING_TYPE]}
        readOnly={readOnly}
        klageKA={!!behandlingKlageVurdering?.klageVurderingResultatNK}
        totrinnskontrollSkjermlenkeContext={totrinnskontrollSkjermlenkeContext}
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
        {!erKlage && !erBehandlingEtterKlage && !erTilbakekreving && harIkkeKonsekvensForYtelse && (
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

type FormValues = {
  approvals?: TotrinnContext[];
}

const validate = (values: FormValues) => {
  const errors = {};
  if (!values.approvals) {
    return errors;
  }

  return {
    approvals: values.approvals.map((kontekst) => ({
      aksjonspunkter: kontekst.aksjonspunkter.map((ap) => {
        if (!ap.feilFakta && !ap.feilLov && !ap.feilRegel && !ap.annet) {
          return { missingArsakError: isRequiredMessage() };
        }

        return undefined;
      }),
    })),
  };
};

const formName = 'toTrinnForm';

const buildInitialValues = (totrinnskontrollContext: TotrinnskontrollSkjermlenkeContext[]) => ({
  aksjonspunktGodkjenning: totrinnskontrollContext
    .map((context) => context.totrinnskontrollAksjonspunkter)
    .flat()
    .map((ap) => ({
      totrinnskontrollGodkjent: ap.totrinnskontrollGodkjent,
    })),
});

const mapStateToProps = (state: any, ownProps: PureOwnProps) => {
  const initialValues = buildInitialValues(ownProps.totrinnskontrollSkjermlenkeContext);
  return {
    initialValues,
    aksjonspunktGodkjenning: behandlingFormValueSelector(formName, ownProps.behandlingId, ownProps.behandlingVersjon)(state, 'aksjonspunktGodkjenning'),
  };
};

export default connect(mapStateToProps)(behandlingForm({ form: formName, validate })(TotrinnskontrollBeslutterForm));
