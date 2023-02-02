import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { required } from '@navikt/ft-form-validators';
import { formHooks, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { ArrowBox, FaktaGruppe, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { isAksjonspunktOpen } from '@navikt/fp-kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes, { hasAksjonspunkt } from '@navikt/fp-kodeverk/src/aksjonspunktCodes';
import { Aksjonspunkt, Ytelsefordeling } from '@navikt/fp-types';
import { BekreftOmsorgVurderingAp } from '@navikt/fp-types-avklar-aksjonspunkter';

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
          <RadioGroupPanel
            name="omsorg"
            label={<FormattedMessage id="OmsorgFaktaForm.OppgittOmsorg" />}
            validate={[required]}
            isEdited={omsorgIsEdited}
            isReadOnly={readOnly}
            isTrueOrFalseSelection
            radios={[{
              label: intl.formatMessage({ id: 'OmsorgFaktaForm.HarOmsorg' }),
              value: 'true',
            }, {
              label: <FormattedMessage
                id="OmsorgFaktaForm.HarIkkeOmsorg"
                values={{
                  b: (chunks: any) => <b>{chunks}</b>,
                }}
              />,
              value: 'false',
            }]}
          />
          {omsorg === false && (
            <div className={styles.arrowBoxWidth}>
              <VerticalSpacer eightPx />
              <ArrowBox>
                <IkkeOmsorgPeriodeField readOnly={readOnly} />
              </ArrowBox>
            </div>
          )}
        </FaktaGruppe>
      )}
    </div>
  );
};

OmsorgFaktaForm.buildInitialValues = (ytelsefordeling: Ytelsefordeling, aksjonspunkter: Aksjonspunkt[]): FormValues => {
  const omsorgAp = getAksjonspunkt(MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG, aksjonspunkter);
  let omsorg = null;

  if (omsorgAp.length > 0 && !isAksjonspunktOpen(omsorgAp[0].status)) {
    omsorg = ytelsefordeling.overstyrtOmsorg;
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
