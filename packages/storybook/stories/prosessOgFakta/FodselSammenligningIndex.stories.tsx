import React from 'react';

import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import FodselSammenligningIndex from '@fpsak-frontend/prosess-fakta-fodsel-sammenligning';
import { AvklartBarn, FamilieHendelse, Soknad } from '@fpsak-frontend/types';

const avklartBarn = [{
  fodselsdato: '2019-01-10',
  dodsdato: '2019-01-10',
  fnr: '1213200001',
}];

const soknad = {
  fodselsdatoer: { 1: '2019-01-10' } as {[key: number]: string},
  termindato: '2019-01-01',
  utstedtdato: '2019-01-02',
  antallBarn: 1,
} as Soknad;

const familiehendelse = {
  avklartBarn: [{
    fodselsdato: '2019-01-10',
  }],
  termindato: '2019-01-01',
  antallBarnTermin: 1,
} as FamilieHendelse;

export default {
  title: 'prosessOgFakta/prosess-fakta-fodsel-sammenligning',
  component: FodselSammenligningIndex,
};

export const visPanelForNårBehandlingstypeErRevurdering = () => (
  <FodselSammenligningIndex
    behandlingsTypeKode={behandlingType.REVURDERING}
    avklartBarn={avklartBarn}
    termindato="2019-01-01"
    soknad={soknad}
    familiehendelseOriginalBehandling={familiehendelse}
  />
);

export const visPanelForNårBehandlingstypeErFørstegangssoknad = () => (
  <FodselSammenligningIndex
    behandlingsTypeKode={behandlingType.FORSTEGANGSSOKNAD}
    avklartBarn={avklartBarn}
    termindato="2019-01-01"
    soknad={soknad}
    familiehendelseOriginalBehandling={familiehendelse}
  />
);

export const visPanelForMedVisningAvSvangerskapsuke = () => (
  <FodselSammenligningIndex
    behandlingsTypeKode={behandlingType.REVURDERING}
    avklartBarn={avklartBarn}
    termindato="2019-01-01"
    vedtaksDatoSomSvangerskapsuke={43}
    soknad={soknad}
    familiehendelseOriginalBehandling={{
      avklartBarn: [] as AvklartBarn[],
      termindato: '2019-01-01',
      antallBarnTermin: 1,
    } as FamilieHendelse}
  />
);
