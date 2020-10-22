import React from 'react';
import { expect } from 'chai';

import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import dokumentTypeId from '@fpsak-frontend/kodeverk/src/dokumentTypeId';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { Table, TableRow } from '@fpsak-frontend/shared-components';
import {
  Aksjonspunkt, Behandling, KodeverkMedNavn, ManglendeVedleggSoknad, Soknad,
} from '@fpsak-frontend/types';

import { buildInitialValues, getSortedManglendeVedlegg, SokersOpplysningspliktFormImpl } from './SokersOpplysningspliktForm';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-prosess-vilkar-sokers-opplysningsplikt';

describe('<SokersOpplysningspliktForm>', () => {
  const getKodeverknavn = () => undefined;

  it('skal vise tabell med manglende vedlegg', () => {
    const manglendeVedlegg = [{
      dokumentType: {
        kode: dokumentTypeId.INNTEKTSMELDING,
        kodeverk: '',
      },
      arbeidsgiver: {
        navn: 'STATOIL ASAAVD STATOIL SOKKELVIRKSOMHET',
        organisasjonsnummer: '973861778',
      },
      brukerHarSagtAtIkkeKommer: false,
    }, {
      dokumentType: {
        kode: dokumentTypeId.DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL,
        navn: 'terminbekreftelse',
      },
      arbeidsgiver: null,
      brukerHarSagtAtIkkeKommer: null,
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
      behandlingId={1}
      behandlingVersjon={1}
    />);

    const table = wrapper.find(Table);
    expect(table).to.have.length(1);
    const rows = table.find(TableRow);
    expect(rows).to.have.length(2);

    const columnsAtRow1 = rows.first().children();
    expect(columnsAtRow1).to.have.length(2);
    expect(columnsAtRow1.first().childAt(0).text()).to.eql('Inntektsmelding');
    expect(columnsAtRow1.at(1).childAt(0).text()).to.eql('Statoil Asaavd Statoil Sokkelvirksomhet (973861778)');

    const columnsAtRow2 = rows.last().children();
    expect(columnsAtRow2).to.have.length(2);
    expect(columnsAtRow2.first().childAt(0).text()).to.eql('terminbekreftelse');
    expect(columnsAtRow2.at(1).childAt(0)).is.empty;
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
      behandlingId={1}
      behandlingVersjon={1}
    />);

    expect(wrapper.find(Table)).to.have.length(0);
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
        arbeidsgiver: {
          navn: 'STATOIL ASAAVD STATOIL SOKKELVIRKSOMHET',
          organisasjonsnummer: '973861778',
        },
        brukerHarSagtAtIkkeKommer: false,
      }] as ManglendeVedleggSoknad[];

      const smv = getSortedManglendeVedlegg.resultFunc({
        manglendeVedlegg,
      } as Soknad);

      expect(smv).to.eql([manglendeVedlegg[1], manglendeVedlegg[0]]);
    });

    it('skal sette opp formens initielle verdier', () => {
      const manglendeVedlegg = [{
        dokumentType: {
          kode: dokumentTypeId.INNTEKTSMELDING,
          kodeverk: '',
        },
        arbeidsgiver: {
          navn: 'STATOIL ASAAVD STATOIL SOKKELVIRKSOMHET',
          organisasjonsnummer: '973861778',
        },
        brukerHarSagtAtIkkeKommer: false,
      }] as ManglendeVedleggSoknad[];
      const aksjonspunkter: Aksjonspunkt[] = [];

      const intitialValues = buildInitialValues.resultFunc(manglendeVedlegg, true, vilkarUtfallType.OPPFYLT, aksjonspunkter);

      expect(intitialValues).to.eql({
        aksjonspunktKode: aksjonspunktCodes.SOKERS_OPPLYSNINGSPLIKT_OVST,
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
