import React, {
  FunctionComponent, useState, useEffect, useCallback,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Normaltekst, Undertittel } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import Lenke from 'nav-frontend-lenker';
import { Hovedknapp } from 'nav-frontend-knapper';

import addCircleIcon from '@fpsak-frontend/assets/images/add-circle.svg';
import { dateFormat } from '@fpsak-frontend/utils';
import {
  Aksjonspunkt, AlleKodeverk, ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId, Behandling, ManglendeInntektsmeldingVurdering, ManueltArbeidsforhold,
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
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import NyttArbeidsforholdForm, { MANUELT_ORG_NR } from './NyttArbeidsforholdForm';
import ArbeidsforholdRad from './ArbeidsforholdRad';
import ArbeidsforholdOgInntekt from '../types/arbeidsforholdOgInntekt';

const HEADER_TEXT_IDS = [
  'EMPTY',
  'ArbeidOgInntektFaktaPanel.Arbeidsforhold',
  'ArbeidOgInntektFaktaPanel.Periode',
  'ArbeidOgInntektFaktaPanel.Kilde',
  'ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt',
];

const finnApTekstKoder = (
  aksjonspunkter: Aksjonspunkt[],
  harUløsteManglendeInntektsmeldinger: boolean,
  harUløsteManglandeOpplysninger: boolean,
  harIngenArbeidsforholdEllerInntektsmeldinger: boolean,
  erOverstyrer: boolean,
): string[] => {
  if (harIngenArbeidsforholdEllerInntektsmeldinger && erOverstyrer) {
    return ['ArbeidOgInntektFaktaPanel.IngenArbeidsforhold'];
  }

  const erApÅpent = aksjonspunkter.some((ap) => ap.status.kode === aksjonspunktStatus.OPPRETTET);

  const koder = [];
  if (erApÅpent && harUløsteManglendeInntektsmeldinger) {
    koder.push('ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding');
  }
  if (erApÅpent && harUløsteManglandeOpplysninger) {
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
    return d1.arbeidsforholdNavn.localeCompare(d2.arbeidsforholdNavn);
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
    return d1.arbeidsforholdNavn.localeCompare(d2.arbeidsforholdNavn);
  }

  return d1.arbeidsforholdNavn.localeCompare(d2.arbeidsforholdNavn);
};

const byggTabellStruktur = (
  arbeidOgInntekt: ArbeidOgInntektsmelding,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ArbeidsforholdOgInntekt[] => {
  const { arbeidsforhold, inntektsmeldinger, inntekter } = arbeidOgInntekt;

  const alleArbeidsforhold = arbeidsforhold.map((af) => ({
    arbeidsforhold: af,
    arbeidsforholdNavn: arbeidsgiverOpplysningerPerId[af.arbeidsgiverIdent]?.navn,
    inntektsmelding: inntektsmeldinger.find((inntektsmelding) => inntektsmelding.arbeidsgiverIdent === af.arbeidsgiverIdent),
    inntektsposter: inntekter.find((inntekt) => inntekt.arbeidsgiverIdent === af.arbeidsgiverIdent)?.inntekter,
  }));
  const alleInntektsmeldingerSomManglerArbeidsforhold = arbeidOgInntekt.inntektsmeldinger
    .filter((im) => !arbeidsforhold.some((af) => im.arbeidsgiverIdent === af.arbeidsgiverIdent))
    .map((im) => ({
      arbeidsforhold: undefined,
      arbeidsforholdNavn: arbeidsgiverOpplysningerPerId[im.arbeidsgiverIdent]?.navn,
      inntektsmelding: im,
      inntektsposter: inntekter.find((inntekt) => inntekt.arbeidsgiverIdent === im.arbeidsgiverIdent)?.inntekter,
    }));

  return alleArbeidsforhold.concat(alleInntektsmeldingerSomManglerArbeidsforhold).sort(sorterTabell);
};

interface OwnProps {
  behandling: Behandling;
  aksjonspunkter: Aksjonspunkt[];
  isReadOnly: boolean;
  formData?: ArbeidsforholdOgInntekt[],
  setFormData: (data: ArbeidsforholdOgInntekt[]) => void,
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  registrerArbeidsforhold: (params: ManueltArbeidsforhold) => Promise<void>;
  lagreVurdering: (params: ManglendeInntektsmeldingVurdering) => Promise<void>;
  lagreCallback: (aksjonspunktData: FaktaAksjonspunkt) => Promise<void>;
  settBehandlingPåVentCallback: (params: {
    frist: string;
    ventearsak: string;
  }) => Promise<any>
  erOverstyrer: boolean;
  alleKodeverk: AlleKodeverk;
}

const finnUløstArbeidsforholdIndex = (tabellData: ArbeidsforholdOgInntekt[]) => tabellData
  .findIndex((d) => (d.arbeidsforhold?.årsak && !d.arbeidsforhold?.saksbehandlersVurdering)
    || (d.inntektsmelding?.årsak && !d.inntektsmelding?.saksbehandlersVurdering));

const ArbeidOgInntektFaktaPanel: FunctionComponent<OwnProps> = ({
  behandling,
  aksjonspunkter,
  isReadOnly,
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
}) => {
  const intl = useIntl();
  const [erKnappTrykket, setsKnappTrykket] = useState(false);
  const [visSettPåVentModal, settVisSettPåVentModal] = useState(false);
  const [isDirty, setDirty] = useState(false);

  const headers = HEADER_TEXT_IDS.map((textId) => (textId !== 'EMPTY' ? intl.formatMessage({ id: textId }) : textId));

  const { arbeidsforhold, inntektsmeldinger } = arbeidOgInntekt;

  const [tabellData, setTabellData] = useState(formData || byggTabellStruktur(arbeidOgInntekt, arbeidsgiverOpplysningerPerId));

  const [autoÅpneRadIndex, setAutoÅpenRadIndex] = useState(finnUløstArbeidsforholdIndex(tabellData));

  const updateTabellData = useCallback((data: ArbeidsforholdOgInntekt[]) => {
    setDirty(true);
    setTabellData(data);
    // @ts-ignore Fiks
    setAutoÅpenRadIndex(finnUløstArbeidsforholdIndex(data(tabellData)));
  }, [tabellData]);

  useEffect(() => () => {
    setFormData(tabellData);
  }, [tabellData]);

  const harIngenArbeidsforholdEllerInntektsmeldinger = arbeidsforhold.length === 0 && inntektsmeldinger.length === 0;

  const harUløsteManglendeInntektsmeldinger = tabellData.some((d) => d.arbeidsforhold?.årsak && !d.arbeidsforhold?.saksbehandlersVurdering);
  const harUløsteManglandeOpplysninger = tabellData.some((d) => d.inntektsmelding?.årsak && !d.inntektsmelding?.saksbehandlersVurdering);

  const aksjonspunktTekstKoder = finnApTekstKoder(
    aksjonspunkter, harUløsteManglendeInntektsmeldinger, harUløsteManglandeOpplysninger, harIngenArbeidsforholdEllerInntektsmeldinger, erOverstyrer);

  const harUløsteAksjonspunkt = harUløsteManglendeInntektsmeldinger || harUløsteManglandeOpplysninger;
  const kanSettePåVent = tabellData
    .some((d) => d.arbeidsforhold?.saksbehandlersVurdering?.kode === ArbeidsforholdKomplettVurderingType.VENT_PÅ_INNTEKTSMELDING
      || d.inntektsmelding?.saksbehandlersVurdering?.kode === ArbeidsforholdKomplettVurderingType.VENT_PÅ_ARBEIDSFORHOLD);

  const [antallÅpnedeRader, oppdaterAntallÅpneRader] = useState(0);
  const oppdaterÅpneRader = (skalLukke: boolean) => {
    oppdaterAntallÅpneRader((antall) => (skalLukke ? antall + 1 : antall - 1));
  };
  const [erOverstyrt, toggleOverstyring] = useState(false);
  const [skalLeggeTilArbeidsforhold, toggleLeggTilArbeidsforhold] = useState(false);
  const harManueltLagtTilArbeidsforhold = tabellData.some((data) => data.arbeidsforhold?.arbeidsgiverIdent === MANUELT_ORG_NR);

  const lagre = useCallback(() => {
    setsKnappTrykket(true);
    lagreCallback({
      kode: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING_KODE,
    });
  }, []);
  const settPaVent = useCallback((params: { frist: string; ventearsak: string; }) => {
    setsKnappTrykket(true);
    settVisSettPåVentModal(false);
    settBehandlingPåVentCallback(params);
  }, [behandling.versjon]);

  return (
    <>
      <Row>
        <Column xs="8">
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <Undertittel><FormattedMessage id="ArbeidOgInntektFaktaPanel.Overskrift" /></Undertittel>
              </FlexColumn>
              {erOverstyrer && !isReadOnly && (
                <FlexColumn>
                  <OverstyringKnapp onClick={toggleOverstyring} />
                </FlexColumn>
              )}
            </FlexRow>
          </FlexContainer>
        </Column>
        <Column xs="4">
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
          {aksjonspunktTekstKoder.map((tekstKode) => (
            <FormattedMessage id={tekstKode} />
          ))}
        </AksjonspunktHelpTextHTML>
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
          <NyttArbeidsforholdForm
            behandlingUuid={behandling.uuid}
            isReadOnly={false}
            registrerArbeidsforhold={registrerArbeidsforhold}
            avbrytEditering={() => toggleLeggTilArbeidsforhold(false)}
            erOverstyrt
            oppdaterTabell={updateTabellData}
          />
          <VerticalSpacer fourtyPx />
        </>
      )}
      <Table headerTextCodes={headers} noHover>
        <>
          {tabellData.map((data, index) => (
            <ArbeidsforholdRad
              behandlingUuid={behandling.uuid}
              skjæringspunktDato={arbeidOgInntekt.skjæringstidspunkt}
              arbeidsforholdOgInntekt={data}
              isReadOnly={isReadOnly}
              registrerArbeidsforhold={registrerArbeidsforhold}
              lagreVurdering={lagreVurdering}
              oppdaterÅpenRad={oppdaterÅpneRader}
              erOverstyrt={erOverstyrt}
              oppdaterTabell={updateTabellData}
              erRadÅpen={index === autoÅpneRadIndex}
            />
          ))}
        </>
      </Table>
      <VerticalSpacer sixteenPx />
      {!isReadOnly && isDirty && !harUløsteAksjonspunkt && kanSettePåVent && antallÅpnedeRader === 0 && (
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
            frist={behandling.fristBehandlingPåVent}
            ventearsak={behandling.venteArsakKode}
            hasManualPaVent
            ventearsaker={alleKodeverk[KodeverkType.VENT_AARSAK]}
            erTilbakekreving={false}
            showModal={visSettPåVentModal}
          />
        </>
      )}
      {!isReadOnly && isDirty && !harUløsteAksjonspunkt && !kanSettePåVent && antallÅpnedeRader === 0 && (
        <Hovedknapp
          mini
          disabled={erKnappTrykket}
          spinner={erKnappTrykket}
          onClick={lagre}
        >
          <FormattedMessage id="ArbeidOgInntektFaktaPanel.Bekreft" />
        </Hovedknapp>
      )}
    </>
  );
};

export default ArbeidOgInntektFaktaPanel;
