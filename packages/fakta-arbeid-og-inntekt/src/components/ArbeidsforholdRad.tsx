import React, { FunctionComponent, useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import dayjs from 'dayjs';
import classnames from 'classnames/bind';
import { Normaltekst, Element, Undertekst } from 'nav-frontend-typografi';
import { Image } from '@navikt/fp-react-components';

import {
  AoIArbeidsforhold, ManglendeInntektsmeldingVurdering, ManueltArbeidsforhold, AksjonspunktÅrsak, ArbeidOgInntektsmelding, Inntektsmelding,
} from '@fpsak-frontend/types';
import advarselIkonUrl from '@fpsak-frontend/assets/images/advarsel2.svg';
import utropstegnIkonUrl from '@fpsak-frontend/assets/images/utropstegn.svg';
import okIkonUrl from '@fpsak-frontend/assets/images/check.svg';
import {
  TableColumn, PeriodLabel, DateTimeLabel, ExpandableTableRow,
} from '@fpsak-frontend/shared-components';
import ArbeidsforholdKomplettVurderingType from '@fpsak-frontend/kodeverk/src/arbeidsforholdKomplettVurderingType';
import { TIDENES_ENDE } from '@fpsak-frontend/utils';
import ManueltLagtTilArbeidsforholdForm from './ManueltLagtTilArbeidsforholdForm';
import ManglendeOpplysningerForm from './ManglendeOpplysningerForm';
import ArbeidsforholdInformasjonPanel from './ArbeidsforholdInformasjonPanel';
import InntektsmeldingInnhentesForm from './InntektsmeldingInnhentesForm';
import ArbeidsforholdOgInntekt, { Avklaring } from '../types/arbeidsforholdOgInntekt';

import styles from './arbeidsforholdRad.less';
import InntektsmeldingerTest from './InntektsmeldingerTest';
import InntektsmeldingOpplysningerPanel from './InntektsmeldingOpplysningerPanel';

const classNames = classnames.bind(styles);

const finnKildekode = (
  erManueltOpprettet: boolean,
  harArbeidsforhold: boolean,
): string => {
  if (erManueltOpprettet) {
    return 'ArbeidsforholdRad.Saksbehandler';
  }
  return harArbeidsforhold ? 'ArbeidsforholdRad.AaRegisteret' : 'ArbeidsforholdRad.Inntektsmelding';
};

const finnPeriode = (
  arbeidsforhold: AoIArbeidsforhold[],
  avklaring?: Avklaring,
): { fom: string, tom?: string } => {
  if (avklaring?.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER
    || avklaring?.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING) {
    return {
      fom: avklaring?.fom,
      tom: avklaring?.tom,
    };
  }

  const periode = arbeidsforhold.reduce((res, a) => ({
    fom: res.fom && dayjs(res.fom).isBefore(a.fom) ? res.fom : a.fom,
    tom: res.tom && dayjs(res.tom).isAfter(a.tom) ? res.tom : a.tom,
  }), { fom: undefined, tom: undefined });

  return periode.fom ? periode : undefined;
};

const finnInntektsmelding = (
  inntektsmeldinger: Inntektsmelding[],
  internArbeidsforholdId?: string,
) => {
  const harImMedId = inntektsmeldinger.some((i) => i.internArbeidsforholdId);
  const harImUtenId = inntektsmeldinger.some((i) => !i.internArbeidsforholdId);
  if (harImMedId && harImUtenId) {
    throw Error('Har inntektsmelding både med og uten id');
  }

  return inntektsmeldinger.find((i) => !i.internArbeidsforholdId || i.internArbeidsforholdId === internArbeidsforholdId);
};

interface OwnProps {
  saksnummer: string;
  behandlingUuid: string;
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  radData: ArbeidsforholdOgInntekt;
  isReadOnly: boolean;
  erOverstyrt: boolean;
  oppdaterTabell: React.Dispatch<React.SetStateAction<ArbeidsforholdOgInntekt[]>>
  registrerArbeidsforhold: (params: ManueltArbeidsforhold) => Promise<void>;
  lagreVurdering: (params: ManglendeInntektsmeldingVurdering) => Promise<void>;
  toggleÅpenRad: () => void;
  erRadÅpen: boolean;
}

const ArbeidsforholdRad: FunctionComponent<OwnProps> = ({
  saksnummer,
  behandlingUuid,
  arbeidOgInntekt,
  radData,
  isReadOnly,
  erOverstyrt,
  oppdaterTabell,
  registrerArbeidsforhold,
  lagreVurdering,
  toggleÅpenRad,
  erRadÅpen,
}) => {
  const intl = useIntl();

  const {
    arbeidsgiverNavn, arbeidsgiverIdent, årsak, avklaring,
  } = radData;

  const arbeidsforholdForRad = useMemo(() => arbeidOgInntekt.arbeidsforhold.filter((a) => a.arbeidsgiverIdent === arbeidsgiverIdent),
    [arbeidOgInntekt, arbeidsgiverIdent]);
  const inntektsmeldingerForRad = useMemo(() => arbeidOgInntekt.inntektsmeldinger.filter((i) => i.arbeidsgiverIdent === arbeidsgiverIdent),
    [arbeidOgInntekt, arbeidsgiverIdent]);

  const erManueltOpprettet = avklaring?.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER;
  const harArbeidsforholdOgInntektsmelding = arbeidsforholdForRad.length > 0 && inntektsmeldingerForRad.length > 0 && !årsak;
  const manglerInntektsmelding = årsak === AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING;
  const manglerArbeidsforhold = årsak === AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD;
  const harÅpentAksjonspunkt = årsak && !avklaring?.saksbehandlersVurdering;
  const harArbeidsforholdUtenInntektsmeldingMenIngenÅrsak = arbeidsforholdForRad.length > 0
    && inntektsmeldingerForRad.length === 0 && !årsak && !erManueltOpprettet;
  const førRegisterInnhenting = arbeidsforholdForRad.length === 0 && inntektsmeldingerForRad.length > 0 && !årsak;

  const periode = useMemo(() => finnPeriode(arbeidsforholdForRad, radData.avklaring),
    [erManueltOpprettet, arbeidsforholdForRad, radData.avklaring]);
  const inntektsposter = arbeidOgInntekt.inntekter.find((inntekt) => inntekt.arbeidsgiverIdent === arbeidsgiverIdent)?.inntekter;

  return (
    <ExpandableTableRow
      content={(
        <>
          {erManueltOpprettet && (
            <ManueltLagtTilArbeidsforholdForm
              behandlingUuid={behandlingUuid}
              isReadOnly={false}
              registrerArbeidsforhold={registrerArbeidsforhold}
              radData={radData}
              arbeidsforhold={arbeidsforholdForRad[0]}
              lukkArbeidsforholdRad={toggleÅpenRad}
              erOverstyrt={erOverstyrt}
              oppdaterTabell={oppdaterTabell}
            />
          )}
          {(harArbeidsforholdOgInntektsmelding) && (
            <InntektsmeldingerTest
              saksnummer={saksnummer}
              arbeidsforholdForRad={arbeidsforholdForRad}
              inntektsmeldingerForRad={inntektsmeldingerForRad}
            />
          )}
          {førRegisterInnhenting && (
            <InntektsmeldingOpplysningerPanel
              saksnummer={saksnummer}
              stillingsprosent={arbeidsforholdForRad.length > 0 ? arbeidsforholdForRad[0].stillingsprosent : undefined}
              inntektsmelding={finnInntektsmelding(inntektsmeldingerForRad, radData.internArbeidsforholdId)}
              skalViseArbeidsforholdId={false}
            />
          )}
          {manglerInntektsmelding && (
            <InntektsmeldingInnhentesForm
              saksnummer={saksnummer}
              behandlingUuid={behandlingUuid}
              skjæringspunktDato={arbeidOgInntekt.skjæringstidspunkt}
              inntektsposter={inntektsposter}
              isReadOnly={isReadOnly}
              arbeidsforholdForRad={arbeidsforholdForRad}
              inntektsmeldingerForRad={inntektsmeldingerForRad}
              radData={radData}
              lagreVurdering={lagreVurdering}
              lukkArbeidsforholdRad={toggleÅpenRad}
              oppdaterTabell={oppdaterTabell}
            />
          )}
          {manglerArbeidsforhold && (
            <ManglendeOpplysningerForm
              saksnummer={saksnummer}
              behandlingUuid={behandlingUuid}
              arbeidsgiverNavn={arbeidsgiverNavn}
              inntektsmelding={finnInntektsmelding(inntektsmeldingerForRad, radData.internArbeidsforholdId)}
              radData={radData}
              isReadOnly={isReadOnly}
              registrerArbeidsforhold={registrerArbeidsforhold}
              lagreVurdering={lagreVurdering}
              lukkArbeidsforholdRad={toggleÅpenRad}
              oppdaterTabell={oppdaterTabell}
              skalViseArbeidsforholdId={inntektsmeldingerForRad.length > 1}
            />
          )}
          {harArbeidsforholdUtenInntektsmeldingMenIngenÅrsak && (
            <ArbeidsforholdInformasjonPanel
              saksnummer={saksnummer}
              skjæringspunktDato={arbeidOgInntekt.skjæringstidspunkt}
              inntektsposter={inntektsposter}
              arbeidsforholdForRad={arbeidsforholdForRad}
            />
          )}
        </>
      )}
      showContent={erRadÅpen}
      toggleContent={toggleÅpenRad}
      isApLeftBorder={harÅpentAksjonspunkt}
    >
      <TableColumn className={classNames('ikon', erRadÅpen ? 'imageColTopPadding' : undefined)}>
        {!førRegisterInnhenting && !harÅpentAksjonspunkt && (
          <Image alt={intl.formatMessage({ id: 'ArbeidsforholdRad.Ok' })} src={okIkonUrl} />
        )}
        {!førRegisterInnhenting && harÅpentAksjonspunkt && (
          <Image alt={intl.formatMessage({ id: 'ArbeidsforholdRad.Aksjonspunkt' })} src={advarselIkonUrl} />
        )}
        {førRegisterInnhenting && (
          <Image alt={intl.formatMessage({ id: 'ArbeidsforholdRad.KanIkkeLøses' })} src={utropstegnIkonUrl} />
        )}
      </TableColumn>
      <TableColumn className={erRadÅpen ? styles.colTopPadding : undefined}>
        {erRadÅpen && (
          <>
            <Element>
              {arbeidsgiverNavn}
            </Element>
            <Undertekst>
              (
              {arbeidsgiverIdent}
              )
            </Undertekst>
          </>
        )}
        {!erRadÅpen && (
          <Normaltekst>
            {arbeidsgiverNavn}
          </Normaltekst>
        )}
      </TableColumn>
      <TableColumn className={erRadÅpen ? styles.colTopPadding : undefined}>
        <Normaltekst>
          {periode && (
            <PeriodLabel dateStringFom={periode.fom} dateStringTom={periode.tom !== TIDENES_ENDE ? periode.tom : undefined} />
          )}
          {!periode && '-'}
        </Normaltekst>
      </TableColumn>
      <TableColumn className={erRadÅpen ? styles.colTopPadding : undefined}>
        <Normaltekst>
          <FormattedMessage id={finnKildekode(erManueltOpprettet, arbeidsforholdForRad.length > 0)} />
        </Normaltekst>
      </TableColumn>
      <TableColumn className={erRadÅpen ? styles.colTopPadding : undefined}>
        <Normaltekst>
          {arbeidsforholdForRad.length < 2 && inntektsmeldingerForRad.length === 1 && (
            <DateTimeLabel dateTimeString={inntektsmeldingerForRad[0].motattDato} useNewFormat />
          )}
          {erManueltOpprettet && '-'}
          {!manglerInntektsmelding && arbeidsforholdForRad.length > 1 && inntektsmeldingerForRad.length === arbeidsforholdForRad.length && (
            <FormattedMessage id="ArbeidsforholdRad.Mottatt" />
          )}
          {manglerInntektsmelding && inntektsmeldingerForRad.length < arbeidsforholdForRad.length && (
            <FormattedMessage id="ArbeidsforholdRad.IkkeMottatt" />
          )}
        </Normaltekst>
      </TableColumn>
    </ExpandableTableRow>
  );
};

export default ArbeidsforholdRad;
