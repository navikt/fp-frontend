import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import { VerticalSpacer, PeriodLabel } from '@navikt/ft-ui-komponenter';

import CustomArbeidsforhold from '../../typer/CustomArbeidsforholdTsType';

const utledPermisjonLabelID = (arbeidsforhold: CustomArbeidsforhold): string => {
  if (arbeidsforhold.permisjoner.length > 1) {
    return 'PersonArbeidsforholdDetailForm.Permisjoner';
  }
  return 'PersonArbeidsforholdDetailForm.Permisjon';
};

const utledPeriodeLabelKey = (id: string, index: number): string => id + index;

interface OwnProps {
  arbeidsforhold: CustomArbeidsforhold;
}

const PermisjonPeriode: FunctionComponent<OwnProps> = ({
  arbeidsforhold,
}) => {
  if (arbeidsforhold.permisjoner && arbeidsforhold.permisjoner.length > 0) {
    return (
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
    );
  }
  return null;
};

export default PermisjonPeriode;
