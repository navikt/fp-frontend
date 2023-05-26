import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Tag, BodyShort, Heading } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow, Tooltip, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { KodeverkMedNavn } from '@navikt/ft-types';
import { FagsakYtelseType } from '@navikt/ft-kodeverk';

const visSakDekningsgrad = (saksKode: string, dekningsgrad?: number): boolean => {
  const erForeldrepenger = saksKode === FagsakYtelseType.FORELDREPENGER;
  const gyldigDekningsGrad = dekningsgrad === 100 || dekningsgrad === 80;

  return erForeldrepenger && gyldigDekningsGrad;
};

interface OwnProps {
  saksnummer: string;
  fagsakYtelseType: KodeverkMedNavn;
  fagsakStatus: KodeverkMedNavn;
  dekningsgrad?: number;
  fagsakMarkeringTekst?: string;
}

/**
 * FagsakProfile
 *
 * Presentasjonskomponent. Viser fagsakinformasjon og knapper for å endre status eller lukke sak.
 */
const FagsakProfile: FunctionComponent<OwnProps> = ({
  saksnummer,
  fagsakYtelseType,
  fagsakStatus,
  dekningsgrad,
  fagsakMarkeringTekst,
}) => {
  const intl = useIntl();
  return (
    <FlexContainer>
      <FlexRow spaceBetween alignItemsToBaseline>
        <FlexColumn>
          <Heading size="medium">{fagsakYtelseType.navn}</Heading>
        </FlexColumn>
        {visSakDekningsgrad(fagsakYtelseType.kode, dekningsgrad) && (
          <FlexColumn>
            <Tooltip content={intl.formatMessage({ id: 'FagsakProfile.Dekningsgrad' }, { dekningsgrad })} alignBottom>
              <Tag variant="info">{`${dekningsgrad}%`}</Tag>
            </Tooltip>
          </FlexColumn>
        )}
        {fagsakMarkeringTekst && (
          <FlexColumn>
            <Tooltip
              content={intl.formatMessage({ id: 'FagsakProfile.FagsakMarkering' }, { fagsakMarkeringTekst })}
              alignBottom
            >
              <Tag variant="alt1">{`${fagsakMarkeringTekst}`}</Tag>
            </Tooltip>
          </FlexColumn>
        )}
      </FlexRow>
      <VerticalSpacer eightPx />
      <FlexRow>
        <FlexColumn>
          <BodyShort size="small">{`${saksnummer} - ${fagsakStatus.navn}`}</BodyShort>
        </FlexColumn>
      </FlexRow>
    </FlexContainer>
  );
};

export default FagsakProfile;
