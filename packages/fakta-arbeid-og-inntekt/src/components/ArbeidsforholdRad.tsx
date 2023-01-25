import React, { FunctionComponent, useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import dayjs from 'dayjs';
import classnames from 'classnames/bind';
import { BodyShort, Label, Detail } from '@navikt/ds-react';

import {
  AoIArbeidsforhold, ManglendeInntektsmeldingVurdering, ManueltArbeidsforhold, AksjonspunktÅrsak, ArbeidOgInntektsmelding, Inntektsmelding, AlleKodeverk,
} from '@navikt/fp-types';
import advarselIkonUrl from '@navikt/fp-assets/images/advarsel2.svg';
import okIkonUrl from '@navikt/fp-assets/images/check.svg';
import {
  TableColumn, PeriodLabel, DateLabel, ExpandableTableRow, Image,
} from '@navikt/ft-ui-komponenter';
import ArbeidsforholdKomplettVurderingType from '@navikt/fp-kodeverk/src/arbeidsforholdKomplettVurderingType';
import { TIDENES_ENDE } from '@navikt/ft-utils';
import ManueltLagtTilArbeidsforholdForm from './manuelt/ManueltLagtTilArbeidsforholdForm';
import ManglendeArbeidsforholdForm from './manglendeArbeidsforhold/ManglendeArbeidsforholdForm';
import ArbeidsforholdInformasjonPanel from './felles/ArbeidsforholdInformasjonPanel';
import InntektsmeldingerPanel from './felles/InntektsmeldingerPanel';
import InntektsmeldingOpplysningerPanel from './felles/InntektsmeldingOpplysningerPanel';
import ManglendeInntektsmeldingForm from './manglendeInntektsmelding/ManglendeInntektsmeldingForm';
import ArbeidsforholdOgInntekt, { Avklaring } from '../types/arbeidsforholdOgInntekt';

import styles from './arbeidsforholdRad.less';

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

  return inntektsmeldinger.find((i) => !i.internArbeidsforholdId || !internArbeidsforholdId || i.internArbeidsforholdId === internArbeidsforholdId);
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
  alleKodeverk: AlleKodeverk;
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
  alleKodeverk,
}) => {
  const intl = useIntl();

  const {
    arbeidsgiverNavn, arbeidsgiverIdent, årsak, avklaring, arbeidsgiverFødselsdato,
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
  const harKunInntektsmeldingOgIkkeÅrsak = arbeidsforholdForRad.length === 0 && inntektsmeldingerForRad.length > 0 && !årsak;

  const periode = useMemo(() => finnPeriode(arbeidsforholdForRad, radData.avklaring),
    [erManueltOpprettet, arbeidsforholdForRad, radData.avklaring]);
  const inntektsposter = arbeidOgInntekt.inntekter.find((inntekt) => inntekt.arbeidsgiverIdent === arbeidsgiverIdent)?.inntekter;

  return (
    <ExpandableTableRow
      alignWithColumn={1}
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
            <InntektsmeldingerPanel
              saksnummer={saksnummer}
              arbeidsforholdForRad={arbeidsforholdForRad}
              inntektsmeldingerForRad={inntektsmeldingerForRad}
              alleKodeverk={alleKodeverk}
            />
          )}
          {harKunInntektsmeldingOgIkkeÅrsak && (
            <InntektsmeldingOpplysningerPanel
              saksnummer={saksnummer}
              arbeidsforhold={arbeidsforholdForRad.length > 0 ? arbeidsforholdForRad[0] : undefined}
              inntektsmelding={finnInntektsmelding(
                inntektsmeldingerForRad, arbeidsforholdForRad.length > 0 ? arbeidsforholdForRad[0].internArbeidsforholdId : undefined)}
              skalViseArbeidsforholdId={false}
              alleKodeverk={alleKodeverk}
            />
          )}
          {manglerInntektsmelding && (
            <ManglendeInntektsmeldingForm
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
              alleKodeverk={alleKodeverk}
            />
          )}
          {manglerArbeidsforhold && (
            <ManglendeArbeidsforholdForm
              saksnummer={saksnummer}
              behandlingUuid={behandlingUuid}
              arbeidsgiverNavn={arbeidsgiverNavn}
              inntektsmelding={inntektsmeldingerForRad[0]}
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
              alleKodeverk={alleKodeverk}
            />
          )}
        </>
      )}
      showContent={erRadÅpen}
      toggleContent={toggleÅpenRad}
      isApLeftBorder={harÅpentAksjonspunkt}
    >
      <TableColumn className={classNames('ikon', erRadÅpen ? 'imageColTopPadding' : undefined)}>
        {!harÅpentAksjonspunkt && (
          <Image alt={intl.formatMessage({ id: 'ArbeidsforholdRad.Ok' })} src={okIkonUrl} />
        )}
        {harÅpentAksjonspunkt && (
          <Image alt={intl.formatMessage({ id: 'ArbeidsforholdRad.Aksjonspunkt' })} src={advarselIkonUrl} />
        )}
      </TableColumn>
      <TableColumn className={erRadÅpen ? styles.colTopPadding : undefined}>
        {erRadÅpen && (
          <>
            <Label size="small">
              {arbeidsgiverNavn}
            </Label>
            <Detail size="small">
              (
              {arbeidsgiverFødselsdato ? <DateLabel dateString={arbeidsgiverFødselsdato} /> : arbeidsgiverIdent}
              )
            </Detail>
          </>
        )}
        {!erRadÅpen && (
          <BodyShort size="small">
            {arbeidsgiverNavn}
          </BodyShort>
        )}
      </TableColumn>
      <TableColumn className={erRadÅpen ? styles.colTopPadding : undefined}>
        <BodyShort>
          {periode && (
            <PeriodLabel dateStringFom={periode.fom} dateStringTom={periode.tom !== TIDENES_ENDE ? periode.tom : undefined} />
          )}
          {!periode && '-'}
        </BodyShort>
      </TableColumn>
      <TableColumn className={erRadÅpen ? styles.colTopPadding : undefined}>
        <BodyShort>
          <FormattedMessage id={finnKildekode(erManueltOpprettet, arbeidsforholdForRad.length > 0)} />
        </BodyShort>
      </TableColumn>
      <TableColumn className={erRadÅpen ? styles.colTopPadding : undefined}>
        <BodyShort>
          {arbeidsforholdForRad.length < 2 && inntektsmeldingerForRad.length === 1 && (
            <DateLabel dateString={inntektsmeldingerForRad[0].motattDato} />
          )}
          {!manglerInntektsmelding && arbeidsforholdForRad.length > 1 && inntektsmeldingerForRad.length === arbeidsforholdForRad.length && (
            <FormattedMessage id="ArbeidsforholdRad.Mottatt" />
          )}
          {(erManueltOpprettet || (manglerInntektsmelding && inntektsmeldingerForRad.length < arbeidsforholdForRad.length)) && (
            <FormattedMessage id="ArbeidsforholdRad.IkkeMottatt" />
          )}
        </BodyShort>
      </TableColumn>
    </ExpandableTableRow>
  );
};

export default ArbeidsforholdRad;
