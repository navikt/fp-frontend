import { useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { VStack } from '@navikt/ds-react';
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
    <VStack gap="4">
      <RhfRadioGroup
        name="klageVurdering"
        control={control}
        validate={[required]}
        isReadOnly={readOnly}
        isHorizontal
        radios={[
          {
            value: klageVurderingType.MEDHOLD_I_KLAGE,
            label: intl.formatMessage({ id: 'Klage.ResolveKlage.ChangeVedtak' }),
          },
          {
            value: klageVurderingType.STADFESTE_YTELSESVEDTAK,
            label: intl.formatMessage({ id: 'Klage.ResolveKlage.KeepVedtakNfp' }),
          },
        ]}
      />
      {klageVurdering === klageVurderingType.MEDHOLD_I_KLAGE && (
        <ArrowBox>
          <VStack gap="4">
            <RhfSelect
              readOnly={readOnly}
              control={control}
              name="klageMedholdArsak"
              selectValues={medholdOptions}
              className={readOnly ? styles.selectReadOnly : styles.select}
              label={intl.formatMessage({ id: 'Klage.ResolveKlage.Cause' })}
              validate={[required]}
            />
            <RhfRadioGroup
              name="klageVurderingOmgjoer"
              control={control}
              validate={[required]}
              isReadOnly={readOnly}
              radios={[
                {
                  value: klageVurderingOmgjoerType.GUNST_MEDHOLD_I_KLAGE,
                  label: intl.formatMessage({ id: 'Klage.Behandle.Omgjort' }),
                },
                {
                  value: klageVurderingOmgjoerType.UGUNST_MEDHOLD_I_KLAGE,
                  label: intl.formatMessage({ id: 'Klage.Behandle.Ugunst' }),
                },
                {
                  value: klageVurderingOmgjoerType.DELVIS_MEDHOLD_I_KLAGE,
                  label: intl.formatMessage({ id: 'Klage.Behandle.DelvisOmgjort' }),
                },
              ]}
            />
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
