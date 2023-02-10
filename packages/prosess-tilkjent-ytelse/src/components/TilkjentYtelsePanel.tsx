import React, { FunctionComponent, useMemo } from 'react';
import moment from 'moment/moment';
import { FormattedMessage, useIntl } from 'react-intl';
import { Heading } from '@navikt/ds-react';

import { fagsakYtelseType, soknadType, AksjonspunktCode } from '@navikt/fp-kodeverk';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import {
  Aksjonspunkt,
  ArbeidsgiverOpplysningerPerId,
  BeregningsresultatFp,
  BeregningsresultatPeriode,
  Feriepengegrunnlag,
  AlleKodeverk,
  Personoversikt,
  Soknad,
  Kjønnkode,
  FamilieHendelseSamling,
} from '@navikt/fp-types';
import { VurderTilbaketrekkAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import Tilbaketrekkpanel, { FormValues } from './tilbaketrekk/Tilbaketrekkpanel';
import FeriepengerIndex from './feriepenger/FeriepengerIndex';
import TilkjentYtelse from './TilkjentYtelse';
import { PeriodeMedId } from './TilkjentYtelseTimelineData';

const formatPerioder = (perioder: BeregningsresultatPeriode[]): PeriodeMedId[] => perioder
  .filter((periode) => periode.andeler[0] && periode.dagsats)
  .map((periode, index: number) => ({
    ...periode,
    id: index,
  }));

const groups = [{ id: 1, content: '' }, { id: 2, content: '' }];

const parseDateString = (dateString: string): Date => moment(dateString, ISO_DATE_FORMAT).toDate();

const getFamilieHendelseDato = (familieHendelseSamling: FamilieHendelseSamling): Date => {
  const familieHendelse = familieHendelseSamling.gjeldende || familieHendelseSamling.oppgitt;
  if (familieHendelse.soknadType === soknadType.FODSEL) {
    if (familieHendelse.avklartBarn && familieHendelse.avklartBarn.length > 0) {
      return parseDateString(familieHendelse.avklartBarn[0].fodselsdato);
    }
    return parseDateString(familieHendelse.termindato);
  }

  return parseDateString(familieHendelse.omsorgsovertakelseDato || familieHendelse.adopsjonFodelsedatoer[0]);
};

const finnTilbaketrekkAksjonspunkt = (alleAksjonspunkter: Aksjonspunkt[]): Aksjonspunkt | undefined => (alleAksjonspunkter
  ? alleAksjonspunkter.find((ap) => ap.definisjon === AksjonspunktCode.VURDER_TILBAKETREKK)
  : undefined);

interface PureOwnProps {
  beregningresultat: BeregningsresultatFp;
  familieHendelseSamling: FamilieHendelseSamling;
  personoversikt: Personoversikt;
  soknad: Soknad;
  fagsakYtelseTypeKode: string;
  aksjonspunkter: Aksjonspunkt[];
  alleKodeverk: AlleKodeverk;
  readOnly: boolean;
  submitCallback: (data: VurderTilbaketrekkAp) => Promise<void>;
  readOnlySubmitButton: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  feriepengegrunnlag?: Feriepengegrunnlag;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
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
  fagsakYtelseTypeKode,
  personoversikt,
  soknad,
  aksjonspunkter,
  formData,
  setFormData,
}) => {
  const intl = useIntl();
  const familiehendelseDato = useMemo(() => getFamilieHendelseDato(familieHendelseSamling), [familieHendelseSamling]);
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
          intl={intl}
          items={formatPerioder(beregningresultat.perioder)}
          groups={groups}
          soknadDate={soknadMottattDato}
          familiehendelseDate={familiehendelseDato}
          hovedsokerKjonnKode={personoversikt?.bruker ? personoversikt.bruker.kjønn as Kjønnkode : undefined}
          isSoknadSvangerskapspenger={fagsakYtelseTypeKode === fagsakYtelseType.SVANGERSKAPSPENGER}
          alleKodeverk={alleKodeverk}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
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
        <Tilbaketrekkpanel
          readOnly={readOnly}
          vurderTilbaketrekkAP={vurderTilbaketrekkAP}
          submitCallback={submitCallback}
          readOnlySubmitButton={readOnlySubmitButton}
          beregningsresultat={beregningresultat}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </>
  );
};

export default TilkjentYtelsePanel;
