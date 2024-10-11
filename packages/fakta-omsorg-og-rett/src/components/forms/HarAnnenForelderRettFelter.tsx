import React from 'react';
import { FormattedMessage } from 'react-intl';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { useFormContext } from 'react-hook-form';

type FormValues = {
  harAnnenForelderRett: boolean;
  mottarAnnenForelderUforetrygd: boolean;
  harAnnenForelderRettEØS: boolean;
};

interface Props {
  readOnly: boolean;
  avklareUforetrygd: boolean;
  avklareRettEØS: boolean;
}

export const HarAnnenForelderRettFelter = ({ readOnly, avklareUforetrygd, avklareRettEØS }: Props) => {
  const { watch } = useFormContext<FormValues>();
  const harAnnenForelderRett = watch('harAnnenForelderRett');
  const harAnnenForelderRettEØS = watch('harAnnenForelderRettEØS');

  return (
    <>
      <RadioGroupPanel
        name="harAnnenForelderRett"
        label={<FormattedMessage id="HarAnnenForelderRettFelter.HarAnnenForelderRett" />}
        validate={[required]}
        isReadOnly={readOnly}
        isTrueOrFalseSelection
        radios={[
          {
            label: <FormattedMessage id="HarAnnenForelderRettFelter.Ja" />,
            value: 'true',
          },
          {
            label: <FormattedMessage id="HarAnnenForelderRettFelter.Nei" />,
            value: 'false',
          },
        ]}
      />
      {harAnnenForelderRett === false && avklareRettEØS && (
        <RadioGroupPanel
          name="harAnnenForelderRettEØS"
          label={<FormattedMessage id="HarAnnenForelderRettFelter.AnnenForelderRettEØS" />}
          validate={[required]}
          isReadOnly={readOnly}
          isTrueOrFalseSelection
          radios={[
            {
              label: <FormattedMessage id="HarAnnenForelderRettFelter.Ja" />,
              value: 'true',
            },
            {
              label: <FormattedMessage id="HarAnnenForelderRettFelter.Nei" />,
              value: 'false',
            },
          ]}
        />
      )}
      {harAnnenForelderRett === false &&
        (!avklareRettEØS || harAnnenForelderRettEØS === false) &&
        avklareUforetrygd && (
          <RadioGroupPanel
            name="mottarAnnenForelderUforetrygd"
            label={<FormattedMessage id="HarAnnenForelderRettFelter.MottarUforetrygd" />}
            validate={[required]}
            isReadOnly={readOnly}
            isTrueOrFalseSelection
            radios={[
              {
                label: <FormattedMessage id="HarAnnenForelderRettFelter.Ja" />,
                value: 'true',
              },
              {
                label: <FormattedMessage id="HarAnnenForelderRettFelter.Nei" />,
                value: 'false',
              },
            ]}
          />
        )}
    </>
  );
};
