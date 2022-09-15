import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { UseFormGetValues } from 'react-hook-form';
import { ErrorMessage, BodyShort, Label } from '@navikt/ds-react';
import { Location } from 'history';
import {
  ArrowBox, FlexColumn, FlexRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';

import {
  KodeverkMedNavn, KlageVurdering, TotrinnskontrollSkjermlenkeContext,
} from '@fpsak-frontend/types';
import {
  CheckboxField, TextAreaField, RadioGroupPanel, formHooks, useCustomValidation,
} from '@navikt/ft-form-hooks';
import {
  hasValidText, maxLength, minLength, required, isRequiredMessage,
} from '@navikt/ft-form-validators';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import getAksjonspunkttekst from './aksjonspunktTekster/aksjonspunktTekstUtleder';

import styles from './aksjonspunktGodkjenningFieldArray.less';

const minLength3 = minLength(3);
const maxLength2000 = maxLength(2000);

const FIELD_ARRAY_NAME = 'aksjonspunktGodkjenning';

const harIkkeValgtMinstEnFakta = (getValues: UseFormGetValues<any>, fieldIndex: string) => !getValues(`${fieldIndex}.feilFakta`)
  && !getValues(`${fieldIndex}.feilLov`) && !getValues(`${fieldIndex}.feilRegel`) && !getValues(`${fieldIndex}.annet`);

export type AksjonspunktGodkjenningData = {
  aksjonspunktKode: string;
  totrinnskontrollGodkjent?: boolean;
  besluttersBegrunnelse?: string;
  feilFakta?: boolean;
  feilRegel?: boolean;
  feilLov?: boolean;
  annet?: boolean;
}

type OwnProps = {
  totrinnskontrollSkjermlenkeContext: TotrinnskontrollSkjermlenkeContext[];
  readOnly: boolean;
  showBegrunnelse?: boolean;
  klageKA?: boolean;
  erForeldrepengerFagsak: boolean;
  klagebehandlingVurdering?: KlageVurdering,
  behandlingStatus: string,
  arbeidsforholdHandlingTyper: KodeverkMedNavn[],
  erTilbakekreving: boolean,
  skjemalenkeTyper: KodeverkMedNavn[];
  faktaOmBeregningTilfeller: KodeverkMedNavn[];
  lagLenke: (skjermlenkeCode: string) => Location | undefined;
}

export const AksjonspunktGodkjenningFieldArray: FunctionComponent<OwnProps> = ({
  totrinnskontrollSkjermlenkeContext,
  readOnly,
  showBegrunnelse = false,
  klageKA = false,
  erForeldrepengerFagsak,
  klagebehandlingVurdering,
  behandlingStatus,
  arbeidsforholdHandlingTyper,
  erTilbakekreving,
  skjemalenkeTyper,
  faktaOmBeregningTilfeller,
  lagLenke,
}) => {
  const {
    control, watch, getValues,
  } = formHooks.useFormContext();
  const { fields } = formHooks.useFieldArray({
    control,
    name: FIELD_ARRAY_NAME,
  });

  const aksjonspunktGodkjenning = watch('aksjonspunktGodkjenning');

  return (
    <>
      {fields.map((field, index) => {
        const { aksjonspunktKode, totrinnskontrollGodkjent } = aksjonspunktGodkjenning[index];
        const context = totrinnskontrollSkjermlenkeContext.find((c) => c.totrinnskontrollAksjonspunkter
          .some((ta) => ta.aksjonspunktKode === aksjonspunktKode));
        const totrinnskontrollAksjonspunkt = context?.totrinnskontrollAksjonspunkter
          .find((c) => c.aksjonspunktKode === aksjonspunktKode);

        if (!context || !totrinnskontrollAksjonspunkt) {
          return null;
        }

        const erKlageKA = klageKA && totrinnskontrollGodkjent;
        const erAnke = aksjonspunktKode === aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE && totrinnskontrollGodkjent;
        const visKunBegrunnelse = erAnke || erKlageKA ? totrinnskontrollGodkjent : showBegrunnelse;
        const visArsaker = erAnke || erKlageKA || totrinnskontrollGodkjent === false;

        const aksjonspunktText = getAksjonspunkttekst(
          erForeldrepengerFagsak,
          behandlingStatus,
          arbeidsforholdHandlingTyper,
          faktaOmBeregningTilfeller,
          erTilbakekreving,
          totrinnskontrollAksjonspunkt,
          klagebehandlingVurdering,
        );

        const skjermlenkeTypeKodeverk = skjemalenkeTyper.find((skjemalenkeType) => skjemalenkeType.kode === context.skjermlenkeType);

        const lenke = lagLenke(context.skjermlenkeType);

        const fieldIndex = `${FIELD_ARRAY_NAME}.${index}`;

        const hasError = harIkkeValgtMinstEnFakta(getValues, fieldIndex);
        const errorMessage = useCustomValidation(`${fieldIndex}.faktagruppe`, hasError, isRequiredMessage());

        return (
          <div key={field.id}>
            {lenke && skjermlenkeTypeKodeverk && (
              <NavLink to={lenke} onClick={() => window.scroll(0, 0)} className={styles.lenke}>
                {skjermlenkeTypeKodeverk.navn}
              </NavLink>
            )}
            <div className={styles.approvalItemContainer}>
              {aksjonspunktText.map((formattedMessage, i) => (
                <div key={aksjonspunktKode.concat('_'.concat(i.toString()))} className={styles.aksjonspunktTextContainer}>
                  <BodyShort size="small">
                    {formattedMessage}
                  </BodyShort>
                </div>
              ))}
              <RadioGroupPanel
                name={`${fieldIndex}.totrinnskontrollGodkjent`}
                isReadOnly={readOnly}
                isHorizontal
                isTrueOrFalseSelection
                hideLegend
                radios={[{
                  value: 'true',
                  label: <FormattedMessage id="ApprovalField.Godkjent" />,
                }, {
                  value: 'false',
                  label: <FormattedMessage id="ApprovalField.Vurder" />,
                },
                ]}
              />
              {visArsaker && (
                <>
                  <VerticalSpacer sixteenPx />
                  <ArrowBox alignOffset={totrinnskontrollGodkjent ? 1 : 110}>
                    {!visKunBegrunnelse && (
                      <>
                        <Label size="small"><FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Arsak" /></Label>
                        <FlexRow>
                          <FlexColumn className={styles.halfColumn}>
                            <CheckboxField
                              name={`${fieldIndex}.feilFakta`}
                              label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.FeilFakta" />}
                              readOnly={readOnly}
                            />
                            <CheckboxField
                              name={`${fieldIndex}.feilRegel`}
                              label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.FeilRegelForstaelse" />}
                              readOnly={readOnly}
                            />
                          </FlexColumn>
                          <FlexColumn className={styles.halfColumn}>
                            <CheckboxField
                              name={`${fieldIndex}.feilLov`}
                              label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.FeilLovanvendelse" />}
                              readOnly={readOnly}
                            />
                            <CheckboxField
                              name={`${fieldIndex}.annet`}
                              label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Annet" />}
                              readOnly={readOnly}
                            />
                          </FlexColumn>
                        </FlexRow>
                        {errorMessage && <ErrorMessage size="small">{errorMessage}</ErrorMessage>}
                      </>
                    )}
                    <VerticalSpacer sixteenPx />
                    <TextAreaField
                      name={`${fieldIndex}.besluttersBegrunnelse`}
                      label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Begrunnelse" />}
                      validate={[required, minLength3, maxLength2000, hasValidText]}
                      readOnly={readOnly}
                    />
                  </ArrowBox>
                </>
              )}
              <VerticalSpacer sixteenPx />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AksjonspunktGodkjenningFieldArray;
