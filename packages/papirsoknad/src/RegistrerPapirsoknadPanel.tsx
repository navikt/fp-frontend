import React, { useCallback, useState } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { Heading, Panel } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import { FagsakYtelseType } from '@navikt/fp-kodeverk';
import { SoknadData } from '@navikt/fp-papirsoknad-ui-komponenter';
import { AlleKodeverk, Fagsak } from '@navikt/fp-types';

import { EngangsstonadPapirsoknadIndex } from './engangsstonad/EngangsstonadPapirsoknadIndex';
import { ForeldrepengerPapirsoknadIndex } from './foreldrepenger/ForeldrepengerPapirsoknadIndex';
import SoknadTypePickerForm from './SoknadTypePickerForm';
import { SvangerskapspengerPapirsoknadIndex } from './svangerskapspenger/SvangerskapspengerPapirsoknadIndex';

import styles from './registrerPapirsoknadPanel.module.css';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  fagsak: Fagsak;
  kodeverk: AlleKodeverk;
  readOnly: boolean;
  lagreUfullstendig: (fagsakYtelseType: string, familieHendelseType: string, foreldreType: string) => Promise<any>;
  lagreFullstendig: (
    formValues: any,
    fagsakYtelseType: string,
    familieHendelseType: string,
    foreldreType: string,
  ) => Promise<any>;
  erEndringssøknad: boolean;
}

export const RegistrerPapirsoknadPanel = ({
  fagsak,
  kodeverk,
  readOnly,
  lagreUfullstendig,
  lagreFullstendig,
  erEndringssøknad,
}: Props) => {
  const [soknadData, setSoknadData] = useState<SoknadData>();

  const lagre = useCallback(
    (formValues: any) => {
      if (soknadData) {
        lagreFullstendig(
          formValues,
          soknadData.fagsakYtelseType,
          soknadData.familieHendelseType,
          soknadData.foreldreType,
        );
      }
      return Promise.resolve();
    },
    [soknadData],
  );
  const lagreOgAvslutt = useCallback(() => {
    if (soknadData) {
      lagreUfullstendig(soknadData.fagsakYtelseType, soknadData.familieHendelseType, soknadData.foreldreType);
    }
    return Promise.resolve();
  }, [soknadData]);

  return (
    <RawIntlProvider value={intl}>
      <Panel className={styles.panel}>
        <Heading size="small">
          <FormattedMessage id="Registrering.RegistrereSoknad" />
        </Heading>
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
          />
        )}
        {soknadData && soknadData.getFagsakYtelseType() === FagsakYtelseType.FORELDREPENGER && (
          <ForeldrepengerPapirsoknadIndex
            onSubmitUfullstendigsoknad={lagreOgAvslutt}
            onSubmit={lagre}
            readOnly={readOnly}
            soknadData={soknadData}
            alleKodeverk={kodeverk}
            fagsakPersonnummer={fagsak.bruker.fødselsnummer}
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
      </Panel>
    </RawIntlProvider>
  );
};
