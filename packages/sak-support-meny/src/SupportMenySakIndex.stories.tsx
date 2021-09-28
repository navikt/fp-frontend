import React from 'react';
import { Story } from '@storybook/react';

import SupportMenySakIndex from './SupportMenySakIndex';
import SupportTabs from './supportTabs';

export default {
  title: 'sak/sak-support-meny',
  component: SupportMenySakIndex,
};

const Template: Story<{
  tilgjengeligeTabs: string[],
  valgbareTabs: string[],
}> = ({
  tilgjengeligeTabs,
  valgbareTabs,
}) => {
  const [valgtPanelIndex, setPanelIndex] = React.useState<number>();
  return (
    <SupportMenySakIndex
      tilgjengeligeTabs={tilgjengeligeTabs}
      valgbareTabs={valgbareTabs}
      valgtIndex={valgtPanelIndex}
      onClick={setPanelIndex}
    />
  );
};

export const UtenBeslutterGodkjenningOgTilbakesending = Template.bind({});
UtenBeslutterGodkjenningOgTilbakesending.args = {
  tilgjengeligeTabs: [SupportTabs.HISTORIKK, SupportTabs.MELDINGER, SupportTabs.DOKUMENTER],
  valgbareTabs: [SupportTabs.HISTORIKK, SupportTabs.MELDINGER, SupportTabs.DOKUMENTER],
};

export const MedBeslutterGodkjenning = Template.bind({});
MedBeslutterGodkjenning.args = {
  tilgjengeligeTabs: [SupportTabs.TIL_BESLUTTER, SupportTabs.HISTORIKK, SupportTabs.MELDINGER, SupportTabs.DOKUMENTER],
  valgbareTabs: [SupportTabs.TIL_BESLUTTER, SupportTabs.HISTORIKK, SupportTabs.MELDINGER, SupportTabs.DOKUMENTER],
};

export const EtterTilbakesendingFraBeslutter = Template.bind({});
EtterTilbakesendingFraBeslutter.args = {
  tilgjengeligeTabs: [SupportTabs.FRA_BESLUTTER, SupportTabs.HISTORIKK, SupportTabs.MELDINGER, SupportTabs.DOKUMENTER],
  valgbareTabs: [SupportTabs.FRA_BESLUTTER, SupportTabs.HISTORIKK, SupportTabs.MELDINGER, SupportTabs.DOKUMENTER],
};

export const SendMeldingSomIkkeValgbar = Template.bind({});
SendMeldingSomIkkeValgbar.args = {
  tilgjengeligeTabs: [SupportTabs.HISTORIKK, SupportTabs.MELDINGER, SupportTabs.DOKUMENTER],
  valgbareTabs: [SupportTabs.HISTORIKK, SupportTabs.DOKUMENTER],
};
