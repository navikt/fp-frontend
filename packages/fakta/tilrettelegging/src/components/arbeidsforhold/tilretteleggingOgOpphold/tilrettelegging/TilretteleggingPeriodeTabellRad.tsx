import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { Table, Tag } from '@navikt/ds-react';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';

import { type ArbeidsforholdFodselOgTilrettelegging, type ArbeidsforholdTilretteleggingDato } from '@navikt/fp-types';

import {
  finnProsentSvangerskapspenger,
  finnVelferdspermisjonprosent,
  TilretteleggingForm,
} from './TilretteleggingForm';

import styles from './tilretteleggingPeriodeTabellRad.module.css';

const utledTypeTekst = (
  intl: IntlShape,
  stillingsprosentArbeidsforhold: number,
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging,
  tilrettelegging: ArbeidsforholdTilretteleggingDato,
): string => {
  const velferdspermisjonsprosent = finnVelferdspermisjonprosent(arbeidsforhold);
  const stillingsprosent = tilrettelegging.type === 'INGEN_TILRETTELEGGING' ? 100 : tilrettelegging.stillingsprosent;
  const prosent =
    tilrettelegging.fom && stillingsprosent
      ? finnProsentSvangerskapspenger(tilrettelegging, stillingsprosentArbeidsforhold, velferdspermisjonsprosent)
      : 0;
  return tilrettelegging.fom
    ? intl.formatMessage({ id: 'TilretteleggingPerioderTabellRad.SVPprosent' }, { prosent: prosent ?? '0' })
    : intl.formatMessage({ id: 'TilretteleggingPerioderTabellRad.Tilrettelegging' });
};

const utledKilde = (intl: IntlShape, tilrettelegging: ArbeidsforholdTilretteleggingDato): string => {
  if (tilrettelegging.kilde === 'REGISTRERT_AV_SAKSBEHANDLER') {
    return intl.formatMessage({ id: 'TilretteleggingPerioderTabellRad.Saksbehandler' });
  }
  if (tilrettelegging.kilde === 'ENDRET_AV_SAKSBEHANDLER') {
    return intl.formatMessage({ id: 'TilretteleggingPerioderTabellRad.EndretAvSaksbehandler' });
  }
  if (tilrettelegging.kilde === 'TIDLIGERE_VEDTAK') {
    return intl.formatMessage({ id: 'TilretteleggingPerioderTabellRad.TidligereVedtak' });
  }
  return intl.formatMessage({ id: 'TilretteleggingPerioderTabellRad.Soknad' });
};

interface Props {
  navn: string;
  tilrettelegging: ArbeidsforholdTilretteleggingDato;
  readOnly: boolean;
  index: number;
  openRad: boolean;
  fjernTilrettelegging: (fomDato?: string) => void;
  setLeggTilKnapperDisablet: React.Dispatch<React.SetStateAction<boolean>>;
  stillingsprosentArbeidsforhold: number;
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging;
  tomDatoForTilrettelegging: string;
  termindato: string;
}

export const TilretteleggingPeriodeTabellRad = ({
  navn,
  tilrettelegging,
  index,
  readOnly,
  openRad,
  fjernTilrettelegging,
  setLeggTilKnapperDisablet,
  stillingsprosentArbeidsforhold,
  arbeidsforhold,
  tomDatoForTilrettelegging,
  termindato,
}: Props) => {
  const intl = useIntl();
  const [open, setOpen] = useState(openRad);

  const { setValue } = useFormContext();

  const oppdaterTilrettelegging = (values: ArbeidsforholdTilretteleggingDato) => {
    setOpen(false);
    setLeggTilKnapperDisablet(false);
    setValue(navn, values, { shouldDirty: true });
  };

  const avbrytEditering = () => {
    if (!tilrettelegging.fom) {
      fjernTilrettelegging();
    }
    setLeggTilKnapperDisablet(false);
    setOpen(false);
  };

  return (
    <Table.ExpandableRow
      open={open}
      expandOnRowClick
      onOpenChange={() => setOpen(!open)}
      onClick={() => setOpen(!open)}
      contentGutter="none"
      content={
        <TilretteleggingForm
          tilrettelegging={tilrettelegging}
          termindato={termindato}
          index={index}
          oppdaterTilrettelegging={oppdaterTilrettelegging}
          avbrytEditering={avbrytEditering}
          readOnly={readOnly}
          stillingsprosentArbeidsforhold={stillingsprosentArbeidsforhold}
          arbeidsforhold={arbeidsforhold}
          tomDatoForTilrettelegging={tomDatoForTilrettelegging}
          slettTilrettelegging={fjernTilrettelegging}
        />
      }
      togglePlacement="right"
      className={open ? styles.openRow : styles.row}
    >
      <Table.DataCell>
        {tilrettelegging.fom ? (
          <PeriodLabel dateStringFom={tilrettelegging.fom} dateStringTom={tomDatoForTilrettelegging} />
        ) : (
          <FormattedMessage id="TilretteleggingPerioderTabellRad.Periode" />
        )}
      </Table.DataCell>
      <Table.DataCell>
        {utledTypeTekst(intl, stillingsprosentArbeidsforhold, arbeidsforhold, tilrettelegging)}
      </Table.DataCell>
      <Table.DataCell>
        <Tag size="small" variant="neutral-moderate">
          {utledKilde(intl, tilrettelegging)}
        </Tag>
      </Table.DataCell>
    </Table.ExpandableRow>
  );
};
