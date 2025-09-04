import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { ErrorSummary, Heading, HStack, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { dateRangesNotOverlapping } from '@navikt/ft-form-validators';
import { AksjonspunktHelpTextHTML, OverstyringKnapp } from '@navikt/ft-ui-komponenter';
import { dateFormat } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { FaktaBegrunnelseTextField, FaktaSubmitButton, validerApKodeOgHentApEnum } from '@navikt/fp-fakta-felles';
import {
  AksjonspunktKode,
  AksjonspunktStatus,
  erAksjonspunktÅpent,
  FamilieHendelseType,
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
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { type KontrollerFaktaPeriodeMedApMarkering } from '../typer/kontrollerFaktaPeriodeMedApMarkering';
import { UttakFaktaTable } from './UttakFaktaTable';

const finnAksjonspunktTekster = (aksjonspunkter: Aksjonspunkt[], ytelsefordeling: Ytelsefordeling) =>
  aksjonspunkter.filter(erAksjonspunktÅpent).map(ap => {
    const førsteUttaksdato = ytelsefordeling?.førsteUttaksdato ?? undefined;
    const førsteUttak = {
      value: dateFormat(førsteUttaksdato),
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
        aksjonspunktType: 'MANGLENDE_ARBEIDSFORHOLD',
      };
    }

    return {
      ...periode,
      originalFom: periode.fom,
    };
  });

const periodeSkalVurderesIftFørsteDato = (periode: KontrollerFaktaPeriode): boolean =>
  !(periode.utsettelseÅrsak ?? periode.oppholdÅrsak);

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
      { dato: dateFormat(dato) },
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
      { dato: dateFormat(førsteUttaksdato) },
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

  const sortertListe = [...uttakKontrollerFaktaPerioder].sort((krav1, krav2) =>
    dayjs(krav1.fom).diff(dayjs(krav2.fom)),
  );
  const sortertePerioder = leggTilAksjonspunktMarkering(
    sortertListe,
    aksjonspunkterForPanel,
    arbeidsgiverOpplysningerPerId,
  );

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<{
    uttakPerioder: KontrollerFaktaPeriodeMedApMarkering[];
    begrunnelse: string;
  }>();

  const [uttakPerioder, setUttakPerioder] = useState<KontrollerFaktaPeriodeMedApMarkering[]>(
    mellomlagretFormData?.uttakPerioder ?? sortertePerioder,
  );

  const [valgteFomDatoer, setValgteFomDatoer] = useState<string[]>([]);

  const formMethods = useForm<{ begrunnelse: string }>({
    defaultValues: {
      begrunnelse: mellomlagretFormData?.begrunnelse ?? aksjonspunkterForPanel[0]?.begrunnelse ?? '',
    },
  });

  useEffect(
    () => () => {
      setMellomlagretFormData({ uttakPerioder, begrunnelse: formMethods.getValues('begrunnelse') });
    },
    [uttakPerioder],
  );

  const automatiskeAksjonspunkter = aksjonspunkterForPanel.filter(
    a => a.definisjon !== AksjonspunktKode.OVERSTYR_FAKTA_UTTAK,
  );
  const bekreft = (begrunnelse: string) => {
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
  };

  const begrunnelse = formMethods.watch('begrunnelse');

  const [isDirty, setIsDirty] = useState(false);

  let feilmelding = null;
  if (isDirty || formMethods.formState.isDirty) {
    const erMor = fagsak.relasjonsRolleType === RelasjonsRolleType.MOR;
    feilmelding = validerPerioder(
      fagsak,
      uttakPerioder,
      erMor,
      aksjonspunkterForPanel,
      ytelsefordeling.førsteUttaksdato,
      intl,
    );
  }

  const [visNyPeriode, setVisNyPeriode] = useState(false);

  const isSubmittable =
    submittable && feilmelding === null && !!begrunnelse && !visNyPeriode && valgteFomDatoer.length === 0;

  const [erOverstyrt, setErOverstyrt] = useState(false);

  const harÅpentAksjonspunkt = aksjonspunkterForPanel.some(erAksjonspunktÅpent);
  const aksjonspunktTekster = finnAksjonspunktTekster(aksjonspunkterForPanel, ytelsefordeling);

  const erRedigerbart = !isReadOnly && (automatiskeAksjonspunkter.length > 0 || erOverstyrt);
  return (
    <VStack gap="space-32">
      <HStack gap="space-16">
        <Heading size="small" level="2">
          <FormattedMessage id="UttakFaktaForm.FaktaUttak" />
        </Heading>
        {kanOverstyre && !isReadOnly && automatiskeAksjonspunkter.length === 0 && (
          <OverstyringKnapp onClick={() => setErOverstyrt(true)} erOverstyrt={erOverstyrt} />
        )}
      </HStack>
      {harÅpentAksjonspunkt && <AksjonspunktHelpTextHTML>{aksjonspunktTekster}</AksjonspunktHelpTextHTML>}
      {feilmelding && (
        <ErrorSummary>
          <ErrorSummary.Item>{feilmelding}</ErrorSummary.Item>
        </ErrorSummary>
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
      <RhfForm formMethods={formMethods} onSubmit={(values: { begrunnelse: string }) => bekreft(values.begrunnelse)}>
        <VStack gap="space-16">
          <FaktaBegrunnelseTextField
            control={formMethods.control}
            isSubmittable
            isReadOnly={!erRedigerbart}
            hasBegrunnelse
          />
          {erRedigerbart && (
            <FaktaSubmitButton
              isSubmittable={isSubmittable}
              isReadOnly={isReadOnly}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={isDirty || formMethods.formState.isDirty}
            />
          )}
        </VStack>
      </RhfForm>
    </VStack>
  );
};
