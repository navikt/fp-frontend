import { Label, BodyShort, Box, Button, HStack, Heading, VStack } from '@navikt/ds-react';
import { Form, RadioGroupPanel, TextAreaField } from '@navikt/ft-form-hooks';
import React, { FunctionComponent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { Aksjonspunkt, Fagsak, Soknad } from '@navikt/fp-types';
import { OverstyringDekningsgradAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { PencilFillIcon, PencilIcon } from '@navikt/aksel-icons';

import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import styles from './dekningradForm.module.css';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type FormValues = {
  dekningsgrad: number;
  begrunnelse: string;
};

interface OwnProps {
  aksjonspunkt?: Aksjonspunkt;
  fagsak: Fagsak;
  søknad: Soknad;
  submitCallback: (data: OverstyringDekningsgradAp) => Promise<void>;
  readOnly: boolean;
  kanOverstyreAccess: boolean;
}

const DekningradForm: FunctionComponent<OwnProps> = ({
  aksjonspunkt,
  fagsak,
  søknad,
  submitCallback,
  readOnly,
  kanOverstyreAccess,
}) => {
  const intl = useIntl();

  const dekningsgrad =
    søknad.oppgittFordeling.dekningsgrader.avklartDekningsgrad ||
    søknad.oppgittFordeling.dekningsgrader.søker.dekningsgrad;

  const defaultValues = {
    dekningsgrad,
    begrunnelse: aksjonspunkt?.begrunnelse,
  };

  const formMethods = useForm<FormValues>({
    defaultValues,
  });

  const [visEditeringsmodus, toggleEdit] = useState(false);

  const slåAvEditeringAvStartdato = () => {
    formMethods.reset();
    toggleEdit(false);
  };

  if (!visEditeringsmodus) {
    return (
      <VStack gap="2">
        <HStack gap="2" align="center">
          <Heading size="small">
            <FormattedMessage id="DekningsgradForm.Dekningsgrad" />
          </Heading>
          {aksjonspunkt?.begrunnelse && (
            <BodyShort size="small">
              <FormattedMessage id="DekningsgradForm.ErEndret" />
            </BodyShort>
          )}
        </HStack>
        <HStack gap="2">
          <FormattedMessage
            id="DekningsgradForm.DekningsgradForeldrepenger"
            values={{
              dekningsgrad:
                søknad.oppgittFordeling.dekningsgrader.avklartDekningsgrad ||
                søknad.oppgittFordeling.dekningsgrader.søker.dekningsgrad,
            }}
          />
          {kanOverstyreAccess && (
            <PencilFillIcon
              title={intl.formatMessage({ id: 'DekningsgradForm.EndreDekningsgrad' })}
              className={readOnly ? styles.editIconReadonly : styles.editIcon}
              onClick={readOnly ? undefined : () => toggleEdit(true)}
            />
          )}
        </HStack>
        {aksjonspunkt?.begrunnelse && (
          <HStack>
            <Box background="bg-subtle" padding="5" borderColor="border-default" borderRadius="medium">
              <VStack gap="2">
                <Label size="small">
                  <FormattedMessage id="DekningsgradForm.BeskrivelseAvEndring" />
                </Label>
                <BodyShort size="small">{aksjonspunkt?.begrunnelse}</BodyShort>
              </VStack>
            </Box>
          </HStack>
        )}
      </VStack>
    );
  }

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) =>
        submitCallback({
          kode: AksjonspunktCode.OVERSTYR_DEKNINGSGRAD,
          dekningsgrad: values.dekningsgrad,
          begrunnelse: values.begrunnelse,
        }).then(slåAvEditeringAvStartdato)
      }
    >
      <div className={styles.header}>
        <HStack gap="2" align="center">
          <PencilIcon aria-hidden height={24} width={24} />
          <Heading size="small">
            <FormattedMessage id="DekningsgradForm.EndreDekningsgrad" />
          </Heading>
        </HStack>
      </div>
      <Box background="surface-neutral-subtle" padding="5">
        <VStack gap="6">
          <RadioGroupPanel
            name="dekningsgrad"
            label={<FormattedMessage id="DekningsgradForm.Dekningsgrad" />}
            description={
              fagsak.annenPart
                ? intl.formatMessage(
                    {
                      id: 'DekningsgradForm.GjelderFor',
                    },
                    { søker: fagsak.bruker.navn, annenPart: fagsak.annenPart.navn },
                  )
                : undefined
            }
            validate={[
              required,
              value => {
                if (value === dekningsgrad) {
                  return intl.formatMessage({ id: 'DekningsgradForm.LikEksisterende' });
                }
                return null;
              },
            ]}
            isReadOnly={readOnly}
            parse={value => parseInt(value, 10)}
            radios={[
              {
                label: intl.formatMessage(
                  { id: 'DekningsgradForm.80' },
                  { erSatt: søknad.oppgittFordeling.dekningsgrader.avklartDekningsgrad === 80 },
                ),
                value: '80',
              },
              {
                label: intl.formatMessage(
                  { id: 'DekningsgradForm.100' },
                  { erSatt: søknad.oppgittFordeling.dekningsgrader.avklartDekningsgrad === 100 },
                ),
                value: '100',
              },
            ]}
          />
          <TextAreaField
            name="begrunnelse"
            label={<FormattedMessage id="DekningsgradForm.Begrunnelse" />}
            validate={[required, minLength3, maxLength1500, hasValidText]}
            maxLength={1500}
            readOnly={readOnly}
          />
          <HStack>
            <Button
              variant="primary"
              size="small"
              disabled={readOnly || !formMethods.formState.isDirty || formMethods.formState.isSubmitting}
              loading={formMethods.formState.isSubmitting}
            >
              <FormattedMessage id="DekningsgradForm.Bekreft" />
            </Button>
          </HStack>
        </VStack>
      </Box>
    </Form>
  );
};

export default DekningradForm;
