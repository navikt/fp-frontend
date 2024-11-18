import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { BodyShort, Heading, Label } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';

import { AnkeVurdering as AnkeVurderingKodeverk, AnkeVurderingOmgjoer, KodeverkType } from '@navikt/fp-kodeverk';
import { AlleKodeverk, AnkeVurdering } from '@navikt/fp-types';

export type BehandlingInfo = {
  uuid: string;
  opprettet: string;
  type: string;
  status: string;
};

const formatDate = (date: string): string => (date ? moment(date, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '-');

const IKKE_PAA_ANKET_BEHANDLING_ID = '0';

const formatId = (id?: string): string => {
  if (id === null || id === undefined || id === '-') {
    return IKKE_PAA_ANKET_BEHANDLING_ID;
  }
  return id;
};

const formatBehandlingId = (behandlinger: BehandlingInfo[], alleKodeverk: AlleKodeverk, vedtak?: string): string => {
  const info = behandlinger.find(b => b.uuid === vedtak);
  const behandlingTyper = alleKodeverk[KodeverkType.BEHANDLING_TYPE];
  const behandlingStatuser = alleKodeverk[KodeverkType.BEHANDLING_STATUS];

  return info
    ? `${formatDate(info.opprettet)} - ${behandlingTyper.find(bt => bt.kode === info.type)?.navn} ` +
        `- ${behandlingStatuser.find(bs => bs.kode === info.status)?.navn}`
    : '';
};

interface OwnProps {
  ankeVurdering: AnkeVurdering;
  behandlinger: BehandlingInfo[];
  alleKodeverk: AlleKodeverk;
}

/**
 * Setter opp aksjonspunktet for behandling.
 */
const BehandleAnkeForm: FunctionComponent<OwnProps> = ({ ankeVurdering, behandlinger, alleKodeverk }) => {
  const avr = ankeVurdering.ankeVurderingResultat;
  const vedtak = avr ? formatId(avr.påAnketKlageBehandlingUuid) : undefined;

  const ankeOmgorArsaker = alleKodeverk[KodeverkType.ANKE_OMGJOER_AARSAK];

  const behandlesKabal = ankeVurdering?.underBehandlingKabal || false;
  const behandletKabal = ankeVurdering?.behandletAvKabal || false;

  return (
    <>
      <Heading size="small">
        <FormattedMessage id="Ankebehandling.Title" />
      </Heading>
      <VerticalSpacer sixteenPx />
      {behandlesKabal && (
        <>
          <Heading size="small">
            <FormattedMessage id="Ankebehandling.SeKabalText" />
          </Heading>
          <VerticalSpacer sixteenPx />
        </>
      )}
      {behandletKabal && (
        <>
          <Heading size="small">
            <FormattedMessage id="Ankebehandling.BehandletKabal" />
          </Heading>
          <VerticalSpacer sixteenPx />
        </>
      )}
      {!behandlesKabal && (
        <>
          <Label size="small">
            <FormattedMessage id="Ankebehandling.Resultat.Vedtak" />
          </Label>
          <BodyShort size="small">
            {vedtak === IKKE_PAA_ANKET_BEHANDLING_ID && (
              <FormattedMessage id="Ankebehandling.Resultat.IkkePaaAnketVedtak" />
            )}
            {vedtak !== IKKE_PAA_ANKET_BEHANDLING_ID && formatBehandlingId(behandlinger, alleKodeverk, vedtak)}
          </BodyShort>
          <VerticalSpacer sixteenPx />
          <Label size="small">
            <FormattedMessage id="Ankebehandling.Resultat" />
          </Label>
          <BodyShort size="small">
            {avr?.ankeVurdering === AnkeVurderingKodeverk.ANKE_OMGJOER && (
              <FormattedMessage id="Ankebehandling.Resultat.Omgjør" />
            )}
            {avr?.ankeVurdering === AnkeVurderingKodeverk.ANKE_OPPHEVE_OG_HJEMSENDE && (
              <FormattedMessage id="Ankebehandling.Resultat.OpphevHjemsend" />
            )}
            {avr?.ankeVurdering === AnkeVurderingKodeverk.ANKE_HJEMSENDE_UTEN_OPPHEV && (
              <FormattedMessage id="Ankebehandling.Resultat.Hjemsend" />
            )}
            {avr?.ankeVurdering === AnkeVurderingKodeverk.ANKE_AVVIS && (
              <FormattedMessage id="Ankebehandling.Resultat.Avvis" />
            )}
            {avr?.ankeVurdering === AnkeVurderingKodeverk.ANKE_STADFESTE_YTELSESVEDTAK && (
              <FormattedMessage id="Ankebehandling.Resultat.Stadfest" />
            )}
          </BodyShort>
          {AnkeVurderingKodeverk.ANKE_AVVIS === avr?.ankeVurdering && !behandletKabal && (
            <>
              <VerticalSpacer sixteenPx />
              <Label size="small">
                <FormattedMessage id="Ankebehandling.Avvisning" />
              </Label>
              {avr?.erAnkerIkkePart && (
                <BodyShort size="small">
                  <FormattedMessage id="Ankebehandling.Avvisning.IkkePart" />
                </BodyShort>
              )}
              {avr?.erIkkeKonkret && (
                <BodyShort size="small">
                  <FormattedMessage id="Ankebehandling.Avvisning.IkkeKonkret" />
                </BodyShort>
              )}
              {avr?.erFristIkkeOverholdt && (
                <BodyShort size="small">
                  <FormattedMessage id="Ankebehandling.Avvisning.IkkeFrist" />
                </BodyShort>
              )}
              {avr?.erIkkeSignert && (
                <BodyShort size="small">
                  <FormattedMessage id="Ankebehandling.Avvisning.IkkeSignert" />
                </BodyShort>
              )}
              <VerticalSpacer sixteenPx />
              <Label size="small">
                <FormattedMessage id="Ankebehandling.Realitetsbehandles" />
              </Label>
              <BodyShort size="small">
                {avr?.erSubsidiartRealitetsbehandles ? (
                  <FormattedMessage id="Ankebehandling.Realitetsbehandles.Ja" />
                ) : (
                  <FormattedMessage id="Ankebehandling.Realitetsbehandles.Nei" />
                )}
              </BodyShort>
            </>
          )}
          {AnkeVurderingKodeverk.ANKE_OMGJOER === avr?.ankeVurdering && (
            <>
              <VerticalSpacer sixteenPx />
              <Label size="small">
                <FormattedMessage id="Ankebehandling.Avvisning" />
              </Label>
              <BodyShort size="small">
                {ankeOmgorArsaker.find(aoa => aoa.kode === avr?.ankeOmgjoerArsak)?.navn}
              </BodyShort>
              <VerticalSpacer sixteenPx />
              <BodyShort size="small">
                {avr?.ankeVurderingOmgjoer === AnkeVurderingOmgjoer.ANKE_TIL_GUNST && (
                  <FormattedMessage id="Ankebehandling.VurderingOmgjoer.Gunst" />
                )}
                {avr?.ankeVurderingOmgjoer === AnkeVurderingOmgjoer.ANKE_TIL_UGUNST && (
                  <FormattedMessage id="Ankebehandling.VurderingOmgjoer.Ugunst" />
                )}
                {avr?.ankeVurderingOmgjoer === AnkeVurderingOmgjoer.ANKE_DELVIS_OMGJOERING_TIL_GUNST && (
                  <FormattedMessage id="Ankebehandling.VurderingOmgjoer.Delvis" />
                )}
              </BodyShort>
            </>
          )}
          {(AnkeVurderingKodeverk.ANKE_OPPHEVE_OG_HJEMSENDE === avr?.ankeVurdering ||
            AnkeVurderingKodeverk.ANKE_HJEMSENDE_UTEN_OPPHEV === avr?.ankeVurdering) &&
            !behandletKabal && (
              <>
                <VerticalSpacer sixteenPx />
                <Label size="small">
                  <FormattedMessage id="Ankebehandling.OmgjoeringArsak" />
                </Label>
                <BodyShort size="small">
                  {ankeOmgorArsaker.find(aoa => aoa.kode === avr.ankeOmgjoerArsak)?.navn}
                </BodyShort>
              </>
            )}
          <VerticalSpacer sixteenPx />
          <Label size="small">
            <FormattedMessage id="Ankebehandling.Begrunnelse" />
          </Label>
          <BodyShort size="small">{avr?.begrunnelse}</BodyShort>
          <VerticalSpacer sixteenPx />
          <Label size="small">
            <FormattedMessage id="FritekstAnkeBrevTextField.Fritekst" />
          </Label>
          <BodyShort size="small">{avr?.fritekstTilBrev}</BodyShort>
          <VerticalSpacer sixteenPx />
        </>
      )}
    </>
  );
};

export default BehandleAnkeForm;
