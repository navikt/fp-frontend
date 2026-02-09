import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Radio } from '@navikt/ds-react';
import { RhfRadioGroup } from '@navikt/ft-form-hooks';

import type { TilBeslutter } from '../../../typer/sakslisteAvdelingTsType';

export type FormValues = {
  tilBeslutter: TilBeslutter;
};

export const TilBeslutterVelger = () => {
  const { control } = useFormContext<FormValues>();
  return (
    <RhfRadioGroup
      name="tilBeslutter"
      control={control}
      legend={<FormattedMessage id="TilBeslutterVelger.Overskrift" />}
    >
      <Radio value={'TA_MED_ALLE' satisfies TilBeslutter} size="small">
        <FormattedMessage id="TilBeslutterVelger.TaMedAlle" />
      </Radio>
      <Radio value={'TA_MED' satisfies TilBeslutter} size="small">
        <FormattedMessage id="TilBeslutterVelger.TaMed" />
      </Radio>
      <Radio value={'FJERN' satisfies TilBeslutter} size="small">
        <FormattedMessage id="TilBeslutterVelger.Fjern" />
      </Radio>
    </RhfRadioGroup>
  );
};
