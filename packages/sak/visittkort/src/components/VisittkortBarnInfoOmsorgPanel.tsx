import { FormattedMessage } from 'react-intl';

import { BodyShort } from '@navikt/ds-react';
import { dateFormat } from '@navikt/ft-utils';

import type { FagsakHendelse } from '@navikt/fp-types';

interface Props {
  familiehendelse: FagsakHendelse;
}

export const VisittkortBarnInfoOmsorgPanel = ({ familiehendelse }: Props) => {
  const { hendelseDato, antallBarn } = familiehendelse;
  return (
    <BodyShort>
      <FormattedMessage
        id="VisittkortBarnInfoOmsorgPanel.Omsorgovertakelse"
        values={{ antallBarn, dato: hendelseDato ? dateFormat(hendelseDato) : '-' }}
      />
    </BodyShort>
  );
};
