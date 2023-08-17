import React, { useState, FunctionComponent, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { Table, Tag } from '@navikt/ds-react';
import { Permisjon } from '@navikt/fp-types';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';

import VelferdspermisjonForm from './VelferdspermisjonForm';

import styles from './velferdspermisjonTabellRad.module.css';

const utledStyleForRad = (open: boolean, erIkkeValgt: boolean) => {
  if (erIkkeValgt) {
    return styles.apRow;
  }
  return open ? styles.openRow : styles.row;
};

interface OwnProps {
  velferdspermisjon: Permisjon;
  arbeidsforholdIndex: number;
  permisjonIndex: number;
  readOnly: boolean;
}

const VelferdspermisjonTabellRad: FunctionComponent<OwnProps> = ({
  velferdspermisjon,
  permisjonIndex,
  arbeidsforholdIndex,
  readOnly,
}) => {
  const erIkkeValgt = velferdspermisjon.erGyldig === undefined;

  const [open, setOpen] = useState(erIkkeValgt);
  const lukkRad = useCallback(() => setOpen(false), []);
  const radOnClick = useCallback(() => setOpen(oldValue => !oldValue), []);

  return (
    <Table.ExpandableRow
      open={open}
      expandOnRowClick
      onOpenChange={radOnClick}
      content={
        <VelferdspermisjonForm
          velferdspermisjon={velferdspermisjon}
          permisjonIndex={permisjonIndex}
          arbeidsforholdIndex={arbeidsforholdIndex}
          readOnly={readOnly}
          lukkRad={lukkRad}
        />
      }
      togglePlacement="right"
      className={utledStyleForRad(open, erIkkeValgt)}
    >
      <Table.DataCell>
        <PeriodLabel dateStringFom={velferdspermisjon.permisjonFom} dateStringTom={velferdspermisjon.permisjonTom} />
      </Table.DataCell>
      <Table.DataCell>
        <FormattedMessage
          id="VelferdspermisjonPanel.Permisjon"
          values={{
            type: velferdspermisjon.type.toLowerCase(),
            permisjon: velferdspermisjon.permisjonsprosent,
          }}
        />
      </Table.DataCell>
      <Table.DataCell>
        <Tag variant="neutral-moderate" size="small">
          <FormattedMessage id="VelferdspermisjonPanel.AAregisteret" />
        </Tag>
      </Table.DataCell>
    </Table.ExpandableRow>
  );
};

export default VelferdspermisjonTabellRad;
