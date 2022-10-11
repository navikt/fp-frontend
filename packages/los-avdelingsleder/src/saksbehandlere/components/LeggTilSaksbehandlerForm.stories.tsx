import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import getIntlDecorator from '@fpsak-frontend/storybook-utils/decorators/withIntl';

import LeggTilSaksbehandlerForm from './LeggTilSaksbehandlerForm';
import { RestApiPathsKeys, requestApi } from '../../data/fplosRestApi';
import SaksbehandlerAvdeling from '../../typer/saksbehandlerAvdelingTsType';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/avdelingsleder/saksbehandlere/LeggTilSaksbehandlerForm',
  component: LeggTilSaksbehandlerForm,
  decorators: [withIntl],
};

const saksbehandler = {
  brukerIdent: 'R232323',
  navn: 'Espen Utvikler',
  avdelingsnavn: ['NAV Viken'],
};

interface Props {
  avdelingensSaksbehandlere?: SaksbehandlerAvdeling[];
  funnetSaksbehandler?: SaksbehandlerAvdeling;
  hentAvdelingensSaksbehandlere: (params: {avdelingEnhet: string}) => void;
}

const Template: Story<Props> = ({
  avdelingensSaksbehandlere,
  funnetSaksbehandler,
  hentAvdelingensSaksbehandlere,
}) => {
  const data = [
    { key: RestApiPathsKeys.SAKSBEHANDLER_SOK.name, data: funnetSaksbehandler },
    { key: RestApiPathsKeys.OPPRETT_NY_SAKSBEHANDLER.name, data: undefined },
  ];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <LeggTilSaksbehandlerForm
        avdelingensSaksbehandlere={avdelingensSaksbehandlere || []}
        hentAvdelingensSaksbehandlere={hentAvdelingensSaksbehandlere}
        valgtAvdelingEnhet="NAV Viken"
      />
    </RestApiMock>
  );
};

export const Default = Template.bind({});
Default.args = {
  funnetSaksbehandler: saksbehandler,
  hentAvdelingensSaksbehandlere: action('button-click'),
};

export const AlleredeLagtTil = Template.bind({});
AlleredeLagtTil.args = {
  avdelingensSaksbehandlere: [saksbehandler],
  funnetSaksbehandler: saksbehandler,
  hentAvdelingensSaksbehandlere: action('button-click'),
};

export const SaksbehandlerFinnesIkke = Template.bind({});
SaksbehandlerFinnesIkke.args = {
  avdelingensSaksbehandlere: [saksbehandler],
  funnetSaksbehandler: undefined,
  hentAvdelingensSaksbehandlere: action('button-click'),
};
