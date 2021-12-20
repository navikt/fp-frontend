import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import klageVurderingType from '@fpsak-frontend/kodeverk/src/klageVurdering';
import { required } from '@fpsak-frontend/utils';
import { ArrowBox, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { RadioGroupField, RadioOption, SelectField } from '@fpsak-frontend/form-hooks';
import klageVurderingOmgjoerType from '@fpsak-frontend/kodeverk/src/klageVurderingOmgjoer';
import { Kodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';

import styles from './klageVurderingRadioOptionsNfp.less';

interface OwnProps {
  readOnly?: boolean;
  medholdReasons: KodeverkMedNavn[];
  klageVurdering?: Kodeverk;
}

export const KlageVurderingRadioOptionsNfp: FunctionComponent<OwnProps> = ({
  readOnly,
  medholdReasons,
  klageVurdering,
}) => {
  const intl = useIntl();
  const medholdOptions = medholdReasons.map((mo: KodeverkMedNavn) => <option key={mo.kode} value={mo.kode}>{mo.navn}</option>);
  return (
    <div>
      <RadioGroupField
        name="klageVurdering.kode"
        validate={[required]}
        readOnly={readOnly}
        className={readOnly ? styles.selectReadOnly : null}
      >
        <RadioOption value={klageVurderingType.MEDHOLD_I_KLAGE} label={intl.formatMessage({ id: 'Klage.ResolveKlage.ChangeVedtak' })} />
        <RadioOption value={klageVurderingType.OPPHEVE_YTELSESVEDTAK} label={intl.formatMessage({ id: 'Klage.ResolveKlage.KeepVedtakNfp' })} />
      </RadioGroupField>
      {(klageVurdering?.kode === klageVurderingType.MEDHOLD_I_KLAGE)
      && (
        <ArrowBox>
          <SelectField
            readOnly={readOnly}
            name="klageMedholdArsak.kode"
            selectValues={medholdOptions}
            className={readOnly ? styles.selectReadOnly : null}
            label={intl.formatMessage({ id: 'Klage.ResolveKlage.Cause' })}
            validate={[required]}
            bredde="xl"
          />
          <VerticalSpacer sixteenPx />
          <RadioGroupField
            name="klageVurderingOmgjoer.kode"
            validate={[required]}
            readOnly={readOnly}
            className={readOnly ? styles.selectReadOnly : null}
            direction="vertical"
          >
            <RadioOption value={klageVurderingOmgjoerType.GUNST_MEDHOLD_I_KLAGE} label={intl.formatMessage({ id: 'Klage.Behandle.Omgjort' })} />
            <RadioOption value={klageVurderingOmgjoerType.UGUNST_MEDHOLD_I_KLAGE} label={intl.formatMessage({ id: 'Klage.Behandle.Ugunst' })} />
            <RadioOption value={klageVurderingOmgjoerType.DELVIS_MEDHOLD_I_KLAGE} label={intl.formatMessage({ id: 'Klage.Behandle.DelvisOmgjort' })} />
          </RadioGroupField>
        </ArrowBox>
      )}
    </div>
  );
};

export default KlageVurderingRadioOptionsNfp;
