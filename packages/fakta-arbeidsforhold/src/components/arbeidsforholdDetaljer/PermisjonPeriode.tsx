import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Element, Normaltekst } from 'nav-frontend-typografi';
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
        <Element>
          <FormattedMessage id="PermisjonPeriode.Permisjon" />
        </Element>
        <Normaltekst>
          <PeriodLabel
            dateStringFom={arbeidsforhold.permisjonOgMangel.permisjonFom}
            dateStringTom={arbeidsforhold.permisjonOgMangel.permisjonTom ? arbeidsforhold.permisjonOgMangel.permisjonTom : ''}
          />
        </Normaltekst>
        <VerticalSpacer sixteenPx />
      </>
    );
  }
  return null;
};

export default PermisjonPeriode;
