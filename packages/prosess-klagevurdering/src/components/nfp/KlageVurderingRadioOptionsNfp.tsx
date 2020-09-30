import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';

import klageVurderingType from '@fpsak-frontend/kodeverk/src/klageVurdering';
import { required } from '@fpsak-frontend/utils';
import { ArrowBox, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { RadioGroupField, RadioOption, SelectField } from '@fpsak-frontend/form';
import klageVurderingOmgjoerType from '@fpsak-frontend/kodeverk/src/klageVurderingOmgjoer';
import { Kodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';

import styles from './klageVurderingRadioOptionsNfp.less';

interface OwnProps {
  readOnly?: boolean;
  medholdReasons: KodeverkMedNavn[];
  klageVurdering?: Kodeverk;
}

export const KlageVurderingRadioOptionsNfp: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  readOnly,
  medholdReasons,
  klageVurdering,
  intl,
}) => {
  const medholdOptions = medholdReasons.map((mo: KodeverkMedNavn) => <option key={mo.kode} value={mo.kode}>{mo.navn}</option>);
  return (
    <div>
      <>
        <RadioGroupField
          name="klageVurdering"
          validate={[required]}
          readOnly={readOnly}
          className={readOnly ? styles.selectReadOnly : null}
        >
          <RadioOption value={klageVurderingType.MEDHOLD_I_KLAGE} label={{ id: 'Klage.ResolveKlage.ChangeVedtak' }} />
          <RadioOption value={klageVurderingType.STADFESTE_YTELSESVEDTAK} label={{ id: 'Klage.ResolveKlage.KeepVedtakNfp' }} />
        </RadioGroupField>
      </>
      {(klageVurdering.kode === klageVurderingType.MEDHOLD_I_KLAGE)
      && (
        <ArrowBox>
          <SelectField
            readOnly={readOnly}
            name="klageMedholdArsak"
            selectValues={medholdOptions}
            className={readOnly ? styles.selectReadOnly : null}
            label={intl.formatMessage({ id: 'Klage.ResolveKlage.Cause' })}
            validate={[required]}
            bredde="xl"
          />
          <VerticalSpacer sixteenPx />
          <RadioGroupField
            name="klageVurderingOmgjoer"
            validate={[required]}
            readOnly={readOnly}
            className={readOnly ? styles.selectReadOnly : null}
            direction="vertical"
          >
            <RadioOption value={klageVurderingOmgjoerType.GUNST_MEDHOLD_I_KLAGE} label={{ id: 'Klage.Behandle.Omgjort' }} />
            <RadioOption value={klageVurderingOmgjoerType.UGUNST_MEDHOLD_I_KLAGE} label={{ id: 'Klage.Behandle.Ugunst' }} />
            <RadioOption value={klageVurderingOmgjoerType.DELVIS_MEDHOLD_I_KLAGE} label={{ id: 'Klage.Behandle.DelvisOmgjort' }} />
          </RadioGroupField>
        </ArrowBox>
      )}
      {(klageVurdering.kode === klageVurderingType.OPPHEVE_YTELSESVEDTAK)
      && (
        <ArrowBox>
          <SelectField
            readOnly={readOnly}
            className={readOnly ? styles.selectReadOnly : null}
            name="klageMedholdArsak"
            selectValues={medholdOptions}
            label={intl.formatMessage({ id: 'Klage.ResolveKlage.Cause' })}
            validate={[required]}
            bredde="xl"
          />
        </ArrowBox>
      )}
    </div>
  );
};

KlageVurderingRadioOptionsNfp.defaultProps = {
  readOnly: true,
};

export default injectIntl(KlageVurderingRadioOptionsNfp);
