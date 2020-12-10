import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { FormattedMessage } from 'react-intl';

import { omit } from '@fpsak-frontend/utils';
import { Historikkinnslag, HistorikkinnslagDel } from '@fpsak-frontend/types';

import { skjermlenkeCodes } from '@fpsak-frontend/konstanter';
import historikkOpplysningTypeCodes from '../../kodeverk/historikkOpplysningTypeCodes';
import HistorikkMalTypeAktivitetskrav from './HistorikkMalTypeAktivitetskrav';

describe('HistorikkMalTypeAktivitetskrav', () => {
  it('skal vise historikkelement korrekt', () => {
    const historikkinnslagDeler = [{
      begrunnelseFritekst: 'Dette er en begrunnelse',
      opplysninger: [{
        opplysningType: {
          kode: historikkOpplysningTypeCodes.UTTAK_PERIODE_FOM.kode,
          kodeverk: 'HISTORIKK_OPPLYSNING_TYPE',
        },
        tilVerdi: '05.01.2021',
      }, {
        opplysningType: {
          kode: historikkOpplysningTypeCodes.UTTAK_PERIODE_TOM.kode,
          kodeverk: 'HISTORIKK_OPPLYSNING_TYPE',
        },
        tilVerdi: '19.01.2021',
      }],
      skjermlenke: {
        kode: skjermlenkeCodes.FAKTA_OM_AKTIVITETSKRAV.kode,
        kodeverk: 'SKJERMLENKE_TYPE',
      },
      endredeFelter: [{
        endretFeltNavn: {
          kode: 'AKTIVITETSKRAV_AVKLARING',
          kodeverk: 'HISTORIKK_ENDRET_FELT_TYPE',
        },
        klNavn: 'HISTORIKK_ENDRET_FELT_TYPE',
        fraVerdi: null,
        tilVerdi: 'I_AKTIVITET',
        klTilVerdi: 'AKTIVITETSKRAV_AVKLARING',
      }],
    }] as HistorikkinnslagDel[];

    const getKodeverknavn = (kodeverk) => {
      if (kodeverk.kode === 'I_AKTIVITET') {
        return 'Mor er i aktivitet';
      }
      return '';
    };

    const locationMock = {
      pathname: 'test',
      search: 'test',
      state: {},
      hash: 'test',
    };

    const wrapper = shallow(<HistorikkMalTypeAktivitetskrav
      historikkinnslag={{ historikkinnslagDeler } as Historikkinnslag}
      behandlingLocation={locationMock}
      getKodeverknavn={getKodeverknavn}
      createLocationForSkjermlenke={() => locationMock}
      erTilbakekreving={false}
      saksnummer={123}
    />);

    const messages = wrapper.find(FormattedMessage);
    expect(messages).to.have.length(1);
    expect(omit(messages.first().prop('values'), 'b')).to.eql({
      periodeFom: '05.01.2021',
      periodeTom: '19.01.2021',
      feltVerdi: 'Mor er i aktivitet',
    });
  });
});
