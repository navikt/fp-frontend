import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';

import { required } from '@navikt/ft-utils';
import klageVurderingType from '@fpsak-frontend/kodeverk/src/klageVurdering';
import { ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { RadioGroupField, RadioOption, SelectField } from '@fpsak-frontend/form-hooks';
import { ProsessStegBegrunnelseTextFieldNew } from '@fpsak-frontend/prosess-felles';
import klageVurderingOmgjoerType from '@fpsak-frontend/kodeverk/src/klageVurderingOmgjoer';
import { KodeverkMedNavn } from '@fpsak-frontend/types';

import styles from './klageVurderingRadioOptionsKa.less';

interface OwnProps {
  readOnly?: boolean;
  medholdReasons: KodeverkMedNavn[];
  klageVurdering?: string;
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
            name="klageVurdering"
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
            name="klageVurdering"
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
      {(klageVurdering === klageVurderingType.MEDHOLD_I_KLAGE)
    && (
      <Row>
        <Column xs="4">
          <ArrowBox>
            <SelectField
              readOnly={readOnly}
              name="klageMedholdArsak"
              selectValues={medholdOptions}
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
              <RadioOption value={klageVurderingOmgjoerType.GUNST_MEDHOLD_I_KLAGE} label={intl.formatMessage({ id: 'Klage.Behandle.Omgjort' })} />
              <RadioOption value={klageVurderingOmgjoerType.UGUNST_MEDHOLD_I_KLAGE} label={intl.formatMessage({ id: 'Klage.Behandle.Ugunst' })} />
              <RadioOption value={klageVurderingOmgjoerType.DELVIS_MEDHOLD_I_KLAGE} label={intl.formatMessage({ id: 'Klage.Behandle.DelvisOmgjort' })} />
            </RadioGroupField>
          </ArrowBox>
        </Column>
      </Row>
    )}
      {(klageVurdering === klageVurderingType.OPPHEVE_YTELSESVEDTAK || klageVurdering === klageVurderingType.HJEMSENDE_UTEN_Å_OPPHEVE)
      && (
        <Row>
          <Column xs="4" />
          <Column xs="4">
            <ArrowBox>
              <SelectField
                readOnly={readOnly}
                name="klageMedholdArsak"
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
