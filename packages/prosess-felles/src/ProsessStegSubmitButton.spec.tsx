import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Hovedknapp } from 'nav-frontend-knapper';

import { ProsessStegSubmitButton } from './ProsessStegSubmitButton';

describe('<ProsessStegSubmitButton>', () => {
  it('skal ikke vise submit-knapp når behandlingspunkt er readonly', () => {
    const wrapper = shallow(<ProsessStegSubmitButton
      behandlingId={1}
      behandlingVersjon={2}
      formName="test"
      isBehandlingFormSubmitting={() => undefined}
      isBehandlingFormDirty={() => undefined}
      hasBehandlingFormErrorsOfType={() => undefined}
      isReadOnly
      isSubmittable={false}
      isSubmitting={false}
      isDirty={false}
      hasEmptyRequiredFields={false}
    />);

    expect(wrapper.find(Hovedknapp)).to.have.length(0);
  });

  it('skal vise submit-knapp med standard tekst når behandlingspunkt ikke er readonly', () => {
    const wrapper = shallow(<ProsessStegSubmitButton
      behandlingId={1}
      behandlingVersjon={2}
      formName="test"
      isBehandlingFormSubmitting={() => undefined}
      isBehandlingFormDirty={() => undefined}
      hasBehandlingFormErrorsOfType={() => undefined}
      isReadOnly={false}
      isSubmittable={false}
      isSubmitting={false}
      isDirty={false}
      hasEmptyRequiredFields={false}
    />);

    const knapp = wrapper.find(Hovedknapp);
    expect(knapp).to.have.length(1);

    expect(knapp.childAt(0).text()).is.eql('Bekreft og fortsett');
  });

  it('skal vise submit-knapp med spesifikk tekst når behandlingspunkt ikke er readonly', () => {
    const wrapper = shallow(<ProsessStegSubmitButton
      behandlingId={1}
      behandlingVersjon={2}
      formName="test"
      isBehandlingFormSubmitting={() => undefined}
      isBehandlingFormDirty={() => undefined}
      hasBehandlingFormErrorsOfType={() => undefined}
      isReadOnly={false}
      isSubmittable={false}
      isSubmitting={false}
      isDirty={false}
      hasEmptyRequiredFields={false}
      text="Bekreft"
    />);

    const knapp = wrapper.find(Hovedknapp);
    expect(knapp).to.have.length(1);

    expect(knapp.childAt(0).text()).is.eql('Bekreft');
  });

  it('skal vise knapp som enabled når behandlingspunkt er dirty og submittable', () => {
    const wrapper = shallow(<ProsessStegSubmitButton
      behandlingId={1}
      behandlingVersjon={2}
      formName="test"
      isBehandlingFormSubmitting={() => undefined}
      isBehandlingFormDirty={() => undefined}
      hasBehandlingFormErrorsOfType={() => undefined}
      isReadOnly={false}
      isSubmittable
      isSubmitting={false}
      isDirty
      hasEmptyRequiredFields={false}
    />);

    const button = wrapper.find(Hovedknapp);
    expect(button).to.have.length(1);
    expect(button.prop('disabled')).to.false;
  });

  it('skal vise knapp som disabled når behandlingspunkt ikke er dirty eller submittable', () => {
    const wrapper = shallow(<ProsessStegSubmitButton
      behandlingId={1}
      behandlingVersjon={2}
      formName="test"
      isBehandlingFormSubmitting={() => undefined}
      isBehandlingFormDirty={() => undefined}
      hasBehandlingFormErrorsOfType={() => undefined}
      isReadOnly={false}
      isSubmittable={false}
      isSubmitting={false}
      isDirty={false}
      hasEmptyRequiredFields={false}
    />);

    const button = wrapper.find(Hovedknapp);
    expect(button).to.have.length(1);
    expect(button.prop('disabled')).to.true;
  });

  it('skal vise knapp som disabled når innsending av behandlingspunkt-data pågår', () => {
    const wrapper = shallow(<ProsessStegSubmitButton
      behandlingId={1}
      behandlingVersjon={2}
      formName="test"
      isBehandlingFormSubmitting={() => undefined}
      isBehandlingFormDirty={() => undefined}
      hasBehandlingFormErrorsOfType={() => undefined}
      isReadOnly={false}
      isSubmittable
      isSubmitting
      isDirty
      hasEmptyRequiredFields={false}
    />);

    const button = wrapper.find(Hovedknapp);
    expect(button).to.have.length(1);
    expect(button.prop('disabled')).to.true;
  });

  it('skal vise knapp som disabled en ikke har fylt ut alle obligatoriske felter', () => {
    const wrapper = shallow(<ProsessStegSubmitButton
      behandlingId={1}
      behandlingVersjon={2}
      formName="test"
      isBehandlingFormSubmitting={() => undefined}
      isBehandlingFormDirty={() => undefined}
      hasBehandlingFormErrorsOfType={() => undefined}
      isReadOnly={false}
      isSubmittable
      isSubmitting={false}
      isDirty
      hasEmptyRequiredFields
    />);

    const button = wrapper.find(Hovedknapp);
    expect(button).to.have.length(1);
    expect(button.prop('disabled')).to.true;
  });

  it('skal vise knapp som disabled når behandlingspunkt ikke er dirty og en ikke har fylt ut alle obligatoriske felter', () => {
    const wrapper = shallow(<ProsessStegSubmitButton
      behandlingId={1}
      behandlingVersjon={2}
      formName="test"
      isBehandlingFormSubmitting={() => undefined}
      isBehandlingFormDirty={() => undefined}
      hasBehandlingFormErrorsOfType={() => undefined}
      isReadOnly={false}
      isSubmittable
      isSubmitting={false}
      isDirty={false}
      hasEmptyRequiredFields
    />);

    const button = wrapper.find(Hovedknapp);
    expect(button).to.have.length(1);
    expect(button.prop('disabled')).to.true;
  });
});
