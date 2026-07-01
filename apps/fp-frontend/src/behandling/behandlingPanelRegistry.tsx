import type { ReactNode } from 'react';

import type { ArbeidsgiverOpplysningerPerId, BehandlingType, FagsakYtelseType } from '@navikt/fp-types';

import { lazyNamedWithRetry } from './lazyUtils';

/**
 * Register som mappar (fagsakYtelseType, behandlingType) til rett paneloppsett for behandlinga.
 */

type ValgtStegProps = {
  valgtProsessSteg: string | undefined;
  valgtFaktaSteg: string | undefined;
};

type ArbeidsgiverPanelProps = ValgtStegProps & {
  arbeidsgivere: ArbeidsgiverOpplysningerPerId;
};

type InnsynPanelProps = Pick<ValgtStegProps, 'valgtProsessSteg'>;

type PanelRenderProps = ValgtStegProps;
type PanelRenderPropsMedArbeidsgivere = ValgtStegProps & {
  arbeidsgivere: ArbeidsgiverOpplysningerPerId;
};

type PanelFagsakYtelseType = Extract<FagsakYtelseType, 'FP' | 'SVP' | 'ES'>;

type BasePanelConfig = {
  behandlingTyper: readonly BehandlingType[];
  skalViseFellesPaVent: boolean;
};

// Delt i to varianter (med/uten arbeidsgivere) slik at TypeScript tvingar fram at `arbeidsgivere`
// blir sendt til `render` når (og berre når) `skalHenteArbeidsgivere` er `true`.
type PanelConfigMedArbeidsgivere = BasePanelConfig & {
  fagsakYtelseType: PanelFagsakYtelseType;
  skalHenteArbeidsgivere: true;
  render: (props: PanelRenderPropsMedArbeidsgivere) => ReactNode;
};

type PanelConfigUtenArbeidsgivere = BasePanelConfig & {
  fagsakYtelseType?: PanelFagsakYtelseType;
  skalHenteArbeidsgivere: false;
  render: (props: PanelRenderProps) => ReactNode;
};

export type PanelConfig = PanelConfigMedArbeidsgivere | PanelConfigUtenArbeidsgivere;

const førstegangsbehandlingEllerRevurdering = ['BT-002', 'BT-004'] satisfies readonly BehandlingType[];
const tilbakekrevingBehandlingTyper = ['BT-007', 'BT-009'] satisfies readonly BehandlingType[];

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
    render: props => <ForeldrepengerPaneler {...props} />,
  },
  {
    fagsakYtelseType: 'SVP',
    behandlingTyper: førstegangsbehandlingEllerRevurdering,
    skalHenteArbeidsgivere: true,
    skalViseFellesPaVent: true,
    render: props => <SvangerskapspengerPaneler {...props} />,
  },
  {
    fagsakYtelseType: 'ES',
    behandlingTyper: førstegangsbehandlingEllerRevurdering,
    skalHenteArbeidsgivere: true,
    skalViseFellesPaVent: true,
    render: props => <EngangsstonadPaneler {...props} />,
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
  fagsakYtelseType: FagsakYtelseType | undefined,
  behandlingType: BehandlingType | undefined,
): PanelConfig | undefined =>
  panelConfigs.find(config => {
    if (!behandlingType || !config.behandlingTyper.some(type => type === behandlingType)) {
      return false;
    }

    return !config.fagsakYtelseType || config.fagsakYtelseType === fagsakYtelseType;
  });

export const skalHenteArbeidsgivere = (panelConfig: PanelConfig | undefined): boolean =>
  panelConfig?.skalHenteArbeidsgivere ?? false;
