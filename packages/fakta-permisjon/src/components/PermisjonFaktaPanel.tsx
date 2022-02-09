import React, {
  FunctionComponent, useState, useEffect, useCallback,
} from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst, Undertittel } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import { Hovedknapp } from 'nav-frontend-knapper';

import { dateFormat } from '@fpsak-frontend/utils';
import {
  Aksjonspunkt, ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId, Behandling,
} from '@fpsak-frontend/types';
import {
  VerticalSpacer, AksjonspunktHelpTextHTML, FloatRight, Table,
} from '@fpsak-frontend/shared-components';
import { VurderArbeidsforholdPermisjonAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import ArbeidsforholdRad from './ArbeidsforholdRad';
import ArbeidsforholdOgInntekt from '../types/arbeidsforholdOgInntekt';

const sorterTabell = (d1: ArbeidsforholdOgInntekt, d2: ArbeidsforholdOgInntekt): number => d1.arbeidsgiverNavn.localeCompare(d2.arbeidsgiverNavn);

const byggTabellStruktur = (
  arbeidOgInntekt: ArbeidOgInntektsmelding,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ArbeidsforholdOgInntekt[] => {
  const { arbeidsforhold, inntektsmeldinger, inntekter } = arbeidOgInntekt;

  const alleArbeidsforhold = arbeidsforhold.map<ArbeidsforholdOgInntekt>((af) => ({
    arbeidsforhold: af,
    arbeidsgiverNavn: arbeidsgiverOpplysningerPerId[af.arbeidsgiverIdent].navn,
    inntektsmelding: inntektsmeldinger.find((inntektsmelding) => inntektsmelding.arbeidsgiverIdent === af.arbeidsgiverIdent),
    inntektsposter: inntekter.find((inntekt) => inntekt.arbeidsgiverIdent === af.arbeidsgiverIdent)?.inntekter,
  }));
  const alleInntektsmeldingerSomManglerArbeidsforhold = arbeidOgInntekt.inntektsmeldinger
    .filter((im) => !arbeidsforhold.some((af) => im.arbeidsgiverIdent === af.arbeidsgiverIdent))
    .map<ArbeidsforholdOgInntekt>((im) => ({
      arbeidsforhold: undefined,
      arbeidsgiverNavn: arbeidsgiverOpplysningerPerId[im.arbeidsgiverIdent].navn,
      inntektsmelding: im,
      inntektsposter: inntekter.find((inntekt) => inntekt.arbeidsgiverIdent === im.arbeidsgiverIdent)?.inntekter,
    }));

  return alleArbeidsforhold.concat(alleInntektsmeldingerSomManglerArbeidsforhold).sort(sorterTabell);
};

const finnUløstArbeidsforholdIndex = (tabellData: ArbeidsforholdOgInntekt[]): number[] => {
  const index = tabellData.findIndex((d) => (d.arbeidsforhold.permisjonUtenSluttdatoDto.permisjonStatus === undefined));
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
  lagreCallback: (aksjonspunktData: VurderArbeidsforholdPermisjonAp) => Promise<void>;
}

const ArbeidOgInntektFaktaPanel: FunctionComponent<OwnProps> = ({
  saksnummer,
  behandling,
  aksjonspunkter,
  readOnly,
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
  lagreCallback,
}) => {
  const [erKnappTrykket, settKnappTrykket] = useState(false);
  const [isDirty, setDirty] = useState(false);

  const [tabellData, setTabellData] = useState(formData || byggTabellStruktur(arbeidOgInntekt, arbeidsgiverOpplysningerPerId));
  const [åpneRadIndexer, settÅpneRadIndexer] = useState(finnUløstArbeidsforholdIndex(tabellData));

  useEffect(() => () => {
    setFormData(tabellData);
  }, [tabellData]);

  const harÅpentAksjonspunkt = aksjonspunkter.some((a) => a.status === aksjonspunktStatus.OPPRETTET);

  const harUbehandledeAksjonspunkt = tabellData.some((d) => d.arbeidsforhold.permisjonUtenSluttdatoDto.permisjonStatus === undefined);

  const toggleÅpenRad = useCallback((index: number) => {
    if (åpneRadIndexer.some((radIndex) => radIndex === index)) {
      settÅpneRadIndexer(åpneRadIndexer.filter((i) => i !== index));
    } else {
      settÅpneRadIndexer(åpneRadIndexer.concat(index));
    }
  }, [åpneRadIndexer, settÅpneRadIndexer]);

  const oppdaterTabellData = useCallback((data: ArbeidsforholdOgInntekt[]) => {
    setDirty(true);
    setTabellData(data);
    // @ts-ignore Fiks
    settÅpneRadIndexer(finnUløstArbeidsforholdIndex(data(tabellData)));
  }, [tabellData]);

  const lagreOgFortsett = useCallback(() => {
    settKnappTrykket(true);
    lagreCallback({
      kode: AksjonspunktCode.VURDER_ARBEIDSFORHOLD_PERMISJON_KODE,
      arbeidsforhold: tabellData.map((d) => ({
        internArbeidsforholdId: d.arbeidsforhold.internArbeidsforholdId,
        permisjonStatus: d.arbeidsforhold.permisjonUtenSluttdatoDto.permisjonStatus,
        begrunnelse: d.arbeidsforhold.begrunnelse,
      })),
    });
  }, [behandling.versjon, tabellData]);

  return (
    <>
      <Row>
        <Column xs="6">
          <Undertittel><FormattedMessage id="PermisjonFaktaPanel.Overskrift" /></Undertittel>
        </Column>
        <Column xs="6">
          <FloatRight>
            <Normaltekst>
              <FormattedMessage
                id="PermisjonFaktaPanel.Skjaringstidspunkt"
                values={{ skjæringspunktDato: dateFormat(arbeidOgInntekt.skjæringstidspunkt) }}
              />
            </Normaltekst>
          </FloatRight>
        </Column>
      </Row>
      <VerticalSpacer thirtyTwoPx />
      {harÅpentAksjonspunkt && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="PermisjonFaktaPanel.PermisjonUtenSluttdato" />
        </AksjonspunktHelpTextHTML>
      )}
      <VerticalSpacer thirtyTwoPx />
      <Table noHover>
        <>
          {tabellData.map((data, index) => (
            <ArbeidsforholdRad
              key={data.arbeidsgiverNavn}
              saksnummer={saksnummer}
              arbeidsforholdOgInntekt={data}
              isReadOnly={readOnly}
              toggleÅpenRad={() => toggleÅpenRad(index)}
              oppdaterTabell={oppdaterTabellData}
              erRadÅpen={åpneRadIndexer.includes(index)}
              harÅpentAksjonspunkt={harÅpentAksjonspunkt}
            />
          ))}
        </>
      </Table>
      <VerticalSpacer sixteenPx />
      {!readOnly && !harUbehandledeAksjonspunkt && isDirty && åpneRadIndexer.length === 0 && (
        <Hovedknapp
          mini
          disabled={erKnappTrykket}
          spinner={erKnappTrykket}
          onClick={lagreOgFortsett}
        >
          <FormattedMessage id="PermisjonFaktaPanel.Bekreft" />
        </Hovedknapp>
      )}
    </>
  );
};

export default ArbeidOgInntektFaktaPanel;
