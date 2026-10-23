import { FormattedMessage, useIntl } from 'react-intl';

import { CheckmarkIcon, ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { Table, VStack } from '@navikt/ds-react';
import { DateLabel, LabeledValue, PeriodLabel } from '@navikt/ft-ui-komponenter';
import dayjs from 'dayjs';

import type {
  AlleKodeverk,
  Arbeidsforhold,
  ManglendeInntektsmeldingVurdering,
  ManueltArbeidsforhold,
} from '@navikt/fp-types';

import type { ArbeidsforholdOgInntektRadData, Avklaring } from '../types/arbeidsforholdOgInntekt';
import { ArbeidsforholdInformasjonPanel } from './felles/ArbeidsforholdInformasjonPanel';
import { InntektsmeldingerPanel } from './felles/InntektsmeldingerPanel';
import { InntektsmeldingOpplysningerPanel } from './felles/InntektsmeldingOpplysningerPanel';
import { ManglendeArbeidsforholdForm } from './ManglendeArbeidsforholdForm';
import { ManglendeInntektsmeldingForm } from './ManglendeInntektsmeldingForm';
import { ManueltLagtTilArbeidsforholdForm } from './ManueltLagtTilArbeidsforholdForm';

import styles from './arbeidsforholdRad.module.css';

interface Props {
  saksnummer: string;
  behandlingUuid: string;
  behandlingVersjon: number;
  radData: ArbeidsforholdOgInntektRadData;
  isReadOnly: boolean;
  erOverstyrt: boolean;
  oppdaterTabell: (data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void;
  registrerArbeidsforhold: (params: ManueltArbeidsforhold) => Promise<void>;
  lagreVurdering: (params: ManglendeInntektsmeldingVurdering) => Promise<void>;
  toggleÅpenRad: () => void;
  erRadÅpen: boolean;
  alleKodeverk: AlleKodeverk;
  skjæringstidspunkt: string;
}

export const ArbeidsforholdRad = ({
  saksnummer,
  behandlingUuid,
  behandlingVersjon,
  radData,
  isReadOnly,
  erOverstyrt,
  oppdaterTabell,
  registrerArbeidsforhold,
  lagreVurdering,
  toggleÅpenRad,
  erRadÅpen,
  alleKodeverk,
  skjæringstidspunkt,
}: Props) => {
  const intl = useIntl();

  const { inntektsmeldingerForRad, arbeidsforholdForRad, arbeidsgiverNavn, avklaring, årsak, inaktivÅrsak } = radData;

  const erManueltOpprettet = avklaring?.saksbehandlersVurdering === 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER';
  const erInaktivtArbeidsforhold = inaktivÅrsak === 'INAKTIVT_ARBEIDSFORHOLD';
  const erPermisjonArbeidsforhold = inaktivÅrsak === 'PERMISJON';
  const erInaktivtEllerPermisjonsArbeidsforhold = inaktivÅrsak !== undefined;
  const harArbeidsforholdOgInntektsmelding =
    arbeidsforholdForRad.length > 0 && inntektsmeldingerForRad.length > 0 && !årsak;
  const manglerInntektsmelding = årsak === 'MANGLENDE_INNTEKTSMELDING';
  const manglerArbeidsforhold = årsak === 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD';
  const harÅpentAksjonspunkt = !!årsak && !avklaring?.saksbehandlersVurdering;
  const harArbeidsforholdUtenInntektsmeldingMenIngenÅrsak =
    arbeidsforholdForRad.length > 0 &&
    inntektsmeldingerForRad.length === 0 &&
    !årsak &&
    !erManueltOpprettet &&
    !erInaktivtEllerPermisjonsArbeidsforhold;
  const harKunInntektsmeldingOgIkkeÅrsak =
    arbeidsforholdForRad.length === 0 && inntektsmeldingerForRad.length > 0 && !årsak;

  const periode = finnPeriode(arbeidsforholdForRad, avklaring);
  const skalViseIMMottattdato = arbeidsforholdForRad.length < 2 && inntektsmeldingerForRad.length === 1;
  const ikkeBestiltIMTekst = intl.formatMessage({
    id: erInaktivtArbeidsforhold ? 'ArbeidsforholdRad.IkkebestiltInaktivt' : 'ArbeidsforholdRad.IkkebestiltPermisjon',
  });

  return (
    <Table.ExpandableRow
      open={erRadÅpen}
      onOpenChange={toggleÅpenRad}
      expandOnRowClick
      togglePlacement="right"
      contentGutter="none"
      data-open-ap={harÅpentAksjonspunkt}
      className={styles['tabellRad']}
      content={
        <VStack gap="space-16">
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
            <InntektsmeldingerPanel saksnummer={saksnummer} alleKodeverk={alleKodeverk} radData={radData} />
          )}
          {harKunInntektsmeldingOgIkkeÅrsak && (
            <InntektsmeldingOpplysningerPanel
              saksnummer={saksnummer}
              arbeidsforhold={arbeidsforholdForRad[0]}
              inntektsmelding={inntektsmeldingerForRad[0]!}
              skalViseArbeidsforholdId={false}
              alleKodeverk={alleKodeverk}
              radData={radData}
            />
          )}
          {manglerInntektsmelding && (
            <>
              <ArbeidsforholdInformasjonPanel
                saksnummer={saksnummer}
                skjæringstidspunkt={skjæringstidspunkt}
                alleKodeverk={alleKodeverk}
                radData={radData}
              />
              <ManglendeInntektsmeldingForm
                behandlingUuid={behandlingUuid}
                behandlingVersjon={behandlingVersjon}
                isReadOnly={isReadOnly}
                radData={radData}
                lagreVurdering={lagreVurdering}
                lukkArbeidsforholdRad={toggleÅpenRad}
                oppdaterTabell={oppdaterTabell}
              />
            </>
          )}
          {manglerArbeidsforhold && (
            <>
              <InntektsmeldingOpplysningerPanel
                saksnummer={saksnummer}
                inntektsmelding={inntektsmeldingerForRad[0]!}
                skalViseArbeidsforholdId={inntektsmeldingerForRad.length > 1}
                radData={radData}
                alleKodeverk={alleKodeverk}
              />
              <ManglendeArbeidsforholdForm
                behandlingUuid={behandlingUuid}
                behandlingVersjon={behandlingVersjon}
                radData={radData}
                isReadOnly={isReadOnly}
                registrerArbeidsforhold={registrerArbeidsforhold}
                lagreVurdering={lagreVurdering}
                lukkArbeidsforholdRad={toggleÅpenRad}
                oppdaterTabell={oppdaterTabell}
              />
            </>
          )}
          {harArbeidsforholdUtenInntektsmeldingMenIngenÅrsak && (
            <ArbeidsforholdInformasjonPanel
              saksnummer={saksnummer}
              skjæringstidspunkt={skjæringstidspunkt}
              alleKodeverk={alleKodeverk}
              radData={radData}
            />
          )}
          {erInaktivtArbeidsforhold && (
            <LabeledValue
              label={<FormattedMessage id="ArbeidsforholdRad.InaktivtArbeidsforhold.Tittel" />}
              value={<FormattedMessage id="ArbeidsforholdRad.InaktivtArbeidsforhold.Forklaring" />}
            />
          )}
          {erPermisjonArbeidsforhold && (
            <LabeledValue
              label={<FormattedMessage id="ArbeidsforholdRad.Permisjon.Tittel" />}
              value={<FormattedMessage id="ArbeidsforholdRad.Permisjon.Forklaring" />}
            />
          )}
        </VStack>
      }
    >
      <Table.DataCell>
        {!harÅpentAksjonspunkt && (
          <CheckmarkIcon
            title={intl.formatMessage({ id: 'ArbeidsforholdRad.Ok' })}
            color="var(--ax-text-success-decoration)"
            fontSize="1.5rem"
          />
        )}
        {harÅpentAksjonspunkt && (
          <ExclamationmarkTriangleFillIcon
            title={intl.formatMessage({ id: 'ArbeidsforholdRad.Aksjonspunkt' })}
            fontSize="1.5rem"
            color="var(--ax-text-warning-decoration)"
          />
        )}
      </Table.DataCell>
      <Table.DataCell>{arbeidsgiverNavn}</Table.DataCell>
      <Table.DataCell>
        {periode?.fom ? <PeriodLabel dateStringFom={periode.fom} dateStringTom={periode.tom} /> : '-'}
      </Table.DataCell>
      <Table.DataCell>
        <FormattedMessage id={finnKildekode(erManueltOpprettet, arbeidsforholdForRad.length > 0)} />
      </Table.DataCell>
      <Table.DataCell>
        {skalViseIMMottattdato && <DateLabel dateString={inntektsmeldingerForRad[0]!.mottattDato} />}
        {!manglerInntektsmelding &&
          arbeidsforholdForRad.length > 1 &&
          inntektsmeldingerForRad.length === arbeidsforholdForRad.length && (
            <FormattedMessage id="ArbeidsforholdRad.Mottatt" />
          )}
        {(erManueltOpprettet ||
          (manglerInntektsmelding && inntektsmeldingerForRad.length < arbeidsforholdForRad.length)) && (
          <FormattedMessage id="ArbeidsforholdRad.IkkeMottatt" />
        )}
        {(erInaktivtArbeidsforhold || erPermisjonArbeidsforhold) &&
          (skalViseIMMottattdato ? ` (${ikkeBestiltIMTekst})` : ikkeBestiltIMTekst)}
      </Table.DataCell>
    </Table.ExpandableRow>
  );
};

const finnKildekode = (erManueltOpprettet: boolean, harArbeidsforhold: boolean) => {
  if (erManueltOpprettet) {
    return 'ArbeidsforholdRad.Saksbehandler';
  }
  return harArbeidsforhold ? 'ArbeidsforholdRad.AaRegisteret' : 'ArbeidsforholdRad.Inntektsmelding';
};

const finnPeriode = (
  arbeidsforhold: Arbeidsforhold[],
  avklaring?: Avklaring,
): { fom?: string; tom?: string } | undefined => {
  if (
    avklaring?.saksbehandlersVurdering === 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER' ||
    avklaring?.saksbehandlersVurdering === 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
  ) {
    return {
      fom: avklaring.fom,
      tom: avklaring.tom,
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
