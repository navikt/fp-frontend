import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { type FaktaBegrunnelseFormValues, FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, AksjonspunktStatus } from '@navikt/fp-kodeverk';
import type {
  AdopsjonFamilieHendelse,
  Aksjonspunkt,
  tjenester_behandling_søknad_SoknadAdopsjonDto,
} from '@navikt/fp-types';
import type {
  BekreftDokumentertDatoAksjonspunktAp,
  BekreftEktefelleAksjonspunktAp,
  BekreftMannAdoptererAksjonspunktAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';
import { harAksjonspunkt, useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { DokumentasjonFaktaForm, type FormValues as DokFormValues } from './DokumentasjonFaktaForm';
import { EktefelleFaktaForm, type FormValues as EktefelleFormValues } from './EktefelleFaktaForm';
import { type FormValues as MannAdoptererFormValues, MannAdoptererAleneFaktaForm } from './MannAdoptererAleneFaktaForm';

const { OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE, OM_ADOPSJON_GJELDER_EKTEFELLES_BARN } = AksjonspunktKode;

type FormValues = EktefelleFormValues & DokFormValues & MannAdoptererFormValues & FaktaBegrunnelseFormValues;

type AksjonspunktData =
  | BekreftEktefelleAksjonspunktAp
  | BekreftDokumentertDatoAksjonspunktAp
  | BekreftMannAdoptererAksjonspunktAp;

interface Props {
  isForeldrepengerFagsak: boolean;
  soknad: tjenester_behandling_søknad_SoknadAdopsjonDto;
  adopsjon: AdopsjonFamilieHendelse;
}

/**
 * AdopsjonInfoPanel
 *
 * Har ansvar for å sette opp formen for faktapenelet til Adopsjonsvilkåret.
 */
export const AdopsjonInfoPanel = ({ isForeldrepengerFagsak, soknad, adopsjon }: Props) => {
  const {
    alleKodeverk,
    submitCallback,
    aksjonspunkterForPanel,
    harÅpentAksjonspunkt,
    alleMerknaderFraBeslutter,
    isReadOnly,
    isSubmittable,
  } = usePanelDataContext<AksjonspunktData[]>();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const ektefellesBarnAP = aksjonspunkterForPanel.find(ap => ap.definisjon === OM_ADOPSJON_GJELDER_EKTEFELLES_BARN);
  const mannAdoptererAleneAP = aksjonspunkterForPanel.find(
    ap => ap.definisjon === OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE,
  );

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? buildInitialValues(adopsjon, aksjonspunkterForPanel),
  });

  const begrunnelse = formMethods.watch('begrunnelse');

  const onSubmit = (values: FormValues) => submitCallback(transformValues(values, aksjonspunkterForPanel));

  return (
    <VStack gap="space-16">
      <AksjonspunktHelpTextHTML>
        {harÅpentAksjonspunkt && <FormattedMessage key="KontrollerMotDok" id="AdopsjonInfoPanel.KontrollerMotDok" />}
        {ektefellesBarnAP?.status === AksjonspunktStatus.OPPRETTET && (
          <FormattedMessage id="AdopsjonInfoPanel.VurderOmEktefellesBarn" />
        )}
        {mannAdoptererAleneAP?.status === AksjonspunktStatus.OPPRETTET && (
          <FormattedMessage id="AdopsjonInfoPanel.VurderOmMannAdoptererAlene" />
        )}
      </AksjonspunktHelpTextHTML>

      <RhfForm formMethods={formMethods} onSubmit={onSubmit} setDataOnUnmount={setMellomlagretFormData}>
        <VStack gap="space-24">
          <DokumentasjonFaktaForm
            readOnly={isReadOnly}
            soknad={soknad}
            adopsjon={adopsjon}
            erForeldrepengerFagsak={isForeldrepengerFagsak}
            alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
            hasEktefellesBarnAksjonspunkt={harAksjonspunkt(OM_ADOPSJON_GJELDER_EKTEFELLES_BARN, aksjonspunkterForPanel)}
          />

          {ektefellesBarnAP && (
            <EktefelleFaktaForm
              readOnly={isReadOnly}
              alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
              adopsjon={adopsjon}
            />
          )}
          {mannAdoptererAleneAP && (
            <MannAdoptererAleneFaktaForm
              farSokerType={soknad.farSokerType ?? undefined}
              readOnly={isReadOnly}
              adopsjon={adopsjon}
              alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
              alleKodeverk={alleKodeverk}
            />
          )}
          {aksjonspunkterForPanel.length > 0 && (
            <>
              <FaktaBegrunnelseTextField
                control={formMethods.control}
                isSubmittable={isSubmittable}
                isReadOnly={isReadOnly}
                hasBegrunnelse={!!begrunnelse}
              />
              <FaktaSubmitButton
                isSubmittable={isSubmittable}
                isReadOnly={isReadOnly}
                isSubmitting={formMethods.formState.isSubmitting}
                isDirty={formMethods.formState.isDirty}
              />
            </>
          )}
        </VStack>
      </RhfForm>
    </VStack>
  );
};

const buildInitialValues = (adopsjon: AdopsjonFamilieHendelse, aksjonspunkterForPanel: Aksjonspunkt[]): FormValues => {
  const ektefellesBarnAP = harAksjonspunkt(OM_ADOPSJON_GJELDER_EKTEFELLES_BARN, aksjonspunkterForPanel);
  const mannAdoptererAleneAP = harAksjonspunkt(OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE, aksjonspunkterForPanel);

  return {
    ...DokumentasjonFaktaForm.initialValues(adopsjon),
    ...(ektefellesBarnAP ? EktefelleFaktaForm.buildInitialValues(adopsjon) : {}),
    ...(mannAdoptererAleneAP ? MannAdoptererAleneFaktaForm.buildInitialValues(adopsjon) : {}),
    ...FaktaBegrunnelseTextField.initialValues(aksjonspunkterForPanel[0]),
  };
};

const transformValues = (values: FormValues, aksjonspunkterForPanel: Aksjonspunkt[]): AksjonspunktData[] => {
  const ektefellesBarnAP = harAksjonspunkt(OM_ADOPSJON_GJELDER_EKTEFELLES_BARN, aksjonspunkterForPanel);
  const mannAdoptererAleneAP = harAksjonspunkt(OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE, aksjonspunkterForPanel);

  const aksjonspunkterArray: AksjonspunktData[] = [
    DokumentasjonFaktaForm.transformValues(values),
    ...(ektefellesBarnAP && values.ektefellesBarn !== undefined
      ? [EktefelleFaktaForm.transformValues(values.ektefellesBarn)]
      : []),
    ...(mannAdoptererAleneAP && values.mannAdoptererAlene !== undefined
      ? [MannAdoptererAleneFaktaForm.transformValues(values.mannAdoptererAlene)]
      : []),
  ];

  return aksjonspunkterArray.map(ap => ({
    ...ap,
    begrunnelse: values.begrunnelse,
  }));
};
