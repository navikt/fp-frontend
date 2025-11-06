import { type ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Detail, Label, VStack } from '@navikt/ds-react';
import { RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, requiredIfCustomFunctionIsTrueNew } from '@navikt/ft-form-validators';
import { decodeHtmlEntity, formaterFritekst, getLanguageFromSprakkode } from '@navikt/ft-utils';

import type { AlleKodeverk, Behandlingsresultat, Vilkar } from '@navikt/fp-types';

import type { VedtakFormValues } from '../../types/VedtakFormValues';

import styles from './vedtakAvslagArsakOgBegrunnelsePanel.module.css';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);

const getAvslagArsak = (
  alleKodeverk: AlleKodeverk,
  vilkar: Vilkar[],
  behandlingsresultat?: Behandlingsresultat,
): string | ReactElement => {
  const avslatteVilkar = vilkar.filter(v => v.vilkarStatus === 'IKKE_OPPFYLT');
  if (avslatteVilkar.length === 0) {
    return <FormattedMessage id="VedtakForm.UttaksperioderIkkeGyldig" />;
  }

  if (!behandlingsresultat?.avslagsarsak) {
    throw new Error('Ingen behandlingsresultat eller avslagsårsak finnes');
  }

  const vilkarType = alleKodeverk['VilkårType'].find(({ kode }) => kode === avslatteVilkar[0]?.vilkarType)?.navn ?? '';

  const årsak =
    alleKodeverk['Avslagsårsak'].find(({ kode }) => kode === behandlingsresultat.avslagsarsak)?.navn ?? '';

  return `${vilkarType}: ${årsak}`;
};

interface Props {
  vilkår: Vilkar[];
  behandlingsresultat?: Behandlingsresultat;
  språkkode: string;
  isReadOnly: boolean;
  alleKodeverk: AlleKodeverk;
  skalBrukeOverstyrendeFritekstBrev: boolean;
}

export const VedtakAvslagArsakOgBegrunnelsePanel = ({
  vilkår,
  behandlingsresultat,
  språkkode,
  isReadOnly,
  alleKodeverk,
  skalBrukeOverstyrendeFritekstBrev,
}: Props) => {
  const {
    formState: { isDirty },
    control,
  } = useFormContext<VedtakFormValues>();

  const isRequiredFn = (value?: string | number | boolean) => value !== undefined || isDirty;
  const avslagsårsak = getAvslagArsak(alleKodeverk, vilkår, behandlingsresultat);

  return (
    <VStack gap="space-16">
      {avslagsårsak && (
        <VStack gap="space-4">
          <Label size="small">
            <FormattedMessage id="VedtakForm.ArsakTilAvslag" />
          </Label>
          <BodyShort size="small">{avslagsårsak}</BodyShort>
        </VStack>
      )}
      {!skalBrukeOverstyrendeFritekstBrev && (
        <RhfTextarea
          name="begrunnelse"
          control={control}
          label={<FormattedMessage id="VedtakForm.Fritekst" />}
          validate={[requiredIfCustomFunctionIsTrueNew(isRequiredFn), minLength3, maxLength1500, hasValidText]}
          maxLength={1500}
          readOnly={isReadOnly}
          parse={formaterFritekst}
          badges={[
            {
              type: 'info',
              titleText: getLanguageFromSprakkode(språkkode),
            },
          ]}
        />
      )}
      {isReadOnly && behandlingsresultat?.avslagsarsakFritekst && (
        <VStack gap="space-4">
          <Detail>
            <FormattedMessage id="VedtakForm.Fritekst" />
          </Detail>
          <div className={styles['fritekstItem']}>{decodeHtmlEntity(behandlingsresultat.avslagsarsakFritekst)}</div>
        </VStack>
      )}
    </VStack>
  );
};
