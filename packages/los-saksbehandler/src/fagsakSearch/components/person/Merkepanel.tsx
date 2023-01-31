import React, { FunctionComponent } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { Tag } from '@navikt/ds-react';

import DiskresjonskodeType from '../../../kodeverk/diskresjonskodeType';

interface OwnProps {
  erDod?: boolean;
  diskresjonskode?: string;
}

/**
 * MerkePanel
 *
 * Definerer visning av personens merkinger. (Søker)
 *
 * Eksempel:
 * ```html
 *  <MerkePanel erDod={false} diskresjonskode="SPSF"  />
 * ```
 */
const MerkePanel: FunctionComponent<OwnProps> = ({
  erDod,
  diskresjonskode,
}) => {
  const intl = useIntl();
  return (
    <>
      {erDod && (
        <Tag variant="info" title={intl.formatMessage({ id: 'MerkePanel.DodTittel' })}>
          <FormattedMessage id="MerkePanel.Dod" />
        </Tag>
      )}
      {diskresjonskode === DiskresjonskodeType.KODE6 && !erDod && (
        <Tag variant="error" title={intl.formatMessage({ id: 'MerkePanel.Diskresjon6Tittel' })}>
          <FormattedMessage id="MerkePanel.Diskresjon6" />
        </Tag>
      )}

      {diskresjonskode === DiskresjonskodeType.KODE7 && !erDod && (
        <Tag variant="warning" title={intl.formatMessage({ id: 'MerkePanel.Diskresjon7Tittel' })}>
          <FormattedMessage id="MerkePanel.Diskresjon7" />
        </Tag>
      )}
    </>
  );
};

MerkePanel.defaultProps = {
  diskresjonskode: '',
  erDod: false,
};

export default MerkePanel;
