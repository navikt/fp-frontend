import React, {
  FunctionComponent, useState, useEffect,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Normaltekst, Undertittel } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import Lenke from 'nav-frontend-lenker';
import { Hovedknapp } from 'nav-frontend-knapper';

import addCircleIcon from '@fpsak-frontend/assets/images/add-circle.svg';
import {
  Aksjonspunkt, ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId,
} from '@fpsak-frontend/types';
import {
  VerticalSpacer, Image, AksjonspunktHelpTextHTML, FloatRight, Table, OverstyringKnapp,
  FlexColumn, FlexContainer, FlexRow,
} from '@fpsak-frontend/shared-components';
import NyttArbeidsforholdForm, { FormValues as NyttArbeidsforholdFormValues } from './NyttArbeidsforholdForm';
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
  if (aksjonspunkter.some((ap) => ap.definisjon.kode === '9998')) {
    return 'ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding';
  }
  if (aksjonspunkter.some((ap) => ap.definisjon.kode === '9999')) {
    return 'ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger';
  }
  return undefined;
};

const byggStruktur = (
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
  lagreNyttArbeidsforhold: (formValues: NyttArbeidsforholdFormValues) => void;
  lagreManglendeArbeidsforhold: (formValues: FormValuesForManglendeArbeidsforhold) => void;
  lagreManglendeInntekstmelding: (formValues: FormValuesForManglendeInntektsmelding) => void;
  erOverstyrer: boolean;
}

const ArbeidOgInntektFaktaPanel: FunctionComponent<OwnProps> = ({
  skjæringspunktDato,
  aksjonspunkter,
  isReadOnly,
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
  lagreNyttArbeidsforhold,
  lagreManglendeArbeidsforhold,
  lagreManglendeInntekstmelding,
  formData,
  setFormData,
  erOverstyrer,
}) => {
  const intl = useIntl();
  const headers = HEADER_TEXT_IDS.map((textId) => (textId !== 'EMPTY' ? intl.formatMessage({ id: textId }) : textId));

  const { arbeidsforhold, inntektsmeldinger } = arbeidOgInntekt;

  const [listeData, setListeData] = useState(formData || byggStruktur(arbeidOgInntekt, arbeidsgiverOpplysningerPerId));

  useEffect(() => () => {
    setFormData(listeData);
  }, [listeData]);

  const harIngenArbeidsforholdEllerInntektsmeldinger = arbeidsforhold.length === 0 && inntektsmeldinger.length === 0;
  const aksjonspunktTekstKode = finnApTekstKode(aksjonspunkter, harIngenArbeidsforholdEllerInntektsmeldinger, erOverstyrer);

  const kanBekrefte = listeData.length > 0 && listeData.every((d) => d.nyttArbeidsforholdId);

  const lagreStateOgNyttArbeidsforhold = (formValues: NyttArbeidsforholdFormValues, nyttArbeidsforholdId?: number) => {
    lagreNyttArbeidsforhold(formValues);
    setListeData((oldData) => {
      const index = oldData.findIndex((data) => data.nyttArbeidsforholdId === nyttArbeidsforholdId);
      if (index === -1) {
        const nyId = oldData.reduce((sisteId, data) => (data.nyttArbeidsforholdId > sisteId ? data.nyttArbeidsforholdId + 1 : sisteId), 1);
        return oldData.concat({
          arbeidsforhold: {
            fom: formValues.periodeFra,
            tom: formValues.periodeTil,
            stillingsprosent: formValues.stillingsprosent,
            begrunnelse: formValues.begrunnelse,
          },
          arbeidsforholdNavn: formValues.arbeidsgiver,
          inntektsmelding: undefined,
          inntektsposter: undefined,
          nyttArbeidsforholdId: nyId,
        });
      }
      return oldData.map((data, i) => {
        if (i === index) {
          return {
            arbeidsforhold: {
              fom: formValues.periodeFra,
              tom: formValues.periodeTil,
              stillingsprosent: formValues.stillingsprosent,
              begrunnelse: formValues.begrunnelse,
            },
            arbeidsforholdNavn: formValues.arbeidsgiver,
            inntektsmelding: undefined,
            inntektsposter: undefined,
            nyttArbeidsforholdId,
          };
        }
        return data;
      });
    });
    // Kun returner om lagring har gått bra
    return Promise.resolve();
  };

  const [antallÅpnedeRader, setÅpenRad] = useState(0);
  const oppdaterÅpenRad = (skalLukke: boolean) => {
    setÅpenRad((antall) => {
      debugger;
      return (skalLukke ? antall + 1 : antall - 1);
    });
  };
  const [erOverstyrt, toggleOverstyring] = useState(false);
  const [skalLeggeTilArbeidsforhold, toggleLeggTilArbeidsforhold] = useState(false);

  return (
    <>
      <Row>
        <Column xs="8">
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <Undertittel><FormattedMessage id="ArbeidOgInntektFaktaPanel.Overskrift" /></Undertittel>
              </FlexColumn>
              {erOverstyrer && (
                <FlexColumn>
                  <OverstyringKnapp onClick={toggleOverstyring} />
                </FlexColumn>
              )}
            </FlexRow>
          </FlexContainer>
        </Column>
        <Column xs="4">
          <FloatRight>
            <Normaltekst><FormattedMessage id="ArbeidOgInntektFaktaPanel.Skjaringstidspunkt" values={{ skjæringspunktDato }} /></Normaltekst>
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
      {erOverstyrt && !skalLeggeTilArbeidsforhold && (
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
          <VerticalSpacer thirtyTwoPx />
        </>
      )}
      <VerticalSpacer thirtyTwoPx />
      {skalLeggeTilArbeidsforhold && (
        <>
          <NyttArbeidsforholdForm
            isReadOnly={false}
            lagreNyttArbeidsforhold={lagreStateOgNyttArbeidsforhold}
            avbrytEditering={() => toggleLeggTilArbeidsforhold(false)}
          />
          <VerticalSpacer fourtyPx />
        </>
      )}
      <Table headerTextCodes={headers} noHover>
        <>
          {listeData.map((data) => (
            <ArbeidsforholdRad
              arbeidsforholdOgInntekt={data}
              isReadOnly={isReadOnly}
              lagreNyttArbeidsforhold={lagreStateOgNyttArbeidsforhold}
              lagreManglendeArbeidsforhold={lagreManglendeArbeidsforhold}
              lagreManglendeInntekstmelding={lagreManglendeInntekstmelding}
              oppdaterÅpenRad={oppdaterÅpenRad}
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
      {kanBekrefte && antallÅpnedeRader === 0 && (
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
