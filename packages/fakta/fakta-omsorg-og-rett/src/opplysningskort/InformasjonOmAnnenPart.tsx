import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Label } from '@navikt/ds-react';

import { FaktaKilde } from '@navikt/fp-fakta-felles';
import { type OmsorgOgRett } from '@navikt/fp-types';

import { EkspansjonsKort } from '../components/ekspansjonsKort/EkspansjonsKort.tsx';

interface Props {
  omsorgOgRett: OmsorgOgRett;
}

export const InformasjonOmAnnenPart = ({ omsorgOgRett }: Props) => {
  const intl = useIntl();

  const { harAnnenpartUføretrygd, harAnnenpartForeldrepenger, harAnnenpartEngangsstønad } = omsorgOgRett.registerdata;

  return (
    <EkspansjonsKort tittel={intl.formatMessage({ id: 'OpplysningsKort.AnnenPartTittel' })} kilde={FaktaKilde.FREG}>
      {harAnnenpartUføretrygd != null && (
        <div>
          <Label size="small">
            <FormattedMessage id="InformasjonOmAnnenPart.HarAnnenPartUføretrygd" />
          </Label>
          <BodyShort size="small">
            <FormattedMessage
              id="InformasjonOmAnnenPart.HarAnnenPartUføretrygd.svar"
              values={{ uføretrygd: harAnnenpartUføretrygd }}
            />
          </BodyShort>
        </div>
      )}

      {harAnnenpartForeldrepenger != null && (
        <div>
          <Label size="small">
            <FormattedMessage id="InformasjonOmAnnenPart.Foreldrepenger" />
          </Label>
          <BodyShort size="small">
            <FormattedMessage
              id="InformasjonOmAnnenPart.Foreldrepenger.svar"
              values={{ foreldrepenger: harAnnenpartForeldrepenger }}
            />
          </BodyShort>
        </div>
      )}

      {harAnnenpartEngangsstønad != null && (
        <div>
          <Label size="small">
            <FormattedMessage id="InformasjonOmAnnenPart.Engangstønad" />
          </Label>
          <BodyShort size="small">
            <FormattedMessage
              id="InformasjonOmAnnenPart.Engangstønad.svar"
              values={{ engangstønad: harAnnenpartEngangsstønad }}
            />
          </BodyShort>
        </div>
      )}
    </EkspansjonsKort>
  );
};
