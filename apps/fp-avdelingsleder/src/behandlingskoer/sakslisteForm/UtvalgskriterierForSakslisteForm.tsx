import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, ExpansionCard, HGrid, HStack, VStack } from '@navikt/ds-react';
import { RhfForm, RhfTextarea, RhfTextField } from '@navikt/ft-form-hooks';
import { hasValidName, hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type {
  AndreKriterieDto,
  AndreKriterierType,
  KøSortering,
  LosBehandlingType,
  LosFagsakYtelseType,
  Periodefilter,
  SakslisteDto,
  SakslisteLagreDto,
} from '@navikt/fp-types';

import { lagreUtvalgskriterierForKø, LosUrl } from '../../data/fplosAvdelingslederApi';
import { AndreKriterierVelger } from './filtrering/AndreKriterierVelger';
import { BehandlingstypeVelger } from './filtrering/BehandlingstypeVelger';
import { FagsakYtelseTypeVelger } from './filtrering/FagsakYtelseTypeVelger';
import { TilBeslutterVelger } from './filtrering/TilBeslutterVelger';
import { SorteringVelger } from './sortering/SorteringVelger';

const minLength3 = minLength(3);
const maxLength100 = maxLength(100);

export type FormValues = {
  navn: string;
  beskrivelse: string;
  behandlingTyper: LosBehandlingType[];
  sortering: {
    sorteringType: KøSortering;
    periodefilter: Periodefilter;
    fra: number | null;
    til: number | null;
    fomDato: string | null;
    tomDato: string | null;
  };
  fagsakYtelseTyper: LosFagsakYtelseType[];
  andreKriterie: {
    inkluder: AndreKriterierType[];
    ekskluder: AndreKriterierType[];
  };
  tilBeslutter: TilBeslutter;
};

export type TilBeslutter = 'TA_MED_ALLE' | 'TA_MED' | 'FJERN';

interface Props {
  valgtSaksliste: SakslisteDto;
  valgtAvdelingEnhet: string;
}

export const UtvalgskriterierForSakslisteForm = ({ valgtSaksliste, valgtAvdelingEnhet }: Props) => {
  const intl = useIntl();
  const queryClient = useQueryClient();

  const formMethods = useForm<FormValues>({
    defaultValues: buildDefaultValues(valgtSaksliste),
  });

  const { mutate: lagreSaksliste, isPending } = useMutation({
    mutationFn: (valuesToStore: SakslisteLagreDto) => lagreUtvalgskriterierForKø(valuesToStore),
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
    <ExpansionCard
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
        <RhfForm formMethods={formMethods} onSubmit={lagre}>
          <VStack gap="space-16" maxWidth="2000px">
            <HStack justify="space-between">
              <RhfTextField
                name="navn"
                control={formMethods.control}
                label={<FormattedMessage id="Label.Navn" />}
                validate={[required, minLength3, maxLength100, hasValidName]}
                htmlSize={40}
              />
              <Button
                size="small"
                variant="primary"
                disabled={!formMethods.formState.isDirty || isPending}
                loading={isPending}
                data-color="info"
                className="self-start"
              >
                <FormattedMessage id="UtvalgskriterierForSakslisteForm.Lagre" />
              </Button>
            </HStack>

            <HGrid columns={{ md: 2, lg: 3 }} gap="space-20">
              <VStack gap="space-16">
                <RhfTextarea
                  name="beskrivelse"
                  control={formMethods.control}
                  label={<FormattedMessage id="Label.Beskrivelse" />}
                  validate={[minLength3, maxLength(250), hasValidText]}
                  maxLength={250}
                  minRows={3}
                  className="max-w-sm"
                />
                <FagsakYtelseTypeVelger />
                <BehandlingstypeVelger />
                <TilBeslutterVelger />
              </VStack>
              <AndreKriterierVelger />
              <SorteringVelger muligeSorteringer={valgtSaksliste.sorteringTyper} />
            </HGrid>
          </VStack>
        </RhfForm>
      </ExpansionCard.Content>
    </ExpansionCard>
  );
};

const buildDefaultValues = (valgtSaksliste: SakslisteDto): FormValues => {
  return {
    navn: valgtSaksliste.navn,
    beskrivelse: valgtSaksliste.beskrivelse ?? '',
    sortering: {
      sorteringType: valgtSaksliste.sortering.sorteringType,
      periodefilter: valgtSaksliste.sortering.periodefilter,
      fra: valgtSaksliste.sortering.fra ?? null,
      til: valgtSaksliste.sortering.til ?? null,
      fomDato: valgtSaksliste.sortering.fomDato ?? null,
      tomDato: valgtSaksliste.sortering.tomDato ?? null,
    },
    tilBeslutter: fraAndreKriterierTilBeslutter(valgtSaksliste.andreKriterie),
    andreKriterie: valgtSaksliste.andreKriterie,
    behandlingTyper: valgtSaksliste.behandlingTyper,
    fagsakYtelseTyper: valgtSaksliste.fagsakYtelseTyper,
  };
};

const fraAndreKriterierTilBeslutter = (andreKriterier?: AndreKriterieDto): TilBeslutter => {
  if (andreKriterier?.inkluder.includes('TIL_BESLUTTER')) {
    return 'TA_MED';
  } else if (andreKriterier?.ekskluder.includes('TIL_BESLUTTER')) {
    return 'FJERN';
  } else {
    return 'TA_MED_ALLE';
  }
};

const transformValues = (values: FormValues, valgtAvdelingEnhet: string, sakslisteId: number): SakslisteLagreDto => {
  const { tilBeslutter, andreKriterie, sortering, beskrivelse, ...rest } = values;
  const inkluder = andreKriterie.inkluder.filter((t): t is AndreKriterierType => t !== 'TIL_BESLUTTER');
  const ekskluder = andreKriterie.ekskluder.filter((t): t is AndreKriterierType => t !== 'TIL_BESLUTTER');
  if (tilBeslutter === 'TA_MED') {
    inkluder.push('TIL_BESLUTTER');
  } else if (tilBeslutter === 'FJERN') {
    ekskluder.push('TIL_BESLUTTER');
  }

  return {
    ...rest,
    beskrivelse: beskrivelse === '' ? undefined : beskrivelse,
    andreKriterie: {
      inkluder,
      ekskluder,
    },
    sortering: {
      ...sortering,
      fra: sortering.fra ?? undefined,
      til: sortering.til ?? undefined,
      fomDato: sortering.fomDato ?? undefined,
      tomDato: sortering.tomDato ?? undefined,
    },
    avdelingEnhet: valgtAvdelingEnhet,
    sakslisteId: sakslisteId,
  };
};
