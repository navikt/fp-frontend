import React, { useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { CheckmarkCircleFillIcon, ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack, Table, VStack } from '@navikt/ds-react';
import { dateFormat } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { formaterPeriode } from '@navikt/fp-fakta-felles';
import { ArbeidsforholdKomplettVurderingType } from '@navikt/fp-kodeverk';
import {
  AksjonspunktÅrsak,
  AlleKodeverk,
  AoIArbeidsforhold,
  ArbeidOgInntektsmelding,
  Inntektsmelding,
  ManglendeInntektsmeldingVurdering,
  ManueltArbeidsforhold,
} from '@navikt/fp-types';

import { ArbeidsforholdOgInntektRadData, Avklaring } from '../types/arbeidsforholdOgInntekt';
import { ArbeidsforholdInformasjonPanel } from './felles/ArbeidsforholdInformasjonPanel';
import { InntektsmeldingerPanel } from './felles/InntektsmeldingerPanel';
import { InntektsmeldingOpplysningerPanel } from './felles/InntektsmeldingOpplysningerPanel';
import { ManglendeArbeidsforholdForm } from './manglendeArbeidsforhold/ManglendeArbeidsforholdForm';
import { ManglendeInntektsmeldingForm } from './manglendeInntektsmelding/ManglendeInntektsmeldingForm';
import { ManueltLagtTilArbeidsforholdForm } from './manuelt/ManueltLagtTilArbeidsforholdForm';

import styles from './arbeidsforholdRad.module.css';

const finnKildekode = (erManueltOpprettet: boolean, harArbeidsforhold: boolean): string => {
  if (erManueltOpprettet) {
    return 'ArbeidsforholdRad.Saksbehandler';
  }
  return harArbeidsforhold ? 'ArbeidsforholdRad.AaRegisteret' : 'ArbeidsforholdRad.Inntektsmelding';
};

const finnPeriode = (
  arbeidsforhold: AoIArbeidsforhold[],
  avklaring?: Avklaring,
): { fom?: string; tom?: string } | undefined => {
  if (
    avklaring?.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER ||
    avklaring?.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING
  ) {
    return {
      fom: avklaring?.fom,
      tom: avklaring?.tom,
    };
  }

  const periode = arbeidsforhold.reduce<{ fom: string | undefined; tom: string | undefined }>(
    (res, a) => ({
      fom: res.fom && dayjs(res.fom).isBefore(a.fom) ? res.fom : a.fom,
      tom: res.tom && dayjs(res.tom).isAfter(a.tom) ? res.tom : a.tom,
    }),
    { fom: undefined, tom: undefined },
  );

  return periode.fom ? periode : undefined;
};

const finnInntektsmelding = (
  inntektsmeldinger: Inntektsmelding[],
  internArbeidsforholdId?: string,
): Inntektsmelding => {
  const harImMedId = inntektsmeldinger.some(i => i.internArbeidsforholdId);
  const harImUtenId = inntektsmeldinger.some(i => !i.internArbeidsforholdId);
  if (harImMedId && harImUtenId) {
    throw Error('Har inntektsmelding både med og uten id');
  }

  const im = inntektsmeldinger.find(
    i => !i.internArbeidsforholdId || !internArbeidsforholdId || i.internArbeidsforholdId === internArbeidsforholdId,
  );

  if (!im) {
    throw Error(`Finner ingen inntektsmelding for arbeidsforhold id ${internArbeidsforholdId}`);
  }

  return im;
};

interface Props {
  saksnummer: string;
  behandlingUuid: string;
  behandlingVersjon: number;
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  radData: ArbeidsforholdOgInntektRadData;
  isReadOnly: boolean;
  erOverstyrt: boolean;
  oppdaterTabell: (data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void;
  registrerArbeidsforhold: (params: ManueltArbeidsforhold) => Promise<void>;
  lagreVurdering: (params: ManglendeInntektsmeldingVurdering) => Promise<void>;
  toggleÅpenRad: () => void;
  erRadÅpen: boolean;
  alleKodeverk: AlleKodeverk;
}

export const ArbeidsforholdRad = ({
  saksnummer,
  behandlingUuid,
  behandlingVersjon,
  arbeidOgInntekt,
  radData,
  isReadOnly,
  erOverstyrt,
  oppdaterTabell,
  registrerArbeidsforhold,
  lagreVurdering,
  toggleÅpenRad,
  alleKodeverk,
  erRadÅpen,
}: Props) => {
  const intl = useIntl();

  const { arbeidsgiverNavn, arbeidsgiverIdent, årsak, avklaring, arbeidsgiverFødselsdato } = radData;

  const arbeidsforholdForRad = useMemo(
    () => arbeidOgInntekt.arbeidsforhold.filter(a => a.arbeidsgiverIdent === arbeidsgiverIdent),
    [arbeidOgInntekt, arbeidsgiverIdent],
  );
  const inntektsmeldingerForRad = useMemo(
    () => arbeidOgInntekt.inntektsmeldinger.filter(i => i.arbeidsgiverIdent === arbeidsgiverIdent),
    [arbeidOgInntekt, arbeidsgiverIdent],
  );

  const erManueltOpprettet =
    avklaring?.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER;
  const harArbeidsforholdOgInntektsmelding =
    arbeidsforholdForRad.length > 0 && inntektsmeldingerForRad.length > 0 && !årsak;
  const manglerInntektsmelding = årsak === AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING;
  const manglerArbeidsforhold = årsak === AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD;
  const harÅpentAksjonspunkt = !!årsak && !avklaring?.saksbehandlersVurdering;
  const harArbeidsforholdUtenInntektsmeldingMenIngenÅrsak =
    arbeidsforholdForRad.length > 0 && inntektsmeldingerForRad.length === 0 && !årsak && !erManueltOpprettet;
  const harKunInntektsmeldingOgIkkeÅrsak =
    arbeidsforholdForRad.length === 0 && inntektsmeldingerForRad.length > 0 && !årsak;

  const periode = useMemo(
    () => finnPeriode(arbeidsforholdForRad, radData.avklaring),
    [erManueltOpprettet, arbeidsforholdForRad, radData.avklaring],
  );
  const inntektsposter = arbeidOgInntekt.inntekter.find(
    inntekt => inntekt.arbeidsgiverIdent === arbeidsgiverIdent,
  )?.inntekter;

  return (
    <Table.ExpandableRow
      expandOnRowClick
      shadeOnHover
      togglePlacement="right"
      defaultOpen={erRadÅpen}
      content={
        <VStack className={`${styles.container} ${harÅpentAksjonspunkt ? styles.openAksjonspunkt : undefined}`}>
          {erManueltOpprettet && (
            <ManueltLagtTilArbeidsforholdForm
              behandlingUuid={behandlingUuid}
              behandlingVersjon={behandlingVersjon}
              isReadOnly={false}
              registrerArbeidsforhold={registrerArbeidsforhold}
              radData={radData}
              lukkArbeidsforholdRad={toggleÅpenRad}
              erOverstyrt={erOverstyrt}
              oppdaterTabell={oppdaterTabell}
            />
          )}

          {harArbeidsforholdOgInntektsmelding && (
            <InntektsmeldingerPanel
              saksnummer={saksnummer}
              arbeidsforholdForRad={arbeidsforholdForRad}
              inntektsmeldingerForRad={inntektsmeldingerForRad}
              alleKodeverk={alleKodeverk}
              arbeidsgiverFødselsdato={arbeidsgiverFødselsdato}
              arbeidsgiverNavn={arbeidsgiverNavn}
            />
          )}

          {harKunInntektsmeldingOgIkkeÅrsak && (
            <InntektsmeldingOpplysningerPanel
              saksnummer={saksnummer}
              arbeidsforhold={arbeidsforholdForRad.length > 0 ? arbeidsforholdForRad[0] : undefined}
              inntektsmelding={finnInntektsmelding(
                inntektsmeldingerForRad,
                arbeidsforholdForRad.length > 0 ? arbeidsforholdForRad[0].internArbeidsforholdId : undefined,
              )}
              skalViseArbeidsforholdId={false}
              alleKodeverk={alleKodeverk}
              arbeidsgiverNavn={arbeidsgiverNavn}
              arbeidsgiverFødselsdato={arbeidsgiverFødselsdato}
            />
          )}

          {manglerInntektsmelding && (
            <ManglendeInntektsmeldingForm
              saksnummer={saksnummer}
              behandlingUuid={behandlingUuid}
              behandlingVersjon={behandlingVersjon}
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
              arbeidsgiverFødselsdato={arbeidsgiverFødselsdato}
            />
          )}

          {manglerArbeidsforhold && (
            <ManglendeArbeidsforholdForm
              saksnummer={saksnummer}
              behandlingUuid={behandlingUuid}
              behandlingVersjon={behandlingVersjon}
              arbeidsgiverNavn={arbeidsgiverNavn}
              inntektsmelding={inntektsmeldingerForRad[0]}
              radData={radData}
              isReadOnly={isReadOnly}
              registrerArbeidsforhold={registrerArbeidsforhold}
              lagreVurdering={lagreVurdering}
              lukkArbeidsforholdRad={toggleÅpenRad}
              oppdaterTabell={oppdaterTabell}
              skalViseArbeidsforholdId={inntektsmeldingerForRad.length > 1}
              alleKodeverk={alleKodeverk}
            />
          )}

          {harArbeidsforholdUtenInntektsmeldingMenIngenÅrsak && (
            <ArbeidsforholdInformasjonPanel
              saksnummer={saksnummer}
              skjæringspunktDato={arbeidOgInntekt.skjæringstidspunkt}
              inntektsposter={inntektsposter}
              arbeidsforholdForRad={arbeidsforholdForRad}
              alleKodeverk={alleKodeverk}
              arbeidsgiverFødselsdato={arbeidsgiverFødselsdato}
              arbeidsgiverNavn={arbeidsgiverNavn}
            />
          )}
        </VStack>
      }
    >
      <Table.DataCell>
        <HStack gap="1" align="center">
          {harÅpentAksjonspunkt ? (
            <ExclamationmarkTriangleFillIcon
              title={intl.formatMessage({ id: 'ArbeidsforholdRad.Aksjonspunkt' })}
              width={24}
              height={24}
              color="var(--a-icon-warning)"
            />
          ) : (
            <CheckmarkCircleFillIcon
              title={intl.formatMessage({ id: 'ArbeidsforholdRad.Ok' })}
              width={24}
              height={24}
              color="var(--a-green-400)"
            />
          )}
          <BodyShort>
            <FormattedMessage
              id={harÅpentAksjonspunkt ? 'ArbeidsforholdRad.Aksjonspunkt.Label' : 'ArbeidsforholdRad.Ok.Label'}
            />
          </BodyShort>
        </HStack>
      </Table.DataCell>
      <Table.DataCell>
        <BodyShort>{arbeidsgiverNavn}</BodyShort>
      </Table.DataCell>
      <Table.DataCell>
        <BodyShort>{formaterPeriode(periode)}</BodyShort>
      </Table.DataCell>
      <Table.DataCell>
        <BodyShort>
          <FormattedMessage id={finnKildekode(erManueltOpprettet, arbeidsforholdForRad.length > 0)} />
        </BodyShort>
      </Table.DataCell>
      <Table.DataCell>
        <BodyShort>
          {arbeidsforholdForRad.length < 2 &&
            inntektsmeldingerForRad.length === 1 &&
            dateFormat(inntektsmeldingerForRad[0].motattDato)}

          {!manglerInntektsmelding &&
            arbeidsforholdForRad.length > 1 &&
            inntektsmeldingerForRad.length === arbeidsforholdForRad.length && (
              <FormattedMessage id="ArbeidsforholdRad.Mottatt" />
            )}
          {(erManueltOpprettet ||
            (manglerInntektsmelding && inntektsmeldingerForRad.length < arbeidsforholdForRad.length)) && (
            <FormattedMessage id="ArbeidsforholdRad.IkkeMottatt" />
          )}
        </BodyShort>
      </Table.DataCell>
    </Table.ExpandableRow>
  );
};
