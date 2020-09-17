import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import { VerticalSpacer, PeriodLabel } from '@fpsak-frontend/shared-components';
import { Arbeidsforhold } from '@fpsak-frontend/types';

const utledPermisjonLabelID = (arbeidsforhold: any) => {
  if (arbeidsforhold.permisjoner.length > 1) {
    return 'PersonArbeidsforholdDetailForm.Permisjoner';
  }
  return 'PersonArbeidsforholdDetailForm.Permisjon';
};

const utledPeriodeLabelKey = (id: any, index: any) => id + index;

interface OwnProps {
  arbeidsforhold: Arbeidsforhold;
}

const PermisjonPeriode: FunctionComponent<OwnProps> = ({
  arbeidsforhold,
}) => (
  <>
    { arbeidsforhold.permisjoner && arbeidsforhold.permisjoner.length > 0 && (
      <div>
        <VerticalSpacer sixteenPx />
        <Normaltekst>
          <FormattedMessage id={utledPermisjonLabelID(arbeidsforhold)} />
        </Normaltekst>
        { arbeidsforhold.permisjoner.map((permisjon, index) => (
          <div key={utledPeriodeLabelKey(arbeidsforhold.id, index)}>
            <PeriodLabel
              dateStringFom={permisjon.permisjonFom}
              dateStringTom={permisjon.permisjonTom ? permisjon.permisjonTom : ''}
            />
          </div>
        ))}
        <VerticalSpacer sixteenPx />
      </div>
    )}
  </>
);

export default PermisjonPeriode;
