import React from 'react';
import { shallow } from 'enzyme';
import { Normaltekst } from 'nav-frontend-typografi';

import { Soknad } from '@fpsak-frontend/types';

import {
  FodselSammenligningOtherPanel,
  getTerminEllerFodselsdato,
} from './FodselSammenligningOtherPanel';

describe('<FodselSammenligningOtherPanel>', () => {
  it('skal vise utstedt dato når denne finnes', () => {
    const soknad = {
      fodselsdatoer: { 1: '2019-01-01', 2: '2019-01-01' } as {[key: number]: string},
      termindato: '2019-01-02',
      antallBarn: 1,
      utstedtdato: '2019-01-01',
    } as Soknad;

    const wrapper = shallow(<FodselSammenligningOtherPanel
      soknad={soknad}
      termindato="2018-10-10"
    />);

    expect(wrapper.find("[id='FodselsammenligningPanel.UstedtDato']")).toHaveLength(1);
    const normaltekstFields = wrapper.find(Normaltekst);
    expect(normaltekstFields).toHaveLength(6);
    expect(normaltekstFields.at(3).childAt(0).text()).toEqual('01.01.2019');
  });

  it('skal ikke vise utstedt dato når denne ikke finnes', () => {
    const soknad = {
      fodselsdatoer: { 1: '2019-01-01', 2: '2019-01-01' } as {[key: number]: string},
      termindato: '2019-01-01',
      antallBarn: 1,
    } as Soknad;

    const wrapper = shallow(<FodselSammenligningOtherPanel
      soknad={soknad}
      termindato="2018-10-10"
    />);

    expect(wrapper.find("[id='FodselsammenligningPanel.UstedtDato']")).toHaveLength(0);
    const normaltekstFields = wrapper.find(Normaltekst);
    expect(normaltekstFields).toHaveLength(4);
  });

  it('skal returnere null når en ikke har familiehendelse og heller ikke søknad', () => {
    const hasSoknad = false;
    const termindatoSoknad = undefined;
    const fodselsdatoerSoknad = undefined;
    const termindato = undefined;

    const date = getTerminEllerFodselsdato(hasSoknad, termindatoSoknad, fodselsdatoerSoknad, termindato);
    expect(date).toBeNull();
  });

  it('skal vise fødselsdato fra søknad når denne finnes og en ikke har familiehendelse', () => {
    const hasSoknad = true;
    const termindatoSoknad = undefined;
    const fodselsdatoerSoknad = {
      1: '2017-10-10',
    };
    const termindato = undefined;

    const date = getTerminEllerFodselsdato(hasSoknad, fodselsdatoerSoknad, termindatoSoknad, termindato);
    expect(date).toEqual('10.10.2017');
  });

  it('skal vise termindato fra søknad når denne finnes og en ikke har familiehendelse', () => {
    const hasSoknad = true;
    const termindatoSoknad = '2017-02-01';
    const fodselsdatoerSoknad = {};
    const termindato = undefined;

    const date = getTerminEllerFodselsdato(hasSoknad, fodselsdatoerSoknad, termindatoSoknad, termindato);
    expect(date).toEqual('01.02.2017');
  });
});
