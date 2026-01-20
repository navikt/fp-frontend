import { FormattedMessage, useIntl } from 'react-intl';

import { ExclamationmarkTriangleFillIcon, PersonPencilFillIcon } from '@navikt/aksel-icons';
import { Tag } from '@navikt/ds-react';
import dayjs from 'dayjs';

import styles from './markering.module.css';

export const ErEndretMarkering = ({
  første,
  andre,
}: {
  første: string | number | boolean | undefined;
  andre: string | number | boolean | undefined;
}) => {
  const intl = useIntl();
  return første === andre ? null : (
    <PersonPencilFillIcon
      className={styles['erEndretIcon']}
      aria-label={intl.formatMessage({ id: 'Label.ErEndret' })}
      width={20}
      height={20}
    />
  );
};

export const Over15Markering = ({ fødselsdato }: { fødselsdato: string }) => {
  return erOver15År(fødselsdato) ? (
    <Tag
      data-color="warning"
      variant="outline"
      size="small"
      className={styles['erEndretIcon']}
      icon={<ExclamationmarkTriangleFillIcon color="var(--ax-warning-700)" />}>
      <FormattedMessage id="FaktaSammenligning.Over15År" />
    </Tag>
  ) : null;
};

const erOver15År = (fødselsdato: string): boolean => {
  return dayjs(fødselsdato).add(15, 'year').isBefore(dayjs());
};
