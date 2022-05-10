import React, { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { Location } from 'history';
import { Hovedknapp } from 'nav-frontend-knapper';

import { Form } from '@navikt/ft-form-hooks';
import vurderPaNyttArsakType from '@fpsak-frontend/kodeverk/src/vurderPaNyttArsakType';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import konsekvensForYtelsen from '@fpsak-frontend/kodeverk/src/konsekvensForYtelsen';
import { ariaCheck } from '@navikt/ft-form-validators';
import { decodeHtmlEntity } from '@navikt/ft-utils';
import { VerticalSpacer, AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import {
  Behandling, KodeverkMedNavn, KlageVurdering, TotrinnskontrollAksjonspunkt, TotrinnskontrollSkjermlenkeContext,
} from '@fpsak-frontend/types';

import AksjonspunktGodkjenningFieldArray, { AksjonspunktGodkjenningData } from './AksjonspunktGodkjenningFieldArray';

import styles from './totrinnskontrollBeslutterForm.less';

const erAlleGodkjent = (formState: TotrinnskontrollAksjonspunkt[] = []) => formState
  .every((ap) => ap.totrinnskontrollGodkjent);

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
  return !konsekvenserForYtelsenKoder.some((kode) => kode === konsekvenserForYtelsen[0]);
};

const finnArsaker = (vurderPaNyttArsaker: string[]) => vurderPaNyttArsaker.reduce((acc, arsak) => {
  if (arsak === vurderPaNyttArsakType.FEIL_FAKTA) {
    return { ...acc, feilFakta: true };
  }
  if (arsak === vurderPaNyttArsakType.FEIL_LOV) {
    return { ...acc, feilLov: true };
  }
  if (arsak === vurderPaNyttArsakType.FEIL_REGEL) {
    return { ...acc, feilRegel: true };
  }
  if (arsak === vurderPaNyttArsakType.ANNET) {
    return { ...acc, annet: true };
  }
  return {};
}, {});

export type FormValues = {
  aksjonspunktGodkjenning: AksjonspunktGodkjenningData[];
};

const buildInitialValues = (totrinnskontrollSkjermlenkeContext: TotrinnskontrollSkjermlenkeContext[]): FormValues => ({
  aksjonspunktGodkjenning: totrinnskontrollSkjermlenkeContext
    .map((context) => context.totrinnskontrollAksjonspunkter)
    .flat()
    .map((ap) => ({
      aksjonspunktKode: ap.aksjonspunktKode,
      totrinnskontrollGodkjent: ap.totrinnskontrollGodkjent,
      besluttersBegrunnelse: decodeHtmlEntity(ap.besluttersBegrunnelse),
      ...finnArsaker(ap.vurderPaNyttArsaker ? ap.vurderPaNyttArsaker : []),
    })),
});

interface OwnProps {
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
  lagLenke: (skjermlenkeCode: string) => Location | undefined;
  onSubmit: (data: FormValues) => void;
  beslutterFormData?: any;
  setBeslutterForData: (data?: any) => void;
}

/*
  * TotrinnskontrollBeslutterForm
  *
  * Presentasjonskomponent. Holds the form of the totrinnkontroll
  */
export const TotrinnskontrollBeslutterForm: FunctionComponent<OwnProps> = ({
  behandling,
  onSubmit,
  forhandsvisVedtaksbrev,
  readOnly,
  erBehandlingEtterKlage,
  behandlingKlageVurdering,
  erForeldrepengerFagsak,
  arbeidsforholdHandlingTyper,
  skjemalenkeTyper,
  erTilbakekreving,
  totrinnskontrollSkjermlenkeContext,
  faktaOmBeregningTilfeller,
  lagLenke,
  beslutterFormData,
  setBeslutterForData,
}) => {
  const erKlage = behandlingKlageVurdering && (!!behandlingKlageVurdering.klageVurderingResultatNFP || !!behandlingKlageVurdering.klageVurderingResultatNK);
  const erAnke = behandling && behandling.type === BehandlingType.ANKE;
  const harIkkeKonsekvensForYtelse = useMemo(() => harIkkeKonsekvenserForYtelsen([
    konsekvensForYtelsen.ENDRING_I_FORDELING_AV_YTELSEN, konsekvensForYtelsen.INGEN_ENDRING,
  ], behandling.behandlingsresultat), [behandling.behandlingsresultat]);

  const defaultValues = useMemo(() => buildInitialValues(totrinnskontrollSkjermlenkeContext), [totrinnskontrollSkjermlenkeContext]);
  const formMethods = useForm({
    defaultValues: beslutterFormData || defaultValues,
  });

  const aksjonspunktGodkjenning = formMethods.watch('aksjonspunktGodkjenning');

  if (!behandling.toTrinnsBehandling) {
    return null;
  }

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit} className={styles.container} setDataOnUnmount={setBeslutterForData}>
      {!readOnly && (
        <>
          <AksjonspunktHelpTextHTML>
            {[<FormattedMessage key={1} id="HelpText.ToTrinnsKontroll" />]}
          </AksjonspunktHelpTextHTML>
          <VerticalSpacer sixteenPx />
        </>
      )}
      <AksjonspunktGodkjenningFieldArray
        erForeldrepengerFagsak={erForeldrepengerFagsak}
        klagebehandlingVurdering={behandlingKlageVurdering}
        behandlingStatus={behandling.status}
        erTilbakekreving={erTilbakekreving}
        arbeidsforholdHandlingTyper={arbeidsforholdHandlingTyper}
        readOnly={readOnly}
        klageKA={behandlingKlageVurdering ? !!behandlingKlageVurdering.klageVurderingResultatNK : undefined}
        totrinnskontrollSkjermlenkeContext={totrinnskontrollSkjermlenkeContext}
        skjemalenkeTyper={skjemalenkeTyper}
        faktaOmBeregningTilfeller={faktaOmBeregningTilfeller}
        lagLenke={lagLenke}
      />
      <div className={styles.buttonRow}>
        <Hovedknapp
          mini
          disabled={!erAlleGodkjent(aksjonspunktGodkjenning) || !erAlleGodkjentEllerAvvist(aksjonspunktGodkjenning) || formMethods.formState.isSubmitting}
          spinner={formMethods.formState.isSubmitting}
        >
          <FormattedMessage id="ToTrinnsForm.Godkjenn" />
        </Hovedknapp>
        <Hovedknapp
          mini
          disabled={erAlleGodkjent(aksjonspunktGodkjenning) || !erAlleGodkjentEllerAvvist(aksjonspunktGodkjenning) || formMethods.formState.isSubmitting}
          spinner={formMethods.formState.isSubmitting}
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
    </Form>
  );
};

export default TotrinnskontrollBeslutterForm;
