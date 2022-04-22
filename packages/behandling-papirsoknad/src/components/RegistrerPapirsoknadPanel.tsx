import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Container } from 'nav-frontend-grid';
import Panel from 'nav-frontend-paneler';
import { Undertittel } from 'nav-frontend-typografi';
import { Dispatch } from 'redux';

import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import EngangsstonadPapirsoknadIndex from '@fpsak-frontend/papirsoknad-es';
import ForeldrepengerPapirsoknadIndex from '@fpsak-frontend/papirsoknad-fp';
import SvangerskapspengerPapirsoknadIndex from '@fpsak-frontend/papirsoknad-svp';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';
import { Fagsak, AlleKodeverk } from '@fpsak-frontend/types';
import { ReduxWrapper } from '@fpsak-frontend/form';

import SoknadTypePickerForm from './SoknadTypePickerForm';

import styles from './registrerPapirsoknadPanel.less';

interface OwnProps {
  fagsak: Fagsak;
  fagsakPersonnummer: string;
  kodeverk: AlleKodeverk;
  readOnly: boolean;
  setSoknadData: (soknadData: SoknadData) => SoknadData;
  soknadData?: SoknadData;
  lagreUfullstendig: () => Promise<any>;
  lagreFullstendig: (_formValues: any, _dispatch: Dispatch, values: any) => Promise<any>;
}

const RegistrerPapirsoknadPanel: FunctionComponent<OwnProps> = ({
  fagsak,
  fagsakPersonnummer,
  kodeverk,
  readOnly,
  setSoknadData,
  soknadData,
  lagreUfullstendig,
  lagreFullstendig,
}) => (
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
      <ReduxWrapper formName="RegistrerPapirsoknadPanel">
        { /* @ts-ignore Fiks cannot be used as a JSX component */ }
        <SoknadTypePickerForm
          setSoknadData={setSoknadData}
          soknadData={soknadData}
          fagsakYtelseType={fagsak.fagsakYtelseType}
          alleKodeverk={kodeverk}
        />
      </ReduxWrapper>
      {soknadData && soknadData.getFagsakYtelseType() === fagsakYtelseType.ENGANGSSTONAD && (
      <EngangsstonadPapirsoknadIndex
        onSubmitUfullstendigsoknad={lagreUfullstendig}
        onSubmit={lagreFullstendig}
        readOnly={readOnly}
        soknadData={soknadData}
        alleKodeverk={kodeverk}
        fagsakPersonnummer={fagsakPersonnummer}
      />
      )}
      {soknadData && soknadData.getFagsakYtelseType() === fagsakYtelseType.FORELDREPENGER && (
      <ForeldrepengerPapirsoknadIndex
        onSubmitUfullstendigsoknad={lagreUfullstendig}
        onSubmit={lagreFullstendig}
        readOnly={readOnly}
        soknadData={soknadData}
        alleKodeverk={kodeverk}
        fagsakPersonnummer={fagsakPersonnummer}
      />
      )}
      {soknadData && soknadData.getFagsakYtelseType() === fagsakYtelseType.SVANGERSKAPSPENGER && (
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
);

export default RegistrerPapirsoknadPanel;
