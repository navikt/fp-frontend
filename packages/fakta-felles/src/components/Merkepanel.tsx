import React, { FunctionComponent } from 'react';
import { RawIntlProvider, FormattedMessage } from 'react-intl';
import {
  EtikettAdvarsel, EtikettFokus, EtikettInfo, EtikettSuksess,
} from 'nav-frontend-etiketter';

import { createIntl } from '@fpsak-frontend/utils';
import diskresjonskodeType from '@fpsak-frontend/kodeverk/src/diskresjonskodeType';
import { Tooltip } from '@fpsak-frontend/shared-components';

import styles from './merkepanel.less';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  erDod?: boolean;
  erDodFodt?: boolean;
  erNAVAnsatt?: boolean;
  erVerge?: boolean;
  diskresjonskode?: string;
}

/**
 * MerkePanel
 *
 * Presentasjonskomponent. Definerer visning av personens merkinger. (Søker)
 *
 * Eksempel:
 * ```html
 *  <MerkePanel erDod={false} diskresjonskode="SPSF" erVerge erNAVANsatt />
 * ```
 */
const MerkePanel: FunctionComponent<OwnProps> = ({
  erDod,
  erDodFodt,
  erNAVAnsatt,
  erVerge,
  diskresjonskode,
}) => {
  const { formatMessage } = intl;

  return (
    <RawIntlProvider value={intl}>
      <div className={styles.merkePanel}>
        {erDod && (
          <Tooltip content={formatMessage({ id: 'MerkePanel.DodTittel' })} alignBottom>
            <EtikettInfo className={styles.dodMerke}>
              <FormattedMessage id="MerkePanel.Dod" />
            </EtikettInfo>
          </Tooltip>
        )}
        {erDodFodt && (
          <Tooltip content={formatMessage({ id: 'MerkePanel.DodTittel' })} alignBottom>
            <EtikettInfo className={styles.dodMerke}>
              <FormattedMessage id="MerkePanel.DodFodt" />
            </EtikettInfo>
          </Tooltip>
        )}
        {diskresjonskode === diskresjonskodeType.KODE6 && !erDod && (
          <Tooltip content={formatMessage({ id: 'MerkePanel.Diskresjon6Tittel' })} alignBottom>
            <EtikettAdvarsel className={styles.merkeDiskresjonskoder}>
              <FormattedMessage id="MerkePanel.Diskresjon6" />
            </EtikettAdvarsel>
          </Tooltip>
        )}
        {diskresjonskode === diskresjonskodeType.KODE7 && !erDod && (
          <Tooltip content={formatMessage({ id: 'MerkePanel.Diskresjon7Tittel' })} alignBottom>
            <EtikettFokus className={styles.merkeDiskresjonskoder}>
              <FormattedMessage id="MerkePanel.Diskresjon7" />
            </EtikettFokus>
          </Tooltip>
        )}
        {erNAVAnsatt && !erDod && (
          <Tooltip content={formatMessage({ id: 'MerkePanel.EgenAnsattTittel' })} alignBottom>
            <EtikettSuksess className={styles.navMerke}>
              <FormattedMessage id="MerkePanel.EgenAnsatt" />
            </EtikettSuksess>
          </Tooltip>
        )}
        {erVerge && !erDod && (
          <Tooltip content={formatMessage({ id: 'MerkePanel.VergeTittel' })} alignBottom>
            <EtikettFokus className={styles.vergeMerke}>
              <span className={styles.vergeIcon} />
              <FormattedMessage id="MerkePanel.Verge" />
            </EtikettFokus>
          </Tooltip>
        )}
      </div>
    </RawIntlProvider>
  );
};

MerkePanel.defaultProps = {
  diskresjonskode: '',
  erNAVAnsatt: false,
  erDod: false,
  erDodFodt: false,
  erVerge: false,
};

export default MerkePanel;
