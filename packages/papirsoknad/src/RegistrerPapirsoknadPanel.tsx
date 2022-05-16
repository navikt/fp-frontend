import React, { FunctionComponent, useState } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';
import { Container } from 'nav-frontend-grid';
import Panel from 'nav-frontend-paneler';
import { Undertittel } from 'nav-frontend-typografi';

import { createIntl } from '@navikt/ft-utils';
import { AlleKodeverk, Fagsak } from '@navikt/ft-types';
import { FagsakYtelseType } from '@navikt/ft-kodeverk';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import EngangsstonadPapirsoknadIndex from './engangsstonad/EngangsstonadPapirsoknadIndex';
import ForeldrepengerPapirsoknadIndex from './foreldrepenger/ForeldrepengerPapirsoknadIndex';
import SvangerskapspengerPapirsoknadIndex from './svangerskapspenger/SvangerskapspengerPapirsoknadIndex';
import SoknadData from './felles/SoknadData';

import SoknadTypePickerForm from './SoknadTypePickerForm';
import messages from '../i18n/nb_NO.json';

import styles from './registrerPapirsoknadPanel.less';

const intl = createIntl(messages);

interface OwnProps {
  fagsak: Fagsak;
  fagsakPersonnummer: string;
  kodeverk: AlleKodeverk;
  readOnly: boolean;
  lagreUfullstendig: () => Promise<any>;
  lagreFullstendig: (values: any) => Promise<any>;
}

const RegistrerPapirsoknadPanel: FunctionComponent<OwnProps> = ({
  fagsak,
  fagsakPersonnummer,
  kodeverk,
  readOnly,
  lagreUfullstendig,
  lagreFullstendig,
}) => {
  const [soknadData, setSoknadData] = useState<SoknadData>();
  return (
    <RawIntlProvider value={intl}>
      <Panel className={styles.panel}>
        <Container fluid>
          <Undertittel><FormattedMessage id="Registrering.RegistrereSoknad" /></Undertittel>
          <VerticalSpacer sixteenPx />
          {!readOnly && (
            <AksjonspunktHelpTextHTML>
              <FormattedMessage key="regOpplysninger" id="Registrering.RegistrerAlleOpplysninger" />
            </AksjonspunktHelpTextHTML>
          )}
          <VerticalSpacer sixteenPx />
          <VerticalSpacer sixteenPx />
          <SoknadTypePickerForm
            setSoknadData={setSoknadData}
            fagsakYtelseType={fagsak.fagsakYtelseType}
            alleKodeverk={kodeverk}
          />
          {soknadData && soknadData.getFagsakYtelseType() === FagsakYtelseType.ENGANGSSTONAD && (
            <EngangsstonadPapirsoknadIndex
              onSubmitUfullstendigsoknad={lagreUfullstendig}
              onSubmit={lagreFullstendig}
              readOnly={readOnly}
              soknadData={soknadData}
              alleKodeverk={kodeverk}
              fagsakPersonnummer={fagsakPersonnummer}
            />
          )}
          {soknadData && soknadData.getFagsakYtelseType() === FagsakYtelseType.FORELDREPENGER && (
            <ForeldrepengerPapirsoknadIndex
              onSubmitUfullstendigsoknad={lagreUfullstendig}
              onSubmit={lagreFullstendig}
              readOnly={readOnly}
              soknadData={soknadData}
              alleKodeverk={kodeverk}
              fagsakPersonnummer={fagsakPersonnummer}
            />
          )}
          {soknadData && soknadData.getFagsakYtelseType() === FagsakYtelseType.SVANGERSKAPSPENGER && (
            <SvangerskapspengerPapirsoknadIndex
              onSubmitUfullstendigsoknad={lagreUfullstendig}
              onSubmit={lagreFullstendig}
              readOnly={readOnly}
              soknadData={soknadData}
              alleKodeverk={kodeverk}
            />
          )}
        </Container>
      </Panel>
    </RawIntlProvider>
  );
};

export default RegistrerPapirsoknadPanel;
