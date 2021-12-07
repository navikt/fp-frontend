import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Normaltekst, Undertittel } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import { Hovedknapp } from 'nav-frontend-knapper';
import advarselIkonUrl from '@fpsak-frontend/assets/images/advarsel2.svg';
import { ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId } from '@fpsak-frontend/types';
import {
  VerticalSpacer, Image, AksjonspunktHelpTextHTML, FloatRight,
} from '@fpsak-frontend/shared-components';
import ExpandableTable from './ETable';
import ETRow from './ETRow';
import ETColumn from './ETColumn';
import ReadonlyPanel from './ReadonlyPanel';

const HEADER_TEXT_IDS = [
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
  const headers = [undefined].concat(HEADER_TEXT_IDS.map((textId) => intl.formatMessage({ id: textId })));

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
      </AksjonspunktHelpTextHTML>
      <VerticalSpacer sixteenPx />
      <ExpandableTable headers={headers}>
        {arbeidOgInntekt.arbeidsforhold.map((aForhold) => {
          const arbeidsgiver = arbeidsgiverOpplysningerPerId[aForhold.arbeidsgiverIdent];
          return (
            <ETRow
              /* content={(
                <InntektsmeldingInnhentesForm
                  inntekter={arbeidOgInntekt.inntekter.filter((inntekt) => inntekt.arbeidsgiverIdent === aForhold.arbeidsgiverIdent)}
                  isReadOnly={false}
                />
              )} */
              content={(
                <ReadonlyPanel
                  arbeidsforhold={aForhold}
                  inntektsmelding={arbeidOgInntekt.inntektsmeldinger.find((iMelding) => iMelding.arbeidsgiverIdent === aForhold.arbeidsgiverIdent)}
                />
              )}
              showContent={false}
              toggleOpenHandler={() => undefined}
            >
              <ETColumn>
                <Image alt={intl.formatMessage({ id: 'ArbeidOgInntektFaktaPanel.Aksjonspunkt' })} src={advarselIkonUrl} />
              </ETColumn>
              <ETColumn>
                {arbeidsgiver.navn}
              </ETColumn>
              <ETColumn>
                periode
              </ETColumn>
              <ETColumn>
                kilde
              </ETColumn>
              <ETColumn>
                mottattDato
              </ETColumn>
            </ETRow>
          );
        })}
      </ExpandableTable>
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
