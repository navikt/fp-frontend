import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { Tag } from '@navikt/ds-react';

import { DiskresjonskodeType } from '../../kodeverk/diskresjonskodeType';

interface Props {
  erDød?: boolean;
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
export const MerkePanel = ({ erDød = false, diskresjonskode }: Props) => {
  const intl = useIntl();
  return (
    <>
      {erDød && (
        <Tag variant="info" title={intl.formatMessage({ id: 'MerkePanel.DodTittel' })}>
          <FormattedMessage id="MerkePanel.Dod" />
        </Tag>
      )}
      {diskresjonskode === DiskresjonskodeType.KODE6 && !erDød && (
        <Tag variant="error" title={intl.formatMessage({ id: 'MerkePanel.Diskresjon6Tittel' })}>
          <FormattedMessage id="MerkePanel.Diskresjon6" />
        </Tag>
      )}

      {diskresjonskode === DiskresjonskodeType.KODE7 && !erDød && (
        <Tag variant="warning" title={intl.formatMessage({ id: 'MerkePanel.Diskresjon7Tittel' })}>
          <FormattedMessage id="MerkePanel.Diskresjon7" />
        </Tag>
      )}
    </>
  );
};
