import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';

import { DateLabel, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import opplysningAdresseType from '@fpsak-frontend/kodeverk/src/opplysningAdresseType';
import { MerkePanel } from '@fpsak-frontend/fakta-felles';
import { Personadresse, PersonopplysningerBasis } from '@fpsak-frontend/types';

import getAddresses from '../getAddresses';

import styles from './bostedBarnView.less';

const formatDate = (date: string): string => (date ? moment(date, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '-');
const getAgeFromDate = (birthDate?: string): number => moment().diff(moment(birthDate), 'years');

const getAdresse = (adresser: Personadresse[]): string => {
  const adresseListe = getAddresses(adresser);
  const adresse = adresseListe[opplysningAdresseType.POSTADRESSE] || adresseListe[opplysningAdresseType.BOSTEDSADRESSE];
  return adresse || '-';
};

interface OwnProps {
  barn: PersonopplysningerBasis;
  barnNr: number;
  className?: string;
}

const BostedBarnView: FunctionComponent<OwnProps> = ({
  barn,
  barnNr,
  className,
}) => (
  <div className={className}>
    <Undertekst>
      <FormattedMessage id="BostedBarnView.Barn" values={{ barnNr }} />
      {barn.dødsdato && (
        <div className={styles.inline}><MerkePanel erDod /></div>
      )}
    </Undertekst>
    <Element>
      {barn.navn ? barn.navn : '-' }
    </Element>
    <Normaltekst className={styles.paddingBottom}>
      <FormattedMessage
        id="BostedBarnView.Age"
        values={{
          fodselsdato: formatDate(barn.fødselsdato) ? formatDate(barn.fødselsdato) : '-',
          age: getAgeFromDate(barn.fødselsdato),
        }}
      />
    </Normaltekst>
    {barn.dødsdato && (
      <div>
        <FormattedMessage id="BostedBarnView.DodsDato" />
        <Element><DateLabel dateString={barn.dødsdato} /></Element>
        <VerticalSpacer eightPx />
      </div>
    )}
    <Undertekst>
      <FormattedMessage id="BostedBarnView.Adresse" />
    </Undertekst>
    <Normaltekst>
      {getAdresse(barn.adresser)}
    </Normaltekst>
  </div>
);

BostedBarnView.defaultProps = {
  className: styles.defaultBostedBarn,
};

export default BostedBarnView;
