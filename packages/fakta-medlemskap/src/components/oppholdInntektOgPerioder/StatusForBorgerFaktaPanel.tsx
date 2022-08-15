import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';
import { formHooks, RadioGroupField, RadioOption } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { ArrowBox, VerticalSpacer, FaktaGruppe } from '@navikt/ft-ui-komponenter';

import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Aksjonspunkt, MedlemPeriode } from '@fpsak-frontend/types';

export type FormValues = {
  oppholdsrettVurdering?: boolean;
  lovligOppholdVurdering?: boolean;
  erEosBorger?: boolean;
}

interface OwnProps {
  valgtPeriode: MedlemPeriode;
  aksjonspunkter: Aksjonspunkt[]
  readOnly: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

interface StaticFunctions {
  buildInitialValues?: (periode: MedlemPeriode, aksjonspunkter: Aksjonspunkt[]) => FormValues;
}

/**
 * StatusForBorgerFaktaPanel
 *
 * Setter opp aksjonspunktet for avklaring av borgerstatus (Medlemskapsvilkåret).
 */
const StatusForBorgerFaktaPanel: FunctionComponent<OwnProps> & StaticFunctions = ({
  valgtPeriode,
  aksjonspunkter,
  readOnly,
  alleMerknaderFraBeslutter,
}) => {
  const intl = useIntl();

  const { watch } = formHooks.useFormContext<any>();

  const erEosBorger = watch('erEosBorger');

  const oppholdAp = valgtPeriode.aksjonspunkter
    .filter((periodeAp) => periodeAp === aksjonspunktCodes.AVKLAR_OPPHOLDSRETT || periodeAp === aksjonspunktCodes.AVKLAR_LOVLIG_OPPHOLD);
  const aksjonspunkt = aksjonspunkter.find((ap) => oppholdAp.includes(ap.definisjon));
  const erAksjonspunktLukket = !isAksjonspunktOpen(aksjonspunkt?.status);

  return (
    <FaktaGruppe
      title={intl.formatMessage({ id: 'StatusForBorgerFaktaPanel.ApplicationInformation' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunkt?.definisjon]}
    >
      <RadioGroupField
        name="erEosBorger"
        validate={[required]}
        readOnly={readOnly}
        parse={(value: string) => value === 'true'}
      >
        <RadioOption label={intl.formatMessage({ id: 'StatusForBorgerFaktaPanel.CitizenEEA' })} value="true" />
        <RadioOption label={intl.formatMessage({ id: 'StatusForBorgerFaktaPanel.CitizenOutsideEEA' })} value="false" />
      </RadioGroupField>
      {erEosBorger && (
        <ArrowBox>
          <Undertekst>
            <FormattedMessage id="StatusForBorgerFaktaPanel.Oppholdsrett" />
          </Undertekst>
          <VerticalSpacer fourPx />
          <RadioGroupField
            name="oppholdsrettVurdering"
            validate={[required]}
            readOnly={readOnly}
            isEdited={erAksjonspunktLukket}
            parse={(value: string) => value === 'true'}
          >
            <RadioOption label={intl.formatMessage({ id: 'StatusForBorgerFaktaPanel.HarOppholdsrett' })} value="true" />
            <RadioOption
              label={(
                <FormattedMessage
                  id="StatusForBorgerFaktaPanel.HarIkkeOppholdsrett"
                  values={{
                    b: (chunks: any) => <b>{chunks}</b>,
                  }}
                />
                )}
              value="false"
            />
          </RadioGroupField>
        </ArrowBox>
      )}
      {erEosBorger === false && (
        <ArrowBox alignOffset={130}>
          <Undertekst>
            <FormattedMessage id="StatusForBorgerFaktaPanel.LovligOpphold" />
          </Undertekst>
          <VerticalSpacer fourPx />
          <RadioGroupField
            name="lovligOppholdVurdering"
            validate={[required]}
            readOnly={readOnly}
            isEdited={erAksjonspunktLukket}
            parse={(value: string) => value === 'true'}
          >
            <RadioOption label={intl.formatMessage({ id: 'StatusForBorgerFaktaPanel.HarLovligOpphold' })} value="true" />
            <RadioOption
              label={(
                <FormattedMessage
                  id="StatusForBorgerFaktaPanel.HarIkkeLovligOpphold"
                  values={{
                    b: (chunks: any) => <b>{chunks}</b>,
                  }}
                />
                )}
              value="false"
            />
          </RadioGroupField>
        </ArrowBox>
      )}
    </FaktaGruppe>
  );
};

const getEosBorger = (
  periode: MedlemPeriode,
  aksjonspunkter: Aksjonspunkt[],
): boolean => (periode.erEosBorger || periode.erEosBorger === false
  ? periode.erEosBorger
  : aksjonspunkter.some((ap) => ap.definisjon === aksjonspunktCodes.AVKLAR_OPPHOLDSRETT));

const getOppholdsrettVurdering = (
  periode: MedlemPeriode,
): boolean | undefined => (periode.oppholdsrettVurdering
|| periode.oppholdsrettVurdering === false ? periode.oppholdsrettVurdering : undefined);

const getLovligOppholdVurdering = (
  periode: MedlemPeriode,
): boolean | undefined => (periode.lovligOppholdVurdering || periode.lovligOppholdVurdering === false
  ? periode.lovligOppholdVurdering : undefined);

StatusForBorgerFaktaPanel.buildInitialValues = (periode, aksjonspunkter) => {
  const erEosBorger = getEosBorger(periode, aksjonspunkter);
  return {
    erEosBorger,
    oppholdsrettVurdering: erEosBorger ? getOppholdsrettVurdering(periode) : undefined,
    lovligOppholdVurdering: erEosBorger === false ? getLovligOppholdVurdering(periode) : undefined,
  };
};

export default StatusForBorgerFaktaPanel;
