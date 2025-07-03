import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';

import type { FødselGjeldende } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { BarnFieldArray, type BarnFormValues } from './BarnFieldArray';

interface Props {
  isReadOnly: boolean;
  isEdited?: boolean;
  finnesBarnIFReg: boolean;
  antallBarnISøknad: number;
}

export type ErBarnFødtFormValues = {
  erBarnFødt: boolean | undefined;
} & BarnFormValues;

export const ErBarnFødt = ({ isReadOnly, isEdited, finnesBarnIFReg, antallBarnISøknad }: Props) => {
  const intl = useIntl();

  const { control } = useFormContext<ErBarnFødtFormValues>();

  return (
    <RhfRadioGroup
      control={control}
      name="erBarnFødt"
      isEdited={isEdited}
      label={intl.formatMessage({ id: 'ErBarnFødt.Label' }, { antallBarn: antallBarnISøknad })}
      validate={[required]}
      isReadOnly={isReadOnly}
      isHorizontal
      size="medium"
      isTrueOrFalseSelection
      radios={[
        {
          label: <FormattedMessage id="ErBarnFødt.Ja" />,
          value: 'true',
          element: <BarnFieldArray isReadOnly={isReadOnly} />,
        },
        {
          label: <FormattedMessage id="ErBarnFødt.Nei" />,
          value: 'false',
          disabled: finnesBarnIFReg,
        },
      ]}
    />
  );
};

ErBarnFødt.initialValues = (gjeldende: FødselGjeldende): ErBarnFødtFormValues => ({
  erBarnFødt: mapErBarnFødt(gjeldende),
  ...BarnFieldArray.initialValues(gjeldende),
});

ErBarnFødt.transformValues = (values: ErBarnFødtFormValues) => ({
  erBarnFødt: notEmpty(values.erBarnFødt),
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
