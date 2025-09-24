import { useFormContext } from 'react-hook-form';
import { type IntlShape, useIntl } from 'react-intl';

import { HGrid, Radio, VStack } from '@navikt/ds-react';
import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';

import { hasValue } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, VilkarType } from '@navikt/fp-kodeverk';
import type {
  AdopsjonFamilieHendelse,
  Aksjonspunkt,
  KodeverkMedNavn,
  Personoversikt,
  RelatertTilgrensedYtelse,
  Soknad,
} from '@navikt/fp-types';
import type {
  AvklarFaktaForForeldreansvarAksjonspunktAp,
  AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';
import { FaktaKort } from '@navikt/fp-ui-komponenter';
import { usePanelDataContext } from '@navikt/fp-utils';

import type { OmsorgOgForeldreansvarFormValues } from '../types/OmsorgOgForeldreansvarFormValues';
import { BarnPanel } from './BarnPanel';
import { ForeldrePanel } from './ForeldrePanel';
import { OmsorgsovertakelseFaktaPanel } from './OmsorgsovertakelseFaktaPanel';
import { RettighetFaktaPanel } from './RettighetFaktaPanel';

interface Props {
  soknad: Soknad;
  adopsjon: AdopsjonFamilieHendelse;
  readOnly: boolean;
  vilkarTypes: KodeverkMedNavn<'OmsorgsovertakelseVilkårType'>[];
  erAksjonspunktForeldreansvar: boolean;
  personoversikt: Personoversikt;
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder: RelatertTilgrensedYtelse[];
}

export const OmsorgOgForeldreansvarFaktaForm = ({
  readOnly,
  vilkarTypes,
  soknad,
  erAksjonspunktForeldreansvar,
  personoversikt,
  adopsjon,
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder,
}: Props) => {
  const intl = useIntl();

  const { watch, control } = useFormContext<OmsorgOgForeldreansvarFormValues>();
  const { alleMerknaderFraBeslutter } = usePanelDataContext();

  const vilkarType = watch('vilkarType');

  return (
    <VStack gap="space-8">
      <HGrid gap="space-20" columns="repeat(auto-fit, minmax(16rem, 1fr))">
        <OmsorgsovertakelseFaktaPanel
          readOnly={readOnly}
          erAksjonspunktForeldreansvar={erAksjonspunktForeldreansvar}
          soknad={soknad}
          adopsjon={adopsjon}
        />

        {!erAksjonspunktForeldreansvar && (
          <RettighetFaktaPanel
            farSøkerType={soknad.farSokerType}
            innvilgetRelatertTilgrensendeYtelserForAnnenForelder={innvilgetRelatertTilgrensendeYtelserForAnnenForelder}
          />
        )}
      </HGrid>
      <HGrid gap="space-20" columns="repeat(auto-fit, minmax(16rem, 1fr))">
        <BarnPanel søknad={soknad} />
        <ForeldrePanel personoversikt={personoversikt} />
      </HGrid>

      {!erAksjonspunktForeldreansvar && (
        <FaktaKort
          label={intl.formatMessage({ id: 'OmsorgOgForeldreansvarFaktaForm.VelgVilkaarSomSkalAnvendes' })}
          merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.OMSORGSOVERTAKELSE]}
        >
          <VStack gap="space-16">
            <RhfRadioGroup
              name="vilkarType"
              control={control}
              validate={[required]}
              hideLegend
              isReadOnly={readOnly}
              disabled={readOnly}
              isEdited={hasValue(adopsjon.omsorgsovertakelseVilkårType)}
            >
              {vilkarTypes.map(d => (
                <Radio size="medium" key={d.kode} value={d.kode} description={getDescriptionText(vilkarType, intl)}>
                  {d.navn}
                </Radio>
              ))}
            </RhfRadioGroup>
          </VStack>
        </FaktaKort>
      )}
    </VStack>
  );
};

OmsorgOgForeldreansvarFaktaForm.buildInitialValues = (
  adopsjon: AdopsjonFamilieHendelse,
): OmsorgOgForeldreansvarFormValues => ({
  vilkarType: adopsjon.omsorgsovertakelseVilkårType,
  ...OmsorgsovertakelseFaktaPanel.buildInitialValues(adopsjon),
});

OmsorgOgForeldreansvarFaktaForm.transformValues = (
  values: OmsorgOgForeldreansvarFormValues,
  aksjonspunkt: Aksjonspunkt,
): AvklarFaktaForForeldreansvarAksjonspunktAp | AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp =>
  aksjonspunkt.definisjon === AksjonspunktKode.AVKLAR_VILKAR_FOR_FORELDREANSVAR
    ? ({
        omsorgsovertakelseDato: values.omsorgsovertakelseDato,
        foreldreansvarDato: values.foreldreansvarDato,
        kode: AksjonspunktKode.AVKLAR_VILKAR_FOR_FORELDREANSVAR,
      } as AvklarFaktaForForeldreansvarAksjonspunktAp)
    : ({
        omsorgsovertakelseDato: values.omsorgsovertakelseDato,
        vilkarType: values.vilkarType,
        kode: AksjonspunktKode.OMSORGSOVERTAKELSE,
      } as AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp);

const getDescriptionText = (vilkarCode: string | undefined, intl: IntlShape) => {
  if (vilkarCode === VilkarType.OMSORGSVILKARET) {
    return intl.formatMessage({ id: 'OmsorgOgForeldreansvarFaktaForm.HelpTextOmsorgTredjeLedd' });
  }
  if (vilkarCode === VilkarType.FORELDREANSVARSVILKARET_2_LEDD) {
    return intl.formatMessage({ id: 'OmsorgOgForeldreansvarFaktaForm.HelpTextForeldreAndreLedd' });
  }
  if (vilkarCode === VilkarType.FORELDREANSVARSVILKARET_4_LEDD) {
    return intl.formatMessage({ id: 'OmsorgOgForeldreansvarFaktaForm.HelpTextForeldreFjerdeLedd' });
  }
  return undefined;
};
