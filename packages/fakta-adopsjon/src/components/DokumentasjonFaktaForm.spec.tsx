import React from 'react';

import { FamilieHendelse, Soknad } from '@fpsak-frontend/types';
import { FieldEditedInfo } from '@fpsak-frontend/fakta-felles';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import DokumentasjonFaktaForm from './DokumentasjonFaktaForm';
import messages from '../../i18n/nb_NO.json';

jest.mock('react-intl', () => {
  const reactIntl = jest.requireActual('react-intl');
  const meldinger = jest.requireActual('../../i18n/nb_NO.json');
  const intlTestHelper = jest.requireActual('@fpsak-frontend/utils-test/src/intl-enzyme-test-helper');
  return {
    ...reactIntl,
    useIntl: () => intlTestHelper.getIntlMock(meldinger),
  };
});

describe('<DokumentasjonFaktaForm>', () => {
  const editedStatus = {
    adopsjonFodelsedatoer: { 1: true },
    omsorgsovertakelseDato: false,
    barnetsAnkomstTilNorgeDato: false,
  } as FieldEditedInfo;

  it('skal vise alle fodselsdatoer i datepickers', () => {
    const wrapper = shallowWithIntl(<DokumentasjonFaktaForm.WrappedComponent
      fodselsdatoer={{ 1: '2016-10-15', 2: '2014-10-15' }}
      omsorgsovertakelseDato="2017-10-15"
      readOnly={false}
      erForeldrepengerFagsak={false}
      hasEktefellesBarnAksjonspunkt={false}
      editedStatus={editedStatus}
      alleMerknaderFraBeslutter={{}}
    />, messages);
    const datepickers = wrapper.find('DatepickerField');
    expect(datepickers).toHaveLength(3);

    const omsorgsDatepicker = datepickers.first();
    expect(omsorgsDatepicker.prop('name')).toEqual('omsorgsovertakelseDato');

    const fodsel1Datepicker = datepickers.at(1);
    expect(fodsel1Datepicker.prop('name')).toEqual('fodselsdatoer.1');

    const fodsel2Datepicker = datepickers.last();
    expect(fodsel2Datepicker.prop('name')).toEqual('fodselsdatoer.2');

    const antallBarnUnder15Ar = wrapper.find('Normaltekst');
    expect(antallBarnUnder15Ar).toHaveLength(1);
    expect(antallBarnUnder15Ar.childAt(0).text()).toEqual('2');
  });

  it('skal ikke vise verdi for antall_barn_som_fyller_vilkåret når omsorgsovertakelseDato er tom', () => {
    const wrapper = shallowWithIntl(<DokumentasjonFaktaForm.WrappedComponent
      fodselsdatoer={{ 1: '2016-10-15' }}
      omsorgsovertakelseDato={null}
      readOnly={false}
      erForeldrepengerFagsak={false}
      hasEktefellesBarnAksjonspunkt={false}
      editedStatus={editedStatus}
      alleMerknaderFraBeslutter={{}}
    />, messages);

    const antallBarnUnder15Ar = wrapper.find('Normaltekst');
    expect(antallBarnUnder15Ar).toHaveLength(1);
    expect(antallBarnUnder15Ar.childAt(0).text()).toEqual('-');
  });

  it('skal ikke vise verdi for antall_barn_som_fyller_vilkåret når alle fødselsdatoer er tomme', () => {
    const wrapper = shallowWithIntl(<DokumentasjonFaktaForm.WrappedComponent
      fodselsdatoer={{ 1: null, 2: null }}
      omsorgsovertakelseDato="2016-10-15"
      readOnly={false}
      erForeldrepengerFagsak={false}
      hasEktefellesBarnAksjonspunkt={false}
      editedStatus={editedStatus}
      alleMerknaderFraBeslutter={{}}
    />, messages);

    const antallBarnUnder15Ar = wrapper.find('Normaltekst');
    expect(antallBarnUnder15Ar).toHaveLength(1);
    expect(antallBarnUnder15Ar.childAt(0).text()).toEqual('-');
  });

  it('skal vise verdi for antall_barn_som_fyller_vilkåret når minst en fødselsdato ikke er tomme', () => {
    const wrapper = shallowWithIntl(<DokumentasjonFaktaForm.WrappedComponent
      fodselsdatoer={{ 1: null, 2: '2016-10-15' }}
      omsorgsovertakelseDato="2016-10-15"
      readOnly={false}
      erForeldrepengerFagsak={false}
      hasEktefellesBarnAksjonspunkt={false}
      editedStatus={editedStatus}
      alleMerknaderFraBeslutter={{}}
    />, messages);

    const antallBarnUnder15Ar = wrapper.find('Normaltekst');
    expect(antallBarnUnder15Ar).toHaveLength(1);
    expect(antallBarnUnder15Ar.childAt(0).text()).toEqual('1');
  });

  it('skal sette opp initielle verdier fra søknad når det ikke finnes avklarte data', () => {
    const soknad = {
      omsorgsovertakelseDato: '2016-10-15',
      adopsjonFodelsedatoer: { 1: '2016-03-15' } as {[ key: number]: string},
    };

    const initialValues = DokumentasjonFaktaForm.buildInitialValues(soknad as Soknad, {} as FamilieHendelse);

    expect(initialValues).toEqual({
      barnetsAnkomstTilNorgeDato: undefined,
      omsorgsovertakelseDato: '2016-10-15',
      fodselsdatoer: { 1: '2016-03-15' },
    });
  });

  it('skal ikke vise datofelt for barnets ankomst til norge når engangsstønad', () => {
    const wrapper = shallowWithIntl(<DokumentasjonFaktaForm.WrappedComponent
      fodselsdatoer={{ 1: '2016-10-15' }}
      omsorgsovertakelseDato={null}
      readOnly={false}
      erForeldrepengerFagsak={false}
      hasEktefellesBarnAksjonspunkt={false}
      editedStatus={editedStatus}
      alleMerknaderFraBeslutter={{}}
    />, messages);

    const dateField = wrapper.find('[name="barnetsAnkomstTilNorgeDato"]');
    expect(dateField).toHaveLength(0);
  });

  it('skal ikke vise datofelt for barnets ankomst til norge når foreldrepenger hvis ikke oppgitt i søknad', () => {
    const wrapper = shallowWithIntl(<DokumentasjonFaktaForm.WrappedComponent
      fodselsdatoer={{ 1: '2016-10-15' }}
      omsorgsovertakelseDato={null}
      readOnly={false}
      erForeldrepengerFagsak
      hasEktefellesBarnAksjonspunkt={false}
      editedStatus={editedStatus}
      alleMerknaderFraBeslutter={{}}
    />, messages);

    const dateField = wrapper.find('[name="barnetsAnkomstTilNorgeDato"]');
    expect(dateField).toHaveLength(0);
  });

  it('skal vise tekst stebarnsadopsjon når det er en foreldrepengersak og en har aksjonspunkt for ektefelles/samboers barn', () => {
    const wrapper = shallowWithIntl(<DokumentasjonFaktaForm.WrappedComponent
      fodselsdatoer={{ 1: '2016-10-15' }}
      omsorgsovertakelseDato={null}
      readOnly={false}
      erForeldrepengerFagsak
      hasEktefellesBarnAksjonspunkt
      editedStatus={editedStatus}
      alleMerknaderFraBeslutter={{}}
    />, messages);

    const dateField = wrapper.find('[name="omsorgsovertakelseDato"]');
    expect(dateField.prop('label')).toEqual({ id: 'DokumentasjonFaktaForm.Stebarnsadopsjon' });
  });

  it('skal vise tekst omsorgsovertakelse når det ikke er en foreldrepengersak og en har aksjonspunkt for ektefelles/samboers barn', () => {
    const wrapper = shallowWithIntl(<DokumentasjonFaktaForm.WrappedComponent
      fodselsdatoer={{ 1: '2016-10-15' }}
      omsorgsovertakelseDato={null}
      readOnly={false}
      erForeldrepengerFagsak={false}
      hasEktefellesBarnAksjonspunkt
      editedStatus={editedStatus}
      alleMerknaderFraBeslutter={{}}
    />, messages);

    const dateField = wrapper.find('[name="omsorgsovertakelseDato"]');
    expect(dateField.prop('label')).toEqual({ id: 'DokumentasjonFaktaForm.Omsorgsovertakelsesdato' });
  });

  it('skal vise tekst omsorgsovertakelse når det en foreldrepengersak og en ikke har aksjonspunkt for ektefelles/samboers barn', () => {
    const wrapper = shallowWithIntl(<DokumentasjonFaktaForm.WrappedComponent
      fodselsdatoer={{ 1: '2016-10-15' }}
      omsorgsovertakelseDato={null}
      readOnly={false}
      erForeldrepengerFagsak
      hasEktefellesBarnAksjonspunkt={false}
      editedStatus={editedStatus}
      alleMerknaderFraBeslutter={{}}
    />, messages);

    const dateField = wrapper.find('[name="omsorgsovertakelseDato"]');
    expect(dateField.prop('label')).toEqual({ id: 'DokumentasjonFaktaForm.Omsorgsovertakelsesdato' });
  });

  it('skal sette opp initielle verdier fra avklarte data når dette finnes', () => {
    const soknad = {
      omsorgsovertakelseDato: '2016-10-15',
      adopsjonFodelsedatoer: { 0: '2016-03-15' } as { [key: number]: string },
    };
    const familiehendelse = {
      omsorgsovertakelseDato: '2015-10-15',
      adopsjonFodelsedatoer: { 1: '2015-03-15' } as Record<number, string>,
    } as FamilieHendelse;

    const initialValues = DokumentasjonFaktaForm.buildInitialValues(soknad as Soknad, familiehendelse);

    expect(initialValues).toEqual({
      barnetsAnkomstTilNorgeDato: undefined,
      omsorgsovertakelseDato: '2015-10-15',
      fodselsdatoer: { 1: '2015-03-15' },
    });
  });
});
