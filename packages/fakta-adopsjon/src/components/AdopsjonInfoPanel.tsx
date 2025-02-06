import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { HStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import {
  FaktaBegrunnelseFormValues,
  FaktaBegrunnelseTextField,
  FaktaSubmitButton,
  FieldEditedInfo,
  isFieldEdited,
} from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import { Aksjonspunkt, FamilieHendelse, Soknad } from '@navikt/fp-types';
import {
  BekreftDokumentertDatoAksjonspunktAp,
  BekreftEktefelleAksjonspunktAp,
  BekreftMannAdoptererAksjonspunktAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';
import { useFormData, usePanelDataContext } from '@navikt/fp-utils';

import DokumentasjonFaktaForm, { FormValues as DokFormValues } from './DokumentasjonFaktaForm';
import EktefelleFaktaForm, { FormValues as EktefelleFormValues } from './EktefelleFaktaForm';
import MannAdoptererAleneFaktaForm, { FormValues as MannAdoptererFormValues } from './MannAdoptererAleneFaktaForm';

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
    ...DokumentasjonFaktaForm.buildInitialValues(soknad, familiehendelse),
    ...omAdopsjonGjelderEktefellesBarn,
    ...mannAdoptererAleneValues,
    ...FaktaBegrunnelseTextField.initialValues(aksjonspunkter[0]),
  };
};

const transformValues = (values: FormValues, aksjonspunkter: Aksjonspunkt[]): AksjonspunktData => {
  const aksjonspunkterArray = [] as AksjonspunktData;
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
    begrunnelse: values.begrunnelse,
  }));
};

const getEditedStatus = (soknad: Soknad, gjeldendeFamiliehendelse: FamilieHendelse): FieldEditedInfo =>
  isFieldEdited(soknad, gjeldendeFamiliehendelse);

type FormValues = EktefelleFormValues & DokFormValues & MannAdoptererFormValues & FaktaBegrunnelseFormValues;

type AksjonspunktData = Array<
  BekreftEktefelleAksjonspunktAp | BekreftDokumentertDatoAksjonspunktAp | BekreftMannAdoptererAksjonspunktAp
>;

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
    harÅpneAksjonspunkter,
    alleMerknaderFraBeslutter,
    isReadOnly,
  } = usePanelDataContext<AksjonspunktData>();

  const { formData, setFormData } = useFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: formData || buildInitialValues(soknad, gjeldendeFamiliehendelse, aksjonspunkterForPanel),
  });

  const begrunnelse = formMethods.watch('begrunnelse');

  const editedStatus = getEditedStatus(soknad, gjeldendeFamiliehendelse);

  const onSubmit = (values: FormValues): Promise<any> =>
    submitCallback(transformValues(values, aksjonspunkterForPanel));

  return (
    <>
      {harÅpneAksjonspunkter && (
        <AksjonspunktHelpTextHTML>{getHelpTexts(aksjonspunkterForPanel)}</AksjonspunktHelpTextHTML>
      )}
      <Form formMethods={formMethods} onSubmit={onSubmit} setDataOnUnmount={setFormData}>
        <VerticalSpacer eightPx />
        <HStack gap="4" wrap>
          <div className={styles.leftCol}>
            <DokumentasjonFaktaForm
              readOnly={isReadOnly}
              editedStatus={editedStatus}
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
              ektefellesBarnIsEdited={editedStatus.ektefellesBarn}
            />
          )}
          {hasAksjonspunkt(OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE, aksjonspunkterForPanel) && (
            <MannAdoptererAleneFaktaForm
              farSokerType={soknad.farSokerType}
              readOnly={isReadOnly}
              mannAdoptererAlene={editedStatus.mannAdoptererAlene}
              alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
              alleKodeverk={alleKodeverk}
            />
          )}
        </HStack>
        {aksjonspunkterForPanel && aksjonspunkterForPanel.length > 0 && (
          <>
            <VerticalSpacer twentyPx />
            <FaktaBegrunnelseTextField
              isSubmittable={submittable}
              isReadOnly={isReadOnly}
              hasBegrunnelse={!!begrunnelse}
            />
            <VerticalSpacer twentyPx />
            <FaktaSubmitButton
              isSubmittable={submittable}
              isReadOnly={isReadOnly}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
            />
          </>
        )}
      </Form>
    </>
  );
};
