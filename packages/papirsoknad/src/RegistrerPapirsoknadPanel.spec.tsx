import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import * as stories from './RegistrerPapirsoknadPanel.stories';

const { ForeldrepengerFørstegangssøknad, SvangerskapspengerFørstegangssøknad, EngangsstonadFørstegangssøknad } =
  composeStories(stories);

describe('RegistrerPapirsoknadPanel', () => {
  it('skal sende inn ufullstendig foreldrepenger-søknad med riktige felter', async () => {
    const lagreUfullstendigPapirsøknad = vi.fn();
    const lagrePapirsøknad = vi.fn();

    await ForeldrepengerFørstegangssøknad.run({
      args: {
        ...ForeldrepengerFørstegangssøknad.args,
        lagrePapirsøknad,
        lagreUfullstendigPapirsøknad,
      },
    });

    await velgSøknadstypeOgVisSkjema('Mor', 'Fødsel');
    await markerUfullstendigOgSendInn();

    expect(lagreUfullstendigPapirsøknad).toHaveBeenCalledExactlyOnceWith({
      '@type': AksjonspunktKode.REGISTRER_PAPIRSØKNAD_FORELDREPENGER,
      tema: 'FODSL',
      søknadstype: 'FP',
      søker: 'MOR',
      ufullstendigSøknad: true,
    });
    expect(lagrePapirsøknad).not.toHaveBeenCalled();
  });

  it('skal sende inn ufullstendig engangsstønad-søknad med riktige felter', async () => {
    const lagreUfullstendigPapirsøknad = vi.fn();
    const lagrePapirsøknad = vi.fn();

    await EngangsstonadFørstegangssøknad.run({
      args: {
        ...EngangsstonadFørstegangssøknad.args,
        lagrePapirsøknad,
        lagreUfullstendigPapirsøknad,
      },
    });

    await velgSøknadstypeOgVisSkjema('Far', 'Adopsjon');
    await markerUfullstendigOgSendInn();

    expect(lagreUfullstendigPapirsøknad).toHaveBeenCalledExactlyOnceWith({
      '@type': AksjonspunktKode.REGISTRER_PAPIRSØKNAD_ENGANGSSTØNAD,
      tema: 'ADPSJN',
      søknadstype: 'ES',
      søker: 'FAR',
      ufullstendigSøknad: true,
    });
    expect(lagrePapirsøknad).not.toHaveBeenCalled();
  });

  it('skal sende inn ufullstendig svangerskapspenger-søknad med riktige felter', async () => {
    const lagreUfullstendigPapirsøknad = vi.fn();
    const lagrePapirsøknad = vi.fn();

    await SvangerskapspengerFørstegangssøknad.run({
      args: {
        ...SvangerskapspengerFørstegangssøknad.args,
        lagrePapirsøknad,
        lagreUfullstendigPapirsøknad,
      },
    });

    await velgSøknadstypeOgVisSkjema('Mor');
    await markerUfullstendigOgSendInn();

    expect(lagreUfullstendigPapirsøknad).toHaveBeenCalledExactlyOnceWith({
      '@type': AksjonspunktKode.REGISTRER_PAPIRSØKNAD_SVANGERSKAPSPENGER,
      tema: 'FODSL',
      søknadstype: 'SVP',
      søker: 'MOR',
      ufullstendigSøknad: true,
    });
    expect(lagrePapirsøknad).not.toHaveBeenCalled();
  });
});

const velgSøknadstypeOgVisSkjema = async (søker: 'Mor' | 'Far', tema?: 'Fødsel' | 'Adopsjon') => {
  if (tema) {
    await userEvent.click(screen.getByRole('radio', { name: tema }));
  }
  await userEvent.click(screen.getByRole('radio', { name: søker }));
  await userEvent.click(screen.getByRole('button', { name: 'Vis skjema' }));
};

const markerUfullstendigOgSendInn = async () => {
  await userEvent.click(screen.getByRole('checkbox', { name: 'Søkers opplysningsplikt er ikke overholdt' }));
  await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett til avslag' }));
};