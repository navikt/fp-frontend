import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { render, screen } from '@testing-library/react';
import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import VisittkortBarnInfoFodselPanel from './VisittkortBarnInfoFodselPanel';
import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<VisittkortBarnInfoFodselPanel>', () => {
  const familiehendelse = {
    hendelseType: familieHendelseType.TERMIN,
    hendelseDato: '2020-01-21',
    antallBarn: 1,
    dødfødsel: false,
  };

  it('skal vise termindato', async () => {
    render(
      <RawIntlProvider value={intlMock}>
        <VisittkortBarnInfoFodselPanel
          familiehendelse={familiehendelse}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Termin 21.01.2020')).toBeInTheDocument();
  });

  it('skal vise fødselsdato', async () => {
    render(
      <RawIntlProvider value={intlMock}>
        <VisittkortBarnInfoFodselPanel
          familiehendelse={{
            ...familiehendelse,
            hendelseType: familieHendelseType.FODSEL,
          }}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText(/Født 21.01.2020/)).toBeInTheDocument();
  });

  it('skal etikett for dødfødt barn', async () => {
    render(
      <RawIntlProvider value={intlMock}>
        <VisittkortBarnInfoFodselPanel
          familiehendelse={{
            ...familiehendelse,
            hendelseType: familieHendelseType.FODSEL,
            dødfødsel: true,
          }}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Født 21.01.2020')).toBeInTheDocument();
    expect(screen.getByText('DØD')).toBeInTheDocument();
  });

  it('skal vise manglende fødselsopplysninger når antall barn er 0 og det mangler fødselsdato', async () => {
    render(
      <RawIntlProvider value={intlMock}>
        <VisittkortBarnInfoFodselPanel
          familiehendelse={{
            hendelseType: familieHendelseType.FODSEL,
            antallBarn: 0,
            dødfødsel: false,
          }}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Har ikke opplysninger om fødsel')).toBeInTheDocument();
  });
});
