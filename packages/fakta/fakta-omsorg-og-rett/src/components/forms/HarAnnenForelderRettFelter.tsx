import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { TrueFalseInput } from '@navikt/fp-fakta-felles';

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
  const harAnnenForelderRettEØS = watch('harAnnenForelderRettEØS');

  return (
    <TrueFalseInput
      name="harAnnenForelderRett"
      label={<FormattedMessage id="HarAnnenForelderRettFelter.HarAnnenForelderRett" />}
      readOnly={readOnly}
      falseContent={
        <>
          {avklareRettEØS && (
            <TrueFalseInput
              name="harAnnenForelderRettEØS"
              label={<FormattedMessage id="HarAnnenForelderRettFelter.AnnenForelderRettEØS" />}
              readOnly={readOnly}
            />
          )}

          {(!avklareRettEØS || harAnnenForelderRettEØS === false) && avklareUforetrygd && (
            <TrueFalseInput
              name="mottarAnnenForelderUforetrygd"
              label={<FormattedMessage id="HarAnnenForelderRettFelter.MottarUforetrygd" />}
              readOnly={readOnly}
            />
          )}
        </>
      }
    />
  );
};
