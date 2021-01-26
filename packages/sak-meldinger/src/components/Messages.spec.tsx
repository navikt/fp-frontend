import React from 'react';
import sinon from 'sinon';

import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import ugunstAarsakTyper from '@fpsak-frontend/kodeverk/src/ugunstAarsakTyper';
import dokumentMalType from '@fpsak-frontend/kodeverk/src/dokumentMalType';

import { MessagesImpl as Messages } from './Messages';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-sak-meldinger';

const mockProps = {
  setRecipient: () => undefined,
  setTemplate: () => undefined,
  updateModel: () => undefined,
  previewCallback: () => undefined,
  submitCallback: () => undefined,
  validateModel: () => undefined,
  isSubmitting: false,
  intl: intlMock,
  ...reduxFormPropsMock,
};

describe('<Messages>', () => {
  const recipients = ['Søker', 'Annen person'];

  const sprakkode = {
    kode: 'en',
    kodeverk: '',
  };

  const templates = [
    { kode: 'Mal1', navn: 'Mal 1', tilgjengelig: true },
    { kode: 'Mal2', navn: 'Mal 2', tilgjengelig: true },
    { kode: 'Mal3', navn: 'Mal 3', tilgjengelig: true },
  ];

  const revurderingVarslingArsaker = [{
    kode: ugunstAarsakTyper.BARN_IKKE_REGISTRERT_FOLKEREGISTER,
    navn: 'Ikke registrert',
    kodeverk: '',
  }, {
    kode: ugunstAarsakTyper.ANNET,
    navn: 'Annet',
    kodeverk: '',
  }, {
    kode: 'TEST',
    navn: 'test',
    kodeverk: '',
  }];

  it('skal vise to select-bokser', () => {
    const wrapper = shallowWithIntl(<Messages
      {...mockProps}
      recipients={recipients}
      templates={templates}
      sprakKode={sprakkode}
      behandlingId={1}
      behandlingVersjon={2}
      revurderingVarslingArsak={revurderingVarslingArsaker}
      fagsakYtelseType={{
        kode: fagsakYtelseType.FORELDREPENGER,
        kodeverk: '',
      }}
    />);

    const form = wrapper.find('form');
    const selectFields = form.find('SelectField');
    expect(selectFields).toHaveLength(2);

    const recipientSelect = selectFields.findWhere((selectField) => selectField.prop('name') === 'mottaker');
    expect(recipientSelect).toHaveLength(1);
    expect(recipientSelect.prop('selectValues')).toHaveLength(2);

    const templateSelect = selectFields.findWhere((selectField) => selectField.prop('name') === 'brevmalkode');
    expect(templateSelect).toHaveLength(1);
    expect(templateSelect.prop('selectValues')).toHaveLength(3);
  });

  it('skal vise forhåndvisningslenke når fritekst er gyldig', () => {
    const previewEventCallback = sinon.spy();
    const wrapper = shallowWithIntl(<Messages
      {...mockProps}
      recipients={recipients}
      templates={templates}
      sprakKode={sprakkode}
      previewCallback={previewEventCallback}
      fritekst="Dokument"
      behandlingId={1}
      behandlingVersjon={2}
      revurderingVarslingArsak={revurderingVarslingArsaker}
      fagsakYtelseType={{
        kode: fagsakYtelseType.FORELDREPENGER,
        kodeverk: '',
      }}
    />);

    const previewLink = wrapper.find('a');
    expect(previewLink).toHaveLength(1);
    expect(previewLink.text()).toEqual('Forhåndsvis');

    expect(previewEventCallback.called).toBe(false);
    previewLink.simulate('click', { preventDefault: sinon.spy() });
    expect(previewEventCallback.called).toBe(true);
  });

  it('skal vise tre select-bokser når varsel om revurdering', () => {
    const previewEventCallback = sinon.spy();
    const wrapper = shallowWithIntl(<Messages
      {...mockProps}
      recipients={recipients}
      templates={templates}
      sprakKode={sprakkode}
      brevmalkode="REVURD"
      previewCallback={previewEventCallback}
      fritekst="Dokument"
      behandlingId={1}
      behandlingVersjon={2}
      revurderingVarslingArsak={revurderingVarslingArsaker}
      fagsakYtelseType={{
        kode: fagsakYtelseType.FORELDREPENGER,
        kodeverk: '',
      }}
    />);

    const form = wrapper.find('form');
    const selectFields = form.find('SelectField');
    expect(selectFields).toHaveLength(3);

    const recipientSelect = selectFields.findWhere((selectField) => selectField.prop('name') === 'mottaker');
    expect(recipientSelect).toHaveLength(1);
    expect(recipientSelect.prop('selectValues')).toHaveLength(2);

    const templateSelect = selectFields.findWhere((selectField) => selectField.prop('name') === 'brevmalkode');
    expect(templateSelect).toHaveLength(1);
    expect(templateSelect.prop('selectValues')).toHaveLength(3);
  });

  it('skal vise alle revuderingsvarslingsårsaker for sakstype foreldeprenger', () => {
    const wrapper = shallowWithIntl(<Messages
      {...mockProps}
      recipients={recipients}
      templates={templates}
      sprakKode={sprakkode}
      behandlingId={1}
      behandlingVersjon={2}
      brevmalkode={dokumentMalType.REVURDERING_DOK}
      revurderingVarslingArsak={revurderingVarslingArsaker}
      fagsakYtelseType={{
        kode: fagsakYtelseType.FORELDREPENGER,
        kodeverk: '',
      }}
    />);

    const form = wrapper.find('form');
    const selectField = form.find('SelectField').last();
    expect(selectField.prop('selectValues')).toHaveLength(3);
  });

  it('skal vise alle revuderingsvarslingsårsaker utenom Barn ikke registrert for sakstype svangerskapspenger', () => {
    const wrapper = shallowWithIntl(<Messages
      {...mockProps}
      recipients={recipients}
      templates={templates}
      sprakKode={sprakkode}
      behandlingId={1}
      behandlingVersjon={2}
      brevmalkode={dokumentMalType.REVURDERING_DOK}
      revurderingVarslingArsak={revurderingVarslingArsaker}
      fagsakYtelseType={{
        kode: fagsakYtelseType.SVANGERSKAPSPENGER,
        kodeverk: '',
      }}
    />);

    const form = wrapper.find('form');
    const selectField = form.find('SelectField').last();
    const options = selectField.prop('selectValues');
    expect(options).toHaveLength(2);
    expect(options[0].props.value).toEqual(ugunstAarsakTyper.ANNET);
    expect(options[1].props.value).toEqual('TEST');
  });

  it('skal vise revuderingsvarslingsårsaker (Annet og Barn ikke registrert) for sakstype engangsstønad', () => {
    const wrapper = shallowWithIntl(<Messages
      {...mockProps}
      recipients={recipients}
      templates={templates}
      sprakKode={sprakkode}
      behandlingId={1}
      behandlingVersjon={2}
      brevmalkode={dokumentMalType.REVURDERING_DOK}
      revurderingVarslingArsak={revurderingVarslingArsaker}
      fagsakYtelseType={{
        kode: fagsakYtelseType.ENGANGSSTONAD,
        kodeverk: '',
      }}
    />);

    const form = wrapper.find('form');
    const selectField = form.find('SelectField').last();
    const options = selectField.prop('selectValues');
    expect(options).toHaveLength(2);
    expect(options[0].props.value).toEqual(ugunstAarsakTyper.BARN_IKKE_REGISTRERT_FOLKEREGISTER);
    expect(options[1].props.value).toEqual(ugunstAarsakTyper.ANNET);
  });
});
