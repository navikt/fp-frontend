import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { render, screen } from '@testing-library/react';
import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import VisittkortBarnInfoOmsorgPanel from './VisittkortBarnInfoOmsorgPanel';
import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<VisittkortBarnInfoOmsorgPanel>', () => {
  const familiehendelse = {
    hendelseType: {
      kode: familieHendelseType.ADOPSJON,
      kodeverk: '',
    },
    hendelseDato: '2020-01-21',
    antallBarn: 1,
    dødfødsel: false,
  };

  it('skal vise adopsjonsinformasjon', async () => {
    render(
      <RawIntlProvider value={intlMock}>
        <VisittkortBarnInfoOmsorgPanel
          familiehendelse={familiehendelse}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Adopsjon 21.01.2020')).toBeInTheDocument();
  });

  it('skal vise foreldreansvarsinformasjon', async () => {
    render(
      <RawIntlProvider value={intlMock}>
        <VisittkortBarnInfoOmsorgPanel
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

    expect(await screen.findByText('Foreldreansvar 21.01.2020')).toBeInTheDocument();
  });
});
