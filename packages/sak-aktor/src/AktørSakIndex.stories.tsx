import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { FagsakStatus, FagsakYtelseType, KodeverkType, NavBrukerKjonn } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { FagsakEnkel } from '@navikt/fp-types';

import { AktørSakIndex } from './AktørSakIndex';

import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-plattform-komponenter/dist/style.css';

const FAGSAK = {
  saksnummer: '35425245',
  fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
  status: FagsakStatus.UNDER_BEHANDLING,
  opprettet: '2020-01-01',
  endret: '2020-01-01',
} as FagsakEnkel;

const meta = {
  title: 'sak/sak-aktor',
  component: AktørSakIndex,
  args: {
    valgtAktorId: '123',
    fagsakStatuser: alleKodeverk[KodeverkType.FAGSAK_STATUS],
    fagsakYtelseTyper: alleKodeverk[KodeverkType.FAGSAK_YTELSE],
    renderSomLenke: (className, fagsakKomponent) => (
      <button type="button" className={className}>
        {fagsakKomponent}
      </button>
    ),
  },
} satisfies Meta<typeof AktørSakIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    aktorInfo: {
      fagsaker: [
        FAGSAK,
        {
          ...FAGSAK,
          saksnummer: '123',
        },
      ],
      person: {
        navn: 'Espen Utvikler',
        kjønn: NavBrukerKjonn.MANN,
        fødselsdato: '1979-01-01',
        fødselsnummer: '123456233',
        aktørId: '2323',
      },
    },
  },
};

export const UgyldigAktørId: Story = {};
