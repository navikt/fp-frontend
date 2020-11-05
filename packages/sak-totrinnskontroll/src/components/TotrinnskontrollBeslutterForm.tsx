import React, { FunctionComponent, useMemo } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createSelector } from 'reselect';
import { InjectedFormProps, FieldArray } from 'redux-form';
import { Location } from 'history';
import { Hovedknapp } from 'nav-frontend-knapper';

import vurderPaNyttArsakType from '@fpsak-frontend/kodeverk/src/vurderPaNyttArsakType';

import konsekvensForYtelsen from '@fpsak-frontend/kodeverk/src/konsekvensForYtelsen';
import { ariaCheck, isRequiredMessage, decodeHtmlEntity } from '@fpsak-frontend/utils';
import { VerticalSpacer, AksjonspunktHelpTextHTML } from '@fpsak-frontend/shared-components';
import { behandlingForm, behandlingFormValueSelector } from '@fpsak-frontend/form';
import {
  Behandling, Kodeverk, KodeverkMedNavn, TotrinnsKlageVurdering, TotrinnskontrollAksjonspunkt, TotrinnskontrollSkjermlenkeContext,
} from '@fpsak-frontend/types';

import AksjonspunktGodkjenningFieldArray from './AksjonspunktGodkjenningFieldArray';

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
  behandling: Behandling;
  totrinnskontrollSkjermlenkeContext: TotrinnskontrollSkjermlenkeContext[];
  forhandsvisVedtaksbrev: () => void;
  behandlingKlageVurdering?: TotrinnsKlageVurdering;
  erBehandlingEtterKlage?: boolean;
  readOnly: boolean;
  erTilbakekreving: boolean;
  erForeldrepengerFagsak: boolean;
  arbeidsforholdHandlingTyper: KodeverkMedNavn[],
  skjemalenkeTyper: KodeverkMedNavn[];
  lagLenke: (skjermlenkeCode: string) => Location;
}

interface MappedOwnProps {
  aksjonspunktGodkjenning: TotrinnskontrollAksjonspunkt[];
}

/*
  * TotrinnskontrollBeslutterForm
  *
  * Presentasjonskomponent. Holds the form of the totrinnkontroll
  */
export const TotrinnskontrollBeslutterForm: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps> = ({
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
  lagLenke,
  ...formProps
}) => {
  const erKlage = behandlingKlageVurdering && (!!behandlingKlageVurdering.klageVurderingResultatNFP || !!behandlingKlageVurdering.klageVurderingResultatNK);

  const harIkkeKonsekvensForYtelse = useMemo(() => harIkkeKonsekvenserForYtelsen([
    konsekvensForYtelsen.ENDRING_I_FORDELING_AV_YTELSEN, konsekvensForYtelsen.INGEN_ENDRINGbehandlingsresultat,
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

export type AksjonspunktGodkjenningData = {
  aksjonspunktKode: string;
  totrinnskontrollGodkjent: boolean;
  besluttersBegrunnelse?: string;
  feilFakta?: boolean;
  feilRegel?: boolean;
  feilLov?: boolean;
  annet?: boolean;
}

export type FormValues = {
  aksjonspunktGodkjenning: AksjonspunktGodkjenningData[];
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

const mapStateToProps = (state: any, ownProps: PureOwnProps) => ({
  initialValues: buildInitialValues(ownProps),
  aksjonspunktGodkjenning: behandlingFormValueSelector(formName, ownProps.behandling.id, ownProps.behandling.versjon)(state, 'aksjonspunktGodkjenning'),
});

export default connect(mapStateToProps)(behandlingForm({ form: formName, validate })(TotrinnskontrollBeslutterForm));
