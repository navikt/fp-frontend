import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Undertittel } from 'nav-frontend-typografi';

import advarselIkonUrl from '@fpsak-frontend/assets/images/advarsel2.svg';
import { ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId } from '@fpsak-frontend/types';
import { VerticalSpacer, Image } from '@fpsak-frontend/shared-components';
import ExpandableTable from './ETable';
import ETRow from './ETRow';
import ETColumn from './ETColumn';

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
      <Undertittel><FormattedMessage id="ArbeidOgInntektFaktaPanel.Overskrift" /></Undertittel>
      <VerticalSpacer eightPx />
      <ExpandableTable headers={headers}>
        {arbeidOgInntekt.arbeidsforhold.map((aForhold) => {
          const arbeidsgiver = arbeidsgiverOpplysningerPerId[aForhold.arbeidsgiverIdent];
          return (
            <ETRow content={<div>test innhold</div>} isOpen toggleOpenHandler={() => undefined}>
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
    </>
  );
};

export default ArbeidOgInntektFaktaPanel;
