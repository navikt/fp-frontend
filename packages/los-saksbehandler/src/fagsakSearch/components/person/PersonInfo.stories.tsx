import React from 'react';
import { StoryFn } from '@storybook/react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';
import { Kjønnkode, KjønnkodeEnum } from '@navikt/fp-types';

import PersonInfo from './PersonInfo';
import diskresjonskodeType from '../../../kodeverk/diskresjonskodeType';

import messages from '../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/saksbehandler/fagsakSearch/PersonInfo',
  component: PersonInfo,
  decorators: [withIntl],
};

const Template: StoryFn<{ navn: string; kjønn: Kjønnkode; diskresjonskode?: string; dødsdato?: string }> = ({
  navn,
  kjønn,
  diskresjonskode,
  dødsdato,
}) => (
  <PersonInfo
    person={{
      navn,
      fødselsdato: '1980-10-10',
      kjønn,
      fødselsnummer: '23232332',
      diskresjonskode,
      dødsdato,
    }}
  />
);

export const PersonkortMedDiskresjonskodeForMann = Template.bind({});
PersonkortMedDiskresjonskodeForMann.args = {
  navn: 'Espen Utvikler',
  kjønn: KjønnkodeEnum.MANN,
  diskresjonskode: diskresjonskodeType.KODE7,
};

export const PersonkortForDødKvinne = Template.bind({});
PersonkortForDødKvinne.args = {
  navn: 'Olga Pettersen',
  kjønn: KjønnkodeEnum.KVINNE,
  dødsdato: '2020-10-10',
};
