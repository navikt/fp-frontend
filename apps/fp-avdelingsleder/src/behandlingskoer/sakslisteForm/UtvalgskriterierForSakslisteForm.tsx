import { useForm } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { Button, ExpansionCard, HStack, VStack } from '@navikt/ds-react';
import { RhfForm, RhfTextField } from '@navikt/ft-form-hooks';
import { hasValidName, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { AndreKriterierType } from '@navikt/fp-types';

import { lagreUtvalgskriterierForKø, LosUrl } from '../../data/fplosAvdelingslederApi';
import {
  type AnnetKriterie,
  type SakslisteAvdeling,
  type SakslisteDto,
  type TilBeslutter,
} from '../../typer/sakslisteAvdelingTsType';
import { AndreKriterierVelger } from './filtrering/AndreKriterierVelger';
import { type FormValues as AndreKriterieValgKnappFormTypes } from './filtrering/AndreKriterieValgKnapp';
import {
  BehandlingstypeVelger,
  type FormValues as BehandlingstypeVelgerFormValues,
} from './filtrering/BehandlingstypeVelger';
import {
  FagsakYtelseTypeVelger,
  type FormValues as FagsakYtelseTypeVelgerFormValues,
} from './filtrering/FagsakYtelseTypeVelger';
import { type FormValues as TilBeslutterFormValues, TilBeslutterVelger } from './filtrering/TilBeslutterVelger';
import { type FormValues as SorteringVelgerFormValues, SorteringVelger } from './sortering/SorteringVelger';

import styles from './utvalgskriterierForSakslisteForm.module.css';

const minLength3 = minLength(3);
const maxLength100 = maxLength(100);

type FormValues = {
  navn: string;
} & AndreKriterieValgKnappFormTypes &
  BehandlingstypeVelgerFormValues &
  FagsakYtelseTypeVelgerFormValues &
  SorteringVelgerFormValues &
  TilBeslutterFormValues;

interface Props {
  valgtSaksliste: SakslisteAvdeling;
  valgtAvdelingEnhet: string;
}

export const UtvalgskriterierForSakslisteForm = ({ valgtSaksliste, valgtAvdelingEnhet }: Props) => {
  const intl = useIntl();
  const queryClient = useQueryClient();

  const formMethods = useForm<FormValues>({
    defaultValues: buildDefaultValues(intl, valgtSaksliste),
    //shouldUnregister: true,
  });
  console.log('formMethods.watch()', formMethods.watch());

  const { mutate: lagreSaksliste, isPending } = useMutation({
    mutationFn: (valuesToStore: SakslisteDto) => lagreUtvalgskriterierForKø(valuesToStore),
  });

  const lagre = (values: FormValues) => {
    lagreSaksliste(transformValues(values, valgtAvdelingEnhet, valgtSaksliste.sakslisteId), {
      onSuccess: () => {
        formMethods.reset(values);
        void queryClient.invalidateQueries({
          queryKey: [LosUrl.OPPGAVE_ANTALL, valgtSaksliste.sakslisteId, valgtAvdelingEnhet],
        });
        void queryClient.invalidateQueries({
          queryKey: [LosUrl.OPPGAVE_AVDELING_ANTALL],
        });
        void queryClient.invalidateQueries({
          queryKey: [LosUrl.SAKSLISTER_FOR_AVDELING],
        });
      },
    });
  };

  return (
    <RhfForm formMethods={formMethods} onSubmit={lagre}>
      <ExpansionCard
        className={styles['expansion-card']}
        size="small"
        defaultOpen
        aria-label={intl.formatMessage({ id: 'UtvalgskriterierForSakslisteForm.Utvalgskriterier' })}
      >
        <ExpansionCard.Header>
          <ExpansionCard.Title>
            <FormattedMessage id="UtvalgskriterierForSakslisteForm.Utvalgskriterier" />
          </ExpansionCard.Title>
        </ExpansionCard.Header>
        <ExpansionCard.Content>
          <div style={{ maxWidth: '2000px' }}>
            <VStack gap="space-8">
              <HStack justify="end">
                <Button
                  size="small"
                  variant="primary"
                  disabled={!formMethods.formState.isDirty || isPending}
                  loading={isPending}
                  data-color="info"
                >
                  <FormattedMessage id="UtvalgskriterierForSakslisteForm.Lagre" />
                </Button>
              </HStack>
              <HStack justify="space-between">
                <VStack gap="space-24" padding="space-20">
                  <RhfTextField
                    name="navn"
                    control={formMethods.control}
                    label={intl.formatMessage({ id: 'UtvalgskriterierForSakslisteForm.Navn' })}
                    validate={[required, minLength3, maxLength100, hasValidName]}
                    className={styles['bredde']}
                  />
                  <FagsakYtelseTypeVelger />
                  <BehandlingstypeVelger />
                  <TilBeslutterVelger />
                </VStack>
                <AndreKriterierVelger />
                <SorteringVelger
                  valgteBehandlingtyper={formMethods.watch('behandlingTyper')}
                  muligeSorteringer={valgtSaksliste.sorteringTyper}
                />
              </HStack>
            </VStack>
          </div>
        </ExpansionCard.Content>
      </ExpansionCard>
    </RhfForm>
  );
};

const buildDefaultValues = (intl: IntlShape, valgtSaksliste: SakslisteAvdeling): FormValues => {
  return {
    navn: valgtSaksliste.navn ?? intl.formatMessage({ id: 'UtvalgskriterierForSakslisteForm.NyListe' }),
    sortering: valgtSaksliste.sortering,
    tilBeslutter: fraAndreKriterierTilBeslutter(valgtSaksliste.andreKriterie),
    andreKriterie: valgtSaksliste.andreKriterie,
    behandlingTyper: valgtSaksliste.behandlingTyper ?? [],
    fagsakYtelseTyper: valgtSaksliste.fagsakYtelseTyper ?? [],
  };
};

const fraAndreKriterierTilBeslutter = (andreKriterier?: AnnetKriterie): TilBeslutter => {
  if (andreKriterier?.inkluder.includes('TIL_BESLUTTER')) {
    return 'TA_MED';
  } else if (andreKriterier?.ekskluder.includes('TIL_BESLUTTER')) {
    return 'FJERN';
  } else {
    return 'TA_MED_ALLE';
  }
};

const transformValues = (values: FormValues, valgtAvdelingEnhet: string, sakslisteId: number): SakslisteDto => {
  const { tilBeslutter, andreKriterie, ...rest } = values;
  const inkluder = andreKriterie.inkluder.filter((t): t is AndreKriterierType => t !== 'TIL_BESLUTTER');
  const ekskluder = andreKriterie.ekskluder.filter((t): t is AndreKriterierType => t !== 'TIL_BESLUTTER');
  if (tilBeslutter === 'TA_MED') {
    inkluder.push('TIL_BESLUTTER');
  } else if (tilBeslutter === 'FJERN') {
    ekskluder.push('TIL_BESLUTTER');
  }
  return {
    ...rest,
    andreKriterie: {
      inkluder,
      ekskluder,
    },
    avdelingEnhet: valgtAvdelingEnhet,
    sakslisteId: sakslisteId,
  };
};
