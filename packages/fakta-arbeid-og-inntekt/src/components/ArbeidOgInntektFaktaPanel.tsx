import React, {
  FunctionComponent, useState, useEffect, useCallback, useRef,
} from 'react';
import { FormattedMessage } from 'react-intl';
import { Hovedknapp } from 'nav-frontend-knapper';

import {
  Aksjonspunkt, AlleKodeverk, AoIArbeidsforhold, ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId,
  Behandling, Inntektsmelding, ManglendeInntektsmeldingVurdering, ManueltArbeidsforhold,
} from '@fpsak-frontend/types';
import { FaktaAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import SettPaVentModalIndex from '@fpsak-frontend/modal-sett-pa-vent';
import { VerticalSpacer, Table } from '@fpsak-frontend/shared-components';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import ArbeidsforholdKomplettVurderingType from '@fpsak-frontend/kodeverk/src/arbeidsforholdKomplettVurderingType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import venteArsakType from '@fpsak-frontend/kodeverk/src/venteArsakType';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import ArbeidsforholdRad from './ArbeidsforholdRad';
import ArbeidsforholdOgInntektRadData, { Avklaring } from '../types/arbeidsforholdOgInntekt';
import ArbeidsOgInntektOverstyrPanel from './ArbeidsOgInntektOverstyrPanel';
import { useIsFormDirty } from '../DirtyFormProvider';

const HEADER_TEXT_IDS = [
  'EMPTY1',
  'ArbeidOgInntektFaktaPanel.Arbeidsforhold',
  'ArbeidOgInntektFaktaPanel.Periode',
  'ArbeidOgInntektFaktaPanel.Kilde',
  'ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt',
  'EMPTY2',
];

const sorterTabell = (
  radX: ArbeidsforholdOgInntektRadData,
  radY: ArbeidsforholdOgInntektRadData,
): number => {
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

const erMatch = (
  arbeidsforhold: AoIArbeidsforhold,
  inntektsmelding: Inntektsmelding,
): boolean => inntektsmelding.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverIdent
  && (!inntektsmelding.internArbeidsforholdId || inntektsmelding.internArbeidsforholdId === arbeidsforhold.internArbeidsforholdId);

const lagAvklaring = (
  arbeidsforhold: AoIArbeidsforhold,
  arbeidsgiverNavn: string,
): Avklaring => {
  const avklaring = {
    saksbehandlersVurdering: arbeidsforhold.saksbehandlersVurdering,
    begrunnelse: arbeidsforhold.begrunnelse,
  };
  if (arbeidsforhold.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER
    || arbeidsforhold.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING) {
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

const sorterGittÅrsak = (
  arbeidsforhold1: AoIArbeidsforhold,
) => (arbeidsforhold1.årsak ? -1 : 1);

const byggTabellStruktur = (
  arbeidOgInntekt: ArbeidOgInntektsmelding,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ArbeidsforholdOgInntektRadData[] => {
  const { arbeidsforhold, inntektsmeldinger } = arbeidOgInntekt;

  const alleArbeidsforhold = [...arbeidsforhold.sort(sorterGittÅrsak)]
    .reduce<ArbeidsforholdOgInntektRadData[]>((acc, af) => {
      const tidligereAf = acc.find((a) => a.arbeidsgiverIdent === af.arbeidsgiverIdent);

      if (tidligereAf) {
        return acc;
      }
      const arbeidsgiverNavn = arbeidsgiverOpplysningerPerId[af.arbeidsgiverIdent].navn;
      const årsak = af.årsak ? af.årsak : inntektsmeldinger.find((i) => erMatch(af, i))?.årsak;

      return acc.concat({
        arbeidsgiverIdent: af.arbeidsgiverIdent,
        internArbeidsforholdId: af.internArbeidsforholdId,
        arbeidsgiverNavn,
        årsak,
        avklaring: af.saksbehandlersVurdering ? lagAvklaring(af, arbeidsgiverNavn) : undefined,
      });
    }, []);

  const alleInntektsmeldingerSomManglerArbeidsforhold = inntektsmeldinger
    .filter((im) => !arbeidsforhold.some((af) => erMatch(af, im)))
    .map<ArbeidsforholdOgInntektRadData>((im) => ({
      arbeidsgiverIdent: im.arbeidsgiverIdent,
      internArbeidsforholdId: im.internArbeidsforholdId,
      arbeidsgiverNavn: arbeidsgiverOpplysningerPerId[im.arbeidsgiverIdent].navn,
      årsak: im.årsak,
      avklaring: im.saksbehandlersVurdering ? {
        saksbehandlersVurdering: im.saksbehandlersVurdering,
        begrunnelse: im.begrunnelse,
      } : undefined,
    }));

  return alleArbeidsforhold.concat(alleInntektsmeldingerSomManglerArbeidsforhold).sort(sorterTabell);
};

const finnUløstArbeidsforholdIndex = (
  tabellData: ArbeidsforholdOgInntektRadData[],
): number[] => {
  const index = tabellData.findIndex((d) => d.årsak && !d.avklaring);
  return index !== -1 ? [index] : [];
};

interface OwnProps {
  saksnummer: string;
  behandling: Behandling;
  aksjonspunkt?: Aksjonspunkt;
  readOnly: boolean;
  formData?: ArbeidsforholdOgInntektRadData[],
  setFormData: (data: ArbeidsforholdOgInntektRadData[]) => void,
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  registrerArbeidsforhold: (params: ManueltArbeidsforhold) => Promise<void>;
  lagreVurdering: (params: ManglendeInntektsmeldingVurdering) => Promise<void>;
  lagreCallback: (aksjonspunktData: FaktaAksjonspunkt) => Promise<void>;
  settBehandlingPåVentCallback: (params: {
    frist?: string;
    ventearsak: string;
  }) => Promise<any>
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
  const [erKnappTrykket, settKnappTrykket] = useState(false);
  const [visSettPåVentModal, settVisSettPåVentModal] = useState(false);
  const [erOverstyrt, setErOverstyrt] = useState(false);

  const [tabellRader, setTabellData] = useState(formData || byggTabellStruktur(arbeidOgInntekt, arbeidsgiverOpplysningerPerId));
  const [åpneRadIndexer, settÅpneRadIndexer] = useState(finnUløstArbeidsforholdIndex(tabellRader));

  const isDirty = useIsFormDirty();

  useEffect(() => () => {
    setFormData(tabellRader);
  }, [tabellRader]);

  const toggleÅpenRad = useCallback((index: number) => {
    if (åpneRadIndexer.some((radIndex) => radIndex === index)) {
      settÅpneRadIndexer(åpneRadIndexer.filter((i) => i !== index));
    } else {
      settÅpneRadIndexer(åpneRadIndexer.concat(index));
    }
  }, [åpneRadIndexer, settÅpneRadIndexer]);

  const tableRef = useRef<HTMLTableElement>(null);
  const oppdaterTabellData = useCallback((data: ArbeidsforholdOgInntektRadData[]) => {
    setTabellData(data);
    // @ts-ignore Fiks
    settÅpneRadIndexer(finnUløstArbeidsforholdIndex(data(tabellRader)));
    tableRef?.current?.scrollIntoView();
  }, [tabellRader]);

  const lagreOgFortsett = useCallback(() => {
    settKnappTrykket(true);
    lagreCallback({
      kode: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
    });
  }, [behandling.versjon]);

  const gjenåpneAksjonspunkt = useCallback(() => {
    settKnappTrykket(true);
    åpneForNyVurdering();
  }, [behandling.versjon]);

  const settPaVent = useCallback((params: { frist?: string; ventearsak: string; }) => {
    settKnappTrykket(true);
    settVisSettPåVentModal(false);
    settBehandlingPåVentCallback(params);
  }, [behandling.versjon]);

  const kanSettePåVent = tabellRader
    .some((d) => d.avklaring?.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING
    || d.avklaring?.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD);
  const harBehandletAllePerioder = tabellRader.every((d) => (!d.årsak || (d.årsak && d.avklaring)));

  const erAksjonspunktAvsluttet = aksjonspunkt?.status === aksjonspunktStatus.UTFORT;
  const erAksjonspunktApent = aksjonspunkt?.status === aksjonspunktStatus.OPPRETTET;
  const erOverstyrerOgHarIngenAksjonspunkt = erOverstyrer && aksjonspunkt === undefined;

  const skalViseÅpneForNyVurderingKnapp = !readOnly && (erAksjonspunktAvsluttet || erOverstyrerOgHarIngenAksjonspunkt);
  const skalViseSettPåVentKnapp = !readOnly && erAksjonspunktApent && harBehandletAllePerioder && !isDirty && kanSettePåVent;
  const skalViseBekrefteKnapp = !readOnly && erAksjonspunktApent && harBehandletAllePerioder && !isDirty && !kanSettePåVent;

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
        settÅpneRadIndexer={settÅpneRadIndexer}
        setErOverstyrt={setErOverstyrt}
        oppdaterTabell={oppdaterTabellData}
      />
      <Table ref={tableRef} headerTextCodes={HEADER_TEXT_IDS} noHover hasGrayHeader>
        {tabellRader.map((radData, index) => (
          <ArbeidsforholdRad
            key={`${radData.arbeidsgiverNavn}${radData.arbeidsgiverIdent}${radData.internArbeidsforholdId}`}
            arbeidOgInntekt={arbeidOgInntekt}
            saksnummer={saksnummer}
            behandlingUuid={behandling.uuid}
            radData={radData}
            isReadOnly={readOnly || erAksjonspunktAvsluttet}
            registrerArbeidsforhold={registrerArbeidsforhold}
            lagreVurdering={lagreVurdering}
            toggleÅpenRad={() => toggleÅpenRad(index)}
            erOverstyrt={erOverstyrt}
            oppdaterTabell={oppdaterTabellData}
            erRadÅpen={åpneRadIndexer.includes(index)}
          />
        ))}
      </Table>
      <VerticalSpacer sixteenPx />
      {skalViseSettPåVentKnapp && (
        <>
          <Hovedknapp
            mini
            disabled={erKnappTrykket}
            onClick={() => settVisSettPåVentModal(true)}
          >
            <FormattedMessage id="ArbeidOgInntektFaktaPanel.SettPaVent" />
          </Hovedknapp>
          <SettPaVentModalIndex
            submitCallback={settPaVent}
            cancelEvent={() => settVisSettPåVentModal(false)}
            defaultVenteårsak={venteArsakType.VENT_OPDT_INNTEKTSMELDING}
            hasManualPaVent
            ventearsaker={alleKodeverk[KodeverkType.VENT_AARSAK]}
            erTilbakekreving={false}
            showModal={visSettPåVentModal}
          />
        </>
      )}
      {skalViseBekrefteKnapp && (
        <Hovedknapp
          mini
          disabled={erKnappTrykket}
          spinner={erKnappTrykket}
          onClick={lagreOgFortsett}
        >
          <FormattedMessage id="ArbeidOgInntektFaktaPanel.Bekreft" />
        </Hovedknapp>
      )}
      {skalViseÅpneForNyVurderingKnapp && (
        <Hovedknapp
          mini
          disabled={erKnappTrykket}
          spinner={erKnappTrykket}
          onClick={gjenåpneAksjonspunkt}
        >
          <FormattedMessage id="ArbeidOgInntektFaktaPanel.ApneForNyVurdering" />
        </Hovedknapp>
      )}
    </>
  );
};

export default ArbeidOgInntektFaktaPanel;
