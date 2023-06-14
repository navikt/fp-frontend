import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { useFormContext } from 'react-hook-form';

type FormValues = {
  harAnnenForelderRett: boolean;
  mottarAnnenForelderUforetrygd: boolean;
  annenForelderRettEØS: boolean;
};

interface OwnProps {
  readOnly: boolean;
  avklareUforetrygd: boolean;
  avklareRettEØS: boolean;
}

const HarAnnenForelderRettFelter: FunctionComponent<OwnProps> = ({ readOnly, avklareUforetrygd, avklareRettEØS }) => {
  const { watch } = useFormContext<FormValues>();
  const harAnnenForelderRett = watch('harAnnenForelderRett');
  const annenForelderRettEØS = watch('annenForelderRettEØS');

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
      <VerticalSpacer thirtyTwoPx />
      {harAnnenForelderRett === false && avklareRettEØS && (
        <RadioGroupPanel
          name="annenForelderRettEØS"
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
      {harAnnenForelderRett === false && (!avklareRettEØS || annenForelderRettEØS === false) && avklareUforetrygd && (
        <>
          <VerticalSpacer thirtyTwoPx />
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
        </>
      )}
    </>
  );
};

export default HarAnnenForelderRettFelter;
