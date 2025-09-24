import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { ReadOnlyField, RhfDatepicker } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';

import { isNotEqual } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { type AdopsjonFamilieHendelse, type Soknad, søknadErAdopsjon } from '@navikt/fp-types';
import { FaktaKort } from '@navikt/fp-ui-komponenter';
import { usePanelDataContext } from '@navikt/fp-utils';

export type FormValues = {
  omsorgsovertakelseDato?: string;
  foreldreansvarDato?: string;
};

interface Props {
  readOnly: boolean;
  erAksjonspunktForeldreansvar: boolean;
  soknad: Soknad;
  adopsjon: AdopsjonFamilieHendelse;
}

export const OmsorgsovertakelseFaktaPanel = ({ readOnly, erAksjonspunktForeldreansvar, soknad, adopsjon }: Props) => {
  const intl = useIntl();
  const antallBarn = adopsjon.antallBarn;

  const { control } = useFormContext<FormValues>();
  const { alleMerknaderFraBeslutter } = usePanelDataContext();

  return (
    <FaktaKort
      label={intl.formatMessage({
        id: erAksjonspunktForeldreansvar
          ? 'OmsorgsovertakelseFaktaPanel.ForeldreansvarTittel'
          : 'OmsorgsovertakelseFaktaPanel.OmsorgTittel',
      })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.OMSORGSOVERTAKELSE]}
    >
      <VStack gap="space-16">
        <RhfDatepicker
          name="omsorgsovertakelseDato"
          size="medium"
          control={control}
          label={<FormattedMessage id="OmsorgsovertakelseFaktaPanel.OmsorgsovertakelseDate" />}
          validate={[required, hasValidDate]}
          isReadOnly={readOnly}
          isEdited={isNotEqual(finnOmsorgsovertakelseDato(soknad), adopsjon.omsorgsovertakelseDato)}
        />
        {erAksjonspunktForeldreansvar && (
          <RhfDatepicker
            name="foreldreansvarDato"
            size="medium"
            control={control}
            label={<FormattedMessage id="OmsorgsovertakelseFaktaPanel.ForeldreansvarDato" />}
            validate={[required, hasValidDate]}
            isReadOnly={readOnly}
          />
        )}
        <ReadOnlyField
          size="medium"
          label={<FormattedMessage id="OmsorgsovertakelseFaktaPanel.NrOfChildren" />}
          value={antallBarn}
        />
      </VStack>
    </FaktaKort>
  );
};

OmsorgsovertakelseFaktaPanel.buildInitialValues = (adopsjon: AdopsjonFamilieHendelse): FormValues => ({
  omsorgsovertakelseDato: adopsjon.omsorgsovertakelseDato,
  foreldreansvarDato: adopsjon.foreldreansvarDato,
});

const finnOmsorgsovertakelseDato = (søknad: Soknad) => {
  if (søknadErAdopsjon(søknad)) {
    return søknad.omsorgsovertakelseDato ?? undefined;
  }

  return undefined;
};
