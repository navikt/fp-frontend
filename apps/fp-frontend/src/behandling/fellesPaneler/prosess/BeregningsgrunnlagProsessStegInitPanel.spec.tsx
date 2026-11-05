import type { ReactNode } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import { render, screen } from '@testing-library/react';

import type { Beregningsgrunnlag } from '@navikt/fp-types';

import { BeregningsgrunnlagProsessStegInitPanel } from './BeregningsgrunnlagProsessStegInitPanel';

import messages from '../../../../i18n/nb_NO.json';

const { hentBeregningsgrunnlag } = vi.hoisted(() => ({
  hentBeregningsgrunnlag: vi.fn<() => Pick<Beregningsgrunnlag, 'aktivitetStatus'>>(),
}));

vi.mock('@tanstack/react-query', () => ({
  useQuery: () => ({ data: hentBeregningsgrunnlag(), isFetching: false }),
}));
vi.mock('../../../data/behandlingApi', () => ({
  getBehandlingApi: () => ({ beregningsgrunnlagOptions: () => ({}) }),
}));
vi.mock('../../felles/context/BehandlingDataContext', () => ({
  useBehandlingDataContext: () => ({ behandling: {} }),
}));
vi.mock('../../felles/prosess/useStandardProsessPanelProps', () => ({
  useStandardProsessPanelProps: () => ({ vilkårForPanel: [] }),
}));
vi.mock('../../felles/prosess/ProsessDefaultInitPanel', () => ({
  ProsessDefaultInitPanel: ({ children }: { children: ReactNode }) => children,
}));
vi.mock('@navikt/fp-utils', () => ({
  useMellomlagretFormData: () => ({}),
}));
vi.mock('@navikt/ft-prosess-beregning', () => ({
  BeregningProsessIndex: () => <div>Nytt beregningspanel</div>,
}));
vi.mock('@navikt/ft-prosess-beregningsgrunnlag', () => ({
  BeregningsgrunnlagProsessIndex: () => <div>Gammelt beregningspanel</div>,
  ProsessBeregningsgrunnlagAvklaringsbehovCode: {},
}));

describe('BeregningsgrunnlagProsessStegInitPanel', () => {
  it.each<{ aktivitetStatus: Beregningsgrunnlag['aktivitetStatus']; forventetPanel: string }>([
    { aktivitetStatus: ['SN'], forventetPanel: 'Nytt beregningspanel' },
    { aktivitetStatus: ['AT'], forventetPanel: 'Nytt beregningspanel' },
    { aktivitetStatus: ['FL'], forventetPanel: 'Nytt beregningspanel' },
    { aktivitetStatus: ['AT', 'FL'], forventetPanel: 'Nytt beregningspanel' },
    { aktivitetStatus: ['AT', 'SN'], forventetPanel: 'Gammelt beregningspanel' },
    { aktivitetStatus: ['FL', 'SN'], forventetPanel: 'Gammelt beregningspanel' },
    { aktivitetStatus: ['AT_FL_SN'], forventetPanel: 'Gammelt beregningspanel' },
    { aktivitetStatus: ['BA'], forventetPanel: 'Gammelt beregningspanel' },
  ])('skal velge $forventetPanel for $aktivitetStatus', ({ aktivitetStatus, forventetPanel }) => {
    hentBeregningsgrunnlag.mockReturnValue({ aktivitetStatus });

    render(
      <RawIntlProvider value={createIntl(messages)}>
        <BeregningsgrunnlagProsessStegInitPanel arbeidsgiverOpplysningerPerId={{}} />
      </RawIntlProvider>,
    );

    expect(screen.getByText(forventetPanel)).toBeInTheDocument();
  });
});
