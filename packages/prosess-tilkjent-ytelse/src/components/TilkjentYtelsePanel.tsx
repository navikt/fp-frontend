import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import moment from 'moment/moment';
import { createSelector } from 'reselect';
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
  FamilieHendelse,
  Feriepengegrunnlag,
  KodeverkMedNavn,
  Personoversikt,
  Soknad,
  Kjønnkode,
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

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  beregningresultat: BeregningsresultatFp;
  gjeldendeFamiliehendelse: FamilieHendelse;
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

interface MappedOwnProps {
  hovedsokerKjonn?: Kjønnkode;
  soknadDato: string;
  familiehendelseDato: Date;
  vurderTilbaketrekkAP?: Aksjonspunkt;
  isSoknadSvangerskapspenger: boolean;
}

export const TilkjentYtelsePanelImpl: FunctionComponent<PureOwnProps & MappedOwnProps> = ({
  beregningresultat,
  hovedsokerKjonn,
  soknadDato,
  familiehendelseDato,
  vurderTilbaketrekkAP,
  readOnly,
  submitCallback,
  readOnlySubmitButton,
  isSoknadSvangerskapspenger,
  alleKodeverk,
  behandlingId,
  behandlingVersjon,
  arbeidsgiverOpplysningerPerId,
  feriepengegrunnlag,
}) => (
  <>
    <Undertittel>
      <FormattedMessage id="TilkjentYtelse.Title" />
    </Undertittel>
    {beregningresultat
      && (
      <TilkjentYtelse
        items={formatPerioder(beregningresultat.perioder)}
        groups={groups}
        soknadDate={soknadDato}
        familiehendelseDate={familiehendelseDato}
        hovedsokerKjonnKode={hovedsokerKjonn}
        isSoknadSvangerskapspenger={isSoknadSvangerskapspenger}
        alleKodeverk={alleKodeverk}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
      )}
    { feriepengegrunnlag
    && (
      <FeriepengerIndex feriepengegrunnlag={feriepengegrunnlag} arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId} alleKodeverk={alleKodeverk} />
    )}
    { vurderTilbaketrekkAP
    && (
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

const parseDateString = (dateString: string): Date => moment(dateString, ISO_DATE_FORMAT).toDate();

const getFamiliehendelsedatoFraSoknad = (soknad: Soknad): string => {
  if (soknad.fodselsdatoer && Object.keys(soknad.fodselsdatoer).length > 0) {
    return Object.values(soknad.fodselsdatoer)[0];
  }
  if (soknad.termindato) {
    return soknad.termindato;
  }
  if (soknad.adopsjonFodelsedatoer && Object.keys(soknad.adopsjonFodelsedatoer).length > 0) {
    return Object.values(soknad.adopsjonFodelsedatoer)[0];
  }
  return undefined;
};

const getCurrentFamiliehendelseDato = (
  soknadsType: string,
  omsorgsOvertagelseDato: string,
  familiehendelsedatoFraSoknad?: string,
  endredFodselsDato?: string,
  endredomsorgsOvertagelseDato?: string,
): Date => {
  if (soknadsType === soknadType.FODSEL) {
    return endredFodselsDato ? parseDateString(endredFodselsDato) : parseDateString(familiehendelsedatoFraSoknad);
  }
  return endredomsorgsOvertagelseDato ? parseDateString(endredomsorgsOvertagelseDato) : parseDateString(omsorgsOvertagelseDato);
};

const finnTilbaketrekkAksjonspunkt = createSelector([
  (_state, ownProps: PureOwnProps) => ownProps.aksjonspunkter], (alleAksjonspunkter): Aksjonspunkt | undefined => {
  if (alleAksjonspunkter) {
    return alleAksjonspunkter.find((ap) => ap.definisjon && ap.definisjon.kode === aksjonspunktCodes.VURDER_TILBAKETREKK);
  }
  return undefined;
});

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => {
  const person = ownProps.personoversikt;
  const familiehendelse = ownProps.gjeldendeFamiliehendelse;
  const { soknad } = ownProps;
  const isSVP = ownProps.fagsakYtelseTypeKode === fagsakYtelseType.SVANGERSKAPSPENGER;
  return {
    hovedsokerKjonn: person?.bruker ? person.bruker.kjønn.kode as Kjønnkode : undefined, // nosonar
    soknadDato: soknad.mottattDato,
    isSoknadSvangerskapspenger: isSVP,
    familiehendelseDato: getCurrentFamiliehendelseDato(
      soknad.soknadType.kode,
      soknad.omsorgsovertakelseDato,
      getFamiliehendelsedatoFraSoknad(soknad),
      familiehendelse.avklartBarn && familiehendelse.avklartBarn.length > 0 ? familiehendelse.avklartBarn[0].fodselsdato : undefined,
      familiehendelse.omsorgsovertakelseDato,
    ),
    vurderTilbaketrekkAP: finnTilbaketrekkAksjonspunkt(state, ownProps),
  };
};

export default connect(mapStateToProps)(TilkjentYtelsePanelImpl);
