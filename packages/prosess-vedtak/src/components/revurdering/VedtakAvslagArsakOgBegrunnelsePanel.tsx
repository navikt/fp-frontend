import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useFormContext } from 'react-hook-form';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';

import {
  AlleKodeverk, Vilkar, Behandlingsresultat,
} from '@fpsak-frontend/types';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import { TextAreaField } from '@fpsak-frontend/form-hooks';
import {
  decodeHtmlEntity, getLanguageFromSprakkode, hasValidText, maxLength, minLength, requiredIfCustomFunctionIsTrueNew, getKodeverknavnFn,
} from '@fpsak-frontend/utils';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';

import { hasIkkeOppfyltSoknadsfristvilkar } from '../felles/VedtakHelper';

import styles from './vedtakAvslagArsakOgBegrunnelsePanel.less';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);

const getAvslagArsak = (
  vilkar: Vilkar[],
  behandlingsresultat: Behandlingsresultat,
  getKodeverknavn: (kodeverk: string, undertype?: string) => string,
): string | ReactElement => {
  const avslatteVilkar = vilkar.filter((v) => v.vilkarStatus === vilkarUtfallType.IKKE_OPPFYLT);
  if (avslatteVilkar.length === 0) {
    return <FormattedMessage id="VedtakForm.UttaksperioderIkkeGyldig" />;
  }

  return `${getKodeverknavn(avslatteVilkar[0].vilkarType)}: ${getKodeverknavn(behandlingsresultat.avslagsarsak, avslatteVilkar[0].vilkarType)}`;
};

const getIsBegrunnelseRequired = (isDirty: boolean) => (value?: string) => value !== undefined || isDirty;

interface OwnProps {
  behandlingStatusKode: string;
  vilkar?: Vilkar[];
  behandlingsresultat: Behandlingsresultat;
  språkKode: string;
  erReadOnly: boolean;
  alleKodeverk: AlleKodeverk;
  skalBrukeOverstyrendeFritekstBrev: boolean;
}

const VedtakAvslagArsakOgBegrunnelsePanel: FunctionComponent<OwnProps> = ({
  behandlingStatusKode,
  vilkar,
  behandlingsresultat,
  språkKode,
  erReadOnly,
  alleKodeverk,
  skalBrukeOverstyrendeFritekstBrev,
}) => {
  const intl = useIntl();
  const { formState: { isDirty } } = useFormContext();
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk);

  const isRequiredFn = getIsBegrunnelseRequired(isDirty);
  const avslagsårsak = getAvslagArsak(vilkar, behandlingsresultat, getKodeverknavn);

  return (
    <>
      {avslagsårsak && (
        <>
          <Undertekst><FormattedMessage id="VedtakForm.ArsakTilAvslag" /></Undertekst>
          <Normaltekst>
            {avslagsårsak}
          </Normaltekst>
          <VerticalSpacer sixteenPx />
        </>
      )}
      {!skalBrukeOverstyrendeFritekstBrev
          && behandlingStatusKode === behandlingStatus.BEHANDLING_UTREDES && hasIkkeOppfyltSoknadsfristvilkar(vilkar) && (
          <Row>
            <VerticalSpacer sixteenPx />
            <Column xs="7">
              <TextAreaField
                name="begrunnelse"
                label={<FormattedMessage id="VedtakForm.Fritekst" />}
                validate={[requiredIfCustomFunctionIsTrueNew(isRequiredFn), minLength3, maxLength1500, hasValidText]}
                maxLength={1500}
                readOnly={erReadOnly}
                badges={[{
                  type: 'fokus',
                  text: getLanguageFromSprakkode(språkKode),
                  titleText: intl.formatMessage({ id: 'Malform.Beskrivelse' }),
                }]}
              />
            </Column>
          </Row>
      )}
      {erReadOnly && behandlingsresultat.avslagsarsakFritekst && (
        <span>
          <VerticalSpacer twentyPx />
          <Undertekst><FormattedMessage id="VedtakForm.Fritekst" /></Undertekst>
          <VerticalSpacer eightPx />
          <div className={styles.fritekstItem}>{decodeHtmlEntity(behandlingsresultat.avslagsarsakFritekst)}</div>
        </span>
      )}
    </>
  );
};

export default VedtakAvslagArsakOgBegrunnelsePanel;
