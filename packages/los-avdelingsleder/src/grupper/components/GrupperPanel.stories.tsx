import React, { useState } from 'react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { RestApiState } from '@navikt/fp-rest-api-hooks';
import messages from '../../../i18n/nb_NO.json';
import SaksbehandlereOgSaksbehandlerGrupper, {
  SaksbehandlerGruppe,
} from '../../typer/saksbehandlereOgSaksbehandlerGrupper ';
import GrupperPanel from './GrupperPanel';
import { SaksbehandlerProfil } from '@navikt/fp-los-felles';

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
    ansattAvdeling: 'Avdeling Å',
  },
  {
    brukerIdent: 'ident4',
    navn: 'Olga Utvikler',
    ansattAvdeling: 'Avdeling Å',
  },
  {
    brukerIdent: 'ident3',
    navn: 'Klara Utvikler',
    ansattAvdeling: 'Avdeling Å',
  },
];

const saksbehandlere = [
  {
    brukerIdent: 'ident1',
    navn: 'Anders Utvikler',
  },
];

const saksbehandlereOgSaksbehandlerGrupper = {
  saksbehandlerGrupper: [
    {
      gruppeId: 1,
      gruppeNavn: 'Dette er navnet på en gruppe',
      saksbehandlere,
    },
  ],
} as SaksbehandlereOgSaksbehandlerGrupper;

const endreSaksbehandlere = (gruppeSaksbehandlere: SaksbehandlerProfil[], brukerIdent: string, leggTil: boolean) => {
  if (leggTil) {
    return gruppeSaksbehandlere.concat({
      brukerIdent,
      navn: 'Placholder for navn i story',
      ansattAvdeling: null,
    });
  }
  // @ts-ignore
  return gruppeSaksbehandlere.filter(s => s.saksbehandlerDto.brukerIdent !== brukerIdent);
};

const creatNewId = (saksbehandlerGrupper: SaksbehandlerGruppe[]) =>
  saksbehandlerGrupper.reduce((prev, sg) => (sg.gruppeId > prev ? sg.gruppeId : prev), 0) + 1;

export default {
  title: 'los/avdelingsleder/grupper/GrupperPanel',
  component: GrupperPanel,
  decorators: [withIntl],
};

const Template = () => {
  const [grupper, setGruppe] = useState(saksbehandlereOgSaksbehandlerGrupper);

  const opprettOgHentAlleGrupper = () => {
    setGruppe(oldG => ({
      saksbehandlerGrupper: oldG.saksbehandlerGrupper.concat({
        gruppeId: creatNewId(oldG.saksbehandlerGrupper),
        saksbehandlere: [],
      }),
    }));
  };

  const slettGruppeOgHentAllePåNytt = (gruppeId: number) => {
    setGruppe(oldG => ({
      saksbehandlerGrupper: oldG.saksbehandlerGrupper.filter(g => g.gruppeId !== gruppeId),
    }));
  };

  const endreGruppenavn = (gruppeId: number, gruppeNavn: string) => {
    setGruppe(oldG => ({
      saksbehandlerGrupper: oldG.saksbehandlerGrupper.map(g => {
        if (g.gruppeId === gruppeId) {
          return {
            ...g,
            gruppeNavn,
          };
        }
        return g;
      }),
    }));
  };

  const lagreValgtSaksbehandler = (brukerIdent: string, gruppeId: number, leggTil: boolean) => {
    setGruppe(oldG => ({
      saksbehandlerGrupper: oldG.saksbehandlerGrupper.map(g => {
        if (g.gruppeId === gruppeId) {
          return {
            ...g,
            saksbehandlere: endreSaksbehandlere(g.saksbehandlere, brukerIdent, leggTil),
          };
        }
        return g;
      }),
    }));
  };

  return (
    <GrupperPanel
      grupper={grupper}
      avdelingensSaksbehandlere={avdelingensSaksbehandlere}
      opprettOgHentAlleGrupper={opprettOgHentAlleGrupper}
      opprettNyGruppeState={RestApiState.NOT_STARTED}
      lagreValgtSaksbehandlar={lagreValgtSaksbehandler}
      endreGruppenavn={endreGruppenavn}
      slettGruppe={slettGruppeOgHentAllePåNytt}
    />
  );
};
export const Default = Template.bind({});
