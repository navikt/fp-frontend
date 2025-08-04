import { FormattedMessage, useIntl } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { HStack, Label, Table, VStack } from '@navikt/ds-react';

import type { Permisjon } from '@navikt/fp-types';

import { VelferdspermisjonTabellRad } from './VelferdspermisjonTabellRad';

import styles from './velferdspermisjonPanel.module.css';

interface Props {
  velferdspermisjoner: Permisjon[];
  arbeidsforholdIndex: number;
  readOnly: boolean;
  oppdaterOverstyrtUtbetalingsgrad: (velferdspermisjonprosent: number) => void;
}

export const VelferdspermisjonPanel = ({
  velferdspermisjoner,
  arbeidsforholdIndex,
  readOnly,
  oppdaterOverstyrtUtbetalingsgrad,
}: Props) => {
  const intl = useIntl();
  return (
    <VStack gap="space-8">
      <HStack gap="space-16" align="center">
        <Label size="small">
          <FormattedMessage id="TilretteleggingForArbeidsgiverPanel.Velferdspermisjon" />
        </Label>
        {velferdspermisjoner.some(permisjon => permisjon.erGyldig === undefined || permisjon.erGyldig === null) && (
          <ExclamationmarkTriangleFillIcon
            title={intl.formatMessage({ id: 'TilretteleggingForArbeidsgiverPanel.ErPermisjonGyldg' })}
            className={styles.image}
          />
        )}
      </HStack>
      <Table size="small">
        <Table.Body>
          {velferdspermisjoner.map(permisjon => (
            <VelferdspermisjonTabellRad
              key={permisjon.permisjonFom}
              velferdspermisjon={permisjon}
              readOnly={readOnly}
              arbeidsforholdIndex={arbeidsforholdIndex}
              oppdaterOverstyrtUtbetalingsgrad={oppdaterOverstyrtUtbetalingsgrad}
            />
          ))}
        </Table.Body>
      </Table>
    </VStack>
  );
};
