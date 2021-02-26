import React from 'react';
import sinon from 'sinon';
import { FormattedMessage } from 'react-intl';

import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import innsynResultatType from '@fpsak-frontend/kodeverk/src/innsynResultatType';
import { ProsessStegSubmitButton } from '@fpsak-frontend/prosess-felles';
import { TextAreaField } from '@fpsak-frontend/form';

import { InnsynVedtakFormImpl } from './InnsynVedtakForm';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-prosess-vedtak-innsyn';

describe('<InnsynVedtakForm>', () => {
  //  Tester for readOnly betingelse på confirm-vilkår knapp
  it('skal vise bekreft vedtak-knapp når ikke readonly', () => {
    const wrapper = shallowWithIntl(<InnsynVedtakFormImpl
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      apBegrunnelse="Dette er en test"
      begrunnelse="Dette er en test"
      resultat={innsynResultatType.INNVILGET}
      saksNr="123"
      sprakkode={{
        kode: 'NN',
        kodeverk: '',
      }}
      documents={[]}
      behandlingId={1}
      behandlingVersjon={2}
      innsynDokumenter={[]}
      innsynMottattDato="10.10.2020"
      innsynResultatType={{ kode: 'kodeTest', kodeverk: '' }}
      alleDokumenter={[]}
      aksjonspunkter={[]}
      submitCallback={sinon.spy()}
      previewCallback={sinon.spy()}
      onSubmit={sinon.spy()}
    />);
    expect(wrapper.find(ProsessStegSubmitButton)).toHaveLength(1);
  });

  it('skal ikke vise bekreft vedtak-knapp når readonly', () => {
    const wrapper = shallowWithIntl(<InnsynVedtakFormImpl
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly
      apBegrunnelse="Dette er en test"
      begrunnelse="Dette er en test"
      resultat={innsynResultatType.INNVILGET}
      sprakkode={{
        kode: 'NN',
        kodeverk: '',
      }}
      saksNr="123"
      documents={[]}
      behandlingId={1}
      behandlingVersjon={2}
      innsynDokumenter={[]}
      innsynMottattDato="10.10.2020"
      innsynResultatType={{ kode: 'kodeTest', kodeverk: '' }}
      alleDokumenter={[]}
      aksjonspunkter={[]}
      submitCallback={sinon.spy()}
      previewCallback={sinon.spy()}
      onSubmit={sinon.spy()}
    />);
    expect(wrapper.find(ProsessStegSubmitButton)).toHaveLength(0);
  });

  //  Tester for readOnly betingelse se-documenter lenke
  it('skal vise lenke med tekst InnsynVedtakForm.ForhåndsvisBrev ved ikke readOnly', () => {
    const wrapper = shallowWithIntl(<InnsynVedtakFormImpl
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      apBegrunnelse="Dette er en test"
      begrunnelse="Dette er en test"
      resultat={innsynResultatType.INNVILGET}
      saksNr="123"
      sprakkode={{
        kode: 'NN',
        kodeverk: '',
      }}
      documents={[]}
      behandlingId={1}
      behandlingVersjon={2}
      innsynDokumenter={[]}
      innsynMottattDato="10.10.2020"
      innsynResultatType={{ kode: 'kodeTest', kodeverk: '' }}
      alleDokumenter={[]}
      aksjonspunkter={[]}
      submitCallback={sinon.spy()}
      previewCallback={sinon.spy()}
      onSubmit={sinon.spy()}
    />);
    expect(wrapper.find(FormattedMessage).last().prop('id')).toBe('InnsynVedtakForm.ForhåndsvisBrev');
  });

  it('skal vise lenke med tekst InnsynVedtakForm.VisVedtaksbrev ved ikke readOnly', () => {
    const wrapper = shallowWithIntl(<InnsynVedtakFormImpl
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly
      apBegrunnelse="Dette er en test"
      begrunnelse="Dette er en test"
      resultat={innsynResultatType.INNVILGET}
      sprakkode={{
        kode: 'NN',
        kodeverk: '',
      }}
      saksNr="123"
      documents={[]}
      behandlingId={1}
      behandlingVersjon={2}
      innsynDokumenter={[]}
      innsynMottattDato="10.10.2020"
      innsynResultatType={{ kode: 'kodeTest', kodeverk: '' }}
      alleDokumenter={[]}
      aksjonspunkter={[]}
      submitCallback={sinon.spy()}
      previewCallback={sinon.spy()}
      onSubmit={sinon.spy()}
    />);
    expect(wrapper.find(FormattedMessage).last().prop('id')).toBe('InnsynVedtakForm.VisVedtaksbrev');
  });

  // Tester for når TextAreaField skal vises
  it('skal vise TextAreaField når resultat lik AVVIST', () => {
    const wrapper = shallowWithIntl(<InnsynVedtakFormImpl
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      apBegrunnelse="Dette er en test"
      begrunnelse="Dette er en test"
      resultat={innsynResultatType.AVVIST}
      saksNr="123"
      sprakkode={{
        kode: 'NN',
        kodeverk: '',
      }}
      documents={[]}
      behandlingId={1}
      behandlingVersjon={2}
      innsynDokumenter={[]}
      innsynMottattDato="10.10.2020"
      innsynResultatType={{ kode: 'kodeTest', kodeverk: '' }}
      alleDokumenter={[]}
      aksjonspunkter={[]}
      submitCallback={sinon.spy()}
      previewCallback={sinon.spy()}
      onSubmit={sinon.spy()}
    />);
    expect(wrapper.find(TextAreaField)).toHaveLength(1);
  });

  it('skal vise TextAreaField når resultat lik DELVISTINNVILGET', () => {
    const wrapper = shallowWithIntl(<InnsynVedtakFormImpl
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      apBegrunnelse="Dette er en test"
      begrunnelse="Dette er en test"
      resultat={innsynResultatType.DELVISTINNVILGET}
      saksNr="123"
      sprakkode={{
        kode: 'NN',
        kodeverk: '',
      }}
      documents={[]}
      behandlingId={1}
      behandlingVersjon={2}
      innsynDokumenter={[]}
      innsynMottattDato="10.10.2020"
      innsynResultatType={{ kode: 'kodeTest', kodeverk: '' }}
      alleDokumenter={[]}
      aksjonspunkter={[]}
      submitCallback={sinon.spy()}
      previewCallback={sinon.spy()}
      onSubmit={sinon.spy()}
    />);
    expect(wrapper.find(TextAreaField)).toHaveLength(1);
  });

  it('skal ikke vise TextAreaField når resultat lik INNVILGET', () => {
    const wrapper = shallowWithIntl(<InnsynVedtakFormImpl
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      apBegrunnelse="Dette er en test"
      begrunnelse="Dette er en test"
      resultat={innsynResultatType.INNVILGET}
      sprakkode={{
        kode: 'NN',
        kodeverk: '',
      }}
      saksNr="123"
      documents={[]}
      behandlingId={1}
      behandlingVersjon={2}
      innsynDokumenter={[]}
      innsynMottattDato="10.10.2020"
      innsynResultatType={{ kode: 'kodeTest', kodeverk: '' }}
      alleDokumenter={[]}
      aksjonspunkter={[]}
      submitCallback={sinon.spy()}
      previewCallback={sinon.spy()}
      onSubmit={sinon.spy()}
    />);
    expect(wrapper.find(TextAreaField)).toHaveLength(0);
  });

  // Tester for når DocumentListVedtakInnsyn skal vises
  it('skal vise DocumentListVedtakInnsyn når resultat lik INNVILGET', () => {
    const wrapper = shallowWithIntl(<InnsynVedtakFormImpl
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      apBegrunnelse="Dette er en test"
      begrunnelse="Dette er en test"
      resultat={innsynResultatType.INNVILGET}
      sprakkode={{
        kode: 'NN',
        kodeverk: '',
      }}
      saksNr="123"
      documents={[]}
      behandlingId={1}
      behandlingVersjon={2}
      innsynDokumenter={[]}
      innsynMottattDato="10.10.2020"
      innsynResultatType={{ kode: 'kodeTest', kodeverk: '' }}
      alleDokumenter={[]}
      aksjonspunkter={[]}
      submitCallback={sinon.spy()}
      previewCallback={sinon.spy()}
      onSubmit={sinon.spy()}
    />);
    expect(wrapper.find('DocumentListVedtakInnsyn')).toHaveLength(1);
  });

  it('skal vise DocumentListVedtakInnsyn når resultat lik DELVISTINNVILGET', () => {
    const wrapper = shallowWithIntl(<InnsynVedtakFormImpl
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      apBegrunnelse="Dette er en test"
      begrunnelse="Dette er en test"
      resultat={innsynResultatType.DELVISTINNVILGET}
      sprakkode={{
        kode: 'NN',
        kodeverk: '',
      }}
      saksNr="123"
      documents={[]}
      behandlingId={1}
      behandlingVersjon={2}
      innsynDokumenter={[]}
      innsynMottattDato="10.10.2020"
      innsynResultatType={{ kode: 'kodeTest', kodeverk: '' }}
      alleDokumenter={[]}
      aksjonspunkter={[]}
      submitCallback={sinon.spy()}
      previewCallback={sinon.spy()}
      onSubmit={sinon.spy()}
    />);
    expect(wrapper.find('DocumentListVedtakInnsyn')).toHaveLength(1);
  });

  it('skal ikke vise DocumentListVedtakInnsyn når resultat lik AVVIST', () => {
    const wrapper = shallowWithIntl(<InnsynVedtakFormImpl
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      apBegrunnelse="Dette er en test"
      begrunnelse="Dette er en test"
      resultat={innsynResultatType.AVVIST}
      sprakkode={{
        kode: 'NN',
        kodeverk: '',
      }}
      saksNr="123"
      documents={[]}
      behandlingId={1}
      behandlingVersjon={2}
      innsynDokumenter={[]}
      innsynMottattDato="10.10.2020"
      innsynResultatType={{ kode: 'kodeTest', kodeverk: '' }}
      alleDokumenter={[]}
      aksjonspunkter={[]}
      submitCallback={sinon.spy()}
      previewCallback={sinon.spy()}
      onSubmit={sinon.spy()}
    />);
    expect(wrapper.find('DocumentListVedtakInnsyn')).toHaveLength(0);
  });

  // Tester for riktig resultat-tekst
  it('skal vise resultattekst for innvilget når resultat = INNVILGET', () => {
    const wrapper = shallowWithIntl(<InnsynVedtakFormImpl
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      apBegrunnelse="Dette er en test"
      begrunnelse="Dette er en test"
      resultat={innsynResultatType.INNVILGET}
      sprakkode={{
        kode: 'NN',
        kodeverk: '',
      }}
      saksNr="123"
      documents={[]}
      behandlingId={1}
      behandlingVersjon={2}
      innsynDokumenter={[]}
      innsynMottattDato="10.10.2020"
      innsynResultatType={{ kode: 'kodeTest', kodeverk: '' }}
      alleDokumenter={[]}
      aksjonspunkter={[]}
      submitCallback={sinon.spy()}
      previewCallback={sinon.spy()}
      onSubmit={sinon.spy()}
    />);
    expect(wrapper.find(FormattedMessage).at(2).prop('id')).toBe('InnsynVedtakForm.Innvilget');
  });

  it('skal vise resultattekst for delvis innvilget når resultat = DELVISINNVILGET', () => {
    const wrapper = shallowWithIntl(<InnsynVedtakFormImpl
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      apBegrunnelse="Dette er en test"
      begrunnelse="Dette er en test"
      resultat={innsynResultatType.DELVISTINNVILGET}
      sprakkode={{
        kode: 'NN',
        kodeverk: '',
      }}
      saksNr="123"
      documents={[]}
      behandlingId={1}
      behandlingVersjon={2}
      innsynDokumenter={[]}
      innsynMottattDato="10.10.2020"
      innsynResultatType={{ kode: 'kodeTest', kodeverk: '' }}
      alleDokumenter={[]}
      aksjonspunkter={[]}
      submitCallback={sinon.spy()}
      previewCallback={sinon.spy()}
      onSubmit={sinon.spy()}
    />);
    expect(wrapper.find(FormattedMessage).at(2).prop('id')).toBe('InnsynVedtakForm.Delvis');
  });

  it('skal vise resultattekst for avvist når resultat = AVVIST', () => {
    const wrapper = shallowWithIntl(<InnsynVedtakFormImpl
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      apBegrunnelse="Dette er en test"
      begrunnelse="Dette er en test"
      resultat={innsynResultatType.AVVIST}
      sprakkode={{
        kode: 'NN',
        kodeverk: '',
      }}
      saksNr="123"
      documents={[]}
      behandlingId={1}
      behandlingVersjon={2}
      innsynDokumenter={[]}
      innsynMottattDato="10.10.2020"
      innsynResultatType={{ kode: 'kodeTest', kodeverk: '' }}
      alleDokumenter={[]}
      aksjonspunkter={[]}
      submitCallback={sinon.spy()}
      previewCallback={sinon.spy()}
      onSubmit={sinon.spy()}
    />);
    expect(wrapper.find(FormattedMessage).at(2).prop('id')).toBe('InnsynVedtakForm.Avslatt');
  });
});
