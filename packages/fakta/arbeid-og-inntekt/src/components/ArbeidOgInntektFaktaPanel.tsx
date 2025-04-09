import { useEffect, useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Alert, Button, Table, VStack } from '@navikt/ds-react';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  ArbeidsforholdKomplettVurderingType,
  KodeverkType,
  VenteArsakType,
} from '@navikt/fp-kodeverk';
import { SettPaVentModalIndex } from '@navikt/fp-modal-sett-pa-vent';
import type {
  AoIArbeidsforhold,
  ArbeidOgInntektsmelding,
  ArbeidsgiverOpplysningerPerId,
  Inntektsmelding,
  ManglendeInntektsmeldingVurdering,
  ManueltArbeidsforhold,
} from '@navikt/fp-types';
import type { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { useIsFormDirty } from '../DirtyFormProvider';
import type { ArbeidsforholdOgInntektRadData, Avklaring } from '../types/arbeidsforholdOgInntekt';
import { ArbeidsforholdRad } from './ArbeidsforholdRad';
import { ArbeidsOgInntektOverstyrPanel } from './ArbeidsOgInntektOverstyrPanel';

import styles from './arbeidOgInntektFaktaPanel.module.css';

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
  const { fom, tom, saksbehandlersVurdering, stillingsprosent, begrunnelse } = arbeidsforhold;
  if (
    arbeidsforhold.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER ||
    arbeidsforhold.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING
  ) {
    return {
      arbeidsgiverNavn,
      fom,
      tom,
      stillingsprosent,
      saksbehandlersVurdering: saksbehandlersVurdering ?? undefined,
      begrunnelse: begrunnelse ?? undefined,
    };
  }
  return {
    saksbehandlersVurdering: saksbehandlersVurdering ?? undefined,
    begrunnelse: begrunnelse ?? undefined,
  };
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
      const årsak = af.årsak ?? inntektsmeldinger.find(i => erMatch(af, i))?.årsak;
      const ne: ArbeidsforholdOgInntektRadData = {
        arbeidsgiverIdent: af.arbeidsgiverIdent,
        arbeidsgiverNavn,
        ...(arbeidsgiverOpplysninger.erPrivatPerson
          ? { erPrivatPerson: true, arbeidsgiverFødselsdato: arbeidsgiverOpplysninger.fødselsdato }
          : { erPrivatPerson: false }),
        årsak: årsak ?? undefined,
        avklaring: af.saksbehandlersVurdering ? lagAvklaring(af, arbeidsgiverNavn) : undefined,
      };

      return acc.concat(ne);
    },
    [],
  );

  const alleInntektsmeldingerSomManglerArbeidsforhold = inntektsmeldinger
    .filter(im => !arbeidsforhold.some(af => erMatch(af, im)))
    .map<ArbeidsforholdOgInntektRadData>(im => {
      const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[im.arbeidsgiverIdent];
      return {
        //internArbeidsforholdId: im.internArbeidsforholdId,
        arbeidsgiverIdent: im.arbeidsgiverIdent,
        arbeidsgiverNavn: arbeidsgiverOpplysninger.navn,

        ...(arbeidsgiverOpplysninger.erPrivatPerson
          ? { erPrivatPerson: true, arbeidsgiverFødselsdato: arbeidsgiverOpplysninger.fødselsdato }
          : { erPrivatPerson: false }),
        årsak: im.årsak ?? undefined,
        avklaring: im.saksbehandlersVurdering
          ? {
              saksbehandlersVurdering: im.saksbehandlersVurdering,
              begrunnelse: im.begrunnelse ?? undefined,
            }
          : undefined,
      };
    });

  return alleArbeidsforhold.concat(alleInntektsmeldingerSomManglerArbeidsforhold).sort(sorterTabell);
};

const finnUløstArbeidsforholdIndex = (tabellData: ArbeidsforholdOgInntektRadData[]): number[] => {
  const index = tabellData.findIndex(d => d.årsak && !d.avklaring);
  return index !== -1 ? [index] : [];
};

interface Props {
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  registrerArbeidsforhold: (params: ManueltArbeidsforhold) => Promise<void>;
  lagreVurdering: (params: ManglendeInntektsmeldingVurdering) => Promise<void>;
  settBehandlingPåVentCallback: (params: { frist?: string; ventearsak: string }) => void;
  erOverstyrer: boolean;
  åpneForNyVurdering: () => void;
}

