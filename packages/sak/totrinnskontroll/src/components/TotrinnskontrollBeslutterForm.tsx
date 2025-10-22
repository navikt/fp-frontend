import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Button, HStack, Link, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import { decodeHtmlEntity } from '@navikt/ft-utils';
import { type Location } from 'history';

import type {
  FagsakBehandlingDto,
  KodeverkMedNavn,
  KodeverkMedNavnTilbakekreving,
  KonsekvensForYtelsen,
  SkjermlenkeType,
  TotrinnskontrollSkjermlenkeContext,
  VurderÅrsak,
} from '@navikt/fp-types';

import { erTilbakekrevingBehandling } from '../../../../utils/src/tilbakekrevingUtils';
import {
  type AksjonspunktGodkjenningData,
  AksjonspunktGodkjenningFieldArray,
} from './AksjonspunktGodkjenningFieldArray';

const erAlleGodkjent = (formState: AksjonspunktGodkjenningData[] = []) =>
  formState.every(ap => ap.totrinnskontrollGodkjent);

const erAlleGodkjentEllerAvvist = (formState: AksjonspunktGodkjenningData[] = []) =>
  formState.every(ap => ap.totrinnskontrollGodkjent !== undefined);

const harIkkeKonsekvenserForYtelsen = (
  konsekvenserForYtelsenKoder: KonsekvensForYtelsen[],
  behandling: FagsakBehandlingDto,
) => {
  if (!behandling.behandlingsresultat || erTilbakekrevingBehandling(behandling)) {
    return true;
  }
  const { konsekvenserForYtelsen } = behandling.behandlingsresultat;
  if (!Array.isArray(konsekvenserForYtelsen) || konsekvenserForYtelsen.length !== 1) {
    return true;
  }
  return !konsekvenserForYtelsenKoder.some(kode => kode === konsekvenserForYtelsen[0]);
};

const finnArsaker = (vurderPaNyttArsaker: VurderÅrsak[]) =>
  vurderPaNyttArsaker.reduce((acc, arsak) => {
    if (arsak === 'FEIL_FAKTA') {
      return { ...acc, feilFakta: true };
    }
    if (arsak === 'FEIL_LOV') {
      return { ...acc, feilLov: true };
    }
    if (arsak === 'FEIL_REGEL') {
      return { ...acc, feilSkjønn: true };
    }
    if (arsak === 'SKJØNN') {
      return { ...acc, feilSkjønn: true };
    }
    if (arsak === 'UTREDNING') {
      return { ...acc, feilUtredning: true };
    }
    if (arsak === 'SAKSFLYT' || arsak === 'ANNET') {
      return { ...acc, feilSaksflyt: true };
    }
    if (arsak === 'BEGRUNNELSE') {
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
      ...finnArsaker(ap.vurderPaNyttArsaker),
    })),
});

interface Props {
  behandling: FagsakBehandlingDto;
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
  const erKlage = behandling.type === 'BT-003';
  const erAnke = behandling.type === 'BT-008';
  const harIkkeKonsekvensForYtelse = harIkkeKonsekvenserForYtelsen(
    ['ENDRING_I_FORDELING_AV_YTELSEN', 'INGEN_ENDRING'],
    behandling,
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
