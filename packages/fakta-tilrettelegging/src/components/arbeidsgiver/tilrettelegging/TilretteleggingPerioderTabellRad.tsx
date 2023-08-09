import React, { FunctionComponent, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Table, Tag } from '@navikt/ds-react';
import { ArbeidsforholdTilretteleggingDato, SvpAvklartOppholdPeriode } from '@navikt/fp-types';

import { PeriodLabel } from '@navikt/ft-ui-komponenter';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import TilretteleggingForm from './TilretteleggingForm';
import OppholdForm from './OppholdForm';

import styles from './tilretteleggingPerioderTabellRad.module.css';

const utledTypeTekst = (
  intl: IntlShape,
  tilrettelegging?: ArbeidsforholdTilretteleggingDato,
  opphold?: SvpAvklartOppholdPeriode,
) => {
  if (tilrettelegging) {
    return tilrettelegging.fom
      ? 'Svangerskapspenger'
      : intl.formatMessage({ id: 'TilretteleggingPerioderTabellRad.Tilrettelegging' });
  }

  if (opphold?.oppholdÅrsak === undefined) {
    return intl.formatMessage({ id: 'TilretteleggingPerioderTabellRad.Opphold' });
  }

  return intl.formatMessage({
    id:
      opphold?.oppholdÅrsak === 'FERIE'
        ? 'TilretteleggingPerioderTabellRad.Ferie'
        : 'TilretteleggingPerioderTabellRad.Sykepenger',
  });
};

const utledKilde = (
  intl: IntlShape,
  tilrettelegging?: ArbeidsforholdTilretteleggingDato,
  opphold?: SvpAvklartOppholdPeriode,
) => {
  if (tilrettelegging) {
    if (tilrettelegging.manueltLagtTil || tilrettelegging.fom === undefined) {
      return intl.formatMessage({ id: 'TilretteleggingPerioderTabellRad.Saksbehandler' });
    }

    return intl.formatMessage({
      id: tilrettelegging.manueltEndret
        ? 'TilretteleggingPerioderTabellRad.EndretAvSaksbehandler'
        : 'TilretteleggingPerioderTabellRad.Soknad',
    });
  }
  if (opphold?.oppholdÅrsak === 'FERIE') {
    return intl.formatMessage({
      id: opphold?.forVisning
        ? 'TilretteleggingPerioderTabellRad.Inntektsmelding'
        : 'TilretteleggingPerioderTabellRad.Saksbehandler',
    });
  }
  return intl.formatMessage({ id: 'TilretteleggingPerioderTabellRad.Saksbehandler' });
};

interface WrapperProps {
  navn: string;
  tilrettelegging?: ArbeidsforholdTilretteleggingDato;
  opphold?: SvpAvklartOppholdPeriode;
  readOnly: boolean;
  index: number;
  openRad: boolean;
  fjernTilretteleggingEllerOpphold: (erTilrettelegging: boolean) => void;
  setLeggTilKnapperDisablet: React.Dispatch<React.SetStateAction<boolean>>;
}

const TilretteleggingPerioderTabellRad: FunctionComponent<WrapperProps> = ({
  navn,
  tilrettelegging,
  opphold,
  index,
  readOnly,
  openRad,
  fjernTilretteleggingEllerOpphold,
  setLeggTilKnapperDisablet,
}) => {
  const intl = useIntl();
  const [open, setOpen] = useState(openRad);

  const { setValue, watch } = useFormContext();

  const fom = tilrettelegging ? tilrettelegging.fom : opphold?.fom;
  const tom = tilrettelegging ? tilrettelegging.tom : opphold?.tom;

  const oppdaterTilrettelegging = (values: ArbeidsforholdTilretteleggingDato) => {
    setOpen(false);
    setLeggTilKnapperDisablet(false);
    // TODO Om ein endrar tom så lukkar rada seg for fort
    setValue(navn, values);
  };
  const oppdaterOpphold = (values: SvpAvklartOppholdPeriode) => {
    setOpen(false);
    setLeggTilKnapperDisablet(false);
    // TODO Om ein endrar tom så lukkar rada seg for fort
    setValue(navn, values);
  };
  const avbrytEditering = () => {
    if (!fom) {
      fjernTilretteleggingEllerOpphold(!!tilrettelegging);
    }
    setLeggTilKnapperDisablet(false);
    setOpen(false);
  };

  const termindato = watch('termindato');

  const erVedtatt = tilrettelegging ? tilrettelegging.erVedtatt : opphold?.erVedtatt;

  return (
    <Table.ExpandableRow
      open={open}
      onClick={() => setOpen(!open)}
      content={
        <>
          {open && tilrettelegging && (
            <TilretteleggingForm
              tilrettelegging={tilrettelegging}
              termindato={termindato}
              index={index}
              oppdaterTilrettelegging={oppdaterTilrettelegging}
              avbrytEditering={avbrytEditering}
              readOnly={readOnly}
            />
          )}
          {open && opphold && (
            <OppholdForm
              opphold={opphold}
              index={index}
              oppdaterOpphold={oppdaterOpphold}
              avbrytEditering={avbrytEditering}
              readOnly={readOnly}
            />
          )}
        </>
      }
      togglePlacement="right"
      className={open ? styles.openRow : styles.row}
    >
      <Table.DataCell>
        {fom ? (
          <PeriodLabel dateStringFom={fom} dateStringTom={tom} />
        ) : (
          <FormattedMessage id="TilretteleggingPerioderTabellRad.Periode" />
        )}
      </Table.DataCell>
      <Table.DataCell>{utledTypeTekst(intl, tilrettelegging, opphold)}</Table.DataCell>
      <Table.DataCell>
        <Tag size="small" variant={erVedtatt ? 'success-moderate' : 'neutral-moderate'}>
          <FormattedMessage
            id={erVedtatt ? 'TilretteleggingPerioderTabellRad.Vedtatt' : 'TilretteleggingPerioderTabellRad.Ny'}
          />
        </Tag>
      </Table.DataCell>
      <Table.DataCell>
        <Tag size="small" variant="neutral-moderate">
          {utledKilde(intl, tilrettelegging, opphold)}
        </Tag>
      </Table.DataCell>
    </Table.ExpandableRow>
  );
};

export default TilretteleggingPerioderTabellRad;
