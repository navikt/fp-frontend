import React, { FunctionComponent, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { Heading } from '@navikt/ds-react';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import {
  Aksjonspunkt,
  ArbeidsgiverOpplysningerPerId,
  BeregningsresultatFp,
  Feriepengegrunnlag,
  AlleKodeverk,
  Personoversikt,
  Soknad,
  Kjønnkode,
  FamilieHendelseSamling,
  Fagsak,
} from '@navikt/fp-types';
import { VurderTilbaketrekkAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import Tilbaketrekkpanel, { FormValues } from './tilbaketrekk/Tilbaketrekkpanel';
import FeriepengerIndex from './feriepenger/FeriepengerIndex';
import TilkjentYtelse from './TilkjentYtelse';

const finnTilbaketrekkAksjonspunkt = (alleAksjonspunkter: Aksjonspunkt[]): Aksjonspunkt | undefined =>
  alleAksjonspunkter
    ? alleAksjonspunkter.find(ap => ap.definisjon === AksjonspunktCode.VURDER_TILBAKETREKK)
    : undefined;

interface PureOwnProps {
  beregningresultat: BeregningsresultatFp;
  familieHendelseSamling: FamilieHendelseSamling;
  personoversikt: Personoversikt;
  soknad: Soknad;
  aksjonspunkter: Aksjonspunkt[];
  alleKodeverk: AlleKodeverk;
  readOnly: boolean;
  submitCallback: (data: VurderTilbaketrekkAp) => Promise<void>;
  readOnlySubmitButton: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  feriepengegrunnlag?: Feriepengegrunnlag;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
  fagsak: Fagsak;
}

const TilkjentYtelsePanel: FunctionComponent<PureOwnProps> = ({
  beregningresultat,
  readOnly,
  submitCallback,
  readOnlySubmitButton,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  feriepengegrunnlag,
  familieHendelseSamling,
  personoversikt,
  soknad,
  aksjonspunkter,
  formData,
  setFormData,
  fagsak,
}) => {
  const vurderTilbaketrekkAP = useMemo(() => finnTilbaketrekkAksjonspunkt(aksjonspunkter), [aksjonspunkter]);
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
      {vurderTilbaketrekkAP && (
        <>
          <VerticalSpacer sixteenPx />
          <Tilbaketrekkpanel
            readOnly={readOnly}
            vurderTilbaketrekkAP={vurderTilbaketrekkAP}
            submitCallback={submitCallback}
            readOnlySubmitButton={readOnlySubmitButton}
            beregningsresultat={beregningresultat}
            formData={formData}
            setFormData={setFormData}
          />
        </>
      )}
    </>
  );
};

export default TilkjentYtelsePanel;
