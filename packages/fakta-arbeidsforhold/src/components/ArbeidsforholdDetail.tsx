import { FaktaGruppe, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import CustomArbeidsforhold from '../typer/CustomArbeidsforholdTsType';
import PermisjonPeriode from './arbeidsforholdDetaljer/PermisjonPeriode';

interface PureOwnProps {
  valgtArbeidsforhold: CustomArbeidsforhold;
}

/**
 * ArbeidsforholdInfoPanelImpl:
 * Ansvarlig for å rendre aksjonspunktteksten, arbeidsforholdene, og
 * bekreft & fortsett knappen
 * */
const ArbeidsforholdDetail: FunctionComponent<PureOwnProps> = ({
  valgtArbeidsforhold,
}) => {
  const søkerErIPermisjon = valgtArbeidsforhold.brukArbeidsforholdet === true
    && valgtArbeidsforhold.permisjoner
    && valgtArbeidsforhold.permisjoner.length > 0;

  return (
    <>
      <VerticalSpacer thirtyTwoPx />
      <FaktaGruppe>
        <Element><FormattedMessage id="PersonArbeidsforholdDetailForm.Header" /></Element>
        <PermisjonPeriode arbeidsforhold={valgtArbeidsforhold} />
        {valgtArbeidsforhold.brukArbeidsforholdet === true && valgtArbeidsforhold.brukMedJustertPeriode === true && (
          <>
            <FormattedMessage id="PersonArbeidsforholdDetailForm.ArbeidsforholdetErIkkeAktivt" />
            <FormattedMessage id="PersonArbeidsforholdDetailForm.ArbeidsforholdetAktivTomDato" />
            {valgtArbeidsforhold.overstyrtTom}
          </>
        )}
        {søkerErIPermisjon && valgtArbeidsforhold.brukPermisjon && (
          <FormattedMessage id="PersonArbeidsforholdDetailForm.SokerErIPermisjon" />
        )}
        {søkerErIPermisjon && !valgtArbeidsforhold.brukPermisjon && (
          <>
            <FormattedMessage id="PersonArbeidsforholdDetailForm.ArbeidsforholdErAktivtOgHarPermisjonMenSoekerErIkkePermisjon" />
            {valgtArbeidsforhold.fortsettBehandlingUtenInntektsmelding && (
              <FormattedMessage id="PersonArbeidsforholdDetailForm.BenyttAInntektIBeregningsgrunnlag" />
            )}
            {!valgtArbeidsforhold.fortsettBehandlingUtenInntektsmelding && (
              <FormattedMessage id="PersonArbeidsforholdDetailForm.AvslaYtelseManglendeOpplysninger" />
            )}
          </>
        )}
        {valgtArbeidsforhold.brukArbeidsforholdet === false && (
          <FormattedMessage id="PersonArbeidsforholdDetailForm.FjernArbeidsforholdet" />
        )}
        <Element><FormattedMessage id="PersonArbeidsforholdDetailForm.Begrunnelse" /></Element>
        <Normaltekst>{valgtArbeidsforhold.begrunnelse}</Normaltekst>
      </FaktaGruppe>
    </>
  );
};

export default ArbeidsforholdDetail;
