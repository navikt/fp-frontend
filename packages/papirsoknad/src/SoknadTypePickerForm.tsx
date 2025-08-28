import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Box, Button, Heading, HStack, Radio, VStack } from '@navikt/ds-react';
import { RhfForm, RhfRadioGroupNew } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';

import { FagsakYtelseType, FamilieHendelseType } from '@navikt/fp-kodeverk';
import { SoknadData } from '@navikt/fp-papirsoknad-ui-komponenter';
import type { AlleKodeverk } from '@navikt/fp-types';

const SØKNAD_TYPER = [FamilieHendelseType.ADOPSJON, FamilieHendelseType.FODSEL];

type FormValues = {
  fagsakYtelseType: string;
  familieHendelseType: string;
  foreldreType: string;
};

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

  const fagsakYtelseTyper = alleKodeverk['FagsakYtelseType'];
  const familieHendelseTyper = alleKodeverk['FamilieHendelseType'];
  const foreldreTyper = alleKodeverk['ForeldreType'];

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: FormValues) => {
        setSoknadData(new SoknadData(values.fagsakYtelseType, values.familieHendelseType, values.foreldreType));
        formMethods.reset(values);
      }}
    >
      <Box.New background="neutral-moderate" borderWidth="1">
        <VStack gap="space-16" padding="5">
          <Heading size="small" level="3">
            <FormattedMessage id="Registrering.Omsoknaden.Title" />
          </Heading>

          <HStack gap="20">
            <RhfRadioGroupNew
              name="fagsakYtelseType"
              control={formMethods.control}
              label={<FormattedMessage id="Registrering.Omsoknaden.soknadstype" />}
              validate={[required]}
            >
              {fagsakYtelseTyper.map(fyt => (
                <Radio key={fyt.kode} value={fyt.kode} size="small" disabled={true}>
                  {fyt.navn}
                </Radio>
              ))}
            </RhfRadioGroupNew>

            {selectedFagsakYtelseType !== 'SVP' && (
              <RhfRadioGroupNew
                name="familieHendelseType"
                control={formMethods.control}
                label={<FormattedMessage id="Registrering.Omsoknaden.Tema" />}
                validate={[required]}
              >
                {familieHendelseTyper
                  .filter(({ kode }) => SØKNAD_TYPER.some(st => st === kode))
                  .map(bmt => (
                    <Radio key={bmt.kode} value={bmt.kode} size="small">
                      {bmt.navn}
                    </Radio>
                  ))}
              </RhfRadioGroupNew>
            )}

            <RhfRadioGroupNew
              name="foreldreType"
              control={formMethods.control}
              label={<FormattedMessage id="Registrering.Omsoknaden.Soker" />}
              validate={[required]}
            >
              {foreldreTyper.map(ft => (
                <Radio key={ft.kode} value={ft.kode} size="small">
                  {ft.navn}
                </Radio>
              ))}
            </RhfRadioGroupNew>
          </HStack>

          <Box style={{ textAlign: 'end' }}>
            <Button type="submit" disabled={!formMethods.formState.isDirty}>
              <FormattedMessage id="Registrering.Omsoknaden.VisSkjema" />
            </Button>
          </Box>
        </VStack>
      </Box.New>
    </RhfForm>
  );
};
