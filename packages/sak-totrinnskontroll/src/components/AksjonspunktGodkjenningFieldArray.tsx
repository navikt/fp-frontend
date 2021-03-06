import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { FieldArrayFieldsProps } from 'redux-form';
import { NavLink } from 'react-router-dom';
import { Location } from 'history';
import { Undertekst, Normaltekst } from 'nav-frontend-typografi';

import {
  Kodeverk, KodeverkMedNavn, KlageVurdering, TotrinnskontrollSkjermlenkeContext,
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

import getAksjonspunkttekst from './aksjonspunktTekster/aksjonspunktTekstUtleder';

import styles from './aksjonspunktGodkjenningFieldArray.less';

const minLength3 = minLength(3);
const maxLength2000 = maxLength(2000);

export type AksjonspunktGodkjenningData = {
  aksjonspunktKode: string;
  totrinnskontrollGodkjent?: boolean;
  besluttersBegrunnelse?: string;
  feilFakta?: boolean;
  feilRegel?: boolean;
  feilLov?: boolean;
  annet?: boolean;
}

interface OwnProps {
  fields: FieldArrayFieldsProps<AksjonspunktGodkjenningData>;
  totrinnskontrollSkjermlenkeContext: TotrinnskontrollSkjermlenkeContext[];
  readOnly: boolean;
  showBegrunnelse?: boolean;
  klageKA?: boolean;
  erForeldrepengerFagsak: boolean;
  klagebehandlingVurdering?: KlageVurdering,
  behandlingStatus: Kodeverk,
  arbeidsforholdHandlingTyper: KodeverkMedNavn[],
  erTilbakekreving: boolean,
  skjemalenkeTyper: KodeverkMedNavn[];
  faktaOmBeregningTilfeller: KodeverkMedNavn[];
  lagLenke: (skjermlenkeCode: string) => Location | undefined;
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
  skjemalenkeTyper,
  faktaOmBeregningTilfeller,
  lagLenke,
}) => (
  <>
    {fields.map((id, index) => {
      const { aksjonspunktKode, totrinnskontrollGodkjent } = fields.get(index);
      const context = totrinnskontrollSkjermlenkeContext.find((c) => c.totrinnskontrollAksjonspunkter
        .some((ta) => ta.aksjonspunktKode === aksjonspunktKode));
      const totrinnskontrollAksjonspunkt = context?.totrinnskontrollAksjonspunkter
        .find((c) => c.aksjonspunktKode === aksjonspunktKode);

      if (!context || !totrinnskontrollAksjonspunkt) {
        return null;
      }

      const erKlageKA = klageKA && totrinnskontrollGodkjent;
      const erAnke = aksjonspunktKode === aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE && totrinnskontrollGodkjent === true;
      const visKunBegrunnelse = erAnke || erKlageKA ? totrinnskontrollGodkjent : showBegrunnelse;
      const visArsaker = erAnke || erKlageKA || totrinnskontrollGodkjent === false;

      const aksjonspunktText = getAksjonspunkttekst(erForeldrepengerFagsak, behandlingStatus,
        arbeidsforholdHandlingTyper, faktaOmBeregningTilfeller, erTilbakekreving, totrinnskontrollAksjonspunkt, klagebehandlingVurdering);

      const skjermlenkeTypeKodeverk = skjemalenkeTyper.find((skjemalenkeType) => skjemalenkeType.kode === context.skjermlenkeType);

      const lenke = lagLenke(context.skjermlenkeType);

      return (
        <>
          {lenke && skjermlenkeTypeKodeverk && (
            <NavLink to={lenke} onClick={() => window.scroll(0, 0)} className={styles.lenke}>
              {skjermlenkeTypeKodeverk.navn}
            </NavLink>
          )}
          <div className={styles.approvalItemContainer}>
            {aksjonspunktText.map((formattedMessage, i) => (
              <div key={aksjonspunktKode.concat('_'.concat(i.toString()))} className={styles.aksjonspunktTextContainer}>
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
                <ArrowBox alignOffset={totrinnskontrollGodkjent ? 1 : 110}>
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
                                readOnly={readOnly}
                              />
                              <CheckboxField
                                name={`${id}.feilRegel`}
                                label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.FeilRegelForstaelse" />}
                                readOnly={readOnly}
                              />
                            </FlexColumn>
                            <FlexColumn className={styles.halfColumn}>
                              <CheckboxField
                                name={`${id}.feilLov`}
                                label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.FeilLovanvendelse" />}
                                readOnly={readOnly}
                              />
                              <CheckboxField
                                name={`${id}.annet`}
                                label={<FormattedMessage id="AksjonspunktGodkjenningArsakPanel.Annet" />}
                                readOnly={readOnly}
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
                    readOnly={readOnly}
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
