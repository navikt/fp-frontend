import { FormattedMessage } from 'react-intl';

import { BodyShort, Heading, Label, VStack } from '@navikt/ds-react';
import { EditedIcon } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type {
  Aksjonspunkt,
  ArbeidsgiverOpplysningerPerId,
  BeregningsresultatDagytelse,
  FamilieHendelseSamling,
  Feriepengegrunnlag,
  Kjønnkode,
  Personoversikt,
  Soknad,
} from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { FeriepengerIndex } from './feriepenger/FeriepengerIndex';
import { TilkjentYtelse } from './TilkjentYtelse';

const finnTilbaketrekkAksjonspunktBegrunnelse = (alleAksjonspunkter: Aksjonspunkt[]): string | undefined =>
  alleAksjonspunkter.find(ap => ap.definisjon === AksjonspunktKode.VURDER_TILBAKETREKK)?.begrunnelse ?? undefined;

interface Props {
  beregningresultat: BeregningsresultatDagytelse;
  familiehendelse: FamilieHendelseSamling;
  personoversikt: Personoversikt;
  soknad: Soknad;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  feriepengegrunnlag?: Feriepengegrunnlag;
}

export const TilkjentYtelsePanel = ({
  beregningresultat,
  arbeidsgiverOpplysningerPerId,
  feriepengegrunnlag,
  familiehendelse,
  personoversikt,
  soknad,
}: Props) => {
  const { alleKodeverk, fagsak, aksjonspunkterForPanel } = usePanelDataContext();

  // Utgått aksjonspunkt, viser kun begrunnelse hvis det er løst tidligere
  const vurderTilbaketrekkAPBegrunnelse = finnTilbaketrekkAksjonspunktBegrunnelse(aksjonspunkterForPanel);

  const soknadMottattDato = soknad.søknadsfrist?.mottattDato ? soknad.søknadsfrist?.mottattDato : soknad.mottattDato;
  return (
    <VStack gap="4">
      <Heading size="small">
        <FormattedMessage id="TilkjentYtelse.Title" />
      </Heading>
      {beregningresultat && (
        <TilkjentYtelse
          beregningsresultatPeriode={beregningresultat.perioder}
          soknadDate={soknadMottattDato}
          familieHendelseSamling={familiehendelse}
          hovedsokerKjonnKode={personoversikt?.bruker ? (personoversikt.bruker.kjønn as Kjønnkode) : undefined}
          alleKodeverk={alleKodeverk}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          fagsak={fagsak}
        />
      )}
      {feriepengegrunnlag && (
        <FeriepengerIndex
          feriepengegrunnlag={feriepengegrunnlag}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          alleKodeverk={alleKodeverk}
        />
      )}
      {vurderTilbaketrekkAPBegrunnelse && (
        <VStack gap="2">
          <Label>
            <FormattedMessage id="TilkjentYtelse.VurderTilbaketrekk.Beskrivelse" />
          </Label>
          <BodyShort>
            {vurderTilbaketrekkAPBegrunnelse} <EditedIcon />
          </BodyShort>
        </VStack>
      )}
    </VStack>
  );
};
