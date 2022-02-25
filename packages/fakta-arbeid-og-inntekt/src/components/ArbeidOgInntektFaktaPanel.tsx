import React, {
  FunctionComponent, useState, useEffect, useCallback, useMemo,
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
import ArbeidsforholdOgInntekt from '../types/arbeidsforholdOgInntekt';
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
  d1: ArbeidsforholdOgInntekt,
  d2: ArbeidsforholdOgInntekt,
): number => {
  const d1HarAp1 = !d1.inntektsmelding || d1.arbeidsforhold?.begrunnelse;
  const d2HarAp1 = !d2.inntektsmelding || d2.arbeidsforhold?.begrunnelse;
  if (d1HarAp1 && !d2HarAp1) {
    return -1;
  }
  if (d2HarAp1 && !d1HarAp1) {
    return 1;
  }
  if (d1HarAp1 && d2HarAp1) {
    return d1.arbeidsgiverNavn.localeCompare(d2.arbeidsgiverNavn);
  }

  const d1HarAp2 = !d1.arbeidsforhold || d1.inntektsmelding?.begrunnelse;
  const d2HarAp2 = !d2.arbeidsforhold || d2.inntektsmelding?.begrunnelse;
  if (d1HarAp2 && !d2HarAp2) {
    return -1;
  }
  if (d2HarAp2 && !d1HarAp2) {
    return 1;
  }
  if (d1HarAp2 && d2HarAp2) {
    return d1.arbeidsgiverNavn.localeCompare(d2.arbeidsgiverNavn);
  }

  return d1.arbeidsgiverNavn.localeCompare(d2.arbeidsgiverNavn);
};

const erMatch = (
  arbeidsforhold: AoIArbeidsforhold,
  inntektsmelding: Inntektsmelding,
): boolean => inntektsmelding.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverIdent
  && (!inntektsmelding.internArbeidsforholdId || inntektsmelding.internArbeidsforholdId === arbeidsforhold.internArbeidsforholdId);

