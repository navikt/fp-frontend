import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { XMarkIcon } from '@navikt/aksel-icons';
import { Button, Table } from '@navikt/ds-react';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';

import type { SvpArbeidsforholdDto, SvpAvklartOppholdPeriode } from '@navikt/fp-types';

import type { TilretteleggingFormValues } from '../../../../types/TilretteleggingFormValues';
import { OppholdForm } from './OppholdForm';

import styles from './oppholdPeriodeTabellRad.module.css';

interface Props {
  navn: `arbeidsforhold.${number}.avklarteOppholdPerioder.${number}`;
  opphold: SvpAvklartOppholdPeriode;
  readOnly: boolean;
  disabled: boolean;
  index: number;
  openRad: boolean;
  fjernOpphold: (opphold?: SvpAvklartOppholdPeriode) => void;
  setLeggTilKnapperDisablet: React.Dispatch<React.SetStateAction<boolean>>;
  arbeidsforhold: SvpArbeidsforholdDto;
  termindato: string;
}

export const OppholdPeriodeTabellRad = ({
  navn,
  opphold,
  index,
  readOnly,
  disabled,
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
      content={
        <OppholdForm
          opphold={opphold}
          index={index}
          oppdaterOpphold={oppdaterOpphold}
          avbrytEditering={avbrytEditering}
          readOnly={readOnly}
          disabled={disabled}
          alleTilrettelegginger={arbeidsforhold.tilretteleggingDatoer}
          alleOpphold={arbeidsforhold.avklarteOppholdPerioder}
          termindato={termindato}
        />
      }
      className={open ? styles['openRow'] : undefined}
    >
      <Table.DataCell>
        {opphold.fom ? (
          <PeriodLabel dateStringFom={opphold.fom} dateStringTom={opphold.tom} />
        ) : (
          <FormattedMessage id="OppholdPeriodeTabellRad.IkkeSatt" />
        )}
      </Table.DataCell>

      <Table.DataCell>
        <OppholdType opphold={opphold} />
      </Table.DataCell>
      <Table.DataCell>
        <OppholdKilde opphold={opphold} />
      </Table.DataCell>
      <Table.DataCell width={48}>
        {!readOnly && !disabled && opphold.fom && (
          <Button
            size="small"
            variant="tertiary-neutral"
            icon={<XMarkIcon aria-hidden />}
            aria-label={intl.formatMessage({ id: 'OppholdPeriodeTabellRad.SlettPeriode' })}
            title={intl.formatMessage({ id: 'OppholdPeriodeTabellRad.SlettPeriode' })}
            onClick={() => fjernOpphold(opphold)}
            type="button"
            disabled={opphold.oppholdKilde === 'INNTEKTSMELDING'}
          />
        )}
      </Table.DataCell>
    </Table.ExpandableRow>
  );
};

const OppholdType = ({ opphold }: { opphold: Partial<SvpAvklartOppholdPeriode> }) => {
  if (opphold.oppholdÅrsak === undefined) {
    return <FormattedMessage id="OppholdPeriodeTabellRad.Opphold" />;
  }

  return opphold.oppholdÅrsak === 'FERIE' ? (
    <FormattedMessage id="OppholdPeriodeTabellRad.Ferie" />
  ) : (
    <FormattedMessage id="OppholdPeriodeTabellRad.Sykepenger" />
  );
};

const OppholdKilde = ({ opphold }: { opphold: SvpAvklartOppholdPeriode }) => {
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
