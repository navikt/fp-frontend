import React, { FunctionComponent, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { Table, Tag } from '@navikt/ds-react';
import { ArbeidsforholdFodselOgTilrettelegging, SvpAvklartOppholdPeriode } from '@navikt/fp-types';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';

import OppholdForm from './OppholdForm';

import styles from './oppholdPeriodeTabellRad.module.css';

const utledTypeTekst = (intl: IntlShape, opphold: SvpAvklartOppholdPeriode) => {
  if (opphold.oppholdÅrsak === undefined) {
    return intl.formatMessage({ id: 'TilretteleggingPerioderTabellRad.Opphold' });
  }

  return opphold.oppholdÅrsak === 'FERIE'
    ? intl.formatMessage({
        id: 'TilretteleggingPerioderTabellRad.Ferie',
      })
    : intl.formatMessage({
        id: 'TilretteleggingPerioderTabellRad.Sykepenger',
      });
};

const utledKilde = (intl: IntlShape, opphold: SvpAvklartOppholdPeriode) => {
  switch (opphold.oppholdKilde) {
    case 'SØKNAD':
      return intl.formatMessage({ id: 'TilretteleggingPerioderTabellRad.Soknad' });
    case 'INNTEKTSMELDING':
      return intl.formatMessage({ id: 'TilretteleggingPerioderTabellRad.Inntektsmelding' });
    default:
      return intl.formatMessage({ id: 'TilretteleggingPerioderTabellRad.Saksbehandler' });
  }
};

interface OwnProps {
  navn: string;
  opphold: SvpAvklartOppholdPeriode;
  readOnly: boolean;
  index: number;
  openRad: boolean;
  fjernOpphold: (fomDato?: string) => void;
  setLeggTilKnapperDisablet: React.Dispatch<React.SetStateAction<boolean>>;
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging;
  termindato: string;
}

const OppholdPeriodeTabellRad: FunctionComponent<OwnProps> = ({
  navn,
  opphold,
  index,
  readOnly,
  openRad,
  fjernOpphold,
  setLeggTilKnapperDisablet,
  arbeidsforhold,
  termindato,
}) => {
  const intl = useIntl();
  const [open, setOpen] = useState(openRad);

  const { setValue } = useFormContext();

  const oppdaterOpphold = (values: SvpAvklartOppholdPeriode) => {
    setOpen(false);
    setLeggTilKnapperDisablet(false);
    setValue(navn, values, { shouldDirty: true });
  };

  const avbrytEditering = () => {
    if (!opphold.fom) {
      fjernOpphold();
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
      content={
        <OppholdForm
          opphold={opphold}
          index={index}
          oppdaterOpphold={oppdaterOpphold}
          avbrytEditering={avbrytEditering}
          readOnly={readOnly}
          alleTilrettelegginger={arbeidsforhold.tilretteleggingDatoer}
          alleOpphold={arbeidsforhold.avklarteOppholdPerioder}
          termindato={termindato}
          slettOpphold={fjernOpphold}
        />
      }
      togglePlacement="right"
      className={open ? styles.openRow : styles.row}
    >
      <Table.DataCell>
        {opphold.fom ? (
          <PeriodLabel dateStringFom={opphold.fom} dateStringTom={opphold.tom} />
        ) : (
          <FormattedMessage id="TilretteleggingPerioderTabellRad.Periode" />
        )}
      </Table.DataCell>
      <Table.DataCell>{utledTypeTekst(intl, opphold)}</Table.DataCell>
      <Table.DataCell>
        <Tag size="small" variant="neutral-moderate">
          {utledKilde(intl, opphold)}
        </Tag>
      </Table.DataCell>
    </Table.ExpandableRow>
  );
};

export default OppholdPeriodeTabellRad;
