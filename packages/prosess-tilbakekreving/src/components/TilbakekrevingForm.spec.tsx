import React from 'react';
import { shallow } from 'enzyme';
import AlertStripe from 'nav-frontend-alertstriper';

import navBrukerKjonn from '@fpsak-frontend/kodeverk/src/navBrukerKjonn';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { AlleKodeverkTilbakekreving, DetaljertFeilutbetalingPeriode } from '@fpsak-frontend/types';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import TilbakekrevingTimelinePanel from './timeline/TilbakekrevingTimelinePanel';
import VilkarResultat from '../kodeverk/vilkarResultat';
import { slaSammenOriginaleOgLagredePeriode, TilbakekrevingFormImpl } from './TilbakekrevingForm';
import TilbakekrevingPeriodeForm, { CustomVilkarsVurdertePeriode } from './TilbakekrevingPeriodeForm';
import DataForPeriode from '../types/dataForPeriodeTsType';

import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<TilbakekrevingForm>', () => {
  it('skal vise tidslinje når en har perioder', () => {
    const perioder = [{
      fom: '2019-01-01',
      tom: '2019-01-10',
    }] as CustomVilkarsVurdertePeriode[];
    const perioderDetail = [{
      fom: '2019-01-01',
      tom: '2019-01-10',
    }] as DataForPeriode[];

    const wrapper = shallow(<TilbakekrevingFormImpl
      {...reduxFormPropsMock}
      vilkarsVurdertePerioder={perioder}
      dataForDetailForm={perioderDetail}
      navBrukerKjonn={navBrukerKjonn.KVINNE}
      readOnly={false}
      readOnlySubmitButton={false}
      reduxFormChange={() => undefined}
      reduxFormInitialize={() => undefined}
      antallPerioderMedAksjonspunkt={2}
      handleSubmit={() => undefined}
      merknaderFraBeslutter={{
        notAccepted: false,
      }}
      behandlingVersjon={2}
      behandlingUuid="1"
      alleKodeverk={{} as AlleKodeverkTilbakekreving}
      beregnBelop={() => undefined}
      perioderForeldelse={{} as any}
      submitCallback={() => undefined}
      alleMerknaderFraBeslutter={{}}
      perioder={[]}
      vilkarvurdering={{} as any}
      rettsgebyr={{} as any}
      onSubmit={() => undefined}
      initialValues={{} as any}
      intl={intlMock}
    />);

    wrapper.setState({ valgtPeriode: perioder[0] });

    expect(wrapper.find(TilbakekrevingPeriodeForm)).toHaveLength(1);
    expect(wrapper.find(TilbakekrevingTimelinePanel)).toHaveLength(1);
  });

  it('skal ikke vise tidslinje når en har perioder', () => {
    const perioder = undefined;
    const wrapper = shallow(<TilbakekrevingFormImpl
      {...reduxFormPropsMock}
      vilkarsVurdertePerioder={perioder}
      dataForDetailForm={perioder}
      navBrukerKjonn={navBrukerKjonn.KVINNE}
      readOnly={false}
      readOnlySubmitButton={false}
      reduxFormChange={() => undefined}
      reduxFormInitialize={() => undefined}
      antallPerioderMedAksjonspunkt={2}
      handleSubmit={() => undefined}
      merknaderFraBeslutter={{
        notAccepted: false,
      }}
      behandlingVersjon={2}
      behandlingUuid="1"
      alleKodeverk={{} as AlleKodeverkTilbakekreving}
      beregnBelop={() => undefined}
      perioderForeldelse={{} as any}
      submitCallback={() => undefined}
      alleMerknaderFraBeslutter={{}}
      perioder={[]}
      vilkarvurdering={{} as any}
      rettsgebyr={{} as any}
      onSubmit={() => undefined}
      initialValues={{} as any}
      intl={intlMock}
    />);

    expect(wrapper.find(TilbakekrevingPeriodeForm)).toHaveLength(0);
    expect(wrapper.find(TilbakekrevingTimelinePanel)).toHaveLength(0);
    expect(wrapper.find(AlertStripe)).toHaveLength(0);
  });

  it('skal vise feilmelding når en har dette', () => {
    const perioder = undefined;
    const wrapper = shallow(<TilbakekrevingFormImpl
      {...reduxFormPropsMock}
      vilkarsVurdertePerioder={perioder}
      dataForDetailForm={perioder}
      navBrukerKjonn={navBrukerKjonn.KVINNE}
      readOnly={false}
      readOnlySubmitButton={false}
      reduxFormChange={() => undefined}
      reduxFormInitialize={() => undefined}
      antallPerioderMedAksjonspunkt={2}
      handleSubmit={() => undefined}
      merknaderFraBeslutter={{
        notAccepted: false,
      }}
      behandlingVersjon={2}
      behandlingUuid="1"
      alleKodeverk={{} as AlleKodeverkTilbakekreving}
      beregnBelop={() => undefined}
      error="TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr"
      perioderForeldelse={{} as any}
      submitCallback={() => undefined}
      alleMerknaderFraBeslutter={{}}
      perioder={[]}
      vilkarvurdering={{} as any}
      rettsgebyr={{} as any}
      onSubmit={() => undefined}
      initialValues={{} as any}
      intl={intlMock}
    />);

    expect(wrapper.find(AlertStripe)).toHaveLength(1);
  });

  it('skal lage initial values til form der en har lagret en periode og den andre er foreldet', () => {
    const arsak = {
      hendelseType: {
        kode: 'MORS_AKTIVITET_TYPE',
        kodeverk: 'MORS_AKTIVITET_KRAV',
      },
      hendelseUndertype: {
        kodeverk: 'MORS_AKTIVITET_TYPE',
        kode: 'IKKE_ARBEIDET_HELTID',
      },
    };
    const oppfyltValg = {
      kode: '-',
      kodeverk: 'VILKAAR_RESULTAT',
    };
    const ytelser = [{
      aktivitet: 'Arbeidstakar',
      belop: 19000,
    }];
    const originalePerioder = [{
      feilutbetaling: 32000,
      fom: '2016-03-16',
      tom: '2016-05-01',
      foreldet: true,
      oppfyltValg,
      redusertBeloper: [],
      ytelser,
      årsak: arsak,
    }, {
      feilutbetaling: 19000,
      fom: '2016-05-02',
      tom: '2016-05-26',
      foreldet: false,
      oppfyltValg,
      redusertBeloper: [],
      ytelser,
      årsak: arsak,
    }] as DetaljertFeilutbetalingPeriode[];
    const lagredePerioder = {
      vilkarsVurdertePerioder: [{
        feilutbetalingBelop: 19000,
        begrunnelse: '3434',
        fom: '2016-05-02',
        tom: '2016-05-26',
        vilkarResultat: {
          kode: VilkarResultat.GOD_TRO,
          kodeverk: 'VILKAAR_RESULTAT',
          navn: 'Nei, mottaker har mottatt beløpet i god tro (1. ledd)',
        },
        vilkarResultatInfo: {
          begrunnelse: '34344',
          erBelopetIBehold: true,
          tilbakekrevesBelop: 3434,
        },
      }],
    };
    const rettsgebyr = 1000;

    const resultat = slaSammenOriginaleOgLagredePeriode.resultFunc(originalePerioder, lagredePerioder, rettsgebyr);

    expect(resultat.perioder).toHaveLength(2);
    expect(resultat.perioder[0]).toEqual({
      feilutbetaling: 32000,
      fom: '2016-03-16',
      tom: '2016-05-01',
      foreldet: true,
      harMerEnnEnYtelse: false,
      oppfyltValg,
      redusertBeloper: [],
      ytelser,
      årsak: arsak,
      erTotalBelopUnder4Rettsgebyr: false,
    });
    expect(resultat.perioder[1]).toEqual({
      feilutbetaling: 19000,
      fom: '2016-05-02',
      tom: '2016-05-26',
      foreldet: false,
      harMerEnnEnYtelse: false,
      oppfyltValg,
      redusertBeloper: [],
      ytelser,
      årsak: arsak,
      begrunnelse: '3434',
      vilkarResultat: {
        kode: VilkarResultat.GOD_TRO,
        kodeverk: 'VILKAAR_RESULTAT',
        navn: 'Nei, mottaker har mottatt beløpet i god tro (1. ledd)',
      },
      vilkarResultatInfo: {
        begrunnelse: '34344',
        erBelopetIBehold: true,
        tilbakekrevesBelop: 3434,
      },
      erTotalBelopUnder4Rettsgebyr: false,
    });
  });

  it('skal lage initial values til form der en har splittet en periode i to', () => {
    const arsak = {
      hendelseType: {
        kode: 'MORS_AKTIVITET_TYPE',
        kodeverk: 'MORS_AKTIVITET_KRAV',
      },
      hendelseUndertype: {
        kodeverk: 'MORS_AKTIVITET_TYPE',
        kode: 'IKKE_ARBEIDET_HELTID',
      },
    };
    const oppfyltValg = {
      kode: '-',
      kodeverk: 'VILKAAR_RESULTAT',
    };
    const ytelser = [{
      aktivitet: 'Arbeidstakar',
      belop: 19000,
    }];
    const originalePerioder = [{
      feilutbetaling: 32000,
      fom: '2016-03-16',
      tom: '2016-05-26',
      foreldet: false,
      oppfyltValg,
      redusertBeloper: [],
      ytelser,
      årsak: arsak,
    }] as DetaljertFeilutbetalingPeriode[];
    const lagredePerioder = {
      vilkarsVurdertePerioder: [{
        begrunnelse: '3434',
        fom: '2016-03-16',
        tom: '2016-04-03',
        feilutbetalingBelop: 10000,
        vilkarResultat: {
          kode: VilkarResultat.GOD_TRO,
          kodeverk: 'VILKAAR_RESULTAT',
          navn: 'Nei, mottaker har mottatt beløpet i god tro (1. ledd)',
        },
        vilkarResultatInfo: {
          begrunnelse: '34344',
          erBelopetIBehold: true,
          tilbakekrevesBelop: 2312,
        },
      }, {
        begrunnelse: 'test',
        fom: '2016-04-04',
        tom: '2016-05-26',
        feilutbetalingBelop: 22000,
        vilkarResultat: {
          kode: VilkarResultat.GOD_TRO,
          kodeverk: 'VILKAAR_RESULTAT',
          navn: 'Nei, mottaker har mottatt beløpet i god tro (1. ledd)',
        },
        vilkarResultatInfo: {
          begrunnelse: '34344',
          erBelopetIBehold: true,
          tilbakekrevesBelop: 3434,
        },
      }],
    };
    const rettsgebyr = 1000;

    const resultat = slaSammenOriginaleOgLagredePeriode.resultFunc(originalePerioder, lagredePerioder, rettsgebyr);

    expect(resultat.perioder).toHaveLength(2);
    expect(resultat.perioder[0]).toEqual({
      feilutbetaling: 10000,
      fom: '2016-03-16',
      tom: '2016-04-03',
      foreldet: false,
      oppfyltValg,
      harMerEnnEnYtelse: false,
      redusertBeloper: [],
      ytelser,
      årsak: arsak,
      begrunnelse: '3434',
      vilkarResultat: {
        kode: VilkarResultat.GOD_TRO,
        kodeverk: 'VILKAAR_RESULTAT',
        navn: 'Nei, mottaker har mottatt beløpet i god tro (1. ledd)',
      },
      vilkarResultatInfo: {
        begrunnelse: '34344',
        erBelopetIBehold: true,
        tilbakekrevesBelop: 2312,
      },
      erTotalBelopUnder4Rettsgebyr: false,
    });
    expect(resultat.perioder[1]).toEqual({
      feilutbetaling: 22000,
      fom: '2016-04-04',
      tom: '2016-05-26',
      foreldet: false,
      oppfyltValg,
      harMerEnnEnYtelse: false,
      redusertBeloper: [],
      ytelser,
      årsak: arsak,
      begrunnelse: 'test',
      vilkarResultat: {
        kode: VilkarResultat.GOD_TRO,
        kodeverk: 'VILKAAR_RESULTAT',
        navn: 'Nei, mottaker har mottatt beløpet i god tro (1. ledd)',
      },
      vilkarResultatInfo: {
        begrunnelse: '34344',
        erBelopetIBehold: true,
        tilbakekrevesBelop: 3434,
      },
      erTotalBelopUnder4Rettsgebyr: false,
    });
  });

  // TODO (TOR) Test validateForm
  // TODO (TOR) Test mapStateToPropsFactory
  // TODO (TOR) Test leggTilTimelineData
});
