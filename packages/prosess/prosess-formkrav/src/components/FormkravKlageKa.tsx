import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Heading, Label } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { DATE_TIME_FORMAT } from '@navikt/ft-utils';
import moment from 'moment';

import { KodeverkType } from '@navikt/fp-kodeverk';
import type { KlageVurdering } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import type { AvsluttetBehandling } from '../types/avsluttetBehandlingTsType';

interface Props {
  klageVurdering: KlageVurdering;
  avsluttedeBehandlinger: AvsluttetBehandling[];
}

/**
 * FormkravKlageKa
 *
 * Readonly panel for formkrav klage (KA).
 */
export const FormkravKlageKa = ({ klageVurdering, avsluttedeBehandlinger }: Props) => {
  const intl = useIntl();

  const { alleKodeverk } = usePanelDataContext();

  const { klageFormkravResultatKA, underBehandlingKabal, behandletAvKabal } = klageVurdering;

  let vedtak = intl.formatMessage({ id: 'Klage.Formkrav.IkkePåklagdVedtak' });
  if (klageFormkravResultatKA?.paKlagdBehandlingUuid) {
    const behandling = avsluttedeBehandlinger.find(b => b.uuid === klageFormkravResultatKA.paKlagdBehandlingUuid);
    if (behandling) {
      const navn = alleKodeverk[KodeverkType.BEHANDLING_TYPE].find(k => k.kode === behandling.type)?.navn;
      vedtak = `${navn} ${moment(behandling.avsluttet).format(DATE_TIME_FORMAT)}`;
    }
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
            {klageFormkravResultatKA?.erKlagerPart ? (
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
            {klageFormkravResultatKA?.erKlageKonkret ? (
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
            {klageFormkravResultatKA?.erKlagefirstOverholdt ? (
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
            {klageFormkravResultatKA?.erSignert ? (
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
          <BodyShort size="small">{klageFormkravResultatKA?.begrunnelse}</BodyShort>
        </>
      )}
    </>
  );
};
