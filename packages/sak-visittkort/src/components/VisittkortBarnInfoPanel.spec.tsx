import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { render, screen } from '@testing-library/react';
import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import VisittkortBarnInfoPanel from './VisittkortBarnInfoPanel';
import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<VisittkortBarnInfoPanel>', () => {
  const familiehendelse = {
    hendelseType: {
      kode: familieHendelseType.FODSEL,
      kodeverk: '',
    },
    hendelseDato: '2020-01-01',
    antallBarn: 1,
    dødfødsel: false,
  };

  it('skal vise panel for fødsel', async () => {
    render(
      <RawIntlProvider value={intlMock}>
        <VisittkortBarnInfoPanel
          familiehendelse={familiehendelse}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText(/Født 01.01.2020/)).toBeInTheDocument();
    expect(screen.getByText(/(1 år)/)).toBeInTheDocument();
  });

  it('skal vise panel for omsorg', async () => {
    render(
      <RawIntlProvider value={intlMock}>
        <VisittkortBarnInfoPanel
          familiehendelse={{
            ...familiehendelse,
            hendelseType: {
              kode: familieHendelseType.OMSORG,
              kodeverk: '',
            },
          }}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Foreldreansvar 01.01.2020')).toBeInTheDocument();
  });
});
