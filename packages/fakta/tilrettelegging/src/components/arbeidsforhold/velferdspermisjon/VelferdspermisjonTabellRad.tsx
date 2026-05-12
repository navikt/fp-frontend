import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Table } from '@navikt/ds-react';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';

import type { Permisjon } from '@navikt/fp-types';

import { VelferdspermisjonForm } from './VelferdspermisjonForm';

import styles from './velferdspermisjonTabellRad.module.css';

const utledStyleForRad = (open: boolean, erIkkeValgt: boolean) => {
  if (erIkkeValgt) {
    return styles['apRow'];
  }
  return open ? styles['openRow'] : undefined;
};

interface Props {
  velferdspermisjon: Permisjon;
  arbeidsforholdIndex: number;
  readOnly: boolean;
  oppdaterOverstyrtUtbetalingsgrad: (velferdspermisjonprosent: number) => void;
}

export const VelferdspermisjonTabellRad = ({
  velferdspermisjon,
  arbeidsforholdIndex,
  readOnly,
  oppdaterOverstyrtUtbetalingsgrad,
}: Props) => {
  const erIkkeValgt = velferdspermisjon.erGyldig === undefined;

  const [open, setOpen] = useState(erIkkeValgt);

  return (
    <Table.ExpandableRow
      open={open}
      expandOnRowClick
      onOpenChange={() => setOpen(!open)}
      onClick={() => setOpen(!open)}
      content={
        <VelferdspermisjonForm
          velferdspermisjon={velferdspermisjon}
          arbeidsforholdIndex={arbeidsforholdIndex}
          readOnly={readOnly}
          lukkRad={() => setOpen(false)}
          oppdaterOverstyrtUtbetalingsgrad={oppdaterOverstyrtUtbetalingsgrad}
        />
      }
      className={utledStyleForRad(open, erIkkeValgt)}
    >
      <Table.DataCell>
        <PeriodLabel dateStringFom={velferdspermisjon.permisjonFom} dateStringTom={velferdspermisjon.permisjonTom} />
      </Table.DataCell>
      <Table.DataCell>
        <FormattedMessage
          id="VelferdspermisjonTabellRad.Permisjon"
          values={{
            type: velferdspermisjon.type.toLowerCase(),
            permisjon: velferdspermisjon.permisjonsprosent,
          }}
        />
      </Table.DataCell>
    </Table.ExpandableRow>
  );
};
