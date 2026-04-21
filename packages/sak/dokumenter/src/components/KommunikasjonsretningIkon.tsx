import { useIntl } from 'react-intl';

import { ChevronLeftCircleFillIcon, ChevronRightCircleFillIcon, NotePencilFillIcon } from '@navikt/aksel-icons';

import type { Dokument } from '@navikt/fp-types';

import styles from './documentList.module.css';

interface Props {
  kommunikasjonsretning: Dokument['kommunikasjonsretning'];
}
export const KommunikasjonsretningIkon = ({ kommunikasjonsretning }: Props) => {
  const intl = useIntl();

  if (kommunikasjonsretning === 'INN') {
    const mottaText = intl.formatMessage({ id: 'DocumentList.Motta' });
    return (
      <span className={styles['kommunikasjonsretning']}>
        <ChevronRightCircleFillIcon color="var(--ax-meta-purple-900)" fontSize="1.5rem" title={mottaText} />
        {mottaText}
      </span>
    );
  }
  if (kommunikasjonsretning === 'UT') {
    const sendText = intl.formatMessage({ id: 'DocumentList.Send' });
    return (
      <span className={styles['kommunikasjonsretning']}>
        <ChevronLeftCircleFillIcon color="var(--ax-meta-purple-500)" fontSize="1.5rem" title={sendText} />
        {sendText}
      </span>
    );
  }
  const internText = intl.formatMessage({ id: 'DocumentList.Intern' });
  return (
    <span className={styles['kommunikasjonsretning']}>
      <NotePencilFillIcon color="var(--ax-neutral-800)" fontSize="1.5rem" title={internText} />
      {internText}
    </span>
  );
};
