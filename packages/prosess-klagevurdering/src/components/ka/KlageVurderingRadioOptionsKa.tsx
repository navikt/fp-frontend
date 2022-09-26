import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import { required } from '@navikt/ft-form-validators';
import klageVurderingType from '@fpsak-frontend/kodeverk/src/klageVurdering';
import {
  ArrowBox, FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { RadioGroupPanel, SelectField } from '@navikt/ft-form-hooks';
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
    <>
      <ProsessStegBegrunnelseTextFieldNew
        readOnly={readOnly}
        text={intl.formatMessage({ id: 'KlageVurderingRadioOptionsKa.VurderingForKlage' })}
      />
      <VerticalSpacer sixteenPx />
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={styles.colWidth}>
            <RadioGroupPanel
              name="klageVurdering"
              validate={[required]}
              isReadOnly={readOnly}
              radios={[{
                value: klageVurderingType.STADFESTE_YTELSESVEDTAK,
                label: intl.formatMessage({ id: 'Klage.ResolveKlage.KeepVedtakNk' }),
              }, {
                value: klageVurderingType.MEDHOLD_I_KLAGE,
                label: intl.formatMessage({ id: 'Klage.ResolveKlage.ChangeVedtak' }),
              }]}
            />
          </FlexColumn>
          <FlexColumn>
            <RadioGroupPanel
              name="klageVurdering"
              validate={[required]}
              isReadOnly={readOnly}
              radios={[{
                value: klageVurderingType.HJEMSENDE_UTEN_Å_OPPHEVE,
                label: intl.formatMessage({ id: 'Klage.Behandle.Hjemsendt' }),
              }, {
                value: klageVurderingType.OPPHEVE_YTELSESVEDTAK,
                label: intl.formatMessage({ id: 'Klage.ResolveKlage.NullifyVedtak' }),
              }]}
            />
          </FlexColumn>
        </FlexRow>
        {klageVurdering === klageVurderingType.MEDHOLD_I_KLAGE && (
          <FlexRow>
            <FlexColumn>
              <VerticalSpacer sixteenPx />
              <ArrowBox>
                <SelectField
                  readOnly={readOnly}
                  name="klageMedholdArsak"
                  selectValues={medholdOptions}
                  label={intl.formatMessage({ id: 'Klage.ResolveKlage.Cause' })}
                  validate={[required]}
                />
                <VerticalSpacer sixteenPx />
                <RadioGroupPanel
                  name="klageVurderingOmgjoer"
                  validate={[required]}
                  isReadOnly={readOnly}
                  radios={[{
                    value: klageVurderingOmgjoerType.GUNST_MEDHOLD_I_KLAGE,
                    label: intl.formatMessage({ id: 'Klage.Behandle.Omgjort' }),
                  }, {
                    value: klageVurderingOmgjoerType.UGUNST_MEDHOLD_I_KLAGE,
                    label: intl.formatMessage({ id: 'Klage.Behandle.Ugunst' }),
                  }, {
                    value: klageVurderingOmgjoerType.DELVIS_MEDHOLD_I_KLAGE,
                    label: intl.formatMessage({ id: 'Klage.Behandle.DelvisOmgjort' }),
                  }]}
                />
              </ArrowBox>
            </FlexColumn>
          </FlexRow>
        )}
        {(klageVurdering === klageVurderingType.OPPHEVE_YTELSESVEDTAK || klageVurdering === klageVurderingType.HJEMSENDE_UTEN_Å_OPPHEVE) && (
          <FlexContainer>
            <VerticalSpacer sixteenPx />
            <FlexRow>
              <FlexColumn className={styles.colWidth} />
              <FlexColumn>
                <ArrowBox>
                  <SelectField
                    readOnly={readOnly}
                    name="klageMedholdArsak"
                    className={readOnly ? styles.selectReadOnly : null}
                    selectValues={medholdOptions}
                    label={intl.formatMessage({ id: 'Klage.ResolveKlage.Cause' })}
                    validate={[required]}
                  />
                </ArrowBox>
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
        )}
      </FlexContainer>
    </>
  );
};

export default KlageVurderingRadioOptionsKa;
