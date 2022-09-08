import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import klageVurderingType from '@fpsak-frontend/kodeverk/src/klageVurdering';
import { required } from '@navikt/ft-form-validators';
import { ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { RadioGroupPanel, SelectField } from '@navikt/ft-form-hooks';
import klageVurderingOmgjoerType from '@fpsak-frontend/kodeverk/src/klageVurderingOmgjoer';
import { KodeverkMedNavn } from '@fpsak-frontend/types';

import styles from './klageVurderingRadioOptionsNfp.less';

interface OwnProps {
  readOnly?: boolean;
  medholdReasons: KodeverkMedNavn[];
  alleHjemler: KodeverkMedNavn[];
  alleAktuelleHjemler: string[];
  klageVurdering?: string;
}

const lagHjemler = (kodeverkNavn: KodeverkMedNavn[], kodeverkVerdier: string[]): KodeverkMedNavn[] => kodeverkNavn
  .filter(({ kode }) => kodeverkVerdier.includes(kode))
  .sort((a, b) => a.kode.localeCompare(b.kode));
const lagHjemmelsKoder = (kodeverkVerdier: string[]): string[] => kodeverkVerdier.map((kode) => kode);

export const KlageVurderingRadioOptionsNfp: FunctionComponent<OwnProps> = ({
  readOnly,
  medholdReasons,
  alleHjemler,
  alleAktuelleHjemler,
  klageVurdering,
}) => {
  const intl = useIntl();
  const medholdOptions = medholdReasons.map((mo: KodeverkMedNavn) => <option key={mo.kode} value={mo.kode}>{mo.navn}</option>);
  const hjemmelOptions = lagHjemler(alleHjemler, lagHjemmelsKoder(alleAktuelleHjemler))
    .map((mo: KodeverkMedNavn) => <option key={mo.kode} value={mo.kode}>{mo.navn}</option>);
  return (
    <>
      <RadioGroupPanel
        name="klageVurdering"
        validate={[required]}
        isReadOnly={readOnly}
        isHorizontal
        radios={[{
          value: klageVurderingType.MEDHOLD_I_KLAGE,
          label: intl.formatMessage({ id: 'Klage.ResolveKlage.ChangeVedtak' }),
        }, {
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

export default KlageVurderingRadioOptionsNfp;
