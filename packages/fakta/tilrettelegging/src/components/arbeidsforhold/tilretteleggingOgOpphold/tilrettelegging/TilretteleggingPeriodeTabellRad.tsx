import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { XMarkIcon } from '@navikt/aksel-icons';
import { Button, Table } from '@navikt/ds-react';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';

import { type SvpTilretteleggingDatoDto } from '@navikt/fp-types';

import type { Tilrettelegging, TilretteleggingFormValues } from '../../../../types/TilretteleggingFormValues';
import {
  finnProsentSvangerskapspenger,
  finnVelferdspermisjonprosent,
  TilretteleggingForm,
} from './TilretteleggingForm';

import styles from './tilretteleggingPeriodeTabellRad.module.css';

interface Props {
  navn: `arbeidsforhold.${number}.tilretteleggingDatoer.${number}`;
  tilretteleggingDato: SvpTilretteleggingDatoDto;
  readOnly: boolean;
  disabled: boolean;
  index: number;
  openRad: boolean;
  fjernTilrettelegging: (fomDato?: string) => void;
  setLeggTilKnapperDisablet: React.Dispatch<React.SetStateAction<boolean>>;
  stillingsprosentArbeidsforhold: number;
  tilrettelegging: Tilrettelegging;
  tomDatoForTilrettelegging: string;
  termindato: string;
}

export const TilretteleggingPeriodeTabellRad = ({
  navn,
  tilretteleggingDato,
  index,
  readOnly,
  disabled,
  openRad,
  fjernTilrettelegging,
  setLeggTilKnapperDisablet,
  stillingsprosentArbeidsforhold,
  tilrettelegging,
  tomDatoForTilrettelegging,
  termindato,
}: Props) => {
  const intl = useIntl();
  const [open, setOpen] = useState(openRad);

  const { setValue } = useFormContext<TilretteleggingFormValues>();

  const oppdaterTilrettelegging = (values: SvpTilretteleggingDatoDto) => {
    setOpen(false);
    setLeggTilKnapperDisablet(false);
    setValue(navn, values, { shouldDirty: true });
  };

  const avbrytEditering = () => {
    if (!tilretteleggingDato.fom) {
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
      content={
        <TilretteleggingForm
          tilretteleggingDato={tilretteleggingDato}
          termindato={termindato}
          index={index}
          oppdaterTilrettelegging={oppdaterTilrettelegging}
          avbrytEditering={avbrytEditering}
          readOnly={readOnly}
          disabled={disabled}
          stillingsprosentArbeidsforhold={stillingsprosentArbeidsforhold}
          tilrettelegging={tilrettelegging}
          tomDatoForTilrettelegging={tomDatoForTilrettelegging}
        />
      }
      className={open ? styles['openRow'] : undefined}
    >
      <Table.DataCell>
        {tilretteleggingDato.fom ? (
          <PeriodLabel dateStringFom={tilretteleggingDato.fom} dateStringTom={tomDatoForTilrettelegging} />
        ) : (
          <FormattedMessage id="TilretteleggingPeriodeTabellRad.IkkeSatt" />
        )}
      </Table.DataCell>
      <Table.DataCell>
        <TilretteleggingType
          stillingsprosentArbeidsforhold={stillingsprosentArbeidsforhold}
          tilrettelegging={tilrettelegging}
          tilretteleggingDato={tilretteleggingDato}
        />
      </Table.DataCell>
      <Table.DataCell>
        <TilretteleggingKilde tilretteleggingDato={tilretteleggingDato} />
      </Table.DataCell>
      <Table.DataCell width={48}>
        {tilretteleggingDato.fom && !(readOnly || disabled) && (
          <Button
            size="small"
            variant="tertiary-neutral"
            icon={<XMarkIcon aria-hidden />}
            aria-label={intl.formatMessage({ id: 'TilretteleggingPeriodeTabellRad.SlettPeriode' })}
            title={intl.formatMessage({ id: 'TilretteleggingPeriodeTabellRad.SlettPeriode' })}
            onClick={() => fjernTilrettelegging(tilretteleggingDato.fom)}
            type="button"
          />
        )}
      </Table.DataCell>
    </Table.ExpandableRow>
  );
};

const TilretteleggingType = ({
  stillingsprosentArbeidsforhold,
  tilrettelegging,
  tilretteleggingDato,
}: {
  stillingsprosentArbeidsforhold: number;
  tilrettelegging: Tilrettelegging;
  tilretteleggingDato: SvpTilretteleggingDatoDto;
}) => {
  const velferdspermisjonsprosent = finnVelferdspermisjonprosent(tilrettelegging);
  const stillingsprosent =
    tilretteleggingDato.type === 'INGEN_TILRETTELEGGING' ? 100 : tilretteleggingDato.stillingsprosent;
  const prosent =
    tilretteleggingDato.fom && stillingsprosent
      ? finnProsentSvangerskapspenger(tilretteleggingDato, stillingsprosentArbeidsforhold, velferdspermisjonsprosent)
      : 0;
  return tilretteleggingDato.fom ? (
    <FormattedMessage id="TilretteleggingPeriodeTabellRad.SVPprosent" values={{ prosent: prosent ?? '0' }} />
  ) : (
    <FormattedMessage id="TilretteleggingPeriodeTabellRad.IkkeSatt" />
  );
};

const TilretteleggingKilde = ({ tilretteleggingDato }: { tilretteleggingDato: SvpTilretteleggingDatoDto }) => {
  switch (tilretteleggingDato.kilde) {
    case 'ENDRET_AV_SAKSBEHANDLER':
      return <FormattedMessage id="Kilde.EndretAvSaksbehandler" />;
    case 'TIDLIGERE_VEDTAK':
      return <FormattedMessage id="Kilde.TidligereVedtak" />;
    case 'SØKNAD':
      return <FormattedMessage id="Kilde.Soknad" />;
    default:
      return <FormattedMessage id="Kilde.Saksbehandler" />;
  }
};
