import React, {
  FunctionComponent, useState, useEffect,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Normaltekst, Undertittel } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import Lenke from 'nav-frontend-lenker';
import { Hovedknapp } from 'nav-frontend-knapper';

import addCircleIcon from '@fpsak-frontend/assets/images/add-circle.svg';
import { dateFormat } from '@fpsak-frontend/utils';
import {
  Aksjonspunkt, ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId, ManglendeInntektsmeldingVurdering, ManueltArbeidsforhold,
} from '@fpsak-frontend/types';
import {
  VerticalSpacer, Image, AksjonspunktHelpTextHTML, FloatRight, Table, OverstyringKnapp,
  FlexColumn, FlexContainer, FlexRow,
} from '@fpsak-frontend/shared-components';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
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
  harIngenArbeidsforholdEllerInntektsmeldinger: boolean,
  erOverstyrer: boolean,
): string[] => {
  if (harIngenArbeidsforholdEllerInntektsmeldinger && erOverstyrer) {
    return ['ArbeidOgInntektFaktaPanel.IngenArbeidsforhold'];
  }

  const koder = [];
  if (aksjonspunkter.some((ap) => ap.definisjon.kode === '9998' && ap.status.kode === aksjonspunktStatus.OPPRETTET)) {
    koder.push('ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding');
  }
  if (aksjonspunkter.some((ap) => ap.definisjon.kode === '9999' && ap.status.kode === aksjonspunktStatus.OPPRETTET)) {
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
  behandlingUuid: string;
  skjæringspunktDato: string;
  aksjonspunkter: Aksjonspunkt[];
  isReadOnly: boolean;
  formData?: ArbeidsforholdOgInntekt[],
  setFormData: (data: ArbeidsforholdOgInntekt[]) => void,
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  registrerArbeidsforhold: (params: ManueltArbeidsforhold) => Promise<void>;
  lagreVurdering: (params: ManglendeInntektsmeldingVurdering) => Promise<void>;
  erOverstyrer: boolean;
}

const ArbeidOgInntektFaktaPanel: FunctionComponent<OwnProps> = ({
  behandlingUuid,
  skjæringspunktDato,
  aksjonspunkter,
  isReadOnly,
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
  registrerArbeidsforhold,
  lagreVurdering,
  formData,
  setFormData,
  erOverstyrer,
}) => {
  const intl = useIntl();
  const headers = HEADER_TEXT_IDS.map((textId) => (textId !== 'EMPTY' ? intl.formatMessage({ id: textId }) : textId));

  const { arbeidsforhold, inntektsmeldinger } = arbeidOgInntekt;

  const [tabellData, setTabellData] = useState(formData || byggTabellStruktur(arbeidOgInntekt, arbeidsgiverOpplysningerPerId));

  useEffect(() => () => {
    setFormData(tabellData);
  }, [tabellData]);

  const harIngenArbeidsforholdEllerInntektsmeldinger = arbeidsforhold.length === 0 && inntektsmeldinger.length === 0;
  const aksjonspunktTekstKoder = finnApTekstKoder(aksjonspunkter, harIngenArbeidsforholdEllerInntektsmeldinger, erOverstyrer);

  const harUløsteAksjonspunkt = tabellData
    .some((d) => (!d.inntektsmelding && !d.arbeidsforhold?.begrunnelse) || (!d.arbeidsforhold && !d.inntektsmelding?.begrunnelse));
  const kanSettePåVent = tabellData
    .some((d) => d.arbeidsforhold?.skalInnhenteInntektsmelding === true || d.inntektsmelding?.skalSeBortFraInntektsmelding === false);

  const [antallÅpnedeRader, setÅpenRad] = useState(0);
  const oppdaterÅpenRad = (skalLukke: boolean) => {
    setÅpenRad((antall) => (skalLukke ? antall + 1 : antall - 1));
  };
  const [erOverstyrt, toggleOverstyring] = useState(false);
  const [skalLeggeTilArbeidsforhold, toggleLeggTilArbeidsforhold] = useState(false);
  const harManueltLagtTilArbeidsforhold = tabellData.some((data) => data.arbeidsforhold?.arbeidsgiverIdent === MANUELT_ORG_NR);

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
              <FormattedMessage id="ArbeidOgInntektFaktaPanel.Skjaringstidspunkt" values={{ skjæringspunktDato: dateFormat(skjæringspunktDato) }} />
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
            behandlingUuid={behandlingUuid}
            isReadOnly={false}
            registrerArbeidsforhold={registrerArbeidsforhold}
            avbrytEditering={() => toggleLeggTilArbeidsforhold(false)}
            erOverstyrt
            oppdaterTabell={setTabellData}
          />
          <VerticalSpacer fourtyPx />
        </>
      )}
      <Table headerTextCodes={headers} noHover>
        <>
          {tabellData.map((data) => (
            <ArbeidsforholdRad
              behandlingUuid={behandlingUuid}
              skjæringspunktDato={skjæringspunktDato}
              arbeidsforholdOgInntekt={data}
              isReadOnly={isReadOnly}
              registrerArbeidsforhold={registrerArbeidsforhold}
              lagreVurdering={lagreVurdering}
              oppdaterÅpenRad={oppdaterÅpenRad}
              erOverstyrt={erOverstyrt}
              oppdaterTabell={setTabellData}
            />
          ))}
        </>
      </Table>
      <VerticalSpacer sixteenPx />
      {kanSettePåVent && (
        <Hovedknapp
          mini
          autoFocus
        >
          <FormattedMessage id="ArbeidOgInntektFaktaPanel.SettPaVent" />
        </Hovedknapp>
      )}
      {!isReadOnly && !harUløsteAksjonspunkt && !kanSettePåVent && antallÅpnedeRader === 0 && (
        <Hovedknapp
          mini
          autoFocus
        >
          <FormattedMessage id="ArbeidOgInntektFaktaPanel.Bekreft" />
        </Hovedknapp>
      )}
    </>
  );
};

export default ArbeidOgInntektFaktaPanel;
