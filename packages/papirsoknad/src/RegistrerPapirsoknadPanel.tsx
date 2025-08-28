import { useState } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import { FagsakYtelseType } from '@navikt/fp-kodeverk';
import { SoknadData } from '@navikt/fp-papirsoknad-ui-komponenter';
import type { AlleKodeverk, Behandling, Fagsak } from '@navikt/fp-types';

import type { EngangsstønadValues } from './engangsstonad/components/EngangsstonadForm';
import { EngangsstonadPapirsoknadIndex } from './engangsstonad/EngangsstonadPapirsoknadIndex';
import type { ForeldrepengerEndringssøknadValues } from './foreldrepenger/components/ForeldrepengerEndringssøknadForm';
import type { ForeldrepengerValues } from './foreldrepenger/components/ForeldrepengerForm';
import { ForeldrepengerPapirsoknadIndex } from './foreldrepenger/ForeldrepengerPapirsoknadIndex';
import { SoknadTypePickerForm } from './SoknadTypePickerForm';
import type { SvangerskapsValues } from './svangerskapspenger/components/SvangerskapspengerForm';
import { SvangerskapspengerPapirsoknadIndex } from './svangerskapspenger/SvangerskapspengerPapirsoknadIndex';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  fagsak: Fagsak;
  kodeverk: AlleKodeverk;
  readOnly: boolean;
  lagrePapirsøknad: (
    fagsakYtelseType: string,
    familieHendelseType: string,
    foreldreType: string,
    formValues?: EngangsstønadValues | ForeldrepengerValues | ForeldrepengerEndringssøknadValues | SvangerskapsValues,
  ) => Promise<Behandling>;
  erEndringssøknad: boolean;
}

export const RegistrerPapirsoknadPanel = ({
  fagsak,
  kodeverk,
  readOnly,
  lagrePapirsøknad,
  erEndringssøknad,
}: Props) => {
  const [soknadData, setSoknadData] = useState<SoknadData>();

  const lagreFullstendigSøknad = (
    formValues: EngangsstønadValues | ForeldrepengerValues | ForeldrepengerEndringssøknadValues | SvangerskapsValues,
  ) => {
    if (soknadData) {
      lagrePapirsøknad(
        soknadData.fagsakYtelseType,
        soknadData.familieHendelseType,
        soknadData.foreldreType,
        formValues,
      );
    }
    return Promise.resolve();
  };

  const lagreUfullstendigSøknadOgAvslutt = () => {
    if (soknadData) {
      lagrePapirsøknad(soknadData.fagsakYtelseType, soknadData.familieHendelseType, soknadData.foreldreType);
    }
    return Promise.resolve();
  };

  return (
    <RawIntlProvider value={intl}>
      <VStack gap="space-16" padding="4">
        <Heading size="small" level="2">
          {erEndringssøknad ? (
            <FormattedMessage id="Registrering.RegistrereEndringssoknad" />
          ) : (
            <FormattedMessage id="Registrering.RegistrereSoknad" />
          )}
        </Heading>
        {!readOnly && (
          <AksjonspunktHelpTextHTML>
            <FormattedMessage id="Registrering.RegistrerAlleOpplysninger" />
          </AksjonspunktHelpTextHTML>
        )}
        <SoknadTypePickerForm
          setSoknadData={setSoknadData}
          fagsakYtelseType={fagsak.fagsakYtelseType}
          alleKodeverk={kodeverk}
        />
        {soknadData && soknadData.getFagsakYtelseType() === 'ES' && (
          <EngangsstonadPapirsoknadIndex
            onSubmitUfullstendigsoknad={lagreUfullstendigSøknadOgAvslutt}
            onSubmit={lagreFullstendigSøknad}
            readOnly={readOnly}
            soknadData={soknadData}
            alleKodeverk={kodeverk}
          />
        )}
        {soknadData && soknadData.getFagsakYtelseType() === 'FP' && (
          <ForeldrepengerPapirsoknadIndex
            onSubmitUfullstendigsoknad={lagreUfullstendigSøknadOgAvslutt}
            onSubmit={lagreFullstendigSøknad}
            readOnly={readOnly}
            soknadData={soknadData}
            alleKodeverk={kodeverk}
            fagsakPersonnummer={fagsak.bruker.fødselsnummer}
            erEndringssøknad={erEndringssøknad}
          />
        )}
        {soknadData && soknadData.getFagsakYtelseType() === 'SVP' && (
          <SvangerskapspengerPapirsoknadIndex
            onSubmitUfullstendigsoknad={lagreUfullstendigSøknadOgAvslutt}
            onSubmit={lagreFullstendigSøknad}
            readOnly={readOnly}
            soknadData={soknadData}
            alleKodeverk={kodeverk}
          />
        )}
      </VStack>
    </RawIntlProvider>
  );
};
