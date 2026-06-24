import { FormattedMessage } from 'react-intl';

import dayjs from 'dayjs';

interface Props {
  erDød: boolean;
  fødselsdato: string;
}

export const Aldersvisning = ({ erDød, fødselsdato }: Props) => {
  if (erDød) {
    return null;
  }

  const alder = dayjs().diff(fødselsdato, 'years');

  return (
    <span>
      <FormattedMessage id="Person.Age" values={{ age: alder }} />
    </span>
  );
};
