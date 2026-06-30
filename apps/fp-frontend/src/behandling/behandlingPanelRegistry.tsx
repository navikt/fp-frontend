import type { ReactNode } from 'react';

import type { ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { lazyNamedWithRetry } from './lazyUtils';

type ValgtStegProps = {
  valgtProsessSteg: string | undefined;
  valgtFaktaSteg: string | undefined;
};

type ArbeidsgiverPanelProps = ValgtStegProps & {
  arbeidsgivere: ArbeidsgiverOpplysningerPerId;
};

type InnsynPanelProps = Pick<ValgtStegProps, 'valgtProsessSteg'>;

type PanelRenderProps = ValgtStegProps & {
  arbeidsgivere: ArbeidsgiverOpplysningerPerId | undefined;
};

export type PanelConfig = {
  fagsakYtelseType?: 'FP' | 'SVP' | 'ES';
  behandlingTyper: readonly string[];
  skalHenteArbeidsgivere: boolean;
  skalViseFellesPaVent: boolean;
  render: (props: PanelRenderProps) => ReactNode;
};

const førstegangsbehandlingEllerRevurdering: readonly string[] = ['BT-002', 'BT-004'];
const tilbakekrevingBehandlingTyper: readonly string[] = ['BT-007', 'BT-009'];

const ForeldrepengerPaneler = lazyNamedWithRetry<ArbeidsgiverPanelProps, 'ForeldrepengerPaneler'>(
  () => import('./foreldrepenger/ForeldrepengerPaneler'),
  'ForeldrepengerPaneler',
);
const EngangsstonadPaneler = lazyNamedWithRetry<ArbeidsgiverPanelProps, 'EngangsstonadPaneler'>(
  () => import('./engangsstonad/EngangsstonadPaneler'),
  'EngangsstonadPaneler',
);
const SvangerskapspengerPaneler = lazyNamedWithRetry<ArbeidsgiverPanelProps, 'SvangerskapspengerPaneler'>(
  () => import('./svangerskapspenger/SvangerskapspengerPaneler'),
  'SvangerskapspengerPaneler',
);
const KlagePaneler = lazyNamedWithRetry<ValgtStegProps, 'KlagePaneler'>(
  () => import('./klage/KlagePaneler'),
  'KlagePaneler',
);
const InnsynPaneler = lazyNamedWithRetry<InnsynPanelProps, 'InnsynPaneler'>(
  () => import('./innsyn/InnsynPaneler'),
  'InnsynPaneler',
);
const AnkePaneler = lazyNamedWithRetry<ValgtStegProps, 'AnkePaneler'>(
  () => import('./anke/AnkePaneler'),
  'AnkePaneler',
);
const TilbakekrevingPaneler = lazyNamedWithRetry<ValgtStegProps, 'TilbakekrevingPaneler'>(
  () => import('./tilbakekreving/TilbakekrevingPaneler'),
  'TilbakekrevingPaneler',
);

const panelConfigs = [
  {
    fagsakYtelseType: 'FP',
    behandlingTyper: førstegangsbehandlingEllerRevurdering,
    skalHenteArbeidsgivere: true,
    skalViseFellesPaVent: true,
    render: props => <ForeldrepengerPaneler {...props} arbeidsgivere={notEmpty(props.arbeidsgivere)} />,
  },
  {
    fagsakYtelseType: 'SVP',
    behandlingTyper: førstegangsbehandlingEllerRevurdering,
    skalHenteArbeidsgivere: true,
    skalViseFellesPaVent: true,
    render: props => <SvangerskapspengerPaneler {...props} arbeidsgivere={notEmpty(props.arbeidsgivere)} />,
  },
  {
    fagsakYtelseType: 'ES',
    behandlingTyper: førstegangsbehandlingEllerRevurdering,
    skalHenteArbeidsgivere: true,
    skalViseFellesPaVent: true,
    render: props => <EngangsstonadPaneler {...props} arbeidsgivere={notEmpty(props.arbeidsgivere)} />,
  },
  {
    behandlingTyper: ['BT-006'],
    skalHenteArbeidsgivere: false,
    skalViseFellesPaVent: true,
    render: props => <InnsynPaneler valgtProsessSteg={props.valgtProsessSteg} />,
  },
  {
    behandlingTyper: ['BT-008'],
    skalHenteArbeidsgivere: false,
    skalViseFellesPaVent: true,
    render: props => <AnkePaneler valgtProsessSteg={props.valgtProsessSteg} valgtFaktaSteg={props.valgtFaktaSteg} />,
  },
  {
    behandlingTyper: ['BT-003'],
    skalHenteArbeidsgivere: false,
    skalViseFellesPaVent: true,
    render: props => <KlagePaneler valgtProsessSteg={props.valgtProsessSteg} valgtFaktaSteg={props.valgtFaktaSteg} />,
  },
  {
    behandlingTyper: tilbakekrevingBehandlingTyper,
    skalHenteArbeidsgivere: false,
    skalViseFellesPaVent: false,
    render: props => (
      <TilbakekrevingPaneler valgtProsessSteg={props.valgtProsessSteg} valgtFaktaSteg={props.valgtFaktaSteg} />
    ),
  },
] satisfies PanelConfig[];

export const finnPanelConfig = (
  fagsakYtelseType: string | undefined,
  behandlingType: string | undefined,
): PanelConfig | undefined =>
  panelConfigs.find(config => {
    if (!behandlingType || !config.behandlingTyper.includes(behandlingType)) {
      return false;
    }

    return !config.fagsakYtelseType || config.fagsakYtelseType === fagsakYtelseType;
  });

const erTilbakekreving = (behandlingType: string | undefined): boolean =>
  tilbakekrevingBehandlingTyper.includes(behandlingType ?? '');

export const skalHenteArbeidsgivere = (panelConfig: PanelConfig | undefined): boolean =>
  panelConfig?.skalHenteArbeidsgivere ?? false;

export const skalViseFellesPaVent = (panelConfig: PanelConfig | undefined, behandlingType: string | undefined): boolean =>
  panelConfig?.skalViseFellesPaVent ?? !erTilbakekreving(behandlingType);

export const renderBehandlingPanel = (panelConfig: PanelConfig, props: PanelRenderProps): ReactNode => panelConfig.render(props);
