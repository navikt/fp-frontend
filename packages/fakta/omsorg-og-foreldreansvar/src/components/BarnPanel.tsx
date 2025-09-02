import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Label, VStack } from '@navikt/ds-react';
import { DateLabel, FaktaGruppe } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode, SoknadType } from '@navikt/fp-kodeverk';
import type { Soknad } from '@navikt/fp-types';

interface Props {
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  soknad: Soknad;
}

/**
 * BarnPanel
 *
 * Presentasjonskomponent. Brukes i tilknytning til faktapanel for omsorg.
 * Viser barn fra søknad
 */
export const BarnPanel = ({ alleMerknaderFraBeslutter, soknad }: Props) => {
  const intl = useIntl();

  if (soknad.soknadType !== SoknadType.ADOPSJON) {
    return null;
  }

  const { adopsjonFodelsedatoer } = soknad;
  return (
    <FaktaGruppe
      title={intl.formatMessage({ id: 'BarnPanel.BarnDetSøkesOm' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.OMSORGSOVERTAKELSE]}
    >
      <VStack gap="space-8">
        {soknad.soknadType === SoknadType.ADOPSJON &&
          adopsjonFodelsedatoer &&
          Object.keys(adopsjonFodelsedatoer).map(key => (
            <div key={`${key}`}>
              <Label size="small">
                <FormattedMessage id="BarnPanel.ChildNumberBornData" values={{ childNumber: key }} />
              </Label>
              <BodyShort size="small">
                <DateLabel dateString={adopsjonFodelsedatoer[parseInt(key, 10)]} />
              </BodyShort>
            </div>
          ))}
      </VStack>
    </FaktaGruppe>
  );
};
