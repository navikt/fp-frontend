import React, { FunctionComponent, useCallback, useState } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';
import { Container } from 'nav-frontend-grid';
import Panel from 'nav-frontend-paneler';
import { Undertittel } from 'nav-frontend-typografi';
import { createIntl } from '@navikt/ft-utils';
import { AlleKodeverk, Fagsak } from '@navikt/ft-types';
import { FagsakYtelseType } from '@navikt/ft-kodeverk';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { SoknadData } from '@fpsak-frontend/papirsoknad-ui-komponenter';

import EngangsstonadPapirsoknadIndex from './engangsstonad/EngangsstonadPapirsoknadIndex';
import ForeldrepengerPapirsoknadIndex from './foreldrepenger/ForeldrepengerPapirsoknadIndex';
import SvangerskapspengerPapirsoknadIndex from './svangerskapspenger/SvangerskapspengerPapirsoknadIndex';
import SoknadTypePickerForm from './SoknadTypePickerForm';
import messages from '../i18n/nb_NO.json';

import styles from './registrerPapirsoknadPanel.less';

const intl = createIntl(messages);

interface OwnProps {
  fagsak: Fagsak;
  fagsakPersonnummer: string;
  kodeverk: AlleKodeverk;
  readOnly: boolean;
  lagreUfullstendig: (
    fagsakYtelseType: string,
    familieHendelseType: string,
    foreldreType: string,
  ) => Promise<any>;
  lagreFullstendig: (
    formValues: any,
    fagsakYtelseType: string,
    familieHendelseType: string,
    foreldreType: string,
  ) => Promise<any>;
  erEndringssøknad: boolean;
}

const RegistrerPapirsoknadPanel: FunctionComponent<OwnProps> = ({
  fagsak,
  fagsakPersonnummer,
  kodeverk,
  readOnly,
  lagreUfullstendig,
  lagreFullstendig,
  erEndringssøknad,
}) => {
  const [soknadData, setSoknadData] = useState<SoknadData>();

  const lagre = useCallback((
    formValues: any) => lagreFullstendig(formValues, soknadData.fagsakYtelseType, soknadData.familieHendelseType, soknadData.foreldreType),
  [soknadData]);
  const lagreOgAvslutt = useCallback(() => lagreUfullstendig(soknadData.fagsakYtelseType, soknadData.familieHendelseType, soknadData.foreldreType),
    [soknadData]);

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
              onSubmitUfullstendigsoknad={lagreOgAvslutt}
              onSubmit={lagre}
              readOnly={readOnly}
              soknadData={soknadData}
              alleKodeverk={kodeverk}
              fagsakPersonnummer={fagsakPersonnummer}
            />
          )}
          {soknadData && soknadData.getFagsakYtelseType() === FagsakYtelseType.FORELDREPENGER && (
            <ForeldrepengerPapirsoknadIndex
              onSubmitUfullstendigsoknad={lagreOgAvslutt}
              onSubmit={lagre}
              readOnly={readOnly}
              soknadData={soknadData}
              alleKodeverk={kodeverk}
              fagsakPersonnummer={fagsakPersonnummer}
              erEndringssøknad={erEndringssøknad}
            />
          )}
          {soknadData && soknadData.getFagsakYtelseType() === FagsakYtelseType.SVANGERSKAPSPENGER && (
            <SvangerskapspengerPapirsoknadIndex
              onSubmitUfullstendigsoknad={lagreOgAvslutt}
              onSubmit={lagre}
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
