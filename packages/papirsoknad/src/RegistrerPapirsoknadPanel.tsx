import { useState } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import { SoknadData } from '@navikt/fp-papirsoknad-ui-komponenter';
import type {
  AlleKodeverk,
  BehandlingFpSak,
  Fagsak,
  FagsakYtelseType,
  FamilieHendelseType,
  ForeldreType,
} from '@navikt/fp-types';

import type { EngangsstønadValues } from './engangsstonad/components/EngangsstonadForm';
import { EngangsstonadPapirsoknadIndex } from './engangsstonad/EngangsstonadPapirsoknadIndex';
import type { ForeldrepengerEndringssøknadValues } from './foreldrepenger/components/ForeldrepengerEndringssøknadForm';
import type { ForeldrepengerValues } from './foreldrepenger/components/ForeldrepengerForm';
import { ForeldrepengerPapirsoknadIndex } from './foreldrepenger/ForeldrepengerPapirsoknadIndex';
import type { PapirsøknadMellomlagring } from './PapirsøknadMellomlagring';
import { SoknadTypePickerForm } from './SoknadTypePickerForm';
import type { SvangerskapsValues } from './svangerskapspenger/components/SvangerskapspengerForm';
import { SvangerskapspengerPapirsoknadIndex } from './svangerskapspenger/SvangerskapspengerPapirsoknadIndex';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

type AllFormValues =
  | EngangsstønadValues
  | ForeldrepengerValues
  | ForeldrepengerEndringssøknadValues
  | SvangerskapsValues;

interface Props {
  fagsak: Fagsak;
  kodeverk: AlleKodeverk;
  readOnly: boolean;
  lagrePapirsøknad: (
    fagsakYtelseType: FagsakYtelseType,
    familieHendelseType: FamilieHendelseType,
    foreldreType: ForeldreType,
    formValues?: AllFormValues,
  ) => Promise<BehandlingFpSak>;
  erEndringssøknad: boolean;
  mellomlagretData?: PapirsøknadMellomlagring;
  onMellomlagre?: (values: PapirsøknadMellomlagring) => void;
}

export const RegistrerPapirsoknadPanel = ({
  fagsak,
  kodeverk,
  readOnly,
  lagrePapirsøknad,
  erEndringssøknad,
  mellomlagretData,
  onMellomlagre,
}: Props) => {
  const [soknadData, setSoknadData] = useState<SoknadData | undefined>(() => {
    if (!mellomlagretData) {
      return undefined;
    }
    return new SoknadData(
      mellomlagretData.fagsakYtelseType,
      mellomlagretData.familieHendelseType,
      mellomlagretData.foreldreType ?? 'MOR',
    );
  });

  const lagreFullstendigSøknad = (
    formValues: EngangsstønadValues | ForeldrepengerValues | ForeldrepengerEndringssøknadValues | SvangerskapsValues,
  ) => {
    if (soknadData) {
      void lagrePapirsøknad(
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
      void lagrePapirsøknad(soknadData.fagsakYtelseType, soknadData.familieHendelseType, soknadData.foreldreType);
    }
    return Promise.resolve();
  };

  const mellomlagreWrapped =
    onMellomlagre && soknadData
      ? (formValues: Record<string, unknown>) => {
          const payload: PapirsøknadMellomlagring = {
            ...formValues,
            fagsakYtelseType: soknadData.fagsakYtelseType,
            familieHendelseType: soknadData.familieHendelseType,
            foreldreType: soknadData.foreldreType,
          };
          onMellomlagre(payload);
        }
      : undefined;

  return (
    <RawIntlProvider value={intl}>
      <VStack gap="space-16" padding="space-16">
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
          initialFamilieHendelseType={soknadData?.familieHendelseType}
          initialForeldreType={soknadData?.foreldreType}
        />
        {soknadData?.getFagsakYtelseType() === 'ES' && (
          <EngangsstonadPapirsoknadIndex
            onSubmitUfullstendigsoknad={lagreUfullstendigSøknadOgAvslutt}
            onSubmit={lagreFullstendigSøknad}
            onMellomlagre={mellomlagreWrapped}
            mellomlagretData={mellomlagretData}
            readOnly={readOnly}
            soknadData={soknadData}
            alleKodeverk={kodeverk}
          />
        )}
        {soknadData?.getFagsakYtelseType() === 'FP' && (
          <ForeldrepengerPapirsoknadIndex
            onSubmitUfullstendigsoknad={lagreUfullstendigSøknadOgAvslutt}
            onSubmit={lagreFullstendigSøknad}
            onMellomlagre={mellomlagreWrapped}
            mellomlagretData={mellomlagretData}
            readOnly={readOnly}
            soknadData={soknadData}
            alleKodeverk={kodeverk}
            fagsakPersonnummer={fagsak.bruker.fødselsnummer}
            erEndringssøknad={erEndringssøknad}
          />
        )}
        {soknadData?.getFagsakYtelseType() === 'SVP' && (
          <SvangerskapspengerPapirsoknadIndex
            onSubmitUfullstendigsoknad={lagreUfullstendigSøknadOgAvslutt}
            onSubmit={lagreFullstendigSøknad}
            onMellomlagre={mellomlagreWrapped}
            mellomlagretData={mellomlagretData}
            readOnly={readOnly}
            soknadData={soknadData}
            alleKodeverk={kodeverk}
          />
        )}
      </VStack>
    </RawIntlProvider>
  );
};
