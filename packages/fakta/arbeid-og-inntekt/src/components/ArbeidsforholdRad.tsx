import { useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { CheckmarkIcon, ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Label, Table } from '@navikt/ds-react';
import { DateLabel, PeriodLabel } from '@navikt/ft-ui-komponenter';
import classnames from 'classnames/bind';
import dayjs from 'dayjs';

import { ArbeidsforholdKomplettVurderingType } from '@navikt/fp-kodeverk';
import type {
  AlleKodeverk,
  AoIArbeidsforhold,
  ArbeidOgInntektsmelding,
  Inntektsmelding,
  ManglendeInntektsmeldingVurdering,
  ManueltArbeidsforhold,
} from '@navikt/fp-types';
import { AksjonspunktÅrsak } from '@navikt/fp-types';

import type { ArbeidsforholdOgInntektRadData, Avklaring } from '../types/arbeidsforholdOgInntekt';
import { ArbeidsforholdInformasjonPanel } from './felles/ArbeidsforholdInformasjonPanel';
import { InntektsmeldingerPanel } from './felles/InntektsmeldingerPanel';
import { InntektsmeldingOpplysningerPanel } from './felles/InntektsmeldingOpplysningerPanel';
import { ManglendeArbeidsforholdForm } from './manglendeArbeidsforhold/ManglendeArbeidsforholdForm';
import { ManglendeInntektsmeldingForm } from './manglendeInntektsmelding/ManglendeInntektsmeldingForm';
import { ManueltLagtTilArbeidsforholdForm } from './manuelt/ManueltLagtTilArbeidsforholdForm';

import styles from './arbeidsforholdRad.module.css';

const classNames = classnames.bind(styles);

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
  erRadÅpen,
  alleKodeverk,
}: Props) => {
  const intl = useIntl();

  const { arbeidsgiverNavn, arbeidsgiverIdent, årsak, avklaring } = radData;

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
    () => finnPeriode(arbeidsforholdForRad, avklaring),
    [erManueltOpprettet, arbeidsforholdForRad, avklaring],
  );
  const inntektsposter = arbeidOgInntekt.inntekter.find(
    inntekt => inntekt.arbeidsgiverIdent === arbeidsgiverIdent,
  )?.inntekter;

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
        <div className={harÅpentAksjonspunkt ? styles.panelOpenAp : styles.panelOpen}>
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
              radData={radData}
            />
          )}
          {harKunInntektsmeldingOgIkkeÅrsak && (
            <InntektsmeldingOpplysningerPanel
              saksnummer={saksnummer}
              arbeidsforhold={arbeidsforholdForRad.length > 0 ? arbeidsforholdForRad[0] : undefined}
              inntektsmelding={finnInntektsmelding(
                inntektsmeldingerForRad,
                arbeidsforholdForRad.length > 0 ? arbeidsforholdForRad[0]?.internArbeidsforholdId : undefined,
              )}
              skalViseArbeidsforholdId={false}
              alleKodeverk={alleKodeverk}
              radData={radData}
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
            />
          )}
          {manglerArbeidsforhold && (
            <ManglendeArbeidsforholdForm
              saksnummer={saksnummer}
              behandlingUuid={behandlingUuid}
              behandlingVersjon={behandlingVersjon}
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
              radData={radData}
            />
          )}
        </div>
      }
    >
      <Table.DataCell>
        {!harÅpentAksjonspunkt && (
          <CheckmarkIcon title={intl.formatMessage({ id: 'ArbeidsforholdRad.Ok' })} className={styles.checkmarkIcon} />
        )}
        {harÅpentAksjonspunkt && (
          <ExclamationmarkTriangleFillIcon
            title={intl.formatMessage({ id: 'ArbeidsforholdRad.Aksjonspunkt' })}
            className={styles.exclamationmarkIcon}
          />
        )}
      </Table.DataCell>
      <Table.DataCell className={erRadÅpen ? styles.colTopPadding : undefined}>
        {erRadÅpen && <Label size="small">{arbeidsgiverNavn}</Label>}
        {!erRadÅpen && <BodyShort size="small">{arbeidsgiverNavn}</BodyShort>}
      </Table.DataCell>
      <Table.DataCell className={erRadÅpen ? styles.colTopPadding : undefined}>
        <BodyShort>
          {periode?.fom && <PeriodLabel dateStringFom={periode.fom} dateStringTom={periode.tom} />}
          {!periode && '-'}
        </BodyShort>
      </Table.DataCell>
      <Table.DataCell className={erRadÅpen ? styles.colTopPadding : undefined}>
        <BodyShort>
          <FormattedMessage id={finnKildekode(erManueltOpprettet, arbeidsforholdForRad.length > 0)} />
        </BodyShort>
      </Table.DataCell>
      <Table.DataCell className={erRadÅpen ? styles.colTopPadding : undefined}>
        <BodyShort>
          {arbeidsforholdForRad.length < 2 && inntektsmeldingerForRad.length === 1 && (
            <DateLabel dateString={inntektsmeldingerForRad[0].motattDato} />
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
