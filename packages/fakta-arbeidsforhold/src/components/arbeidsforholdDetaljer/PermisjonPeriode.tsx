import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Label, BodyShort } from '@navikt/ds-react';
import { AoIArbeidsforhold } from '@fpsak-frontend/types';
import { VerticalSpacer, PeriodLabel } from '@navikt/ft-ui-komponenter';

interface OwnProps {
  arbeidsforhold: AoIArbeidsforhold;
}

const PermisjonPeriode: FunctionComponent<OwnProps> = ({
  arbeidsforhold,
}) => {
  if (arbeidsforhold.permisjonOgMangel) {
    return (
      <>
        <VerticalSpacer sixteenPx />
        <Label size="small">
          <FormattedMessage id="PermisjonPeriode.Permisjon" />
        </Label>
        <BodyShort size="small">
          <PeriodLabel
            dateStringFom={arbeidsforhold.permisjonOgMangel.permisjonFom}
            dateStringTom={arbeidsforhold.permisjonOgMangel.permisjonTom ? arbeidsforhold.permisjonOgMangel.permisjonTom : ''}
          />
        </BodyShort>
        <VerticalSpacer sixteenPx />
      </>
    );
  }
  return null;
};

export default PermisjonPeriode;
