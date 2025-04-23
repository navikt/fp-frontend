import { FormattedMessage } from 'react-intl';

import { BodyShort, Label } from '@navikt/ds-react';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';

import type { AoIArbeidsforhold } from '@navikt/fp-types';

interface Props {
  arbeidsforhold: AoIArbeidsforhold;
}

export const PermisjonPeriode = ({ arbeidsforhold }: Props) => {
  if (arbeidsforhold.permisjonOgMangel) {
    return (
      <div>
        <Label size="small">
          <FormattedMessage id="PermisjonPeriode.Permisjon" />
        </Label>
        <BodyShort size="small">
          <PeriodLabel
            dateStringFom={arbeidsforhold.permisjonOgMangel.permisjonFom}
            dateStringTom={arbeidsforhold.permisjonOgMangel.permisjonTom}
          />
        </BodyShort>
      </div>
    );
  }
  return null;
};