export const ArbeidOgInntektFaktaPanel = ({
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
  registrerArbeidsforhold,
  lagreVurdering,
  erOverstyrer,
  settBehandlingPåVentCallback,
  åpneForNyVurdering,
}: Props) => {
  const [erKnappTrykket, setErKnappTrykket] = useState(false);
  const [visSettPåVentModal, setVisSettPåVentModal] = useState(false);
  const [erOverstyrt, setErOverstyrt] = useState(false);

  const { alleKodeverk, submitCallback, aksjonspunkterForPanel, behandling, fagsak, isReadOnly } =
    usePanelDataContext<FaktaAksjonspunkt>();

  const aksjonspunkt = aksjonspunkterForPanel.length > 0 ? aksjonspunkterForPanel[0] : undefined;

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<ArbeidsforholdOgInntektRadData[]>();

  const [tabellRader, setTabellRader] = useState<ArbeidsforholdOgInntektRadData[]>(
    mellomlagretFormData ?? byggTabellStruktur(arbeidOgInntekt, arbeidsgiverOpplysningerPerId),
  );
  const [åpneRadIndexer, setÅpneRadIndexer] = useState(finnUløstArbeidsforholdIndex(tabellRader));

  const isDirty = useIsFormDirty();

  useEffect(
    () => () => {
      setMellomlagretFormData(tabellRader);
    },
    [tabellRader],
  );

  const toggleÅpenRad = (index: number) => {
    if (åpneRadIndexer.some(radIndex => radIndex === index)) {
      setÅpneRadIndexer(åpneRadIndexer.filter(i => i !== index));
    } else {
      setÅpneRadIndexer(åpneRadIndexer.concat(index));
    }
  };

  const tableRef = useRef<HTMLTableElement>(null);
  const oppdaterTabellData = (data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => {
    setTabellRader(data);
    setÅpneRadIndexer(finnUløstArbeidsforholdIndex(data(tabellRader)));
    tableRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  };

  const lagreOgFortsett = () => {
    setErKnappTrykket(true);
    submitCallback({
      kode: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
    });
  };

  const gjenåpneAksjonspunkt = () => {
    setErKnappTrykket(true);
    åpneForNyVurdering();
  };

  const settPaVent = (params: { frist?: string; ventearsak?: string }) => {
    setErKnappTrykket(true);
    setVisSettPåVentModal(false);

    const { frist, ventearsak } = params;
    if (ventearsak) {
      settBehandlingPåVentCallback({ frist, ventearsak });
    }
  };

  const kanSettePåVent = tabellRader.some(
    d =>
      d.avklaring?.saksbehandlersVurdering ===
        ArbeidsforholdKomplettVurderingType.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING ||
      d.avklaring?.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.MELDING_TIL_ARBEIDSGIVER_NAV_NO ||
      d.avklaring?.saksbehandlersVurdering ===
        ArbeidsforholdKomplettVurderingType.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD,
  );
  const harBehandletAllePerioder = tabellRader.every(d => !d.årsak || (d.årsak && d.avklaring));

  const harIngenAksjonspunkt = aksjonspunkt === undefined;
  const erAksjonspunktAvsluttet = aksjonspunkt?.status === AksjonspunktStatus.UTFORT;
  const erAksjonspunktApent = aksjonspunkt?.status === AksjonspunktStatus.OPPRETTET;
  const erOverstyrerOgHarIngenAksjonspunkt = erOverstyrer && harIngenAksjonspunkt;

  const skalViseÅpneForNyVurderingKnapp =
    !isReadOnly && (erAksjonspunktAvsluttet || erOverstyrerOgHarIngenAksjonspunkt);
  const skalViseSettPåVentKnapp =
    !isReadOnly && erAksjonspunktApent && harBehandletAllePerioder && !isDirty && kanSettePåVent;
  const skalViseBekrefteKnapp =
    !isReadOnly && erAksjonspunktApent && harBehandletAllePerioder && !isDirty && !kanSettePåVent;

  return (
    <VStack gap="4">
      <ArbeidsOgInntektOverstyrPanel
        behandling={behandling}
        aksjonspunkt={aksjonspunkt}
        readOnly={isReadOnly}
        arbeidOgInntekt={arbeidOgInntekt}
        registrerArbeidsforhold={registrerArbeidsforhold}
        erOverstyrer={erOverstyrer}
        tabellData={tabellRader}
        settÅpneRadIndexer={setÅpneRadIndexer}
        setErOverstyrt={setErOverstyrt}
        oppdaterTabell={oppdaterTabellData}
      />
      <Table ref={tableRef}>
        <Table.Header>
          <Table.Row className={styles.headerRow}>
            <Table.HeaderCell scope="col" />
            <Table.HeaderCell scope="col">
              <FormattedMessage id="ArbeidOgInntektFaktaPanel.Arbeidsforhold" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="ArbeidOgInntektFaktaPanel.Periode" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="ArbeidOgInntektFaktaPanel.Kilde" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col" />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tabellRader.map((radData, index) => (
            <ArbeidsforholdRad
              key={`${radData.arbeidsgiverNavn}${radData.arbeidsgiverIdent}${index}`} // nosonar
              arbeidOgInntekt={arbeidOgInntekt}
              saksnummer={fagsak.saksnummer}
              behandlingUuid={behandling.uuid}
              behandlingVersjon={behandling.versjon}
              radData={radData}
              isReadOnly={isReadOnly || erAksjonspunktAvsluttet || harIngenAksjonspunkt}
              registrerArbeidsforhold={registrerArbeidsforhold}
              lagreVurdering={lagreVurdering}
              toggleÅpenRad={() => toggleÅpenRad(index)}
              erOverstyrt={erOverstyrt}
              oppdaterTabell={oppdaterTabellData}
              erRadÅpen={åpneRadIndexer.includes(index)}
              alleKodeverk={alleKodeverk}
              arbeidsgiverOpplysninger={arbeidsgiverOpplysningerPerId[radData.arbeidsgiverIdent]}
            />
          ))}
        </Table.Body>
      </Table>
      {skalViseSettPåVentKnapp && (
        <div>
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
            frist={null}
          />
        </div>
      )}
      {skalViseBekrefteKnapp && (
        <div>
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
        </div>
      )}
      {skalViseÅpneForNyVurderingKnapp && (
        <VStack gap="4">
          <div className={styles.alertStripe}>
            <Alert variant="info">
              <FormattedMessage id="ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring" />
            </Alert>
          </div>
          <div>
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
          </div>
        </VStack>
      )}
    </VStack>
  );
};
