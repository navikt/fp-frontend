import React, { FunctionComponent, ReactElement, useCallback, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';

import {
  FaktaBegrunnelseTextFieldNew,
  FaktaSubmitButtonNew,
  isFieldEdited,
  FieldEditedInfo,
  FaktaBegrunnelseFormValues,
} from '@navikt/fp-fakta-felles';
import { Aksjonspunkt, FamilieHendelse, AlleKodeverk, Soknad } from '@navikt/fp-types';
import {
  VerticalSpacer,
  AksjonspunktHelpTextTemp,
  FlexContainer,
  FlexRow,
  FlexColumn,
} from '@navikt/ft-ui-komponenter';
import { AksjonspunktCode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import { Form } from '@navikt/ft-form-hooks';
import {
  BekreftDokumentertDatoAksjonspunktAp,
  BekreftEktefelleAksjonspunktAp,
  BekreftMannAdoptererAksjonspunktAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';

import MannAdoptererAleneFaktaForm, { FormValues as MannAdoptererFormValues } from './MannAdoptererAleneFaktaForm';
import EktefelleFaktaForm, { FormValues as EktefelleFormValues } from './EktefelleFaktaForm';
import DokumentasjonFaktaForm, { FormValues as DokFormValues } from './DokumentasjonFaktaForm';

import styles from './adopsjonInfoPanel.module.css';

const { ADOPSJONSDOKUMENTAJON, OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE, OM_ADOPSJON_GJELDER_EKTEFELLES_BARN } =
  AksjonspunktCode;
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
    ...FaktaBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkter[0]),
  };
};

const transformValues = (values: FormValues, aksjonspunkter: Aksjonspunkt[]): AksjonspunktData => {
  const aksjonspunkterArray = [] as AksjonspunktData;
  aksjonspunkterArray.push(DokumentasjonFaktaForm.transformValues(values));

  if (hasAksjonspunkt(OM_ADOPSJON_GJELDER_EKTEFELLES_BARN, aksjonspunkter) && !!values.ektefellesBarn) {
    aksjonspunkterArray.push(EktefelleFaktaForm.transformValues(values.ektefellesBarn));
  }
  if (hasAksjonspunkt(OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE, aksjonspunkter) && !!values.mannAdoptererAlene) {
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
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
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
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={hasOpenAksjonspunkter}>
        {getHelpTexts(aksjonspunkter)}
      </AksjonspunktHelpTextTemp>
      <Form formMethods={formMethods} onSubmit={onSubmit} setDataOnUnmount={setFormData}>
        <VerticalSpacer eightPx />
        <FlexContainer>
          <FlexRow wrap>
            <FlexColumn className={styles.leftCol}>
              <DokumentasjonFaktaForm
                readOnly={readOnly}
                editedStatus={editedStatus}
                erForeldrepengerFagsak={isForeldrepengerFagsak}
                alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
                hasEktefellesBarnAksjonspunkt={hasAksjonspunkt(OM_ADOPSJON_GJELDER_EKTEFELLES_BARN, aksjonspunkter)}
              />
            </FlexColumn>
            <FlexColumn className={styles.rightCol}>
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
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
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
