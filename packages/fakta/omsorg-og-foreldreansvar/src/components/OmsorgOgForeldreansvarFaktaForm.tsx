import { type ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, HGrid, Label, VStack } from '@navikt/ds-react';
import { RhfSelect } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { EditedIcon, FaktaGruppe } from '@navikt/ft-ui-komponenter';

import { hasValue } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, VilkarType } from '@navikt/fp-kodeverk';
import type {
  AdopsjonFamilieHendelse,
  Aksjonspunkt,
  AlleKodeverk,
  InntektArbeidYtelse,
  KodeverkMedNavn,
  Personoversikt,
  Soknad,
} from '@navikt/fp-types';
import type {
  AvklarFaktaForForeldreansvarAksjonspunktAp,
  AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';

import type { OmsorgOgForeldreansvarFormValues } from '../types/OmsorgOgForeldreansvarFormValues';
import { BarnPanel } from './BarnPanel';
import { ForeldrePanel } from './ForeldrePanel';
import { OmsorgsovertakelseFaktaPanel } from './OmsorgsovertakelseFaktaPanel';
import { RettighetFaktaPanel } from './RettighetFaktaPanel';

import styles from './omsorgOgForeldreansvarFaktaForm.module.css';

const getDescriptionText = (vilkarCode?: string): ReactElement => {
  if (vilkarCode === VilkarType.OMSORGSVILKARET) {
    return <FormattedMessage id="OmsorgOgForeldreansvarFaktaForm.HelpTextOmsorgTredjeLedd" />;
  }
  if (vilkarCode === VilkarType.FORELDREANSVARSVILKARET_2_LEDD) {
    return <FormattedMessage id="OmsorgOgForeldreansvarFaktaForm.HelpTextForeldreAndreLedd" />;
  }
  if (vilkarCode === VilkarType.FORELDREANSVARSVILKARET_4_LEDD) {
    return <FormattedMessage id="OmsorgOgForeldreansvarFaktaForm.HelpTextForeldreFjerdeLedd" />;
  }
  return <FormattedMessage id="OmsorgOgForeldreansvarFaktaForm.ChooseVilkarToSeeDescription" />;
};

interface Props {
  soknad: Soknad;
  adopsjon: AdopsjonFamilieHendelse;
  readOnly: boolean;
  vilkarTypes: KodeverkMedNavn<'OmsorgsovertakelseVilkårType'>[];
  erAksjonspunktForeldreansvar: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  personoversikt: Personoversikt;
}

/**
 * OmsorgOgForeldreansvarFaktaForm
 *
 * Setter opp aksjonspunktet for avklaring av fakta for omsorgs og foreldreansvarsvilkåret.
 */
export const OmsorgOgForeldreansvarFaktaForm = ({
  readOnly,
  vilkarTypes,
  soknad,
  erAksjonspunktForeldreansvar,
  alleMerknaderFraBeslutter,
  personoversikt,
  adopsjon,
}: Props) => {
  const intl = useIntl();

  const { watch, control } = useFormContext<OmsorgOgForeldreansvarFormValues>();

  const vilkarType = watch('vilkarType');

  return (
    <VStack gap="space-8">
      <HGrid gap="space-20" columns="repeat(auto-fit, minmax(16rem, 1fr))">
        <OmsorgsovertakelseFaktaPanel
          readOnly={readOnly}
          erAksjonspunktForeldreansvar={erAksjonspunktForeldreansvar}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
          soknad={soknad}
          adopsjon={adopsjon}
        />
        {!erAksjonspunktForeldreansvar && <RettighetFaktaPanel alleMerknaderFraBeslutter={alleMerknaderFraBeslutter} />}
      </HGrid>
      <HGrid gap="space-20" columns="repeat(auto-fit, minmax(16rem, 1fr))">
        <BarnPanel soknad={soknad} alleMerknaderFraBeslutter={alleMerknaderFraBeslutter} />
        <ForeldrePanel personoversikt={personoversikt} alleMerknaderFraBeslutter={alleMerknaderFraBeslutter} />
      </HGrid>
      {!erAksjonspunktForeldreansvar && (
        <FaktaGruppe
          title={intl.formatMessage({ id: 'OmsorgOgForeldreansvarFaktaForm.VelgVilkaarSomSkalAnvendes' })}
          merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.OMSORGSOVERTAKELSE]}
        >
          <VStack gap="space-16">
            {!readOnly && (
              <RhfSelect
                name="vilkarType"
                control={control}
                validate={[required]}
                hideLabel
                label=""
                selectValues={vilkarTypes.map(d => (
                  <option key={d.kode} value={d.kode}>
                    {d.navn}
                  </option>
                ))}
                className={styles.breddeSelect}
                readOnly={readOnly}
                disabled={readOnly}
              />
            )}
            {readOnly && vilkarType && (
              <div className={styles.vilkarTypeReadOnly}>
                <Label size="small" as="span">
                  {vilkarTypes.find(d => d.kode === vilkarType)?.navn}
                </Label>
                {hasValue(adopsjon.omsorgsovertakelseVilkårType) && <EditedIcon />}
              </div>
            )}
            <BodyShort size="small">{getDescriptionText(vilkarType)}</BodyShort>
          </VStack>
        </FaktaGruppe>
      )}
    </VStack>
  );
};

OmsorgOgForeldreansvarFaktaForm.buildInitialValues = (
  soknad: Soknad,
  adopsjon: AdopsjonFamilieHendelse,
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder: InntektArbeidYtelse['innvilgetRelatertTilgrensendeYtelserForAnnenForelder'],
  alleKodeverk: AlleKodeverk,
): OmsorgOgForeldreansvarFormValues => ({
  vilkarType: adopsjon.omsorgsovertakelseVilkårType,
  ...OmsorgsovertakelseFaktaPanel.buildInitialValues(adopsjon),
  ...RettighetFaktaPanel.buildInitialValues(soknad, innvilgetRelatertTilgrensendeYtelserForAnnenForelder, alleKodeverk),
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
