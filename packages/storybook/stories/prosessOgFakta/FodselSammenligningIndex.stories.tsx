import React from 'react';
import {
  withKnobs, object, text,
} from '@storybook/addon-knobs';

import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import FodselSammenligningIndex from '@fpsak-frontend/prosess-fakta-fodsel-sammenligning';
import { FamilieHendelse, Soknad } from '@fpsak-frontend/types';

import withReduxProvider from '../../decorators/withRedux';

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
  decorators: [withKnobs, withReduxProvider],
};

export const visPanelForNårBehandlingstypeErRevurdering = () => (
  <FodselSammenligningIndex
    behandlingsTypeKode={behandlingType.REVURDERING}
    avklartBarn={object('avklartBarn', avklartBarn)}
    termindato={text('termindato', '2019-01-01')}
    soknad={object('soknad', soknad)}
    familiehendelseOriginalBehandling={object('familiehendelseOriginalBehandling', familiehendelse)}
  />
);

export const visPanelForNårBehandlingstypeErFørstegangssoknad = () => (
  <FodselSammenligningIndex
    behandlingsTypeKode={behandlingType.FORSTEGANGSSOKNAD}
    avklartBarn={object('avklartBarn', avklartBarn)}
    termindato={text('termindato', '2019-01-01')}
    soknad={object('soknad', soknad)}
    familiehendelseOriginalBehandling={object('familiehendelseOriginalBehandling', familiehendelse)}
  />
);

export const visPanelForMedVisningAvSvangerskapsuke = () => (
  <FodselSammenligningIndex
    behandlingsTypeKode={behandlingType.REVURDERING}
    avklartBarn={object('avklartBarn', avklartBarn)}
    termindato={text('termindato', '2019-01-01')}
    vedtaksDatoSomSvangerskapsuke={43}
    soknad={object('soknad', soknad)}
    familiehendelseOriginalBehandling={object('familiehendelseOriginalBehandling', {
      avklartBarn: [],
      termindato: '2019-01-01',
      antallBarnTermin: 1,
    } as FamilieHendelse)}
  />
);
