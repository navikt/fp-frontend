import { useIntl } from 'react-intl';

import { PersonPencilFillIcon } from '@navikt/aksel-icons';

import styles from './erEndret.module.css';

export const ErEndret = ({
  første,
  andre,
}: {
  første: string | number | boolean | undefined;
  andre: string | number | boolean | undefined;
}) => {
  const intl = useIntl();
  return første !== andre ? (
    <PersonPencilFillIcon
      className={styles['erEndretIcon']}
      aria-label={intl.formatMessage({ id: 'Label.ErEndret' })}
      width={20}
      height={20}
    />
  ) : null;
};
