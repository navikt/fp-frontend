import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { XMarkIcon } from '@navikt/aksel-icons';
import { Button, Table } from '@navikt/ds-react';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';

import { type ArbeidsforholdFodselOgTilrettelegging, type ArbeidsforholdTilretteleggingDato } from '@navikt/fp-types';

import type { TilretteleggingFormValues } from '../../../../types/TilretteleggingFormValues';
import {
  finnProsentSvangerskapspenger,
  finnVelferdspermisjonprosent,
  TilretteleggingForm,
} from './TilretteleggingForm';

import styles from './tilretteleggingPeriodeTabellRad.module.css';

interface Props {
  navn: `arbeidsforhold.${number}.tilretteleggingDatoer.${number}`;
  tilrettelegging: ArbeidsforholdTilretteleggingDato;
  readOnly: boolean;
  disabled: boolean;
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
  disabled,
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

  const { setValue } = useFormContext<TilretteleggingFormValues>();

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
      content={
        <TilretteleggingForm
          tilrettelegging={tilrettelegging}
          termindato={termindato}
          index={index}
          oppdaterTilrettelegging={oppdaterTilrettelegging}
          avbrytEditering={avbrytEditering}
          readOnly={readOnly}
          disabled={disabled}
          stillingsprosentArbeidsforhold={stillingsprosentArbeidsforhold}
          arbeidsforhold={arbeidsforhold}
          tomDatoForTilrettelegging={tomDatoForTilrettelegging}
        />
      }
      className={open ? styles['openRow'] : undefined}
    >
      <Table.DataCell>
        {tilrettelegging.fom ? (
          <PeriodLabel dateStringFom={tilrettelegging.fom} dateStringTom={tomDatoForTilrettelegging} />
        ) : (
          <FormattedMessage id="TilretteleggingPeriodeTabellRad.IkkeSatt" />
        )}
      </Table.DataCell>
      <Table.DataCell>{utledTypeTekst(stillingsprosentArbeidsforhold, arbeidsforhold, tilrettelegging)}</Table.DataCell>
      <Table.DataCell>{utledKilde(tilrettelegging)}</Table.DataCell>
      <Table.DataCell width={48}>
        {tilrettelegging.fom && !(readOnly || disabled) && (
          <Button
            size="small"
            variant="tertiary-neutral"
            icon={<XMarkIcon aria-hidden />}
            aria-label={intl.formatMessage({ id: 'TilretteleggingPeriodeTabellRad.SlettPeriode' })}
            title={intl.formatMessage({ id: 'TilretteleggingPeriodeTabellRad.SlettPeriode' })}
            onClick={() => fjernTilrettelegging(tilrettelegging.fom)}
            type="button"
          />
        )}
      </Table.DataCell>
    </Table.ExpandableRow>
  );
};

const utledTypeTekst = (
  stillingsprosentArbeidsforhold: number,
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging,
  tilrettelegging: ArbeidsforholdTilretteleggingDato,
) => {
  const velferdspermisjonsprosent = finnVelferdspermisjonprosent(arbeidsforhold);
  const stillingsprosent = tilrettelegging.type === 'INGEN_TILRETTELEGGING' ? 100 : tilrettelegging.stillingsprosent;
  const prosent =
    tilrettelegging.fom && stillingsprosent
      ? finnProsentSvangerskapspenger(tilrettelegging, stillingsprosentArbeidsforhold, velferdspermisjonsprosent)
      : 0;
  return tilrettelegging.fom ? (
    <FormattedMessage id="TilretteleggingPeriodeTabellRad.SVPprosent" values={{ prosent: prosent ?? '0' }} />
  ) : (
    <FormattedMessage id="TilretteleggingPeriodeTabellRad.Tilrettelegging" />
  );
};

const utledKilde = (tilrettelegging: ArbeidsforholdTilretteleggingDato) => {
  switch (tilrettelegging.kilde) {
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
