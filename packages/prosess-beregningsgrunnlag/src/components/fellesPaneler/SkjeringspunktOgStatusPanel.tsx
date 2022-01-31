import React, { FunctionComponent, ReactElement } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { Normaltekst } from 'nav-frontend-typografi';
import { EtikettInfo } from 'nav-frontend-etiketter';
import { getKodeverknavnFn } from '@fpsak-frontend/utils';
import {
  DateLabel, FlexContainer, FlexColumn, FlexRow, VerticalSpacer, AvsnittSkiller,
} from '@fpsak-frontend/shared-components';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { AlleKodeverk } from '@fpsak-frontend/types';

import styles from './skjeringspunktOgStatusPanel.less';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';

export const RADIO_GROUP_FIELD_DEKNINGSGRAD_NAVN = 'dekningsgrad';

const createStatusEtiketter = (listeMedStatuser: string[], getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string): ReactElement => {
  const statusList = [];
  const unikeStatuser = listeMedStatuser.filter((status, index, self) => index === self.findIndex((t) => (
    t === status)));
  unikeStatuser.forEach((status) => {
    const statusName = getKodeverknavn(status, KodeverkType.AKTIVITET_STATUS);
    statusList.push({ visningsNavn: statusName, kode: status, className: `statusFarge${status}` });
  });
  statusList.sort((a, b) => ((a.visningsNavn > b.visningsNavn) ? 1 : -1));
  return (
    <>
      {statusList.map((status) => (
        <EtikettInfo key={status.visningsNavn} className={styles[status.className]} title={status.visningsNavn}>{status.visningsNavn}</EtikettInfo>
      ))}
    </>
  );
};

type MappedOwnProps = {
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string;
}

type OwnProps = {
    skjeringstidspunktDato: string;
    aktivitetStatusList: string[];
    alleKodeverk: AlleKodeverk;
};

/**
 * SkjeringspunktOgStatusPanel
 *
 * Viser skjæringstidspunkt for beregningen og en liste med aktivitetsstatuser.
 */

export const SkjeringspunktOgStatusPanelImpl: FunctionComponent<OwnProps & MappedOwnProps> = ({
  skjeringstidspunktDato,
  aktivitetStatusList,
  getKodeverknavn,
}) => (
  <>
    <AvsnittSkiller spaceUnder leftPanel />
    <div className={beregningStyles.panelLeft}>
      {createStatusEtiketter(aktivitetStatusList, getKodeverknavn)}
      <VerticalSpacer sixteenPx />
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            <Normaltekst>
              <FormattedMessage id="Beregningsgrunnlag.Skjeringstidspunkt.SkjeringForBeregning" />
            </Normaltekst>
          </FlexColumn>
          <FlexColumn>
            <Normaltekst className={beregningStyles.semiBoldText}>
              <DateLabel dateString={skjeringstidspunktDato} />
            </Normaltekst>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </div>
  </>
);

const mapStateToProps = (state, ownProps: OwnProps): MappedOwnProps => {
  const getKodeverknavn = getKodeverknavnFn(ownProps.alleKodeverk);
  return {
    getKodeverknavn,
  };
};

const SkjeringspunktOgStatusPanel = connect(mapStateToProps)(SkjeringspunktOgStatusPanelImpl);

export default SkjeringspunktOgStatusPanel;
