import { FormattedMessage, useIntl } from 'react-intl';

import { CheckmarkIcon, ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Table, VStack } from '@navikt/ds-react';
import { DateLabel, PeriodLabel } from '@navikt/ft-ui-komponenter';
import classnames from 'classnames/bind';
import dayjs from 'dayjs';

import type {
  AlleKodeverk,
  AoIArbeidsforhold,
  ManglendeInntektsmeldingVurdering,
  ManueltArbeidsforhold,
} from '@navikt/fp-types';

import type { ArbeidsforholdOgInntektRadData, Avklaring } from '../types/arbeidsforholdOgInntekt';
import { ArbeidsforholdInformasjonPanel } from './felles/ArbeidsforholdInformasjonPanel';
import { InntektsmeldingerPanel } from './felles/InntektsmeldingerPanel';
import { InntektsmeldingOpplysningerPanel } from './felles/InntektsmeldingOpplysningerPanel';
import { ManglendeArbeidsforholdForm } from './manglendeArbeidsforhold/ManglendeArbeidsforholdForm';
import { ManglendeInntektsmeldingForm } from './manglendeInntektsmelding/ManglendeInntektsmeldingForm';
import { ManueltLagtTilArbeidsforholdForm } from './manuelt/ManueltLagtTilArbeidsforholdForm';

import styles from './arbeidsforholdRad.module.css';

const classNames = classnames.bind(styles);

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

  const { inntektsmeldingerForRad, arbeidsforholdForRad, arbeidsgiverNavn, avklaring, årsak } = radData;

  const erManueltOpprettet = avklaring?.saksbehandlersVurdering === 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER';
  const harArbeidsforholdOgInntektsmelding =
    arbeidsforholdForRad.length > 0 && inntektsmeldingerForRad.length > 0 && !årsak;
  const manglerInntektsmelding = årsak === 'MANGLENDE_INNTEKTSMELDING';
  const manglerArbeidsforhold = årsak === 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD';
  const harÅpentAksjonspunkt = !!årsak && !avklaring?.saksbehandlersVurdering;
  const harArbeidsforholdUtenInntektsmeldingMenIngenÅrsak =
    arbeidsforholdForRad.length > 0 && inntektsmeldingerForRad.length === 0 && !årsak && !erManueltOpprettet;
  const harKunInntektsmeldingOgIkkeÅrsak =
    arbeidsforholdForRad.length === 0 && inntektsmeldingerForRad.length > 0 && !årsak;

  const periode = finnPeriode(arbeidsforholdForRad, avklaring);

  return (
    <Table.ExpandableRow
      open={erRadÅpen}
      onOpenChange={toggleÅpenRad}
      expandOnRowClick
      togglePlacement="right"
      contentGutter="none"
      className={classNames('row', {
        isOpen: erRadÅpen,
        isApOpen: harÅpentAksjonspunkt,
      })}
      content={
        <VStack gap="space-16" className={harÅpentAksjonspunkt ? styles['panelOpenAp'] : styles['panelOpen']}>
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
              arbeidsforhold={arbeidsforholdForRad.length > 0 ? arbeidsforholdForRad[0] : undefined}
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
        </VStack>
      }
    >
      <Table.DataCell>
        {!harÅpentAksjonspunkt && (
          <CheckmarkIcon
            title={intl.formatMessage({ id: 'ArbeidsforholdRad.Ok' })}
            className={styles['checkmarkIcon']}
          />
        )}
        {harÅpentAksjonspunkt && (
          <ExclamationmarkTriangleFillIcon
            title={intl.formatMessage({ id: 'ArbeidsforholdRad.Aksjonspunkt' })}
            className={styles['exclamationmarkIcon']}
          />
        )}
      </Table.DataCell>
      <Table.DataCell>
        <BodyShort>{arbeidsgiverNavn}</BodyShort>
      </Table.DataCell>
      <Table.DataCell>
        <BodyShort>
          {periode?.fom ? <PeriodLabel dateStringFom={periode.fom} dateStringTom={periode.tom} /> : '-'}
        </BodyShort>
      </Table.DataCell>
      <Table.DataCell>
        <BodyShort>
          <FormattedMessage id={finnKildekode(erManueltOpprettet, arbeidsforholdForRad.length > 0)} />
        </BodyShort>
      </Table.DataCell>
      <Table.DataCell>
        <BodyShort>
          {arbeidsforholdForRad.length < 2 && inntektsmeldingerForRad.length === 1 && (
            <DateLabel dateString={inntektsmeldingerForRad[0]!.mottattDato} />
          )}
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
