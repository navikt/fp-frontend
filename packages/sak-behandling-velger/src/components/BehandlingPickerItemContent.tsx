import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import classNames from 'classnames';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';
import Panel from 'nav-frontend-paneler';

import {
  FlexContainer, FlexRow, FlexColumn, DateLabel, TimeLabel, Image, VerticalSpacer, Tooltip,
} from '@fpsak-frontend/shared-components';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import behandlingArsakType from '@fpsak-frontend/kodeverk/src/behandlingArsakType';
import chevronUp from '@fpsak-frontend/assets/images/pil_opp.svg';
import chevronDown from '@fpsak-frontend/assets/images/pil_ned.svg';
import stjerneImg from '@fpsak-frontend/assets/images/stjerne.svg';
import { BehandlingAppKontekst, KodeverkMedNavn } from '@fpsak-frontend/types';

import styles from './behandlingPickerItemContent.less';

const tilbakekrevingÅrsakTyperKlage = [
  behandlingArsakType.RE_KLAGE_KA,
  behandlingArsakType.RE_KLAGE_NFP,
];

const erTilbakekrevingÅrsakKlage = (årsak?: string): boolean => !!årsak && tilbakekrevingÅrsakTyperKlage.includes(årsak.kode);

const renderChevron = (chevron: string, messageId: string): ReactElement => {
  const intl = useIntl();
  return <Image src={chevron} alt={intl.formatMessage({ id: messageId })} tooltip={intl.formatMessage({ id: messageId })} alignTooltipLeft />;
};

interface OwnProps {
  withChevronDown?: boolean;
  withChevronUp?: boolean;
  getKodeverkFn: (kodeverk: string, behandlingType: string) => KodeverkMedNavn | undefined;
  behandlendeEnhetId?: string;
  behandlendeEnhetNavn?: string;
  opprettetDato: string;
  avsluttetDato?: string;
  behandlingsstatus: string;
  behandlingTypeKode: string;
  behandlingTypeNavn: string;
  førsteÅrsak?: BehandlingAppKontekst['førsteÅrsak'];
  erGjeldendeVedtak?: boolean;
  behandlingsresultatTypeKode?: string;
  behandlingsresultatTypeNavn?: string;
}

/**
 * BehandlingPickerItemContent
 *
 * Presentasjonskomponent. Håndterer formatering av innholdet i den enkelte behandling i behandlingsvelgeren.
 */
const BehandlingPickerItemContent: FunctionComponent<OwnProps> = ({
  withChevronDown = false,
  withChevronUp = false,
  getKodeverkFn,
  behandlendeEnhetId,
  behandlendeEnhetNavn,
  opprettetDato,
  avsluttetDato,
  behandlingsstatus,
  behandlingTypeNavn,
  erGjeldendeVedtak = false,
  behandlingsresultatTypeKode,
  behandlingsresultatTypeNavn,
  førsteÅrsak,
  behandlingTypeKode,
}) => (
  <Panel border>
    <FlexContainer>
      <FlexRow>
        <FlexColumn className={styles.arsakPadding}>
          <Element>{behandlingTypeNavn}</Element>
        </FlexColumn>
        {behandlingTypeKode === behandlingType.REVURDERING && førsteÅrsak?.behandlingArsakType && (
          <>
            <FlexColumn className={styles.arsakPadding}>-</FlexColumn>
            <FlexColumn>
              <Normaltekst>
                {getKodeverkFn(førsteÅrsak.behandlingArsakType, { kode: behandlingType.REVURDERING, kodeverk: '' })?.navn || ''}
              </Normaltekst>
            </FlexColumn>
          </>
        )}
        {behandlingTypeKode === behandlingType.TILBAKEKREVING_REVURDERING && erTilbakekrevingÅrsakKlage(førsteÅrsak?.behandlingArsakType) && (
          <>
            <FlexColumn className={styles.arsakPadding}>-</FlexColumn>
            <FlexColumn>
              <Normaltekst>
                <FormattedMessage id="Behandlingspunkt.Årsak.Klage" />
              </Normaltekst>
            </FlexColumn>
          </>
        )}
        <FlexColumn className={styles.pushRight}>
          {erGjeldendeVedtak && (
            <Image
              className={styles.starImage}
              src={stjerneImg}
              tooltip={<FormattedMessage id="BehandlingPickerItemContent.GjeldendeVedtak" />}
              alignTooltipLeft
            />
          )}
        </FlexColumn>
        <FlexColumn>
          {withChevronDown && renderChevron(chevronDown, 'BehandlingPickerItemContent.Open')}
          {withChevronUp && renderChevron(chevronUp, 'BehandlingPickerItemContent.Close')}
        </FlexColumn>
      </FlexRow>
    </FlexContainer>
    <VerticalSpacer eightPx />
    <hr className={styles.line} />
    <VerticalSpacer sixteenPx />
    <FlexContainer>
      <FlexRow>
        <FlexColumn className={styles.firstColumnWidth}>
          <Normaltekst><FormattedMessage id="BehandlingPickerItemContent.Behandlingstatus" /></Normaltekst>
        </FlexColumn>
        <FlexColumn>
          <Normaltekst>{behandlingsstatus}</Normaltekst>
        </FlexColumn>
      </FlexRow>
      <FlexRow>
        <FlexColumn className={styles.firstColumnWidth}>
          <Normaltekst><FormattedMessage id="BehandlingPickerItemContent.Resultat" /></Normaltekst>
        </FlexColumn>
        <FlexColumn>
          <Normaltekst>{behandlingsresultatTypeKode ? behandlingsresultatTypeNavn : '-'}</Normaltekst>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer sixteenPx />
      <FlexRow>
        <FlexColumn className={styles.firstColumnWidth}>
          <Normaltekst><FormattedMessage id="BehandlingPickerItemContent.Opprettet" /></Normaltekst>
        </FlexColumn>
        <FlexColumn>
          <Normaltekst className={styles.inline}><DateLabel dateString={opprettetDato} /></Normaltekst>
          <Undertekst className={classNames(styles.inline, styles.timePadding)}><FormattedMessage id="DateTimeLabel.Kl" /></Undertekst>
          <Undertekst className={styles.inline}><TimeLabel dateTimeString={opprettetDato} /></Undertekst>
        </FlexColumn>
      </FlexRow>
      <FlexRow>
        <FlexColumn className={styles.firstColumnWidth}>
          <Normaltekst><FormattedMessage id="BehandlingPickerItemContent.Avsluttet" /></Normaltekst>
        </FlexColumn>
        <FlexColumn>
          {avsluttetDato && (
            <>
              <Normaltekst className={styles.inline}><DateLabel dateString={avsluttetDato} /></Normaltekst>
              <Undertekst className={classNames(styles.inline, styles.timePadding)}><FormattedMessage id="DateTimeLabel.Kl" /></Undertekst>
              <Undertekst className={styles.inline}><TimeLabel dateTimeString={avsluttetDato} /></Undertekst>
            </>
          )}
        </FlexColumn>
        <FlexColumn className={styles.pushRightCorner}>
          <Normaltekst className={styles.inline}><FormattedMessage id="BehandlingPickerItemContent.Enhet" /></Normaltekst>
          <Tooltip content={behandlendeEnhetNavn} alignLeft>
            <Normaltekst className={styles.inline}>{behandlendeEnhetId}</Normaltekst>
          </Tooltip>
        </FlexColumn>
      </FlexRow>
    </FlexContainer>
    <VerticalSpacer fourPx />
  </Panel>
);

export default BehandlingPickerItemContent;
