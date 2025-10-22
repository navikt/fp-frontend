import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Radio } from '@navikt/ds-react';
import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';

import { hasValue } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { AdopsjonFamilieHendelse } from '@navikt/fp-types';
import type { BekreftEktefelleAksjonspunktAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { FaktaKort } from '@navikt/fp-ui-komponenter';

interface Props {
  readOnly: boolean;
  adopsjon: AdopsjonFamilieHendelse;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
}

export type FormValues = {
  ektefellesBarn?: boolean;
};

/**
 * EktefelleFaktaForm
 *
 * Setter opp aksjonspunktet for vurdering av om det er ektefelles barn som adopteres.
 */
export const EktefelleFaktaForm = ({ readOnly, adopsjon, alleMerknaderFraBeslutter }: Props) => {
  const intl = useIntl();
  const { control } = useFormContext<FormValues>();

  return (
    <FaktaKort
      label={intl.formatMessage({ id: 'EktefelleFaktaForm.ApplicationInformation' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.AVKLAR_OM_ADOPSJON_GJELDER_EKTEFELLES_BARN]}
    >
      <RhfRadioGroup
        name="ektefellesBarn"
        control={control}
        legend={<FormattedMessage id="EktefelleFaktaForm.APSpørsmål" />}
        validate={[required]}
        readOnly={readOnly}
        isEdited={hasValue(adopsjon.ektefellesBarn)}
      >
        <Radio value={true}>
          <FormattedMessage id="EktefelleFaktaForm.Ja" />
        </Radio>
        <Radio value={false}>
          <FormattedMessage id="EktefelleFaktaForm.Nei" />
        </Radio>
      </RhfRadioGroup>
    </FaktaKort>
  );
};

EktefelleFaktaForm.buildInitialValues = (adopsjon: AdopsjonFamilieHendelse): FormValues => ({
  ektefellesBarn: adopsjon.ektefellesBarn,
});

EktefelleFaktaForm.transformValues = (ektefellesBarn: boolean): BekreftEktefelleAksjonspunktAp => ({
  kode: AksjonspunktKode.AVKLAR_OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
  ektefellesBarn,
});
