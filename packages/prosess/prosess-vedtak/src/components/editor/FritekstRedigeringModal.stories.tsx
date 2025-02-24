import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { getIntlDecorator, type PanelDataArgs, withFormData, withPanelData } from '@navikt/fp-storybook-utils';

import mal from '../../../.storybook/brevmal/mal.html?raw';
import { FritekstRedigeringModal } from './FritekstRedigeringModal';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const vedtaksbrev = {
  REDIGERTBREV: {
    redigertHtml:
      // eslint-disable-next-line max-len
      '<h1>NAV har innvilget søknaden din om pleiepenger</h1><p>\n        Du har rett til:\n        </p><ul><li>\n                    100 prosent pleiepenger \n    fra 16. desember 2024 til 19. desember 2024.\n                    Du får utbetalt 462 kroner dagen, før skatt.\n                    \n                    \n                </li></ul><p>\n    \n\n    \n\n\n\n\n\n\n\n    \n    NAV utbetaler pleiepenger innen den 25. i hver måned.\n\n\n\n\n    Informasjon om utbetaling finner du under utbetalingsoversikten på "Min side".\n\n\n\n        \n\n        \n            </p><h2>Hvorfor får du pleiepenger?</h2><p>\n        NAV kan gi pleiepenger når du har omsorg for et barn som er sykt eller under utredning for sykdom,\n        og som derfor trenger omsorg og pleie.\n    </p><p>Vi har vurdert opplysningene i saken din, og har kommet frem til at du har rett til pleiepenger.</p><p>\n        Dersom barnet har et fast og regelmessig omsorgstilbud, du skal jobbe eller det er andre personer som har tilsyn med barnet, skal pleiepengene graderes tilsvarende.\n        Du finner mer informasjon om når pleiepenger skal reduseres på nav.no.\n    </p><p>\n       Fra 16. desember 2024 til 19. desember 2024 har du rett til\n\n    100\n\nprosent pleiepenger.\n\n\n\n    \n        \n            Du får fulle pleiepenger fordi du ikke jobber  hos Bedrift AS \n mens du pleier barnet.\n        \n    \n\n\n\n\n\n    </p><p>Dette følger av folketrygdloven § 9-10 første og andre ledd.</p><h2>Hvordan har vi beregnet pleiepengene dine?</h2><p>\n\n\n    \n\n\n\n\n    Når vi beregner arbeidsinntekten din, bruker vi et gjennomsnitt av\nde tre siste månedslønnene, som vi omregner til en årsinntekt.\n\n    Hvis du nettopp har begynt å arbeide, byttet arbeidsforhold eller lønnen din har endret seg,\n    bruker vi månedsinntektene etter at endringen skjedde.\n    </p><p>\n        \n            Arbeidsgiver Bedrift AS har opplyst at månedsinntekten din er\n                10&nbsp;000 kroner.\n            \n        \n    </p><p>\n    \n        Vi har\n        fastsatt pleiepengene dine ut fra en årsinntekt på 120&nbsp;000 kroner.\n        \n    \n\n    \n        \n        \n\n        \n    \n</p><p>Beregningen er gjort etter folketrygdloven  §§ 9-15 jf. 8-30.</p>',
    originalHtml:
      // eslint-disable-next-line max-len
      '\n    \n        <h1>NAV har innvilget søknaden din om pleiepenger</h1>\n        \n\n        \n            \n        \n\n        \n    \n    <p>\n        Du har rett til:\n        <ul>\n            \n                <li>\n                    <p>\n                    100 prosent pleiepenger \n    fra 16. desember 2024 til 19. desember 2024.\n                    Du får utbetalt 462 kroner dagen, før skatt.\n                    \n                    </p>\n                </li>\n            \n        </ul>\n    </p>\n\n    \n\n\n\n\n\n\n\n    \n    NAV utbetaler pleiepenger innen den 25. i hver måned.\n\n\n\n\n    Informasjon om utbetaling finner du under utbetalingsoversikten på "Min side".\n\n\n\n        \n\n        \n            <h2>Hvorfor får du pleiepenger?</h2>\n\n    <p>\n        NAV kan gi pleiepenger når du har omsorg for et barn som er sykt eller under utredning for sykdom,\n        og som derfor trenger omsorg og pleie.\n    </p>\n\n<p>Vi har vurdert opplysningene i saken din, og har kommet frem til at du har rett til pleiepenger.</p>\n\n            \n    <p>\n        Dersom barnet har et fast og regelmessig omsorgstilbud, du skal jobbe eller det er andre personer som har tilsyn med barnet, skal pleiepengene graderes tilsvarende.\n        Du finner mer informasjon om når pleiepenger skal reduseres på nav.no.\n    </p>\n\n            \n    \n    <p>\n       Fra 16. desember 2024 til 19. desember 2024 har du rett til\n\n    100\n\nprosent pleiepenger.\n\n\n\n    \n        \n            Du får fulle pleiepenger fordi du ikke jobber  hos Bedrift AS \n mens du pleier barnet.\n        \n    \n\n\n\n\n\n    <p>Dette følger av folketrygdloven § 9-10 første og andre ledd.</p>\n\n    </p>\n\n\n        \n\n        \n            \n    <h2>Hvordan har vi beregnet pleiepengene dine?</h2>\n\n\n    \n\n\n\n\n    Når vi beregner arbeidsinntekten din, bruker vi et gjennomsnitt av\nde tre siste månedslønnene, som vi omregner til en årsinntekt.\n\n    Hvis du nettopp har begynt å arbeide, byttet arbeidsforhold eller lønnen din har endret seg,\n    bruker vi månedsinntektene etter at endringen skjedde.\n    <p>\n        \n            Arbeidsgiver Bedrift AS har opplyst at månedsinntekten din er\n                10 000 kroner.\n            <br/>\n        \n    </p>\n\n    \n\n\n\n\n\n\n\n\n\n\n\n\n    \n\n        \n\n        \n\n        \n\n        <p>\n            \n                <p>\n    \n        Vi har\n        fastsatt pleiepengene dine ut fra en årsinntekt på 120 000 kroner.\n        \n    \n\n    \n        \n        \n\n        \n    \n</p>\n            \n        </p>\n    \n\n\n\n<p>Beregningen er gjort etter folketrygdloven  §§ 9-15 jf. 8-30.</p>\n\n        \n    \n',
    redigertMal: 'INNVILGELSE',
    inkluderKalender: true,
  },
  VEDTAKSBREV_MAL: 'MANUELL',
  VEDTAKSBREV_TYPE: 'MANUELL',
};

const meta = {
  title: 'prosess/prosess-vedtak-editor',
  component: FritekstRedigeringModal,
  decorators: [withIntl, withFormData, withPanelData],
  args: {
    vedtaksbrev,
    htmlMal: mal,
  },
  render: args => <FritekstRedigeringModal {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof FritekstRedigeringModal>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
