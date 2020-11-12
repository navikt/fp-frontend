import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';

import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { DDMMYYYY_DATE_FORMAT, getKodeverknavnFn } from '@fpsak-frontend/utils';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { Arbeidsforhold, KodeverkMedNavn } from '@fpsak-frontend/types';

import arbeidsforholdKilder from '../../kodeverk/arbeidsforholdKilder';

const utledPermisjonValues = (permisjon: any, getKodeverknavn: any) => {
  const kodeverknavn = getKodeverknavn(permisjon.type);
  const permisjonType = kodeverknavn !== undefined && kodeverknavn !== null ? kodeverknavn.toLowerCase() : '';
  return {
    permisjonFom: moment(permisjon.permisjonFom).format(DDMMYYYY_DATE_FORMAT),
    permisjonTom: permisjon.permisjonTom ? moment(permisjon.permisjonTom).format(DDMMYYYY_DATE_FORMAT) : '',
    permisjonsprosent: permisjon.permisjonsprosent,
    permisjonType,
  };
};

const harPermisjonOgIkkeMottattIM = (arbeidsforhold: any) => arbeidsforhold.permisjoner
    && arbeidsforhold.permisjoner.length === 1
    && (arbeidsforhold.mottattDatoInntektsmelding === undefined || arbeidsforhold.mottattDatoInntektsmelding === null);

const harPermisjonOgMottattIM = (arbeidsforhold: any) => arbeidsforhold.permisjoner
  && arbeidsforhold.permisjoner.length === 1
  && (arbeidsforhold.mottattDatoInntektsmelding !== undefined && arbeidsforhold.mottattDatoInntektsmelding !== null);

const lagAksjonspunktMessage = (arbeidsforhold: any, getKodeverknavn: any) => {
  if (!arbeidsforhold || (!arbeidsforhold.tilVurdering && !arbeidsforhold.erEndret)) {
    return undefined;
  }
  if (harPermisjonOgIkkeMottattIM(arbeidsforhold)) {
    return (
      <FormattedMessage
        key="permisjonUtenMottattIM"
        id="PersonAksjonspunktText.SokerHarPermisjonOgIkkeMottattIM"
        values={utledPermisjonValues(arbeidsforhold.permisjoner[0], getKodeverknavn)}
      />
    );
  }
  if (harPermisjonOgMottattIM(arbeidsforhold)) {
    return (
      <FormattedMessage
        key="permisjonMedMottattIM"
        id="PersonAksjonspunktText.SokerHarPermisjonOgMottattIM"
        values={utledPermisjonValues(arbeidsforhold.permisjoner[0], getKodeverknavn)}
      />
    );
  }
  if (arbeidsforhold.permisjoner && arbeidsforhold.permisjoner.length > 1) {
    return <FormattedMessage key="permisjoner" id="PersonAksjonspunktText.SokerHarFlerePermisjoner" />;
  }
  if (arbeidsforhold.kilde.navn === arbeidsforholdKilder.INNTEKTSMELDING) {
    return <FormattedMessage key="basertPaInntektsmelding" id="PersonAksjonspunktText.BasertPaInntektsmelding" />;
  }
  if (arbeidsforhold.lagtTilAvSaksbehandler) {
    return <FormattedMessage key="lagtTilAvSaksbehandler" id="PersonAksjonspunktText.LeggTilArbeidsforhold" />;
  }
  if (!arbeidsforhold.mottattDatoInntektsmelding) {
    return <FormattedMessage key="mottattDatoInntektsmelding" id="PersonAksjonspunktText.AvklarManglendeInntektsmelding" values={{ br: <br /> }} />;
  }
  if (arbeidsforhold.replaceOptions.length > 0) {
    return <FormattedMessage key="replaceOptions" id="PersonAksjonspunktText.AvklarErstatteTidligere" />;
  }
  if (arbeidsforhold.harErstattetEttEllerFlere) {
    return <FormattedMessage key="harErstattetEttEllerFlere" id="PersonAksjonspunktText.AvklarErstatteAlle" />;
  }
  if (arbeidsforhold.ikkeRegistrertIAaRegister) {
    return <FormattedMessage key="ikkeRegistrertIAaRegister" id="PersonAksjonspunktText.AvklarIkkeRegistrertIAa" />;
  }
  return undefined;
};

interface OwnProps {
  arbeidsforhold?: Arbeidsforhold;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

export const PersonAksjonspunktTextImpl: FunctionComponent<OwnProps> = ({
  arbeidsforhold,
  alleKodeverk,
}) => {
  const msg = lagAksjonspunktMessage(arbeidsforhold, getKodeverknavnFn(alleKodeverk, kodeverkTyper));
  if (msg === undefined) {
    return null;
  }
  return (
    <>
      <VerticalSpacer eightPx />
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={arbeidsforhold.tilVurdering}>
        {[msg]}
      </AksjonspunktHelpTextTemp>
    </>
  );
};

export default PersonAksjonspunktTextImpl;
