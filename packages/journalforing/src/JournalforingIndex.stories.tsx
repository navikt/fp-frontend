import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import RestApiMock from '@navikt/fp-utils-test/src/rest/RestApiMock';
import { withRouter } from '@navikt/fp-storybook-utils';
import { NavAnsatt } from '@navikt/fp-types';

import { RestApiPathsKeys, requestApi } from './data/fpfordelRestApi';
import JournalforingIndex from './JournalforingIndex';
import OppgaveOversikt from './typer/oppgaveOversiktTsType';
import OppgavePrioritet from './kodeverk/oppgavePrioritet';

export default {
  title: 'journalføring/journalføring/JournalforingIndex',
  component: JournalforingIndex,
  decorators: [withRouter],
};

const navAnsattDefault = {
  kanOppgavestyre: true,
  kanBehandleKode6: true,
} as NavAnsatt;

const Template: Story<{ alleOppgaver?: OppgaveOversikt[], navAnsatt: NavAnsatt }> = ({
  alleOppgaver,
  navAnsatt,
}) => {
  const data = [
    { key: RestApiPathsKeys.ALLE_JOURNAL_OPPGAVER.name, data: alleOppgaver || undefined },
  ];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <JournalforingIndex navAnsatt={navAnsatt} />
    </RestApiMock>
  );
};

export const ViseOppgaverIListe = Template.bind({});
ViseOppgaverIListe.args = {
  alleOppgaver: [
    {
      id: 600,
      journalpostId: '12345125',
      aktørId: '9996923456799',
      fødselsnummer: '11119047182',
      opprettetDato: '2022-01-01',
      frist: '2022-02-01',
      ytelseType: 'FP',
      journalpostHarMangler: false,
      prioritet: OppgavePrioritet.NORM,
      beskrivelse: 'Inntektsmelding',
    },
    {
      id: 700,
      journalpostId: '245745871',
      aktørId: '274572457624',
      fødselsnummer: '12018847182',
      opprettetDato: '2022-01-01',
      frist: '2022-03-01',
      ytelseType: 'SVP',
      journalpostHarMangler: false,
      prioritet: OppgavePrioritet.NORM,
      beskrivelse: 'Inntektsmelding',
    },
    {
      id: 800,
      journalpostId: '345681257',
      opprettetDato: '2022-01-01',
      frist: '2022-01-01',
      ytelseType: 'FP',
      journalpostHarMangler: true,
      prioritet: OppgavePrioritet.HØY,
      beskrivelse: 'Søknad',
    },
  ],
  navAnsatt: navAnsattDefault,
};

export const IngenOppgaver = Template.bind({});
IngenOppgaver.args = {
  alleOppgaver: [],
  navAnsatt: navAnsattDefault,
};
