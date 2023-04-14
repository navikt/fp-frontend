import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { Label, BodyShort, Detail } from '@navikt/ds-react';

import { AlleKodeverk, Vilkar, Behandlingsresultat } from '@navikt/fp-types';
import { vilkarUtfallType, behandlingStatus, getKodeverknavnFn, KodeverkType } from '@navikt/fp-kodeverk';
import { TextAreaField, formHooks } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, requiredIfCustomFunctionIsTrueNew } from '@navikt/ft-form-validators';
import { decodeHtmlEntity, getLanguageFromSprakkode } from '@navikt/ft-utils';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { hasIkkeOppfyltSoknadsfristvilkar } from '../felles/VedtakHelper';

import styles from './vedtakAvslagArsakOgBegrunnelsePanel.module.css';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);

const getAvslagArsak = (
  vilkar: Vilkar[],
  behandlingsresultat: Behandlingsresultat,
  getKodeverkNavn: (kodeverk: string, kodeverkType: KodeverkType, undertype?: string) => string,
): string | ReactElement => {
  const avslatteVilkar = vilkar.filter(v => v.vilkarStatus === vilkarUtfallType.IKKE_OPPFYLT);
  if (avslatteVilkar.length === 0) {
    return <FormattedMessage id="VedtakForm.UttaksperioderIkkeGyldig" />;
  }

  const vilkarType = getKodeverkNavn(avslatteVilkar[0].vilkarType, KodeverkType.VILKAR_TYPE);
  return `${vilkarType}: ${getKodeverkNavn(
    behandlingsresultat.avslagsarsak,
    KodeverkType.AVSLAGSARSAK,
    avslatteVilkar[0].vilkarType,
  )}`;
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
  const {
    formState: { isDirty },
  } = formHooks.useFormContext();
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk);

  const isRequiredFn = getIsBegrunnelseRequired(isDirty);
  const avslagsårsak = getAvslagArsak(vilkar, behandlingsresultat, getKodeverknavn);

  return (
    <>
      {avslagsårsak && (
        <>
          <Label size="small">
            <FormattedMessage id="VedtakForm.ArsakTilAvslag" />
          </Label>
          <BodyShort size="small">{avslagsårsak}</BodyShort>
          <VerticalSpacer sixteenPx />
        </>
      )}
      {!skalBrukeOverstyrendeFritekstBrev &&
        behandlingStatusKode === behandlingStatus.BEHANDLING_UTREDES &&
        hasIkkeOppfyltSoknadsfristvilkar(vilkar) && (
          <>
            <VerticalSpacer sixteenPx />
            <TextAreaField
              name="begrunnelse"
              label={<FormattedMessage id="VedtakForm.Fritekst" />}
              validate={[requiredIfCustomFunctionIsTrueNew(isRequiredFn), minLength3, maxLength1500, hasValidText]}
              maxLength={1500}
              readOnly={erReadOnly}
              badges={[
                {
                  type: 'info',
                  titleText: getLanguageFromSprakkode(språkKode),
                },
              ]}
            />
          </>
        )}
      {erReadOnly && behandlingsresultat.avslagsarsakFritekst && (
        <span>
          <VerticalSpacer twentyPx />
          <Detail size="small">
            <FormattedMessage id="VedtakForm.Fritekst" />
          </Detail>
          <VerticalSpacer eightPx />
          <div className={styles.fritekstItem}>{decodeHtmlEntity(behandlingsresultat.avslagsarsakFritekst)}</div>
        </span>
      )}
    </>
  );
};

export default VedtakAvslagArsakOgBegrunnelsePanel;
