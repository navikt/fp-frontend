import { FormattedMessage } from 'react-intl';

import { BodyShort, Heading, Label } from '@navikt/ds-react';
import { EditedIcon, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  Aksjonspunkt,
  ArbeidsgiverOpplysningerPerId,
  BeregningsresultatDagytelse,
  FamilieHendelseSamling,
  Feriepengegrunnlag,
  Kjønnkode,
  Personoversikt,
  Soknad,
} from '@navikt/fp-types';
import { usePanelContext } from '@navikt/fp-utils';

import FeriepengerIndex from './feriepenger/FeriepengerIndex';
import TilkjentYtelse from './TilkjentYtelse';

import styles from './tilkjentYtelse.module.css';

const finnTilbaketrekkAksjonspunktBegrunnelse = (alleAksjonspunkter: Aksjonspunkt[]): string | undefined =>
  alleAksjonspunkter
    ? alleAksjonspunkter.find(ap => ap.definisjon === AksjonspunktKode.VURDER_TILBAKETREKK)?.begrunnelse
    : undefined;

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
  const { alleKodeverk, fagsak, aksjonspunkterForPanel } = usePanelContext();

  // Utgått aksjonspunkt, viser kun begrunnelse hvis det er løst tidligere
  const vurderTilbaketrekkAPBegrunnelse = finnTilbaketrekkAksjonspunktBegrunnelse(aksjonspunkterForPanel);

  const soknadMottattDato = soknad.søknadsfrist?.mottattDato ? soknad.søknadsfrist?.mottattDato : soknad.mottattDato;
  return (
    <>
      <Heading size="small">
        <FormattedMessage id="TilkjentYtelse.Title" />
      </Heading>
      <VerticalSpacer thirtyTwoPx />
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
        <>
          <VerticalSpacer thirtyTwoPx />
          <FeriepengerIndex
            feriepengegrunnlag={feriepengegrunnlag}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            alleKodeverk={alleKodeverk}
          />
          <VerticalSpacer thirtyTwoPx />
        </>
      )}
      {vurderTilbaketrekkAPBegrunnelse && (
        <>
          <Label>
            <FormattedMessage id="TilkjentYtelse.VurderTilbaketrekk.Beskrivelse" />
          </Label>
          <VerticalSpacer sixteenPx />
          <BodyShort className={styles.readOnlyBlokk}>
            {vurderTilbaketrekkAPBegrunnelse} <EditedIcon />
          </BodyShort>
        </>
      )}
    </>
  );
};
