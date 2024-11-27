import React from 'react';
import { FormattedMessage,useIntl } from 'react-intl';

import { Tag, Tooltip } from '@navikt/ds-react';
import { dateFormat } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { DiskresjonskodeType } from '@navikt/fp-kodeverk';
import { FagsakPerson } from '@navikt/fp-types';

interface Props {
  fagsakPerson: FagsakPerson;
  harVerge: boolean;
}

export const VisittkortLabels = ({ fagsakPerson, harVerge }: Props) => {
  const intl = useIntl();
  const erSokerUnder18 = dayjs().diff(fagsakPerson.fødselsdato, 'years') < 18;
  return (
    <>
      {fagsakPerson.dødsdato && (
        <Tooltip content={intl.formatMessage({ id: 'VisittkortLabels.DodTittel' })} placement="bottom">
          <Tag variant="neutral" size="small">
            <FormattedMessage id="VisittkortLabels.Dod" values={{ dato: dateFormat(fagsakPerson.dødsdato) }} />
          </Tag>
        </Tooltip>
      )}
      {fagsakPerson.diskresjonskode === DiskresjonskodeType.KODE6 && !fagsakPerson.dødsdato && (
        <Tooltip content={intl.formatMessage({ id: 'VisittkortLabels.Diskresjon6Tittel' })} placement="bottom">
          <Tag variant="error" size="small">
            <FormattedMessage id="VisittkortLabels.Diskresjon6" />
          </Tag>
        </Tooltip>
      )}
      {fagsakPerson.diskresjonskode === DiskresjonskodeType.KODE7 && !fagsakPerson.dødsdato && (
        <Tooltip content={intl.formatMessage({ id: 'VisittkortLabels.Diskresjon7Tittel' })} placement="bottom">
          <Tag variant="warning" size="small">
            <FormattedMessage id="VisittkortLabels.Diskresjon7" />
          </Tag>
        </Tooltip>
      )}
      {harVerge && !fagsakPerson.dødsdato && (
        <Tooltip content={intl.formatMessage({ id: 'VisittkortLabels.VergeTittel' })} placement="bottom">
          <Tag variant="info" size="small">
            <FormattedMessage id="VisittkortLabels.Verge" />
          </Tag>
        </Tooltip>
      )}
      {erSokerUnder18 && (
        <Tooltip content={intl.formatMessage({ id: 'VisittkortLabels.Under18Tittel' })} placement="bottom">
          <Tag variant="info" size="small">
            <FormattedMessage id="VisittkortLabels.Under18" />
          </Tag>
        </Tooltip>
      )}
    </>
  );
};
