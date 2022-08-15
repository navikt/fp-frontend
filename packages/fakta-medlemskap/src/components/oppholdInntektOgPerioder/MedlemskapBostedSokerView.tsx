import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';
import Etikettfokus from 'nav-frontend-etiketter';
import { Tooltip } from '@navikt/ft-ui-komponenter';
import { KodeverkMedNavn } from '@navikt/ft-types';

import opplysningAdresseType from '@fpsak-frontend/kodeverk/src/opplysningAdresseType';
import personstatusType from '@fpsak-frontend/kodeverk/src/personstatusType';
import Region from '@fpsak-frontend/kodeverk/src/region';
import { Personadresse, PersonopplysningMedlem } from '@fpsak-frontend/types';

import getAddresses from '../../getAddresses';

import styles from './medlemskapBostedSokerView.less';

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
  personopplysninger: PersonopplysningMedlem;
  sokerTypeText: string;
  regionTypes: KodeverkMedNavn[];
  personstatusTypes: KodeverkMedNavn[];
}

export const MedlemskapBostedSokerView: FunctionComponent<OwnProps> = ({
  personopplysninger,
  sokerTypeText,
  regionTypes,
  personstatusTypes,
}) => {
  const intl = useIntl();
  return (
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
          {personopplysninger.personstatus && (
            <div className={styles.etikettMargin}>
              <Tooltip content={intl.formatMessage({ id: 'Personstatus.Hjelpetekst' })} alignBottom>
                <Etikettfokus
                  className={personopplysninger.personstatus === personstatusType.DOD ? styles.dodEtikett : ''}
                  type="fokus"
                  typo="undertekst"
                >
                  {personopplysninger.personstatus === personstatusType.UDEFINERT
                    ? intl.formatMessage({ id: 'Personstatus.Ukjent' })
                    : personstatusTypes.find((s) => s.kode === personopplysninger.personstatus)?.navn}
                </Etikettfokus>
              </Tooltip>
            </div>
          )}
          {(personopplysninger.region && personopplysninger.region !== Region.UDEFINERT) && (
            <div className={styles.etikettMargin}>
              <Tooltip content={intl.formatMessage({ id: 'BostedSokerView.Region' })} alignBottom>
                <Etikettfokus
                  type="fokus"
                  typo="undertekst"
                >
                  {regionTypes.find((r) => r.kode === personopplysninger.region).navn}
                </Etikettfokus>
              </Tooltip>
            </div>
          )}
        </Column>
      </Row>
    </div>
  );
};

export default MedlemskapBostedSokerView;
