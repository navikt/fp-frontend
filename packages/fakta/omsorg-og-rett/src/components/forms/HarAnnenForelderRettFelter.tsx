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
}

export const HarAnnenForelderRettFelter = ({ readOnly, avklareUforetrygd }: Props) => {
  const { watch, control } = useFormContext<FormValues>();
  const harAnnenForelderRettEØS = watch('harAnnenForelderRettEØS');

  return (
    <TrueFalseInput
      name="harAnnenForelderRett"
      control={control}
      label={<FormattedMessage id="HarAnnenForelderRettFelter.HarAnnenForelderRett" />}
      readOnly={readOnly}
      falseContent={
        <>
          <TrueFalseInput
            name="harAnnenForelderRettEØS"
            control={control}
            label={<FormattedMessage id="HarAnnenForelderRettFelter.AnnenForelderRettEØS" />}
            readOnly={readOnly}
          />

          {harAnnenForelderRettEØS === false && avklareUforetrygd && (
            <TrueFalseInput
              name="mottarAnnenForelderUforetrygd"
              control={control}
              label={<FormattedMessage id="HarAnnenForelderRettFelter.MottarUforetrygd" />}
              readOnly={readOnly}
            />
          )}
        </>
      }
    />
  );
};
