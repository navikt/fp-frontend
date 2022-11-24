import React, {
  useCallback, FunctionComponent, useState, useEffect, useMemo,
} from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import dayjs from 'dayjs';
import { Form } from '@navikt/ft-form-hooks';
import { ErrorSummary, Heading } from '@navikt/ds-react';
import {
  AksjonspunktHelpTextHTML, FlexColumn, FlexContainer, FlexRow, OverstyringKnapp, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { AksjonspunktStatus, isAksjonspunktOpen } from '@navikt/ft-kodeverk';

import { validerApKodeOgHentApEnum } from '@fpsak-frontend/prosess-felles';
import { FaktaSubmitButtonNew, FaktaBegrunnelseTextFieldNew } from '@fpsak-frontend/fakta-felles';
import {
  Aksjonspunkt, KontrollerFaktaPeriode, Ytelsefordeling, AlleKodeverk, ArbeidsgiverOpplysningerPerId, FaktaArbeidsforhold,
} from '@fpsak-frontend/types';
import { BekreftUttaksperioderAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import { dateRangesNotOverlapping } from '@navikt/ft-form-validators';
import UttakFaktaTable from './UttakFaktaTable';
import KontrollerFaktaPeriodeMedApMarkering, { PeriodeApType } from '../typer/kontrollerFaktaPeriodeMedApMarkering';

const finnAksjonspunktTekster = (
  aksjonspunkter: Aksjonspunkt[],
  ytelsefordeling: Ytelsefordeling,
) => aksjonspunkter
  .filter((ap) => ap.status === AksjonspunktStatus.OPPRETTET)
  .map((ap) => {
    const førsteUttaksdato = ytelsefordeling && ytelsefordeling.førsteUttaksdato ? ytelsefordeling.førsteUttaksdato : undefined;
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
): KontrollerFaktaPeriodeMedApMarkering[] => perioder.map((periode, index) => {
  if (aksjonspunkter.some((ap) => ap.definisjon === AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE
      && ap.status === AksjonspunktStatus.OPPRETTET) && index === 0) {
    return {
      ...periode,
      originalFom: periode.fom,
      aksjonspunktType: PeriodeApType.START_FOM,
    };
  }
  if (aksjonspunkter.some((ap) => (ap.definisjon === AksjonspunktKode.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE
    || ap.definisjon === AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE)
      && ap.status === AksjonspunktStatus.OPPRETTET) && periode.arbeidsforhold?.arbeidsgiverReferanse
      && !arbeidsgiverOpplysningerPerId[periode.arbeidsforhold?.arbeidsgiverReferanse]) {
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

interface OwnProps {
  ytelsefordeling: Ytelsefordeling;
  uttakKontrollerFaktaPerioder: KontrollerFaktaPeriode[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  faktaArbeidsforhold: FaktaArbeidsforhold[];
  alleKodeverk: AlleKodeverk;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  formData: { uttakPerioder: KontrollerFaktaPeriodeMedApMarkering[], begrunnelse: string },
  setFormData: (data: { uttakPerioder: KontrollerFaktaPeriodeMedApMarkering[], begrunnelse: string }) => void,
  submitCallback: (aksjonspunkter: BekreftUttaksperioderAp[]) => Promise<void>;
  submittable: boolean;
  kanOverstyre: boolean;
}

const UttakFaktaForm: FunctionComponent<OwnProps> = ({
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
  const sortertePerioder = useMemo(() => {
    const sortertListe = [...uttakKontrollerFaktaPerioder].sort((krav1, krav2) => dayjs(krav1.fom).diff(dayjs(krav2.fom)));
    return leggTilAksjonspunktMarkering(sortertListe, aksjonspunkter, arbeidsgiverOpplysningerPerId);
  }, [uttakKontrollerFaktaPerioder, aksjonspunkter, arbeidsgiverOpplysningerPerId]);

  const [uttakPerioder, oppdaterUttakPerioder] = useState<KontrollerFaktaPeriodeMedApMarkering[]>(formData?.uttakPerioder || sortertePerioder);

  const formMethods = useForm<{ begrunnelse: string }>({
    defaultValues: {
      begrunnelse: formData?.begrunnelse,
    },
  });

  useEffect(() => () => {
    setFormData({ uttakPerioder, begrunnelse: formMethods.getValues('begrunnelse') });
  }, []);

  const bekreft = useCallback((begrunnelse: string) => {
    const automatiskeAksjonspunkter = aksjonspunkter.filter((a) => a.definisjon !== AksjonspunktKode.OVERSTYR_FAKTA_UTTAK);

    const overstyrAp = [{
      // TODO Fiks hack
      kode: validerApKodeOgHentApEnum(AksjonspunktKode.OVERSTYR_FAKTA_UTTAK, AksjonspunktKode.OVERSTYR_FAKTA_UTTAK),
      perioder: uttakPerioder,
      begrunnelse,
    }];

    const aksjonspunkterSomSkalBekreftes = automatiskeAksjonspunkter.map((ap) => ({
      kode: validerApKodeOgHentApEnum(ap.definisjon,
        AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,
        AksjonspunktKode.FAKTA_UTTAK_INGEN_PERIODER_KODE,
        AksjonspunktKode.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE,
        AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE),
      perioder: uttakPerioder,
      begrunnelse,
    }));

    submitCallback(aksjonspunkterSomSkalBekreftes.length > 0 ? aksjonspunkterSomSkalBekreftes : overstyrAp);
  }, [uttakPerioder]);

  const [harOverlappendePerioder, setOverlappendePerioder] = useState(false);
  useEffect(() => {
    const periodeMap = uttakPerioder.map(({ fom, tom }) => [fom, tom]);
    const isOverlapping = periodeMap.length > 0 ? !!dateRangesNotOverlapping(periodeMap) : undefined;
    setOverlappendePerioder(isOverlapping);
  }, [uttakPerioder]);

  const begrunnelse = formMethods.watch('begrunnelse');

  const harApIngenPerioder = aksjonspunkter.some((ap) => ap.definisjon === AksjonspunktKode.FAKTA_UTTAK_INGEN_PERIODER_KODE);
  const isSubmittable = submittable
    && uttakPerioder.every((a) => a.aksjonspunktType === undefined)
    && (!harApIngenPerioder || (harApIngenPerioder && uttakPerioder.length > 0))
    && !harOverlappendePerioder
    && !!begrunnelse;

  const [isDirty, setDirty] = useState<boolean>(false);

  const [erOverstyrt, setOverstyrt] = useState(false);

  const harApneAksjonspunkter = aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status));
  const aksjonspunktTekster = useMemo(() => finnAksjonspunktTekster(aksjonspunkter, ytelsefordeling), [aksjonspunkter, ytelsefordeling]);

  const erRedigerbart = aksjonspunkter.length > 0 || erOverstyrt;

  return (
    <>
      <FlexContainer>
        <FlexRow spaceBetween>
          <FlexColumn>
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <Heading size="small"><FormattedMessage id="UttakFaktaForm.FaktaUttak" /></Heading>
                </FlexColumn>
                {kanOverstyre && !readOnly && (
                  <FlexColumn>
                    <OverstyringKnapp onClick={() => setOverstyrt(true)} />
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
          <AksjonspunktHelpTextHTML>
            {aksjonspunktTekster}
          </AksjonspunktHelpTextHTML>
          <VerticalSpacer sixteenPx />
        </>
      )}
      {harOverlappendePerioder && (
        <>
          <ErrorSummary>
            <ErrorSummary.Item>
              <FormattedMessage id="UttakFaktaForm.OverlappendePerioder" />
            </ErrorSummary.Item>
          </ErrorSummary>
          <VerticalSpacer sixteenPx />
        </>
      )}
      <UttakFaktaTable
        uttakKontrollerFaktaPerioder={uttakPerioder}
        oppdaterUttakPerioder={oppdaterUttakPerioder}
        alleKodeverk={alleKodeverk}
        readOnly={readOnly}
        setDirty={setDirty}
        erRedigerbart={erRedigerbart}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        faktaArbeidsforhold={faktaArbeidsforhold}
        førsteUttaksdato={ytelsefordeling.førsteUttaksdato}
      />
      <VerticalSpacer sixteenPx />
      {erRedigerbart && (
        <>
          <VerticalSpacer sixteenPx />
          <Form formMethods={formMethods} onSubmit={(values: { begrunnelse: string }) => bekreft(values.begrunnelse)}>
            <FaktaBegrunnelseTextFieldNew
              name="begrunnelse"
              isSubmittable
              isReadOnly={readOnly}
              hasBegrunnelse
            />
            <VerticalSpacer twentyPx />
            <FaktaSubmitButtonNew
              isSubmittable={isSubmittable}
              isReadOnly={readOnly}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={isDirty || formMethods.formState.isDirty}
            />
          </Form>
        </>
      )}
    </>
  );
};

export default UttakFaktaForm;
