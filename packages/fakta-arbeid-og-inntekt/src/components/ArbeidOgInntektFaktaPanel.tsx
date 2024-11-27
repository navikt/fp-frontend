import React, { FunctionComponent, useCallback, useEffect, useRef,useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Alert,Button } from '@navikt/ds-react';
import { Table,VerticalSpacer } from '@navikt/ft-ui-komponenter';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  ArbeidsforholdKomplettVurderingType,
  KodeverkType,
  VenteArsakType,
} from '@navikt/fp-kodeverk';
import { SettPaVentModalIndex } from '@navikt/fp-modal-sett-pa-vent';
import {
  Aksjonspunkt,
  AlleKodeverk,
  AoIArbeidsforhold,
  ArbeidOgInntektsmelding,
  ArbeidsgiverOpplysningerPerId,
  Behandling,
  Inntektsmelding,
  ManglendeInntektsmeldingVurdering,
  ManueltArbeidsforhold,
} from '@navikt/fp-types';
import { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import { useIsFormDirty } from '../DirtyFormProvider';
import ArbeidsforholdOgInntektRadData, { Avklaring } from '../types/arbeidsforholdOgInntekt';
import ArbeidsforholdRad from './ArbeidsforholdRad';
import ArbeidsOgInntektOverstyrPanel from './ArbeidsOgInntektOverstyrPanel';

import styles from './arbeidOgInntektFaktaPanel.module.css';

const HEADER_TEXT_IDS = [
  'EMPTY1',
  'ArbeidOgInntektFaktaPanel.Arbeidsforhold',
  'ArbeidOgInntektFaktaPanel.Periode',
  'ArbeidOgInntektFaktaPanel.Kilde',
  'ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt',
  'EMPTY2',
];

const sorterTabell = (radX: ArbeidsforholdOgInntektRadData, radY: ArbeidsforholdOgInntektRadData): number => {
  const radXHarAp = radX.årsak;
  const radYHarAp = radY.årsak;
  if (radXHarAp && !radYHarAp) {
    return -1;
  }
  if (radYHarAp && !radXHarAp) {
    return 1;
  }
  return radX.arbeidsgiverNavn.localeCompare(radY.arbeidsgiverNavn);
};

const erMatch = (arbeidsforhold: AoIArbeidsforhold, inntektsmelding: Inntektsmelding): boolean =>
  inntektsmelding.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverIdent;

const lagAvklaring = (arbeidsforhold: AoIArbeidsforhold, arbeidsgiverNavn: string): Avklaring => {
  const avklaring = {
    saksbehandlersVurdering: arbeidsforhold.saksbehandlersVurdering,
    begrunnelse: arbeidsforhold.begrunnelse,
  };
  if (
    arbeidsforhold.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER ||
    arbeidsforhold.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING
  ) {
    return {
      ...avklaring,
      arbeidsgiverNavn,
      fom: arbeidsforhold.fom,
      tom: arbeidsforhold.tom,
      stillingsprosent: arbeidsforhold.stillingsprosent,
    };
  }
  return avklaring;
};

const sorterGittÅrsak = (arbeidsforhold1: AoIArbeidsforhold) => (arbeidsforhold1.årsak ? -1 : 1);

const byggTabellStruktur = (
  arbeidOgInntekt: ArbeidOgInntektsmelding,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ArbeidsforholdOgInntektRadData[] => {
  const { arbeidsforhold, inntektsmeldinger } = arbeidOgInntekt;

  const alleArbeidsforhold = [...arbeidsforhold.sort(sorterGittÅrsak)].reduce<ArbeidsforholdOgInntektRadData[]>(
    (acc, af) => {
      const tidligereAf = acc.find(a => a.arbeidsgiverIdent === af.arbeidsgiverIdent);

      if (tidligereAf) {
        return acc;
      }
      const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[af.arbeidsgiverIdent];
      const arbeidsgiverNavn = arbeidsgiverOpplysninger.navn;
      const årsak = af.årsak ? af.årsak : inntektsmeldinger.find(i => erMatch(af, i))?.årsak;

      return acc.concat({
        arbeidsgiverIdent: af.arbeidsgiverIdent,
        arbeidsgiverNavn,
        arbeidsgiverFødselsdato: arbeidsgiverOpplysninger.erPrivatPerson
          ? arbeidsgiverOpplysninger.fødselsdato
          : undefined,
        årsak,
        avklaring: af.saksbehandlersVurdering ? lagAvklaring(af, arbeidsgiverNavn) : undefined,
      });
    },
    [],
  );

  const alleInntektsmeldingerSomManglerArbeidsforhold = inntektsmeldinger
    .filter(im => !arbeidsforhold.some(af => erMatch(af, im)))
    .map<ArbeidsforholdOgInntektRadData>(im => ({
      arbeidsgiverIdent: im.arbeidsgiverIdent,
      internArbeidsforholdId: im.internArbeidsforholdId,
      arbeidsgiverNavn: arbeidsgiverOpplysningerPerId[im.arbeidsgiverIdent].navn,
      arbeidsgiverFødselsdato: arbeidsgiverOpplysningerPerId[im.arbeidsgiverIdent].erPrivatPerson
        ? arbeidsgiverOpplysningerPerId[im.arbeidsgiverIdent].fødselsdato
        : undefined,
      årsak: im.årsak,
      avklaring: im.saksbehandlersVurdering
        ? {
            saksbehandlersVurdering: im.saksbehandlersVurdering,
            begrunnelse: im.begrunnelse,
          }
        : undefined,
    }));

  return alleArbeidsforhold.concat(alleInntektsmeldingerSomManglerArbeidsforhold).sort(sorterTabell);
};

const finnUløstArbeidsforholdIndex = (tabellData: ArbeidsforholdOgInntektRadData[]): number[] => {
  const index = tabellData.findIndex(d => d.årsak && !d.avklaring);
  return index !== -1 ? [index] : [];
};

interface OwnProps {
  saksnummer: string;
  behandling: Behandling;
  aksjonspunkt?: Aksjonspunkt;
  readOnly: boolean;
  formData?: ArbeidsforholdOgInntektRadData[];
  setFormData: (data: ArbeidsforholdOgInntektRadData[]) => void;
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  registrerArbeidsforhold: (params: ManueltArbeidsforhold) => Promise<void>;
  lagreVurdering: (params: ManglendeInntektsmeldingVurdering) => Promise<void>;
  lagreCallback: (aksjonspunktData: FaktaAksjonspunkt) => Promise<void>;
  settBehandlingPåVentCallback: (params: { frist?: string; ventearsak: string }) => Promise<any>;
  erOverstyrer: boolean;
  alleKodeverk: AlleKodeverk;
  åpneForNyVurdering: () => void;
}

const ArbeidOgInntektFaktaPanel: FunctionComponent<OwnProps> = ({
  saksnummer,
  behandling,
  aksjonspunkt,
  readOnly,
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
  registrerArbeidsforhold,
  lagreVurdering,
  formData,
  setFormData,
  erOverstyrer,
  lagreCallback,
  settBehandlingPåVentCallback,
  alleKodeverk,
  åpneForNyVurdering,
}) => {
  const [erKnappTrykket, setErKnappTrykket] = useState(false);
  const [visSettPåVentModal, setVisSettPåVentModal] = useState(false);
  const [erOverstyrt, setErOverstyrt] = useState(false);

  const [tabellRader, setTabellRader] = useState<ArbeidsforholdOgInntektRadData[]>(
    formData || byggTabellStruktur(arbeidOgInntekt, arbeidsgiverOpplysningerPerId),
  );
  const [åpneRadIndexer, setÅpneRadIndexer] = useState(finnUløstArbeidsforholdIndex(tabellRader));

  const isDirty = useIsFormDirty();

  useEffect(
    () => () => {
      setFormData(tabellRader);
    },
    [tabellRader],
  );

  const toggleÅpenRad = useCallback(
    (index: number) => {
      if (åpneRadIndexer.some(radIndex => radIndex === index)) {
        setÅpneRadIndexer(åpneRadIndexer.filter(i => i !== index));
      } else {
        setÅpneRadIndexer(åpneRadIndexer.concat(index));
      }
    },
    [åpneRadIndexer, setÅpneRadIndexer],
  );

  const tableRef = useRef<HTMLTableElement>(null);
  const oppdaterTabellData = useCallback(
    (data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => {
      setTabellRader(data);
      setÅpneRadIndexer(finnUløstArbeidsforholdIndex(data(tabellRader)));
      tableRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    },
    [tabellRader],
  );

  const lagreOgFortsett = useCallback(() => {
    setErKnappTrykket(true);
    lagreCallback({
      kode: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
    });
  }, [behandling.versjon]);

  const gjenåpneAksjonspunkt = useCallback(() => {
    setErKnappTrykket(true);
    åpneForNyVurdering();
  }, [behandling.versjon]);

  const settPaVent = useCallback(
    (params: { frist?: string; ventearsak?: string }) => {
      setErKnappTrykket(true);
      setVisSettPåVentModal(false);

      const { frist, ventearsak } = params;
      if (ventearsak) {
        settBehandlingPåVentCallback({ frist, ventearsak });
      }
    },
    [behandling.versjon],
  );

  const kanSettePåVent = tabellRader.some(
    d =>
      d.avklaring?.saksbehandlersVurdering ===
        ArbeidsforholdKomplettVurderingType.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING ||
      d.avklaring?.saksbehandlersVurdering ===
        ArbeidsforholdKomplettVurderingType.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD,
  );
  const harBehandletAllePerioder = tabellRader.every(d => !d.årsak || (d.årsak && d.avklaring));

  const harIngenAksjonspunkt = aksjonspunkt === undefined;
  const erAksjonspunktAvsluttet = aksjonspunkt?.status === AksjonspunktStatus.UTFORT;
  const erAksjonspunktApent = aksjonspunkt?.status === AksjonspunktStatus.OPPRETTET;
  const erOverstyrerOgHarIngenAksjonspunkt = erOverstyrer && harIngenAksjonspunkt;

  const skalViseÅpneForNyVurderingKnapp = !readOnly && (erAksjonspunktAvsluttet || erOverstyrerOgHarIngenAksjonspunkt);
  const skalViseSettPåVentKnapp =
    !readOnly && erAksjonspunktApent && harBehandletAllePerioder && !isDirty && kanSettePåVent;
  const skalViseBekrefteKnapp =
    !readOnly && erAksjonspunktApent && harBehandletAllePerioder && !isDirty && !kanSettePåVent;

  return (
    <>
      <ArbeidsOgInntektOverstyrPanel
        behandling={behandling}
        aksjonspunkt={aksjonspunkt}
        readOnly={readOnly}
        arbeidOgInntekt={arbeidOgInntekt}
        registrerArbeidsforhold={registrerArbeidsforhold}
        erOverstyrer={erOverstyrer}
        tabellData={tabellRader}
        settÅpneRadIndexer={setÅpneRadIndexer}
        setErOverstyrt={setErOverstyrt}
        oppdaterTabell={oppdaterTabellData}
      />
      <Table ref={tableRef} headerTextCodes={HEADER_TEXT_IDS} noHover hasGrayHeader>
        {tabellRader.map((radData, index) => (
          <ArbeidsforholdRad
            key={`${radData.arbeidsgiverNavn}${radData.arbeidsgiverIdent}${index}`} // nosonar
            arbeidOgInntekt={arbeidOgInntekt}
            saksnummer={saksnummer}
            behandlingUuid={behandling.uuid}
            behandlingVersjon={behandling.versjon}
            radData={radData}
            isReadOnly={readOnly || erAksjonspunktAvsluttet || harIngenAksjonspunkt}
            registrerArbeidsforhold={registrerArbeidsforhold}
            lagreVurdering={lagreVurdering}
            toggleÅpenRad={() => toggleÅpenRad(index)}
            erOverstyrt={erOverstyrt}
            oppdaterTabell={oppdaterTabellData}
            erRadÅpen={åpneRadIndexer.includes(index)}
            alleKodeverk={alleKodeverk}
          />
        ))}
      </Table>
      <VerticalSpacer sixteenPx />
      {skalViseSettPåVentKnapp && (
        <>
          <Button
            size="small"
            variant="primary"
            disabled={erKnappTrykket}
            onClick={() => setVisSettPåVentModal(true)}
            type="button"
          >
            <FormattedMessage id="ArbeidOgInntektFaktaPanel.SettPaVent" />
          </Button>
          <SettPaVentModalIndex
            submitCallback={settPaVent}
            cancelEvent={() => setVisSettPåVentModal(false)}
            defaultVenteårsak={VenteArsakType.VENT_OPDT_INNTEKTSMELDING}
            hasManualPaVent
            ventearsaker={alleKodeverk[KodeverkType.VENT_AARSAK]}
            erTilbakekreving={false}
            showModal={visSettPåVentModal}
          />
        </>
      )}
      {skalViseBekrefteKnapp && (
        <Button
          size="small"
          variant="primary"
          disabled={erKnappTrykket}
          loading={erKnappTrykket}
          onClick={lagreOgFortsett}
          type="button"
        >
          <FormattedMessage id="ArbeidOgInntektFaktaPanel.Bekreft" />
        </Button>
      )}
      {skalViseÅpneForNyVurderingKnapp && (
        <>
          <div className={styles.alertStripe}>
            <Alert variant="info">
              <FormattedMessage id="ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring" />
            </Alert>
          </div>
          <VerticalSpacer sixteenPx />
          <Button
            size="small"
            variant="secondary"
            disabled={erKnappTrykket}
            loading={erKnappTrykket}
            onClick={gjenåpneAksjonspunkt}
            type="button"
          >
            <FormattedMessage id="ArbeidOgInntektFaktaPanel.ApneForNyVurdering" />
          </Button>
        </>
      )}
    </>
  );
};

export default ArbeidOgInntektFaktaPanel;
