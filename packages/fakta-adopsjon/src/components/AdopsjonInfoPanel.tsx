import React, { FunctionComponent, ReactElement, useCallback, useMemo } from 'react';
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
import { Aksjonspunkt, AlleKodeverk, FamilieHendelse, Soknad } from '@navikt/fp-types';
import {
  BekreftDokumentertDatoAksjonspunktAp,
  BekreftEktefelleAksjonspunktAp,
  BekreftMannAdoptererAksjonspunktAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';
import { useFormData } from '@navikt/fp-utils';

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

interface OwnProps {
  aksjonspunkter: Aksjonspunkt[];
  submittable: boolean;
  readOnly: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  alleKodeverk: AlleKodeverk;
  hasOpenAksjonspunkter: boolean;
  isForeldrepengerFagsak: boolean;
  soknad: Soknad;
  gjeldendeFamiliehendelse: FamilieHendelse;
  submitCallback: (aksjonspunktData: AksjonspunktData) => Promise<void>;
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
}) => {
  const { formData, setFormData } = useFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: formData || buildInitialValues(soknad, gjeldendeFamiliehendelse, aksjonspunkter),
  });

  const begrunnelse = formMethods.watch('begrunnelse');

  const editedStatus = useMemo(
    () => getEditedStatus(soknad, gjeldendeFamiliehendelse),
    [soknad, gjeldendeFamiliehendelse],
  );

  const onSubmit = useCallback(
    (values: FormValues): Promise<any> => submitCallback(transformValues(values, aksjonspunkter)),
    [submitCallback, aksjonspunkter],
  );

  return (
    <>
      {hasOpenAksjonspunkter && <AksjonspunktHelpTextHTML>{getHelpTexts(aksjonspunkter)}</AksjonspunktHelpTextHTML>}
      <Form formMethods={formMethods} onSubmit={onSubmit} setDataOnUnmount={setFormData}>
        <VerticalSpacer eightPx />
        <HStack gap="4" wrap>
          <div className={styles.leftCol}>
            <DokumentasjonFaktaForm
              readOnly={readOnly}
              editedStatus={editedStatus}
              erForeldrepengerFagsak={isForeldrepengerFagsak}
              alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
              hasEktefellesBarnAksjonspunkt={hasAksjonspunkt(OM_ADOPSJON_GJELDER_EKTEFELLES_BARN, aksjonspunkter)}
            />
          </div>
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
        </HStack>
        {aksjonspunkter && aksjonspunkter.length > 0 && (
          <>
            <VerticalSpacer twentyPx />
            <FaktaBegrunnelseTextField
              isSubmittable={submittable}
              isReadOnly={readOnly}
              hasBegrunnelse={!!begrunnelse}
            />
            <VerticalSpacer twentyPx />
            <FaktaSubmitButton
              isSubmittable={submittable}
              isReadOnly={readOnly}
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
