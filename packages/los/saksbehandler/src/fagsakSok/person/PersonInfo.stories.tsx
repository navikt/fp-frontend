import type { Meta, StoryObj } from '@storybook/react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { DiskresjonskodeType } from '../../kodeverk/diskresjonskodeType';
import { PersonInfo } from './PersonInfo';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'søk/PersonInfo',
  component: PersonInfo,
  decorators: [withIntl],
} satisfies Meta<typeof PersonInfo>;
export default meta;

type Story = StoryObj<typeof meta>;

export const PersonkortMedDiskresjonskodeForMann: Story = {
  args: {
    person: {
      navn: 'Espen Utvikler',
      kjønn: 'M',
      diskresjonskode: DiskresjonskodeType.KODE7,
      fødselsdato: '1980-10-10',

      fødselsnummer: '23232332',
      aktørId: '111111',
      språkkode: '-',
    },
  },
};

export const PersonkortForDødKvinne: Story = {
  args: {
    person: {
      navn: 'Olga Pettersen',
      kjønn: 'K',
      fødselsdato: '1980-10-10',
      dødsdato: '2020-10-10',
      fødselsnummer: '23232332',
      aktørId: '111111',

      språkkode: '-',
    },
  },
};
