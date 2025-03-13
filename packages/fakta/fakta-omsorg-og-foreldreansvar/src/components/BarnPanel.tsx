import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Label, VStack } from '@navikt/ds-react';
import { FaktaGruppe } from '@navikt/ft-ui-komponenter';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import moment from 'moment';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
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
  const { adopsjonFodelsedatoer } = soknad;
  return (
    <FaktaGruppe
      title={intl.formatMessage({ id: 'BarnPanel.BarnDetSøkesOm' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.OMSORGSOVERTAKELSE]}
    >
      <VStack gap="2">
        {adopsjonFodelsedatoer &&
          Object.keys(adopsjonFodelsedatoer).map(key => (
            <div key={`${key}`}>
              <Label size="small">
                <FormattedMessage id="BarnPanel.ChildNumberBornData" values={{ childNumber: key }} />
              </Label>
              <BodyShort size="small">
                {moment(adopsjonFodelsedatoer[parseInt(key, 10)]).format(DDMMYYYY_DATE_FORMAT)}
              </BodyShort>
            </div>
          ))}
      </VStack>
    </FaktaGruppe>
  );
};
