import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst } from 'nav-frontend-typografi';
import { required } from '@navikt/ft-form-validators';
import { formHooks, RadioGroupField, RadioOption } from '@navikt/ft-form-hooks';
import { ArrowBox, FaktaGruppe } from '@navikt/ft-ui-komponenter';

import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes, { hasAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Aksjonspunkt, Ytelsefordeling } from '@fpsak-frontend/types';
import { BekreftOmsorgVurderingAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import IkkeOmsorgPeriodeField from './IkkeOmsorgPeriodeField';

import styles from './omsorgFaktaForm.less';

const { MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG } = aksjonspunktCodes;

const getAksjonspunkt = (
  aksjonspunktCode: string,
  aksjonspunkter: Aksjonspunkt[],
): Aksjonspunkt[] => aksjonspunkter.filter((ap) => ap.definisjon === aksjonspunktCode);

export type FormValues = {
  omsorg?: boolean;
  ikkeOmsorgPerioder?: Ytelsefordeling['ikkeOmsorgPerioder'];
}

interface OwnProps {
  ytelsefordeling: Ytelsefordeling;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  className?: string;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

interface StaticFunctions {
  buildInitialValues?: (ytelsefordeling: Ytelsefordeling, aksjonspunkter: Aksjonspunkt[]) => FormValues;
  transformOmsorgValues?: (values: FormValues) => BekreftOmsorgVurderingAp;
  validate?: (values: FormValues) => any;
}

const OmsorgFaktaForm: FunctionComponent<OwnProps> & StaticFunctions = ({
  aksjonspunkter,
  readOnly,
  className,
  ytelsefordeling,
  alleMerknaderFraBeslutter,
}) => {
  const intl = useIntl();

  const { watch } = formHooks.useFormContext<FormValues>();
  const omsorg = watch('omsorg');

  const omsorgIsEdited = !!ytelsefordeling.ikkeOmsorgPerioder;

  return (
    <div className={className || styles.defaultAleneOmsorgFakta}>
      {hasAksjonspunkt(MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG, aksjonspunkter) && (
        <FaktaGruppe
          withoutBorder
          merknaderFraBeslutter={alleMerknaderFraBeslutter[MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG]}
        >
          <Normaltekst className={styles.paddingBottom}>
            <FormattedMessage id="OmsorgFaktaForm.OppgittOmsorg" />
          </Normaltekst>
          <RadioGroupField
            name="omsorg"
            readOnly={readOnly}
            validate={[required]}
            isEdited={omsorgIsEdited}
            parse={(value: string) => value === 'true'}
          >
            <RadioOption label={intl.formatMessage({ id: 'OmsorgFaktaForm.HarOmsorg' })} value="true" />
            <RadioOption
              label={(
                <FormattedMessage
                  id="OmsorgFaktaForm.HarIkkeOmsorg"
                  values={{
                    b: (chunks: any) => <b>{chunks}</b>,
                  }}
                />
              )}
              value="false"
            />
          </RadioGroupField>
          {omsorg === false ? (
            <Row>
              <Column xs="2" />
              <Column xs="6">
                <ArrowBox alignOffset={40}>
                  <IkkeOmsorgPeriodeField readOnly={readOnly} />
                </ArrowBox>
              </Column>
            </Row>
          ) : null}
        </FaktaGruppe>
      )}
    </div>
  );
};

OmsorgFaktaForm.buildInitialValues = (ytelsefordeling: Ytelsefordeling, aksjonspunkter: Aksjonspunkt[]): FormValues => {
  const omsorgAp = getAksjonspunkt(MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG, aksjonspunkter);
  let omsorg = null;

  if (omsorgAp.length > 0 && !isAksjonspunktOpen(omsorgAp[0].status)) {
    omsorg = !(ytelsefordeling.ikkeOmsorgPerioder && ytelsefordeling.ikkeOmsorgPerioder.length > 0);
  }

  return {
    omsorg,
    ikkeOmsorgPerioder: ytelsefordeling.ikkeOmsorgPerioder && ytelsefordeling.ikkeOmsorgPerioder.length > 0
      ? ytelsefordeling.ikkeOmsorgPerioder : [{
        periodeFom: undefined,
        periodeTom: undefined,
      }],
  };
};

OmsorgFaktaForm.transformOmsorgValues = (values: FormValues): BekreftOmsorgVurderingAp => ({
  kode: MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG,
  omsorg: values.omsorg,
  ikkeOmsorgPerioder: values.ikkeOmsorgPerioder && values.ikkeOmsorgPerioder.length > 0 ? values.ikkeOmsorgPerioder : null,
});

export default OmsorgFaktaForm;
