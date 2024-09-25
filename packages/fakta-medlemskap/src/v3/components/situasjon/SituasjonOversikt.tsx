import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { AlleKodeverk, MedlemskapV3, Soknad } from '@navikt/fp-types';
import { FaktaGruppe, FaktaBox, FaktaKilde } from '@navikt/fp-fakta-felles';

import { formaterUtenlandsopphold, getSisteBostedsLand, getSistePersonstatus, getSisteRegion } from './situasjonUtils';

interface Props {
  medlemskap: MedlemskapV3;
  soknad: Soknad;
  alleKodeverk: AlleKodeverk;
}

const SituasjonOversikt = ({ soknad, medlemskap, alleKodeverk }: Props) => {
  const intl = useIntl();

  return (
    <FaktaGruppe aria-label="Situasjons Oversikt">
      <FaktaBox
        label={<FormattedMessage id="SituasjonLabel.HarBodd" />}
        value={formaterUtenlandsopphold(soknad.oppgittTilknytning.utlandsoppholdFor, alleKodeverk, intl)}
        kilde={FaktaKilde.SOKNAD}
      />
      <FaktaBox
        label={<FormattedMessage id="SituasjonLabel.SkalBo" />}
        value={formaterUtenlandsopphold(soknad.oppgittTilknytning.utlandsoppholdEtter, alleKodeverk, intl)}
        kilde={FaktaKilde.SOKNAD}
      />
      <FaktaBox
        label={<FormattedMessage id="SituasjonLabel.SisteAdresse" />}
        value={getSisteBostedsLand(medlemskap, intl)}
        kilde={FaktaKilde.FREG}
      />
      <FaktaBox
        label={<FormattedMessage id="SituasjonLabel.Statborgerskap" />}
        value={getSisteRegion(medlemskap, alleKodeverk, intl)}
        kilde={FaktaKilde.FREG}
      />
      <FaktaBox
        label={<FormattedMessage id="SituasjonLabel.Personstatus" />}
        value={getSistePersonstatus(medlemskap, alleKodeverk, intl)}
        kilde={FaktaKilde.FREG}
      />
    </FaktaGruppe>
  );
};

export default SituasjonOversikt;
