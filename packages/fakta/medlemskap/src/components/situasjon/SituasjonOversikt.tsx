import { FormattedMessage, useIntl } from 'react-intl';

import { FaktaBox, FaktaGruppe } from '@navikt/fp-fakta-felles';
import type { AlleKodeverk, Medlemskap, Soknad } from '@navikt/fp-types';

import { formaterUtenlandsopphold, getSisteBostedsLand, getSistePersonstatus, getSisteRegion } from './situasjonUtils';

interface Props {
  medlemskap: Medlemskap;
  soknad: Soknad;
  alleKodeverk: AlleKodeverk;
}

export const SituasjonOversikt = ({ soknad, medlemskap, alleKodeverk }: Props) => {
  const intl = useIntl();

  return (
    <FaktaGruppe aria-label="Situasjons Oversikt">
      <FaktaBox
        label={<FormattedMessage id="SituasjonLabel.HarBodd" />}
        value={formaterUtenlandsopphold(soknad.oppgittTilknytning.utlandsoppholdFor, alleKodeverk, intl)}
        kilde="SØKNAD"
      />
      <FaktaBox
        label={<FormattedMessage id="SituasjonLabel.SkalBo" />}
        value={formaterUtenlandsopphold(soknad.oppgittTilknytning.utlandsoppholdEtter, alleKodeverk, intl)}
        kilde="SØKNAD"
      />
      <FaktaBox
        label={<FormattedMessage id="SituasjonLabel.SisteAdresse" />}
        value={getSisteBostedsLand(medlemskap, intl)}
        kilde="FOLKEREGISTER"
      />
      <FaktaBox
        label={<FormattedMessage id="SituasjonLabel.Statborgerskap" />}
        value={getSisteRegion(medlemskap, alleKodeverk, intl)}
        kilde="FOLKEREGISTER"
      />
      <FaktaBox
        label={<FormattedMessage id="SituasjonLabel.Personstatus" />}
        value={getSistePersonstatus(medlemskap, alleKodeverk, intl)}
        kilde="FOLKEREGISTER"
      />
    </FaktaGruppe>
  );
};
