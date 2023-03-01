import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  Label, BodyShort, Detail, Tag,
} from '@navikt/ds-react';
import {
  FlexColumn, FlexContainer, FlexRow, Tooltip,
} from '@navikt/ft-ui-komponenter';

import { region, personstatusType, opplysningAdresseType } from '@navikt/fp-kodeverk';
import { KodeverkMedNavn, Personadresse, PersonopplysningMedlem } from '@navikt/fp-types';

import getAddresses from '../../getAddresses';

import styles from './medlemskapBostedSokerView.module.css';

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
      <FlexContainer>
        <FlexRow spaceBetween>
          <FlexColumn>
            <Detail size="small">{sokerTypeText}</Detail>
            <Label size="small">{personopplysninger.navn ? personopplysninger.navn : '-'}</Label>
            <BodyShort size="small" className={styles.paddingBottom}>
              {getAdresse(personopplysninger.adresser)}
            </BodyShort>
            <Detail size="small">
              <FormattedMessage id="BostedSokerView.ForeignAddresse" />
            </Detail>
            <BodyShort size="small">{getUtlandsadresse(personopplysninger.adresser)}</BodyShort>
          </FlexColumn>
          <FlexColumn>
            {personopplysninger.personstatus && (
              <div className={styles.etikettMargin}>
                <Tooltip content={intl.formatMessage({ id: 'Personstatus.Hjelpetekst' })} alignBottom>
                  <Tag
                    className={personopplysninger.personstatus === personstatusType.DOD ? styles.dodEtikett : ''}
                    variant="warning"
                  >
                    {personopplysninger.personstatus === personstatusType.UDEFINERT
                      ? intl.formatMessage({ id: 'Personstatus.Ukjent' })
                      : personstatusTypes.find((s) => s.kode === personopplysninger.personstatus)?.navn}
                  </Tag>
                </Tooltip>
              </div>
            )}
            {(personopplysninger.region && personopplysninger.region !== region.UDEFINERT) && (
              <div className={styles.etikettMargin}>
                <Tooltip content={intl.formatMessage({ id: 'BostedSokerView.Region' })} alignBottom>
                  <Tag variant="warning">
                    {regionTypes.find((r) => r.kode === personopplysninger.region).navn}
                  </Tag>
                </Tooltip>
              </div>
            )}
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </div>
  );
};

export default MedlemskapBostedSokerView;
