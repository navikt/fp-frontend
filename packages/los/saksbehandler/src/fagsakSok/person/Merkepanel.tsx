import { FormattedMessage, useIntl } from 'react-intl';

import { Tag, Tooltip } from '@navikt/ds-react';
import { dateFormat } from '@navikt/ft-utils';

import { DiskresjonskodeType } from '../../kodeverk/diskresjonskodeType';

interface Props {
  diskresjonskode: string | undefined;
  dødsdato: string | undefined;
}

export const MerkePanel = ({ diskresjonskode, dødsdato }: Props) => {
  const intl = useIntl();
  return (
    <>
      {dødsdato && (
        <Tooltip content={intl.formatMessage({ id: 'MerkePanel.DodTittel' })} placement="bottom">
          <Tag data-color="neutral" variant="outline" size="small">
            <FormattedMessage id="MerkePanel.Dod" values={{ dødsdato: dateFormat(dødsdato) }} />
          </Tag>
        </Tooltip>
      )}
      {diskresjonskode === DiskresjonskodeType.KODE6 && (
        <Tooltip content={intl.formatMessage({ id: 'MerkePanel.Diskresjon6Tittel' })} placement="bottom">
          <Tag data-color="danger" variant="outline" size="small">
            <FormattedMessage id="MerkePanel.Diskresjon6" />
          </Tag>
        </Tooltip>
      )}
      {diskresjonskode === DiskresjonskodeType.KODE7 && (
        <Tooltip content={intl.formatMessage({ id: 'MerkePanel.Diskresjon7Tittel' })} placement="bottom">
          <Tag data-color="warning" variant="outline" size="small">
            <FormattedMessage id="MerkePanel.Diskresjon7" />
          </Tag>
        </Tooltip>
      )}
    </>
  );
};
