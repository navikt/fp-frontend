import React, { FunctionComponent, useCallback } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { ArrowBox, FaktaGruppe, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { Aksjonspunkt, MedlemPeriode } from '@navikt/fp-types';
import { AksjonspunktStatus } from '@navikt/ft-kodeverk';
import { useFormContext } from 'react-hook-form';

export type FormValues = {
  oppholdsrettVurdering?: boolean;
  lovligOppholdVurdering?: boolean;
  erEosBorger?: boolean;
};

interface OwnProps {
  valgtPeriode: MedlemPeriode;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
}

interface StaticFunctions {
  buildInitialValues: (periode: MedlemPeriode, aksjonspunkter: Aksjonspunkt[]) => FormValues;
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

  const { watch } = useFormContext<any>();

  const erEosBorger = watch('erEosBorger');

  const oppholdAp = valgtPeriode.aksjonspunkter.filter(
    periodeAp =>
      periodeAp === AksjonspunktCode.AVKLAR_OPPHOLDSRETT || periodeAp === AksjonspunktCode.AVKLAR_LOVLIG_OPPHOLD,
  );
  const aksjonspunkt = aksjonspunkter.find(ap => oppholdAp.includes(ap.definisjon));
  const erAksjonspunktLukket = aksjonspunkt?.status !== AksjonspunktStatus.OPPRETTET;

  const bTag = useCallback((...chunks: any) => <b>{chunks}</b>, []);

  return (
    <FaktaGruppe
      title={intl.formatMessage({ id: 'StatusForBorgerFaktaPanel.ApplicationInformation' })}
      merknaderFraBeslutter={aksjonspunkt?.definisjon ? alleMerknaderFraBeslutter[aksjonspunkt.definisjon] : undefined}
    >
      <RadioGroupPanel
        name="erEosBorger"
        hideLegend
        validate={[required]}
        isReadOnly={readOnly}
        isHorizontal
        isTrueOrFalseSelection
        radios={[
          {
            label: intl.formatMessage({ id: 'StatusForBorgerFaktaPanel.CitizenEEA' }),
            value: 'true',
          },
          {
            label: intl.formatMessage({ id: 'StatusForBorgerFaktaPanel.CitizenOutsideEEA' }),
            value: 'false',
          },
        ]}
      />
      {erEosBorger && (
        <>
          <VerticalSpacer eightPx />
          <ArrowBox>
            <RadioGroupPanel
              name="oppholdsrettVurdering"
              label={<FormattedMessage id="StatusForBorgerFaktaPanel.Oppholdsrett" />}
              validate={[required]}
              isEdited={erAksjonspunktLukket}
              isReadOnly={readOnly}
              isHorizontal
              isTrueOrFalseSelection
              radios={[
                {
                  label: intl.formatMessage({ id: 'StatusForBorgerFaktaPanel.HarOppholdsrett' }),
                  value: 'true',
                },
                {
                  label: <FormattedMessage id="StatusForBorgerFaktaPanel.HarIkkeOppholdsrett" values={{ b: bTag }} />,
                  value: 'false',
                },
              ]}
            />
          </ArrowBox>
        </>
      )}
      {erEosBorger === false && (
        <>
          <VerticalSpacer eightPx />
          <ArrowBox alignOffset={130}>
            <RadioGroupPanel
              name="lovligOppholdVurdering"
              label={<FormattedMessage id="StatusForBorgerFaktaPanel.LovligOpphold" />}
              validate={[required]}
              isReadOnly={readOnly}
              isEdited={erAksjonspunktLukket}
              isHorizontal
              isTrueOrFalseSelection
              radios={[
                {
                  label: intl.formatMessage({ id: 'StatusForBorgerFaktaPanel.HarLovligOpphold' }),
                  value: 'true',
                },
                {
                  label: <FormattedMessage id="StatusForBorgerFaktaPanel.HarIkkeLovligOpphold" values={{ b: bTag }} />,
                  value: 'false',
                },
              ]}
            />
          </ArrowBox>
        </>
      )}
    </FaktaGruppe>
  );
};

const getEosBorger = (periode: MedlemPeriode, aksjonspunkter: Aksjonspunkt[]): boolean =>
  periode.erEosBorger || periode.erEosBorger === false
    ? periode.erEosBorger
    : aksjonspunkter.some(ap => ap.definisjon === AksjonspunktCode.AVKLAR_OPPHOLDSRETT);

const getOppholdsrettVurdering = (periode: MedlemPeriode): boolean | undefined =>
  periode.oppholdsrettVurdering || periode.oppholdsrettVurdering === false ? periode.oppholdsrettVurdering : undefined;

const getLovligOppholdVurdering = (periode: MedlemPeriode): boolean | undefined =>
  periode.lovligOppholdVurdering || periode.lovligOppholdVurdering === false
    ? periode.lovligOppholdVurdering
    : undefined;

StatusForBorgerFaktaPanel.buildInitialValues = (periode, aksjonspunkter) => {
  const erEosBorger = getEosBorger(periode, aksjonspunkter);
  return {
    erEosBorger,
    oppholdsrettVurdering: erEosBorger ? getOppholdsrettVurdering(periode) : undefined,
    lovligOppholdVurdering: erEosBorger === false ? getLovligOppholdVurdering(periode) : undefined,
  };
};

export default StatusForBorgerFaktaPanel;
