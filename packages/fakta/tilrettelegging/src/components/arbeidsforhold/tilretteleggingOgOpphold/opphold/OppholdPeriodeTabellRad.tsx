import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { Table, Tag } from '@navikt/ds-react';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';

import type { ArbeidsforholdFodselOgTilrettelegging, SvpAvklartOppholdPeriode } from '@navikt/fp-types';

import type { TilretteleggingFormValues } from '../../../../types/TilretteleggingFormValues';
import { OppholdForm } from './OppholdForm';

import styles from './oppholdPeriodeTabellRad.module.css';

const utledTypeTekst = (intl: IntlShape, opphold: Partial<SvpAvklartOppholdPeriode>) => {
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
    case 'TIDLIGERE_VEDTAK':
      return intl.formatMessage({ id: 'TilretteleggingPerioderTabellRad.TidligereVedtak' });
    default:
      return intl.formatMessage({ id: 'TilretteleggingPerioderTabellRad.Saksbehandler' });
  }
};

interface Props {
  navn: `arbeidsforhold.${number}.avklarteOppholdPerioder.${number}`;
  opphold: SvpAvklartOppholdPeriode;
  readOnly: boolean;
  index: number;
  openRad: boolean;
  fjernOpphold: (opphold?: SvpAvklartOppholdPeriode) => void;
  setLeggTilKnapperDisablet: React.Dispatch<React.SetStateAction<boolean>>;
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging;
  termindato: string;
}

export const OppholdPeriodeTabellRad = ({
  navn,
  opphold,
  index,
  readOnly,
  openRad,
  fjernOpphold,
  setLeggTilKnapperDisablet,
  arbeidsforhold,
  termindato,
}: Props) => {
  const intl = useIntl();
  const [open, setOpen] = useState(openRad);

  const { setValue } = useFormContext<TilretteleggingFormValues>();

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
      contentGutter="none"
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
      className={open ? styles['openRow'] : styles['row']}
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
