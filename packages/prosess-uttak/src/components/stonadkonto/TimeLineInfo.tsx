import React, { Component, ReactNode } from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Element, Normaltekst } from 'nav-frontend-typografi';

import { Table, TableColumn, TableRow } from '@fpsak-frontend/shared-components';
import uttakArbeidTypeKodeverk from '@fpsak-frontend/kodeverk/src/uttakArbeidType';
import uttakArbeidTypeTekstCodes from '@fpsak-frontend/kodeverk/src/uttakArbeidTypeCodes';
import stonadskontoType from '@fpsak-frontend/kodeverk/src/stonadskontoType';
import { DDMMYYYY_DATE_FORMAT } from '@fpsak-frontend/utils';
import {
  AktivitetIdentifikator, AktivitetSaldo, ArbeidsgiverOpplysningerPerId, UttakStonadskontoer,
} from '@fpsak-frontend/types';

import lagVisningsNavn from '../../utils/lagVisningsNavn';
import TimeLineTab, { CustomStonadskonto } from './TimeLineTab';

import styles from './timeLineInfo.less';

const headerTextCodes = [
  'TimeLineInfo.Aktivitet',
  'TimeLineInfo.Disponibelt',
];

const findTilgjengeligeUker = (stonadskontoer: UttakStonadskontoer['stonadskontoer']): number => {
  let sumDager = 0;
  Object.keys(stonadskontoer).forEach((key) => {
    if (key !== stonadskontoType.FLERBARNSDAGER) {
      sumDager += stonadskontoer[key].maxDager ? stonadskontoer[key].maxDager : 0;
    }
  });
  return Math.floor(sumDager / 5);
};

const findAntallUkerOgDager = (saldo: number): { uker: number; dager: number } => {
  const modifier = saldo < 0 ? -1 : 1;
  const justertSaldo = saldo * modifier;
  return {
    uker: (Math.floor(justertSaldo / 5)) * modifier,
    dager: (justertSaldo % 5) * modifier,
  };
};

const createTextStrings = (arbforhold: AktivitetIdentifikator, arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): ReactNode | string => {
  const {
    arbeidsgiverReferanse, uttakArbeidType,
  } = arbforhold;

  if (uttakArbeidType && uttakArbeidType.kode !== uttakArbeidTypeKodeverk.ORDINÆRT_ARBEID) {
    return <FormattedMessage id={uttakArbeidTypeTekstCodes[uttakArbeidType.kode]} />;
  }
  if (arbeidsgiverReferanse) {
    const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse];
    return arbeidsgiverOpplysninger ? lagVisningsNavn(arbeidsgiverOpplysninger) : arbeidsgiverReferanse;
  }

  return <FormattedMessage id="RenderUttakTable.ArbeidType.ANNET" />;
};

