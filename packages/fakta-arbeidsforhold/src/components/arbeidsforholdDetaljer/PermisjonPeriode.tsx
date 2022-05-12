import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';
import { Arbeidsforhold } from '@fpsak-frontend/types';
import { VerticalSpacer, PeriodLabel } from '@navikt/ft-ui-komponenter';

const utledPermisjonLabelID = (arbeidsforhold: Arbeidsforhold): string => {
  if (arbeidsforhold.permisjoner.length > 1) {
    return 'PermisjonPeriode.Permisjoner';
  }
  return 'PermisjonPeriode.Permisjon';
};

const utledPeriodeLabelKey = (id: string, index: number): string => id + index;

interface OwnProps {
  arbeidsforhold: Arbeidsforhold;
}

const PermisjonPeriode: FunctionComponent<OwnProps> = ({
  arbeidsforhold,
}) => {
  if (arbeidsforhold.permisjoner && arbeidsforhold.permisjoner.length > 0) {
    return (
      <>
        <VerticalSpacer sixteenPx />
        <Normaltekst>
          <FormattedMessage id={utledPermisjonLabelID(arbeidsforhold)} />
        </Normaltekst>
        {arbeidsforhold.permisjoner.map((permisjon, index) => (
          <div key={utledPeriodeLabelKey(arbeidsforhold.id, index)}>
            <Normaltekst>
              <PeriodLabel
                dateStringFom={permisjon.permisjonFom}
                dateStringTom={permisjon.permisjonTom ? permisjon.permisjonTom : ''}
              />
            </Normaltekst>
          </div>
        ))}
        <VerticalSpacer sixteenPx />
      </>
    );
  }
  return null;
};

export default PermisjonPeriode;
