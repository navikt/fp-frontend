import { useEffect, useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Alert, BodyShort, Button, Table, VStack } from '@navikt/ds-react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { SettPaVentModalIndex } from '@navikt/fp-modal-sett-pa-vent';
import type {
  ArbeidOgInntektsmelding,
  ArbeidsgiverOpplysningerPerId,
  ManglendeInntektsmeldingVurdering,
  ManueltArbeidsforhold,
} from '@navikt/fp-types';
import type { VurderArbeidsforholdInntektsmeldingAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { ReadOnlyProvider, useMellomlagretFormData, usePanelDataContext, useReadOnly } from '@navikt/fp-utils';

import { useIsFormDirty } from '../DirtyFormProvider';
import type { ArbeidsforholdOgInntektRadData } from '../types/arbeidsforholdOgInntekt';
import { byggTabellStruktur, finnUløstArbeidsforholdIndex } from '../utils/arbeidOgInntektTabellUtils';
import { ArbeidsforholdRad } from './ArbeidsforholdRad';
import { ArbeidsOgInntektOverstyrPanel } from './ArbeidsOgInntektOverstyrPanel';

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

  const isReadOnly = useReadOnly();
  const { alleKodeverk, submitCallback, aksjonspunkterForPanel, behandling, fagsak } =
    usePanelDataContext<VurderArbeidsforholdInntektsmeldingAp>();

  const aksjonspunkt = aksjonspunkterForPanel[0];

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<ArbeidsforholdOgInntektRadData[]>();

  const [tabellRader, setTabellRader] = useState<ArbeidsforholdOgInntektRadData[]>(
    () => mellomlagretFormData ?? byggTabellStruktur(arbeidOgInntekt, arbeidsgiverOpplysningerPerId),
  );
  const [åpneRadIndexer, setÅpneRadIndexer] = useState(() => finnUløstArbeidsforholdIndex(tabellRader));

  const isDirty = useIsFormDirty();

  useEffect(
    () => () => {
      setMellomlagretFormData(tabellRader);
    },
    [tabellRader, setMellomlagretFormData],
  );

  const toggleÅpenRad = (index: number) => {
    if (åpneRadIndexer.includes(index)) {
      setÅpneRadIndexer(åpneRadIndexer.filter(i => i !== index));
    } else {
      setÅpneRadIndexer(åpneRadIndexer.concat(index));
    }
  };

  const tableRef = useRef<HTMLTableElement>(null);
  const oppdaterTabellData = (data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => {
    setTabellRader(data);
    setÅpneRadIndexer(finnUløstArbeidsforholdIndex(data(tabellRader)));
    tableRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  };

  const lagreOgFortsett = () => {
    setErKnappTrykket(true);
    void submitCallback({
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
      d.avklaring?.saksbehandlersVurdering === 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING' ||
      d.avklaring?.saksbehandlersVurdering === 'MELDING_TIL_ARBEIDSGIVER_NAV_NO' ||
      d.avklaring?.saksbehandlersVurdering === 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD',
  );
  const harBehandletAllePerioder = tabellRader.every(d => !d.årsak || (d.årsak && d.avklaring));

  const harIngenAksjonspunkt = aksjonspunkt === undefined;
  const erAksjonspunktAvsluttet = aksjonspunkt?.status === 'UTFO';
  const erAksjonspunktApent = aksjonspunkt?.status === 'OPPR';
  const erOverstyrerOgHarIngenAksjonspunkt = erOverstyrer && harIngenAksjonspunkt;

  const skalViseÅpneForNyVurderingKnapp =
    !isReadOnly && (erAksjonspunktAvsluttet || erOverstyrerOgHarIngenAksjonspunkt);
  const skalViseSettPåVentKnapp =
    !isReadOnly && erAksjonspunktApent && harBehandletAllePerioder && !isDirty && kanSettePåVent;
  const skalViseBekrefteKnapp =
    !isReadOnly && erAksjonspunktApent && harBehandletAllePerioder && !isDirty && !kanSettePåVent;

  return (
    <VStack gap="space-20">
      <ArbeidsOgInntektOverstyrPanel
        behandling={behandling}
        aksjonspunkt={aksjonspunkt}
        arbeidOgInntekt={arbeidOgInntekt}
        registrerArbeidsforhold={registrerArbeidsforhold}
        erOverstyrer={erOverstyrer}
        tabellData={tabellRader}
        settÅpneRadIndexer={setÅpneRadIndexer}
        setErOverstyrt={setErOverstyrt}
        oppdaterTabell={oppdaterTabellData}
      />

      {tabellRader.length === 0 && (
        <BodyShort textColor="subtle">
          <FormattedMessage id="ArbeidOgInntektFaktaPanel.IngenArbeidsforholdEllerInntektsmeldinger" />
        </BodyShort>
      )}

      {tabellRader.length > 0 && (
        <Table ref={tableRef}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope="col" className="w-12" />
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
              <ReadOnlyProvider
                key={lagRadNøkkel(radData, index)}
                readOnly={isReadOnly || erAksjonspunktAvsluttet || harIngenAksjonspunkt}
              >
                <ArbeidsforholdRad
                  saksnummer={fagsak.saksnummer}
                  behandlingUuid={behandling.uuid}
                  behandlingVersjon={behandling.versjon}
                  radData={radData}
                  skjæringstidspunkt={arbeidOgInntekt.skjæringstidspunkt}
                  registrerArbeidsforhold={registrerArbeidsforhold}
                  lagreVurdering={lagreVurdering}
                  toggleÅpenRad={() => toggleÅpenRad(index)}
                  erOverstyrt={erOverstyrt}
                  oppdaterTabell={oppdaterTabellData}
                  erRadÅpen={åpneRadIndexer.includes(index)}
                  alleKodeverk={alleKodeverk}
                />
              </ReadOnlyProvider>
            ))}
          </Table.Body>
        </Table>
      )}
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
            defaultVenteårsak="VENT_OPDT_INNTEKTSMELDING"
            hasManualPaVent
            ventearsaker={alleKodeverk['Venteårsak']}
            erTilbakekreving={false}
            showModal={visSettPåVentModal}
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
        <VStack gap="space-16">
          <Alert variant="info" size="small" className="self-start">
            <FormattedMessage id="ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring" />
          </Alert>
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

const lagRadNøkkel = (radData: ArbeidsforholdOgInntektRadData, index: number): string => {
  const inntektsmeldingsnøkkel = radData.inntektsmeldingerForRad
    .map(im =>
      [
        im.journalpostId ?? '',
        im.dokumentId ?? '',
        im.innsendingstidspunkt,
        im.internArbeidsforholdId ?? '',
        im.eksternArbeidsforholdId ?? '',
        im.mottattDato,
      ].join('-'),
    )
    .join('--');

  const arbeidsforholdsnøkkel = radData.arbeidsforholdForRad
    .map(af => [af.internArbeidsforholdId ?? '', af.eksternArbeidsforholdId ?? '', af.fom, af.tom].join('-'))
    .join('--');

  return [radData.arbeidsgiverIdent, inntektsmeldingsnøkkel || arbeidsforholdsnøkkel || 'rad', String(index)].join('-');
};
