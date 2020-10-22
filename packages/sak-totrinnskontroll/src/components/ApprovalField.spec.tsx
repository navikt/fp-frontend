import React from 'react';
import { expect } from 'chai';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import ApprovalField from './ApprovalField';
import getAksjonspunktText from './ApprovalTextUtils';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-sak-totrinnskontroll';

describe('<ApprovalField>', () => {
  it('skal kunne vise fleire oppjeningstekster for fleire aktiviteter', () => {
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.VURDER_PERIODER_MED_OPPTJENING,
      opptjeningAktiviteter: [
        {
          erEndring: true, aktivitetType: 'Arbeid', arbeidsgiverNavn: 'Andersen Transport AS', orgnr: '1234567890',
        },
        {
          erEndring: false, aktivitetType: 'Arbeid', arbeidsgiverNavn: 'Bislett Kebab', orgnr: '1234567800',
        },
        {
          erEndring: true, aktivitetType: 'Arbeid', arbeidsgiverNavn: null, orgnr: '1234567789',
        },
        {
          erEndring: false, aktivitetType: 'Militærtjeneste',
        },
      ],
    };

    const readOnly = false;
    const isForeldrepenger = false;
    const currentValue = { totrinnskontrollGodkjent: true };
    const approvalIndex = 1;
    const wrapper = shallowWithIntl(<ApprovalField.WrappedComponent
      // @ts-expect-error ts-migrate(2740) FIXME: Type '(aksjonspunkt: any) => any' is missing the f... Remove this comment to see the full error message
      getAksjonspunktText={getAksjonspunktText.resultFunc(isForeldrepenger, null, null, null, null)}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'IntlShap... Remove this comment to see the full error message
      readOnly={readOnly}
      // @ts-expect-error ts-migrate(2740) FIXME: Type '{ aksjonspunktKode: any; opptjeningAktivitet... Remove this comment to see the full error message
      aksjonspunkt={aksjonspunkt}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'IntlShape... Remove this comment to see the full error message
      approvalIndex={approvalIndex}
      // @ts-expect-error ts-migrate(2740) FIXME: Type '{ totrinnskontrollGodkjent: boolean; }' is m... Remove this comment to see the full error message
      currentValue={currentValue}
    />);

    const normaltekstFields = wrapper.find('Normaltekst');
    expect(normaltekstFields).to.have.length(4);
  });

  it('skal vise korrekt antall element', () => {
    const readOnly = false;
    const isForeldrepenger = false;
    const currentValue = { totrinnskontrollGodkjent: true };
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.AUTO_VENT_PÅ_FODSELREGISTRERING,
    };
    const approvalIndex = 1;
    const wrapper = shallowWithIntl(<ApprovalField.WrappedComponent
      // @ts-expect-error ts-migrate(2322) FIXME: Type '(aksjonspunkt: any) => any' is not assignabl... Remove this comment to see the full error message
      getAksjonspunktText={getAksjonspunktText.resultFunc(isForeldrepenger, null, null, null, null)}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'IntlShap... Remove this comment to see the full error message
      readOnly={readOnly}
      // @ts-expect-error ts-migrate(2740) FIXME: Type '{ aksjonspunktKode: any; }' is missing the f... Remove this comment to see the full error message
      aksjonspunkt={aksjonspunkt}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'IntlShape... Remove this comment to see the full error message
      approvalIndex={approvalIndex}
      // @ts-expect-error ts-migrate(2740) FIXME: Type '{ totrinnskontrollGodkjent: boolean; }' is m... Remove this comment to see the full error message
      currentValue={currentValue}
    />);

    const navFieldGroup = wrapper.find('NavFieldGroup');
    expect(navFieldGroup).to.have.length(1);

    const radioGroup = wrapper.find('RadioGroupField');
    expect(radioGroup).to.have.length(1);

    const reasonsField = wrapper.find('ReasonsField');
    expect(reasonsField).to.have.length(0);
  });

  it('skal vise begrunnelsefelt om godkjent er false', () => {
    const isForeldrepenger = false;
    const readOnly = false;
    const aksjonspunkt = {
      aksjonspunktKode: aksjonspunktCodes.AUTO_VENT_PÅ_FODSELREGISTRERING,
    };

    const approvalIndex = 1;
    const currentValue = { totrinnskontrollGodkjent: false };
    const wrapper = shallowWithIntl(<ApprovalField.WrappedComponent
      // @ts-expect-error ts-migrate(2322) FIXME: Type '(aksjonspunkt: any) => any' is not assignabl... Remove this comment to see the full error message
      getAksjonspunktText={getAksjonspunktText.resultFunc(isForeldrepenger, null, null, null, null)}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'IntlShap... Remove this comment to see the full error message
      readOnly={readOnly}
      // @ts-expect-error ts-migrate(2740) FIXME: Type '{ aksjonspunktKode: any; }' is missing the f... Remove this comment to see the full error message
      aksjonspunkt={aksjonspunkt}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'IntlShape... Remove this comment to see the full error message
      approvalIndex={approvalIndex}
      // @ts-expect-error ts-migrate(2740) FIXME: Type '{ totrinnskontrollGodkjent: boolean; }' is m... Remove this comment to see the full error message
      currentValue={currentValue}
    />);
    const reasonsField = wrapper.find('injectIntl(ReasonsField)');
    expect(reasonsField).to.have.length(1);
  });
});
