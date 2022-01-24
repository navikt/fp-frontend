import React, {
  FunctionComponent, useCallback, useEffect, useState,
} from 'react';
import { IntlShape, useIntl } from 'react-intl';
import { Normaltekst, Element, Undertekst } from 'nav-frontend-typografi';

import {
  AoIArbeidsforhold, ManglendeInntektsmeldingVurdering, ManueltArbeidsforhold, AksjonspunktÅrsak,
} from '@fpsak-frontend/types';
import advarselIkonUrl from '@fpsak-frontend/assets/images/advarsel2.svg';
import okIkonUrl from '@fpsak-frontend/assets/images/check.svg';
import {
  Image, TableColumn, PeriodLabel, DateTimeLabel, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import ArbeidsforholdKomplettVurderingType from '@fpsak-frontend/kodeverk/src/arbeidsforholdKomplettVurderingType';
import { TIDENES_ENDE } from '@fpsak-frontend/utils';
import ExpandableTableRow from './ExpandableTableRow';
import NyttArbeidsforholdForm from './NyttArbeidsforholdForm';
import ManglendeOpplysningerForm from './ManglendeOpplysningerForm';
import InntektsmeldingOpplysningerPanel from './InntektsmeldingOpplysningerPanel';
import InntektsmeldingInnhentesForm from './InntektsmeldingInnhentesForm';
import ArbeidsforholdOgInntekt from '../types/arbeidsforholdOgInntekt';

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
  behandlingUuid: string;
  skjæringspunktDato: string;
  arbeidsforholdOgInntekt: ArbeidsforholdOgInntekt;
  isReadOnly: boolean;
  registrerArbeidsforhold: (params: ManueltArbeidsforhold) => Promise<void>;
  lagreVurdering: (params: ManglendeInntektsmeldingVurdering) => Promise<void>;
  oppdaterÅpenRad: (erÅpen: boolean) => void;
  erOverstyrt: boolean;
  oppdaterTabell: React.Dispatch<React.SetStateAction<ArbeidsforholdOgInntekt[]>>
  erRadÅpen: boolean;
}

const ArbeidsforholdRad: FunctionComponent<OwnProps> = ({
  behandlingUuid,
  skjæringspunktDato,
  arbeidsforholdOgInntekt,
  isReadOnly,
  registrerArbeidsforhold,
  lagreVurdering,
  oppdaterÅpenRad,
  erOverstyrt,
  oppdaterTabell,
  erRadÅpen,
}) => {
  const intl = useIntl();

  const {
    arbeidsforhold, arbeidsforholdNavn, inntektsposter, inntektsmelding,
  } = arbeidsforholdOgInntekt;

  const [erRadEkspandert, toggleEkspandertRad] = useState(erRadÅpen);
  useEffect(() => {
    if (erRadÅpen) {
      oppdaterÅpenRad(true);
    }
    toggleEkspandertRad(erRadÅpen);
  }, [erRadÅpen]);

  const toggleRad = (erApen: boolean) => {
    oppdaterÅpenRad(erApen);
    toggleEkspandertRad(erApen);
  };
  const avbrytEditering = useCallback(() => {
    toggleRad(false);
  }, []);

  const erManueltOpprettet = arbeidsforhold?.saksbehandlersVurdering?.kode === ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER;
  const harArbeidsforholdOgInntektsmelding = arbeidsforhold && inntektsmelding && !arbeidsforhold.årsak && !inntektsmelding.årsak;
  const manglerInntektsmelding = arbeidsforhold?.årsak === AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING;
  const manglerArbeidsforhold = inntektsmelding?.årsak === AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD;
  const harÅpentAksjonspunkt = ((manglerInntektsmelding && !arbeidsforhold?.saksbehandlersVurdering)
    || (manglerArbeidsforhold && !inntektsmelding?.saksbehandlersVurdering));

  const aIdent = arbeidsforhold?.arbeidsgiverIdent || inntektsmelding?.arbeidsgiverIdent;

  return (
    <ExpandableTableRow
      content={(
        <>
          {erManueltOpprettet && (
            <NyttArbeidsforholdForm
              behandlingUuid={behandlingUuid}
              isReadOnly={false}
              registrerArbeidsforhold={registrerArbeidsforhold}
              arbeidsforhold={arbeidsforhold}
              arbeidsforholdNavn={arbeidsforholdNavn}
              avbrytEditering={avbrytEditering}
              erOverstyrt={erOverstyrt}
              oppdaterTabell={oppdaterTabell}
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
              behandlingUuid={behandlingUuid}
              skjæringspunktDato={skjæringspunktDato}
              inntektsposter={inntektsposter}
              isReadOnly={isReadOnly}
              arbeidsforhold={arbeidsforhold}
              lagreVurdering={lagreVurdering}
              avbrytEditering={avbrytEditering}
              oppdaterTabell={oppdaterTabell}
            />
          )}
          {manglerArbeidsforhold && (
            <ManglendeOpplysningerForm
              behandlingUuid={behandlingUuid}
              arbeidsforholdNavn={arbeidsforholdNavn}
              inntektsmelding={inntektsmelding}
              arbeidsforhold={arbeidsforhold}
              isReadOnly={isReadOnly}
              registrerArbeidsforhold={registrerArbeidsforhold}
              lagreVurdering={lagreVurdering}
              avbrytEditering={avbrytEditering}
              oppdaterTabell={oppdaterTabell}
            />
          )}
        </>
      )}
      showContent={erRadEkspandert}
      toggleContent={toggleRad}
      isApLeftBorder={harÅpentAksjonspunkt}
    >
      <TableColumn>
        {!harÅpentAksjonspunkt && (
          <Image alt={intl.formatMessage({ id: 'ArbeidsforholdRad.Aksjonspunkt' })} src={okIkonUrl} />
        )}
        {harÅpentAksjonspunkt && (
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
