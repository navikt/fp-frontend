import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { RadioGroupPanel, formHooks } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

type FormValues = {
  harAnnenForelderRett: boolean;
  mottarAnnenForelderUforetrygd: boolean;
  mottarAnnenForelderStonadEOS: boolean;
}

interface OwnProps {
  readOnly: boolean;
  avklareUforetrygd: boolean;
  avklareStonadEOS: boolean;
}

const HarAnnenForelderRettFelter: FunctionComponent<OwnProps> = ({
  readOnly,
  avklareUforetrygd,
  avklareStonadEOS,
}) => {
  const { watch } = formHooks.useFormContext<FormValues>();
  const harAnnenForelderRett = watch('harAnnenForelderRett');
  const mottarAnnenForelderUforetrygd = watch('mottarAnnenForelderUforetrygd');

  return (
    <>
      <RadioGroupPanel
        name="harAnnenForelderRett"
        label={<FormattedMessage id="HarAnnenForelderRettFelter.HarAnnenForelderRett" />}
        validate={[required]}
        isReadOnly={readOnly}
        isTrueOrFalseSelection
        radios={[{
          label: <FormattedMessage id="HarAnnenForelderRettFelter.Ja" />,
          value: 'true',
        }, {
          label: <FormattedMessage id="HarAnnenForelderRettFelter.Nei" />,
          value: 'false',
        }]}
      />
      <VerticalSpacer thirtyTwoPx />
      {harAnnenForelderRett === false && avklareUforetrygd && (
        <RadioGroupPanel
          name="mottarAnnenForelderUforetrygd"
          label={<FormattedMessage id="HarAnnenForelderRettFelter.MottarUforetrygd" />}
          validate={[required]}
          isReadOnly={readOnly}
          isTrueOrFalseSelection
          radios={[{
            label: <FormattedMessage id="HarAnnenForelderRettFelter.Ja" />,
            value: 'true',
          }, {
            label: <FormattedMessage id="HarAnnenForelderRettFelter.Nei" />,
            value: 'false',
          }]}
        />
      )}
      {harAnnenForelderRett === false && mottarAnnenForelderUforetrygd === false && avklareStonadEOS && (
        <>
          <VerticalSpacer thirtyTwoPx />
          <RadioGroupPanel
            name="mottarAnnenForelderStonadEOS"
            label={<FormattedMessage id="HarAnnenForelderRettFelter.MottarStonadEOS" />}
            validate={[required]}
            isReadOnly={readOnly}
            isTrueOrFalseSelection
            radios={[{
              label: <FormattedMessage id="HarAnnenForelderRettFelter.Ja" />,
              value: 'true',
            }, {
              label: <FormattedMessage id="HarAnnenForelderRettFelter.Nei" />,
              value: 'false',
            }]}
          />
        </>
      )}
    </>
  );
};

export default HarAnnenForelderRettFelter;
