import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Normaltekst, Element, Undertekst } from 'nav-frontend-typografi';

import {
  AoIArbeidsforhold, ManglendeInntektsmeldingVurdering, ManueltArbeidsforhold, AksjonspunktÅrsak,
} from '@fpsak-frontend/types';
import advarselIkonUrl from '@fpsak-frontend/assets/images/advarsel2.svg';
import okIkonUrl from '@fpsak-frontend/assets/images/check.svg';
import {
  Image, TableColumn, PeriodLabel, DateTimeLabel, ExpandableTableRow,
} from '@fpsak-frontend/shared-components';
import ArbeidsforholdKomplettVurderingType from '@fpsak-frontend/kodeverk/src/arbeidsforholdKomplettVurderingType';
import { TIDENES_ENDE } from '@fpsak-frontend/utils';
import ManueltLagtTilArbeidsforholdForm from './ManueltLagtTilArbeidsforholdForm';
import ManglendeOpplysningerForm from './ManglendeOpplysningerForm';
import InntektsmeldingOpplysningerPanel from './InntektsmeldingOpplysningerPanel';
import ArbeidsforholdInformasjonPanel from './ArbeidsforholdInformasjonPanel';
import InntektsmeldingInnhentesForm from './InntektsmeldingInnhentesForm';
import ArbeidsforholdOgInntekt from '../types/arbeidsforholdOgInntekt';

const finnKildekode = (
  erManueltOpprettet: boolean,
  arbeidsforhold?: AoIArbeidsforhold,
): string => {
  if (erManueltOpprettet) {
    return 'ArbeidsforholdRad.Saksbehandler';
  }
  return arbeidsforhold ? 'ArbeidsforholdRad.AaRegisteret' : 'ArbeidsforholdRad.Inntektsmelding';
};

interface OwnProps {
  saksnummer: string;
  behandlingUuid: string;
  skjæringspunktDato: string;
  arbeidsforholdOgInntekt: ArbeidsforholdOgInntekt;
  isReadOnly: boolean;
  erOverstyrt: boolean;
  oppdaterTabell: React.Dispatch<React.SetStateAction<ArbeidsforholdOgInntekt[]>>
  registrerArbeidsforhold: (params: ManueltArbeidsforhold) => Promise<void>;
  lagreVurdering: (params: ManglendeInntektsmeldingVurdering) => Promise<void>;
  toggleÅpenRad: () => void;
  erRadÅpen: boolean;
  skalViseArbeidsforholdId: boolean;
}

const ArbeidsforholdRad: FunctionComponent<OwnProps> = ({
  saksnummer,
  behandlingUuid,
  skjæringspunktDato,
  arbeidsforholdOgInntekt,
  isReadOnly,
  erOverstyrt,
  oppdaterTabell,
  registrerArbeidsforhold,
  lagreVurdering,
  toggleÅpenRad,
  erRadÅpen,
  skalViseArbeidsforholdId,
}) => {
  const intl = useIntl();

  const {
    arbeidsforhold, arbeidsgiverNavn, inntektsposter, inntektsmelding,
  } = arbeidsforholdOgInntekt;

  const erManueltOpprettet = arbeidsforhold?.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER;
  const harArbeidsforholdOgInntektsmelding = arbeidsforhold && inntektsmelding && !arbeidsforhold.årsak && !inntektsmelding.årsak;
  const manglerInntektsmelding = arbeidsforhold?.årsak === AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING;
  const manglerArbeidsforhold = inntektsmelding?.årsak === AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD;
  const harÅpentAksjonspunkt = ((manglerInntektsmelding && !arbeidsforhold?.saksbehandlersVurdering)
    || (manglerArbeidsforhold && !inntektsmelding?.saksbehandlersVurdering));
  const harArbeidsforholdUtenInntektsmeldingMenIngenÅrsak = arbeidsforhold && !inntektsmelding && !arbeidsforhold.årsak;

  const aIdent = arbeidsforhold?.arbeidsgiverIdent || inntektsmelding?.arbeidsgiverIdent;

  return (
    <ExpandableTableRow
      content={(
        <>
          {erManueltOpprettet && (
            <ManueltLagtTilArbeidsforholdForm
              behandlingUuid={behandlingUuid}
              isReadOnly={false}
              registrerArbeidsforhold={registrerArbeidsforhold}
              arbeidsforhold={arbeidsforhold}
              arbeidsgiverNavn={arbeidsgiverNavn}
              lukkArbeidsforholdRad={toggleÅpenRad}
              erOverstyrt={erOverstyrt}
              oppdaterTabell={oppdaterTabell}
            />
          )}
          {harArbeidsforholdOgInntektsmelding && (
            <InntektsmeldingOpplysningerPanel
              saksnummer={saksnummer}
              stillingsprosent={arbeidsforhold.stillingsprosent}
              inntektsmelding={inntektsmelding}
            />
          )}
          {manglerInntektsmelding && (
            <InntektsmeldingInnhentesForm
              behandlingUuid={behandlingUuid}
              skjæringspunktDato={skjæringspunktDato}
              inntektsposter={inntektsposter}
              isReadOnly={isReadOnly}
              arbeidsforhold={arbeidsforhold}
              lagreVurdering={lagreVurdering}
              lukkArbeidsforholdRad={toggleÅpenRad}
              oppdaterTabell={oppdaterTabell}
              skalViseArbeidsforholdId={skalViseArbeidsforholdId}
            />
          )}
          {manglerArbeidsforhold && (
            <ManglendeOpplysningerForm
              saksnummer={saksnummer}
              behandlingUuid={behandlingUuid}
              arbeidsgiverNavn={arbeidsgiverNavn}
              inntektsmelding={inntektsmelding}
              arbeidsforhold={arbeidsforhold}
              isReadOnly={isReadOnly}
              registrerArbeidsforhold={registrerArbeidsforhold}
              lagreVurdering={lagreVurdering}
              lukkArbeidsforholdRad={toggleÅpenRad}
              oppdaterTabell={oppdaterTabell}
              skalViseArbeidsforholdId={skalViseArbeidsforholdId}
            />
          )}
          {harArbeidsforholdUtenInntektsmeldingMenIngenÅrsak && (
            <ArbeidsforholdInformasjonPanel
              skjæringspunktDato={skjæringspunktDato}
              inntektsposter={inntektsposter}
              arbeidsforhold={arbeidsforhold}
              skalViseArbeidsforholdId={skalViseArbeidsforholdId}
            />
          )}
        </>
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
        {erRadÅpen && (
          <>
            <Element>
              {arbeidsgiverNavn}
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
        {!erRadÅpen && (
          <Normaltekst>
            {arbeidsgiverNavn}
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
          <FormattedMessage id={finnKildekode(erManueltOpprettet, arbeidsforhold)} />
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
