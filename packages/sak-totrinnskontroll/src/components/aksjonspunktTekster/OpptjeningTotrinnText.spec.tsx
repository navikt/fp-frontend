import React from 'react';
import { FormattedMessage } from 'react-intl';

import { OpptjeningAktiviteter } from '@fpsak-frontend/types';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import OpptjeningTotrinnText from './OpptjeningTotrinnText';
import messages from '../../../i18n/nb_NO.json';

const lagOpptjeningAktivitetArbeidMedNavn = (resultat: string): OpptjeningAktiviteter => ({
  erEndring: resultat === 'ENDRING',
  aktivitetType: 'Arbeid',
  arbeidsgiverNavn: 'Andersen Transport AS',
  orgnr: '1234567890',
  godkjent: resultat === 'GODKJENT',
});

const lagOpptjeningAktivitetArbeidUtenNavn = (resultat: string): OpptjeningAktiviteter => ({
  erEndring: resultat === 'ENDRING',
  aktivitetType: 'Arbeid',
  arbeidsgiverNavn: undefined,
  orgnr: '1234567890',
  godkjent: resultat === 'GODKJENT',
});

const lagOpptjeningAktivitet = (resultat: string): OpptjeningAktiviteter => ({
  erEndring: resultat === 'ENDRING',
  aktivitetType: 'Aktivitet',
  arbeidsgiverNavn: undefined,
  orgnr: undefined,
  godkjent: resultat === 'GODKJENT',
});

describe('<OpptjeningTotrinnnText>', () => {
  it('skal vise korrekt tekst for opptjening med endring av arbeid med navn', () => {
    const wrapper = shallowWithIntl(<OpptjeningTotrinnText
      aktivitet={lagOpptjeningAktivitetArbeidMedNavn('ENDRING')}
    />, messages);
    const normaltekstFields = wrapper.find(FormattedMessage);
    expect(normaltekstFields).toHaveLength(1);
    expect(normaltekstFields.at(0).prop('id')).toEqual('ToTrinnsForm.Opptjening.EndringArbeidMedNavn');
  });

  it('skal vise korrekt tekst for opptjening med endring av arbeid uten navn', () => {
    const wrapper = shallowWithIntl(<OpptjeningTotrinnText
      aktivitet={lagOpptjeningAktivitetArbeidUtenNavn('ENDRING')}
    />, messages);
    const normaltekstFields = wrapper.find(FormattedMessage);
    expect(normaltekstFields).toHaveLength(1);
    expect(normaltekstFields.at(0).prop('id')).toEqual('ToTrinnsForm.Opptjening.EndringArbeidUtenNavn');
  });

  it('skal vise korrekt tekst for opptjening med endring av aktivitet', () => {
    const wrapper = shallowWithIntl(<OpptjeningTotrinnText
      aktivitet={lagOpptjeningAktivitet('ENDRING')}
    />, messages);
    const normaltekstFields = wrapper.find(FormattedMessage);
    expect(normaltekstFields).toHaveLength(1);
    expect(normaltekstFields.at(0).prop('id')).toEqual('ToTrinnsForm.Opptjening.EndringAktivitet');
  });

  it('skal vise korrekt tekst for opptjening med godkjenning av arbeid med navn', () => {
    const wrapper = shallowWithIntl(<OpptjeningTotrinnText
      aktivitet={lagOpptjeningAktivitetArbeidMedNavn('GODKJENT')}
    />, messages);
    const normaltekstFields = wrapper.find(FormattedMessage);
    expect(normaltekstFields).toHaveLength(1);
    expect(normaltekstFields.at(0).prop('id')).toEqual('ToTrinnsForm.Opptjening.GodkjenningArbeidMedNavn');
  });

  it('skal vise korrekt tekst for opptjening med godkjenning av arbeid uten navn', () => {
    const wrapper = shallowWithIntl(<OpptjeningTotrinnText
      aktivitet={lagOpptjeningAktivitetArbeidUtenNavn('GODKJENT')}
    />, messages);
    const normaltekstFields = wrapper.find(FormattedMessage);
    expect(normaltekstFields).toHaveLength(1);
    expect(normaltekstFields.at(0).prop('id')).toEqual('ToTrinnsForm.Opptjening.GodkjenningArbeidUtenNavn');
  });

  it('skal vise korrekt tekst for opptjening med godkjenning av aktivitet', () => {
    const wrapper = shallowWithIntl(<OpptjeningTotrinnText
      aktivitet={lagOpptjeningAktivitet('GODKJENT')}
    />, messages);
    const normaltekstFields = wrapper.find(FormattedMessage);
    expect(normaltekstFields).toHaveLength(1);
    expect(normaltekstFields.at(0).prop('id')).toEqual('ToTrinnsForm.Opptjening.GodkjenningAktivitet');
  });

  it('skal vise korrekt tekst for opptjening med underkjenning av arbeid med navn', () => {
    const wrapper = shallowWithIntl(<OpptjeningTotrinnText
      aktivitet={lagOpptjeningAktivitetArbeidMedNavn('UNDERKJENNING')}
    />, messages);
    const normaltekstFields = wrapper.find(FormattedMessage);
    expect(normaltekstFields).toHaveLength(1);
    expect(normaltekstFields.at(0).prop('id')).toEqual('ToTrinnsForm.Opptjening.UnderkjenningArbeidMedNavn');
  });

  it('skal vise korrekt tekst for opptjening med underkjenning av arbeid uten navn', () => {
    const wrapper = shallowWithIntl(<OpptjeningTotrinnText
      aktivitet={lagOpptjeningAktivitetArbeidUtenNavn('UNDERKJENNING')}
    />, messages);
    const normaltekstFields = wrapper.find(FormattedMessage);
    expect(normaltekstFields).toHaveLength(1);
    expect(normaltekstFields.at(0).prop('id')).toEqual('ToTrinnsForm.Opptjening.UnderkjenningArbeidUtenNavn');
  });

  it('skal vise korrekt tekst for opptjening med underkjenning av aktivitet', () => {
    const wrapper = shallowWithIntl(<OpptjeningTotrinnText
      aktivitet={lagOpptjeningAktivitet('UNDERKJENNING')}
    />, messages);
    const normaltekstFields = wrapper.find(FormattedMessage);
    expect(normaltekstFields).toHaveLength(1);
    expect(normaltekstFields.at(0).prop('id')).toEqual('ToTrinnsForm.Opptjening.UnderkjenningAktivitet');
  });
});