const byggTabellStruktur = (
  arbeidOgInntekt: ArbeidOgInntektsmelding,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ArbeidsforholdOgInntekt[] => {
  const { arbeidsforhold, inntektsmeldinger, inntekter } = arbeidOgInntekt;

  const alleArbeidsforhold = arbeidsforhold.map<ArbeidsforholdOgInntekt>((af) => ({
    arbeidsforhold: af,
    arbeidsgiverNavn: arbeidsgiverOpplysningerPerId[af.arbeidsgiverIdent].navn,
    inntektsmelding: inntektsmeldinger.find((inntektsmelding) => erMatch(af, inntektsmelding)),
    inntektsposter: inntekter.find((inntekt) => inntekt.arbeidsgiverIdent === af.arbeidsgiverIdent)?.inntekter,
  }));
  const alleInntektsmeldingerSomManglerArbeidsforhold = arbeidOgInntekt.inntektsmeldinger
    .filter((im) => !arbeidsforhold.some((af) => erMatch(af, im)))
    .map<ArbeidsforholdOgInntekt>((im) => ({
      arbeidsforhold: undefined,
      arbeidsgiverNavn: arbeidsgiverOpplysningerPerId[im.arbeidsgiverIdent].navn,
      inntektsmelding: im,
      inntektsposter: inntekter.find((inntekt) => inntekt.arbeidsgiverIdent === im.arbeidsgiverIdent)?.inntekter,
    }));

  return alleArbeidsforhold.concat(alleInntektsmeldingerSomManglerArbeidsforhold).sort(sorterTabell);
};

const finnArbeidsforholdIdentDetErFlereAv = (
  data: ArbeidsforholdOgInntekt[],
): string[] => {
  const alleArbeidsgiverIdenter = data.reduce((prev, value) => {
    const ident = value.arbeidsforhold?.arbeidsgiverIdent || value.inntektsmelding?.arbeidsgiverIdent;
    return {
      ...prev,
      [ident]: prev[ident] ? prev[ident] + 1 : 1,
    };
  }, {});
  return Object.keys(alleArbeidsgiverIdenter).filter((key) => alleArbeidsgiverIdenter[key] > 1);
};

const finnUløstArbeidsforholdIndex = (
  tabellData: ArbeidsforholdOgInntekt[],
): number[] => {
  const index = tabellData
    .findIndex((d) => (d.arbeidsforhold?.årsak && !d.arbeidsforhold?.saksbehandlersVurdering)
    || (d.inntektsmelding?.årsak && !d.inntektsmelding?.saksbehandlersVurdering && !d.arbeidsforhold?.saksbehandlersVurdering));
  return index !== -1 ? [index] : [];
};

interface OwnProps {
  saksnummer: string;
  behandling: Behandling;
  aksjonspunkt?: Aksjonspunkt;
  readOnly: boolean;
  formData?: ArbeidsforholdOgInntekt[],
  setFormData: (data: ArbeidsforholdOgInntekt[]) => void,
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

  const [tabellData, setTabellData] = useState(formData || byggTabellStruktur(arbeidOgInntekt, arbeidsgiverOpplysningerPerId));
  const [åpneRadIndexer, settÅpneRadIndexer] = useState(finnUløstArbeidsforholdIndex(tabellData));
  const identerDetErFlereAv = useMemo(() => finnArbeidsforholdIdentDetErFlereAv(tabellData), [tabellData]);

  const isDirty = useIsFormDirty();

  useEffect(() => () => {
    setFormData(tabellData);
  }, [tabellData]);

  const toggleÅpenRad = useCallback((index: number) => {
    if (åpneRadIndexer.some((radIndex) => radIndex === index)) {
      settÅpneRadIndexer(åpneRadIndexer.filter((i) => i !== index));
    } else {
      settÅpneRadIndexer(åpneRadIndexer.concat(index));
    }
  }, [åpneRadIndexer, settÅpneRadIndexer]);

  const oppdaterTabellData = useCallback((data: ArbeidsforholdOgInntekt[]) => {
    setTabellData(data);
    // @ts-ignore Fiks
    settÅpneRadIndexer(finnUløstArbeidsforholdIndex(data(tabellData)));
  }, [tabellData]);

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

  const kanSettePåVent = tabellData
    .some((d) => d.arbeidsforhold?.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING
    || d.inntektsmelding?.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD);
  const harBehandletAllePerioder = !tabellData.some((d) => (d.arbeidsforhold?.årsak && !d.arbeidsforhold?.saksbehandlersVurdering)
    || (d.inntektsmelding?.årsak && !d.inntektsmelding?.saksbehandlersVurdering && !d.arbeidsforhold?.saksbehandlersVurdering));

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
        tabellData={tabellData}
        settÅpneRadIndexer={settÅpneRadIndexer}
        setErOverstyrt={setErOverstyrt}
        oppdaterTabell={oppdaterTabellData}
      />
      <Table headerTextCodes={HEADER_TEXT_IDS} noHover hasGrayHeader>
        <>
          {tabellData.map((data, index) => (
            <ArbeidsforholdRad
              key={data.arbeidsgiverNavn}
              saksnummer={saksnummer}
              behandlingUuid={behandling.uuid}
              skjæringspunktDato={arbeidOgInntekt.skjæringstidspunkt}
              arbeidsforholdOgInntekt={data}
              isReadOnly={readOnly || erAksjonspunktAvsluttet}
              registrerArbeidsforhold={registrerArbeidsforhold}
              lagreVurdering={lagreVurdering}
              toggleÅpenRad={() => toggleÅpenRad(index)}
              erOverstyrt={erOverstyrt}
              oppdaterTabell={oppdaterTabellData}
              erRadÅpen={åpneRadIndexer.includes(index)}
              skalViseArbeidsforholdId={identerDetErFlereAv.includes(data.arbeidsforhold?.arbeidsgiverIdent || data.inntektsmelding?.arbeidsgiverIdent)}
            />
          ))}
        </>
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
