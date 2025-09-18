import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { PencilFillIcon, PencilIcon } from '@navikt/aksel-icons';
import { BodyShort, Box, Button, Heading, HStack, Label, Radio, VStack } from '@navikt/ds-react';
import { RhfForm, RhfRadioGroup, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, Soknad } from '@navikt/fp-types';
import type { OverstyringDekningsgradAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { usePanelDataContext } from '@navikt/fp-utils';

import styles from './dekningradForm.module.css';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type FormValues = {
  dekningsgrad: number;
  begrunnelse: string;
};

interface Props {
  aksjonspunkt?: Aksjonspunkt;
  søknad: Soknad;
  kanOverstyreAccess: boolean;
}

export const DekningradForm = ({ aksjonspunkt, søknad, kanOverstyreAccess }: Props) => {
  const intl = useIntl();

  const { submitCallback, fagsak, isReadOnly } = usePanelDataContext<OverstyringDekningsgradAp>();

  const dekningsgrad =
    søknad.oppgittFordeling.dekningsgrader.avklartDekningsgrad ??
    søknad.oppgittFordeling.dekningsgrader.søker.dekningsgrad ??
    undefined;

  const defaultValues = {
    dekningsgrad,
    begrunnelse: aksjonspunkt?.begrunnelse ?? '',
  };

  const formMethods = useForm<FormValues>({
    defaultValues,
  });

  const [visEditeringsmodus, setVisEditeringsmodus] = useState(false);

  const slåAvEditeringAvStartdato = () => {
    formMethods.reset();
    setVisEditeringsmodus(false);
  };

  if (!visEditeringsmodus) {
    return (
      <VStack gap="space-8">
        <HStack gap="space-8" align="center">
          <Heading size="small" level="3">
            <FormattedMessage id="DekningsgradForm.Dekningsgrad" />
          </Heading>
          {aksjonspunkt?.begrunnelse && (
            <BodyShort size="small">
              <FormattedMessage id="DekningsgradForm.ErEndret" />
            </BodyShort>
          )}
        </HStack>
        <HStack gap="space-8">
          <FormattedMessage
            id="DekningsgradForm.DekningsgradForeldrepenger"
            values={{
              dekningsgrad,
            }}
          />
          {kanOverstyreAccess && (
            <PencilFillIcon
              title={intl.formatMessage({ id: 'DekningsgradForm.EndreDekningsgrad' })}
              className={isReadOnly ? styles['editIconReadonly'] : styles['editIcon']}
              onClick={isReadOnly ? undefined : () => setVisEditeringsmodus(true)}
            />
          )}
        </HStack>
        {aksjonspunkt?.begrunnelse && (
          <Box.New background="neutral-moderate" padding="5" borderRadius="medium">
            <VStack gap="space-8">
              <Label size="small">
                <FormattedMessage id="DekningsgradForm.BeskrivelseAvEndring" />
              </Label>
              <BodyShort size="small">{aksjonspunkt.begrunnelse}</BodyShort>
            </VStack>
          </Box.New>
        )}
      </VStack>
    );
  }

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: FormValues) =>
        submitCallback({
          kode: AksjonspunktKode.OVERSTYR_DEKNINGSGRAD,
          dekningsgrad: values.dekningsgrad,
          begrunnelse: values.begrunnelse,
        }).then(slåAvEditeringAvStartdato)
      }
    >
      <div className={styles['header']}>
        <HStack gap="space-8" align="center">
          <PencilIcon aria-hidden height={24} width={24} />
          <Heading size="small" level="3">
            <FormattedMessage id="DekningsgradForm.EndreDekningsgrad" />
          </Heading>
        </HStack>
      </div>
      <Box.New background="neutral-moderate" padding="5">
        <VStack gap="space-24">
          <RhfRadioGroup
            name="dekningsgrad"
            control={formMethods.control}
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
            isReadOnly={isReadOnly}
          >
            <HStack gap="space-16">
              <Radio value={80} size="small">
                {intl.formatMessage(
                  { id: 'DekningsgradForm.80' },
                  { erSatt: søknad.oppgittFordeling.dekningsgrader.avklartDekningsgrad === 80 },
                )}
              </Radio>
              <Radio value={100} size="small">
                {intl.formatMessage(
                  { id: 'DekningsgradForm.100' },
                  { erSatt: søknad.oppgittFordeling.dekningsgrader.avklartDekningsgrad === 100 },
                )}
              </Radio>
            </HStack>
          </RhfRadioGroup>
          <RhfTextarea
            name="begrunnelse"
            control={formMethods.control}
            label={<FormattedMessage id="DekningsgradForm.Begrunnelse" />}
            validate={[required, minLength3, maxLength1500, hasValidText]}
            maxLength={1500}
            readOnly={isReadOnly}
          />
          <div>
            <Button
              variant="primary"
              size="small"
              disabled={isReadOnly || !formMethods.formState.isDirty || formMethods.formState.isSubmitting}
              loading={formMethods.formState.isSubmitting}
            >
              <FormattedMessage id="DekningsgradForm.Bekreft" />
            </Button>
          </div>
        </VStack>
      </Box.New>
    </RhfForm>
  );
};
