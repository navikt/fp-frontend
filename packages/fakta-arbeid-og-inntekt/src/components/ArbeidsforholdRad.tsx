import React, {
  FunctionComponent, useState,
} from 'react';
import { IntlShape, useIntl } from 'react-intl';

import { AoIArbeidsforhold } from '@fpsak-frontend/types';
import advarselIkonUrl from '@fpsak-frontend/assets/images/advarsel2.svg';
import okIkonUrl from '@fpsak-frontend/assets/images/check.svg';
import {
  Image, TableColumn, PeriodLabel, DateTimeLabel, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import ExpandableTableRow from './ExpandableTableRow';
import NyttArbeidsforholdForm, { FormValues as NyttArbeidsforholdFormValues } from './NyttArbeidsforholdForm';
import ManglendeOpplysningerForm, { FormValuesForManglendeArbeidsforhold } from './ManglendeOpplysningerForm';
import InntektsmeldingOpplysningerPanel from './InntektsmeldingOpplysningerPanel';
import InntektsmeldingInnhentesForm, { FormValuesForManglendeInntektsmelding } from './InntektsmeldingInnhentesForm';
import ArbeidsforholdOgInntekt from '../types/arbeidsforholdOgInntekt';

const finnKilde = (
  intl: IntlShape,
  arbeidsforhold?: AoIArbeidsforhold,
  nyttArbeidsforholdId?: number,
) => {
  if (nyttArbeidsforholdId) {
    return intl.formatMessage({ id: 'ArbeidsforholdRad.Saksbehandler' });
  }
  if (arbeidsforhold) {
    return intl.formatMessage({ id: 'ArbeidsforholdRad.AaRegisteret' });
  }
  return intl.formatMessage({ id: 'ArbeidsforholdRad.Inntektsmelding' });
};

interface OwnProps {
  arbeidsforholdOgInntekt: ArbeidsforholdOgInntekt;
  isReadOnly: boolean;
  lagreNyttArbeidsforhold: (formValues: NyttArbeidsforholdFormValues) => Promise<any>;
  lagreManglendeArbeidsforhold: (formValues: FormValuesForManglendeArbeidsforhold) => void;
  lagreManglendeInntekstmelding: (formValues: FormValuesForManglendeInntektsmelding) => void;
  oppdaterÅpenRad: (erÅpen: boolean) => void;
}

const ArbeidsforholdRad: FunctionComponent<OwnProps> = ({
  arbeidsforholdOgInntekt,
  isReadOnly,
  lagreNyttArbeidsforhold,
  lagreManglendeArbeidsforhold,
  lagreManglendeInntekstmelding,
  oppdaterÅpenRad,
}) => {
  const intl = useIntl();

  const {
    nyttArbeidsforholdId, arbeidsforhold, arbeidsforholdNavn, inntektsposter, inntektsmelding,
  } = arbeidsforholdOgInntekt;

  const [erRadEkspandert, toggleEkspandertRad] = useState(false);
  const toggleRad = (erApen: boolean) => {
    oppdaterÅpenRad(erApen);
    toggleEkspandertRad(erApen);
  };

  const erArbeidsforholdLagetAvSaksbehandler = nyttArbeidsforholdId;
  const harIngenAksjonspunkt = arbeidsforhold && inntektsmelding;
  const manglerInntektsmelding = arbeidsforhold && !nyttArbeidsforholdId && !inntektsmelding;
  const manglerArbeidsforhold = !arbeidsforhold && inntektsmelding;

  return (
    <ExpandableTableRow
      content={(
        <>
          {erArbeidsforholdLagetAvSaksbehandler && (
            <NyttArbeidsforholdForm
              isReadOnly={false}
              lagreNyttArbeidsforhold={lagreNyttArbeidsforhold}
              arbeidsforhold={arbeidsforhold}
              arbeidsforholdNavn={arbeidsforholdNavn}
              avbrytEditering={() => toggleRad(false)}
              nyttArbeidsforholdId={nyttArbeidsforholdId}
            />
          )}
          {harIngenAksjonspunkt && (
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
        {arbeidsforholdNavn}
      </TableColumn>
      <TableColumn>
        {arbeidsforhold && (
        <PeriodLabel dateStringFom={arbeidsforhold.fom} dateStringTom={arbeidsforhold.tom} />
        )}
        {!arbeidsforhold && '-'}
      </TableColumn>
      <TableColumn>
        {finnKilde(intl, arbeidsforhold, nyttArbeidsforholdId)}
      </TableColumn>
      <TableColumn>
        {inntektsmelding?.motattDato && (
        <DateTimeLabel dateTimeString={inntektsmelding.motattDato} useNewFormat />
        )}
        {!inntektsmelding?.motattDato && '-'}
      </TableColumn>
    </ExpandableTableRow>
  );
};

export default ArbeidsforholdRad;
