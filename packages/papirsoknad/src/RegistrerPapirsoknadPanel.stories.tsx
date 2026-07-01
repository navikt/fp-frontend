import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { alleKodeverk, getIntlDecorator, lagBehandling, withRouter } from '@navikt/fp-storybook-utils';
import type { Fagsak } from '@navikt/fp-types';

import { RegistrerPapirsoknadPanel } from './RegistrerPapirsoknadPanel';

import messages from '../i18n/nb_NO.json';

const DEFAULT_BEHANDLING_FPSAK = lagBehandling();

const DEFAULT_FAGSAK = {
  aktørId: '9999999999999',
  behandlingTypeKanOpprettes: [],
  behandlinger: [],
  bruker: {
    fødselsdato: '1979-01-01',
    fødselsnummer: '00000000000',
    kjønn: 'K',
    navn: 'Søker Søkersen',
    språkkode: 'NB',
  },
  brukerManglerAdresse: false,
  dekningsgrad: 100,
  fagsakMarkeringer: [],
  harVergeIÅpenBehandling: false,
  historikkinnslag: [],
  kontrollResultat: { kontrollresultat: 'IKKE_KLASSIFISERT' },
  notater: [],
  relasjonsRolleType: 'MORA',
  sakSkalTilInfotrygd: false,
  saksnummer: '12345',
  status: 'UBEH',
} satisfies Omit<Fagsak, 'fagsakYtelseType'>;

const meta = {
  component: RegistrerPapirsoknadPanel,
  decorators: [withRouter, getIntlDecorator(messages)],
  args: {
    readOnly: false,
    kodeverk: alleKodeverk,
    lagrePapirsøknad: values => {
      action('lagrePapirsøknad')(values);
      return Promise.resolve(DEFAULT_BEHANDLING_FPSAK);
    },
    lagreUfullstendigPapirsøknad: values => {
      action('lagreUfullstendigPapirsøknad')(values);
      return Promise.resolve(DEFAULT_BEHANDLING_FPSAK);
    },
  },
} satisfies Meta<typeof RegistrerPapirsoknadPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ForeldrepengerFørstegangssøknad: Story = {
  args: {
    fagsak: { ...DEFAULT_FAGSAK, fagsakYtelseType: 'FP' } satisfies Fagsak,
    aksjonspunktKode: AksjonspunktKode.REGISTRER_PAPIRSØKNAD_FORELDREPENGER,
  },
};

export const ForeldrepengerEndringssøknad: Story = {
  args: {
    fagsak: { ...DEFAULT_FAGSAK, fagsakYtelseType: 'FP' } satisfies Fagsak,
    aksjonspunktKode: AksjonspunktKode.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER,
  },
};

export const SvangerskapspengerFørstegangssøknad: Story = {
  args: {
    fagsak: { ...DEFAULT_FAGSAK, fagsakYtelseType: 'SVP' } satisfies Fagsak,
    aksjonspunktKode: AksjonspunktKode.REGISTRER_PAPIRSØKNAD_SVANGERSKAPSPENGER,
  },
};

export const EngangsstonadFørstegangssøknad: Story = {
  args: {
    fagsak: { ...DEFAULT_FAGSAK, fagsakYtelseType: 'ES' } satisfies Fagsak,
    aksjonspunktKode: AksjonspunktKode.REGISTRER_PAPIRSØKNAD_ENGANGSSTØNAD,
  },
};
