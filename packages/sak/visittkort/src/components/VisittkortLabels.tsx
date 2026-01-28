import { FormattedMessage, useIntl } from 'react-intl';

import { Tag, Tooltip } from '@navikt/ds-react';
import { dateFormat } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type { Person } from '@navikt/fp-types';

interface Props {
  fagsakPerson: Person;
  harVergeIÅpenBehandling?: boolean;
}

export const VisittkortLabels = ({ fagsakPerson, harVergeIÅpenBehandling = false }: Props) => {
  const intl = useIntl();
  const erSokerUnder18 = dayjs().diff(fagsakPerson.fødselsdato, 'years') < 18;
  return (
    <>
      {fagsakPerson.dødsdato && (
        <Tooltip content={intl.formatMessage({ id: 'VisittkortLabels.DodTittel' })} placement="bottom">
          <Tag data-color="neutral" variant="outline" size="small">
            <FormattedMessage id="VisittkortLabels.Dod" values={{ dato: dateFormat(fagsakPerson.dødsdato) }} />
          </Tag>
        </Tooltip>
      )}
      {fagsakPerson.diskresjonskode === 'SPSF' && //KODE6
        !fagsakPerson.dødsdato && (
          <Tooltip content={intl.formatMessage({ id: 'VisittkortLabels.Diskresjon6Tittel' })} placement="bottom">
            <Tag data-color="danger" variant="outline" size="small">
              <FormattedMessage id="VisittkortLabels.Diskresjon6" />
            </Tag>
          </Tooltip>
        )}
      {fagsakPerson.diskresjonskode === 'SPFO' && //KODE7
        !fagsakPerson.dødsdato && (
          <Tooltip content={intl.formatMessage({ id: 'VisittkortLabels.Diskresjon7Tittel' })} placement="bottom">
            <Tag data-color="warning" variant="outline" size="small">
              <FormattedMessage id="VisittkortLabels.Diskresjon7" />
            </Tag>
          </Tooltip>
        )}
      {harVergeIÅpenBehandling && !fagsakPerson.dødsdato && (
        <Tooltip content={intl.formatMessage({ id: 'VisittkortLabels.VergeTittel' })} placement="bottom">
          <Tag data-color="info" variant="outline" size="small">
            <FormattedMessage id="VisittkortLabels.Verge" />
          </Tag>
        </Tooltip>
      )}
      {erSokerUnder18 && (
        <Tooltip content={intl.formatMessage({ id: 'VisittkortLabels.Under18Tittel' })} placement="bottom">
          <Tag data-color="info" variant="outline" size="small">
            <FormattedMessage id="VisittkortLabels.Under18" />
          </Tag>
        </Tooltip>
      )}
    </>
  );
};
