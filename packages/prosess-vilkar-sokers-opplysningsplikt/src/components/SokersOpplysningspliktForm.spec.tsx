import React from 'react';
import sinon from 'sinon';

import { getIntlMock, shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import dokumentTypeId from '@fpsak-frontend/kodeverk/src/dokumentTypeId';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { Table, TableRow } from '@fpsak-frontend/shared-components';
import {
  Aksjonspunkt, Behandling, KodeverkMedNavn, ManglendeVedleggSoknad, Soknad,
} from '@fpsak-frontend/types';

import { buildInitialValues, getSortedManglendeVedlegg, SokersOpplysningspliktFormImpl } from './SokersOpplysningspliktForm';
import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<SokersOpplysningspliktForm>', () => {
  const getKodeverknavn = () => '';

  const arbeidsgiverOpplysningerPerId = {
    1: {
      erPrivatPerson: false,
      identifikator: '973861778',
      navn: 'EQUINOR ASA AVD STATOIL SOKKELVIRKSOMHET',
    },
    973861778: {
      erPrivatPerson: false,
      identifikator: '973861778',
      navn: 'STATOIL ASAAVD STATOIL SOKKELVIRKSOMHET',
    },
  };

  it('skal vise tabell med manglende vedlegg', () => {
    const manglendeVedlegg = [{
      dokumentType: {
        kode: dokumentTypeId.INNTEKTSMELDING,
        kodeverk: '',
      },
      arbeidsgiverReferanse: '973861778',
      brukerHarSagtAtIkkeKommer: false,
    }, {
      dokumentType: {
        kode: dokumentTypeId.DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL,
        kodeverk: '',
      },
      arbeidsgiverReferanse: '1',
      brukerHarSagtAtIkkeKommer: false,
    }] as ManglendeVedleggSoknad[];
    const dokumentTypeIds = [{
      kode: dokumentTypeId.INNTEKTSMELDING,
      navn: 'Inntektsmelding',
      kodeverk: '',
    }, {
      kode: dokumentTypeId.DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL,
      navn: 'terminbekreftelse',
      kodeverk: '',
    }];

    const wrapper = shallowWithIntl(<SokersOpplysningspliktFormImpl
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      readOnlySubmitButton={false}
      behandlingsresultat={{} as Behandling['behandlingsresultat']}
      hasSoknad
      erVilkarOk={undefined}
      hasAksjonspunkt
      manglendeVedlegg={manglendeVedlegg}
      dokumentTypeIds={dokumentTypeIds}
      getKodeverknavn={getKodeverknavn}
      soknad={{} as Soknad}
      aksjonspunkter={[]}
      status="test"
      submitCallback={sinon.spy()}
      alleKodeverk={{}}
      originalErVilkarOk
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);

    const table = wrapper.find(Table);
    expect(table).toHaveLength(1);
    const rows = table.find(TableRow);
    expect(rows).toHaveLength(2);

    const columnsAtRow1 = rows.first().children();
    expect(columnsAtRow1).toHaveLength(2);
    expect(columnsAtRow1.first().childAt(0).text()).toEqual('Inntektsmelding');
    expect(columnsAtRow1.at(1).childAt(0).text()).toEqual('Statoil Asaavd Statoil Sokkelvirksomhet (973861778)');

    const columnsAtRow2 = rows.last().children();
    expect(columnsAtRow2).toHaveLength(2);
    expect(columnsAtRow2.first().childAt(0).text()).toEqual('terminbekreftelse');
    expect(columnsAtRow2.at(1).childAt(0)).toEqual({});
  });

  it('skal ikke vise tabell når ingen vedlegg mangler', () => {
    const manglendeVedlegg: ManglendeVedleggSoknad[] = [];
    const dokumentTypeIds: KodeverkMedNavn[] = [];

    const wrapper = shallowWithIntl(<SokersOpplysningspliktFormImpl
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      readOnlySubmitButton={false}
      behandlingsresultat={{} as Behandling['behandlingsresultat']}
      hasSoknad
      erVilkarOk={undefined}
      hasAksjonspunkt
      manglendeVedlegg={manglendeVedlegg}
      dokumentTypeIds={dokumentTypeIds}
      getKodeverknavn={getKodeverknavn}
      soknad={{} as Soknad}
      aksjonspunkter={[]}
      status="test"
      submitCallback={sinon.spy()}
      alleKodeverk={{}}
      originalErVilkarOk
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);

    expect(wrapper.find(Table)).toHaveLength(0);
  });

  describe('selectors', () => {
    it('skal sortere manglende vedlegg', () => {
      const manglendeVedlegg = [{
        dokumentType: {
          kode: dokumentTypeId.DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL,
          navn: 'terminbekreftelse',
        },
        arbeidsgiver: null,
        brukerHarSagtAtIkkeKommer: null,
      }, {
        dokumentType: {
          kode: dokumentTypeId.INNTEKTSMELDING,
          kodeverk: '',
        },
        arbeidsgiverReferanse: '973861778',
        brukerHarSagtAtIkkeKommer: false,
      }] as ManglendeVedleggSoknad[];

      const smv = getSortedManglendeVedlegg.resultFunc({
        manglendeVedlegg,
      } as Soknad);

      expect(smv).toEqual([manglendeVedlegg[1], manglendeVedlegg[0]]);
    });

    it('skal sette opp formens initielle verdier', () => {
      const manglendeVedlegg = [{
        dokumentType: {
          kode: dokumentTypeId.INNTEKTSMELDING,
          kodeverk: '',
        },
        arbeidsgiverReferanse: '973861778',
        brukerHarSagtAtIkkeKommer: false,
      }] as ManglendeVedleggSoknad[];
      const aksjonspunkter: Aksjonspunkt[] = [];

      const intitialValues = buildInitialValues.resultFunc(manglendeVedlegg, true, vilkarUtfallType.OPPFYLT, aksjonspunkter, arbeidsgiverOpplysningerPerId);

      expect(intitialValues).toEqual({
        begrunnelse: '',
        erVilkarOk: true,
        hasAksjonspunkt: false,
        inntektsmeldingerSomIkkeKommer: {
          org_973861778: false,
        },
      });
    });
  });
});
