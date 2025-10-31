import { useForm } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { Box, Heading, HStack, VStack } from '@navikt/ds-react';
import { RhfForm, RhfTextField } from '@navikt/ft-form-hooks';
import { hasValidName, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { lagreSakslisteNavn, LosUrl } from '../../data/fplosAvdelingslederApi';
import type { SakslisteAvdeling } from '../../typer/sakslisteAvdelingTsType';
import {
  AndreKriterierVelger,
  type FormValues as AndreKriterierVelgerFormTypes,
} from './filtrering/AndreKriterierVelger';
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
import { useDebounce } from './useDebounce';

import styles from './utvalgskriterierForSakslisteForm.module.css';

const minLength3 = minLength(3);
const maxLength100 = maxLength(100);

type FormValues = {
  sakslisteId: number;
  navn: string;
} & AndreKriterierVelgerFormTypes &
  BehandlingstypeVelgerFormValues &
  FagsakYtelseTypeVelgerFormValues &
  SorteringVelgerFormValues &
  TilBeslutterFormValues;

const buildDefaultValues = (intl: IntlShape, valgtSaksliste: SakslisteAvdeling): FormValues => {
  const behandlingTypes = valgtSaksliste.behandlingTyper
    ? valgtSaksliste.behandlingTyper.reduce((acc, bt) => ({ ...acc, [bt]: true }), {})
    : {};
  const fagsakYtelseTypes = valgtSaksliste.fagsakYtelseTyper
    ? valgtSaksliste.fagsakYtelseTyper.reduce((acc, fyt) => ({ ...acc, [fyt]: true }), {})
    : {};

  const andreKriterierTyper = valgtSaksliste.andreKriterier
    ? valgtSaksliste.andreKriterier.reduce((acc, ak) => ({ ...acc, [ak.andreKriterierType]: true }), {})
    : {};
  const andreKriterierInkluder = valgtSaksliste.andreKriterier
    ? valgtSaksliste.andreKriterier.reduce(
        (acc, ak) => ({ ...acc, [`${ak.andreKriterierType}_inkluder`]: ak.inkluder }),
        {},
      )
    : {};

  const tilBeslutterKriterie = valgtSaksliste.andreKriterier?.find(ak => ak.andreKriterierType === 'TIL_BESLUTTER');

  let tilBeslutter: 'TA_MED_ALLE' | 'TA_MED' | 'FJERN' = 'TA_MED_ALLE';
  if (tilBeslutterKriterie) {
    tilBeslutter = tilBeslutterKriterie.inkluder ? 'TA_MED' : 'FJERN';
  }

  return {
    sakslisteId: valgtSaksliste.sakslisteId,
    navn: valgtSaksliste.navn ?? intl.formatMessage({ id: 'UtvalgskriterierForSakslisteForm.NyListe' }),
    sortering: valgtSaksliste.sortering ? valgtSaksliste.sortering.sorteringType : undefined,
    fomDato: valgtSaksliste.sortering ? valgtSaksliste.sortering.fomDato : undefined,
    tomDato: valgtSaksliste.sortering ? valgtSaksliste.sortering.tomDato : undefined,
    fra: valgtSaksliste.sortering ? valgtSaksliste.sortering.fra?.toString() : undefined,
    til: valgtSaksliste.sortering ? valgtSaksliste.sortering.til?.toString() : undefined,
    erDynamiskPeriode: valgtSaksliste.sortering ? valgtSaksliste.sortering.erDynamiskPeriode : undefined,
    tilBeslutter,
    ...andreKriterierTyper,
    ...andreKriterierInkluder,
    ...behandlingTypes,
    ...fagsakYtelseTypes,
  };
};

interface Props {
  valgtSaksliste: SakslisteAvdeling;
  valgtAvdelingEnhet: string;
}

export const UtvalgskriterierForSakslisteForm = ({ valgtSaksliste, valgtAvdelingEnhet }: Props) => {
  const queryClient = useQueryClient();
  const intl = useIntl();

  const { mutate: lagreSakslistensNavn } = useMutation({
    mutationFn: (values: { sakslisteId: number; navn: string; avdelingEnhet: string }) =>
      lagreSakslisteNavn(values.sakslisteId, values.navn, values.avdelingEnhet),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.SAKSLISTER_FOR_AVDELING],
      });
    },
  });

  const formMethods = useForm<FormValues>({
    defaultValues: buildDefaultValues(intl, valgtSaksliste),
  });

  const values = formMethods.watch();

  const tranformValues = (nyttNavn: string): void => {
    lagreSakslistensNavn({
      sakslisteId: valgtSaksliste.sakslisteId,
      navn: nyttNavn,
      avdelingEnhet: valgtAvdelingEnhet,
    });
  };
  const lagreNavn = useDebounce('navn', tranformValues, formMethods.trigger);

  return (
    <RhfForm formMethods={formMethods}>
      <Box.New padding="5">
        <VStack gap="space-8">
          <Heading size="small" level="2">
            <FormattedMessage id="UtvalgskriterierForSakslisteForm.Utvalgskriterier" />
          </Heading>
          <HStack gap="space-44" wrap={false}>
            <Box.New borderWidth="1" borderColor="neutral-subtle" padding="10">
              <VStack gap="space-24">
                <RhfTextField
                  name="navn"
                  control={formMethods.control}
                  label={intl.formatMessage({ id: 'UtvalgskriterierForSakslisteForm.Navn' })}
                  validate={[required, minLength3, maxLength100, hasValidName]}
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- [JOHANNES] bedre typede forms
                  onChange={value => lagreNavn(value)}
                  className={styles['bredde']}
                />
                <FagsakYtelseTypeVelger
                  valgtSakslisteId={valgtSaksliste.sakslisteId}
                  valgtAvdelingEnhet={valgtAvdelingEnhet}
                />
                <BehandlingstypeVelger
                  valgtSakslisteId={valgtSaksliste.sakslisteId}
                  valgtAvdelingEnhet={valgtAvdelingEnhet}
                />
                <TilBeslutterVelger
                  valgtSakslisteId={valgtSaksliste.sakslisteId}
                  valgtAvdelingEnhet={valgtAvdelingEnhet}
                />
              </VStack>
            </Box.New>
            <AndreKriterierVelger
              valgtSakslisteId={valgtSaksliste.sakslisteId}
              valgtAvdelingEnhet={valgtAvdelingEnhet}
            />
            <SorteringVelger
              valgtSakslisteId={valgtSaksliste.sakslisteId}
              valgteBehandlingtyper={valgtSaksliste.behandlingTyper}
              valgtAvdelingEnhet={valgtAvdelingEnhet}
              erDynamiskPeriode={!!values.erDynamiskPeriode}
            />
          </HStack>
        </VStack>
      </Box.New>
    </RhfForm>
  );
};
