import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Table } from '@navikt/ds-react';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';

import type { ArbeidsforholdFodselOgTilrettelegging, SvpAvklartOppholdPeriode } from '@navikt/fp-types';

import type { TilretteleggingFormValues } from '../../../../types/TilretteleggingFormValues';
import { OppholdForm } from './OppholdForm';

import styles from './oppholdPeriodeTabellRad.module.css';

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
      className={open ? styles['openRow'] : undefined}
    >
      <Table.DataCell>
        {opphold.fom ? (
          <PeriodLabel dateStringFom={opphold.fom} dateStringTom={opphold.tom} />
        ) : (
          <FormattedMessage id="OppholdPeriodeTabellRad.IkkeSatt" />
        )}
      </Table.DataCell>
      <Table.DataCell>{utledTypeTekst(opphold)}</Table.DataCell>
      <Table.DataCell>{utledKilde(opphold)}</Table.DataCell>
    </Table.ExpandableRow>
  );
};

const utledTypeTekst = (opphold: Partial<SvpAvklartOppholdPeriode>) => {
  if (opphold.oppholdÅrsak === undefined) {
    return <FormattedMessage id="OppholdPeriodeTabellRad.Opphold" />;
  }

  return opphold.oppholdÅrsak === 'FERIE' ? (
    <FormattedMessage id="OppholdPeriodeTabellRad.Ferie" />
  ) : (
    <FormattedMessage id="OppholdPeriodeTabellRad.Sykepenger" />
  );
};

const utledKilde = (opphold: SvpAvklartOppholdPeriode) => {
  switch (opphold.oppholdKilde) {
    case 'SØKNAD':
      return <FormattedMessage id="Kilde.Soknad" />;
    case 'INNTEKTSMELDING':
      return <FormattedMessage id="Kilde.Inntektsmelding" />;
    case 'TIDLIGERE_VEDTAK':
      return <FormattedMessage id="Kilde.TidligereVedtak" />;
    default:
      return <FormattedMessage id="Kilde.Saksbehandler" />;
  }
};
