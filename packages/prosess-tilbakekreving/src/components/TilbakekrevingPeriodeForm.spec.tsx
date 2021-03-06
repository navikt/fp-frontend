import React from 'react';
import sinon from 'sinon';

import { getIntlMock, shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';

import sarligGrunn from '../kodeverk/sarligGrunn';
import Aktsomhet from '../kodeverk/aktsomhet';
import ForeldetFormPanel from './tilbakekrevingPeriodePaneler/ForeldetFormPanel';
import { TilbakekrevingPeriodeFormImpl, CustomVilkarsVurdertePeriode } from './TilbakekrevingPeriodeForm';
import vilkarResultat from '../kodeverk/vilkarResultat';
import DataForPeriode from '../types/dataForPeriodeTsType';

import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<TilbakekrevingPeriodeForm>', () => {
  const sarligGrunnTyper = [{
    kode: sarligGrunn.GRAD_AV_UAKTSOMHET,
    navn: 'grad av uaktsomhet',
    kodeverk: '',
  }, {
    kode: sarligGrunn.HELT_ELLER_DELVIS_NAVS_FEIL,
    navn: 'navs feil',
    kodeverk: '',
  }];
  const aktsomhetTyper = [{
    kode: Aktsomhet.GROVT_UAKTSOM,
    navn: 'grovt',
    kodeverk: '',
  }, {
    kode: Aktsomhet.SIMPEL_UAKTSOM,
    navn: 'simpel',
    kodeverk: '',
  }, {
    kode: Aktsomhet.FORSETT,
    navn: 'forsett',
    kodeverk: '',
  }];

  it('skal vise panel for foreldet periode', () => {
    const periode = {
      erForeldet: true,
      ytelser: [],
    } as DataForPeriode;
    const wrapper = shallowWithIntl(<TilbakekrevingPeriodeFormImpl
      data={periode}
      skjulPeriode={() => undefined}
      readOnly={false}
      erBelopetIBehold
      tilbakekrevSelvOmBeloepErUnder4Rettsgebyr
      oppdaterPeriode={() => undefined}
      oppdaterSplittedePerioder={() => undefined}
      setNestePeriode={() => undefined}
      setForrigePeriode={() => undefined}
      behandlingUuid="1"
      antallPerioderMedAksjonspunkt={2}
      vilkarResultatTyper={[]}
      aktsomhetTyper={aktsomhetTyper}
      sarligGrunnTyper={sarligGrunnTyper}
      reduserteBelop={[]}
      beregnBelop={() => undefined}
      vilkarsVurdertePerioder={[]}
      handletUaktsomhetGrad={Aktsomhet.FORSETT}
      intl={intlMock}
      {...reduxFormPropsMock}
    />, messages);

    expect(wrapper.find(ForeldetFormPanel)).toHaveLength(1);
  });

  it('skal teste kopiering av vilkårsvudering for periode', () => {
    const periode = {
      begrunnelse: null,
      erForeldet: false,
      fom: '2020-04-01',
      tom: '2020-04-15',
      ytelser: [],
    } as DataForPeriode;

    const vilkårsPerioder = [{
      erForeldet: false,
      begrunnelse: 'Begrunnelse periode 1',
      valgtVilkarResultatType: vilkarResultat.GOD_TRO,
      vurderingBegrunnelse: 'Vurdering periode 1',
      harMerEnnEnYtelse: false,
      fom: '2020-03-01',
      tom: '2020-03-15',
      GOD_TRO: {
        erBelopetIBehold: false,
      },
    }, {
      erForeldet: false,
      begrunnelse: 'Begrunnelse periode 2',
      valgtVilkarResultatType: vilkarResultat.FORSTO_BURDE_FORSTAATT,
      vurderingBegrunnelse: 'Vurdering periode 2',
      fom: '2020-03-15',
      tom: '2020-03-31',
      FORSTO_BURDE_FORSTAATT: {
        handletUaktsomhetGrad: Aktsomhet.FORSETT,
        FORSETT: {
          skalDetTilleggesRenter: false,
        },
      },
    }, {
      erForeldet: false,
      valgtVilkarResultatType: null,
      fom: '2020-04-01',
      tom: '2020-04-15',
    }, {
      erForeldet: false,
      fom: '2020-04-15',
      tom: '2020-04-30',
    }] as CustomVilkarsVurdertePeriode[];

    const changeValue = sinon.spy();
    const wrapper = shallowWithIntl(<TilbakekrevingPeriodeFormImpl
      data={periode}
      skjulPeriode={() => undefined}
      readOnly={false}
      erBelopetIBehold
      tilbakekrevSelvOmBeloepErUnder4Rettsgebyr
      oppdaterPeriode={() => undefined}
      oppdaterSplittedePerioder={() => undefined}
      setNestePeriode={() => undefined}
      setForrigePeriode={() => undefined}
      antallPerioderMedAksjonspunkt={2}
      vilkarResultatTyper={[]}
      aktsomhetTyper={aktsomhetTyper}
      sarligGrunnTyper={sarligGrunnTyper}
      reduserteBelop={[]}
      behandlingUuid="1"
      beregnBelop={() => undefined}
      vilkarsVurdertePerioder={vilkårsPerioder}
      handletUaktsomhetGrad={Aktsomhet.FORSETT}
      intl={intlMock}
      {...reduxFormPropsMock}
      change={changeValue}
    />, messages);

    // Tester om nedtrekksmenyen for perioder som kan kopieres vises
    const selectField = wrapper.find('[name="perioderForKopi"]');
    expect(selectField).toHaveLength(1);
    // @ts-ignore
    const values = selectField.props().selectValues;
    expect(values).toHaveLength(2);

    selectField.props().onChange({
      preventDefault: () => {},
      target: {
        value: '2020-03-15_2020-03-31',
      },
    // @ts-ignore Fiks
    }, vilkårsPerioder);

    const changeValueCalls = changeValue.getCalls();
    expect(changeValueCalls).toHaveLength(4);
    expect(changeValueCalls[0].args[1]).toEqual(vilkårsPerioder[1].valgtVilkarResultatType);
    expect(changeValueCalls[1].args[1]).toEqual(vilkårsPerioder[1].begrunnelse);
    expect(changeValueCalls[2].args[1]).toEqual(vilkårsPerioder[1].vurderingBegrunnelse);
    expect(changeValueCalls[3].args[1]).toEqual(vilkårsPerioder[1][vilkarResultat.FORSTO_BURDE_FORSTAATT]);
  });

  // TODO (TOR) Skriv fleire testar
});
