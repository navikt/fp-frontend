import React, { FunctionComponent, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { Hovedknapp } from 'nav-frontend-knapper';
import { Form, TextAreaField } from '@navikt/ft-form-hooks';
import { decodeHtmlEntity } from '@navikt/ft-utils';
import {
  hasValidText, maxLength, minLength, required,
} from '@navikt/ft-form-validators';
import { Element } from 'nav-frontend-typografi';
import { FaktaGruppe, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Aksjonspunkt } from '@navikt/ft-types';
import { Ytelsefordeling } from '@fpsak-frontend/types';
import { AvklarAnnenforelderHarRettAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import Boks from '../Boks';
import HarAnnenForelderRettFelter from './HarAnnenForelderRettFelter';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

export type FormValues = {
  harAnnenForelderRett: boolean;
  mottarAnnenForelderUforetrygd?: boolean;
  begrunnelse: string;
}

interface OwnProps {
  ytelsefordeling: Ytelsefordeling;
  aksjonspunkt: Aksjonspunkt;
  readOnly: boolean;
  formData?: FormValues,
  setFormData: (data: FormValues) => void,
  lagreCallback: (aksjonspunktData: AvklarAnnenforelderHarRettAp) => Promise<void>;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

const HarAnnenForelderRettForm: FunctionComponent<OwnProps> = ({
  ytelsefordeling,
  readOnly,
  aksjonspunkt,
  formData,
  setFormData,
  lagreCallback,
  alleMerknaderFraBeslutter,
}) => {
  const formMethods = useForm<FormValues>({
    defaultValues: formData || {
      harAnnenForelderRett: ytelsefordeling?.annenforelderHarRettDto?.annenforelderHarRett,
      mottarAnnenForelderUforetrygd: ytelsefordeling?.annenforelderHarRettDto?.annenforelderMottarUføretrygd,
      begrunnelse: aksjonspunkt.begrunnelse ? decodeHtmlEntity(aksjonspunkt.begrunnelse) : undefined,
    },
  });

  const skalAvklareUforetrygd = ytelsefordeling?.annenforelderHarRettDto?.avklarAnnenforelderMottarUføretrygd
    || ytelsefordeling?.annenforelderHarRettDto?.annenforelderMottarUføretrygd !== null;

  const transformerFeltverdier = useCallback((feltVerdier: FormValues) => lagreCallback({
    kode: AksjonspunktCode.AVKLAR_ANNEN_FORELDER_RETT,
    annenforelderHarRett: feltVerdier.harAnnenForelderRett,
    annenforelderMottarUføretrygd: feltVerdier.mottarAnnenForelderUforetrygd,
    begrunnelse: feltVerdier.begrunnelse,
  }), []);

  return (
    <Form formMethods={formMethods} onSubmit={transformerFeltverdier} setDataOnUnmount={setFormData}>
      <Boks harBorderTop={false}>
        <FaktaGruppe
          withoutBorder
          merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktCode.AVKLAR_ANNEN_FORELDER_RETT]}
        >
          <VerticalSpacer thirtyTwoPx />
          <HarAnnenForelderRettFelter readOnly={readOnly} avklareUforetrygd={skalAvklareUforetrygd} />
          <VerticalSpacer thirtyTwoPx />
          <TextAreaField
            label={<Element><FormattedMessage id="HarAnnenForelderRettForm.Begrunn" /></Element>}
            name="begrunnelse"
            validate={[required, minLength3, maxLength1500, hasValidText]}
            maxLength={1500}
            readOnly={readOnly}
          />
          <VerticalSpacer sixteenPx />
          {!readOnly && (
            <Hovedknapp
              mini
              disabled={!formMethods.formState.isDirty || formMethods.formState.isSubmitting}
              spinner={formMethods.formState.isSubmitting}
            >
              <FormattedMessage id="HarAnnenForelderRettForm.Bekreft" />
            </Hovedknapp>
          )}
        </FaktaGruppe>
      </Boks>
    </Form>
  );
};

export default HarAnnenForelderRettForm;
