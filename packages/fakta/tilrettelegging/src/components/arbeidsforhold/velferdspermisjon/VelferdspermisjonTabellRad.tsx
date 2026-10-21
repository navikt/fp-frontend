import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Table } from '@navikt/ds-react';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';

import type { VelferdspermisjonDto } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { VelferdspermisjonForm } from './VelferdspermisjonForm';

import styles from './velferdspermisjonTabellRad.module.css';

interface Props {
  velferdspermisjon: VelferdspermisjonDto;
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
  const { alleKodeverk } = usePanelDataContext();
  const [open, setOpen] = useState(erIkkeValgt);

  return (
    <Table.ExpandableRow
      open={open}
      data-til-vurdering={erIkkeValgt}
      expandOnRowClick
      onOpenChange={() => setOpen(!open)}
      onClick={() => setOpen(!open)}
      className={styles['tabellRad']}
      content={
        <VelferdspermisjonForm
          velferdspermisjon={velferdspermisjon}
          arbeidsforholdIndex={arbeidsforholdIndex}
          readOnly={readOnly}
          lukkRad={() => setOpen(false)}
          oppdaterOverstyrtUtbetalingsgrad={oppdaterOverstyrtUtbetalingsgrad}
        />
      }
    >
      <Table.DataCell>
        <PeriodLabel dateStringFom={velferdspermisjon.permisjonFom} dateStringTom={velferdspermisjon.permisjonTom} />
      </Table.DataCell>
      <Table.DataCell>
        <FormattedMessage
          id="VelferdspermisjonTabellRad.Permisjon"
          values={{
            type: alleKodeverk['PermisjonsbeskrivelseType'].find(k => k.kode === velferdspermisjon.type)?.navn,
            permisjon: velferdspermisjon.permisjonsprosent,
          }}
        />
      </Table.DataCell>
    </Table.ExpandableRow>
  );
};
