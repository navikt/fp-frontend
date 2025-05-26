import { type ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Detail, Label, VStack } from '@navikt/ds-react';
import { TextAreaField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, requiredIfCustomFunctionIsTrueNew } from '@navikt/ft-form-validators';
import { decodeHtmlEntity, formaterFritekst, getLanguageFromSprakkode } from '@navikt/ft-utils';

import { VilkarType, VilkarUtfallType } from '@navikt/fp-kodeverk';
import type { AlleKodeverk, Behandlingsresultat, Vilkar } from '@navikt/fp-types';

import styles from './vedtakAvslagArsakOgBegrunnelsePanel.module.css';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);

const getAvslagArsak = (
  alleKodeverk: AlleKodeverk,
  vilkar: Vilkar[],
  behandlingsresultat?: Behandlingsresultat,
): string | ReactElement => {
  const avslatteVilkar = vilkar.filter(v => v.vilkarStatus === VilkarUtfallType.IKKE_OPPFYLT);
  if (avslatteVilkar.length === 0) {
    return <FormattedMessage id="VedtakForm.UttaksperioderIkkeGyldig" />;
  }

  if (!behandlingsresultat?.avslagsarsak) {
    throw new Error('Ingen behandlingsresultat eller avslagsårsak finnes');
  }

  const vilkarType = alleKodeverk['VilkårType'].find(({ kode }) => kode === avslatteVilkar[0].vilkarType)?.navn ?? '';

  const årsak =
    alleKodeverk['Avslagsårsak'][avslatteVilkar[0].vilkarType as VilkarType].find(
      ({ kode }) => kode === behandlingsresultat.avslagsarsak,
    )?.navn ?? '';

  return `${vilkarType}: ${årsak}`;
};

interface Props {
  vilkar: Vilkar[];
  behandlingsresultat?: Behandlingsresultat;
  språkkode: string;
  erReadOnly: boolean;
  alleKodeverk: AlleKodeverk;
  skalBrukeOverstyrendeFritekstBrev: boolean;
}

export const VedtakAvslagArsakOgBegrunnelsePanel = ({
  vilkar,
  behandlingsresultat,
  språkkode,
  erReadOnly,
  alleKodeverk,
  skalBrukeOverstyrendeFritekstBrev,
}: Props) => {
  const {
    formState: { isDirty },
  } = useFormContext();

  const isRequiredFn = (value?: string | number | boolean) => value !== undefined || isDirty;
  const avslagsårsak = getAvslagArsak(alleKodeverk, vilkar, behandlingsresultat);

  return (
    <VStack gap="4">
      {avslagsårsak && (
        <VStack gap="1">
          <Label size="small">
            <FormattedMessage id="VedtakForm.ArsakTilAvslag" />
          </Label>
          <BodyShort size="small">{avslagsårsak}</BodyShort>
        </VStack>
      )}
      {!skalBrukeOverstyrendeFritekstBrev && (
        <TextAreaField
          name="begrunnelse"
          label={<FormattedMessage id="VedtakForm.Fritekst" />}
          validate={[requiredIfCustomFunctionIsTrueNew(isRequiredFn), minLength3, maxLength1500, hasValidText]}
          maxLength={1500}
          readOnly={erReadOnly}
          parse={formaterFritekst}
          badges={[
            {
              type: 'info',
              titleText: getLanguageFromSprakkode(språkkode),
            },
          ]}
        />
      )}
      {erReadOnly && behandlingsresultat?.avslagsarsakFritekst && (
        <VStack gap="1">
          <Detail>
            <FormattedMessage id="VedtakForm.Fritekst" />
          </Detail>
          <div className={styles.fritekstItem}>{decodeHtmlEntity(behandlingsresultat.avslagsarsakFritekst)}</div>
        </VStack>
      )}
    </VStack>
  );
};
