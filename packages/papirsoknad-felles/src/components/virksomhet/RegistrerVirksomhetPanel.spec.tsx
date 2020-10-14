import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Undertekst } from 'nav-frontend-typografi';

// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__utils-test... Remove this comment to see the full error message
import { MockFields } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import Image from '@fpsak-frontend/shared-components/src/Image';

import { RegistrerVirksomhetPanel } from './RegistrerVirksomhetPanel';

describe('<RegistrerVirksomhetPanel>', () => {
  it('skal rendre korrekt når antall virksomheter er 0', () => {
    const wrapper = shallow(<RegistrerVirksomhetPanel
      fields={new MockFields('virksomhet', 0)}
      dispatchArrayPush={sinon.spy}
      dispatchArraySplice={sinon.spy}
      meta={{}}
      namePrefix="regvirk"
      formatMessage={sinon.spy()}
      form="form"
      alleKodeverk={{}}
    />);

    const image = wrapper.find(Image);
    expect(image).to.have.length(1);

    const undertekst = wrapper.find(Undertekst);
    expect(undertekst).to.have.length(1);
  });

  it('skal rendre korrekt når antall virksomheter er større enn 0', () => {
    const wrapper = shallow(<RegistrerVirksomhetPanel
      fields={new MockFields('virksomhet', 2)}
      dispatchArrayPush={sinon.spy}
      dispatchArraySplice={sinon.spy}
      meta={{}}
      namePrefix="regvirk"
      formatMessage={sinon.spy()}
      form="form"
      alleKodeverk={{}}
    />);

    const fields = wrapper.find('Field');
    expect(fields).to.have.length(2);
  });

  it('skal vise korrekt virksomhet når virksomhet blir valgt', () => {
    const virksomheter = [{ virksomhet: 'virksomhet1' }, { virksomhet: 'virksomhet2' }];
    const wrapper = shallow(<RegistrerVirksomhetPanel
      fields={new MockFields('virksomhet', 2)}
      dispatchArrayPush={sinon.spy}
      dispatchArraySplice={sinon.spy}
      meta={{}}
      namePrefix="regvirk"
      formatMessage={sinon.spy()}
      // @ts-expect-error ts-migrate(2322) FIXME: Type '{ virksomhet: string; }' is not assignable t... Remove this comment to see the full error message
      virksomheter={virksomheter}
      form="form"
      alleKodeverk={{}}
    />);

    // @ts-expect-error ts-migrate(2339) FIXME: Property 'showRegistrerVirksomhetModal' does not e... Remove this comment to see the full error message
    wrapper.instance().showRegistrerVirksomhetModal(0);
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'editVirksomhet' does not exist on type '... Remove this comment to see the full error message
    expect(wrapper.state().editVirksomhet).to.equal(virksomheter[0]);
  });

  it('skal sette valgt virksomhet til null når modal skjules', () => {
    const virksomheter = [{ virksomhet: 'virksomhet1' }, { virksomhet: 'virksomhet2' }];
    const wrapper = shallow(<RegistrerVirksomhetPanel
      fields={new MockFields('virksomhet', 2)}
      dispatchArrayPush={sinon.spy}
      dispatchArraySplice={sinon.spy}
      meta={{}}
      namePrefix="regvirk"
      formatMessage={sinon.spy()}
      // @ts-expect-error ts-migrate(2322) FIXME: Type '{ virksomhet: string; }' is not assignable t... Remove this comment to see the full error message
      virksomheter={virksomheter}
      form="form"
      alleKodeverk={{}}
    />);

    // @ts-expect-error ts-migrate(2339) FIXME: Property 'showRegistrerVirksomhetModal' does not e... Remove this comment to see the full error message
    wrapper.instance().showRegistrerVirksomhetModal(0);
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'editVirksomhet' does not exist on type '... Remove this comment to see the full error message
    expect(wrapper.state().editVirksomhet).to.equal(virksomheter[0]);

    // @ts-expect-error ts-migrate(2339) FIXME: Property 'hideRegistrerVirksomhetModal' does not e... Remove this comment to see the full error message
    wrapper.instance().hideRegistrerVirksomhetModal(0);
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'editVirksomhet' does not exist on type '... Remove this comment to see the full error message
    expect(wrapper.state().editVirksomhet).to.equal(null);
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'editIndex' does not exist on type 'Reado... Remove this comment to see the full error message
    expect(wrapper.state().editIndex).to.equal(-1);
  });

  it('skal sette valgt virksomhet til null når modal skjules', () => {
    const virksomheter = [{ virksomhet: 'virksomhet1' }, { virksomhet: 'virksomhet2' }];
    const wrapper = shallow(<RegistrerVirksomhetPanel
      fields={new MockFields('virksomhet', 2)}
      dispatchArrayPush={sinon.spy}
      dispatchArraySplice={sinon.spy}
      meta={{}}
      namePrefix="regvirk"
      formatMessage={sinon.spy()}
      // @ts-expect-error ts-migrate(2322) FIXME: Type '{ virksomhet: string; }' is not assignable t... Remove this comment to see the full error message
      virksomheter={virksomheter}
      form="form"
      alleKodeverk={{}}
    />);

    // @ts-expect-error ts-migrate(2339) FIXME: Property 'showRegistrerVirksomhetModal' does not e... Remove this comment to see the full error message
    wrapper.instance().showRegistrerVirksomhetModal(0);
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'editVirksomhet' does not exist on type '... Remove this comment to see the full error message
    expect(wrapper.state().editVirksomhet).to.equal(virksomheter[0]);

    // @ts-expect-error ts-migrate(2339) FIXME: Property 'hideRegistrerVirksomhetModal' does not e... Remove this comment to see the full error message
    wrapper.instance().hideRegistrerVirksomhetModal(0);
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'editVirksomhet' does not exist on type '... Remove this comment to see the full error message
    expect(wrapper.state().editVirksomhet).to.equal(null);
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'editIndex' does not exist on type 'Reado... Remove this comment to see the full error message
    expect(wrapper.state().editIndex).to.equal(-1);
  });

  it('skal legge til ny virksomhet dersom editIndex ikke er satt', () => {
    const virksomheter = [{ virksomhet: 'virksomhet1' }, { virksomhet: 'virksomhet2' }];
    const dispatchPush = sinon.spy();
    const wrapper = shallow(<RegistrerVirksomhetPanel
      fields={new MockFields('virksomhet', 2)}
      dispatchArrayPush={dispatchPush}
      dispatchArraySplice={sinon.spy}
      meta={{}}
      namePrefix="regvirk"
      formatMessage={sinon.spy()}
      // @ts-expect-error ts-migrate(2322) FIXME: Type '{ virksomhet: string; }' is not assignable t... Remove this comment to see the full error message
      virksomheter={virksomheter}
      form="form"
      alleKodeverk={{}}
    />);

    // @ts-expect-error ts-migrate(2339) FIXME: Property 'addVirksomhet' does not exist on type 'C... Remove this comment to see the full error message
    wrapper.instance().addVirksomhet({}, sinon.spy(), {
      valuesForRegisteredFieldsOnly: {
        stillingsprosent: 50,
      },
    });
    expect(dispatchPush.called).is.true;
  });

  it('skal endre eksisterende virksomhet dersom editIndex er satt', () => {
    const virksomheter = [{ virksomhet: 'virksomhet1' }, { virksomhet: 'virksomhet2' }];
    const dispatchPush = sinon.spy();
    const dispatchSplice = sinon.spy();
    const wrapper = shallow(<RegistrerVirksomhetPanel
      fields={new MockFields('virksomhet', 2)}
      dispatchArrayPush={dispatchPush}
      dispatchArraySplice={dispatchSplice}
      meta={{}}
      namePrefix="regvirk"
      formatMessage={sinon.spy()}
      // @ts-expect-error ts-migrate(2322) FIXME: Type '{ virksomhet: string; }' is not assignable t... Remove this comment to see the full error message
      virksomheter={virksomheter}
      form="form"
      alleKodeverk={{}}
    />);

    // @ts-expect-error ts-migrate(2339) FIXME: Property 'showRegistrerVirksomhetModal' does not e... Remove this comment to see the full error message
    wrapper.instance().showRegistrerVirksomhetModal(1);
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'addVirksomhet' does not exist on type 'C... Remove this comment to see the full error message
    wrapper.instance().addVirksomhet({}, sinon.spy(), {
      valuesForRegisteredFieldsOnly: {
        stillingsprosent: 50,
      },
    });
    expect(dispatchSplice.called).is.true;
  });
});