interface OwnProps {
  stonadskonto?: UttakStonadskontoer['stonadskontoer'];
  maksDatoUttak?: string;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

interface OwnState {
  aktiv?: number;
  visKonto?: CustomStonadskonto;
}

/**
 * TimeLineInfo
 *
 * Presentationskomponent. Viser de ulike perioderne og kvarvarende uker/dagar for soknad
 */
class TimeLineInfo extends Component<OwnProps, OwnState> {
  constructor(props: OwnProps) {
    super(props);
    this.state = {
      aktiv: undefined,
      visKonto: undefined,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(konto: CustomStonadskonto, index: number): void {
    const { aktiv } = this.state;
    if (aktiv === index) {
      this.setState({
        aktiv: undefined,
        visKonto: undefined,
      });
    } else {
      this.setState({
        aktiv: index,
        visKonto: konto,
      });
    }
  }

  render() {
    const {
      stonadskonto,
      maksDatoUttak = '',
      arbeidsgiverOpplysningerPerId,
    } = this.props;
    const {
      aktiv,
      visKonto,
    } = this.state;

    const gjelderFodsel = true;
    let updatekonto = visKonto;
    const sortedPerioder = [
      stonadskontoType.FORELDREPENGER_FOR_FODSEL,
      stonadskontoType.FELLESPERIODE,
      stonadskontoType.MODREKVOTE,
      stonadskontoType.FEDREKVOTE,
      stonadskontoType.FORELDREPENGER,
      stonadskontoType.FLERBARNSDAGER];

    const stonadArray = Object.keys(stonadskonto).map((key): CustomStonadskonto => ({
      kontonavn: key,
      kontoinfo: stonadskonto[key],
    }));
    const ordering = {};
    sortedPerioder.forEach((s, index) => {
      ordering[s] = index;
    });
    stonadArray.sort((a, b) => (ordering[a.kontonavn] - ordering[b.kontonavn]));

    if (aktiv) {
      updatekonto = stonadArray[aktiv];
    }

    const createKey = (arbeidsforhold: AktivitetSaldo) => {
      const { uttakArbeidType, arbeidsgiverReferanse, arbeidsforholdId } = arbeidsforhold.aktivitetIdentifikator;
      const arbeidsgiverOpplysninger = arbeidsgiverReferanse ? arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse] : undefined;
      let arbKey = uttakArbeidType.kode;
      arbKey = arbeidsgiverOpplysninger ? `${arbKey} ${arbeidsgiverOpplysninger.navn}` : arbKey;
      arbKey = arbeidsforholdId ? `${arbKey} ${arbeidsforholdId}` : arbKey;
      arbKey = arbeidsgiverOpplysninger ? `${arbKey} ${arbeidsgiverOpplysninger.identifikator}` : arbKey;
      arbKey = `${arbKey} ${arbeidsforhold.saldo}`;
      return arbKey;
    };

    return (
      <div>
        {gjelderFodsel // Denne vi lager i første omgang av iterasjonen
          && (
            <Column xs="12">
              <div className={styles.remainingUttak}>
                <Row>
                  <Column xs="5">
                    <Element>
                      <FormattedMessage id="TimeLineInfo.Stonadinfo.DisponibleStonadsdager" />
                    </Element>
                  </Column>
                  <Column xs="4">
                    <Normaltekst>
                      <FormattedMessage
                        id="TimeLineInfo.Stonadinfo.Total"
                        values={{ ukerVerdi: findTilgjengeligeUker(stonadskonto), b: (chunks: any) => <b>{chunks}</b> }}
                      />
                    </Normaltekst>
                  </Column>
                  {maksDatoUttak && (
                    <Column xs="3">
                      <Normaltekst>
                        <FormattedMessage
                          id="TimeLineInfo.Stonadinfo.MaksDato"
                          values={{ dato: moment(maksDatoUttak).format(DDMMYYYY_DATE_FORMAT), b: (chunks: any) => <b>{chunks}</b> }}
                        />
                      </Normaltekst>
                    </Column>
                  )}
                </Row>
                <Row>
                  <div className={styles.tabs}>
                    <ul role="tablist">
                      {stonadArray.map((konto: CustomStonadskonto, index: number) => (
                        <TimeLineTab
                          key={konto.kontonavn}
                          aktiv={index === aktiv}
                          stonadskonto={konto}
                          onClickCallback={() => this.handleChange(konto, index)}
                        />
                      ))}
                    </ul>
                  </div>
                </Row>
                <Row>
                  {updatekonto && updatekonto.kontoinfo.aktivitetSaldoDtoList.length > 0
                  && (
                    <div className={styles.visKonto}>
                      <Table headerTextCodes={headerTextCodes}>
                        {updatekonto.kontoinfo.aktivitetSaldoDtoList.map((arbforhold) => (
                          <TableRow key={createKey(arbforhold)}>
                            <TableColumn>
                              <Normaltekst>{createTextStrings(arbforhold.aktivitetIdentifikator, arbeidsgiverOpplysningerPerId)}</Normaltekst>
                            </TableColumn>
                            <TableColumn>
                              <Normaltekst>
                                {arbforhold.saldo
                              && (
                              <FormattedMessage
                                id="TimeLineInfo.Stonadinfo.UkerDager"
                                values={{
                                  ukerVerdi: findAntallUkerOgDager(
                                    arbforhold.saldo,
                                  ).uker,
                                  dagerVerdi: findAntallUkerOgDager(
                                    arbforhold.saldo,
                                  ).dager,
                                  b: (chunks: any) => <b>{chunks}</b>,
                                }}
                              />
                              )}
                              </Normaltekst>
                            </TableColumn>
                          </TableRow>
                        ))}
                      </Table>
                    </div>
                  )}
                </Row>
              </div>
            </Column>
          )}
      </div>
    );
  }
}

export default TimeLineInfo;
