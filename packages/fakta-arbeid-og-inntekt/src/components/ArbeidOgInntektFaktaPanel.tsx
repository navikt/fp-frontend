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
import NyttArbeidsforholdForm, { FormValues as NyttArbeidsforholdFormValues } from './NyttArbeidsforholdForm';
import { FormValuesForManglendeArbeidsforhold } from './ManglendeOpplysningerForm';
import { FormValuesForManglendeInntektsmelding } from './InntektsmeldingInnhentesForm';
import ArbeidsforholdRad, { MANUELT_ORG_NR } from './ArbeidsforholdRad';
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
  slettNyttArbeidsforhold: () => void;
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

  const [listeData, setListeData] = useState(formData || byggStruktur(arbeidOgInntekt, arbeidsgiverOpplysningerPerId));

  useEffect(() => () => {
    setFormData(listeData);
  }, [listeData]);

  const harIngenArbeidsforholdEllerInntektsmeldinger = arbeidsforhold.length === 0 && inntektsmeldinger.length === 0;
  const aksjonspunktTekstKode = finnApTekstKode(aksjonspunkter, harIngenArbeidsforholdEllerInntektsmeldinger, erOverstyrer);

  const kanBekrefte = listeData.length > 0 && listeData.every((d) => d.arbeidsforhold?.arbeidsgiverIdent === MANUELT_ORG_NR);

  const lagreStateOgNyttArbeidsforhold = (formValues: NyttArbeidsforholdFormValues) => {
    lagreNyttArbeidsforhold(formValues);
    setListeData((oldData) => {
      const index = oldData.findIndex((data) => data.arbeidsforhold?.arbeidsgiverIdent === MANUELT_ORG_NR);

      const af = {
        arbeidsforhold: {
          arbeidsgiverIdent: MANUELT_ORG_NR,
          fom: formValues.periodeFra,
          tom: formValues.periodeTil,
          stillingsprosent: formValues.stillingsprosent,
          begrunnelse: formValues.begrunnelse,
        },
        arbeidsforholdNavn: formValues.arbeidsgiver,
        inntektsmelding: undefined,
        inntektsposter: undefined,
      };

      if (index === -1) {
        return oldData.concat(af);
      }
      return oldData.map((data, i) => {
        if (i === index) {
          return af;
        }
        return data;
      });
    });
    // Kun returner om lagring har gått bra (putt setListData inni resolve òg)
    return Promise.resolve();
  };

  const slettArbeidsforhold = () => {
    slettNyttArbeidsforhold();
    setListeData((oldData) => oldData.filter((data) => data.arbeidsforhold?.arbeidsgiverIdent !== MANUELT_ORG_NR));
    // Kun returner om lagring har gått bra (putt setListData inni resolve òg)
    return Promise.resolve();
  };

  const lagreStateOgManglendeInntekstmelding = (formValues: FormValuesForManglendeInntektsmelding) => {
    lagreManglendeInntekstmelding(formValues);
    setListeData((oldData) => oldData.map((data) => {
      if (data.arbeidsforhold.arbeidsgiverIdent === formValues.arbeidsgiverIdent) {
        return {
          ...data,
          arbeidsforhold: {
            ...data.arbeidsforhold,
            begrunnelse: formValues.begrunnelse,
            skalInnhenteInntektsmelding: formValues.skalInnhenteInntektsmelding,
          },
        };
      }
      return data;
    }));
    // Kun returner om lagring har gått bra (putt setListData inni resolve òg)
    return Promise.resolve();
  };

  const lagreStateOgManglendeArbeidsforhold = (formValues: FormValuesForManglendeArbeidsforhold) => {
    lagreManglendeArbeidsforhold(formValues);
    setListeData((oldData) => oldData.map((data) => {
      if (data.inntektsmelding.arbeidsgiverIdent === formValues.arbeidsgiverIdent) {
        const af = formValues.skalBrukeInntektsmelding === undefined ? {
          arbeidsgiverIdent: formValues.arbeidsgiverIdent,
          internArbeidsforholdId: formValues.internArbeidsforholdId,
          fom: formValues.periodeFra,
          tom: formValues.periodeTil,
          stillingsprosent: formValues.stillingsprosent,
        } : undefined;
        return {
          ...data,
          inntektsmelding: {
            ...data.inntektsmelding,
            begrunnelse: formValues.begrunnelse,
          },
          arbeidsforhold: af,
        };
      }
      return data;
    }));
    // Kun returner om lagring har gått bra (putt setListData inni resolve òg)
    return Promise.resolve();
  };

  const [antallÅpnedeRader, setÅpenRad] = useState(0);
  const oppdaterÅpenRad = (skalLukke: boolean) => {
    setÅpenRad((antall) => (skalLukke ? antall + 1 : antall - 1));
  };
  const [erOverstyrt, toggleOverstyring] = useState(false);
  const [skalLeggeTilArbeidsforhold, toggleLeggTilArbeidsforhold] = useState(false);
  const harManueltLagtTilArbeidsforhold = listeData.some((data) => data.arbeidsforhold?.arbeidsgiverIdent === MANUELT_ORG_NR);

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
          <VerticalSpacer thirtyTwoPx />
        </>
      )}
      <VerticalSpacer thirtyTwoPx />
      {skalLeggeTilArbeidsforhold && (
        <>
          <NyttArbeidsforholdForm
            isReadOnly={false}
            lagreNyttArbeidsforhold={lagreStateOgNyttArbeidsforhold}
            slettNyttArbeidsforhold={slettArbeidsforhold}
            avbrytEditering={() => toggleLeggTilArbeidsforhold(false)}
            erOverstyrt
          />
          <VerticalSpacer fourtyPx />
        </>
      )}
      <Table headerTextCodes={headers} noHover>
        <>
          {listeData.map((data) => (
            <ArbeidsforholdRad
              skjæringspunktDato={skjæringspunktDato}
              arbeidsforholdOgInntekt={data}
              isReadOnly={isReadOnly}
              lagreNyttArbeidsforhold={lagreStateOgNyttArbeidsforhold}
              slettNyttArbeidsforhold={slettArbeidsforhold}
              lagreManglendeArbeidsforhold={lagreStateOgManglendeArbeidsforhold}
              lagreManglendeInntekstmelding={lagreStateOgManglendeInntekstmelding}
              oppdaterÅpenRad={oppdaterÅpenRad}
              erOverstyrt={erOverstyrt}
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
