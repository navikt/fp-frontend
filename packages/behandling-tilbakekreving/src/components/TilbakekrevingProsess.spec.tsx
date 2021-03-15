import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { ProsessStegContainer } from '@fpsak-frontend/behandling-felles';
import {
  Behandling, Fagsak, FeilutbetalingPerioderWrapper, KjønnkodeEnum,
} from '@fpsak-frontend/types';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import foreldelseVurderingType from '@fpsak-frontend/kodeverk/src/foreldelseVurderingType';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import aksjonspunktCodesTilbakekreving from '@fpsak-frontend/kodeverk/src/aksjonspunktCodesTilbakekreving';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';

import TilbakekrevingProsess from './TilbakekrevingProsess';
import vedtakResultatType from '../kodeverk/vedtakResultatType';

describe('<TilbakekrevingProsess>', () => {
  const fagsak = {
    saksnummer: '123456',
    fagsakYtelseType: { kode: fagsakYtelseType.FORELDREPENGER, kodeverk: 'test' },
    status: { kode: fagsakStatus.UNDER_BEHANDLING, kodeverk: 'test' },
  } as Fagsak;

  const behandling: Partial<Behandling> = {
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
    definisjon: { kode: aksjonspunktCodesTilbakekreving.VURDER_TILBAKEKREVING, kodeverk: 'test' },
    status: { kode: aksjonspunktStatus.OPPRETTET, kodeverk: 'test' },
    kanLoses: true,
    erAktivt: true,
  }];
  const perioderForeldelse = {
    perioder: [{
      fom: '2019-01-01',
      tom: '2019-04-01',
      belop: 1212,
      foreldelseVurderingType: {
        kode: foreldelseVurderingType.FORELDET,
        kodeverk: 'FORELDRE_VURDERING_TYPE',
      },
    }],
  } as FeilutbetalingPerioderWrapper;
  const beregningsresultat = {
    beregningResultatPerioder: [],
    vedtakResultatType: {
      kode: vedtakResultatType.INGEN_TILBAKEBETALING,
      kodeverk: 'VEDTAK_RESULTAT_TYPE',
    },
  };
  const feilutbetalingFakta = {
    behandlingFakta: {
      aktuellFeilUtbetaltBeløp: 122,
      datoForRevurderingsvedtak: '2020-01-01',
      totalPeriodeFom: '2020-01-01',
      totalPeriodeTom: '2020-02-01',
      perioder: [{
        fom: '2020-01-01',
        tom: '2020-02-01',
        belop: 1212,
      }],
      behandlingsresultat: {
        type: {
          kode: 'TEST',
          kodeverk: 'BEHANDLINGSRESULTAT',
        },
        konsekvenserForYtelsen: [],
      },
      behandlingÅrsaker: [{
        behandlingArsakType: {
          kode: '',
          kodeverk: '',
        },
      }],
    },
  };

  it('skal vise alle aktuelle prosessSteg i meny', () => {
    const wrapper = shallow(
      <TilbakekrevingProsess.WrappedComponent
        intl={intlMock}
        data={{
          aksjonspunkter, perioderForeldelse, beregningsresultat, feilutbetalingFakta,
        }}
        fagsak={fagsak}
        fagsakKjønn={{
          kode: KjønnkodeEnum.KVINNE,
          kodeverk: '',
        }}
        behandling={behandling as Behandling}
        alleKodeverk={{}}
        rettigheter={rettigheter}
        valgtProsessSteg="default"
        hasFetchError={false}
        oppdaterBehandlingVersjon={sinon.spy()}
        oppdaterProsessStegOgFaktaPanelIUrl={sinon.spy()}
        opneSokeside={sinon.spy()}
        harApenRevurdering={false}
        setBehandling={sinon.spy()}
      />,
    );

    const meny = wrapper.find(ProsessStegContainer);
    expect(meny.prop('formaterteProsessStegPaneler')).toEqual([{
      isActive: false,
      isDisabled: false,
      isFinished: true,
      labelId: 'Behandlingspunkt.Foreldelse',
      type: 'success',
    }, {
      isActive: true,
      isDisabled: false,
      isFinished: false,
      labelId: 'Behandlingspunkt.Tilbakekreving',
      type: 'warning',
    }, {
      isActive: false,
      isDisabled: false,
      isFinished: false,
      labelId: 'Behandlingspunkt.Vedtak',
      type: 'danger',
    }]);
  });

  it('skal sette nytt valgt prosessSteg ved trykk i meny', () => {
    const oppdaterProsessStegOgFaktaPanelIUrl = sinon.spy();
    const wrapper = shallow(
      <TilbakekrevingProsess.WrappedComponent
        intl={intlMock}
        data={{
          aksjonspunkter, perioderForeldelse, beregningsresultat, feilutbetalingFakta,
        }}
        fagsak={fagsak}
        fagsakKjønn={{
          kode: KjønnkodeEnum.KVINNE,
          kodeverk: '',
        }}
        behandling={behandling as Behandling}
        alleKodeverk={{}}
        rettigheter={rettigheter}
        valgtProsessSteg="default"
        hasFetchError={false}
        oppdaterBehandlingVersjon={sinon.spy()}
        oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
        opneSokeside={sinon.spy()}
        harApenRevurdering={false}
        setBehandling={sinon.spy()}
      />,
    );

    const meny = wrapper.find(ProsessStegContainer);

    meny.prop('velgProsessStegPanelCallback')(0);

    const opppdaterKall = oppdaterProsessStegOgFaktaPanelIUrl.getCalls();
    expect(opppdaterKall).toHaveLength(1);
    expect(opppdaterKall[0].args).toHaveLength(2);
    expect(opppdaterKall[0].args[0]).toEqual('foreldelse');
    expect(opppdaterKall[0].args[1]).toEqual('default');
  });
});
