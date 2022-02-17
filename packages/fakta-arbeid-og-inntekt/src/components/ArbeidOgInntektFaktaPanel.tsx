import React, {
  FunctionComponent, useState, useEffect, useCallback, useMemo,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Normaltekst, Undertittel } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import Lenke from 'nav-frontend-lenker';
import { Hovedknapp } from 'nav-frontend-knapper';

import { AlertStripeInfo } from 'nav-frontend-alertstriper';
import addCircleIcon from '@fpsak-frontend/assets/images/add-circle.svg';
import { dateFormat } from '@fpsak-frontend/utils';
import {
  Aksjonspunkt, AlleKodeverk, AoIArbeidsforhold, ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId,
  Behandling, Inntektsmelding, ManglendeInntektsmeldingVurdering, ManueltArbeidsforhold,
} from '@fpsak-frontend/types';
import { FaktaAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import SettPaVentModalIndex from '@fpsak-frontend/modal-sett-pa-vent';
import {
  VerticalSpacer, Image, AksjonspunktHelpTextHTML, FloatRight, Table, OverstyringKnapp,
  FlexColumn, FlexContainer, FlexRow,
} from '@fpsak-frontend/shared-components';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import ArbeidsforholdKomplettVurderingType from '@fpsak-frontend/kodeverk/src/arbeidsforholdKomplettVurderingType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import venteArsakType from '@fpsak-frontend/kodeverk/src/venteArsakType';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import ManueltLagtTilArbeidsforholdForm, { MANUELT_ORG_NR } from './ManueltLagtTilArbeidsforholdForm';
import ArbeidsforholdRad from './ArbeidsforholdRad';
import ArbeidsforholdOgInntekt from '../types/arbeidsforholdOgInntekt';

const HEADER_TEXT_IDS = [
  'EMPTY1',
  'ArbeidOgInntektFaktaPanel.Arbeidsforhold',
  'ArbeidOgInntektFaktaPanel.Periode',
  'ArbeidOgInntektFaktaPanel.Kilde',
  'ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt',
  'EMPTY2',
];

const finnApTekstKoder = (
  aksjonspunkter: Aksjonspunkt[],
  harManglendeInntektsmeldinger: boolean,
  harManglandeOpplysninger: boolean,
): string[] => {
  const erApÅpent = aksjonspunkter.some((ap) => ap.status === aksjonspunktStatus.OPPRETTET);

  const koder = [];
  if (erApÅpent && harManglendeInntektsmeldinger) {
    koder.push('ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding');
  }
  if (erApÅpent && harManglandeOpplysninger) {
    koder.push('ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger');
  }
  return koder;
};

const sorterTabell = (d1: ArbeidsforholdOgInntekt, d2: ArbeidsforholdOgInntekt): number => {
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
) => inntektsmelding.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverIdent
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

const finnArbeidsforholdIdentDetErFlereAv = (data: ArbeidsforholdOgInntekt[]) => {
  const alleArbeidsgiverIdenter = data.reduce((prev, value) => {
    const ident = value.arbeidsforhold?.arbeidsgiverIdent || value.inntektsmelding?.arbeidsgiverIdent;
    return {
      ...prev,
      [ident]: prev[ident] ? prev[ident] + 1 : 1,
    };
  }, {});
  return Object.keys(alleArbeidsgiverIdenter).filter((key) => alleArbeidsgiverIdenter[key] > 1);
};

const finnUløstArbeidsforholdIndex = (tabellData: ArbeidsforholdOgInntekt[]): number[] => {
  const index = tabellData
    .findIndex((d) => (d.arbeidsforhold?.årsak && !d.arbeidsforhold?.saksbehandlersVurdering)
    || (d.inntektsmelding?.årsak && !d.inntektsmelding?.saksbehandlersVurdering));
  return index !== -1 ? [index] : [];
};

interface OwnProps {
  saksnummer: string;
  behandling: Behandling;
  aksjonspunkter: Aksjonspunkt[];
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
  aksjonspunkter,
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
  const intl = useIntl();
  const { arbeidsforhold, inntektsmeldinger } = arbeidOgInntekt;

  const erAksjonspunktAvsluttet = aksjonspunkter.some((ap) => ap.status === aksjonspunktStatus.UTFORT);
  const erOverstyrerOgIngenAksjonspunkt = aksjonspunkter.length === 0 && erOverstyrer;
  const erReadOnlyEllerHarAvsluttetAksjonspunkt = readOnly || erAksjonspunktAvsluttet;

  const [erKnappTrykket, settKnappTrykket] = useState(false);
  const [visSettPåVentModal, settVisSettPåVentModal] = useState(false);
  const [isDirty, setDirty] = useState(false);
  const [erOverstyrt, setErOverstyrt] = useState(false);
  const [skalLeggeTilArbeidsforhold, toggleLeggTilArbeidsforhold] = useState(false);

  const [tabellData, setTabellData] = useState(formData || byggTabellStruktur(arbeidOgInntekt, arbeidsgiverOpplysningerPerId));
  const [åpneRadIndexer, settÅpneRadIndexer] = useState(finnUløstArbeidsforholdIndex(tabellData));
  const identerDetErFlereAv = finnArbeidsforholdIdentDetErFlereAv(tabellData);

  useEffect(() => () => {
    setFormData(tabellData);
  }, [tabellData]);

  const harIngenArbeidsforholdEllerInntektsmeldinger = arbeidsforhold.length === 0 && inntektsmeldinger.length === 0;
  const harManglendeInntektsmeldinger = tabellData.some((d) => d.arbeidsforhold?.årsak);
  const harManglandeOpplysninger = tabellData.some((d) => d.inntektsmelding?.årsak);
  const aksjonspunktTekstKoder = useMemo(() => finnApTekstKoder(aksjonspunkter, harManglendeInntektsmeldinger, harManglandeOpplysninger), [behandling.versjon]);

  const harUbehandledeAksjonspunkt = tabellData.some((d) => (d.arbeidsforhold?.årsak && !d.arbeidsforhold?.saksbehandlersVurdering)
    || (d.inntektsmelding?.årsak && !d.inntektsmelding?.saksbehandlersVurdering));

  const kanSettePåVent = tabellData
    .some((d) => d.arbeidsforhold?.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING
      || d.inntektsmelding?.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD);

  const harManueltLagtTilArbeidsforhold = tabellData.some((data) => data.arbeidsforhold?.arbeidsgiverIdent === MANUELT_ORG_NR);

  const toggleÅpenRad = useCallback((index: number) => {
    if (åpneRadIndexer.some((radIndex) => radIndex === index)) {
      settÅpneRadIndexer(åpneRadIndexer.filter((i) => i !== index));
    } else {
      settÅpneRadIndexer(åpneRadIndexer.concat(index));
    }
  }, [åpneRadIndexer, settÅpneRadIndexer]);

  const toggleOverstyring = useCallback(() => {
    setErOverstyrt(true);
    const indexForManueltLagtTil = tabellData
      .findIndex((t) => t.arbeidsforhold?.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER);
    if (indexForManueltLagtTil !== -1) {
      settÅpneRadIndexer([indexForManueltLagtTil]);
    }
  }, [tabellData, settÅpneRadIndexer]);

  const oppdaterTabellData = useCallback((data: ArbeidsforholdOgInntekt[]) => {
    setDirty(true);
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

  return (
    <>
      <Row>
        <Column xs="6">
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <Undertittel><FormattedMessage id="ArbeidOgInntektFaktaPanel.Overskrift" /></Undertittel>
              </FlexColumn>
              {erOverstyrer && !erReadOnlyEllerHarAvsluttetAksjonspunkt && !erOverstyrerOgIngenAksjonspunkt && (
                <FlexColumn>
                  <OverstyringKnapp onClick={toggleOverstyring} />
                </FlexColumn>
              )}
            </FlexRow>
          </FlexContainer>
        </Column>
        <Column xs="6">
          <FloatRight>
            <Normaltekst>
              <FormattedMessage
                id="ArbeidOgInntektFaktaPanel.Skjaringstidspunkt"
                values={{ skjæringspunktDato: dateFormat(arbeidOgInntekt.skjæringstidspunkt) }}
              />
            </Normaltekst>
          </FloatRight>
        </Column>
      </Row>
      <VerticalSpacer thirtyTwoPx />
      {aksjonspunktTekstKoder.length > 0 && (
        <AksjonspunktHelpTextHTML>
          {aksjonspunktTekstKoder.map((kode) => intl.formatMessage({ id: kode })).join(' ')}
        </AksjonspunktHelpTextHTML>
      )}
      {harIngenArbeidsforholdEllerInntektsmeldinger && erOverstyrer && (
        <AlertStripeInfo><FormattedMessage id="ArbeidOgInntektFaktaPanel.IngenArbeidsforhold" /></AlertStripeInfo>
      )}
      <VerticalSpacer sixteenPx />
      {!harManueltLagtTilArbeidsforhold && erOverstyrt && !skalLeggeTilArbeidsforhold && (
        <>
          <VerticalSpacer thirtyTwoPx />
          <Lenke
            onClick={(e) => {
              e.preventDefault();
              toggleLeggTilArbeidsforhold(true);
            }}
            href=""
          >
            <Image src={addCircleIcon} />
            <span>
              <FormattedMessage id="ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold" />
            </span>
          </Lenke>
          <VerticalSpacer fourtyPx />
        </>
      )}
      <VerticalSpacer thirtyTwoPx />
      {skalLeggeTilArbeidsforhold && (
        <>
          <ManueltLagtTilArbeidsforholdForm
            behandlingUuid={behandling.uuid}
            isReadOnly={false}
            registrerArbeidsforhold={registrerArbeidsforhold}
            lukkArbeidsforholdRad={() => toggleLeggTilArbeidsforhold(false)}
            oppdaterTabell={oppdaterTabellData}
            erOverstyrt
            erNyttArbeidsforhold
          />
          <VerticalSpacer fourtyPx />
        </>
      )}
      <Table headerTextCodes={HEADER_TEXT_IDS} noHover hasGrayHeader>
        <>
          {tabellData.map((data, index) => (
            <ArbeidsforholdRad
              key={data.arbeidsgiverNavn}
              saksnummer={saksnummer}
              behandlingUuid={behandling.uuid}
              skjæringspunktDato={arbeidOgInntekt.skjæringstidspunkt}
              arbeidsforholdOgInntekt={data}
              isReadOnly={erReadOnlyEllerHarAvsluttetAksjonspunkt}
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
      {!erReadOnlyEllerHarAvsluttetAksjonspunkt && isDirty && kanSettePåVent && åpneRadIndexer.length === 0 && (
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
            ventearsak={venteArsakType.VENT_OPDT_INNTEKTSMELDING}
            hasManualPaVent
            ventearsaker={alleKodeverk[KodeverkType.VENT_AARSAK]}
            erTilbakekreving={false}
            showModal={visSettPåVentModal}
          />
        </>
      )}
      {!erReadOnlyEllerHarAvsluttetAksjonspunkt && !harUbehandledeAksjonspunkt && isDirty && !kanSettePåVent && åpneRadIndexer.length === 0 && (
        <Hovedknapp
          mini
          disabled={erKnappTrykket}
          spinner={erKnappTrykket}
          onClick={lagreOgFortsett}
        >
          <FormattedMessage id="ArbeidOgInntektFaktaPanel.Bekreft" />
        </Hovedknapp>
      )}
      {(!readOnly && (erAksjonspunktAvsluttet || erOverstyrerOgIngenAksjonspunkt)) && (
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
