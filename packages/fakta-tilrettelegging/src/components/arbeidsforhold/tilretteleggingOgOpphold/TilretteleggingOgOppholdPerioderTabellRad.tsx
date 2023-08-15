import React, { FunctionComponent, useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { Table, Tag } from '@navikt/ds-react';
import {
  ArbeidsforholdFodselOgTilrettelegging,
  ArbeidsforholdTilretteleggingDato,
  SvpAvklartOppholdPeriode,
  SvpTilretteleggingFomKilde,
} from '@navikt/fp-types';

import { PeriodLabel } from '@navikt/ft-ui-komponenter';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { tilretteleggingType } from '@navikt/fp-kodeverk';
import TilretteleggingForm, {
  finnVelferdspermisjonprosent,
  finnProsentSvangerskapspenger,
} from './tilrettelegging/TilretteleggingForm';
import OppholdForm from './opphold/OppholdForm';

import styles from './tilretteleggingOgOppholdPerioderTabellRad.module.css';

const utledTypeTekst = (
  intl: IntlShape,
  stillingsprosentArbeidsforhold: number,
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging,
  tilrettelegging?: ArbeidsforholdTilretteleggingDato,
  opphold?: SvpAvklartOppholdPeriode,
) => {
  if (tilrettelegging) {
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

interface OwnProps {
  navn: string;
  tilrettelegging?: ArbeidsforholdTilretteleggingDato;
  opphold?: SvpAvklartOppholdPeriode;
  readOnly: boolean;
  index: number;
  openRad: boolean;
  fjernTilretteleggingEllerOpphold: (erTilrettelegging: boolean) => void;
  setLeggTilKnapperDisablet: React.Dispatch<React.SetStateAction<boolean>>;
  stillingsprosentArbeidsforhold: number;
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging;
  tomDatoForTilrettelegging: string;
  termindato: string;
}

const TilretteleggingOgOppholdPerioderTabellRad: FunctionComponent<OwnProps> = ({
  navn,
  tilrettelegging,
  opphold,
  index,
  readOnly,
  openRad,
  fjernTilretteleggingEllerOpphold,
  setLeggTilKnapperDisablet,
  stillingsprosentArbeidsforhold,
  arbeidsforhold,
  tomDatoForTilrettelegging,
  termindato,
}) => {
  const intl = useIntl();
  const [open, setOpen] = useState(openRad);

  const { setValue, control } = useFormContext();
  const { remove } = useFieldArray({
    control,
    name: navn,
  });

  const fom = tilrettelegging ? tilrettelegging.fom : opphold?.fom;
  const tom = tilrettelegging ? tomDatoForTilrettelegging : opphold?.tom;

  const oppdaterTilretteleggingEllerOpphold = (
    values: ArbeidsforholdTilretteleggingDato | SvpAvklartOppholdPeriode,
  ) => {
    setOpen(false);
    setLeggTilKnapperDisablet(false);
    setValue(navn, values);
  };

  const avbrytEditering = () => {
    if (!fom) {
      fjernTilretteleggingEllerOpphold(!!tilrettelegging);
    }
    setLeggTilKnapperDisablet(false);
    setOpen(false);
  };

  const slettOpphold = () => {
    remove(index);
  };

  return (
    <Table.ExpandableRow
      open={open}
      onClick={() => setOpen(!open)}
      content={
        <>
          {tilrettelegging && (
            <TilretteleggingForm
              tilrettelegging={tilrettelegging}
              termindato={termindato}
              index={index}
              oppdaterTilrettelegging={oppdaterTilretteleggingEllerOpphold}
              avbrytEditering={avbrytEditering}
              readOnly={readOnly}
              stillingsprosentArbeidsforhold={stillingsprosentArbeidsforhold}
              arbeidsforhold={arbeidsforhold}
              tomDatoForTilrettelegging={tomDatoForTilrettelegging}
            />
          )}
          {opphold && (
            <OppholdForm
              opphold={opphold}
              index={index}
              oppdaterOpphold={oppdaterTilretteleggingEllerOpphold}
              avbrytEditering={avbrytEditering}
              readOnly={readOnly}
              alleTilrettelegginger={arbeidsforhold.tilretteleggingDatoer}
              alleOpphold={arbeidsforhold.avklarteOppholdPerioder}
              termindato={termindato}
              slettOpphold={slettOpphold}
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
      <Table.DataCell>
        {utledTypeTekst(intl, stillingsprosentArbeidsforhold, arbeidsforhold, tilrettelegging, opphold)}
      </Table.DataCell>
      <Table.DataCell>
        <Tag size="small" variant="neutral-moderate">
          {utledKilde(intl, tilrettelegging, opphold)}
        </Tag>
      </Table.DataCell>
    </Table.ExpandableRow>
  );
};

export default TilretteleggingOgOppholdPerioderTabellRad;
