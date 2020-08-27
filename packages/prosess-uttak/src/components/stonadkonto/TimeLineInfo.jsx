import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Element, Normaltekst } from 'nav-frontend-typografi';

import { Table, TableColumn, TableRow } from '@fpsak-frontend/shared-components';
import { stonadskontoerPropType } from '@fpsak-frontend/prop-types';
import uttakArbeidTypeKodeverk from '@fpsak-frontend/kodeverk/src/uttakArbeidType';
import uttakArbeidTypeTekstCodes from '@fpsak-frontend/kodeverk/src/uttakArbeidTypeCodes';
import stonadskontoType from '@fpsak-frontend/kodeverk/src/stonadskontoType';
import { DDMMYYYY_DATE_FORMAT } from '@fpsak-frontend/utils';

import lagVisningsNavn from '../../utils/uttakVisningsnavnHelper';
import TimeLineTab from './TimeLineTab';

import styles from './timeLineInfo.less';

/**
 * TimeLineInfo
 *
 * Presentationskomponent. Viser de ulike perioderne og kvarvarende uker/dagar for soknad
 */

const headerTextCodes = [
  'TimeLineInfo.Aktivitet',
  'TimeLineInfo.Disponibelt',
];

const findTilgjengeligeUker = (stonadskontoer) => {
  let sumDager = 0;
  Object.keys(stonadskontoer).forEach((key) => {
    if (key !== stonadskontoType.FLERBARNSDAGER) {
      sumDager += stonadskontoer[key].maxDager ? stonadskontoer[key].maxDager : 0;
    }
  });
  return Math.floor(sumDager / 5);
};

const findAntallUkerOgDager = (saldo) => {
  const modifier = saldo < 0 ? -1 : 1;
  const justertSaldo = saldo * modifier;
  return {
    uker: (Math.floor(justertSaldo / 5)) * modifier,
    dager: (justertSaldo % 5) * modifier,
  };
};

const createTextStrings = (arbforhold) => {
  const {
    arbeidsgiver, eksternArbeidsforholdId, uttakArbeidType,
  } = arbforhold;

  let arbeidsforhold = <FormattedMessage id="RenderUttakTable.ArbeidType.ANNET" />;

  if (uttakArbeidType && uttakArbeidType.kode !== uttakArbeidTypeKodeverk.ORDINÆRT_ARBEID) {
    arbeidsforhold = <FormattedMessage id={uttakArbeidTypeTekstCodes[uttakArbeidType.kode]} />;
  } else if (arbeidsgiver) {
    arbeidsforhold = lagVisningsNavn(arbeidsgiver, eksternArbeidsforholdId);
  }

  return arbeidsforhold;
};

class TimeLineInfo extends Component {
  constructor() {
    super();
    this.state = {
      aktiv: undefined,
      visKonto: undefined,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(konto, index) {
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
      maksDatoUttak,
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

    const stonadArray = Object.keys(stonadskonto).map((key) => ({
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

    const createKey = (arbeidsforhold) => {
      const { uttakArbeidType, arbeidsgiver, arbeidsforholdId } = arbeidsforhold.aktivitetIdentifikator;
      let arbKey = uttakArbeidType.kode;
      arbKey = arbeidsgiver ? `${arbKey} ${arbeidsgiver.navn}` : arbKey;
      arbKey = arbeidsforholdId ? `${arbKey} ${arbeidsforholdId}` : arbKey;
      arbKey = arbeidsgiver ? `${arbKey} ${arbeidsgiver.identifikator}` : arbKey;
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
                      values={{ ukerVerdi: findTilgjengeligeUker(stonadskonto), b: (chunks) => <b>{chunks}</b> }}
                    />
                  </Normaltekst>
                </Column>
                {maksDatoUttak
                && (
                  <Column xs="3">
                    <Normaltekst>
                      <FormattedMessage
                        id="TimeLineInfo.Stonadinfo.MaksDato"
                        values={{ dato: moment(maksDatoUttak).format(DDMMYYYY_DATE_FORMAT), b: (chunks) => <b>{chunks}</b> }}
                      />
                    </Normaltekst>
                  </Column>
                )}
              </Row>
              <Row>
                <div className={styles.tabs}>
                  <ul role="tablist">
                    {stonadArray.map((konto, index) => (
                      <TimeLineTab key={konto.kontonavn} aktiv={index === aktiv} stonadskonto={konto} onClickCallback={() => this.handleChange(konto, index)} />
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
                            <Normaltekst>{createTextStrings(arbforhold.aktivitetIdentifikator)}</Normaltekst>
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
                                  b: (chunks) => <b>{chunks}</b>,
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

TimeLineInfo.propTypes = {
  stonadskonto: stonadskontoerPropType,
  maksDatoUttak: PropTypes.string,
};

TimeLineInfo.defaultProps = {
  stonadskonto: undefined,
  maksDatoUttak: '',
};

export default TimeLineInfo;
