import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Button, HStack, Link, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import { decodeHtmlEntity } from '@navikt/ft-utils';
import { type Location } from 'history';

import { BehandlingTypeEnum, KonsekvensForYtelsenEnum, SkjermlenkeType, VurderÅrsak } from '@navikt/fp-kodeverk';
import type {
  BehandlingAppKontekst,
  KodeverkMedNavn,
  KodeverkMedNavnTilbakekreving,
  TotrinnskontrollSkjermlenkeContext,
} from '@navikt/fp-types';

import {
  type AksjonspunktGodkjenningData,
  AksjonspunktGodkjenningFieldArray,
} from './AksjonspunktGodkjenningFieldArray';

const erAlleGodkjent = (formState: AksjonspunktGodkjenningData[] = []) =>
  formState.every(ap => ap.totrinnskontrollGodkjent);

const erAlleGodkjentEllerAvvist = (formState: AksjonspunktGodkjenningData[] = []) =>
  formState.every(ap => ap.totrinnskontrollGodkjent !== undefined && ap.totrinnskontrollGodkjent !== null);

const harIkkeKonsekvenserForYtelsen = (
  konsekvenserForYtelsenKoder: string[],
  behandlingResultat?: BehandlingAppKontekst['behandlingsresultat'],
) => {
  if (!behandlingResultat) {
    return true;
  }
  const { konsekvenserForYtelsen } = behandlingResultat;
  if (!Array.isArray(konsekvenserForYtelsen) || konsekvenserForYtelsen.length !== 1) {
    return true;
  }
  return !konsekvenserForYtelsenKoder.some(kode => kode === konsekvenserForYtelsen[0]);
};

const finnArsaker = (vurderPaNyttArsaker: string[]) =>
  vurderPaNyttArsaker.reduce((acc, arsak) => {
    if (arsak === VurderÅrsak.FEIL_FAKTA) {
      return { ...acc, feilFakta: true };
    }
    if (arsak === VurderÅrsak.FEIL_LOV) {
      return { ...acc, feilLov: true };
    }
    if (arsak === VurderÅrsak.FEIL_REGEL) {
      return { ...acc, feilSkjønn: true };
    }
    if (arsak === VurderÅrsak.SKJØNN) {
      return { ...acc, feilSkjønn: true };
    }
    if (arsak === VurderÅrsak.UTREDNING) {
      return { ...acc, feilUtredning: true };
    }
    if (arsak === VurderÅrsak.SAKSFLYT || arsak === VurderÅrsak.ANNET) {
      return { ...acc, feilSaksflyt: true };
    }
    if (arsak === VurderÅrsak.BEGRUNNELSE) {
      return { ...acc, feilBegrunnelse: true };
    }
    return {};
  }, {});

export type FormValues = {
  aksjonspunktGodkjenning: AksjonspunktGodkjenningData[];
};

const buildInitialValues = (totrinnskontrollSkjermlenkeContext: TotrinnskontrollSkjermlenkeContext[]): FormValues => ({
  aksjonspunktGodkjenning: totrinnskontrollSkjermlenkeContext
    .map(context => context.totrinnskontrollAksjonspunkter)
    .flat()
    .map(ap => ({
      aksjonspunktKode: ap.aksjonspunktKode,
      totrinnskontrollGodkjent: ap.totrinnskontrollGodkjent,
      besluttersBegrunnelse: decodeHtmlEntity(ap.besluttersBegrunnelse ?? undefined),
      ...finnArsaker(ap.vurderPaNyttArsaker ? ap.vurderPaNyttArsaker : []),
    })),
});

