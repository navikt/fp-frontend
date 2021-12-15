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
  Aksjonspunkt, ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId,
} from '@fpsak-frontend/types';
import {
  VerticalSpacer, Image, AksjonspunktHelpTextHTML, FloatRight, Table, OverstyringKnapp,
  FlexColumn, FlexContainer, FlexRow,
} from '@fpsak-frontend/shared-components';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import NyttArbeidsforholdForm, { FormValues as NyttArbeidsforholdFormValues, MANUELT_ORG_NR } from './NyttArbeidsforholdForm';
import { FormValuesForManglendeArbeidsforhold } from './ManglendeOpplysningerForm';
import { FormValuesForManglendeInntektsmelding } from './InntektsmeldingInnhentesForm';
import ArbeidsforholdRad from './ArbeidsforholdRad';
import ArbeidsforholdOgInntekt from '../types/arbeidsforholdOgInntekt';

const HEADER_TEXT_IDS = [
  'EMPTY',
  'ArbeidOgInntektFaktaPanel.Arbeidsforhold',
  'ArbeidOgInntektFaktaPanel.Periode',
  'ArbeidOgInntektFaktaPanel.Kilde',
  'ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt',
];

const finnApTekstKode = (
  aksjonspunkter: Aksjonspunkt[],
  harIngenArbeidsforholdEllerInntektsmeldinger: boolean,
  erOverstyrer: boolean,
): string | undefined => {
  if (harIngenArbeidsforholdEllerInntektsmeldinger && erOverstyrer) {
    return 'ArbeidOgInntektFaktaPanel.IngenArbeidsforhold';
  }
  if (aksjonspunkter.some((ap) => ap.definisjon.kode === '9998' && ap.status.kode === aksjonspunktStatus.OPPRETTET)) {
    return 'ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding';
  }
  if (aksjonspunkter.some((ap) => ap.definisjon.kode === '9999' && ap.status.kode === aksjonspunktStatus.OPPRETTET)) {
    return 'ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger';
  }
  return undefined;
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

  return alleArbeidsforhold.concat(alleInntektsmeldingerSomManglerArbeidsforhold);
};

interface OwnProps {
  skjæringspunktDato: string;
  aksjonspunkter: Aksjonspunkt[];
  isReadOnly: boolean;
  formData?: ArbeidsforholdOgInntekt[],
  setFormData: (data: ArbeidsforholdOgInntekt[]) => void,
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  lagreNyttArbeidsforhold: (formValues: NyttArbeidsforholdFormValues) => Promise<any>;
  slettNyttArbeidsforhold: () => Promise<any>;
  lagreManglendeArbeidsforhold: (formValues: FormValuesForManglendeArbeidsforhold) => Promise<any>;
  lagreManglendeInntekstmelding: (formValues: FormValuesForManglendeInntektsmelding) => Promise<any>;
  erOverstyrer: boolean;
}

const ArbeidOgInntektFaktaPanel: FunctionComponent<OwnProps> = ({
  skjæringspunktDato,
  aksjonspunkter,
  isReadOnly,
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
  lagreNyttArbeidsforhold,
  slettNyttArbeidsforhold,
  lagreManglendeArbeidsforhold,
  lagreManglendeInntekstmelding,
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
  const aksjonspunktTekstKode = finnApTekstKode(aksjonspunkter, harIngenArbeidsforholdEllerInntektsmeldinger, erOverstyrer);

  const kanBekrefte = tabellData.length > 0 && tabellData.every((d) => d.arbeidsforhold?.arbeidsgiverIdent === MANUELT_ORG_NR);

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
      {aksjonspunktTekstKode && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id={aksjonspunktTekstKode} />
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
            isReadOnly={false}
            lagreNyttArbeidsforhold={lagreNyttArbeidsforhold}
            slettNyttArbeidsforhold={slettNyttArbeidsforhold}
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
              skjæringspunktDato={skjæringspunktDato}
              arbeidsforholdOgInntekt={data}
              isReadOnly={isReadOnly}
              lagreNyttArbeidsforhold={lagreNyttArbeidsforhold}
              slettNyttArbeidsforhold={slettNyttArbeidsforhold}
              lagreManglendeArbeidsforhold={lagreManglendeArbeidsforhold}
              lagreManglendeInntekstmelding={lagreManglendeInntekstmelding}
              oppdaterÅpenRad={oppdaterÅpenRad}
              erOverstyrt={erOverstyrt}
              oppdaterTabell={setTabellData}
            />
          ))}
        </>
      </Table>
      <VerticalSpacer sixteenPx />
      {false && (
      <Hovedknapp
        mini
        autoFocus
      >
        <FormattedMessage id="ArbeidOgInntektFaktaPanel.SettPaVent" />
      </Hovedknapp>
      )}
      {!isReadOnly && kanBekrefte && antallÅpnedeRader === 0 && (
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
