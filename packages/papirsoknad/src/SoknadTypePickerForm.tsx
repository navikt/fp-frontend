import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Box, Button, Heading, HStack, VStack } from '@navikt/ds-react';
import { Form, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';

import { FagsakYtelseType, FamilieHendelseType } from '@navikt/fp-kodeverk';
import { SoknadData } from '@navikt/fp-papirsoknad-ui-komponenter';
import type { AlleKodeverk } from '@navikt/fp-types';

export const SØKNAD_TYPER = [FamilieHendelseType.ADOPSJON, FamilieHendelseType.FODSEL];

interface FormValues {
  fagsakYtelseType?: string;
  familieHendelseType?: string;
  foreldreType?: string;
}

interface Props {
  setSoknadData: (soknadData: SoknadData) => void;
  fagsakYtelseType: string;
  alleKodeverk: AlleKodeverk;
}

/**
 * SoknadTypePickerForm
 *
 * Toppkomponent for registrering av papirsøknad der søknadstype, tema og søker/foreldretype blir valgt.
 */
export const SoknadTypePickerForm = ({ setSoknadData, fagsakYtelseType, alleKodeverk }: Props) => {
  const formMethods = useForm<FormValues>({
    defaultValues: {
      fagsakYtelseType,
      familieHendelseType: undefined,
      foreldreType: undefined,
    },
  });

  const selectedFagsakYtelseType = formMethods.watch('fagsakYtelseType');

  const onSubmit = useCallback(
    (values: FormValues) =>
      setSoknadData(new SoknadData(values.fagsakYtelseType!, values.familieHendelseType!, values.foreldreType!)),
    [setSoknadData],
  );

  const fagsakYtelseTyper = alleKodeverk['FagsakYtelseType'];
  const familieHendelseTyper = alleKodeverk['FamilieHendelseType'];
  const foreldreTyper = alleKodeverk['ForeldreType'];

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <Box background="bg-subtle" borderColor="border-default" borderWidth="1">
        <VStack gap="4" padding="5">
          <Heading size="small">
            <FormattedMessage id="Registrering.Omsoknaden.Title" />
          </Heading>

          <HStack gap="20">
            <RadioGroupPanel
              label={<FormattedMessage id="Registrering.Omsoknaden.soknadstype" />}
              name="fagsakYtelseType"
              validate={[required]}
              radios={fagsakYtelseTyper.map(fyt => ({
                label: fyt.navn,
                value: fyt.kode,
              }))}
              disabled={true}
            />

            {selectedFagsakYtelseType !== FagsakYtelseType.SVANGERSKAPSPENGER && (
              <RadioGroupPanel
                name="familieHendelseType"
                label={<FormattedMessage id="Registrering.Omsoknaden.Tema" />}
                validate={[required]}
                radios={familieHendelseTyper
                  .filter(({ kode }) => SØKNAD_TYPER.some(st => st === kode))
                  .map(bmt => ({
                    label: bmt.navn,
                    value: bmt.kode,
                  }))}
              />
            )}

            <RadioGroupPanel
              name="foreldreType"
              label={<FormattedMessage id="Registrering.Omsoknaden.Soker" />}
              validate={[required]}
              radios={foreldreTyper.map(ft => ({
                label: ft.navn,
                value: ft.kode,
              }))}
            />
          </HStack>

          <Box style={{ textAlign: 'end' }}>
            <Button type="submit" disabled={formMethods.formState.isSubmitting || formMethods.formState.isSubmitted}>
              <FormattedMessage id="Registrering.Omsoknaden.VisSkjema" />
            </Button>
          </Box>
        </VStack>
      </Box>
    </Form>
  );
};
