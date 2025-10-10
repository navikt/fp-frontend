import type { Meta, StoryObj } from '@storybook/react';

import { alleKodeverk } from '@navikt/fp-storybook-utils';
import type { FagsakEnkel } from '@navikt/fp-types';

import { AktørSakIndex } from './AktørSakIndex';

import '@navikt/ft-plattform-komponenter/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const FAGSAK = {
  saksnummer: '35425245',
  fagsakYtelseType: 'FP',
  status: 'UBEH',
  opprettet: '2020-01-01',
  endret: '2020-01-01',
} as FagsakEnkel;

const meta = {
  title: 'sak/sak-aktor',
  component: AktørSakIndex,
  args: {
    valgtAktorId: '123',
    fagsakStatuser: alleKodeverk['FagsakStatus'],
    fagsakYtelseTyper: alleKodeverk['FagsakYtelseType'],
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
        kjønn: 'M',
        fødselsdato: '1979-01-01',
        fødselsnummer: '123456233',
        aktørId: '2323',
        språkkode: 'NB',
      },
    },
  },
};

export const UgyldigAktørId: Story = {};
