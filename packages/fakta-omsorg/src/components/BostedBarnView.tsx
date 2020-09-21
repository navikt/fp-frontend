import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';

import { DateLabel, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { DDMMYYYY_DATE_FORMAT, getAddresses, ISO_DATE_FORMAT } from '@fpsak-frontend/utils';
import opplysningAdresseType from '@fpsak-frontend/kodeverk/src/opplysningAdresseType';
import { MerkePanel } from '@fpsak-frontend/fakta-felles';
import { Personopplysninger } from '@fpsak-frontend/types';

import styles from './bostedBarnView.less';

const formatDate = (date: string) => (date ? moment(date, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '-');
const getAgeFromDate = (birthDate: any) => moment().diff(moment(birthDate), 'years');

const getAdresse = (adresser: any) => {
  const adresseListe = getAddresses(adresser);
  const adresse = adresseListe[opplysningAdresseType.POSTADRESSE] || adresseListe[opplysningAdresseType.BOSTEDSADRESSE];
  return adresse || '-';
};

interface OwnProps {
    barn: Personopplysninger;
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
      {barn.dodsdato
              && <div className={styles.inline}><MerkePanel erDod /></div>}
    </Undertekst>

    <Element>
      {barn.navn ? barn.navn : '-' }
    </Element>
    <Normaltekst className={styles.paddingBottom}>
      <FormattedMessage
        id="BostedBarnView.Age"
        values={{
          fodselsdato: formatDate(barn.fodselsdato) ? formatDate(barn.fodselsdato) : '-',
          age: getAgeFromDate(barn.fodselsdato),
        }}
      />
    </Normaltekst>
    {barn.dodsdato
    && (
    <div>
      <FormattedMessage id="BostedBarnView.DodsDato" />
      <Element><DateLabel dateString={barn.dodsdato} /></Element>
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
