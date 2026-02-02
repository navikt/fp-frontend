import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';

import { getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

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
      sorteringTyper: [{ sorteringType: 'BEHFRIST', feltType: 'DATO', feltKategori: 'UNIVERSAL' }],
      saksbehandlerIdenter: ['S34354'],
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
    valgtSaksliste: {
      sakslisteId: 1,
      navn: 'Saksliste 1',
      sorteringTyper: [{ sorteringType: 'BEHFRIST', feltType: 'DATO', feltKategori: 'UNIVERSAL' }],
      saksbehandlerIdenter: ['S34354'],
    },
    avdelingensSaksbehandlere: [
      {
        brukerIdent: 'E23232',
        navn: 'Espen Utvikler',
        ansattAvdeling: 'Avdeling Å',
      },
      {
        brukerIdent: 'S34354',
        navn: 'Steffen',
        ansattAvdeling: 'Avdeling Å',
      },
    ],
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
    valgtSaksliste: {
      sakslisteId: 1,
      navn: 'Saksliste 1',
      sorteringTyper: [{ sorteringType: 'BEHFRIST', feltType: 'DATO', feltKategori: 'UNIVERSAL' }],
      saksbehandlerIdenter: ['S34354'],
    },
    avdelingensSaksbehandlere: [
      {
        brukerIdent: 'E23232',
        navn: 'Espen Utvikler',
        ansattAvdeling: 'Avdeling Å',
      },
      {
        brukerIdent: 'S34354',
        navn: 'Steffen',
        ansattAvdeling: 'Avdeling Å',
      },
      {
        brukerIdent: 'E24353',
        navn: 'Eirik',
        ansattAvdeling: 'Avdeling Å',
      },
    ],
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
                gruppeId: 1,
                gruppeNavn: 'Gruppe 1',
                saksbehandlere: [
                  {
                    brukerIdent: 'S34354',
                    navn: 'Steffen',
                    ansattAvdeling: 'Avdeling Å',
                  },
                  {
                    brukerIdent: 'E23232',
                    navn: 'Espen Utvikler',
                    ansattAvdeling: 'Avdeling Å',
                  },
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
                  {
                    brukerIdent: 'K123456',
                    navn: 'Kari Kanari',
                    ansattAvdeling: 'Avdeling Å',
                  },
                ],
              },
            ],
          }),
        ),
        http.post(LosUrl.LAGRE_SAKSLISTE_SAKSBEHANDLER, () => new HttpResponse(null, { status: 200 })),
      ],
    },
  },
  args: {
    valgtSaksliste: {
      sakslisteId: 1,
      navn: 'Saksliste 1',
      sorteringTyper: [{ sorteringType: 'BEHFRIST', feltType: 'DATO', feltKategori: 'UNIVERSAL' }],
      saksbehandlerIdenter: ['S34354'],
    },
    avdelingensSaksbehandlere: [
      {
        brukerIdent: 'E23232',
        navn: 'Espen Utvikler',
        ansattAvdeling: 'Avdeling Å',
      },
      {
        brukerIdent: 'S34354',
        navn: 'Steffen',
        ansattAvdeling: 'Avdeling Å',
      },
      {
        brukerIdent: 'E24353',
        navn: 'Eirik',
        ansattAvdeling: 'Avdeling Å',
      },
    ],
  },
};
