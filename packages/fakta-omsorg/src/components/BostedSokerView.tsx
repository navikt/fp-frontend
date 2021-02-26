import React, { FunctionComponent } from 'react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';
import Etikettfokus from 'nav-frontend-etiketter';

import opplysningAdresseType from '@fpsak-frontend/kodeverk/src/opplysningAdresseType';
import { getAddresses } from '@fpsak-frontend/utils';
import { Tooltip } from '@fpsak-frontend/shared-components';
import {
  KodeverkMedNavn, Personadresse, PersonopplysningerBasis,
} from '@fpsak-frontend/types';

import styles from './bostedSokerView.less';

const getAdresse = (adresser: Personadresse[]): string => {
  const adresseListe = getAddresses(adresser);
  const adresse = adresseListe[opplysningAdresseType.POSTADRESSE] || adresseListe[opplysningAdresseType.BOSTEDSADRESSE];
  return adresse || '-';
};

const getUtlandsadresse = (adresser: Personadresse[]): string => {
  const adresseListe = getAddresses(adresser);
  const utlandsAdresse = adresseListe[opplysningAdresseType.UTENLANDSK_POSTADRESSE] || adresseListe[opplysningAdresseType.UTENLANDSK_NAV_TILLEGSADRESSE];
  return utlandsAdresse || '-';
};

interface OwnProps {
  personopplysninger: PersonopplysningerBasis;
  sokerTypeText: string;
  sivilstandTypes: KodeverkMedNavn[];
}

export const BostedSokerView: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  personopplysninger,
  sokerTypeText,
  sivilstandTypes,
}) => (
  <div className={styles.defaultBostedSoker}>
    <Row>
      <Column xs="8">
        <Undertekst>{sokerTypeText}</Undertekst>
        <Element>{personopplysninger.navn ? personopplysninger.navn : '-'}</Element>
        <Normaltekst className={styles.paddingBottom}>
          {getAdresse(personopplysninger.adresser)}
        </Normaltekst>
        <Undertekst>
          <FormattedMessage id="BostedSokerView.ForeignAddresse" />
        </Undertekst>
        <Normaltekst>{getUtlandsadresse(personopplysninger.adresser)}</Normaltekst>
      </Column>
      <Column xs="4">
        {personopplysninger.sivilstand
          && (
          <div className={styles.etikettMargin}>
            <Tooltip content={intl.formatMessage({ id: 'Sivilstand.Hjelpetekst' })} alignBottom>
              <Etikettfokus
                type="fokus"
                typo="undertekst"
              >
                {sivilstandTypes.find((s) => s.kode === personopplysninger.sivilstand.kode).navn}
              </Etikettfokus>
            </Tooltip>
          </div>
          )}
      </Column>
    </Row>
  </div>
);

export default injectIntl(BostedSokerView);
