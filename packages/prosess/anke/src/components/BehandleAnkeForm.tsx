import { FormattedMessage } from 'react-intl';

import { BodyShort, Heading, Label, VStack } from '@navikt/ds-react';
import { dateFormat } from '@navikt/ft-utils';

import type { AlleKodeverk, AnkeVurdering, FagsakBehandlingDto } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

const IKKE_PAA_ANKET_BEHANDLING_ID = '0';

const formatId = (id: string | undefined): string => {
  if (id === undefined || id === '-') {
    return IKKE_PAA_ANKET_BEHANDLING_ID;
  }
  return id;
};

const formatBehandlingId = (
  behandlinger: FagsakBehandlingDto[],
  alleKodeverk: AlleKodeverk,
  vedtak?: string,
): string => {
  const info = behandlinger.find(b => b.uuid === vedtak);
  const behandlingTyper = alleKodeverk['BehandlingType'];
  const behandlingStatuser = alleKodeverk['BehandlingStatus'];

  return info
    ? `${dateFormat(info.opprettet)} - ${behandlingTyper.find(bt => bt.kode === info.type)?.navn} ` +
        `- ${behandlingStatuser.find(bs => bs.kode === info.status)?.navn}`
    : '';
};

interface Props {
  ankeVurdering: AnkeVurdering;
  behandlinger: FagsakBehandlingDto[];
}

/**
 * Setter opp aksjonspunktet for behandling.
 */
