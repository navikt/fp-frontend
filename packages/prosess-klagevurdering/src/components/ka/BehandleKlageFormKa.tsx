import React, { FunctionComponent, useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Undertittel } from 'nav-frontend-typografi';
import { useForm } from 'react-hook-form';

import { Form } from '@fpsak-frontend/form-hooks';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import klageVurderingType from '@fpsak-frontend/kodeverk/src/klageVurdering';
import { ProsessStegSubmitButtonNew } from '@fpsak-frontend/prosess-felles';
import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@fpsak-frontend/shared-components';
import {
  KlageVurdering, Kodeverk, AlleKodeverk, KlageVurderingResultat,
} from '@fpsak-frontend/types';
import { KlageVurderingResultatAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import KlageVurderingRadioOptionsKa from './KlageVurderingRadioOptionsKa';
import FritekstBrevTextField from '../felles/FritekstKlageBrevTextField';
import PreviewKlageLink, { BrevData } from '../felles/PreviewKlageLink';
import TempsaveKlageButton, { TransformedValues } from '../felles/TempsaveKlageButton';

import styles from './behandleKlageFormKa.less';

const transformValues = (values: FormValues): KlageVurderingResultatAp => ({
  klageMedholdArsak: (values.klageVurdering.kode === klageVurderingType.MEDHOLD_I_KLAGE
    || values.klageVurdering.kode === klageVurderingType.OPPHEVE_YTELSESVEDTAK) ? values.klageMedholdArsak : null,
  klageVurderingOmgjoer: values.klageVurdering.kode === klageVurderingType.MEDHOLD_I_KLAGE ? values.klageVurderingOmgjoer : null,
  klageVurdering: values.klageVurdering,
  fritekstTilBrev: values.fritekstTilBrev,
  begrunnelse: values.begrunnelse,
  kode: aksjonspunktCodes.BEHANDLE_KLAGE_NK,
});

type FormValues = {
  begrunnelse?: string;
  fritekstTilBrev?: string;
  klageVurdering?: Kodeverk;
  klageVurderingOmgjoer?: Kodeverk;
  klageMedholdArsak?: Kodeverk;
};

const buildInitialValues = (klageVurderingResultat?: KlageVurderingResultat): FormValues => ({
  klageMedholdArsak: klageVurderingResultat ? klageVurderingResultat.klageMedholdArsak : null,
  klageVurderingOmgjoer: klageVurderingResultat ? klageVurderingResultat.klageVurderingOmgjoer : null,
  klageVurdering: klageVurderingResultat ? klageVurderingResultat.klageVurdering : null,
  begrunnelse: klageVurderingResultat ? klageVurderingResultat.begrunnelse : null,
  fritekstTilBrev: klageVurderingResultat ? klageVurderingResultat.fritekstTilBrev : null,
});

interface OwnProps {
  previewCallback: (data: BrevData) => Promise<any>;
  saveKlage: (data: TransformedValues) => Promise<any>;
  readOnly?: boolean;
  readOnlySubmitButton?: boolean;
  alleKodeverk: AlleKodeverk;
  sprakkode: Kodeverk;
  submitCallback: (data: KlageVurderingResultatAp) => Promise<void>;
  klageVurdering: KlageVurdering;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

/**
 * BehandleklageformNfp
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for behandling av klage (KA).
 */
export const BehandleKlageFormKa: FunctionComponent<OwnProps> = ({
  readOnly,
  klageVurdering,
  saveKlage,
  previewCallback,
  readOnlySubmitButton,
  sprakkode,
  alleKodeverk,
  submitCallback,
  formData,
  setFormData,
}) => {
  const intl = useIntl();
  const initialValues = useMemo(() => buildInitialValues(klageVurdering.klageVurderingResultatNK), [klageVurdering]);
  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });

  const formValues = formMethods.watch();

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setFormData}
    >
      <>
        <Undertittel>{intl.formatMessage({ id: 'Klage.ResolveKlage.Title' })}</Undertittel>
        <VerticalSpacer fourPx />
        <AksjonspunktHelpTextTemp isAksjonspunktOpen={!readOnlySubmitButton}>
          {[<FormattedMessage id="Klage.ResolveKlage.HelpText" key={aksjonspunktCodes.BEHANDLE_KLAGE_NK} />]}
        </AksjonspunktHelpTextTemp>
        <VerticalSpacer sixteenPx />
        <KlageVurderingRadioOptionsKa
          readOnly={readOnly}
          klageVurdering={formValues.klageVurdering}
          medholdReasons={alleKodeverk[kodeverkTyper.KLAGE_MEDHOLD_ARSAK]}
        />
        <div className={styles.confirmVilkarForm}>
          <VerticalSpacer sixteenPx />
          <FritekstBrevTextField
            sprakkode={sprakkode}
            readOnly={readOnly}
          />
          <VerticalSpacer sixteenPx />
          <Row>
            <Column xs="8">
              <ProsessStegSubmitButtonNew
                isReadOnly={readOnly}
                isSubmittable={!readOnlySubmitButton}
                isSubmitting={formMethods.formState.isSubmitting}
                isDirty={formMethods.formState.isDirty}
              />
              {!readOnly && formValues.klageVurdering && formValues.fritekstTilBrev && (formValues.fritekstTilBrev.length > 2)
              && (
                <PreviewKlageLink
                  previewCallback={previewCallback}
                  fritekstTilBrev={formValues.fritekstTilBrev}
                  klageVurdering={formValues.klageVurdering}
                  aksjonspunktCode={aksjonspunktCodes.BEHANDLE_KLAGE_NK}
                />
              )}
            </Column>
            <Column xs="2">
              <TempsaveKlageButton
                saveKlage={saveKlage}
                readOnly={readOnly}
                aksjonspunktCode={aksjonspunktCodes.BEHANDLE_KLAGE_NK}
                handleSubmit={formMethods.handleSubmit}
              />
            </Column>
          </Row>
        </div>
      </>
    </Form>
  );
};

export default BehandleKlageFormKa;
