import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';

import { required } from '@fpsak-frontend/utils';
import klageVurderingType from '@fpsak-frontend/kodeverk/src/klageVurdering';
import { ArrowBox, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { RadioGroupField, RadioOption, SelectField } from '@fpsak-frontend/form-hooks';
import { ProsessStegBegrunnelseTextFieldNew } from '@fpsak-frontend/prosess-felles';
import klageVurderingOmgjoerType from '@fpsak-frontend/kodeverk/src/klageVurderingOmgjoer';
import { Kodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';

import styles from './klageVurderingRadioOptionsKa.less';

interface OwnProps {
  readOnly?: boolean;
  medholdReasons: KodeverkMedNavn[];
  klageVurdering?: Kodeverk;
}

const KlageVurderingRadioOptionsKa: FunctionComponent<OwnProps> = ({
  readOnly,
  medholdReasons,
  klageVurdering,
}) => {
  const intl = useIntl();
  const medholdOptions = medholdReasons.map((mo: KodeverkMedNavn) => <option key={mo.kode} value={mo.kode}>{mo.navn}</option>);
  return (
    <div>
      <ProsessStegBegrunnelseTextFieldNew
        readOnly={readOnly}
        text={intl.formatMessage({ id: 'KlageVurderingRadioOptionsKa.VurderingForKlage' })}
      />
      <VerticalSpacer sixteenPx />
      <Row>
        <Column xs="4">
          <RadioGroupField
            name="klageVurdering.kode"
            validate={[required]}
            direction="vertical"
            readOnly={readOnly}
          >
            <RadioOption value={klageVurderingType.STADFESTE_YTELSESVEDTAK} label={intl.formatMessage({ id: 'Klage.ResolveKlage.KeepVedtakNk' })} />
            <RadioOption value={klageVurderingType.MEDHOLD_I_KLAGE} label={intl.formatMessage({ id: 'Klage.ResolveKlage.ChangeVedtak' })} />
          </RadioGroupField>
        </Column>
        <Column xs="4">
          <RadioGroupField
            name="klageVurdering.kode"
            validate={[required]}
            readOnly={readOnly}
            className={readOnly ? styles.selectReadOnly : null}
            direction="vertical"
          >
            <RadioOption value={klageVurderingType.HJEMSENDE_UTEN_Å_OPPHEVE} label={intl.formatMessage({ id: 'Klage.Behandle.Hjemsendt' })} />
            <RadioOption value={klageVurderingType.OPPHEVE_YTELSESVEDTAK} label={intl.formatMessage({ id: 'Klage.ResolveKlage.NullifyVedtak' })} />
          </RadioGroupField>
        </Column>
      </Row>
      {(klageVurdering?.kode === klageVurderingType.MEDHOLD_I_KLAGE)
    && (
      <Row>
        <Column xs="4">
          <ArrowBox>
            <SelectField
              readOnly={readOnly}
              name="klageMedholdArsak.kode"
              selectValues={medholdOptions}
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
        </Column>
      </Row>
    )}
      {(klageVurdering?.kode === klageVurderingType.OPPHEVE_YTELSESVEDTAK || klageVurdering?.kode === klageVurderingType.HJEMSENDE_UTEN_Å_OPPHEVE)
      && (
        <Row>
          <Column xs="4" />
          <Column xs="4">
            <ArrowBox>
              <SelectField
                readOnly={readOnly}
                name="klageMedholdArsak.kode"
                className={readOnly ? styles.selectReadOnly : null}
                selectValues={medholdOptions}
                label={intl.formatMessage({ id: 'Klage.ResolveKlage.Cause' })}
                validate={[required]}
                bredde="xl"
              />
            </ArrowBox>
          </Column>
        </Row>
      )}
    </div>
  );
};

export default KlageVurderingRadioOptionsKa;
