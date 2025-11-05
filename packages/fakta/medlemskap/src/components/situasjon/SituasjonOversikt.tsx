import { FormattedMessage, useIntl } from 'react-intl';

import { FaktaBox, FaktaGruppe } from '@navikt/fp-fakta-felles';
import type { AlleKodeverk, Medlemskap } from '@navikt/fp-types';

import { formaterUtenlandsopphold, getSisteBostedsLand, getSistePersonstatus, getSisteRegion } from './situasjonUtils';

interface Props {
  medlemskap: Medlemskap;
  alleKodeverk: AlleKodeverk;
}

export const SituasjonOversikt = ({ medlemskap, alleKodeverk }: Props) => {
  const intl = useIntl();

  return (
    <FaktaGruppe aria-label="Situasjons Oversikt">
      <FaktaBox
        label={<FormattedMessage id="SituasjonLabel.HarBodd" />}
        value={formaterUtenlandsopphold(medlemskap.oppgittUtlandsopphold.utlandsoppholdFør, alleKodeverk, intl)}
        kilde="SØKNAD"
      />
      <FaktaBox
        label={<FormattedMessage id="SituasjonLabel.SkalBo" />}
        value={formaterUtenlandsopphold(medlemskap.oppgittUtlandsopphold.utlandsoppholdEtter, alleKodeverk, intl)}
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
