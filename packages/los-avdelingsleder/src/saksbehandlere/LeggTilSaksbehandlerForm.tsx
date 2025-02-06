import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Button, HStack, Label, VStack } from '@navikt/ds-react';
import { Form, InputField } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { SaksbehandlerProfil } from '@navikt/fp-los-felles';

import { LosUrl, opprettNySaksbehandler, saksbehandlgerSøk } from '../data/fplosAvdelingslederApi';

import styles from './leggTilSaksbehandlerForm.module.css';

type FormValues = {
  brukerIdent: string;
};

interface Props {
  valgtAvdelingEnhet: string;
  avdelingensSaksbehandlere: SaksbehandlerProfil[];
}

export const LeggTilSaksbehandlerForm = ({ valgtAvdelingEnhet, avdelingensSaksbehandlere }: Props) => {
  const queryClient = useQueryClient();
  const intl = useIntl();

  const formMethods = useForm<FormValues>();

  const {
    mutate: finnSaksbehandler,
    data: saksbehandler,
    status: saksbehandlerStatus,
    reset: resetSaksbehandlerSøk,
  } = useMutation({
    mutationFn: (valuesToStore: { brukerIdent: string }) => saksbehandlgerSøk(valuesToStore.brukerIdent),
  });

  const { mutate: leggTilSaksbehandler, isPending } = useMutation({
    mutationFn: (valuesToStore: { brukerIdent: string; avdelingEnhet: string }) =>
      opprettNySaksbehandler(valuesToStore.brukerIdent, valuesToStore.avdelingEnhet),
    onSuccess: () => {
      resetSaksbehandlerSøk();
      formMethods.reset();
      queryClient.invalidateQueries({
        queryKey: [LosUrl.SAKSBEHANDLERE_FOR_AVDELING],
      });
    },
  });

  const erLagtTilAllerede = avdelingensSaksbehandlere.some(
    s => saksbehandler && s.brukerIdent.toLowerCase() === saksbehandler.brukerIdent.toLowerCase(),
  );

  const leggTilSaksbehandlerFn = () => {
    if (saksbehandler) {
      leggTilSaksbehandler({
        brukerIdent: saksbehandler.brukerIdent,
        avdelingEnhet: valgtAvdelingEnhet,
      });
    }
  };

  const formattedText = useMemo((): string => {
    if (saksbehandlerStatus === 'success' && !saksbehandler) {
      return intl.formatMessage({ id: 'LeggTilSaksbehandlerForm.FinnesIkke' });
    }
    if (!saksbehandler) {
      return '';
    }

    return erLagtTilAllerede
      ? `${saksbehandler.navn} (${intl.formatMessage({ id: 'LeggTilSaksbehandlerForm.FinnesAllerede' })})`
      : saksbehandler.navn;
  }, [saksbehandlerStatus, saksbehandler, erLagtTilAllerede]);

  return (
    <Form formMethods={formMethods} onSubmit={values => finnSaksbehandler({ brukerIdent: values.brukerIdent })}>
      <VStack gap="4">
        <Label size="small">
          <FormattedMessage id="LeggTilSaksbehandlerForm.LeggTil" />
        </Label>
        <HStack gap="4">
          <InputField
            name="brukerIdent"
            label={intl.formatMessage({ id: 'LeggTilSaksbehandlerForm.Brukerident' })}
            validate={[required]}
          />
          <div className={styles.button}>
            <Button
              size="small"
              variant="secondary"
              loading={formMethods.formState.isSubmitting}
              disabled={formMethods.formState.isSubmitting || isPending}
              tabIndex={0}
            >
              <FormattedMessage id="LeggTilSaksbehandlerForm.Sok" />
            </Button>
          </div>
        </HStack>
        {saksbehandlerStatus === 'success' && (
          <VStack gap="2">
            <BodyShort size="small">{formattedText}</BodyShort>
            <HStack gap="4">
              <Button
                size="small"
                variant="primary"
                autoFocus
                onClick={() => leggTilSaksbehandlerFn()}
                loading={isPending}
                disabled={isPending || erLagtTilAllerede || !saksbehandler}
                type="button"
              >
                <FormattedMessage id="LeggTilSaksbehandlerForm.LeggTilIListen" />
              </Button>
              <Button
                size="small"
                variant="secondary"
                tabIndex={0}
                disabled={isPending}
                onClick={() => {
                  resetSaksbehandlerSøk();
                  formMethods.reset();
                }}
                type="button"
              >
                <FormattedMessage id="LeggTilSaksbehandlerForm.Nullstill" />
              </Button>
            </HStack>
          </VStack>
        )}
      </VStack>
    </Form>
  );
};
