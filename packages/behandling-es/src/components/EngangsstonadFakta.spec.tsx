import React from 'react';
import sinon from 'sinon';

import ArbeidsforholdFaktaIndex from '@fpsak-frontend/fakta-arbeidsforhold';
import { shallowWithIntl, intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { SideMenuWrapper } from '@fpsak-frontend/behandling-felles';
import { Behandling, Fagsak, KjønnkodeEnum } from '@fpsak-frontend/types';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import personstatusType from '@fpsak-frontend/kodeverk/src/personstatusType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';

import FetchedData from '../types/fetchedDataTsType';
import EngangsstonadFakta from './EngangsstonadFakta';

describe('<EngangsstonadFakta>', () => {
  const fagsak = {
    saksnummer: 123456,
    sakstype: { kode: fagsakYtelseType.FORELDREPENGER, kodeverk: 'test' },
    status: { kode: fagsakStatus.UNDER_BEHANDLING, kodeverk: 'test' },
  } as Fagsak;
  const fagsakPerson = {
    fodselsdato: '1990-01-01',
    personstatusType: { kode: personstatusType.BOSATT, kodeverk: 'test' },
    kjønn: { kode: KjønnkodeEnum.KVINNE, kodeverk: '' },
    navn: 'Espen Utvikler',
    personnummer: '12345',
  };

  const behandling = {
    id: 1,
    versjon: 2,
    status: { kode: behandlingStatus.BEHANDLING_UTREDES, kodeverk: 'test' },
    type: { kode: behandlingType.FORSTEGANGSSOKNAD, kodeverk: 'test' },
    behandlingPaaVent: false,
    taskStatus: {
      readOnly: false,
    },
    behandlingHenlagt: false,
    links: [],
  };
  const rettigheter = {
    writeAccess: {
      isEnabled: true,
      employeeHasAccess: true,
    },
    kanOverstyreAccess: {
      isEnabled: true,
      employeeHasAccess: true,
    },
  };
  const aksjonspunkter = [{
    definisjon: { kode: aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD, kodeverk: 'test' },
    status: { kode: aksjonspunktStatus.OPPRETTET, kodeverk: 'test' },
    kanLoses: true,
    erAktivt: true,
  }];
  const vilkar = [];
  const inntektArbeidYtelse = {
    skalKunneLeggeTilNyeArbeidsforhold: true,
    relatertTilgrensendeYtelserForAnnenForelder: [],
  };

  const arbeidsgiverOpplysningerPerId = {
    123: {
      erPrivatPerson: false,
      identifikator: 'testId',
      navn: 'testNavn',
    },
  };

  const fetchedData: Partial<FetchedData> = {
    aksjonspunkter,
    vilkar,
    inntektArbeidYtelse,
  };

  it('skal rendre faktapaneler og sidemeny korrekt', () => {
    const wrapper = shallowWithIntl(
      <EngangsstonadFakta.WrappedComponent
        intl={intlMock}
        data={fetchedData as FetchedData}
        behandling={behandling as Behandling}
        fagsak={fagsak}
        fagsakPerson={fagsakPerson}
        rettigheter={rettigheter}
        alleKodeverk={{}}
        oppdaterProsessStegOgFaktaPanelIUrl={sinon.spy()}
        valgtFaktaSteg="default"
        valgtProsessSteg="default"
        hasFetchError={false}
        setApentFaktaPanel={sinon.spy()}
        setBehandling={sinon.spy()}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />,
    );

    const panel = wrapper.find(SideMenuWrapper);
    expect(panel.prop('paneler')).toEqual([{
      erAktiv: false,
      harAksjonspunkt: false,
      tekst: 'Saken',
    }, {
      erAktiv: true,
      harAksjonspunkt: true,
      tekst: 'Arbeidsforhold',
    }]);
  });

  it('skal oppdatere url ved valg av faktapanel', () => {
    const oppdaterProsessStegOgFaktaPanelIUrl = sinon.spy();
    const wrapper = shallowWithIntl(
      <EngangsstonadFakta.WrappedComponent
        intl={intlMock}
        data={fetchedData as FetchedData}
        behandling={behandling as Behandling}
        fagsak={fagsak}
        fagsakPerson={fagsakPerson}
        rettigheter={rettigheter}
        alleKodeverk={{}}
        oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
        valgtFaktaSteg="default"
        valgtProsessSteg="default"
        hasFetchError={false}
        setApentFaktaPanel={sinon.spy()}
        setBehandling={sinon.spy()}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />,
    );

    const panel = wrapper.find(SideMenuWrapper);

    panel.prop('onClick')(0);

    const calls = oppdaterProsessStegOgFaktaPanelIUrl.getCalls();
    expect(calls).toHaveLength(1);
    const { args } = calls[0];
    expect(args).toHaveLength(2);
    expect(args[0]).toEqual('default');
    expect(args[1]).toEqual('saken');
  });

  it('skal rendre faktapanel korrekt', () => {
    const wrapper = shallowWithIntl(
      <EngangsstonadFakta.WrappedComponent
        intl={intlMock}
        data={fetchedData as FetchedData}
        behandling={behandling as Behandling}
        fagsak={fagsak}
        fagsakPerson={fagsakPerson}
        rettigheter={rettigheter}
        alleKodeverk={{}}
        oppdaterProsessStegOgFaktaPanelIUrl={sinon.spy()}
        valgtFaktaSteg="default"
        valgtProsessSteg="default"
        hasFetchError={false}
        setApentFaktaPanel={sinon.spy()}
        setBehandling={sinon.spy()}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />,
    );

    const arbeidsforholdPanel = wrapper.find(ArbeidsforholdFaktaIndex);
    expect(arbeidsforholdPanel.prop('readOnly')).toBe(false);
    expect(arbeidsforholdPanel.prop('submittable')).toBe(true);
    expect(arbeidsforholdPanel.prop('harApneAksjonspunkter')).toBe(true);
  });
});
