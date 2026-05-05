import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { PencilFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack, Label, Radio, Textarea, VStack } from '@navikt/ds-react';
import { RhfForm, RhfRadioGroup, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { AksjonspunktBoks, EditedIcon } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, Ytelsefordeling } from '@navikt/fp-types';
import type { OverstyringDekningsgradAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { usePanelDataContext } from '@navikt/fp-utils';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type FormValues = {
  dekningsgrad: number;
  begrunnelse: string;
};

interface Props {
  aksjonspunkt?: Aksjonspunkt;
  ytelseFordeling: Ytelsefordeling;
  kanOverstyreAccess: boolean;
}

export const DekningradForm = ({ aksjonspunkt, ytelseFordeling, kanOverstyreAccess }: Props) => {
  const intl = useIntl();

  const { submitCallback, isReadOnly } = usePanelDataContext<OverstyringDekningsgradAp>();

  const dekningsgrad =
    ytelseFordeling.dekningsgrader.avklartDekningsgrad ??
    ytelseFordeling.dekningsgrader.søker.dekningsgrad ??
    undefined;

  const defaultValues = {
    dekningsgrad,
    begrunnelse: aksjonspunkt?.begrunnelse ?? '',
  };

  const formMethods = useForm<FormValues>({
    defaultValues,
  });

  const [visEditeringsmodus, setVisEditeringsmodus] = useState(false);

  const slåAvEditeringAvDekningsgrad = () => {
    formMethods.reset();
    setVisEditeringsmodus(false);
  };

  if (!visEditeringsmodus) {
    return (
      <VStack gap="space-8">
        <div>
          <HStack gap="space-8">
            <Label>
              <FormattedMessage id="DekningsgradForm.Dekningsgrad" />
            </Label>
            {aksjonspunkt?.begrunnelse && <EditedIcon />}
          </HStack>
          <HStack gap="space-16" align="center">
            <BodyShort>
              <FormattedMessage id="DekningsgradForm.DekningsgradForeldrepenger" values={{ dekningsgrad }} />
            </BodyShort>

            {kanOverstyreAccess && (
              <Button
                variant="tertiary"
                size="small"
                title={intl.formatMessage({ id: 'DekningsgradForm.EndreDekningsgrad' })}
                aria-label={intl.formatMessage({ id: 'DekningsgradForm.EndreDekningsgrad' })}
                disabled={isReadOnly}
                onClick={() => setVisEditeringsmodus(true)}
                icon={<PencilFillIcon aria-hidden />}
              />
            )}
          </HStack>
        </div>
        {aksjonspunkt?.begrunnelse && (
          <Textarea
            size="small"
            readOnly
            label={<FormattedMessage id="Overstyring.Begrunnelse" />}
            hideLabel
            value={aksjonspunkt.begrunnelse}
          />
        )}
      </VStack>
    );
  }
  const { avklartDekningsgrad } = ytelseFordeling.dekningsgrader;

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: FormValues) =>
        submitCallback({
          kode: AksjonspunktKode.OVERSTYRING_AV_DEKNINGSGRAD,
          dekningsgrad: values.dekningsgrad,
          begrunnelse: values.begrunnelse,
        }).then(slåAvEditeringAvDekningsgrad)
      }
    >
      <AksjonspunktBoks
        tittel={intl.formatMessage({ id: 'DekningsgradForm.EndreDekningsgrad' })}
        aksjonspunkt={aksjonspunkt}
      >
        <VStack gap="space-24">
          <RhfRadioGroup
            name="dekningsgrad"
            control={formMethods.control}
            legend={
              <FormattedMessage
                id="Dekningsgrad.HvilkenDekningsgrad"
                values={{ harAnnenPart: !!ytelseFordeling.dekningsgrader.annenPart }}
              />
            }
            validate={[required, validateIkkeLikEksisterende(intl, dekningsgrad)]}
            readOnly={isReadOnly}
          >
            <HStack gap="space-16">
              <Radio value={80} size="small">
                {avklartDekningsgrad === 80 ? (
                  <FormattedMessage id="Dekningsgrad.80.Nåværende" />
                ) : (
                  <FormattedMessage id="Dekningsgrad.80" />
                )}
              </Radio>
              <Radio value={100} size="small">
                {avklartDekningsgrad === 100 ? (
                  <FormattedMessage id="Dekningsgrad.100.Nåværende" />
                ) : (
                  <FormattedMessage id="Dekningsgrad.100" />
                )}
              </Radio>
            </HStack>
          </RhfRadioGroup>

          <RhfTextarea
            name="begrunnelse"
            control={formMethods.control}
            label={<FormattedMessage id="Overstyring.Begrunnelse" />}
            validate={[required, minLength3, maxLength1500, hasValidText]}
            maxLength={1500}
            readOnly={isReadOnly}
          />

          <HStack gap="space-8">
            <Button
              size="small"
              variant="primary"
              disabled={isReadOnly || !formMethods.formState.isDirty || formMethods.formState.isSubmitting}
              loading={formMethods.formState.isSubmitting}
            >
              <FormattedMessage id="Overstyring.Lagre" />
            </Button>
            <Button variant="secondary" size="small" onClick={slåAvEditeringAvDekningsgrad} type="button">
              <FormattedMessage id="Overstyring.Avbryt" />
            </Button>
          </HStack>
        </VStack>
      </AksjonspunktBoks>
    </RhfForm>
  );
};

const validateIkkeLikEksisterende = (intl: IntlShape, dekningsgrad: number | undefined) => (value: number) => {
  if (value === dekningsgrad) {
    return intl.formatMessage({ id: 'DekningsgradForm.LikEksisterende' });
  }
  return null;
};
