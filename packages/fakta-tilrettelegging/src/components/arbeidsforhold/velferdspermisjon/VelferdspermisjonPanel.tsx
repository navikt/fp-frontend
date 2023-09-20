import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { HStack, Label, Table } from '@navikt/ds-react';

import { Permisjon } from '@navikt/fp-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';

import VelferdspermisjonTabellRad from './VelferdspermisjonTabellRad';

import styles from './velferdspermisjonPanel.module.css';

interface OwnProps {
  velferdspermisjoner: Permisjon[];
  arbeidsforholdIndex: number;
  readOnly: boolean;
}

const VelferdspermisjonPanel: FunctionComponent<OwnProps> = ({
  velferdspermisjoner,
  arbeidsforholdIndex,
  readOnly,
}) => {
  const intl = useIntl();
  return (
    <>
      <VerticalSpacer fourtyPx />
      <HStack gap="4">
        <Label size="small">
          <FormattedMessage id="TilretteleggingForArbeidsgiverPanel.Velferdspermisjon" />
        </Label>
        {velferdspermisjoner.some(permisjon => permisjon.erGyldig === undefined) && (
          <ExclamationmarkTriangleFillIcon
            title={intl.formatMessage({ id: 'TilretteleggingForArbeidsgiverPanel.ErPermisjonGyldg' })}
            className={styles.image}
          />
        )}
      </HStack>
      <VerticalSpacer sixteenPx />
      <Table size="small">
        <Table.Body>
          {velferdspermisjoner.map((permisjon, index) => (
            <VelferdspermisjonTabellRad
              key={permisjon.permisjonFom}
              velferdspermisjon={permisjon}
              readOnly={readOnly}
              arbeidsforholdIndex={arbeidsforholdIndex}
              permisjonIndex={index}
            />
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default VelferdspermisjonPanel;
