import React from 'react';
import sinon from 'sinon';
import { Undertittel } from 'nav-frontend-typografi';

import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  Aksjonspunkt, FamilieHendelse, Personoversikt, Soknad,
} from '@fpsak-frontend/types';

import { TilkjentYtelsePanelImpl } from './TilkjentYtelsePanel';
import Tilbaketrekkpanel from './tilbaketrekk/Tilbaketrekkpanel';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-prosess-tilkjent-ytelse';

const tilbaketrekkAP = {
  definisjon: {
    kode: aksjonspunktCodes.VURDER_TILBAKETREKK,
  },
  status: {
    kode: 'OPPR',
  },
  begrunnelse: undefined,
} as Aksjonspunkt;

const arbeidsgiverOpplysningerPerId = {
  1: {
    erPrivatPerson: false,
    identifikator: '973861778',
    navn: 'EQUINOR ASA AVD STATOIL SOKKELVIRKSOMHET',
  },
};

describe('<TilkjentYtelsePanelImpl>', () => {
  it('skall innehålla rätt undertekst', () => {
    const familieDate = new Date('2018-04-04');
    const wrapper = shallowWithIntl(<TilkjentYtelsePanelImpl
      readOnly
      beregningresultat={null}
      hovedsokerKjonn="K"
      soknadDato="2018-04-04"
      familiehendelseDato={familieDate}
      submitCallback={sinon.spy()}
      readOnlySubmitButton
      isSoknadSvangerskapspenger={false}
      alleKodeverk={{}}
      behandlingId={1}
      behandlingVersjon={1}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      personoversikt={{} as Personoversikt}
      soknad={{} as Soknad}
      fagsakYtelseTypeKode={fagsakYtelseType.FORELDREPENGER}
      aksjonspunkter={[]}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);
    expect(wrapper.find(Undertittel)).toHaveLength(1);
    // @ts-ignore
    expect(wrapper.find(Undertittel).props().children.props.id).toBe('TilkjentYtelse.Title');
    expect(wrapper.find(Tilbaketrekkpanel)).toHaveLength(0);
  });

  it('Skal vise tilbaketrekkpanel gitt tilbaketrekkaksjonspunkt', () => {
    const familieDate = new Date('2018-04-04');
    const wrapper = shallowWithIntl(<TilkjentYtelsePanelImpl
      readOnly
      beregningresultat={null}
      hovedsokerKjonn="K"
      soknadDato="2018-04-04"
      familiehendelseDato={familieDate}
      submitCallback={sinon.spy()}
      readOnlySubmitButton
      vurderTilbaketrekkAP={tilbaketrekkAP}
      isSoknadSvangerskapspenger={false}
      alleKodeverk={{}}
      behandlingId={1}
      behandlingVersjon={1}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      personoversikt={{} as Personoversikt}
      soknad={{} as Soknad}
      fagsakYtelseTypeKode={fagsakYtelseType.FORELDREPENGER}
      aksjonspunkter={[]}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);
    expect(wrapper.find(Tilbaketrekkpanel)).toHaveLength(1);
  });
});
