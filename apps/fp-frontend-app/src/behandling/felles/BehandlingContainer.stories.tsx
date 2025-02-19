import { useEffect } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { VilkarUtfallType } from '@navikt/fp-kodeverk';
import { getIntlDecorator } from '@navikt/fp-storybook-utils';
import type { AksessRettigheter, AlleKodeverk, Behandling, Fagsak } from '@navikt/fp-types';

import { BehandlingContainer } from './BehandlingContainer';
import type { FaktaPanelInitProps } from './typer/faktaPanelInitProps';
import type { ProsessPanelInitProps } from './typer/prosessPanelInitProps';
import { BehandlingDataProvider } from './utils/behandlingDataContext';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const FaktaPanelTest1 = ({ registrerFaktaPanel, valgtFaktaSteg }: FaktaPanelInitProps) => {
  useEffect(() => {
    registrerFaktaPanel({
      id: '1',
      tekst: 'Dette er en paneltittel',
      erAktiv: valgtFaktaSteg === '1',
      harApneAksjonspunkter: true,
    });
  }, []);

  if (valgtFaktaSteg !== '1') {
    return null;
  }

  return <div>Dette er et testpanel</div>;
};
const FaktaPanelTest2 = ({ registrerFaktaPanel, valgtFaktaSteg }: FaktaPanelInitProps) => {
  useEffect(() => {
    registrerFaktaPanel({
      id: '2',
      tekst: 'Annet panel',
      erAktiv: valgtFaktaSteg === '2',
      harApneAksjonspunkter: false,
    });
  }, [valgtFaktaSteg]);

  if (valgtFaktaSteg !== '2') {
    return null;
  }

  return <div>Dette er et annet panel</div>;
};

const ProsessPanelTest1 = ({ registrerProsessPanel, valgtProsessSteg }: ProsessPanelInitProps) => {
  useEffect(() => {
    registrerProsessPanel({
      id: '1',
      tekst: 'Adopsjon',
      erAktiv: valgtProsessSteg === '1',
      harApentAksjonspunkt: false,
      status: VilkarUtfallType.OPPFYLT,
    });
  }, []);

  if (valgtProsessSteg !== '1') {
    return null;
  }

  return <div>Dette er et testpanel for adopsjon</div>;
};

const ProsessPanelTest2 = ({ registrerProsessPanel, valgtProsessSteg }: ProsessPanelInitProps) => {
  useEffect(() => {
    registrerProsessPanel({
      id: '2',
      tekst: 'Fødsel',
      erAktiv: valgtProsessSteg === '2',
      harApentAksjonspunkt: true,
      status: VilkarUtfallType.IKKE_OPPFYLT,
    });
  }, []);

  if (valgtProsessSteg !== '2') {
    return null;
  }

  return <div>Dette er et testpanel for fødsel</div>;
};

const meta = {
  title: 'behandling/behandling-container',
  component: BehandlingContainer,
  decorators: [withIntl],
  args: {
    valgtFaktaSteg: 'default',
    valgtProsessSteg: 'default',
  },
  render: args => (
    <BehandlingDataProvider
      behandling={{} as Behandling}
      alleBehandlinger={[]}
      fagsak={{} as Fagsak}
      rettigheter={{} as AksessRettigheter}
      alleKodeverk={{} as AlleKodeverk}
      lagreAksjonspunkter={() => Promise.resolve({} as Behandling)}
      lagreOverstyrteAksjonspunkter={() => Promise.resolve({} as Behandling)}
      setSkalOppdatereEtterBekreftelseAvAp={() => undefined}
      hentOgSettBehandling={() => undefined}
      oppdaterProsessStegOgFaktaPanelIUrl={() => undefined}
    >
      <BehandlingContainer {...args} />
    </BehandlingDataProvider>
  ),
} satisfies Meta<typeof BehandlingContainer>;
export default meta;

type Story = StoryObj<typeof meta>;

export const VisKunFaktaPaneler: Story = {
  args: {
    hentFaktaPaneler: (props: FaktaPanelInitProps) => (
      <>
        <FaktaPanelTest1 {...props} />
        <FaktaPanelTest2 {...props} />
      </>
    ),
  },
};

export const VisKunProsessPaneler: Story = {
  args: {
    hentProsessPaneler: (props: ProsessPanelInitProps) => (
      <>
        <ProsessPanelTest1 {...props} />
        <ProsessPanelTest2 {...props} />
      </>
    ),
  },
};

export const VisBeggePaneler: Story = {
  args: {
    hentProsessPaneler: (props: ProsessPanelInitProps) => (
      <>
        <ProsessPanelTest1 {...props} />
        <ProsessPanelTest2 {...props} />
      </>
    ),
    hentFaktaPaneler: (props: FaktaPanelInitProps) => (
      <>
        <FaktaPanelTest1 {...props} />
        <FaktaPanelTest2 {...props} />
      </>
    ),
  },
};
