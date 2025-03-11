import { useIntl } from 'react-intl';

import { RadioGroupPanel, SelectField } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import {
  KlageVurdering as klageVurderingType,
  KlageVurderingOmgjoer as klageVurderingOmgjoerType,
} from '@navikt/fp-kodeverk';
import type { KodeverkMedNavn } from '@navikt/fp-types';

import styles from './klageVurderingRadioOptionsNfp.module.css';

interface Props {
  readOnly: boolean;
  medholdReasons: KodeverkMedNavn[];
  alleHjemmlerMedNavn: KodeverkMedNavn[];
  klageVurdering?: string;
}

export const KlageVurderingRadioOptionsNfp = ({
  readOnly,
  medholdReasons,
  alleHjemmlerMedNavn,
  klageVurdering,
}: Props) => {
  const intl = useIntl();
  const medholdOptions = medholdReasons.map((mo: KodeverkMedNavn) => (
    <option key={mo.kode} value={mo.kode}>
      {mo.navn}
    </option>
  ));
  const hjemmelOptions = alleHjemmlerMedNavn.map((mo: KodeverkMedNavn) => (
    <option key={mo.kode} value={mo.kode}>
      {mo.navn}
    </option>
  ));
  return (
    <>
      <RadioGroupPanel
        name="klageVurdering"
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
        <>
          <VerticalSpacer sixteenPx />
          <ArrowBox>
            <SelectField
              readOnly={readOnly}
              name="klageMedholdArsak"
              selectValues={medholdOptions}
              className={readOnly ? styles.selectReadOnly : styles.select}
              label={intl.formatMessage({ id: 'Klage.ResolveKlage.Cause' })}
              validate={[required]}
            />
            <VerticalSpacer sixteenPx />
            <RadioGroupPanel
              name="klageVurderingOmgjoer"
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
          </ArrowBox>
        </>
      )}
      <VerticalSpacer sixteenPx />
      <SelectField
        readOnly={readOnly}
        name="klageHjemmel"
        selectValues={hjemmelOptions}
        className={readOnly ? styles.selectReadOnly : styles.select}
        label={intl.formatMessage({ id: 'Klage.ResolveKlage.Hjemmel' })}
        validate={[required]}
      />
      <VerticalSpacer sixteenPx />
    </>
  );
};
