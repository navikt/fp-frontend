import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Label, BodyShort, Detail, Tag, HStack } from '@navikt/ds-react';
import { Tooltip } from '@navikt/ft-ui-komponenter';

import { region, personstatusType, adresseType } from '@navikt/fp-kodeverk';
import { KodeverkMedNavn, Personadresse, PersonopplysningMedlem } from '@navikt/fp-types';

import getAddresses from '../../getAddresses';

import styles from './medlemskapBostedSokerView.module.css';

const getAdresse = (adresser: Personadresse[]): string => {
  const adresseListe = getAddresses(adresser);
  const adresse = adresseListe[adresseType.POSTADRESSE] || adresseListe[adresseType.BOSTEDSADRESSE];
  return adresse || '-';
};

const getUtlandsadresse = (adresser: Personadresse[]): string => {
  const adresseListe = getAddresses(adresser);
  const utlandsAdresse =
    adresseListe[adresseType.POSTADRESSE_UTLAND] ||
    adresseListe[adresseType.MIDLERTIDIG_POSTADRESSE_UTLAND];
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
      <HStack justify="space-between">
        <div>
          <Detail>{sokerTypeText}</Detail>
          <Label size="small">{personopplysninger.navn ? personopplysninger.navn : '-'}</Label>
          <BodyShort size="small" className={styles.paddingBottom}>
            {getAdresse(personopplysninger.adresser)}
          </BodyShort>
          <Detail>
            <FormattedMessage id="BostedSokerView.ForeignAddresse" />
          </Detail>
          <BodyShort size="small">{getUtlandsadresse(personopplysninger.adresser)}</BodyShort>
        </div>
        <div>
          {personopplysninger.personstatus && (
            <div className={styles.etikettMargin}>
              <Tooltip content={intl.formatMessage({ id: 'Personstatus.Hjelpetekst' })} alignBottom>
                <Tag
                  className={personopplysninger.personstatus === personstatusType.DOD ? styles.dodEtikett : ''}
                  variant="warning"
                >
                  { personstatusTypes.find(s => s.kode === personopplysninger.personstatus)?.navn ?? intl.formatMessage({ id: 'Personstatus.Ukjent' })}
                </Tag>
              </Tooltip>
            </div>
          )}
          {personopplysninger.region && (
            <div className={styles.etikettMargin}>
              <Tooltip content={intl.formatMessage({ id: 'BostedSokerView.Region' })} alignBottom>
                <Tag variant="warning">{regionTypes.find(r => r.kode === personopplysninger.region)?.navn ?? intl.formatMessage({ id: 'Region.Ukjent' })}</Tag>
              </Tooltip>
            </div>
          )}
        </div>
      </HStack>
    </div>
  );
};

export default MedlemskapBostedSokerView;
