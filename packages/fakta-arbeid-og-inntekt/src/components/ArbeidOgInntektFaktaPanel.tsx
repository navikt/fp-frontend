import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Normaltekst, Undertittel } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import { Hovedknapp } from 'nav-frontend-knapper';
import advarselIkonUrl from '@fpsak-frontend/assets/images/advarsel2.svg';
import { ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId } from '@fpsak-frontend/types';
import {
  VerticalSpacer, Image, AksjonspunktHelpTextHTML, FloatRight, Table, TableColumn,
} from '@fpsak-frontend/shared-components';
import ExpandableTableRow from './ExpandableTableRow';
import LeggTilArbeidsforholdForm from './LeggTilArbeidsforholdForm';
import ManglendeOpplysningerForm from './ManglendeOpplysningerForm';

const HEADER_TEXT_IDS = [
  'EMPTY',
  'ArbeidOgInntektFaktaPanel.Arbeidsforhold',
  'ArbeidOgInntektFaktaPanel.Periode',
  'ArbeidOgInntektFaktaPanel.Kilde',
  'ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt',
];

interface OwnProps {
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const ArbeidOgInntektFaktaPanel: FunctionComponent<OwnProps> = ({
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
}) => {
  const intl = useIntl();
  const headers = HEADER_TEXT_IDS.map((textId) => (textId !== 'EMPTY' ? intl.formatMessage({ id: textId }) : textId));

  const harIngenArbeidsforholdEllerInntektsmeldinger = arbeidOgInntekt.arbeidsforhold.length === 0 && arbeidOgInntekt.inntektsmeldinger.length === 0;

  return (
    <>
      <Row>
        <Column xs="8">
          <Undertittel><FormattedMessage id="ArbeidOgInntektFaktaPanel.Overskrift" /></Undertittel>
        </Column>
        <Column xs="4">
          <FloatRight>
            <Normaltekst><FormattedMessage id="ArbeidOgInntektFaktaPanel.Skjaringstidspunkt" /></Normaltekst>
          </FloatRight>
        </Column>
      </Row>
      <VerticalSpacer sixteenPx />
      <AksjonspunktHelpTextHTML>
        <FormattedMessage id="ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding" />
        <FormattedMessage id="ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger" />
        <FormattedMessage id="ArbeidOgInntektFaktaPanel.IngenArbeidsforhold" />
      </AksjonspunktHelpTextHTML>
      <VerticalSpacer sixteenPx />
      {harIngenArbeidsforholdEllerInntektsmeldinger && (
        <>
          <VerticalSpacer sixteenPx />
          <LeggTilArbeidsforholdForm isReadOnly={false} />
          <VerticalSpacer sixteenPx />
        </>
      )}
      <Table headerTextCodes={headers} noHover>
        {arbeidOgInntekt.arbeidsforhold.map((aForhold) => {
          const arbeidsgiver = arbeidsgiverOpplysningerPerId[aForhold.arbeidsgiverIdent];
          return (
            <ExpandableTableRow
              /* content={(
                <InntektsmeldingInnhentesForm
                  inntekter={arbeidOgInntekt.inntekter.filter((inntekt) => inntekt.arbeidsgiverIdent === aForhold.arbeidsgiverIdent)}
                  isReadOnly={false}
                />
              )} */
              /* content={(
                <InntektsmeldingOpplysningerPanel
                  arbeidsforhold={aForhold}
                  inntektsmelding={arbeidOgInntekt.inntektsmeldinger.find((iMelding) => iMelding.arbeidsgiverIdent === aForhold.arbeidsgiverIdent)}
                />
              )} */
              content={(
                <ManglendeOpplysningerForm
                  arbeidsforhold={aForhold}
                  inntektsmelding={arbeidOgInntekt.inntektsmeldinger.find((iMelding) => iMelding.arbeidsgiverIdent === aForhold.arbeidsgiverIdent)}
                  isReadOnly={false}
                />
              )}
              /* content={(
                <LeggTilArbeidsforholdForm isReadOnly={false} />
              )} */
              showContent={false}
              toggleOpenHandler={() => undefined}
              isApLeftBorder
            >
              <TableColumn>
                <Image alt={intl.formatMessage({ id: 'ArbeidOgInntektFaktaPanel.Aksjonspunkt' })} src={advarselIkonUrl} />
              </TableColumn>
              <TableColumn>
                {arbeidsgiver.navn}
              </TableColumn>
              <TableColumn>
                periode
              </TableColumn>
              <TableColumn>
                kilde
              </TableColumn>
              <TableColumn>
                mottattDato
              </TableColumn>
            </ExpandableTableRow>
          );
        })}
      </Table>
      <VerticalSpacer sixteenPx />
      <Hovedknapp
        mini
        autoFocus
      >
        <FormattedMessage id="ArbeidOgInntektFaktaPanel.SettPaVent" />
      </Hovedknapp>
      <Hovedknapp
        mini
        autoFocus
      >
        <FormattedMessage id="ArbeidOgInntektFaktaPanel.Bekreft" />
      </Hovedknapp>
    </>
  );
};

export default ArbeidOgInntektFaktaPanel;
