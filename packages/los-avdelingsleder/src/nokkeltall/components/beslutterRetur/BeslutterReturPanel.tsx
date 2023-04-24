import React, { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';

import { useForm } from 'react-hook-form';
import { Label } from '@navikt/ds-react';

import StoreValuesInLocalStorage from '../../../data/StoreValuesInLocalStorage';
import { Form, CheckboxField } from '@navikt/ft-form-hooks';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import BeslutterReturGraf from './BeslutterReturGraf';
import { BeslutterRetur } from './BeslutterReturGraf';

type OwnProps = {
  height: number,
  getValueFromLocalStorage: (key: string) => string | undefined,
};

const BeslutterReturPanel: React.FC<OwnProps> = ({ height, getValueFromLocalStorage }) => {
  const data: BeslutterRetur = {
    groupNames: ['Inngangsvilkår', 'Beregning', 'Uttak', 'Medlemskap', 'Øvrig', 'Brev'],
    returÅrsak: ['FEIL_FAKTA', 'FEIL_REGEL', 'SKJØNN'],
    ukenummer: ['7', '8', '9'],
    totalAntallReturer: [15, 23, 10],
    timeseriesData: [
      {
        groupName: 'Beregning',
        gruppeData: [
          {
            returÅrsak: 'FEIL_FAKTA',
            values: [15, 25, 35],
          },
          {
            returÅrsak: 'SKJØNN',
            values: [16, 24, 30],
          },
          {
            returÅrsak: 'FEIL_REGEL',
            values: [12, 10, 2],
          },
        ],
      },
      {
        groupName: 'Inngangsvilkår',
        gruppeData: [
          {
            returÅrsak: 'FEIL_FAKTA',
            values: [8, 18, 28],
          },
          {
            returÅrsak: 'SKJØNN',
            values: [9, 2, 1],
          },
          {
            returÅrsak: 'FEIL_REGEL',
            values: [4, 5, 7],
          },
        ],
      },
    ],
  };

  const formDefaultValues = useMemo(
    () =>
      Object.values(data.groupNames).reduce(
        (app, type) => ({
          ...app,
          [type]: true,
        }),
        {},
      ),
    [],
  );

  const formName = 'returÅrsaker';
  const stringFromStorage = getValueFromLocalStorage(formName);
  const lagredeVerdier = stringFromStorage ? JSON.parse(stringFromStorage) : undefined;

  const formMethods = useForm({
    defaultValues: lagredeVerdier || formDefaultValues,
  });

  const values = formMethods.watch();
  const checkedKeys = useMemo(() => Object.keys(values).filter(key => values[key]), [values]);

  return (
    <Form formMethods={formMethods}>
      <StoreValuesInLocalStorage stateKey={formName} values={values} />
      <Label size="small">
        <FormattedMessage id="BeslutterReturPanel.Tittel" />
      </Label>
      <VerticalSpacer sixteenPx />
      <FlexContainer>
        <FlexRow>
          {data.groupNames.map(type => (
            <FlexColumn key={type}>
              <CheckboxField name={type} label={type} />
            </FlexColumn>
          ))}
        </FlexRow>
      </FlexContainer>
      <VerticalSpacer sixteenPx />
      <BeslutterReturGraf selectedGroup={checkedKeys} height={height} beslutterReturData={data} />
    </Form>
  );
};

export default BeslutterReturPanel;
