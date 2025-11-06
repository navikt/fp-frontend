import { FormattedMessage } from 'react-intl';

import { BodyShort, Heading, HStack, Label, VStack } from '@navikt/ds-react';
import { EditedIcon } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type {
  Aksjonspunkt,
  ArbeidsgiverOpplysningerPerId,
  BeregningsresultatDagytelse,
  FamilieHendelse,
  Feriepengegrunnlag,
  Personoversikt,
  Soknad,
} from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { FeriepengerPanel } from './feriepenger/FeriepengerPanel';
import { TilkjentYtelse } from './TilkjentYtelse';

interface Props {
  beregningresultat: BeregningsresultatDagytelse;
  familiehendelse: FamilieHendelse;
  personoversikt: Personoversikt;
  søknad: Soknad;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  feriepengegrunnlag?: Feriepengegrunnlag;
}

export const TilkjentYtelsePanel = ({
  beregningresultat,
  arbeidsgiverOpplysningerPerId,
  feriepengegrunnlag,
  familiehendelse,
  personoversikt,
  søknad,
}: Props) => {
  const { alleKodeverk, fagsak, aksjonspunkterForPanel } = usePanelDataContext();

  // Utgått aksjonspunkt, viser kun begrunnelse hvis det er løst tidligere
  const vurderTilbaketrekkAPBegrunnelse = finnTilbaketrekkAksjonspunktBegrunnelse(aksjonspunkterForPanel);

  const søknadMottattDato = søknad.søknadsfrist.gjeldendeMottattDato ?? søknad.mottattDato;

  return (
    <VStack gap="space-16">
      <Heading size="small" level="2">
        <FormattedMessage id="TilkjentYtelse.Title" />
      </Heading>
      <TilkjentYtelse
        beregningsresultatPeriode={beregningresultat.perioder}
        søknadsdato={søknadMottattDato}
        familieHendelse={familiehendelse}
        hovedsøkerKjønnKode={personoversikt.bruker.kjønn}
        alleKodeverk={alleKodeverk}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        fagsak={fagsak}
      />
      {feriepengegrunnlag && (
        <FeriepengerPanel
          feriepengegrunnlag={feriepengegrunnlag}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          alleKodeverk={alleKodeverk}
        />
      )}
      {vurderTilbaketrekkAPBegrunnelse && (
        <VStack gap="space-8">
          <Label>
            <FormattedMessage id="TilkjentYtelse.VurderTilbaketrekk.Beskrivelse" />
          </Label>
          <HStack gap="space-8">
            <BodyShort>{vurderTilbaketrekkAPBegrunnelse}</BodyShort>
            <EditedIcon />
          </HStack>
        </VStack>
      )}
    </VStack>
  );
};

const finnTilbaketrekkAksjonspunktBegrunnelse = (alleAksjonspunkter: Aksjonspunkt[]): string | undefined =>
  alleAksjonspunkter.find(ap => ap.definisjon === AksjonspunktKode.UTGÅTT_5090)?.begrunnelse ?? undefined;
