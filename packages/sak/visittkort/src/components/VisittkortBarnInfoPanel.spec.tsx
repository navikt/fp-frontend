import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import { render, screen } from '@testing-library/react';

import type { FagsakHendelse } from '@navikt/fp-types';

import { VisittkortBarnInfoPanel } from './VisittkortBarnInfoPanel';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

const Component = ({
  hendelseType = 'FODSL',
  hendelseDato = '2024-01-01',
  antallBarn = 1,
  dødfødsel = false,
}: Partial<FagsakHendelse>) => (
  <RawIntlProvider value={intl}>
    <VisittkortBarnInfoPanel familiehendelse={{ hendelseType, hendelseDato, antallBarn, dødfødsel }} />
  </RawIntlProvider>
);

describe('VisittkortBarnInfoPanel', () => {
  it('skal vise panel for fødsel av ett barn', async () => {
    render(<Component antallBarn={1} />);
    expect(screen.getByText(/Født 01.01.2024 \([^)]+\)/)).toBeInTheDocument();
  });

  it('skal vise panel for fødsel av flerlinger', async () => {
    render(<Component antallBarn={3} />);
    expect(screen.getByText(/Flerlinger Født 01.01.2024 \([^)]+\)/)).toBeInTheDocument();
  });

  it('skal vise panel for dødfødsel', async () => {
    render(<Component dødfødsel={true} />);
    expect(screen.getByText('Død')).toBeInTheDocument();
  });

  it('skal vise panel for omsorg', async () => {
    render(<Component hendelseType="OMSRGO" />);
    expect(screen.getByText('Omsorgsovertakelse 01.01.2024')).toBeInTheDocument();
  });

  it('skal vise panel for adopsjon av ett barn', async () => {
    render(<Component hendelseType="ADPSJN" />);
    expect(screen.getByText('Omsorgsovertakelse 01.01.2024')).toBeInTheDocument();
  });

  it('skal vise panel for adopsjon av flere barn', async () => {
    render(<Component hendelseType="ADPSJN" antallBarn={2} />);
    expect(screen.getByText('Omsorgsovertakelse(2 barn) 01.01.2024')).toBeInTheDocument();
  });

  it('skal vise panel for termin', async () => {
    render(<Component hendelseType="TERM" />);
    expect(screen.getByText('Termin 01.01.2024')).toBeInTheDocument();
  });
});
