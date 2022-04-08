import React, { FunctionComponent, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Normaltekst } from 'nav-frontend-typografi';
import { Hovedknapp } from 'nav-frontend-knapper';

import {
  ArrowBox, VerticalSpacer, FlexColumn, FlexContainer, FlexRow,
} from '@navikt/ft-ui-komponenter';
import {
  ariaCheck, hasValidText, maxLength, minLength, required,
} from '@navikt/ft-utils';
import {
  RadioGroupField, RadioOption, TextAreaField, Form,
} from '@fpsak-frontend/form-hooks';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  Risikoklassifisering, Aksjonspunkt, KodeverkMedNavn,
} from '@fpsak-frontend/types';
import { VurderFaresignalerAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import faresignalVurdering from '../kodeverk/faresignalVurdering';

import styles from './avklarFaresignalerForm.less';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);

export const begrunnelseFieldName = 'begrunnelse';
export const VURDERING_HOVEDKATEGORI = 'vurderingerHovedkategori';
export const IKKE_REELLE_VURDERINGER_UNDERKATEGORI = 'ikkeReelleVurderingerUnderkategori';

export const buildInitialValues = (aksjonspunkt: Aksjonspunkt, risikoklassifisering?: Risikoklassifisering): Values | undefined => {
  if (aksjonspunkt && aksjonspunkt.begrunnelse && risikoklassifisering && risikoklassifisering.faresignalVurdering) {
    const kode = risikoklassifisering.faresignalVurdering;
    return {
      [begrunnelseFieldName]: aksjonspunkt.begrunnelse,
      [VURDERING_HOVEDKATEGORI]: kode === faresignalVurdering.INGEN_INNVIRKNING ? faresignalVurdering.INGEN_INNVIRKNING : faresignalVurdering.INNVIRKNING,
      [IKKE_REELLE_VURDERINGER_UNDERKATEGORI]: kode === faresignalVurdering.INGEN_INNVIRKNING ? undefined : kode,
    };
  }
  return undefined;
};

const utledFaresignalVurderingVerdi = (vurderingHovedkategori: string, vurderingUnderkategori: string): string => (
  vurderingHovedkategori === faresignalVurdering.INGEN_INNVIRKNING ? faresignalVurdering.INGEN_INNVIRKNING : vurderingUnderkategori);

const transformValues = (values: Values): VurderFaresignalerAp => ({
  kode: aksjonspunktCodes.VURDER_FARESIGNALER,
  faresignalVurdering: utledFaresignalVurderingVerdi(values[VURDERING_HOVEDKATEGORI], values[IKKE_REELLE_VURDERINGER_UNDERKATEGORI]),
  begrunnelse: values[begrunnelseFieldName],
});

type Values = {
  [begrunnelseFieldName]?: string;
  [VURDERING_HOVEDKATEGORI]?: string;
  [IKKE_REELLE_VURDERINGER_UNDERKATEGORI]?: string;
}

interface OwnProps {
  aksjonspunkt: Aksjonspunkt;
  readOnly: boolean;
  risikoklassifisering?: Risikoklassifisering;
  submitCallback: (data: VurderFaresignalerAp) => Promise<void>;
  faresignalVurderinger: KodeverkMedNavn[];
}

/**
 * IngenRisikoPanel
 *
 * Presentasjonskomponent. Statisk visning av panel som tilsier ingen faresignaler funnet i behandlingen.
 */
export const AvklarFaresignalerForm: FunctionComponent<OwnProps> = ({
  readOnly,
  aksjonspunkt,
  faresignalVurderinger,
  risikoklassifisering,
  submitCallback,
}) => {
  const underkategoriFaresignalVurderinger = useMemo(() => faresignalVurderinger
    .filter((vurdering) => vurdering.kode !== faresignalVurdering.INNVIRKNING && vurdering.kode !== faresignalVurdering.INGEN_INNVIRKNING),
  []);

  const defaultValues = useMemo(() => buildInitialValues(aksjonspunkt, risikoklassifisering),
    [aksjonspunkt, risikoklassifisering]);

  const formMethods = useForm<Values>({
    defaultValues,
  });

  const harValgtReelle = formMethods.watch(VURDERING_HOVEDKATEGORI) === faresignalVurdering.INNVIRKNING;

  return (
    <FlexContainer>
      <Form formMethods={formMethods} onSubmit={(values: Values) => submitCallback(transformValues(values))}>
        <FlexRow>
          <FlexColumn className={styles.fullWidth}>
            <TextAreaField
              name={begrunnelseFieldName}
              label={<FormattedMessage id="Risikopanel.Forms.Vurdering" />}
              validate={[required, maxLength1500, minLength3, hasValidText]}
              maxLength={1500}
              readOnly={readOnly}
            />
          </FlexColumn>
        </FlexRow>
        <VerticalSpacer sixteenPx />
        <FlexRow>
          <FlexColumn>
            <Normaltekst><FormattedMessage id="Risikopanel.Form.Resultat" /></Normaltekst>
          </FlexColumn>
        </FlexRow>
        <VerticalSpacer eightPx />
        <FlexRow>
          <FlexColumn>
            <RadioGroupField
              name={VURDERING_HOVEDKATEGORI}
              validate={[required]}
              direction="vertical"
              readOnly={readOnly}
              isEdited={!isAksjonspunktOpen(aksjonspunkt.status)}
            >
              <RadioOption
                label={faresignalVurderinger.find((vurdering) => vurdering.kode === faresignalVurdering.INNVIRKNING)?.navn || ''}
                value={faresignalVurdering.INNVIRKNING}
              >
                <div>
                  {harValgtReelle && (
                  <ArrowBox alignOffset={20}>
                    <RadioGroupField
                      name={IKKE_REELLE_VURDERINGER_UNDERKATEGORI}
                      validate={[required]}
                      direction="vertical"
                      readOnly={readOnly}
                    >
                      {underkategoriFaresignalVurderinger.map((vurdering) => (
                        <RadioOption
                          key={vurdering.kode}
                          label={vurdering.navn}
                          value={vurdering.kode}
                        />
                      ))}
                    </RadioGroupField>
                  </ArrowBox>
                  )}
                </div>
              </RadioOption>
              <RadioOption
                label={faresignalVurderinger.find((vurdering) => vurdering.kode === faresignalVurdering.INGEN_INNVIRKNING)?.navn || ''}
                value={faresignalVurdering.INGEN_INNVIRKNING}
              />
            </RadioGroupField>
          </FlexColumn>
        </FlexRow>
        <VerticalSpacer sixteenPx />
        <FlexRow>
          <FlexColumn>
            <Hovedknapp
              mini
              spinner={formMethods.formState.isSubmitting}
              disabled={!formMethods.formState.isDirty || readOnly || formMethods.formState.isSubmitting}
              onClick={ariaCheck}
            >
              <FormattedMessage id="Risikopanel.Form.Bekreft" />
            </Hovedknapp>
          </FlexColumn>
        </FlexRow>
      </Form>
    </FlexContainer>
  );
};

export default AvklarFaresignalerForm;
