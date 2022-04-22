import React, { FunctionComponent, useMemo } from 'react';
import moment from 'moment/moment';
import { FormattedMessage } from 'react-intl';
import { Undertittel } from 'nav-frontend-typografi';

import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import soknadType from '@fpsak-frontend/kodeverk/src/soknadType';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
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
} from '@fpsak-frontend/types';
import { VurderTilbaketrekkAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import Tilbaketrekkpanel, { FormValues } from './tilbaketrekk/Tilbaketrekkpanel';
import FeriepengerIndex from './feriepenger/FeriepengerIndex';
import TilkjentYtelse, { PeriodeMedId } from './TilkjentYtelse';

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
  ? alleAksjonspunkter.find((ap) => ap.definisjon === aksjonspunktCodes.VURDER_TILBAKETREKK)
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
  const familiehendelseDato = useMemo(() => getFamilieHendelseDato(familieHendelseSamling), [familieHendelseSamling]);
  const vurderTilbaketrekkAP = useMemo(() => finnTilbaketrekkAksjonspunkt(aksjonspunkter), [aksjonspunkter]);
  return (
    <>
      <Undertittel>
        <FormattedMessage id="TilkjentYtelse.Title" />
      </Undertittel>
      {beregningresultat && (
        <TilkjentYtelse
          items={formatPerioder(beregningresultat.perioder)}
          groups={groups}
          soknadDate={soknad.mottattDato}
          familiehendelseDate={familiehendelseDato}
          hovedsokerKjonnKode={personoversikt?.bruker ? personoversikt.bruker.kjønn as Kjønnkode : undefined}
          isSoknadSvangerskapspenger={fagsakYtelseTypeKode === fagsakYtelseType.SVANGERSKAPSPENGER}
          alleKodeverk={alleKodeverk}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        />
      )}
      {feriepengegrunnlag && (
        <FeriepengerIndex
          feriepengegrunnlag={feriepengegrunnlag}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          alleKodeverk={alleKodeverk}
        />
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
