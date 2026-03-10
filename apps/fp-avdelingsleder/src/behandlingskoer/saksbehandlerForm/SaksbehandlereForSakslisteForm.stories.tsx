import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';

import { getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { lagNySaksliste } from '../../../testdata/lagNySaksliste';
import { LosUrl } from '../../data/fplosAvdelingslederApi';
import { SaksbehandlereForSakslisteForm } from './SaksbehandlereForSakslisteForm';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'los/avdelingsleder/behandlingskoer/SaksbehandlereForSakslisteForm',
  component: SaksbehandlereForSakslisteForm,
  decorators: [withIntl, withQueryClient],
  args: {
    valgtAvdelingEnhet: 'Nav Vikafossen',
  },
} satisfies Meta<typeof SaksbehandlereForSakslisteForm>;
export default meta;

type Story = StoryObj<typeof meta>;

const SbhSteffen = {
  brukerIdent: 'S34354',
  navn: 'Steffen',
  ansattAvdeling: 'Avdeling Å',
};

const SbhEspen = {
  brukerIdent: 'E23232',
  navn: 'Espen Utvikler',
  ansattAvdeling: 'Avdeling Å',
};

const SbhEirik = {
  brukerIdent: 'E24353',
  navn: 'Eirik',
  ansattAvdeling: 'Avdeling Å',
};

const SbhKari = {
  brukerIdent: 'K123456',
  navn: 'Kari Kanari',
  ansattAvdeling: 'Avdeling Å',
};

export const IngenSaksbehandlere: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.HENT_GRUPPER, () => HttpResponse.json()),
        http.post(LosUrl.LAGRE_SAKSLISTE_SAKSBEHANDLER, () => new HttpResponse(null, { status: 200 })),
      ],
    },
  },
  args: {
    valgtSaksliste: {
      sakslisteId: 1,
      navn: 'Saksliste 1',
      behandlingTyper: [],
      fagsakYtelseTyper: [],
      sortering: {
        sorteringType: 'BEHFRIST',
        periodefilter: 'FAST_PERIODE',
      },
      sorteringTyper: [{ sorteringType: 'BEHFRIST', feltType: 'DATO' }],
      andreKriterie: {
        inkluder: [],
        ekskluder: [],
      },
      saksbehandlere: [SbhSteffen],
    },
    avdelingensSaksbehandlere: [],
  },
};

export const ToSaksbehandlere: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.HENT_GRUPPER, () => HttpResponse.json()),
        http.post(LosUrl.LAGRE_SAKSLISTE_SAKSBEHANDLER, () => new HttpResponse(null, { status: 200 })),
      ],
    },
  },
  args: {
    valgtSaksliste: lagNySaksliste({
      saksbehandlere: [SbhSteffen],
    }),
    avdelingensSaksbehandlere: [SbhEspen, SbhSteffen],
  },
};

export const TreSaksbehandlere: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.HENT_GRUPPER, () => HttpResponse.json()),
        http.post(LosUrl.LAGRE_SAKSLISTE_SAKSBEHANDLER, () => new HttpResponse(null, { status: 200 })),
      ],
    },
  },
  args: {
    valgtSaksliste: lagNySaksliste({
      saksbehandlere: [SbhSteffen],
    }),
    avdelingensSaksbehandlere: [SbhEspen, SbhSteffen, SbhEirik],
  },
};

export const SaksbehandlereSomErGruppert: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.HENT_GRUPPER, () =>
          HttpResponse.json({
            saksbehandlerGrupper: [
              {
                gruppeId: 1001,
                gruppeNavn: 'Gruppe 1',
                saksbehandlere: [
                  SbhSteffen,
                  SbhEspen,
                  {
                    brukerIdent: 'A123456',
                    navn: 'Anders Utvikler',
                    ansattAvdeling: 'Avdeling Å',
                  },
                  {
                    brukerIdent: 'T123421',
                    navn: 'Jens-Otto Techlead',
                    ansattAvdeling: 'Avdeling Å',
                  },
                  {
                    brukerIdent: 'M00000',
                    navn: 'Morgan Designer',
                    ansattAvdeling: 'Avdeling Å',
                  },
                  {
                    brukerIdent: 'S00001',
                    navn: 'Tor på Spor',
                    ansattAvdeling: 'Avdeling Å',
                  },
                  {
                    brukerIdent: 'M00002',
                    navn: 'Marte',
                    ansattAvdeling: 'Avdeling Å',
                  },
                  SbhKari,
                ],
              },
              {
                gruppeId: 1002,
                gruppeNavn: 'Drammen',
                saksbehandlere: [
                  {
                    brukerIdent: 'M00002',
                    navn: 'Marte',
                    ansattAvdeling: 'Avdeling Å',
                  },
                  SbhKari,
                ],
              },
              {
                gruppeId: 1003,
                gruppeNavn: 'Besluttergruppen',
                saksbehandlere: [SbhSteffen, SbhEspen, SbhKari],
              },
              {
                gruppeId: 1004,
                gruppeNavn: 'Hastefolket',
                saksbehandlere: [SbhSteffen, SbhEspen],
              },
            ],
          }),
        ),
        http.post(LosUrl.LAGRE_SAKSLISTE_SAKSBEHANDLER, () => new HttpResponse(null, { status: 200 })),
      ],
    },
  },
  args: {
    valgtSaksliste: lagNySaksliste({
      saksbehandlere: [SbhSteffen],
    }),
    avdelingensSaksbehandlere: [SbhEspen, SbhSteffen, SbhEirik],
  },
};
