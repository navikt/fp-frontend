import { FormattedMessage } from 'react-intl';

import { BodyShort, Heading, Label, VStack } from '@navikt/ds-react';

import { AnkeVurdering as ankeVurderingType, AnkeVurderingOmgjoer } from '@navikt/fp-kodeverk';
import type { AnkeVurdering } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

interface Props {
  ankeVurdering?: AnkeVurdering;
}

export const TrygderettsbehandlingForm = ({ ankeVurdering }: Props) => {
  const avr = ankeVurdering?.ankeVurderingResultat;
  const behandlesKabal = ankeVurdering?.underBehandlingKabal || false;
  const behandlesKabalTrygderett = ankeVurdering?.underBehandlingKabalTrygderett || false;
  const behandletKabal = ankeVurdering?.behandletAvKabal || false;

  const { alleKodeverk } = usePanelDataContext();

  const ankeOmgorArsaker = alleKodeverk['AnkeOmgjørÅrsak'];

  return (
    <VStack gap="space-16">
      <Heading size="small" level="2">
        <FormattedMessage id="Ankebehandling.Merknad.Title" />
      </Heading>
      {behandlesKabal && (
        <Heading size="small" level="3">
          <FormattedMessage id="Ankebehandling.Merknad.SeKabalText" />
        </Heading>
      )}
      {behandletKabal && (
        <Heading size="small" level="3">
          <FormattedMessage id="Ankebehandling.Merknad.BehandletKabal" />
        </Heading>
      )}
      {!behandlesKabal && !behandlesKabalTrygderett && (
        <>
          <VStack gap="space-4">
            <Label size="small">
              <FormattedMessage id="Ankebehandling.Merknad.Merknader" />
            </Label>
            <BodyShort size="small">
              {avr?.erMerknaderMottatt ? (
                <FormattedMessage id="Ankebehandling.Merknad.Merknader.Ja" />
              ) : (
                <FormattedMessage id="Ankebehandling.Merknad.Merknader.Nei" />
              )}
            </BodyShort>
          </VStack>
          <VStack gap="space-4">
            <Label size="small">
              <FormattedMessage id="Ankebehandling.Fritekst" />
            </Label>
            <BodyShort size="small">{avr?.merknadKommentar}</BodyShort>
          </VStack>
          <VStack gap="space-4">
            <Label size="small">
              <FormattedMessage id="Ankebehandling.Resultat" />
            </Label>
            <BodyShort size="small">
              {avr?.trygderettVurdering === ankeVurderingType.ANKE_OMGJOER && (
                <FormattedMessage id="Ankebehandling.Resultat.Omgjør" />
              )}
              {avr?.trygderettVurdering === ankeVurderingType.ANKE_OPPHEVE_OG_HJEMSENDE && (
                <FormattedMessage id="Ankebehandling.Resultat.Opphev" />
              )}
              {avr?.trygderettVurdering === ankeVurderingType.ANKE_HJEMSENDE_UTEN_OPPHEV && (
                <FormattedMessage id="Ankebehandling.Resultat.Hjemsend" />
              )}
              {avr?.trygderettVurdering === ankeVurderingType.ANKE_AVVIS && (
                <FormattedMessage id="Ankebehandling.Resultat.Avvis" />
              )}
              {avr?.trygderettVurdering === ankeVurderingType.ANKE_STADFESTE_YTELSESVEDTAK && (
                <FormattedMessage id="Ankebehandling.Resultat.Stadfest" />
              )}
            </BodyShort>
          </VStack>
        </>
      )}
      {ankeVurderingType.ANKE_OMGJOER === avr?.trygderettVurdering && (
        <>
          <VStack gap="space-4">
            <Label size="small">
              <FormattedMessage id="Ankebehandling.OmgjoeringArsak" />
            </Label>
            <BodyShort size="small">
              {ankeOmgorArsaker.find(aoa => aoa.kode === avr.trygderettOmgjoerArsak)?.navn}
            </BodyShort>
          </VStack>
          <VStack gap="space-4">
            <BodyShort size="small">
              {avr.trygderettVurderingOmgjoer === AnkeVurderingOmgjoer.ANKE_TIL_GUNST && (
                <FormattedMessage id="Ankebehandling.VurderingOmgjoer.Gunst" />
              )}
              {avr.trygderettVurderingOmgjoer === AnkeVurderingOmgjoer.ANKE_TIL_UGUNST && (
                <FormattedMessage id="Ankebehandling.VurderingOmgjoer.Ugunst" />
              )}
              {avr.trygderettVurderingOmgjoer === AnkeVurderingOmgjoer.ANKE_DELVIS_OMGJOERING_TIL_GUNST && (
                <FormattedMessage id="Ankebehandling.VurderingOmgjoer.Delvis" />
              )}
            </BodyShort>
          </VStack>
        </>
      )}
      {(ankeVurderingType.ANKE_OPPHEVE_OG_HJEMSENDE === avr?.trygderettVurdering ||
        ankeVurderingType.ANKE_HJEMSENDE_UTEN_OPPHEV === avr?.trygderettVurdering) &&
        !behandletKabal && (
          <VStack gap="space-4">
            <Label size="small">
              <FormattedMessage id="Ankebehandling.OmgjoeringArsak" />
            </Label>
            <BodyShort size="small">
              {ankeOmgorArsaker.find(aoa => aoa.kode === avr.trygderettOmgjoerArsak)?.navn}
            </BodyShort>
          </VStack>
        )}
    </VStack>
  );
};
