import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { FieldArrayFieldsProps } from 'redux-form';
import { NavLink } from 'react-router-dom';
import { Undertekst, Normaltekst } from 'nav-frontend-typografi';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  Kodeverk, KodeverkMedNavn, TotrinnsKlageVurdering, TotrinnskontrollSkjermlenkeContext,
} from '@fpsak-frontend/types';
import {
  CheckboxField, NavFieldGroup, TextAreaField, RadioGroupField, RadioOption,
} from '@fpsak-frontend/form';
import {
  ArrowBox, FlexColumn, FlexContainer, FlexRow,
} from '@fpsak-frontend/shared-components';
import {
  hasValidText, maxLength, minLength, required,
} from '@fpsak-frontend/utils';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import getAksjonspunkttekst from './aksjonspunktTekstUtleder';

import styles from './aksjonspunktGodkjenningFieldArray.less';

const minLength3 = minLength(3);
const maxLength2000 = maxLength(2000);

type FieldValues = {
  totrinnskontrollGodkjent: boolean;
}

interface OwnProps {
  fields: FieldArrayFieldsProps<FieldValues>;
  totrinnskontrollSkjermlenkeContext: TotrinnskontrollSkjermlenkeContext[];
  readOnly: boolean;
  showBegrunnelse?: boolean;
  klageKA?: boolean;
  erForeldrepengerFagsak: boolean;
  klagebehandlingVurdering?: TotrinnsKlageVurdering,
  behandlingStatus: Kodeverk,
  arbeidsforholdHandlingTyper: KodeverkMedNavn[],
  erTilbakekreving: boolean,
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  lagLenke: (skjermlenkeCode: string) => Location;
}

export const AksjonspunktGodkjenningFieldArray: FunctionComponent<OwnProps> = ({
  fields,
  totrinnskontrollSkjermlenkeContext,
  readOnly,
  showBegrunnelse = false,
  klageKA = false,
  erForeldrepengerFagsak,
  klagebehandlingVurdering,
  behandlingStatus,
  arbeidsforholdHandlingTyper,
  erTilbakekreving,
  alleKodeverk,
  lagLenke,
}) => (
  <>
    {fields.map((id, index) => {
      const fieldValues = fields.get(index);
      const context = totrinnskontrollSkjermlenkeContext
        .reduce((acc, c) => acc.concat(c.totrinnskontrollAksjonspunkter.map(() => c)), [])[index];
      const aksjonspunkt = totrinnskontrollSkjermlenkeContext.map((t) => t.totrinnskontrollAksjonspunkter).flat()[index];

      const erKlageKA = klageKA && fieldValues.totrinnskontrollGodkjent;
      const erAnke = aksjonspunkt.aksjonspunktKode === aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE && fieldValues.totrinnskontrollGodkjent === true;
      const visKunBegrunnelse = erAnke || erKlageKA ? fieldValues.totrinnskontrollGodkjent : showBegrunnelse;
      const visArsaker = erAnke || ((fieldValues && fieldValues.totrinnskontrollGodkjent === false) || erKlageKA);

      const aksjonspunktText = getAksjonspunkttekst(erForeldrepengerFagsak, klagebehandlingVurdering, behandlingStatus,
        arbeidsforholdHandlingTyper, erTilbakekreving, aksjonspunkt);

      const skjemalenkeTyper = alleKodeverk[kodeverkTyper.SKJERMLENKE_TYPE];
      const skjermlenkeTypeKodeverk = skjemalenkeTyper.find((skjemalenkeType) => skjemalenkeType.kode === context.skjermlenkeType);

      return (
        <>
          <NavLink to={lagLenke(context.skjermlenkeType)} onClick={() => window.scroll(0, 0)} className={styles.lenke}>
            {skjermlenkeTypeKodeverk.navn}
          </NavLink>
          <div className={styles.approvalItemContainer}>
            {aksjonspunktText.map((formattedMessage, i) => (
              <div key={aksjonspunkt.aksjonspunktKode.concat('_'.concat(i.toString()))} className={styles.aksjonspunktTextContainer}>
                <Normaltekst>
                  {formattedMessage}
                </Normaltekst>
              </div>
            ))}
            <NavFieldGroup>
              <RadioGroupField name={`${id}.totrinnskontrollGodkjent`} bredde="M" readOnly={readOnly}>
                <RadioOption label={{ id: 'ApprovalField.Godkjent' }} value />
                <RadioOption label={{ id: 'ApprovalField.Vurder' }} value={false} />
              </RadioGroupField>
              {visArsaker && (
                <ArrowBox alignOffset={erKlageKA ? 1 : 110}>
                  {!visKunBegrunnelse && (
                    <FlexContainer wrap>
                      <FlexRow>
                        <FlexColumn>
                          <Undertekst className="blokk-xs"><FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Arsak" /></Undertekst>
                        </FlexColumn>
                      </FlexRow>
                      <FlexRow>
                        <NavFieldGroup className={styles.fullWidth} errorMessageName={`${id}.missingArsakError`}>
                          <FlexRow>
                            <FlexColumn className={styles.halfColumn}>
                              <CheckboxField
                                name={`${id}.feilFakta`}
                                label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.FeilFakta" />}
                              />
                              <CheckboxField
                                name={`${id}.feilRegel`}
                                label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.FeilRegelForstaelse" />}
                              />
                            </FlexColumn>
                            <FlexColumn className={styles.halfColumn}>
                              <CheckboxField
                                name={`${id}.feilLov`}
                                label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.FeilLovanvendelse" />}
                              />
                              <CheckboxField
                                name={`${id}.annet`}
                                label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Annet" />}
                              />
                            </FlexColumn>
                          </FlexRow>
                        </NavFieldGroup>
                      </FlexRow>
                    </FlexContainer>
                  )}
                  <TextAreaField
                    name={`${id}.besluttersBegrunnelse`}
                    label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Begrunnelse" />}
                    validate={[required, minLength3, maxLength2000, hasValidText]}
                  />
                </ArrowBox>
              )}
            </NavFieldGroup>
          </div>
        </>
      );
    })}
  </>
);

export default AksjonspunktGodkjenningFieldArray;
