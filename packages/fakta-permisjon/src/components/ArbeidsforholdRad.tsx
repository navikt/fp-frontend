import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Normaltekst, Element, Undertekst } from 'nav-frontend-typografi';

import advarselIkonUrl from '@fpsak-frontend/assets/images/advarsel2.svg';
import okIkonUrl from '@fpsak-frontend/assets/images/check.svg';
import {
  Image, TableColumn, PeriodLabel, DateTimeLabel, ExpandableTableRow,
} from '@fpsak-frontend/shared-components';
import { TIDENES_ENDE } from '@fpsak-frontend/utils';
import VurderArbeidsforholdForm from './VurderArbeidsforholdForm';
import ArbeidsforholdOgInntekt from '../types/arbeidsforholdOgInntekt';

interface OwnProps {
  saksnummer: string;
  arbeidsforholdOgInntekt: ArbeidsforholdOgInntekt;
  isReadOnly: boolean;
  oppdaterTabell: React.Dispatch<React.SetStateAction<ArbeidsforholdOgInntekt[]>>
  toggleÅpenRad: () => void;
  erRadÅpen: boolean;
  harÅpentAksjonspunkt: boolean;
}

const ArbeidsforholdRad: FunctionComponent<OwnProps> = ({
  saksnummer,
  arbeidsforholdOgInntekt,
  isReadOnly,
  oppdaterTabell,
  toggleÅpenRad,
  erRadÅpen,
  harÅpentAksjonspunkt,
}) => {
  const intl = useIntl();

  const {
    arbeidsforhold, arbeidsgiverNavn, inntektsmelding,
  } = arbeidsforholdOgInntekt;

  return (
    <ExpandableTableRow
      content={(
        <VurderArbeidsforholdForm
          saksnummer={saksnummer}
          inntektsmelding={inntektsmelding}
          arbeidsforhold={arbeidsforhold}
          isReadOnly={isReadOnly}
          lukkArbeidsforholdRad={toggleÅpenRad}
          oppdaterTabell={oppdaterTabell}
        />
      )}
      showContent={erRadÅpen}
      toggleContent={toggleÅpenRad}
      isApLeftBorder={harÅpentAksjonspunkt}
    >
      <TableColumn>
        {!harÅpentAksjonspunkt && (
          <Image alt={intl.formatMessage({ id: 'ArbeidsforholdRad.Ok' })} src={okIkonUrl} />
        )}
        {harÅpentAksjonspunkt && (
          <Image alt={intl.formatMessage({ id: 'ArbeidsforholdRad.Aksjonspunkt' })} src={advarselIkonUrl} />
        )}
      </TableColumn>
      <TableColumn>
        <Element>
          {arbeidsgiverNavn}
        </Element>
        {arbeidsforhold.arbeidsgiverIdent && (
          <Undertekst>
            (
            {arbeidsforhold.arbeidsgiverIdent}
            )
          </Undertekst>
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
          <FormattedMessage id={arbeidsforhold ? 'ArbeidsforholdRad.AaRegisteret' : 'ArbeidsforholdRad.Inntektsmelding'} />
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
