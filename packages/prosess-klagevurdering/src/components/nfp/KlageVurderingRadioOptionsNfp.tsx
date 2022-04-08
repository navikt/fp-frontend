import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import klageVurderingType from '@fpsak-frontend/kodeverk/src/klageVurdering';
import { required } from '@navikt/ft-utils';
import { ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { RadioGroupField, RadioOption, SelectField } from '@navikt/ft-form-hooks';
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
    <div>
      <RadioGroupField
        name="klageVurdering"
        validate={[required]}
        readOnly={readOnly}
        className={readOnly ? styles.selectReadOnly : null}
      >
        <RadioOption value={klageVurderingType.MEDHOLD_I_KLAGE} label={intl.formatMessage({ id: 'Klage.ResolveKlage.ChangeVedtak' })} />
        <RadioOption value={klageVurderingType.STADFESTE_YTELSESVEDTAK} label={intl.formatMessage({ id: 'Klage.ResolveKlage.KeepVedtakNfp' })} />
      </RadioGroupField>
      {(klageVurdering === klageVurderingType.MEDHOLD_I_KLAGE)
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
            <RadioOption value={klageVurderingOmgjoerType.GUNST_MEDHOLD_I_KLAGE} label={intl.formatMessage({ id: 'Klage.Behandle.Omgjort' })} />
            <RadioOption value={klageVurderingOmgjoerType.UGUNST_MEDHOLD_I_KLAGE} label={intl.formatMessage({ id: 'Klage.Behandle.Ugunst' })} />
            <RadioOption value={klageVurderingOmgjoerType.DELVIS_MEDHOLD_I_KLAGE} label={intl.formatMessage({ id: 'Klage.Behandle.DelvisOmgjort' })} />
          </RadioGroupField>
        </ArrowBox>
      )}
      <SelectField
        readOnly={readOnly}
        name="klageHjemmel"
        selectValues={hjemmelOptions}
        className={readOnly ? styles.selectReadOnly : null}
        label={intl.formatMessage({ id: 'Klage.ResolveKlage.Hjemmel' })}
        validate={[required]}
        bredde="xl"
      />
      <VerticalSpacer sixteenPx />
    </div>
  );
};

export default KlageVurderingRadioOptionsNfp;
