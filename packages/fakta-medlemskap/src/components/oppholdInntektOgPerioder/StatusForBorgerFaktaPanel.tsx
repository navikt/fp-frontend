import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Undertekst } from 'nav-frontend-typografi';

import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { ArrowBox, VerticalSpacer, FaktaGruppe } from '@fpsak-frontend/shared-components';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { RadioGroupField, RadioOption, behandlingFormValueSelector } from '@fpsak-frontend/form';
import { required } from '@fpsak-frontend/utils';
import { Aksjonspunkt, MedlemPeriode } from '@fpsak-frontend/types';

import useIntl from '../../useIntl';

export type PeriodeMedId = MedlemPeriode & { id: string; }

export type FormValues = {
  oppholdsrettVurdering?: boolean;
  lovligOppholdVurdering?: boolean;
  erEosBorger?: boolean;
  isBorgerAksjonspunktClosed?: boolean;
  apKode?: string;
}

type TransformedValues = {
  kode: string;
  oppholdsrettVurdering: boolean;
  lovligOppholdVurdering: boolean;
  erEosBorger: boolean;
}

interface PureOwnProps {
  id: string;
  behandlingId: number;
  behandlingVersjon: number;
  readOnly: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

interface MappedOwnProps {
  erEosBorger?: boolean;
  isBorgerAksjonspunktClosed: boolean;
  apKode: string;
}

interface StaticFunctions {
  buildInitialValues?: (periode: PeriodeMedId, aksjonspunkter: Aksjonspunkt[]) => FormValues;
  transformValues?: (values: FormValues, aksjonspunkter: Aksjonspunkt[]) => TransformedValues;
}

/**
 * StatusForBorgerFaktaPanel
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for avklaring av borgerstatus (Medlemskapsvilkåret).
 */
const StatusForBorgerFaktaPanelImpl: FunctionComponent<PureOwnProps & MappedOwnProps> & StaticFunctions = ({
  readOnly,
  erEosBorger,
  isBorgerAksjonspunktClosed,
  apKode,
  alleMerknaderFraBeslutter,
}) => {
  const intl = useIntl();
  return (
    <FaktaGruppe
      title={intl.formatMessage({ id: 'StatusForBorgerFaktaPanel.ApplicationInformation' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[apKode]}
    >
      <RadioGroupField name="erEosBorger" validate={[required]} readOnly={readOnly}>
        <RadioOption label={{ id: 'StatusForBorgerFaktaPanel.CitizenEEA' }} value />
        <RadioOption label={{ id: 'StatusForBorgerFaktaPanel.CitizenOutsideEEA' }} value={false} />
      </RadioGroupField>

      {erEosBorger && (
        <>
          <ArrowBox>
            <Undertekst>
              <FormattedMessage id="StatusForBorgerFaktaPanel.Oppholdsrett" />
            </Undertekst>
            <VerticalSpacer fourPx />
            <RadioGroupField
              name="oppholdsrettVurdering"
              validate={[required]}
              readOnly={readOnly}
              isEdited={isBorgerAksjonspunktClosed}
            >
              <RadioOption label={{ id: 'StatusForBorgerFaktaPanel.HarOppholdsrett' }} value />
              <RadioOption
                label={(
                  <FormattedMessage
                    id="StatusForBorgerFaktaPanel.HarIkkeOppholdsrett"
                    values={{
                      b: (chunks: any) => <b>{chunks}</b>,
                    }}
                  />
                )}
                value={false}
              />
            </RadioGroupField>
          </ArrowBox>
        </>
      )}
      {erEosBorger === false && (
        <>
          <ArrowBox alignOffset={130}>
            <Undertekst>
              <FormattedMessage id="StatusForBorgerFaktaPanel.LovligOpphold" />
            </Undertekst>
            <VerticalSpacer fourPx />
            <RadioGroupField
              name="lovligOppholdVurdering"
              validate={[required]}
              readOnly={readOnly}
              isEdited={isBorgerAksjonspunktClosed}
            >
              <RadioOption label={{ id: 'StatusForBorgerFaktaPanel.HarLovligOpphold' }} value />
              <RadioOption
                label={(
                  <FormattedMessage
                    id="StatusForBorgerFaktaPanel.HarIkkeLovligOpphold"
                    values={{
                      b: (chunks: any) => <b>{chunks}</b>,
                    }}
                  />
                )}
                value={false}
              />
            </RadioGroupField>
          </ArrowBox>
        </>
      )}
    </FaktaGruppe>
  );
};

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  ...behandlingFormValueSelector(`OppholdInntektOgPeriodeForm-${ownProps.id}`, ownProps.behandlingId, ownProps.behandlingVersjon)(state,
    'erEosBorger', 'isBorgerAksjonspunktClosed', 'apKode'),
});

const StatusForBorgerFaktaPanel = connect(mapStateToProps)(StatusForBorgerFaktaPanelImpl);

const getApKode = (aksjonspunkter: Aksjonspunkt[]): string => aksjonspunkter
  .map((ap) => ap.definisjon.kode)
  .filter((kode) => kode === aksjonspunktCodes.AVKLAR_OPPHOLDSRETT || kode === aksjonspunktCodes.AVKLAR_LOVLIG_OPPHOLD)[0];

const getEosBorger = (periode: PeriodeMedId, aksjonspunkter: Aksjonspunkt[]): boolean => (periode.erEosBorger || periode.erEosBorger === false
  ? periode.erEosBorger
  : aksjonspunkter.some((ap: Aksjonspunkt) => ap.definisjon.kode === aksjonspunktCodes.AVKLAR_OPPHOLDSRETT));

const getOppholdsrettVurdering = (periode: PeriodeMedId): boolean | undefined => (periode.oppholdsrettVurdering
|| periode.oppholdsrettVurdering === false ? periode.oppholdsrettVurdering : undefined);

const getLovligOppholdVurdering = (periode: PeriodeMedId): boolean | undefined => (periode.lovligOppholdVurdering || periode.lovligOppholdVurdering === false
  ? periode.lovligOppholdVurdering : undefined);

StatusForBorgerFaktaPanel.buildInitialValues = (periode: PeriodeMedId, aksjonspunkter: Aksjonspunkt[]): FormValues => {
  const erEosBorger = getEosBorger(periode, aksjonspunkter);

  const closedAp = aksjonspunkter
    .filter((ap) => periode.aksjonspunkter.includes(ap.definisjon.kode)
      || (periode.aksjonspunkter.length > 0
        && periode.aksjonspunkter.some((pap) => pap === aksjonspunktCodes.AVKLAR_OPPHOLDSRETT
          || pap === aksjonspunktCodes.AVKLAR_LOVLIG_OPPHOLD)
        && ap.definisjon.kode === aksjonspunktCodes.AVKLAR_FORTSATT_MEDLEMSKAP))
    .filter((ap) => !isAksjonspunktOpen(ap.status.kode));

  return {
    erEosBorger,
    isBorgerAksjonspunktClosed: closedAp.length > 0,
    oppholdsrettVurdering: erEosBorger ? getOppholdsrettVurdering(periode) : undefined,
    lovligOppholdVurdering: erEosBorger === false ? getLovligOppholdVurdering(periode) : undefined,
    apKode: getApKode(aksjonspunkter),
  };
};

StatusForBorgerFaktaPanel.transformValues = (values: FormValues, aksjonspunkter: Aksjonspunkt[]): TransformedValues => ({
  kode: getApKode(aksjonspunkter),
  oppholdsrettVurdering: values.oppholdsrettVurdering,
  lovligOppholdVurdering: values.lovligOppholdVurdering,
  erEosBorger: values.erEosBorger,
});

export default StatusForBorgerFaktaPanel;