export const BehandleAnkeForm = ({ ankeVurdering, behandlinger }: Props) => {
  const avr = ankeVurdering.ankeVurderingResultat;
  const vedtak = avr ? formatId(avr.påAnketKlageBehandlingUuid) : undefined;

  const { alleKodeverk } = usePanelDataContext();

  const ankeOmgorArsaker = alleKodeverk['AnkeOmgjørÅrsak'];

  const behandlesKabal = ankeVurdering.underBehandlingKabal || false;
  const behandletKabal = ankeVurdering.behandletAvKabal || false;

  return (
    <VStack gap="space-16">
      <Heading size="small" level="2">
        <FormattedMessage id="Ankebehandling.Title" />
      </Heading>
      {behandlesKabal && (
        <Heading size="small" level="3">
          <FormattedMessage id="Ankebehandling.SeKabalText" />
        </Heading>
      )}
      {behandletKabal && (
        <Heading size="small" level="3">
          <FormattedMessage id="Ankebehandling.BehandletKabal" />
        </Heading>
      )}
      {!behandlesKabal && (
        <>
          <VStack gap="space-4">
            <Label size="small">
              <FormattedMessage id="Ankebehandling.Resultat.Vedtak" />
            </Label>
            <BodyShort size="small">
              {vedtak === IKKE_PAA_ANKET_BEHANDLING_ID && (
                <FormattedMessage id="Ankebehandling.Resultat.IkkePaaAnketVedtak" />
              )}
              {vedtak !== IKKE_PAA_ANKET_BEHANDLING_ID && formatBehandlingId(behandlinger, alleKodeverk, vedtak)}
            </BodyShort>
          </VStack>
          <VStack gap="space-4">
            <Label size="small">
              <FormattedMessage id="Ankebehandling.Resultat" />
            </Label>
            <BodyShort size="small">
              {avr?.ankeVurdering === 'ANKE_OMGJOER' && <FormattedMessage id="Ankebehandling.Resultat.Omgjør" />}
              {avr?.ankeVurdering === 'ANKE_OPPHEVE_OG_HJEMSENDE' && (
                <FormattedMessage id="Ankebehandling.Resultat.OpphevHjemsend" />
              )}
              {avr?.ankeVurdering === 'ANKE_HJEMSENDE_UTEN_OPPHEV' && (
                <FormattedMessage id="Ankebehandling.Resultat.Hjemsend" />
              )}
              {avr?.ankeVurdering === 'ANKE_AVVIS' && <FormattedMessage id="Ankebehandling.Resultat.Avvis" />}
              {avr?.ankeVurdering === 'ANKE_STADFESTE_YTELSESVEDTAK' && (
                <FormattedMessage id="Ankebehandling.Resultat.Stadfest" />
              )}
            </BodyShort>
          </VStack>
          {'ANKE_AVVIS' === avr?.ankeVurdering && !behandletKabal && (
            <>
              <VStack gap="space-4">
                <Label size="small">
                  <FormattedMessage id="Ankebehandling.Avvisning" />
                </Label>
                {avr.erAnkerIkkePart && (
                  <BodyShort size="small">
                    <FormattedMessage id="Ankebehandling.Avvisning.IkkePart" />
                  </BodyShort>
                )}
                {avr.erIkkeKonkret && (
                  <BodyShort size="small">
                    <FormattedMessage id="Ankebehandling.Avvisning.IkkeKonkret" />
                  </BodyShort>
                )}
                {avr.erFristIkkeOverholdt && (
                  <BodyShort size="small">
                    <FormattedMessage id="Ankebehandling.Avvisning.IkkeFrist" />
                  </BodyShort>
                )}
                {avr.erIkkeSignert && (
                  <BodyShort size="small">
                    <FormattedMessage id="Ankebehandling.Avvisning.IkkeSignert" />
                  </BodyShort>
                )}
              </VStack>
              <VStack gap="space-4">
                <Label size="small">
                  <FormattedMessage id="Ankebehandling.Realitetsbehandles" />
                </Label>
                <BodyShort size="small">
                  {avr.erSubsidiartRealitetsbehandles ? (
                    <FormattedMessage id="Ankebehandling.Realitetsbehandles.Ja" />
                  ) : (
                    <FormattedMessage id="Ankebehandling.Realitetsbehandles.Nei" />
                  )}
                </BodyShort>
              </VStack>
            </>
          )}
          {'ANKE_OMGJOER' === avr?.ankeVurdering && (
            <>
              <VStack gap="space-4">
                <Label size="small">
                  <FormattedMessage id="Ankebehandling.Avvisning" />
                </Label>
                <BodyShort size="small">
                  {ankeOmgorArsaker.find(aoa => aoa.kode === avr.ankeOmgjoerArsak)?.navn}
                </BodyShort>
              </VStack>
              <VStack gap="space-4">
                <BodyShort size="small">
                  {avr.ankeVurderingOmgjoer === 'ANKE_TIL_GUNST' && (
                    <FormattedMessage id="Ankebehandling.VurderingOmgjoer.Gunst" />
                  )}
                  {avr.ankeVurderingOmgjoer === 'ANKE_TIL_UGUNST' && (
                    <FormattedMessage id="Ankebehandling.VurderingOmgjoer.Ugunst" />
                  )}
                  {avr.ankeVurderingOmgjoer === 'ANKE_DELVIS_OMGJOERING_TIL_GUNST' && (
                    <FormattedMessage id="Ankebehandling.VurderingOmgjoer.Delvis" />
                  )}
                </BodyShort>
              </VStack>
            </>
          )}
          {('ANKE_OPPHEVE_OG_HJEMSENDE' === avr?.ankeVurdering ||
            'ANKE_HJEMSENDE_UTEN_OPPHEV' === avr?.ankeVurdering) &&
            !behandletKabal && (
              <VStack gap="space-4">
                <Label size="small">
                  <FormattedMessage id="Ankebehandling.OmgjoeringArsak" />
                </Label>
                <BodyShort size="small">
                  {ankeOmgorArsaker.find(aoa => aoa.kode === avr.ankeOmgjoerArsak)?.navn}
                </BodyShort>
              </VStack>
            )}
          <VStack gap="space-4">
            <Label size="small">
              <FormattedMessage id="Ankebehandling.Begrunnelse" />
            </Label>
            <BodyShort size="small">{avr?.begrunnelse}</BodyShort>
          </VStack>
          <VStack gap="space-4">
            <Label size="small">
              <FormattedMessage id="FritekstAnkeBrevTextField.Fritekst" />
            </Label>
            <BodyShort size="small">{avr?.fritekstTilBrev}</BodyShort>
          </VStack>
        </>
      )}
    </VStack>
  );
};
