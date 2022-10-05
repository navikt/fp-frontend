import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import getIntlDecorator from '@fpsak-frontend/storybook-utils/decorators/withIntl';

import PersonInfo from './PersonInfo';
import diskresjonskodeType from '../../../kodeverk/diskresjonskodeType';

import messages from '../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/saksbehandler/fagsakSearch/PersonInfo',
  component: PersonInfo,
  decorators: [withIntl],
};

const Template: Story<{ navn: string, erKvinne: boolean, diskresjonskode?: string, dødsdato?: string }> = ({
  navn,
  erKvinne,
  diskresjonskode,
  dødsdato,
}) => (
  <PersonInfo
    person={{
      navn,
      alder: 41,
      personnummer: '23232332',
      erKvinne,
      diskresjonskode,
      dødsdato,
    }}
  />
);

export const PersonkortMedDiskresjonskodeForMann = Template.bind({});
PersonkortMedDiskresjonskodeForMann.args = {
  navn: 'Espen Utvikler',
  erKvinne: false,
  diskresjonskode: diskresjonskodeType.KODE7,
};

export const PersonkortForDødKvinne = Template.bind({});
PersonkortForDødKvinne.args = {
  navn: 'Olga Pettersen',
  erKvinne: true,
  dødsdato: '2020-10-10',
};
