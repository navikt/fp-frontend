import React, { FunctionComponent, ReactElement, useMemo } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@fpsak-frontend/utils';
import { ReactComponent as FraBeslutterSvg } from '@fpsak-frontend/assets/images/arrow-return.svg';
import { ReactComponent as SendMeldingSvg } from '@fpsak-frontend/assets/images/email-send-1.svg';
import { ReactComponent as DokumenterSvg } from '@fpsak-frontend/assets/images/folder-big.svg';
import { ReactComponent as TilBeslutterSvg } from '@fpsak-frontend/assets/images/person-favorite-star-2.svg';
import { ReactComponent as HistorikkSvg } from '@fpsak-frontend/assets/images/synchronize-time.svg';

import TabMeny, { SvgProps } from './components/TabMeny';
import SupportTabs from './supportTabs';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

const getStyle = (isActive: boolean, isDisabled: boolean): { fill: string } => {
  if (isDisabled) {
    return { fill: '#c6c2bf' };
  }
  return isActive ? { fill: '#0067c5' } : { fill: '#3e3832' };
};

const TABS = {
  [SupportTabs.TIL_BESLUTTER]: {
    getSvg: (isActive: boolean, isDisabled: boolean, props: SvgProps) => <TilBeslutterSvg {...props} style={getStyle(isActive, isDisabled)} />,
    tooltipTextCode: 'SupportMenySakIndex.Godkjenning',
  },
  [SupportTabs.FRA_BESLUTTER]: {
    getSvg: (isActive: boolean, isDisabled: boolean, props: SvgProps) => <FraBeslutterSvg {...props} style={getStyle(isActive, isDisabled)} />,
    tooltipTextCode: 'SupportMenySakIndex.FraBeslutter',
  },
  [SupportTabs.HISTORIKK]: {
    getSvg: (isActive: boolean, isDisabled: boolean, props: SvgProps) => <HistorikkSvg {...props} style={getStyle(isActive, isDisabled)} />,
    tooltipTextCode: 'SupportMenySakIndex.Historikk',
  },
  [SupportTabs.MELDINGER]: {
    getSvg: (isActive: boolean, isDisabled: boolean, props: SvgProps) => <SendMeldingSvg {...props} style={getStyle(isActive, isDisabled)} />,
    tooltipTextCode: 'SupportMenySakIndex.Melding',
  },
  [SupportTabs.DOKUMENTER]: {
    getSvg: (isActive: boolean, isDisabled: boolean, props: SvgProps) => <DokumenterSvg {...props} style={getStyle(isActive, isDisabled)} />,
    tooltipTextCode: 'SupportMenySakIndex.Dokumenter',
  },
} as Record<string, { getSvg: (isActive: boolean, isDisabled: boolean, props: SvgProps) => ReactElement, tooltipTextCode: string }>;

const lagTabs = (tilgjengeligeTabs: string[], valgbareTabs: string[], valgtIndex?: number) => Object.keys(TABS)
  .filter((key) => tilgjengeligeTabs.includes(key))
  .map((key, index) => ({
    getSvg: TABS[key].getSvg,
    tooltip: intl.formatMessage({ id: TABS[key].tooltipTextCode }),
    isDisabled: !valgbareTabs.includes(key),
    isActive: index === valgtIndex,
  }));

interface OwnProps {
  tilgjengeligeTabs: string[];
  valgbareTabs: string[];
  valgtIndex?: number;
  onClick: (index: number) => void;
}

const SupportMenySakIndex: FunctionComponent<OwnProps> = ({
  tilgjengeligeTabs,
  valgbareTabs,
  valgtIndex,
  onClick,
}) => {
  const tabs = useMemo(() => lagTabs(tilgjengeligeTabs, valgbareTabs, valgtIndex),
    [tilgjengeligeTabs, valgbareTabs, valgtIndex]);

  return (
    <RawIntlProvider value={intl}>
      <TabMeny tabs={tabs} onClick={onClick} />
    </RawIntlProvider>
  );
};

export default SupportMenySakIndex;
