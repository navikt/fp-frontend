import React from 'react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { RestApiMock } from '@navikt/fp-utils-test';
import messages from '../../i18n/nb_NO.json';
import { RestApiPathsKeys, requestApi } from '../data/fplosRestApi';
import SaksbehandlereOgSaksbehandlerGrupper from '../typer/saksbehandlereOgSaksbehandlerGrupper ';
import GrupperIndex from './GrupperIndex';

const withIntl = getIntlDecorator(messages);

const avdelingensSaksbehandlere = [
  {
    brukerIdent: 'ident1',
    navn: 'Anders Utvikler',
    ansattAvdeling: null,
  },
  {
    brukerIdent: 'ident12',
    navn: 'Espen Utvikler',
    ansattAvdeling: null,
  },
  {
    brukerIdent: 'ident4',
    navn: 'Olga Utvikler',
    ansattAvdeling: null,
  },
  {
    brukerIdent: 'ident3',
    navn: 'Klara Utvikler',
    ansattAvdeling: null,
  },
];

const saksbehandlere = [
  {
    brukerIdent: 'ident1',
    navn: 'Anders Utvikler',
    ansattAvdeling: null,
  },
];

const saksbehandlereOgSaksbehandlerGrupper = {
  saksbehandlere,
  saksbehandlerGrupper: [
    {
      gruppeId: 1,
      gruppeNavn: 'gruppenavn',
      saksbehandlere,
    },
  ],
} as SaksbehandlereOgSaksbehandlerGrupper;

export default {
  title: 'los/avdelingsleder/grupper/GrupperIndex',
  component: GrupperIndex,
  decorators: [withIntl],
};

const Template = () => {
  const data = [{ key: RestApiPathsKeys.HENT_GRUPPER.name, data: saksbehandlereOgSaksbehandlerGrupper }];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <GrupperIndex valgtAvdelingEnhet="test" avdelingensSaksbehandlere={avdelingensSaksbehandlere} />
    </RestApiMock>
  );
};
export const Default = Template.bind({});
