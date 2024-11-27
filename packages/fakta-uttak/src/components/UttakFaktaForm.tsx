import React, { FunctionComponent, useCallback, useEffect, useMemo,useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';

import { ErrorSummary, Heading } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { dateRangesNotOverlapping } from '@navikt/ft-form-validators';
import {
  AksjonspunktHelpTextHTML,
  FlexColumn,
  FlexContainer,
  FlexRow,
  OverstyringKnapp,
  VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { FaktaBegrunnelseTextFieldNew, FaktaSubmitButtonNew, validerApKodeOgHentApEnum } from '@navikt/fp-fakta-felles';
import {
  AksjonspunktKode,
  AksjonspunktStatus,
  FamilieHendelseType,
  isAksjonspunktOpen,
  RelasjonsRolleType,
} from '@navikt/fp-kodeverk';
import {
  Aksjonspunkt,
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  Fagsak,
  FaktaArbeidsforhold,
  KontrollerFaktaPeriode,
  Ytelsefordeling,
} from '@navikt/fp-types';
import { BekreftUttaksperioderAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import KontrollerFaktaPeriodeMedApMarkering, { PeriodeApType } from '../typer/kontrollerFaktaPeriodeMedApMarkering';
import UttakFaktaTable from './UttakFaktaTable';

const finnAksjonspunktTekster = (aksjonspunkter: Aksjonspunkt[], ytelsefordeling: Ytelsefordeling) =>
  aksjonspunkter
    .filter(ap => ap.status === AksjonspunktStatus.OPPRETTET)
    .map(ap => {
      const førsteUttaksdato = ytelsefordeling?.førsteUttaksdato ?? undefined;
      const førsteUttak = {
        value: dayjs(førsteUttaksdato).format(DDMMYYYY_DATE_FORMAT),
      };

      return (
        <FormattedMessage
          key={`UttakFaktaForm.Aksjonspunkt.${ap.definisjon}`}
          id={`UttakFaktaForm.Aksjonspunkt.${ap.definisjon}`}
          values={førsteUttak}
        />
      );
    });

const leggTilAksjonspunktMarkering = (
  perioder: KontrollerFaktaPeriode[],
  aksjonspunkter: Aksjonspunkt[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): KontrollerFaktaPeriodeMedApMarkering[] =>
  perioder.map(periode => {
    if (
      aksjonspunkter.some(
        ap =>
          (ap.definisjon === AksjonspunktKode.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE ||
            ap.definisjon === AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE) &&
          ap.status === AksjonspunktStatus.OPPRETTET,
      ) &&
      periode.arbeidsforhold?.arbeidsgiverReferanse &&
      !arbeidsgiverOpplysningerPerId[periode.arbeidsforhold?.arbeidsgiverReferanse]
    ) {
      return {
        ...periode,
        originalFom: periode.fom,
        aksjonspunktType: PeriodeApType.MANGLENDE_ARBEIDSFORHOLD,
      };
    }

    return {
      ...periode,
      originalFom: periode.fom,
    };
  });

const periodeSkalVurderesIftFørsteDato = (periode: KontrollerFaktaPeriode): boolean =>
  !(periode.utsettelseÅrsak || periode.oppholdÅrsak);

const valider = (
  uttakPerioder: KontrollerFaktaPeriodeMedApMarkering[],
  erMor: boolean,
  intl: IntlShape,
  dato: string,
  erFørsteUttaktsdato: boolean,
) => {
  if (
    uttakPerioder.filter(up => erMor || periodeSkalVurderesIftFørsteDato(up)).some(up => dayjs(up.fom).isBefore(dato))
  ) {
    return intl.formatMessage(
      {
        id: erFørsteUttaktsdato
          ? 'UttakFaktaDetailForm.ErFørFørsteUttaktsdato'
          : 'UttakFaktaDetailForm.ErFørFødselsdato',
      },
      { dato: dayjs(dato).format(DDMMYYYY_DATE_FORMAT) },
    );
  }

  return undefined;
};

const validerPerioder = (
  fagsak: Fagsak,
  uttakPerioder: KontrollerFaktaPeriodeMedApMarkering[],
  erMor: boolean,
  aksjonspunkter: Aksjonspunkt[],
  førsteUttaksdato: string,
  intl: IntlShape,
): string | null => {
  const periodeMap = uttakPerioder.map(({ fom, tom }) => [fom, tom]);
  const erOverlappendePerioder = periodeMap.length > 0 ? !!dateRangesNotOverlapping(periodeMap) : undefined;
  if (erOverlappendePerioder) {
    return intl.formatMessage({ id: 'UttakFaktaForm.OverlappendePerioder' });
  }

  const fødselsdato =
    fagsak.familiehendelse?.hendelseType === FamilieHendelseType.FODSEL
      ? fagsak.familiehendelse.hendelseDato
      : undefined;
  const brukFødselsdato = erMor && !!fødselsdato && dayjs(fødselsdato).isBefore(førsteUttaksdato);
  const tidligsteDato = brukFødselsdato ? fødselsdato : førsteUttaksdato;

  if (uttakPerioder.every(up => !dayjs(up.fom).isSame(førsteUttaksdato))) {
    return intl.formatMessage(
      {
        id: 'UttakFaktaDetailForm.ErIkkeLikForsteUttaksdato',
      },
      { dato: dayjs(førsteUttaksdato).format(DDMMYYYY_DATE_FORMAT) },
    );
  }

  const feilmelding = valider(uttakPerioder, erMor, intl, tidligsteDato, brukFødselsdato);
  if (feilmelding) {
    return feilmelding;
  }

  const harApIngenPerioder = aksjonspunkter.some(
    ap => ap.definisjon === AksjonspunktKode.FAKTA_UTTAK_INGEN_PERIODER_KODE,
  );

  return uttakPerioder.every(a => a.aksjonspunktType === undefined) &&
    (!harApIngenPerioder || (harApIngenPerioder && uttakPerioder.length > 0))
    ? null
    : '';
};

interface OwnProps {
  fagsak: Fagsak;
  ytelsefordeling: Ytelsefordeling;
  uttakKontrollerFaktaPerioder: KontrollerFaktaPeriode[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  faktaArbeidsforhold: FaktaArbeidsforhold[];
  alleKodeverk: AlleKodeverk;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  formData: { uttakPerioder: KontrollerFaktaPeriodeMedApMarkering[]; begrunnelse: string };
  setFormData: (data: { uttakPerioder: KontrollerFaktaPeriodeMedApMarkering[]; begrunnelse: string }) => void;
  submitCallback: (aksjonspunkter: BekreftUttaksperioderAp[]) => Promise<void>;
  submittable: boolean;
  kanOverstyre: boolean;
}

const UttakFaktaForm: FunctionComponent<OwnProps> = ({
  fagsak,
  uttakKontrollerFaktaPerioder,
  arbeidsgiverOpplysningerPerId,
  faktaArbeidsforhold,
  ytelsefordeling,
  alleKodeverk,
  aksjonspunkter,
  readOnly,
  formData,
  setFormData,
  submitCallback,
  submittable,
  kanOverstyre,
}) => {
  const intl = useIntl();

  const sortertePerioder = useMemo(() => {
    const sortertListe = [...uttakKontrollerFaktaPerioder].sort((krav1, krav2) =>
      dayjs(krav1.fom).diff(dayjs(krav2.fom)),
    );
    return leggTilAksjonspunktMarkering(sortertListe, aksjonspunkter, arbeidsgiverOpplysningerPerId);
  }, [uttakKontrollerFaktaPerioder, aksjonspunkter, arbeidsgiverOpplysningerPerId]);

  const [uttakPerioder, setUttakPerioder] = useState<KontrollerFaktaPeriodeMedApMarkering[]>(
    formData?.uttakPerioder || sortertePerioder,
  );

  const [valgteFomDatoer, setValgteFomDatoer] = useState<string[]>([]);

  const formMethods = useForm<{ begrunnelse: string }>({
    defaultValues: {
      begrunnelse: formData?.begrunnelse || (aksjonspunkter.length > 0 ? aksjonspunkter[0].begrunnelse : undefined),
    },
  });

  useEffect(
    () => () => {
      setFormData({ uttakPerioder, begrunnelse: formMethods.getValues('begrunnelse') });
    },
    [uttakPerioder],
  );

  const automatiskeAksjonspunkter = aksjonspunkter.filter(a => a.definisjon !== AksjonspunktKode.OVERSTYR_FAKTA_UTTAK);
  const bekreft = useCallback(
    (begrunnelse: string) => {
      const overstyrAp = [
        {
          // TODO Fiks hack
          kode: validerApKodeOgHentApEnum(AksjonspunktKode.OVERSTYR_FAKTA_UTTAK, AksjonspunktKode.OVERSTYR_FAKTA_UTTAK),
          perioder: uttakPerioder,
          begrunnelse,
        },
      ];

      const aksjonspunkterSomSkalBekreftes = automatiskeAksjonspunkter.map(ap => ({
        kode: validerApKodeOgHentApEnum(
          ap.definisjon,
          AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,
          AksjonspunktKode.FAKTA_UTTAK_INGEN_PERIODER_KODE,
          AksjonspunktKode.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE,
          AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE,
        ),
        perioder: uttakPerioder,
        begrunnelse,
      }));

      return submitCallback(aksjonspunkterSomSkalBekreftes.length > 0 ? aksjonspunkterSomSkalBekreftes : overstyrAp);
    },
    [uttakPerioder],
  );

  const begrunnelse = formMethods.watch('begrunnelse');

  const [isDirty, setIsDirty] = useState(false);

  const feilmelding = useMemo(() => {
    if (isDirty || formMethods.formState.isDirty) {
      const erMor = fagsak.relasjonsRolleType === RelasjonsRolleType.MOR;
      return validerPerioder(fagsak, uttakPerioder, erMor, aksjonspunkter, ytelsefordeling.førsteUttaksdato, intl);
    }
    return null;
  }, [uttakPerioder, isDirty, formMethods.formState.isDirty]);

  const [visNyPeriode, setVisNyPeriode] = useState(false);

  const isSubmittable =
    submittable && feilmelding === null && !!begrunnelse && !visNyPeriode && valgteFomDatoer.length === 0;

  const [erOverstyrt, setErOverstyrt] = useState(false);

  const harApneAksjonspunkter = aksjonspunkter.some(ap => isAksjonspunktOpen(ap.status));
  const aksjonspunktTekster = useMemo(
    () => finnAksjonspunktTekster(aksjonspunkter, ytelsefordeling),
    [aksjonspunkter, ytelsefordeling],
  );

  const erRedigerbart = !readOnly && (automatiskeAksjonspunkter.length > 0 || erOverstyrt);

  return (
    <>
      <FlexContainer>
        <FlexRow spaceBetween>
          <FlexColumn>
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <Heading size="small">
                    <FormattedMessage id="UttakFaktaForm.FaktaUttak" />
                  </Heading>
                </FlexColumn>
                {kanOverstyre && !readOnly && automatiskeAksjonspunkter.length === 0 && (
                  <FlexColumn>
                    <OverstyringKnapp onClick={() => setErOverstyrt(true)} erOverstyrt={erOverstyrt} />
                  </FlexColumn>
                )}
              </FlexRow>
            </FlexContainer>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
      <VerticalSpacer thirtyTwoPx />
      {harApneAksjonspunkter && (
        <>
          <AksjonspunktHelpTextHTML>{aksjonspunktTekster}</AksjonspunktHelpTextHTML>
          <VerticalSpacer sixteenPx />
        </>
      )}
      {feilmelding && (
        <>
          <ErrorSummary>
            <ErrorSummary.Item>{feilmelding}</ErrorSummary.Item>
          </ErrorSummary>
          <VerticalSpacer sixteenPx />
        </>
      )}
      <UttakFaktaTable
        fagsak={fagsak}
        valgteFomDatoer={valgteFomDatoer}
        setValgteFomDatoer={setValgteFomDatoer}
        uttakKontrollerFaktaPerioder={uttakPerioder}
        oppdaterUttakPerioder={setUttakPerioder}
        alleKodeverk={alleKodeverk}
        readOnly={readOnly}
        setDirty={setIsDirty}
        erRedigerbart={erRedigerbart}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        faktaArbeidsforhold={faktaArbeidsforhold}
        visNyPeriode={visNyPeriode}
        settVisNyPeriode={setVisNyPeriode}
      />
      <VerticalSpacer sixteenPx />
      <VerticalSpacer sixteenPx />
      <Form formMethods={formMethods} onSubmit={(values: { begrunnelse: string }) => bekreft(values.begrunnelse)}>
        <FaktaBegrunnelseTextFieldNew isSubmittable isReadOnly={!erRedigerbart} hasBegrunnelse />
        {erRedigerbart && (
          <>
            <VerticalSpacer twentyPx />
            <FaktaSubmitButtonNew
              isSubmittable={isSubmittable}
              isReadOnly={readOnly}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={isDirty || formMethods.formState.isDirty}
            />
          </>
        )}
      </Form>
    </>
  );
};

export default UttakFaktaForm;
