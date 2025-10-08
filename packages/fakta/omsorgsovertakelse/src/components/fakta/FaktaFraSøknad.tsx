import { FormattedMessage, useIntl } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { ReadOnlyField } from '@navikt/ft-form-hooks';
import { DateLabel } from '@navikt/ft-ui-komponenter';

import { FaktaKort } from '@navikt/fp-ui-komponenter';
import { usePanelDataContext } from '@navikt/fp-utils';

import type { Søknad } from '../../types';

interface Props {
  søknad: Søknad;
}

export const FaktaFraSøknad = ({
  søknad: { omsorgsovertakelseDato, ankomstNorgeDato, erEktefellesBarn, delvilkår, antallBarn, barn },
}: Props) => {
  const intl = useIntl();
  const barnet = barn[0];
  const { alleKodeverk } = usePanelDataContext();
  return (
    <FaktaKort label={intl.formatMessage({ id: 'FaktaFraSøknad.Tittel' })}>
      <VStack gap="space-16">
        {omsorgsovertakelseDato && (
          <ReadOnlyField
            label={<FormattedMessage id="Label.Omsorgsovertakelsesdato" />}
            value={<DateLabel dateString={omsorgsovertakelseDato} />}
          />
        )}

        {ankomstNorgeDato && (
          <ReadOnlyField
            label={<FormattedMessage id="Label.Ankomstdato" />}
            value={<DateLabel dateString={ankomstNorgeDato} />}
          />
        )}

        {antallBarn && <ReadOnlyField label={<FormattedMessage id="Label.AntallBarn" />} value={antallBarn} />}

        {barnet && (
          <ReadOnlyField
            label={<FormattedMessage id="Label.Fødselsdato" />}
            value={<DateLabel dateString={barnet.fødselsdato} />}
          />
        )}

        {erEktefellesBarn !== undefined && (
          <ReadOnlyField
            label={<FormattedMessage id="Label.ErEktefellesBarn" />}
            value={erEktefellesBarn ? <FormattedMessage id="Label.Ja" /> : <FormattedMessage id="Label.Nei" />}
          />
        )}

        {delvilkår && (
          <ReadOnlyField
            label={<FormattedMessage id="Label.Delvilkår" />}
            value={alleKodeverk['OmsorgsovertakelseVilkårType'].find(k => k.kode === delvilkår)?.navn}
          />
        )}
      </VStack>
    </FaktaKort>
  );
};
