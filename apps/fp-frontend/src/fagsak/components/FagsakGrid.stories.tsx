import { useState } from 'react';

import { BodyLong, Box, Tabs, VStack } from '@navikt/ds-react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { NotatSakIndex } from '@navikt/fp-sak-notat';
import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { SupportHeaderAndContent } from '../../behandlingsupport/SupportHeader';
import { UtvidEllerMinskKnapp } from '../../behandlingsupport/UtvidEllerMinskKnapp';
import { FagsakGrid } from './FagsakGrid';

import styles from '../../behandlingsupport/supportLayout.module.css';

import messages from '../../../i18n/nb_NO.json';

const meta = {
  title: 'fagsak/FagsakGrid',
  component: FagsakGrid,
  decorators: [getIntlDecorator(messages)],
  args: {
    visSideMeny: true,
    toggleSideMeny: action('toggleSideMeny'),
    visittkortContent: <Box padding="space-20">Visittkort</Box>,
    behandlingContent: (
      <Box height="2500px" padding="space-16" asChild>
        <VStack justify="space-between">
          <BodyLong>Toppen av et langt faktapanel</BodyLong>
          <BodyLong>Bunnen av faktapanelet</BodyLong>
        </VStack>
      </Box>
    ),
    profileAndNavigationContent: null,
    supportContent: null,
  },
  render: function Render(args, { parameters }) {
    const [visDetaljer, setVisDetaljer] = useState(false);
    const antallNotater: unknown = parameters['antallNotater'];
    return (
      <FagsakGrid
        {...args}
        profileAndNavigationContent={
          <Box padding="space-20">
            Behandlingsinformasjon
            {visDetaljer && <Box height="1000px">Utvidede behandlingsdetaljer</Box>}
          </Box>
        }
        supportContent={
          <Tabs defaultValue="notater" className={styles['tabs']}>
            <Tabs.List className={styles['tabList']}>
              <Tabs.Tab value="notater" label="Notatblokk" />
              <Tabs.Tab value="annet" label="Annet støtteinnhold" />
            </Tabs.List>
            <Tabs.Panel value="notater" data-notat-panel>
              <SupportHeaderAndContent
                tekst="Notatblokk"
                toggleVisUtvidetBehandlingDetaljerKnapp={
                  <UtvidEllerMinskKnapp
                    visUtvidetBehandlingDetaljer={visDetaljer}
                    toggleVisUtvidetBehandlingDetaljer={() => setVisDetaljer(!visDetaljer)}
                  />
                }
              >
                <NotatSakIndex
                  saksnummer="123"
                  saksbehandlerNavn="Saksbehandler"
                  kanSaksbehandle
                  lagreNotat={action('lagreNotat')}
                  notater={Array.from(
                    { length: typeof antallNotater === 'number' ? antallNotater : 20 },
                    (_, index) => ({
                      opprettetAv: 'Saksbehandler',
                      opprettetTidspunkt: `2024-10-10T12:${String(index).padStart(2, '0')}:00`,
                      notat: `Notat ${index + 1}\nMed linjeskift`,
                    }),
                  )}
                />
              </SupportHeaderAndContent>
            </Tabs.Panel>
            <Tabs.Panel value="annet">
              <BodyLong>Annet støtteinnhold</BodyLong>
            </Tabs.Panel>
          </Tabs>
        }
      />
    );
  },
} satisfies Meta<typeof FagsakGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LangtFaktapanelMedNotater: Story = {};

export const UtenNotater: Story = {
  parameters: { antallNotater: 0 },
};

export const EttNotat: Story = {
  parameters: { antallNotater: 1 },
};
