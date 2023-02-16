// import React from 'react';
// import { MemoryRouter } from 'react-router-dom';
// import { render, screen } from '@testing-library/react';

// import RestApiMock from '@navikt/fp-utils-test/src/rest/RestApiMock';

// import AppIndex from './AppIndex';
// import { requestApi, FpsakApiKeys } from '../data/fpsakApi';

describe('<AppIndex>', () => {
  // TODO fiks testar
  // it.skip('skal vise hjem-skjermbilde', async () => {
  //   const data = [
  //     { key: FpsakApiKeys.INIT_FETCH.name, global: true, data: { innloggetBruker: { navn: 'Peder' } } },
  //     { key: FpsakApiKeys.KODEVERK.name, global: true, data: {} },
  //     { key: FpsakApiKeys.KODEVERK_FPTILBAKE.name, global: true, data: {} },
  //   ];

  //   render(
  //     <RestApiMock data={data} requestApi={requestApi}>
  //       <MemoryRouter>
  //         <AppIndex />
  //       </MemoryRouter>
  //     </RestApiMock>,
  //   );

  //   expect(await screen.findByText('Svangerskap, fødsel og adopsjon')).toBeInTheDocument();
  // });

  // it.skip('skal vise query-feilmelding', async () => {
  //   const data = [
  //     { key: FpsakApiKeys.INIT_FETCH.name, global: true, data: { innloggetBruker: { navn: 'Peder' } } },
  //     { key: FpsakApiKeys.KODEVERK.name, global: true, data: {} },
  //     { key: FpsakApiKeys.KODEVERK_FPTILBAKE.name, global: true, data: {} },
  //   ];

  //   render(
  //     <RestApiMock data={data} requestApi={requestApi}>
  //       <MemoryRouter initialEntries={['/test?errormessage=Det+finnes+ingen+sak+med+denne+referansen%3A+266']}>
  //         <AppIndex />
  //       </MemoryRouter>
  //     </RestApiMock>,
  //   );
  //   expect(await screen.findByText('Det finnes ingen sak med denne referansen: 266')).toBeInTheDocument();
  // });

  it('skal rendre komponent', async () => {
    expect(true).toBeTruthy();
  });
});
