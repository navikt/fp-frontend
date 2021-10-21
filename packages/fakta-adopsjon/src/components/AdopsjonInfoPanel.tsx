import React, { FunctionComponent, ReactElement, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Column, Row } from 'nav-frontend-grid';

import {
  FaktaBegrunnelseTextFieldNew, FaktaSubmitButtonNew, isFieldEdited, FieldEditedInfo, FaktaBegrunnelseFormValues,
} from '@fpsak-frontend/fakta-felles';
import {
  Aksjonspunkt, FamilieHendelse, AlleKodeverk, Soknad,
} from '@fpsak-frontend/types';
import {
  VerticalSpacer, AksjonspunktHelpTextTemp,
} from '@fpsak-frontend/shared-components';
import aksjonspunktCodes, { hasAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Form } from '@fpsak-frontend/form-hooks';
import {
  BekreftDokumentertDatoAksjonspunktAp, BekreftEktefelleAksjonspunktAp, BekreftMannAdoptererAksjonspunktAp,
} from '@fpsak-frontend/types-avklar-aksjonspunkter';

import MannAdoptererAleneFaktaForm, { FormValues as MannAdoptererFormValues } from './MannAdoptererAleneFaktaForm';
import EktefelleFaktaForm, { FormValues as EktefelleFormValues } from './EktefelleFaktaForm';
import DokumentasjonFaktaForm, { FormValues as DokFormValues } from './DokumentasjonFaktaForm';

const { ADOPSJONSDOKUMENTAJON, OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE, OM_ADOPSJON_GJELDER_EKTEFELLES_BARN } = aksjonspunktCodes;
const adopsjonAksjonspunkter = [OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE, ADOPSJONSDOKUMENTAJON, OM_ADOPSJON_GJELDER_EKTEFELLES_BARN];

const getHelpTexts = (aksjonspunkter: Aksjonspunkt[]): ReactElement[] => {
  const helpTexts = [
    <FormattedMessage key="KontrollerMotDok" id="AdopsjonInfoPanel.KontrollerMotDok" />,
  ];

  if (hasAksjonspunkt(OM_ADOPSJON_GJELDER_EKTEFELLES_BARN, aksjonspunkter)) {
    helpTexts.push(<FormattedMessage key="VurderOmEktefellesBarn" id="AdopsjonInfoPanel.VurderOmEktefellesBarn" />);
  }
  if (hasAksjonspunkt(OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE, aksjonspunkter)) {
    helpTexts.push(<FormattedMessage key="VurderOmMannAdoptererAlene" id="AdopsjonInfoPanel.VurderOmMannAdoptererAlene" />);
  }
  return helpTexts;
};

const buildInitialValues = (
  soknad: Soknad,
  familiehendelse: FamilieHendelse,
  allAksjonspunkter: Aksjonspunkt[],
): FormValues => {
  const aksjonspunkter = allAksjonspunkter.filter((ap) => adopsjonAksjonspunkter.some((kode) => kode === ap.definisjon.kode));

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
    ...FaktaBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkter[0]),
  };
};

const transformValues = (values: FormValues, aksjonspunkter: Aksjonspunkt[]): AksjonspunktData => {
  const aksjonspunkterArray = [] as AksjonspunktData;
  aksjonspunkterArray.push(DokumentasjonFaktaForm.transformValues(values));

  if (hasAksjonspunkt(OM_ADOPSJON_GJELDER_EKTEFELLES_BARN, aksjonspunkter)) {
    aksjonspunkterArray.push(EktefelleFaktaForm.transformValues(values.ektefellesBarn));
  }
  if (hasAksjonspunkt(OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE, aksjonspunkter)) {
    aksjonspunkterArray.push(MannAdoptererAleneFaktaForm.transformValues(values.mannAdoptererAlene));
  }

  return aksjonspunkterArray.map((ap) => ({
    ...ap,
    begrunnelse: values.begrunnelse,
  }));
};

