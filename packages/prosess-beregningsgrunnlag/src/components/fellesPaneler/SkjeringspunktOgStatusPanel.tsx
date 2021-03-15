import React, { FunctionComponent, ReactElement } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import { getKodeverknavnFn } from '@fpsak-frontend/utils';
import {
  DateLabel, FlexContainer, FlexColumn, FlexRow, VerticalSpacer, AvsnittSkiller,
} from '@fpsak-frontend/shared-components';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import { EtikettInfo } from 'nav-frontend-etiketter';

import { Kodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import styles from './skjeringspunktOgStatusPanel.less';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import { DekningsgradValues } from '../../types/DekningsgradAksjonspunktTsType';

export const RADIO_GROUP_FIELD_DEKNINGSGRAD_NAVN = 'dekningsgrad';

const createStatusEtiketter = (listeMedStatuser: Kodeverk[], getKodeverknavn: (kodeverk: Kodeverk) => string): ReactElement => {
  const statusList = [];
  const unikeStatuser = listeMedStatuser.filter((status, index, self) => index === self.findIndex((t) => (
    t.kode === status.kode)));
  unikeStatuser.forEach((status) => {
    const statusName = getKodeverknavn(status);
    statusList.push({ visningsNavn: statusName, kode: status.kode, className: `statusFarge${status.kode}` });
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

interface StaticFunctions {
  buildInitialValues?: (gjeldendeDekningsgrad: number, gjeldendeAksjonspunkter: Aksjonspunkt[]) => DekningsgradValues;
}

type MappedOwnProps = {
  getKodeverknavn: (kodeverk: Kodeverk) => string;
}

type OwnProps = {
    skjeringstidspunktDato: string;
    aktivitetStatusList: Kodeverk[];
    alleKodeverk: {[key: string]: KodeverkMedNavn[]};
};

/**
 * SkjeringspunktOgStatusPanel
 *
 * Viser skjæringstidspunkt for beregningen og en liste med aktivitetsstatuser.
 */

export const SkjeringspunktOgStatusPanelImpl: FunctionComponent<OwnProps & MappedOwnProps> & StaticFunctions = ({
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
  const getKodeverknavn = getKodeverknavnFn(ownProps.alleKodeverk, kodeverkTyper);
  return {
    getKodeverknavn,
  };
};

const SkjeringspunktOgStatusPanel = connect(mapStateToProps)(SkjeringspunktOgStatusPanelImpl);

SkjeringspunktOgStatusPanel.buildInitialValues = (gjeldendeDekningsgrad, gjeldendeAksjonspunkter): DekningsgradValues => {
  const aksjonspunkt = gjeldendeAksjonspunkter && gjeldendeAksjonspunkter.find((ap) => ap.definisjon.kode === aksjonspunktCodes.VURDER_DEKNINGSGRAD);
  const initialDekningsgrad = aksjonspunkt && gjeldendeDekningsgrad === 100 ? gjeldendeDekningsgrad : undefined;
  return { [RADIO_GROUP_FIELD_DEKNINGSGRAD_NAVN]: initialDekningsgrad };
};

export default SkjeringspunktOgStatusPanel;
