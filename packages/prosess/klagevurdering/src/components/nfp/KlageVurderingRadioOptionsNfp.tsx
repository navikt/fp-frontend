import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { HStack, Radio, VStack } from '@navikt/ds-react';
import { RhfRadioGroup, RhfSelect } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { ArrowBox } from '@navikt/ft-ui-komponenter';

import {
  KlageVurdering as klageVurderingType,
  KlageVurderingOmgjoer as klageVurderingOmgjoerType,
} from '@navikt/fp-kodeverk';
import type { KodeverkMedNavn } from '@navikt/fp-types';

import type { KlageFormType } from '../../types/klageFormType';

import styles from './klageVurderingRadioOptionsNfp.module.css';

interface Props {
  readOnly: boolean;
  medholdReasons: KodeverkMedNavn<'KlageMedholdÅrsak'>[];
  alleHjemmlerMedNavn: KodeverkMedNavn<'KlageHjemmel'>[];
  klageVurdering?: string;
}

export const KlageVurderingRadioOptionsNfp = ({
  readOnly,
  medholdReasons,
  alleHjemmlerMedNavn,
  klageVurdering,
}: Props) => {
  const intl = useIntl();

  const { control } = useFormContext<KlageFormType>();

  const medholdOptions = medholdReasons.map(mo => (
    <option key={mo.kode} value={mo.kode}>
      {mo.navn}
    </option>
  ));
  const hjemmelOptions = alleHjemmlerMedNavn.map(mo => (
    <option key={mo.kode} value={mo.kode}>
      {mo.navn}
    </option>
  ));
  return (
    <VStack gap="space-12">
      <RhfRadioGroup name="klageVurdering" control={control} validate={[required]} isReadOnly={readOnly}>
        <HStack gap="space-16">
          <Radio value={klageVurderingType.MEDHOLD_I_KLAGE} size="small">
            <FormattedMessage id="Klage.ResolveKlage.ChangeVedtak" />
          </Radio>
          <Radio value={klageVurderingType.STADFESTE_YTELSESVEDTAK} size="small">
            <FormattedMessage id="Klage.ResolveKlage.KeepVedtakNfp" />
          </Radio>
        </HStack>
      </RhfRadioGroup>
      {klageVurdering === klageVurderingType.MEDHOLD_I_KLAGE && (
        <ArrowBox>
          <VStack gap="space-16">
            <RhfSelect
              readOnly={readOnly}
              control={control}
              name="klageMedholdArsak"
              selectValues={medholdOptions}
              className={readOnly ? styles.selectReadOnly : styles.select}
              label={intl.formatMessage({ id: 'Klage.ResolveKlage.Cause' })}
              validate={[required]}
            />
            <RhfRadioGroup name="klageVurderingOmgjoer" control={control} validate={[required]} isReadOnly={readOnly}>
              <Radio value={klageVurderingOmgjoerType.GUNST_MEDHOLD_I_KLAGE} size="small">
                <FormattedMessage id="Klage.Behandle.Omgjort" />
              </Radio>
              <Radio value={klageVurderingOmgjoerType.UGUNST_MEDHOLD_I_KLAGE} size="small">
                <FormattedMessage id="Klage.Behandle.Ugunst" />
              </Radio>
              <Radio value={klageVurderingOmgjoerType.DELVIS_MEDHOLD_I_KLAGE} size="small">
                <FormattedMessage id="Klage.Behandle.DelvisOmgjort" />
              </Radio>
            </RhfRadioGroup>
          </VStack>
        </ArrowBox>
      )}
      <RhfSelect
        readOnly={readOnly}
        control={control}
        name="klageHjemmel"
        selectValues={hjemmelOptions}
        className={readOnly ? styles.selectReadOnly : styles.select}
        label={intl.formatMessage({ id: 'Klage.ResolveKlage.Hjemmel' })}
        validate={[required]}
      />
    </VStack>
  );
};
