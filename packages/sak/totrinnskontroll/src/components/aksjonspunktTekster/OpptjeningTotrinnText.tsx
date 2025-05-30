import { FormattedMessage } from 'react-intl';

import type { OpptjeningAktiviteter } from '@navikt/fp-types';

const mapAktivitetTextEndring = (aktivitetType?: string, arbeidsgiverNavn?: string, orgnr?: string) => {
  if (arbeidsgiverNavn && orgnr) {
    return (
      <FormattedMessage
        id="ToTrinnsForm.Opptjening.EndringArbeidMedNavn"
        values={{ a: aktivitetType, b: arbeidsgiverNavn, c: orgnr }}
      />
    );
  }
  if (orgnr) {
    return (
      <FormattedMessage id="ToTrinnsForm.Opptjening.EndringArbeidUtenNavn" values={{ a: aktivitetType, b: orgnr }} />
    );
  }
  return <FormattedMessage id="ToTrinnsForm.Opptjening.EndringAktivitet" values={{ a: aktivitetType }} />;
};

const mapAktivitetTextUnderkjenning = (aktivitetType?: string, arbeidsgiverNavn?: string, orgnr?: string) => {
  if (arbeidsgiverNavn && orgnr) {
    return (
      <FormattedMessage
        id="ToTrinnsForm.Opptjening.UnderkjenningArbeidMedNavn"
        values={{
          a: aktivitetType,
          bb: arbeidsgiverNavn,
          c: orgnr,
          b: chunks => <b>{chunks}</b>,
        }}
      />
    );
  }
  if (orgnr) {
    return (
      <FormattedMessage
        id="ToTrinnsForm.Opptjening.UnderkjenningArbeidUtenNavn"
        values={{ a: aktivitetType, bb: orgnr, b: chunks => <b>{chunks}</b> }}
      />
    );
  }
  return (
    <FormattedMessage
      id="ToTrinnsForm.Opptjening.UnderkjenningAktivitet"
      values={{ a: aktivitetType, b: chunks => <b>{chunks}</b> }}
    />
  );
};

const mapAktivitetTextGodkjenning = (aktivitetType?: string, arbeidsgiverNavn?: string, orgnr?: string) => {
  if (arbeidsgiverNavn && orgnr) {
    return (
      <FormattedMessage
        id="ToTrinnsForm.Opptjening.GodkjenningArbeidMedNavn"
        values={{ a: aktivitetType, b: arbeidsgiverNavn, c: orgnr }}
      />
    );
  }
  if (orgnr) {
    return (
      <FormattedMessage
        id="ToTrinnsForm.Opptjening.GodkjenningArbeidUtenNavn"
        values={{ a: aktivitetType, b: orgnr }}
      />
    );
  }
  return <FormattedMessage id="ToTrinnsForm.Opptjening.GodkjenningAktivitet" values={{ a: aktivitetType }} />;
};

interface Props {
  aktivitet: OpptjeningAktiviteter;
}

export const OpptjeningTotrinnText = ({ aktivitet }: Props) => {
  if (aktivitet.erEndring) {
    return mapAktivitetTextEndring(
      aktivitet.aktivitetType ? aktivitet.aktivitetType.toLowerCase() : undefined,
      aktivitet.arbeidsgiverNavn,
      aktivitet.orgnr,
    );
  }
  if (aktivitet.godkjent) {
    return mapAktivitetTextGodkjenning(
      aktivitet.aktivitetType ? aktivitet.aktivitetType.toLowerCase() : undefined,
      aktivitet.arbeidsgiverNavn,
      aktivitet.orgnr,
    );
  }
  return mapAktivitetTextUnderkjenning(
    aktivitet.aktivitetType ? aktivitet.aktivitetType.toLowerCase() : undefined,
    aktivitet.arbeidsgiverNavn,
    aktivitet.orgnr,
  );
};
