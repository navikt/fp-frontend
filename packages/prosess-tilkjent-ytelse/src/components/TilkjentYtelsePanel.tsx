import React, { FunctionComponent, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort, Heading, Label } from '@navikt/ds-react';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import {
  Aksjonspunkt,
  ArbeidsgiverOpplysningerPerId,
  BeregningsresultatDagytelse,
  Feriepengegrunnlag,
  AlleKodeverk,
  Personoversikt,
  Soknad,
  Kjønnkode,
  FamilieHendelseSamling,
  Fagsak,
} from '@navikt/fp-types';

import { EditedIcon, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import FeriepengerIndex from './feriepenger/FeriepengerIndex';
import TilkjentYtelse from './TilkjentYtelse';
import styles from './tilkjentYtelse.module.css';

const finnTilbaketrekkAksjonspunktBegrunnelse = (alleAksjonspunkter: Aksjonspunkt[]): string | undefined =>
  alleAksjonspunkter
    ? alleAksjonspunkter.find(ap => ap.definisjon === AksjonspunktCode.VURDER_TILBAKETREKK)?.begrunnelse
    : undefined;

interface PureOwnProps {
  beregningresultat: BeregningsresultatDagytelse;
  familieHendelseSamling: FamilieHendelseSamling;
  personoversikt: Personoversikt;
  soknad: Soknad;
  aksjonspunkter: Aksjonspunkt[];
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  feriepengegrunnlag?: Feriepengegrunnlag;
  fagsak: Fagsak;
}

const TilkjentYtelsePanel: FunctionComponent<PureOwnProps> = ({
  beregningresultat,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  feriepengegrunnlag,
  familieHendelseSamling,
  personoversikt,
  soknad,
  aksjonspunkter,
  fagsak,
}) => {
  // Utgått aksjonspunkt, viser kun begrunnelse hvis det er løst tidligere
  const vurderTilbaketrekkAPBegrunnelse = useMemo(
    () => finnTilbaketrekkAksjonspunktBegrunnelse(aksjonspunkter),
    [aksjonspunkter],
  );

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
          familieHendelseSamling={familieHendelseSamling}
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

export default TilkjentYtelsePanel;
