import { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

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

import { FaktaBegrunnelseTextField, FaktaSubmitButton, validerApKodeOgHentApEnum } from '@navikt/fp-fakta-felles';
import {
  AksjonspunktKode,
  AksjonspunktStatus,
  FamilieHendelseType,
  isAksjonspunktOpen,
  RelasjonsRolleType,
} from '@navikt/fp-kodeverk';
import type {
  Aksjonspunkt,
  ArbeidsgiverOpplysningerPerId,
  Fagsak,
  FaktaArbeidsforhold,
  KontrollerFaktaPeriode,
  Ytelsefordeling,
} from '@navikt/fp-types';
import type { BekreftUttaksperioderAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useFormData, usePanelDataContext } from '@navikt/fp-utils';

import {
  type KontrollerFaktaPeriodeMedApMarkering,
  PeriodeApType,
} from '../typer/kontrollerFaktaPeriodeMedApMarkering';
import { UttakFaktaTable } from './UttakFaktaTable';

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

interface Props {
  ytelsefordeling: Ytelsefordeling;
  uttakKontrollerFaktaPerioder: KontrollerFaktaPeriode[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  faktaArbeidsforhold?: FaktaArbeidsforhold[];
  submittable: boolean;
  kanOverstyre: boolean;
}

export const UttakFaktaForm = ({
  uttakKontrollerFaktaPerioder,
  arbeidsgiverOpplysningerPerId,
  faktaArbeidsforhold,
  ytelsefordeling,
  submittable,
  kanOverstyre,
}: Props) => {
  const intl = useIntl();

  const { alleKodeverk, submitCallback, fagsak, aksjonspunkterForPanel, isReadOnly } =
    usePanelDataContext<BekreftUttaksperioderAp[]>();

  const sortertePerioder = useMemo(() => {
    const sortertListe = [...uttakKontrollerFaktaPerioder].sort((krav1, krav2) =>
      dayjs(krav1.fom).diff(dayjs(krav2.fom)),
    );
    return leggTilAksjonspunktMarkering(sortertListe, aksjonspunkterForPanel, arbeidsgiverOpplysningerPerId);
  }, [uttakKontrollerFaktaPerioder, aksjonspunkterForPanel, arbeidsgiverOpplysningerPerId]);

  const { formData, setFormData } = useFormData<{
    uttakPerioder: KontrollerFaktaPeriodeMedApMarkering[];
    begrunnelse: string;
  }>();

  const [uttakPerioder, setUttakPerioder] = useState<KontrollerFaktaPeriodeMedApMarkering[]>(
    formData?.uttakPerioder || sortertePerioder,
  );

  const [valgteFomDatoer, setValgteFomDatoer] = useState<string[]>([]);

  const formMethods = useForm<{ begrunnelse: string }>({
    defaultValues: {
      begrunnelse: formData?.begrunnelse ?? aksjonspunkterForPanel[0]?.begrunnelse ?? '',
    },
  });

  useEffect(
    () => () => {
      setFormData({ uttakPerioder, begrunnelse: formMethods.getValues('begrunnelse') });
    },
    [uttakPerioder],
  );

  const automatiskeAksjonspunkter = aksjonspunkterForPanel.filter(
    a => a.definisjon !== AksjonspunktKode.OVERSTYR_FAKTA_UTTAK,
  );
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
      return validerPerioder(
        fagsak,
        uttakPerioder,
        erMor,
        aksjonspunkterForPanel,
        ytelsefordeling.førsteUttaksdato,
        intl,
      );
    }
    return null;
  }, [uttakPerioder, isDirty, formMethods.formState.isDirty]);

  const [visNyPeriode, setVisNyPeriode] = useState(false);

  const isSubmittable =
    submittable && feilmelding === null && !!begrunnelse && !visNyPeriode && valgteFomDatoer.length === 0;

  const [erOverstyrt, setErOverstyrt] = useState(false);

  const harApneAksjonspunkter = aksjonspunkterForPanel.some(ap => isAksjonspunktOpen(ap.status));
  const aksjonspunktTekster = useMemo(
    () => finnAksjonspunktTekster(aksjonspunkterForPanel, ytelsefordeling),
    [aksjonspunkterForPanel, ytelsefordeling],
  );

  const erRedigerbart = !isReadOnly && (automatiskeAksjonspunkter.length > 0 || erOverstyrt);

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
                {kanOverstyre && !isReadOnly && automatiskeAksjonspunkter.length === 0 && (
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
        readOnly={isReadOnly}
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
        <FaktaBegrunnelseTextField isSubmittable isReadOnly={!erRedigerbart} hasBegrunnelse />
        {erRedigerbart && (
          <>
            <VerticalSpacer twentyPx />
            <FaktaSubmitButton
              isSubmittable={isSubmittable}
              isReadOnly={isReadOnly}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={isDirty || formMethods.formState.isDirty}
            />
          </>
        )}
      </Form>
    </>
  );
};