interface Props {
  behandling: BehandlingAppKontekst;
  totrinnskontrollSkjermlenkeContext: TotrinnskontrollSkjermlenkeContext[];
  forhandsvisVedtaksbrev: () => void;
  readOnly: boolean;
  erTilbakekreving: boolean;
  erForeldrepengerFagsak: boolean;
  skjemalenkeTyper: KodeverkMedNavn<'SkjermlenkeType'>[] | KodeverkMedNavnTilbakekreving<'SkjermlenkeType'>[];
  erBehandlingEtterKlage: boolean;
  faktaOmBeregningTilfeller: KodeverkMedNavn<'FaktaOmBeregningTilfelle'>[];
  lagLenke: (skjermlenkeCode: SkjermlenkeType) => Location | undefined;
  onSubmit: (data: FormValues) => void;
  beslutterFormData?: FormValues;
  setBeslutterFormData: (data?: FormValues) => void;
}

export const TotrinnskontrollBeslutterForm = ({
  behandling,
  onSubmit,
  forhandsvisVedtaksbrev,
  readOnly,
  erBehandlingEtterKlage,
  erForeldrepengerFagsak,
  skjemalenkeTyper,
  erTilbakekreving,
  totrinnskontrollSkjermlenkeContext,
  faktaOmBeregningTilfeller,
  lagLenke,
  beslutterFormData,
  setBeslutterFormData,
}: Props) => {
  const erKlage = behandling && behandling.type === BehandlingTypeEnum.KLAGE;
  const erAnke = behandling && behandling.type === BehandlingTypeEnum.ANKE;
  const harIkkeKonsekvensForYtelse = harIkkeKonsekvenserForYtelsen(
    [KonsekvensForYtelsenEnum.ENDRING_I_FORDELING_AV_YTELSEN, KonsekvensForYtelsenEnum.INGEN_ENDRING],
    behandling.behandlingsresultat,
  );

  const defaultValues = buildInitialValues(totrinnskontrollSkjermlenkeContext);
  const formMethods = useForm({
    defaultValues: beslutterFormData || defaultValues,
  });

  const aksjonspunktGodkjenning = formMethods.watch('aksjonspunktGodkjenning');

  if (!behandling.toTrinnsBehandling) {
    return null;
  }

  return (
    <RhfForm formMethods={formMethods} onSubmit={onSubmit} setDataOnUnmount={setBeslutterFormData}>
      <VStack gap="space-24">
        {!readOnly && (
          <AksjonspunktHelpTextHTML>
            <FormattedMessage id="HelpText.ToTrinnsKontroll" />
          </AksjonspunktHelpTextHTML>
        )}
        <AksjonspunktGodkjenningFieldArray
          behandling={behandling}
          erForeldrepengerFagsak={erForeldrepengerFagsak}
          erTilbakekreving={erTilbakekreving}
          readOnly={readOnly}
          totrinnskontrollSkjermlenkeContext={totrinnskontrollSkjermlenkeContext}
          skjemalenkeTyper={skjemalenkeTyper}
          faktaOmBeregningTilfeller={faktaOmBeregningTilfeller}
          lagLenke={lagLenke}
        />
        <HStack gap="space-16" style={{ marginBottom: '50px' }}>
          <Button
            variant="primary"
            size="small"
            disabled={
              !erAlleGodkjent(aksjonspunktGodkjenning) ||
              !erAlleGodkjentEllerAvvist(aksjonspunktGodkjenning) ||
              formMethods.formState.isSubmitting
            }
            loading={formMethods.formState.isSubmitting}
          >
            <FormattedMessage id="ToTrinnsForm.Godkjenn" />
          </Button>
          <Button
            variant="primary"
            size="small"
            disabled={
              erAlleGodkjent(aksjonspunktGodkjenning) ||
              !erAlleGodkjentEllerAvvist(aksjonspunktGodkjenning) ||
              formMethods.formState.isSubmitting
            }
            loading={formMethods.formState.isSubmitting}
          >
            <FormattedMessage id="ToTrinnsForm.SendTilbake" />
          </Button>
          {!erKlage && !erBehandlingEtterKlage && !erAnke && !erTilbakekreving && harIkkeKonsekvensForYtelse && (
            <Link href="#" onClick={forhandsvisVedtaksbrev}>
              <FormattedMessage id="ToTrinnsForm.ForhandvisBrev" />
            </Link>
          )}
        </HStack>
      </VStack>
    </RhfForm>
  );
};
