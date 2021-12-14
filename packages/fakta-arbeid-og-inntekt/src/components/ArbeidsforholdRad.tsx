import React, {
  FunctionComponent, useState,
} from 'react';
import { IntlShape, useIntl } from 'react-intl';
import { Normaltekst, Element, Undertekst } from 'nav-frontend-typografi';

import { AoIArbeidsforhold } from '@fpsak-frontend/types';
import advarselIkonUrl from '@fpsak-frontend/assets/images/advarsel2.svg';
import okIkonUrl from '@fpsak-frontend/assets/images/check.svg';
import {
  Image, TableColumn, PeriodLabel, DateTimeLabel, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import { TIDENES_ENDE } from '@fpsak-frontend/utils';
import ExpandableTableRow from './ExpandableTableRow';
import NyttArbeidsforholdForm, { FormValues as NyttArbeidsforholdFormValues } from './NyttArbeidsforholdForm';
import ManglendeOpplysningerForm, { FormValuesForManglendeArbeidsforhold } from './ManglendeOpplysningerForm';
import InntektsmeldingOpplysningerPanel from './InntektsmeldingOpplysningerPanel';
import InntektsmeldingInnhentesForm, { FormValuesForManglendeInntektsmelding } from './InntektsmeldingInnhentesForm';
import ArbeidsforholdOgInntekt from '../types/arbeidsforholdOgInntekt';

export const MANUELT_ORG_NR = '342352362';

const finnKilde = (
  intl: IntlShape,
  erManueltOpprettet: boolean,
  arbeidsforhold?: AoIArbeidsforhold,
) => {
  if (erManueltOpprettet) {
    return intl.formatMessage({ id: 'ArbeidsforholdRad.Saksbehandler' });
  }
  if (arbeidsforhold) {
    return intl.formatMessage({ id: 'ArbeidsforholdRad.AaRegisteret' });
  }
  return intl.formatMessage({ id: 'ArbeidsforholdRad.Inntektsmelding' });
};

interface OwnProps {
  skjæringspunktDato: string;
  arbeidsforholdOgInntekt: ArbeidsforholdOgInntekt;
  isReadOnly: boolean;
  lagreNyttArbeidsforhold: (formValues: NyttArbeidsforholdFormValues) => Promise<any>;
  slettNyttArbeidsforhold: () => Promise<any>;
  lagreManglendeArbeidsforhold: (formValues: FormValuesForManglendeArbeidsforhold) => Promise<any>;
  lagreManglendeInntekstmelding: (formValues: FormValuesForManglendeInntektsmelding) => Promise<any>;
  oppdaterÅpenRad: (erÅpen: boolean) => void;
  erOverstyrt: boolean;
}

const ArbeidsforholdRad: FunctionComponent<OwnProps> = ({
  skjæringspunktDato,
  arbeidsforholdOgInntekt,
  isReadOnly,
  lagreNyttArbeidsforhold,
  slettNyttArbeidsforhold,
  lagreManglendeArbeidsforhold,
  lagreManglendeInntekstmelding,
  oppdaterÅpenRad,
  erOverstyrt,
}) => {
  const intl = useIntl();

  const {
    arbeidsforhold, arbeidsforholdNavn, inntektsposter, inntektsmelding,
  } = arbeidsforholdOgInntekt;

  const [erRadEkspandert, toggleEkspandertRad] = useState(false);
  const toggleRad = (erApen: boolean) => {
    oppdaterÅpenRad(erApen);
    toggleEkspandertRad(erApen);
  };

  const erManueltOpprettet = arbeidsforhold?.arbeidsgiverIdent === MANUELT_ORG_NR;
  const harArbeidsforholdOgInntektsmelding = arbeidsforhold && inntektsmelding;
  const manglerInntektsmelding = arbeidsforhold && !erManueltOpprettet && !inntektsmelding;
  const manglerArbeidsforhold = !arbeidsforhold && inntektsmelding;
  const harIngenAksjonspunkt = erManueltOpprettet || harArbeidsforholdOgInntektsmelding;

  const aIdent = arbeidsforhold?.arbeidsgiverIdent || inntektsmelding?.arbeidsgiverIdent;

  return (
    <ExpandableTableRow
      content={(
        <>
          {erManueltOpprettet && (
            <NyttArbeidsforholdForm
              isReadOnly={false}
              lagreNyttArbeidsforhold={lagreNyttArbeidsforhold}
              slettNyttArbeidsforhold={slettNyttArbeidsforhold}
              arbeidsforhold={arbeidsforhold}
              arbeidsforholdNavn={arbeidsforholdNavn}
              avbrytEditering={() => toggleRad(false)}
              erOverstyrt={erOverstyrt}
            />
          )}
          {harArbeidsforholdOgInntektsmelding && (
            <>
              <InntektsmeldingOpplysningerPanel
                stillingsprosent={arbeidsforhold.stillingsprosent}
                inntektsmelding={inntektsmelding}
              />
              <VerticalSpacer thirtyTwoPx />
            </>
          )}
          {manglerInntektsmelding && (
            <InntektsmeldingInnhentesForm
              skjæringspunktDato={skjæringspunktDato}
              inntektsposter={inntektsposter}
              isReadOnly={isReadOnly}
              arbeidsforhold={arbeidsforhold}
              lagreManglendeInntekstmelding={lagreManglendeInntekstmelding}
              avbrytEditering={() => toggleRad(false)}
            />
          )}
          {manglerArbeidsforhold && (
            <ManglendeOpplysningerForm
              inntektsmelding={inntektsmelding}
              isReadOnly={isReadOnly}
              lagreManglendeArbeidsforhold={lagreManglendeArbeidsforhold}
              avbrytEditering={() => toggleRad(false)}
            />
          )}
        </>
      )}
      showContent={erRadEkspandert}
      toggleContent={toggleRad}
      isApLeftBorder={!harIngenAksjonspunkt}
    >
      <TableColumn>
        {harIngenAksjonspunkt && (
          <Image alt={intl.formatMessage({ id: 'ArbeidsforholdRad.Aksjonspunkt' })} src={okIkonUrl} />
        )}
        {!harIngenAksjonspunkt && (
          <Image alt={intl.formatMessage({ id: 'ArbeidsforholdRad.Ok' })} src={advarselIkonUrl} />
        )}
      </TableColumn>
      <TableColumn>
        {erRadEkspandert && (
          <>
            <Element>
              {arbeidsforholdNavn}
            </Element>
            {aIdent && (
              <Undertekst>
                (
                {aIdent}
                )
              </Undertekst>
            )}
          </>
        )}
        {!erRadEkspandert && (
          <Normaltekst>
            {arbeidsforholdNavn}
          </Normaltekst>
        )}
      </TableColumn>
      <TableColumn>
        <Normaltekst>
          {arbeidsforhold && (
          <PeriodLabel dateStringFom={arbeidsforhold.fom} dateStringTom={arbeidsforhold.tom !== TIDENES_ENDE ? arbeidsforhold.tom : undefined} />
          )}
          {!arbeidsforhold && '-'}
        </Normaltekst>
      </TableColumn>
      <TableColumn>
        <Normaltekst>
          {finnKilde(intl, erManueltOpprettet, arbeidsforhold)}
        </Normaltekst>
      </TableColumn>
      <TableColumn>
        <Normaltekst>
          {inntektsmelding?.motattDato && (
          <DateTimeLabel dateTimeString={inntektsmelding.motattDato} useNewFormat />
          )}
          {!inntektsmelding?.motattDato && '-'}
        </Normaltekst>
      </TableColumn>
    </ExpandableTableRow>
  );
};

export default ArbeidsforholdRad;
