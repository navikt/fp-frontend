import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { BodyShort, Heading, Label } from '@navikt/ds-react';

import klageVurderingType from '@navikt/fp-kodeverk/src/klageVurdering';
import klageVurderingOmgjoerType from '@navikt/fp-kodeverk/src/klageVurderingOmgjoer';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { KlageVurdering, AlleKodeverk } from '@navikt/fp-types';
import { KodeverkType } from '@navikt/ft-kodeverk';

interface OwnProps {
  alleKodeverk: AlleKodeverk;
  klageVurdering: KlageVurdering;
}

/**
 * BehandleklageformNfp
 *
 * Setter opp readonly-panel for behandling av klage (KA).
 */
const BehandleKlageFormKa: FunctionComponent<OwnProps> = ({
  klageVurdering,
  alleKodeverk,
}) => {
  const intl = useIntl();

  const {
    klageVurderingResultatNK: {
      begrunnelse, fritekstTilBrev, klageVurdering: vurdering, klageMedholdArsak, klageVurderingOmgjoer,
    },
  } = klageVurdering;

  const medholdReasons = alleKodeverk[KodeverkType.KLAGE_MEDHOLD_ARSAK];

  return (
    <>
      <Heading size="small">{intl.formatMessage({ id: 'Klage.ResolveKlage.Title' })}</Heading>
      <VerticalSpacer sixteenPx />
      <Label size="small">
        <FormattedMessage id="KlageVurderingRadioOptionsKa.VurderingForKlage" />
      </Label>
      <BodyShort size="small">
        {vurdering === klageVurderingType.STADFESTE_YTELSESVEDTAK && <FormattedMessage id="Klage.ResolveKlage.KeepVedtakNk" />}
        {vurdering === klageVurderingType.MEDHOLD_I_KLAGE && <FormattedMessage id="Klage.ResolveKlage.ChangeVedtak" />}
        {vurdering === klageVurderingType.HJEMSENDE_UTEN_Å_OPPHEVE && <FormattedMessage id="Klage.Behandle.Hjemsendt" />}
        {vurdering === klageVurderingType.OPPHEVE_YTELSESVEDTAK && <FormattedMessage id="Klage.ResolveKlage.NullifyVedtak" />}
      </BodyShort>
      <VerticalSpacer sixteenPx />
      {vurdering === klageVurderingType.MEDHOLD_I_KLAGE && (
        <>
          <Label size="small">
            <FormattedMessage id="Klage.ResolveKlage.Cause" />
          </Label>
          <BodyShort size="small">
            {medholdReasons.find((mo) => mo.kode === klageMedholdArsak)?.navn}
          </BodyShort>
          <VerticalSpacer sixteenPx />
          <BodyShort size="small">
            {klageVurderingOmgjoer === klageVurderingOmgjoerType.GUNST_MEDHOLD_I_KLAGE && <FormattedMessage id="Klage.Behandle.Omgjort" />}
            {klageVurderingOmgjoer === klageVurderingOmgjoerType.UGUNST_MEDHOLD_I_KLAGE && <FormattedMessage id="Klage.Behandle.Ugunst" />}
            {klageVurderingOmgjoer === klageVurderingOmgjoerType.DELVIS_MEDHOLD_I_KLAGE && <FormattedMessage id="Klage.Behandle.DelvisOmgjort" />}
          </BodyShort>
          <VerticalSpacer sixteenPx />
        </>
      )}
      {(vurdering === klageVurderingType.OPPHEVE_YTELSESVEDTAK || vurdering === klageVurderingType.HJEMSENDE_UTEN_Å_OPPHEVE) && (
        <>
          <Label size="small">
            <FormattedMessage id="Klage.ResolveKlage.Cause" />
          </Label>
          <BodyShort size="small">
            {medholdReasons.find((mo) => mo.kode === klageMedholdArsak)?.navn}
          </BodyShort>
          <VerticalSpacer sixteenPx />
        </>
      )}
      <Label size="small">
        <FormattedMessage id="FritekstKlageBrevTextField.Fritekst" />
      </Label>
      <BodyShort size="small">
        {fritekstTilBrev}
      </BodyShort>
      <VerticalSpacer sixteenPx />
      <Label size="small">
        <FormattedMessage id="KlageVurderingRadioOptionsKa.Begrunnelse" />
      </Label>
      <BodyShort size="small">
        {begrunnelse}
      </BodyShort>
      <VerticalSpacer sixteenPx />
    </>
  );
};

export default BehandleKlageFormKa;
