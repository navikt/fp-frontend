import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import { omitOne } from '@fpsak-frontend/utils';
import { Historikkinnslag, HistorikkinnslagDel, Kodeverk } from '@fpsak-frontend/types';

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
        fraVerdi: undefined,
        tilVerdi: 'I_AKTIVITET',
        klTilVerdi: 'AKTIVITETSKRAV_AVKLARING',
      }],
    }] as HistorikkinnslagDel[];

    const getKodeverknavn = (kodeverk: Kodeverk) => {
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
      saksnummer="123"
    />);

    type Values = { navn: string, fraVerdi: string, tilVerdi: string, b: () => string };

    const messages = wrapper.find(FormattedMessage);
    expect(messages).toHaveLength(1);
    expect(omitOne(messages.first().prop('values') as Values, 'b')).toEqual({
      periodeFom: '05.01.2021',
      periodeTom: '19.01.2021',
      feltVerdi: 'Mor er i aktivitet',
    });
  });
});
