import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Label } from '@navikt/ds-react';

import { FaktaKilde } from '@navikt/fp-fakta-felles';
import { type OmsorgOgRett } from '@navikt/fp-types';

import { EkspansjonsKort } from '../components/ekspansjonsKort/EkspansjonsKort.tsx';

interface Props {
  omsorgOgRett: OmsorgOgRett;
}

export const OpplysningerFraSoknad = ({ omsorgOgRett }: Props) => {
  const intl = useIntl();

  const { harRettNorge, harOppholdEØS, harRettEØS, harUføretrygd } = omsorgOgRett.søknad.annenpartRettighet;
  const harSøkerAleneOmsorg = omsorgOgRett.søknad.søkerHarAleneomsorg;

  return (
    <EkspansjonsKort
      tittel={intl.formatMessage({ id: 'OpplysningsKort.OpplysningerFraSøknadTittel' })}
      kilde={FaktaKilde.SOKNAD}
      defaultOpen={true}
    >
      <div>
        <Label size="small">
          <FormattedMessage id="OpplysningerFraSøknad.HarSøkerAleneOmsorg" />
        </Label>
        <BodyShort size="small">
          <FormattedMessage
            id="OpplysningerFraSøknad.HarSøkerAleneOmsorg.svar"
            values={{ aleneOmsorg: harSøkerAleneOmsorg }}
          />
        </BodyShort>
      </div>

      <div>
        <Label size="small">
          <FormattedMessage id="HarAnnenForelderRettFelter.HarAnnenForelderRett" />
        </Label>
        <BodyShort size="small">
          <FormattedMessage id="OpplysningerFraSøknad.HarAnnenForelderRett.svar" values={{ iNorge: harRettNorge }} />
        </BodyShort>
      </div>

      {harOppholdEØS != null && (
        <div>
          <Label size="small">
            <FormattedMessage id="OpplysningerFraSøknad.HarOppholdIEØS" />
          </Label>
          <BodyShort size="small">
            <FormattedMessage id="OpplysningerFraSøknad.HarOppholdIEØS.svar" values={{ oppholdEØS: harOppholdEØS }} />
          </BodyShort>
        </div>
      )}

      {harRettEØS != null && (
        <div>
          <Label size="small">
            <FormattedMessage id="OpplysningerFraSøknad.HarRettEØS" />
          </Label>
          <BodyShort size="small">
            <FormattedMessage id="OpplysningerFraSøknad.HarRettEØS.svar" values={{ rettEØS: harRettEØS }} />
          </BodyShort>
        </div>
      )}

      {harUføretrygd != null && (
        <div>
          <Label size="small">
            <FormattedMessage id="OpplysningerFraSøknad.HarUføretrygd" />
          </Label>
          <BodyShort size="small">
            <FormattedMessage id="OpplysningerFraSøknad.HarUføretrygd.svar" values={{ uføretrygd: harUføretrygd }} />
          </BodyShort>
        </div>
      )}
    </EkspansjonsKort>
  );
};
