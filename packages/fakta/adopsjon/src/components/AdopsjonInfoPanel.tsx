import { type ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { HStack, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { type FaktaBegrunnelseFormValues, FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, FamilieHendelse, Soknad } from '@navikt/fp-types';
import type {
  BekreftDokumentertDatoAksjonspunktAp,
  BekreftEktefelleAksjonspunktAp,
  BekreftMannAdoptererAksjonspunktAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { DokumentasjonFaktaForm, type FormValues as DokFormValues } from './DokumentasjonFaktaForm';
import { EktefelleFaktaForm, type FormValues as EktefelleFormValues } from './EktefelleFaktaForm';
import { type FormValues as MannAdoptererFormValues, MannAdoptererAleneFaktaForm } from './MannAdoptererAleneFaktaForm';

import styles from './adopsjonInfoPanel.module.css';

const { ADOPSJONSDOKUMENTAJON, OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE, OM_ADOPSJON_GJELDER_EKTEFELLES_BARN } =
  AksjonspunktKode;
const adopsjonAksjonspunkter = [
  OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE,
  ADOPSJONSDOKUMENTAJON,
  OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
];

const getHelpTexts = (aksjonspunkter: Aksjonspunkt[]): ReactElement[] => {
  const helpTexts = [<FormattedMessage key="KontrollerMotDok" id="AdopsjonInfoPanel.KontrollerMotDok" />];

  if (hasAksjonspunkt(OM_ADOPSJON_GJELDER_EKTEFELLES_BARN, aksjonspunkter)) {
    helpTexts.push(<FormattedMessage key="VurderOmEktefellesBarn" id="AdopsjonInfoPanel.VurderOmEktefellesBarn" />);
  }
  if (hasAksjonspunkt(OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE, aksjonspunkter)) {
    helpTexts.push(
      <FormattedMessage key="VurderOmMannAdoptererAlene" id="AdopsjonInfoPanel.VurderOmMannAdoptererAlene" />,
    );
  }
  return helpTexts;
};

const buildInitialValues = (
  soknad: Soknad,
  familiehendelse: FamilieHendelse,
  allAksjonspunkter: Aksjonspunkt[],
): FormValues => {
  const aksjonspunkter = allAksjonspunkter.filter(ap => adopsjonAksjonspunkter.some(kode => kode === ap.definisjon));

  let mannAdoptererAleneValues = {};
  if (hasAksjonspunkt(OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE, aksjonspunkter)) {
    mannAdoptererAleneValues = MannAdoptererAleneFaktaForm.buildInitialValues(familiehendelse);
  }
  let omAdopsjonGjelderEktefellesBarn = {};
  if (hasAksjonspunkt(OM_ADOPSJON_GJELDER_EKTEFELLES_BARN, aksjonspunkter)) {
    omAdopsjonGjelderEktefellesBarn = EktefelleFaktaForm.buildInitialValues(familiehendelse);
  }

  return {
    ...DokumentasjonFaktaForm.initialValues(soknad, familiehendelse),
    ...omAdopsjonGjelderEktefellesBarn,
    ...mannAdoptererAleneValues,
    ...FaktaBegrunnelseTextField.initialValues(aksjonspunkter[0]),
  };
};

const transformValues = (values: FormValues, aksjonspunkter: Aksjonspunkt[]): AksjonspunktData[] => {
  const aksjonspunkterArray = new Array<AksjonspunktData>();
  aksjonspunkterArray.push(DokumentasjonFaktaForm.transformValues(values));

  if (hasAksjonspunkt(OM_ADOPSJON_GJELDER_EKTEFELLES_BARN, aksjonspunkter) && values.ektefellesBarn !== undefined) {
    aksjonspunkterArray.push(EktefelleFaktaForm.transformValues(values.ektefellesBarn));
  }
  if (
    hasAksjonspunkt(OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE, aksjonspunkter) &&
    values.mannAdoptererAlene !== undefined
  ) {
    aksjonspunkterArray.push(MannAdoptererAleneFaktaForm.transformValues(values.mannAdoptererAlene));
  }

  return aksjonspunkterArray.map(ap => ({
    ...ap,
    begrunnelse: values['begrunnelse'],
  }));
};

type FormValues = EktefelleFormValues & DokFormValues & MannAdoptererFormValues & FaktaBegrunnelseFormValues;

type AksjonspunktData =
  | BekreftEktefelleAksjonspunktAp
  | BekreftDokumentertDatoAksjonspunktAp
  | BekreftMannAdoptererAksjonspunktAp;

interface Props {
  submittable: boolean;
  isForeldrepengerFagsak: boolean;
  soknad: Soknad;
  gjeldendeFamiliehendelse: FamilieHendelse;
}

/**
 * AdopsjonInfoPanel
 *
 * Har ansvar for å sette opp formen for faktapenelet til Adopsjonsvilkåret.
 */
export const AdopsjonInfoPanel = ({ submittable, isForeldrepengerFagsak, soknad, gjeldendeFamiliehendelse }: Props) => {
  const {
    alleKodeverk,
    submitCallback,
    aksjonspunkterForPanel,
    harÅpentAksjonspunkt,
    alleMerknaderFraBeslutter,
    isReadOnly,
  } = usePanelDataContext<AksjonspunktData[]>();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? buildInitialValues(soknad, gjeldendeFamiliehendelse, aksjonspunkterForPanel),
  });

  const begrunnelse = formMethods.watch('begrunnelse');

  const onSubmit = (values: FormValues) => submitCallback(transformValues(values, aksjonspunkterForPanel));

  return (
    <VStack gap="space-16">
      {harÅpentAksjonspunkt && (
        <AksjonspunktHelpTextHTML>{getHelpTexts(aksjonspunkterForPanel)}</AksjonspunktHelpTextHTML>
      )}
      <RhfForm formMethods={formMethods} onSubmit={onSubmit} setDataOnUnmount={setMellomlagretFormData}>
        <VStack gap="space-24">
          <HStack gap="space-16" wrap>
            <div className={styles.leftCol}>
              <DokumentasjonFaktaForm
                readOnly={isReadOnly}
                soknad={soknad}
                gjeldendeFamiliehendelse={gjeldendeFamiliehendelse}
                erForeldrepengerFagsak={isForeldrepengerFagsak}
                alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
                hasEktefellesBarnAksjonspunkt={hasAksjonspunkt(
                  OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
                  aksjonspunkterForPanel,
                )}
              />
            </div>
            {hasAksjonspunkt(OM_ADOPSJON_GJELDER_EKTEFELLES_BARN, aksjonspunkterForPanel) && (
              <EktefelleFaktaForm
                readOnly={isReadOnly}
                alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
                gjeldendeFamiliehendelse={gjeldendeFamiliehendelse}
              />
            )}
            {hasAksjonspunkt(OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE, aksjonspunkterForPanel) && (
              <MannAdoptererAleneFaktaForm
                farSokerType={soknad.farSokerType ?? undefined}
                readOnly={isReadOnly}
                gjeldendeFamiliehendelse={gjeldendeFamiliehendelse}
                alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
                alleKodeverk={alleKodeverk}
              />
            )}
          </HStack>
          {aksjonspunkterForPanel && aksjonspunkterForPanel.length > 0 && (
            <>
              <FaktaBegrunnelseTextField
                control={formMethods.control}
                isSubmittable={submittable}
                isReadOnly={isReadOnly}
                hasBegrunnelse={!!begrunnelse}
              />
              <FaktaSubmitButton
                isSubmittable={submittable}
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
