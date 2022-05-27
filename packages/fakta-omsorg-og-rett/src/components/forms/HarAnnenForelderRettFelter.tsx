import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { RadioGroupField, RadioOption, formHooks } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { Element } from 'nav-frontend-typografi';
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
      <RadioGroupField
        name="harAnnenForelderRett"
        label={<Element><FormattedMessage id="HarAnnenForelderRettFelter.HarAnnenForelderRett" /></Element>}
        validate={[required]}
        bredde="XL"
        readOnly={readOnly}
        parse={(value: string) => value === 'true'}
        direction="vertical"
      >
        <RadioOption value="true" label={<FormattedMessage id="HarAnnenForelderRettFelter.Ja" />} />
        <RadioOption value="false" label={<FormattedMessage id="HarAnnenForelderRettFelter.Nei" />} />
      </RadioGroupField>
      <VerticalSpacer thirtyTwoPx />
      {harAnnenForelderRett === false && avklareUforetrygd && (
        <RadioGroupField
          name="mottarAnnenForelderUforetrygd"
          label={<Element><FormattedMessage id="HarAnnenForelderRettFelter.MottarUforetrygd" /></Element>}
          validate={[required]}
          bredde="XL"
          readOnly={readOnly}
          parse={(value: string) => value === 'true'}
          direction="vertical"
        >
          <RadioOption value="true" label={<FormattedMessage id="HarAnnenForelderRettFelter.Ja" />} />
          <RadioOption value="false" label={<FormattedMessage id="HarAnnenForelderRettFelter.Nei" />} />
        </RadioGroupField>
      )}
      {harAnnenForelderRett === false && mottarAnnenForelderUforetrygd === false && avklareStonadEOS && (
        <RadioGroupField
          name="mottarAnnenForelderStonadEOS"
          label={<Element><FormattedMessage id="HarAnnenForelderRettFelter.MottarStonadEOS" /></Element>}
          validate={[required]}
          bredde="XL"
          readOnly={readOnly}
          parse={(value: string) => value === 'true'}
          direction="vertical"
        >
          <RadioOption value="true" label={<FormattedMessage id="HarAnnenForelderRettFelter.Ja" />} />
          <RadioOption value="false" label={<FormattedMessage id="HarAnnenForelderRettFelter.Nei" />} />
        </RadioGroupField>
      )}
    </>
  );
};

export default HarAnnenForelderRettFelter;
