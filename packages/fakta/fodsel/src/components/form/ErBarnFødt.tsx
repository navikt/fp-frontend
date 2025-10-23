import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { HStack, Radio, VStack } from '@navikt/ds-react';
import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';

import type { FødselGjeldende } from '@navikt/fp-types';

import { BarnFieldArray, type BarnFormValues } from './BarnFieldArray';

interface Props {
  isReadOnly: boolean;
  finnesBarnIFReg: boolean;
  antallBarnISøknad: number;
}

export type ErBarnFødtFormValues = {
  erBarnFødt: boolean | undefined;
} & BarnFormValues;

export const ErBarnFødt = ({ isReadOnly, finnesBarnIFReg, antallBarnISøknad }: Props) => {
  const intl = useIntl();

  const { control, watch } = useFormContext<ErBarnFødtFormValues>();

  const erBarnFødt = watch('erBarnFødt');

  return (
    <VStack gap="space-16">
      <RhfRadioGroup
        control={control}
        name="erBarnFødt"
        legend={intl.formatMessage({ id: 'ErBarnFødt.Label' }, { antallBarn: antallBarnISøknad })}
        validate={[required]}
        readOnly={isReadOnly}
        size="medium"
      >
        <HStack gap="space-16">
          <Radio value={true}>
            <FormattedMessage id="ErBarnFødt.Ja" />
          </Radio>
          <Radio value={false} disabled={finnesBarnIFReg}>
            <FormattedMessage id="ErBarnFødt.Nei" />
          </Radio>
        </HStack>
      </RhfRadioGroup>
      {erBarnFødt && <BarnFieldArray isReadOnly={isReadOnly} />}
    </VStack>
  );
};

ErBarnFødt.initialValues = (gjeldende: FødselGjeldende): ErBarnFødtFormValues => ({
  erBarnFødt: mapErBarnFødt(gjeldende),
  ...BarnFieldArray.initialValues(gjeldende),
});

ErBarnFødt.transformValues = (values: ErBarnFødtFormValues) => ({
  ...BarnFieldArray.transformValues(values, !!values.erBarnFødt),
});

const mapErBarnFødt = ({ fødselDokumetasjonStatus, barn }: FødselGjeldende) => {
  const finnesBarnIFReg = barn.some(b => b.kilde === 'FOLKEREGISTER');
  switch (fødselDokumetasjonStatus) {
    case 'DOKUMENTERT':
      return true;
    case 'IKKE_DOKUMENTERT':
      return false;
    case 'IKKE_VURDERT':
      return finnesBarnIFReg || undefined;
  }
};
