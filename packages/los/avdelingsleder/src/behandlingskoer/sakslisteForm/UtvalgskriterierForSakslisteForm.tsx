import { useForm } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { BodyShort, Box, Heading, HStack, VStack } from '@navikt/ds-react';
import { Form, InputField } from '@navikt/ft-form-hooks';
import { hasValidName, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { lagreSakslisteNavn, LosUrl, oppgaveAntallOptions } from '../../data/fplosAvdelingslederApi';
import type { SakslisteAvdeling } from '../../typer/sakslisteAvdelingTsType';
import { AndreKriterierVelger } from './filtrering/AndreKriterierVelger';
import { BehandlingstypeVelger } from './filtrering/BehandlingstypeVelger';
import { FagsakYtelseTypeVelger } from './filtrering/FagsakYtelseTypeVelger';
import { SorteringVelger } from './sortering/SorteringVelger';
import { useDebounce } from './useDebounce';

import styles from './utvalgskriterierForSakslisteForm.module.css';

const minLength3 = minLength(3);
const maxLength100 = maxLength(100);

type FormValues = {
  sakslisteId: number;
  navn: string;
  sortering?: string;
  erDynamiskPeriode?: boolean;
  fra?: string;
  til?: string;
  fomDato?: string;
  tomDato?: string;
};

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

  return {
    sakslisteId: valgtSaksliste.sakslisteId,
    navn: valgtSaksliste.navn ?? intl.formatMessage({ id: 'UtvalgskriterierForSakslisteForm.NyListe' }),
    sortering: valgtSaksliste.sortering ? valgtSaksliste.sortering.sorteringType : undefined,
    fomDato: valgtSaksliste.sortering ? valgtSaksliste.sortering.fomDato : undefined,
    tomDato: valgtSaksliste.sortering ? valgtSaksliste.sortering.tomDato : undefined,
    fra: valgtSaksliste.sortering ? valgtSaksliste.sortering.fra?.toString() : undefined,
    til: valgtSaksliste.sortering ? valgtSaksliste.sortering.til?.toString() : undefined,
    erDynamiskPeriode: valgtSaksliste.sortering ? valgtSaksliste.sortering.erDynamiskPeriode : undefined,
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

  const { data: antallOppgaver } = useQuery(oppgaveAntallOptions(valgtSaksliste.sakslisteId, valgtAvdelingEnhet));

  const { mutate: lagreSakslistensNavn } = useMutation({
    mutationFn: (values: { sakslisteId: number; navn: string; avdelingEnhet: string }) =>
      lagreSakslisteNavn(values.sakslisteId, values.navn, values.avdelingEnhet),
    onSuccess: () => {
      queryClient.invalidateQueries({
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
    <Form formMethods={formMethods}>
      <Box padding="5" borderColor="border-divider" borderRadius="0" borderWidth="1">
        <VStack gap="2">
          <Heading size="small">
            <FormattedMessage id="UtvalgskriterierForSakslisteForm.Utvalgskriterier" />
          </Heading>
          <VStack gap="4">
            <HStack justify="space-between">
              <InputField
                name="navn"
                label={intl.formatMessage({ id: 'UtvalgskriterierForSakslisteForm.Navn' })}
                validate={[required, minLength3, maxLength100, hasValidName]}
                onChange={lagreNavn}
                className={styles.bredde}
              />
              <Box padding="2" background="bg-subtle">
                <BodyShort size="small">
                  <FormattedMessage id="UtvalgskriterierForSakslisteForm.AntallSaker" />
                </BodyShort>
                <Heading size="small">{antallOppgaver ? `${antallOppgaver}` : '0'}</Heading>
              </Box>
            </HStack>
            <HStack justify="space-between">
              <div>
                <FagsakYtelseTypeVelger
                  valgtSakslisteId={valgtSaksliste.sakslisteId}
                  valgtAvdelingEnhet={valgtAvdelingEnhet}
                />
                <BehandlingstypeVelger
                  valgtSakslisteId={valgtSaksliste.sakslisteId}
                  valgtAvdelingEnhet={valgtAvdelingEnhet}
                />
              </div>
              <div>
                <AndreKriterierVelger
                  valgtSakslisteId={valgtSaksliste.sakslisteId}
                  valgtAvdelingEnhet={valgtAvdelingEnhet}
                />
              </div>
              <div>
                <SorteringVelger
                  valgtSakslisteId={valgtSaksliste.sakslisteId}
                  valgteBehandlingtyper={valgtSaksliste.behandlingTyper}
                  valgtAvdelingEnhet={valgtAvdelingEnhet}
                  erDynamiskPeriode={!!values.erDynamiskPeriode}
                />
              </div>
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </Form>
  );
};
