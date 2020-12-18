import React from 'react';
import { shallow } from 'enzyme';
import { Normaltekst } from 'nav-frontend-typografi';

import { FamilieHendelse, Soknad } from '@fpsak-frontend/types';

import {
  FodselSammenligningRevurderingPanel,
  getAntallBarn,
  getTermindatoEllerFodselsdato,
} from './FodselSammenligningRevurderingPanel';

describe('<FodselSammenligningRevurderingPanel>', () => {
  const soknadOriginalBehandling = {
    fodselsdatoer: { 1: '2019-01-01' } as {[key: number]: string},
    termindato: '2019-01-01',
    antallBarn: 1,
    utstedtdato: '2019-01-01',
  } as Soknad;

  it('skal vise vedtaksdato', () => {
    const wrapper = shallow(<FodselSammenligningRevurderingPanel
      soknadOriginalBehandling={soknadOriginalBehandling}
      vedtaksDatoSomSvangerskapsuke="2018-08-10"
      familiehendelseOriginalBehandling={{
        avklartBarn: [],
      } as FamilieHendelse}
    />);

    expect(wrapper.find("[id='FodselsammenligningPanel.Vedtaksdato']")).toHaveLength(1);
    const normaltekstFields = wrapper.find(Normaltekst);
    expect(normaltekstFields).toHaveLength(6);
    expect(normaltekstFields.at(3).childAt(0).text()).toEqual('2018-08-10');
  });

  it('skal ikke vise vedtaksdato', () => {
    const wrapper = shallow(<FodselSammenligningRevurderingPanel
      soknadOriginalBehandling={soknadOriginalBehandling}
      vedtaksDatoSomSvangerskapsuke="2018-08-10"
    />);

    expect(wrapper.find("[id='FodselsammenligningPanel.Vedtaksdato']")).toHaveLength(0);
    const normaltekstFields = wrapper.find(Normaltekst);
    expect(normaltekstFields).toHaveLength(4);
  });

  it('skal hente tom streng når en ikke har søknad eller familehendelse', () => {
    const isTermin = true;
    const originalSoknad = undefined;
    const orginalFamiliehendelse = undefined;

    const date = getTermindatoEllerFodselsdato(isTermin, originalSoknad, orginalFamiliehendelse);

    expect(date).toEqual('');
  });

  it('skal hente termindato fra familehendelse når denne finnes', () => {
    const isTermin = true;
    const originalSoknad = {
      termindato: '2017-01-01',
    } as Soknad;
    const orginalFamiliehendelse = {
      termindato: '2017-02-02',
    } as FamilieHendelse;

    const date = getTermindatoEllerFodselsdato(isTermin, originalSoknad, orginalFamiliehendelse);

    expect(date).toEqual('02.02.2017');
  });

  it('skal hente termindato fra søknad når familiehendelse ikke finnes', () => {
    const isTermin = true;
    const originalSoknad = {
      termindato: '2017-01-01',
    } as Soknad;
    const orginalFamiliehendelse = undefined;

    const date = getTermindatoEllerFodselsdato(isTermin, originalSoknad, orginalFamiliehendelse);

    expect(date).toEqual('01.01.2017');
  });

  it('skal hente fødselsdato fra familehendelse når denne finnes', () => {
    const isTermin = false;
    const originalSoknad = {
      fodselsdatoer: {
        1: '2017-01-01',
      } as {[key: number]: string},
    } as Soknad;
    const orginalFamiliehendelse = {
      avklartBarn: [{
        fodselsdato: '2017-02-02',
      }],
    } as FamilieHendelse;

    const date = getTermindatoEllerFodselsdato(isTermin, originalSoknad, orginalFamiliehendelse);

    expect(date).toEqual('02.02.2017');
  });

  it('skal hente fødselsdato fra søknad når familiehendelse ikke finnes', () => {
    const isTermin = false;
    const originalSoknad = {
      fodselsdatoer: {
        1: '2017-01-01',
      } as {[key: number]: string},
    } as Soknad;
    const orginalFamiliehendelse = undefined;

    const date = getTermindatoEllerFodselsdato(isTermin, originalSoknad, orginalFamiliehendelse);

    expect(date).toEqual('01.01.2017');
  });

  it('skal hente antall barn 0 når en ikke har søknad eller familehendelse', () => {
    const isTermin = true;
    const originalSoknad = undefined;
    const orginalFamiliehendelse = undefined;

    const antallBarn = getAntallBarn(isTermin, originalSoknad, orginalFamiliehendelse);

    expect(antallBarn).toEqual(0);
  });

  it('skal hente antall barn termin fra familiehendelse når denne finnes', () => {
    const isTermin = true;
    const originalSoknad = {
      antallBarn: 1,
    } as Soknad;
    const orginalFamiliehendelse = {
      termindato: '2017-01-01',
      antallBarnTermin: 2,
    } as FamilieHendelse;

    const antallBarn = getAntallBarn(isTermin, originalSoknad, orginalFamiliehendelse);

    expect(antallBarn).toEqual(2);
  });

  it('skal hente antall barn termin fra soknad når familiehendelse ikke finnes', () => {
    const isTermin = true;
    const originalSoknad = {
      antallBarn: 1,
    } as Soknad;
    const orginalFamiliehendelse = undefined;

    const antallBarn = getAntallBarn(isTermin, originalSoknad, orginalFamiliehendelse);

    expect(antallBarn).toEqual(1);
  });

  it('skal hente antall barn fødsel fra familiehendelse når denne finnes', () => {
    const isTermin = false;
    const originalSoknad = {
      antallBarn: 1,
    } as Soknad;
    const orginalFamiliehendelse = {
      avklartBarn: [{
        fodselsdato: '2017-01-01',
      }, {
        fodselsdato: '2017-02-01',
      }],
    } as FamilieHendelse;

    const antallBarn = getAntallBarn(isTermin, originalSoknad, orginalFamiliehendelse);

    expect(antallBarn).toEqual(2);
  });

  it('skal hente antall barn fødsel fra soknad når familiehendelse ikke finnes', () => {
    const isTermin = false;
    const originalSoknad = {
      antallBarn: 1,
    } as Soknad;
    const orginalFamiliehendelse = undefined;

    const antallBarn = getAntallBarn(isTermin, originalSoknad, orginalFamiliehendelse);

    expect(antallBarn).toEqual(1);
  });
});
