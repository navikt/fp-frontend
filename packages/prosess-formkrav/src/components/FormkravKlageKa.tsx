import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { FormattedMessage, useIntl } from 'react-intl';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { BodyShort, Heading, Label } from '@navikt/ds-react';
import { DATE_TIME_FORMAT } from '@navikt/ft-utils';
import { KodeverkType } from '@navikt/ft-kodeverk';

import { AlleKodeverk, KlageVurdering } from '@navikt/fp-types';

import AvsluttetBehandling from '../types/avsluttetBehandlingTsType';

interface OwnProps {
  klageVurdering: KlageVurdering;
  alleKodeverk: AlleKodeverk;
  avsluttedeBehandlinger: AvsluttetBehandling[];
}

/**
 * FormkravKlageKa
 *
 * Readonly panel for formkrav klage (KA).
 */
const FormkravKlageKa: FunctionComponent<OwnProps> = ({ klageVurdering, alleKodeverk, avsluttedeBehandlinger }) => {
  const intl = useIntl();

  const { klageFormkravResultatKA, underBehandlingKabal, behandletAvKabal } = klageVurdering;

  let vedtak = intl.formatMessage({ id: 'Klage.Formkrav.IkkePåklagdVedtak' });
  if (klageFormkravResultatKA.paKlagdBehandlingUuid) {
    const behandling = avsluttedeBehandlinger.find(b => b.uuid === klageFormkravResultatKA.paKlagdBehandlingUuid);
    const navn = alleKodeverk[KodeverkType.BEHANDLING_TYPE].find(k => k.kode === behandling.type)?.navn;
    vedtak = `${navn} ${moment(behandling.avsluttet).format(DATE_TIME_FORMAT)}`;
  }

  return (
    <>
      <Heading size="small">
        <FormattedMessage id="Klage.Formkrav.Title" />
      </Heading>
      <VerticalSpacer sixteenPx />
      {underBehandlingKabal && (
        <>
          <Heading size="small">
            <FormattedMessage id="Klage.Formkrav.SeKabalText" />
          </Heading>
          <VerticalSpacer sixteenPx />
        </>
      )}
      {!underBehandlingKabal && !behandletAvKabal && (
        <>
          <Label size="small">
            <FormattedMessage id="Klage.Formkrav.VelgVedtak" />
          </Label>
          <VerticalSpacer fourPx />
          <BodyShort size="small">{vedtak}</BodyShort>
          <VerticalSpacer sixteenPx />
          <Label size="small">
            <FormattedMessage id="Klage.Formkrav.ErKlagerPart" />
          </Label>
          <VerticalSpacer fourPx />
          <BodyShort size="small">
            {klageFormkravResultatKA.erKlagerPart ? (
              <FormattedMessage id="Klage.Formkrav.Ja" />
            ) : (
              <FormattedMessage id="Klage.Formkrav.Nei" />
            )}
          </BodyShort>
          <VerticalSpacer sixteenPx />
          <Label size="small">
            <FormattedMessage id="Klage.Formkrav.ErKonkret" />
          </Label>
          <VerticalSpacer fourPx />
          <BodyShort size="small">
            {klageFormkravResultatKA.erKlageKonkret ? (
              <FormattedMessage id="Klage.Formkrav.Ja" />
            ) : (
              <FormattedMessage id="Klage.Formkrav.Nei" />
            )}
          </BodyShort>
          <VerticalSpacer sixteenPx />
          <Label size="small">
            <FormattedMessage id="Klage.Formkrav.ErFristOverholdt" />
          </Label>
          <VerticalSpacer fourPx />
          <BodyShort size="small">
            {klageFormkravResultatKA.erKlagefirstOverholdt ? (
              <FormattedMessage id="Klage.Formkrav.Ja" />
            ) : (
              <FormattedMessage id="Klage.Formkrav.Nei" />
            )}
          </BodyShort>
          <VerticalSpacer sixteenPx />
          <Label size="small">
            <FormattedMessage id="Klage.Formkrav.ErSignert" />
          </Label>
          <VerticalSpacer fourPx />
          <BodyShort size="small">
            {klageFormkravResultatKA.erSignert ? (
              <FormattedMessage id="Klage.Formkrav.Ja" />
            ) : (
              <FormattedMessage id="Klage.Formkrav.Nei" />
            )}
          </BodyShort>
          <VerticalSpacer sixteenPx />
          <Label size="small">
            <FormattedMessage id="Klage.Formkrav.Vurdering" />
          </Label>
          <VerticalSpacer fourPx />
          <BodyShort size="small">{klageFormkravResultatKA.begrunnelse}</BodyShort>
        </>
      )}
    </>
  );
};

export default FormkravKlageKa;
