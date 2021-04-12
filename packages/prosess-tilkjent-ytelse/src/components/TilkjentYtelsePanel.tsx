import React, { FunctionComponent, useMemo } from 'react';
import moment from 'moment/moment';
import { FormattedMessage } from 'react-intl';
import { Undertittel } from 'nav-frontend-typografi';

import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import soknadType from '@fpsak-frontend/kodeverk/src/soknadType';
import { ISO_DATE_FORMAT } from '@fpsak-frontend/utils';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  Aksjonspunkt,
  ArbeidsgiverOpplysningerPerId,
  BeregningsresultatFp,
  BeregningsresultatPeriode,
  Feriepengegrunnlag,
  KodeverkMedNavn,
  Personoversikt,
  Soknad,
  Kjønnkode,
  FamilieHendelseSamling,
} from '@fpsak-frontend/types';

import Tilbaketrekkpanel from './tilbaketrekk/Tilbaketrekkpanel';
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
  if (familieHendelse.soknadType.kode === soknadType.FODSEL) {
    if (familieHendelse.avklartBarn && familieHendelse.avklartBarn.length > 0) {
      return parseDateString(familieHendelse.avklartBarn[0].fodselsdato);
    }
    return parseDateString(familieHendelse.termindato);
  }

  return parseDateString(familieHendelse.omsorgsovertakelseDato || familieHendelse.adopsjonFodelsedatoer[0]);
};

const finnTilbaketrekkAksjonspunkt = (alleAksjonspunkter: Aksjonspunkt[]): Aksjonspunkt | undefined => (alleAksjonspunkter
  ? alleAksjonspunkter.find((ap) => ap.definisjon?.kode === aksjonspunktCodes.VURDER_TILBAKETREKK)
  : undefined);

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  beregningresultat: BeregningsresultatFp;
  familieHendelseSamling: FamilieHendelseSamling;
  personoversikt: Personoversikt;
  soknad: Soknad;
  fagsakYtelseTypeKode: string;
  aksjonspunkter: Aksjonspunkt[];
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  readOnly: boolean;
  submitCallback: (data: any) => Promise<any>;
  readOnlySubmitButton: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  feriepengegrunnlag?: Feriepengegrunnlag;
}

const TilkjentYtelsePanel: FunctionComponent<PureOwnProps> = ({
  beregningresultat,
  readOnly,
  submitCallback,
  readOnlySubmitButton,
  alleKodeverk,
  behandlingId,
  behandlingVersjon,
  arbeidsgiverOpplysningerPerId,
  feriepengegrunnlag,
  familieHendelseSamling,
  fagsakYtelseTypeKode,
  personoversikt,
  soknad,
  aksjonspunkter,
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
          hovedsokerKjonnKode={personoversikt?.bruker ? personoversikt.bruker.kjønn.kode as Kjønnkode : undefined}
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
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
          readOnly={readOnly}
          vurderTilbaketrekkAP={vurderTilbaketrekkAP}
          submitCallback={submitCallback}
          readOnlySubmitButton={readOnlySubmitButton}
          beregningsresultat={beregningresultat}
        />
      )}
    </>
  );
};

export default TilkjentYtelsePanel;
