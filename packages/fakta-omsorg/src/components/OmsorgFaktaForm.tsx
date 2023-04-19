import React, { FunctionComponent, useCallback } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { required } from '@navikt/ft-form-validators';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { FaktaGruppe } from '@navikt/ft-ui-komponenter';
import { AksjonspunktStatus } from '@navikt/ft-kodeverk';

import { AksjonspunktCode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import { Aksjonspunkt, Ytelsefordeling } from '@navikt/fp-types';
import { BekreftOmsorgVurderingAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import styles from './omsorgFaktaForm.module.css';

const { MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG } = AksjonspunktCode;

const getAksjonspunkt = (aksjonspunktCode: string, aksjonspunkter: Aksjonspunkt[]): Aksjonspunkt[] =>
  aksjonspunkter.filter(ap => ap.definisjon === aksjonspunktCode);

export type FormValues = {
  omsorg?: boolean;
};

interface OwnProps {
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  className?: string;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
}

interface StaticFunctions {
  buildInitialValues: (ytelsefordeling: Ytelsefordeling, aksjonspunkter: Aksjonspunkt[]) => FormValues;
  transformOmsorgValues: (values: FormValues) => BekreftOmsorgVurderingAp;
  validate?: (values: FormValues) => any;
}

const OmsorgFaktaForm: FunctionComponent<OwnProps> & StaticFunctions = ({
  aksjonspunkter,
  readOnly,
  className,
  alleMerknaderFraBeslutter,
}) => {
  const intl = useIntl();
  const bTag = useCallback((...chunks: any) => <b>{chunks}</b>, []);

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
            isReadOnly={readOnly}
            isTrueOrFalseSelection
            radios={[
              {
                label: intl.formatMessage({ id: 'OmsorgFaktaForm.HarOmsorg' }),
                value: 'true',
              },
              {
                label: <FormattedMessage id="OmsorgFaktaForm.HarIkkeOmsorg" values={{ b: bTag }} />,
                value: 'false',
              },
            ]}
          />
        </FaktaGruppe>
      )}
    </div>
  );
};

OmsorgFaktaForm.buildInitialValues = (ytelsefordeling: Ytelsefordeling, aksjonspunkter: Aksjonspunkt[]): FormValues => {
  const omsorgAp = getAksjonspunkt(MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG, aksjonspunkter);
  let omsorg;

  if (omsorgAp.length > 0 && omsorgAp[0].status !== AksjonspunktStatus.OPPRETTET) {
    omsorg = ytelsefordeling.overstyrtOmsorg;
  }

  return {
    omsorg,
  };
};

OmsorgFaktaForm.transformOmsorgValues = (values: FormValues): BekreftOmsorgVurderingAp => ({
  kode: MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG,
  omsorg: values.omsorg || false,
});

export default OmsorgFaktaForm;
