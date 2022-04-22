import React, { useMemo, FunctionComponent } from 'react';
import moment from 'moment';
import { useIntl, FormattedMessage } from 'react-intl';
import {
  EtikettInfo, EtikettAdvarsel, EtikettFokus,
} from 'nav-frontend-etiketter';
import { Tooltip } from '@navikt/ft-ui-komponenter';

import diskresjonskodeType from '@fpsak-frontend/kodeverk/src/diskresjonskodeType';
import { FagsakPerson } from '@fpsak-frontend/types';
import { dateFormat } from '@navikt/ft-utils';

import styles from './visittkortLabels.less';

interface OwnProps {
  fagsakPerson: FagsakPerson;
  harVerge: boolean;
}

const VisittkortLabels: FunctionComponent<OwnProps> = ({
  fagsakPerson,
  harVerge,
}) => {
  const intl = useIntl();
  const erSokerUnder18 = useMemo(() => moment().diff(fagsakPerson.fødselsdato, 'years') < 18, [fagsakPerson]);
  return (
    <>
      {fagsakPerson.dodsdato && (
        <Tooltip content={intl.formatMessage({ id: 'VisittkortLabels.DodTittel' })} alignBottom>
          <EtikettInfo className={styles.etikett}>
            <FormattedMessage id="VisittkortLabels.Dod" values={{ dato: dateFormat(fagsakPerson.dodsdato) }} />
          </EtikettInfo>
        </Tooltip>
      )}
      {fagsakPerson.diskresjonskode === diskresjonskodeType.KODE6 && !fagsakPerson.dodsdato && (
        <Tooltip content={intl.formatMessage({ id: 'VisittkortLabels.Diskresjon6Tittel' })} alignBottom>
          <EtikettAdvarsel className={styles.etikett}>
            <FormattedMessage id="VisittkortLabels.Diskresjon6" />
          </EtikettAdvarsel>
        </Tooltip>
      )}
      {fagsakPerson.diskresjonskode === diskresjonskodeType.KODE7 && !fagsakPerson.dodsdato && (
        <Tooltip content={intl.formatMessage({ id: 'VisittkortLabels.Diskresjon7Tittel' })} alignBottom>
          <EtikettFokus className={styles.etikett}>
            <FormattedMessage id="VisittkortLabels.Diskresjon7" />
          </EtikettFokus>
        </Tooltip>
      )}
      {harVerge && !fagsakPerson.dodsdato && (
        <Tooltip content={intl.formatMessage({ id: 'VisittkortLabels.VergeTittel' })} alignBottom>
          <EtikettInfo className={styles.etikett}>
            <FormattedMessage id="VisittkortLabels.Verge" />
          </EtikettInfo>
        </Tooltip>
      )}
      {erSokerUnder18 && (
        <Tooltip content={intl.formatMessage({ id: 'VisittkortLabels.Under18Tittel' })} alignBottom>
          <EtikettInfo className={styles.etikett}>
            <FormattedMessage id="VisittkortLabels.Under18" />
          </EtikettInfo>
        </Tooltip>
      )}
    </>
  );
};

export default VisittkortLabels;