const getEditedStatus = (soknad: Soknad, gjeldendeFamiliehendelse: FamilieHendelse): FieldEditedInfo => (
  isFieldEdited(soknad, gjeldendeFamiliehendelse)
);

type FormValues = EktefelleFormValues & DokFormValues & MannAdoptererFormValues & FaktaBegrunnelseFormValues;

type AksjonspunktData = Array<BekreftEktefelleAksjonspunktAp | BekreftDokumentertDatoAksjonspunktAp | BekreftMannAdoptererAksjonspunktAp>;

interface OwnProps {
  aksjonspunkter: Aksjonspunkt[];
  submittable: boolean;
  readOnly: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  alleKodeverk: AlleKodeverk;
  hasOpenAksjonspunkter: boolean;
  isForeldrepengerFagsak: boolean;
  soknad: Soknad;
  gjeldendeFamiliehendelse: FamilieHendelse;
  submitCallback: (aksjonspunktData: AksjonspunktData) => Promise<void>;
  formData?: FormValues,
  setFormData: (data: FormValues) => void,
}

/**
 * AdopsjonInfoPanel
 *
 * Har ansvar for å sette opp formen for faktapenelet til Adopsjonsvilkåret.
 */
const AdopsjonInfoPanel: FunctionComponent<OwnProps> = ({
  aksjonspunkter,
  hasOpenAksjonspunkter,
  submittable,
  readOnly,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  isForeldrepengerFagsak,
  submitCallback,
  soknad,
  gjeldendeFamiliehendelse,
  formData,
  setFormData,
}) => {
  const formMethods = useForm<FormValues>({
    defaultValues: formData || buildInitialValues(soknad, gjeldendeFamiliehendelse, aksjonspunkter),
  });

  const begrunnelse = formMethods.watch('begrunnelse');

  const editedStatus = useMemo(() => getEditedStatus(soknad, gjeldendeFamiliehendelse), [soknad, gjeldendeFamiliehendelse]);

  return (
    <>
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={hasOpenAksjonspunkter}>
        {getHelpTexts(aksjonspunkter)}
      </AksjonspunktHelpTextTemp>
      <Form
        formMethods={formMethods}
        onSubmit={(values: FormValues): Promise<any> => submitCallback(transformValues(values, aksjonspunkter))}
        setDataOnUnmount={setFormData}
      >
        <VerticalSpacer eightPx />
        <Row>
          <Column xs="6">
            <DokumentasjonFaktaForm
              readOnly={readOnly}
              editedStatus={editedStatus}
              erForeldrepengerFagsak={isForeldrepengerFagsak}
              alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
              hasEktefellesBarnAksjonspunkt={hasAksjonspunkt(
                OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
                aksjonspunkter,
              )}
            />
          </Column>
          <Column xs="6">
            {hasAksjonspunkt(OM_ADOPSJON_GJELDER_EKTEFELLES_BARN, aksjonspunkter) && (
              <EktefelleFaktaForm
                readOnly={readOnly}
                alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
                ektefellesBarnIsEdited={editedStatus.ektefellesBarn}
              />
            )}
            {hasAksjonspunkt(OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE, aksjonspunkter) && (
              <MannAdoptererAleneFaktaForm
                farSokerType={soknad.farSokerType}
                readOnly={readOnly}
                mannAdoptererAlene={editedStatus.mannAdoptererAlene}
                alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
                alleKodeverk={alleKodeverk}
              />
            )}
          </Column>
        </Row>
        {aksjonspunkter && aksjonspunkter.length > 0 && (
          <>
            <VerticalSpacer twentyPx />
            <FaktaBegrunnelseTextFieldNew
              isSubmittable={submittable}
              isReadOnly={readOnly}
              hasBegrunnelse={!!begrunnelse}
            />
            <VerticalSpacer twentyPx />
            <FaktaSubmitButtonNew
              isSubmittable={submittable}
              isReadOnly={readOnly}
              hasOpenAksjonspunkter={hasOpenAksjonspunkter}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
            />
          </>
        )}
      </Form>
    </>
  );
};

export default AdopsjonInfoPanel;
