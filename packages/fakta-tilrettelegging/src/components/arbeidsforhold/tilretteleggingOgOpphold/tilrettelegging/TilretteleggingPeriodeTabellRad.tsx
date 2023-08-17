import React, { FunctionComponent, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Table, Tag } from '@navikt/ds-react';
import {
  ArbeidsforholdFodselOgTilrettelegging,
  ArbeidsforholdTilretteleggingDato,
  SvpTilretteleggingFomKilde,
} from '@navikt/fp-types';

import { PeriodLabel } from '@navikt/ft-ui-komponenter';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { tilretteleggingType } from '@navikt/fp-kodeverk';
import TilretteleggingForm, {
  finnVelferdspermisjonprosent,
  finnProsentSvangerskapspenger,
} from './TilretteleggingForm';

import styles from './tilretteleggingPeriodeTabellRad.module.css';

const utledTypeTekst = (
  intl: IntlShape,
  stillingsprosentArbeidsforhold: number,
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging,
  tilrettelegging: ArbeidsforholdTilretteleggingDato,
) => {
  const velferdspermisjonsprosent = finnVelferdspermisjonprosent(arbeidsforhold);
  const stillingsprosent =
    tilrettelegging.type === tilretteleggingType.INGEN_TILRETTELEGGING ? 100 : tilrettelegging.stillingsprosent;
  const prosent =
    tilrettelegging.fom && stillingsprosent
      ? finnProsentSvangerskapspenger(tilrettelegging, stillingsprosentArbeidsforhold, velferdspermisjonsprosent)
      : 0;
  return tilrettelegging.fom
    ? intl.formatMessage({ id: 'TilretteleggingPerioderTabellRad.SVPprosent' }, { prosent })
    : intl.formatMessage({ id: 'TilretteleggingPerioderTabellRad.Tilrettelegging' });
};

const utledKilde = (intl: IntlShape, tilrettelegging: ArbeidsforholdTilretteleggingDato) => {
  if (
    tilrettelegging.kilde === SvpTilretteleggingFomKilde.REGISTRERT_AV_SAKSBEHANDLER ||
    tilrettelegging.fom === undefined
  ) {
    return intl.formatMessage({ id: 'TilretteleggingPerioderTabellRad.Saksbehandler' });
  }
  if (tilrettelegging.kilde === SvpTilretteleggingFomKilde.ENDRET_AV_SAKSBEHANDLER) {
    return intl.formatMessage({ id: 'TilretteleggingPerioderTabellRad.EndretAvSaksbehandler' });
  }
  if (tilrettelegging.kilde === SvpTilretteleggingFomKilde.TIDLIGERE_VEDTAK) {
    return intl.formatMessage({ id: 'TilretteleggingPerioderTabellRad.TidligereVedtak' });
  }
  return intl.formatMessage({ id: 'TilretteleggingPerioderTabellRad.Soknad' });
};

interface OwnProps {
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

const TilretteleggingPeriodeTabellRad: FunctionComponent<OwnProps> = ({
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
}) => {
  const intl = useIntl();
  const [open, setOpen] = useState(openRad);

  const { setValue } = useFormContext();

  const oppdaterTilrettelegging = (values: ArbeidsforholdTilretteleggingDato) => {
    setOpen(false);
    setLeggTilKnapperDisablet(false);
    setValue(navn, values);
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

export default TilretteleggingPeriodeTabellRad;
