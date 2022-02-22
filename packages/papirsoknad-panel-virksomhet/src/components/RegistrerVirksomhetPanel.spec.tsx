import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { FieldArrayMetaProps } from 'redux-form';
import { Undertekst } from 'nav-frontend-typografi';
import { Image } from '@navikt/fp-react-components';

import { MockFields } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { AlleKodeverk } from '@fpsak-frontend/types';

import { RegistrerVirksomhetPanel } from './RegistrerVirksomhetPanel';

describe('<RegistrerVirksomhetPanel>', () => {
  it('skal rendre korrekt når antall virksomheter er 0', () => {
    const wrapper = shallow(<RegistrerVirksomhetPanel
      fields={new MockFields('virksomhet', 0)}
      dispatchArrayPush={sinon.spy()}
      dispatchArraySplice={sinon.spy()}
      meta={{} as FieldArrayMetaProps}
      namePrefix="regvirk"
      form="form"
      alleKodeverk={{} as AlleKodeverk}
    />);

    const image = wrapper.find(Image);
    expect(image).toHaveLength(1);

    const undertekst = wrapper.find(Undertekst);
    expect(undertekst).toHaveLength(1);
  });

  it('skal rendre korrekt når antall virksomheter er større enn 0', () => {
    const wrapper = shallow(<RegistrerVirksomhetPanel
      fields={new MockFields('virksomhet', 2)}
      dispatchArrayPush={sinon.spy()}
      dispatchArraySplice={sinon.spy()}
      meta={{} as FieldArrayMetaProps}
      namePrefix="regvirk"
      form="form"
      alleKodeverk={{} as AlleKodeverk}
    />);

    const fields = wrapper.find('Field');
    expect(fields).toHaveLength(2);
  });

  it('skal vise korrekt virksomhet når virksomhet blir valgt', () => {
    const virksomheter = [{ familieEllerVennerTilknyttetNaringen: false }, { familieEllerVennerTilknyttetNaringen: false }];
    const wrapper = shallow(<RegistrerVirksomhetPanel
      fields={new MockFields('virksomhet', 2)}
      dispatchArrayPush={sinon.spy()}
      dispatchArraySplice={sinon.spy()}
      meta={{} as FieldArrayMetaProps}
      namePrefix="regvirk"
      virksomheter={virksomheter}
      form="form"
      alleKodeverk={{} as AlleKodeverk}
    />);

    // @ts-ignore
    wrapper.instance().showRegistrerVirksomhetModal(0);
    // @ts-ignore
    expect(wrapper.state().editVirksomhet).toBe(virksomheter[0]);
  });

  it('skal sette valgt virksomhet til null når modal skjules', () => {
    const virksomheter = [{ familieEllerVennerTilknyttetNaringen: false }, { familieEllerVennerTilknyttetNaringen: false }];
    const wrapper = shallow(<RegistrerVirksomhetPanel
      fields={new MockFields('virksomhet', 2)}
      dispatchArrayPush={sinon.spy()}
      dispatchArraySplice={sinon.spy()}
      meta={{} as FieldArrayMetaProps}
      namePrefix="regvirk"
      virksomheter={virksomheter}
      form="form"
      alleKodeverk={{} as AlleKodeverk}
    />);

    // @ts-ignore
    wrapper.instance().showRegistrerVirksomhetModal(0);
    // @ts-ignore
    expect(wrapper.state().editVirksomhet).toBe(virksomheter[0]);

    // @ts-ignore
    wrapper.instance().hideRegistrerVirksomhetModal(0);
    // @ts-ignore
    expect(wrapper.state().editVirksomhet).toBe(undefined);
    // @ts-ignore
    expect(wrapper.state().editIndex).toBe(-1);
  });

  it('skal legge til ny virksomhet dersom editIndex ikke er satt', () => {
    const virksomheter = [{ familieEllerVennerTilknyttetNaringen: false }, { familieEllerVennerTilknyttetNaringen: false }];
    const dispatchPush = sinon.spy();
    const wrapper = shallow(<RegistrerVirksomhetPanel
      fields={new MockFields('virksomhet', 2)}
      dispatchArrayPush={dispatchPush}
      dispatchArraySplice={sinon.spy()}
      meta={{} as FieldArrayMetaProps}
      namePrefix="regvirk"
      virksomheter={virksomheter}
      form="form"
      alleKodeverk={{} as AlleKodeverk}
    />);

    // @ts-ignore
    wrapper.instance().addVirksomhet({}, sinon.spy(), {
      valuesForRegisteredFieldsOnly: {
        stillingsprosent: 50,
      },
    });
    expect(dispatchPush.called).toBe(true);
  });

  it('skal endre eksisterende virksomhet dersom editIndex er satt', () => {
    const virksomheter = [{ familieEllerVennerTilknyttetNaringen: false }, { familieEllerVennerTilknyttetNaringen: false }];
    const dispatchPush = sinon.spy();
    const dispatchSplice = sinon.spy();
    const wrapper = shallow(<RegistrerVirksomhetPanel
      fields={new MockFields('virksomhet', 2)}
      dispatchArrayPush={dispatchPush}
      dispatchArraySplice={dispatchSplice}
      meta={{} as FieldArrayMetaProps}
      namePrefix="regvirk"
      virksomheter={virksomheter}
      form="form"
      alleKodeverk={{} as AlleKodeverk}
    />);

    // @ts-ignore
    wrapper.instance().showRegistrerVirksomhetModal(1);
    // @ts-ignore
    wrapper.instance().addVirksomhet({}, sinon.spy(), {
      valuesForRegisteredFieldsOnly: {
        stillingsprosent: 50,
      },
    });
    expect(dispatchSplice.called).toBe(true);
  });
});
