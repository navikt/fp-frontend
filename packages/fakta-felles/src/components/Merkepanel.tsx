import React, { FunctionComponent } from 'react';
import { RawIntlProvider, FormattedMessage } from 'react-intl';
import { Tag } from '@navikt/ds-react';
import { Tooltip } from '@navikt/ft-ui-komponenter';

import { createIntl } from '@navikt/ft-utils';
import { diskresjonskodeType } from '@navikt/fp-kodeverk';

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
            <Tag variant="info" className={styles.dodMerke}>
              <FormattedMessage id="MerkePanel.Dod" />
            </Tag>
          </Tooltip>
        )}
        {erDodFodt && (
          <Tooltip content={formatMessage({ id: 'MerkePanel.DodTittel' })} alignBottom>
            <Tag variant="info" className={styles.dodMerke}>
              <FormattedMessage id="MerkePanel.DodFodt" />
            </Tag>
          </Tooltip>
        )}
        {diskresjonskode === diskresjonskodeType.KODE6 && !erDod && (
          <Tooltip content={formatMessage({ id: 'MerkePanel.Diskresjon6Tittel' })} alignBottom>
            <Tag variant="warning" className={styles.merkeDiskresjonskoder}>
              <FormattedMessage id="MerkePanel.Diskresjon6" />
            </Tag>
          </Tooltip>
        )}
        {diskresjonskode === diskresjonskodeType.KODE7 && !erDod && (
          <Tooltip content={formatMessage({ id: 'MerkePanel.Diskresjon7Tittel' })} alignBottom>
            <Tag variant="warning" className={styles.merkeDiskresjonskoder}>
              <FormattedMessage id="MerkePanel.Diskresjon7" />
            </Tag>
          </Tooltip>
        )}
        {erNAVAnsatt && !erDod && (
          <Tooltip content={formatMessage({ id: 'MerkePanel.EgenAnsattTittel' })} alignBottom>
            <Tag variant="success" className={styles.navMerke}>
              <FormattedMessage id="MerkePanel.EgenAnsatt" />
            </Tag>
          </Tooltip>
        )}
        {erVerge && !erDod && (
          <Tooltip content={formatMessage({ id: 'MerkePanel.VergeTittel' })} alignBottom>
            <Tag variant="warning" className={styles.vergeMerke}>
              <span className={styles.vergeIcon} />
              <FormattedMessage id="MerkePanel.Verge" />
            </Tag>
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
