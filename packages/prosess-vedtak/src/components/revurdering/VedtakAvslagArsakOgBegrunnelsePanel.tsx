import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { Label, BodyShort, Detail } from '@navikt/ds-react';

import { AlleKodeverk, Vilkar, Behandlingsresultat } from '@navikt/fp-types';
import { vilkarUtfallType, getKodeverknavnFn, KodeverkType } from '@navikt/fp-kodeverk';
import { TextAreaField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, requiredIfCustomFunctionIsTrueNew } from '@navikt/ft-form-validators';
import { decodeHtmlEntity, getLanguageFromSprakkode } from '@navikt/ft-utils';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { useFormContext } from 'react-hook-form';

import styles from './vedtakAvslagArsakOgBegrunnelsePanel.module.css';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);

const getAvslagArsak = (
  getKodeverkNavn: (kodeverk: string, kodeverkType: KodeverkType, undertype?: string) => string,
  vilkar: Vilkar[],
  behandlingsresultat?: Behandlingsresultat,
): string | ReactElement => {
  const avslatteVilkar = vilkar.filter(v => v.vilkarStatus === vilkarUtfallType.IKKE_OPPFYLT);
  if (avslatteVilkar.length === 0) {
    return <FormattedMessage id="VedtakForm.UttaksperioderIkkeGyldig" />;
  }

  if (!behandlingsresultat?.avslagsarsak) {
    throw new Error('Ingen behandlingsresultat eller avslagsårsak finnes');
  }

  const vilkarType = getKodeverkNavn(avslatteVilkar[0].vilkarType, KodeverkType.VILKAR_TYPE);
  return `${vilkarType}: ${getKodeverkNavn(
    behandlingsresultat.avslagsarsak,
    KodeverkType.AVSLAGSARSAK,
    avslatteVilkar[0].vilkarType,
  )}`;
};

interface OwnProps {
  vilkar: Vilkar[];
  behandlingsresultat?: Behandlingsresultat;
  språkKode: string;
  erReadOnly: boolean;
  alleKodeverk: AlleKodeverk;
  skalBrukeOverstyrendeFritekstBrev: boolean;
}

const VedtakAvslagArsakOgBegrunnelsePanel: FunctionComponent<OwnProps> = ({
  vilkar,
  behandlingsresultat,
  språkKode,
  erReadOnly,
  alleKodeverk,
  skalBrukeOverstyrendeFritekstBrev,
}) => {
  const {
    formState: { isDirty },
  } = useFormContext();
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk);

  const isRequiredFn = (value?: string | number | boolean) => value !== undefined || isDirty;
  const avslagsårsak = getAvslagArsak(getKodeverknavn, vilkar, behandlingsresultat);

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
      {!skalBrukeOverstyrendeFritekstBrev && (
        <>
          <VerticalSpacer sixteenPx />
          <TextAreaField
            name="begrunnelse"
            label={<FormattedMessage id="VedtakForm.Fritekst" />}
            validate={[requiredIfCustomFunctionIsTrueNew(isRequiredFn), minLength3, maxLength1500, hasValidText]}
            maxLength={1500}
            readOnly={erReadOnly}
            // Må erstatte bindestrek kopiert inn fra Word med vanlig bindestrek
            parse={value => value.toString().replaceAll(/\p{Dash_Punctuation}/gu, '-').replaceAll('\t', ' ')}
            badges={[
              {
                type: 'info',
                titleText: getLanguageFromSprakkode(språkKode),
              },
            ]}
          />
        </>
      )}
      {erReadOnly && behandlingsresultat?.avslagsarsakFritekst && (
        <span>
          <VerticalSpacer twentyPx />
          <Detail>
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
