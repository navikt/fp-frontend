import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Button, HStack, Label, VStack } from '@navikt/ds-react';
import { RhfForm, RhfTextField } from '@navikt/ft-form-hooks';
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
      void queryClient.invalidateQueries({
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
  }, [saksbehandlerStatus, saksbehandler, erLagtTilAllerede, intl]);

  return (
    <RhfForm formMethods={formMethods} onSubmit={values => finnSaksbehandler({ brukerIdent: values.brukerIdent })}>
      <VStack gap="space-16">
        <Label size="small">
          <FormattedMessage id="LeggTilSaksbehandlerForm.LeggTil" />
        </Label>
        <HStack gap="space-16">
          <RhfTextField
            name="brukerIdent"
            control={formMethods.control}
            label={intl.formatMessage({ id: 'Label.Brukerident' })}
            validate={[required]}
          />
          <div className={styles['button']}>
            <Button
              size="small"
              variant="secondary"
              loading={formMethods.formState.isSubmitting}
              disabled={formMethods.formState.isSubmitting || isPending}
              tabIndex={0}
            >
              <FormattedMessage id="Label.Sok" />
            </Button>
          </div>
        </HStack>
        {saksbehandlerStatus === 'success' && (
          <VStack gap="space-8">
            <BodyShort size="small">{formattedText}</BodyShort>
            <HStack gap="space-16">
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
    </RhfForm>
  );
};
