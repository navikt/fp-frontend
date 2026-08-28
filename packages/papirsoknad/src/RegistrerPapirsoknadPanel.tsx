import { useState } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { SoknadData } from '@navikt/fp-papirsoknad-ui-komponenter';
import type { AlleKodeverk, BehandlingFpSak, Fagsak } from '@navikt/fp-types';

import { EngangsstonadForm } from './engangsstonad/components/EngangsstonadForm';
import { ForeldrepengerPapirsoknadIndex } from './foreldrepenger/ForeldrepengerPapirsoknadIndex';
import type { PapirsøknadAp } from './PapirsøknadAp';
import type { PapirsøknadMellomlagring } from './PapirsøknadMellomlagring';
import { SoknadTypePickerForm } from './SoknadTypePickerForm';
import { SvangerskapspengerForm } from './svangerskapspenger/components/SvangerskapspengerForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  fagsak: Fagsak;
  kodeverk: AlleKodeverk;
  readOnly: boolean;
  lagrePapirsøknad: (transformedValues: PapirsøknadAp) => Promise<BehandlingFpSak>;
  lagreUfullstendigPapirsøknad: (transformedValues: PapirsøknadAp) => Promise<BehandlingFpSak>;
  aksjonspunktKode:
    | AksjonspunktKode.REGISTRER_PAPIRSØKNAD_ENGANGSSTØNAD
    | AksjonspunktKode.REGISTRER_PAPIRSØKNAD_FORELDREPENGER
    | AksjonspunktKode.REGISTRER_PAPIRSØKNAD_SVANGERSKAPSPENGER
    | AksjonspunktKode.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER;
  mellomlagretData?: PapirsøknadMellomlagring;
  onMellomlagre?: (values: PapirsøknadMellomlagring) => void;
}

export const RegistrerPapirsoknadPanel = ({
  fagsak,
  aksjonspunktKode,
  kodeverk,
  readOnly,
  lagrePapirsøknad,
  lagreUfullstendigPapirsøknad,
  mellomlagretData,
  onMellomlagre,
}: Props) => {
  const erEndringssøknad = aksjonspunktKode === AksjonspunktKode.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER;
  const [soknadData, setSoknadData] = useState<SoknadData | undefined>(() => {
    if (!mellomlagretData) {
      return;
    }
    return new SoknadData(
      mellomlagretData.fagsakYtelseType,
      mellomlagretData.familieHendelseType,
      mellomlagretData.foreldreType ?? 'MOR',
    );
  });

  const lagreFullstendigSøknad = (transformedValues: PapirsøknadAp) => {
    if (soknadData) {
      void lagrePapirsøknad(transformedValues);
    }
    return Promise.resolve();
  };

  const lagreUfullstendigSøknadOgAvslutt = () => {
    if (soknadData) {
      void lagreUfullstendigPapirsøknad({
        '@type': aksjonspunktKode,
        tema: soknadData.familieHendelseType,
        søknadstype: soknadData.fagsakYtelseType,
        søker: soknadData.foreldreType,
        ufullstendigSøknad: true,
      });
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
          <EngangsstonadForm
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
          <SvangerskapspengerForm
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
