import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort, Heading, Label } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { ankeVurderingOmgjoer, ankeVurdering as ankeVurderingType, KodeverkType } from '@navikt/fp-kodeverk';
import { AlleKodeverk, AnkeVurdering } from '@navikt/fp-types';

interface OwnProps {
  ankeVurdering?: AnkeVurdering;
  alleKodeverk: AlleKodeverk;
}

const TrygderettsbehandlingForm: FunctionComponent<OwnProps> = ({ ankeVurdering, alleKodeverk }) => {
  const avr = ankeVurdering?.ankeVurderingResultat;
  const behandlesKabal = ankeVurdering?.underBehandlingKabal || false;
  const behandlesKabalTrygderett = ankeVurdering?.underBehandlingKabalTrygderett || false;
  const behandletKabal = ankeVurdering?.behandletAvKabal || false;

  const ankeOmgorArsaker = alleKodeverk[KodeverkType.ANKE_OMGJOER_AARSAK];

  return (
    <>
      <Heading size="small">
        <FormattedMessage id="Ankebehandling.Merknad.Title" />
      </Heading>
      <VerticalSpacer sixteenPx />
      {behandlesKabal && (
        <>
          <Heading size="small">
            <FormattedMessage id="Ankebehandling.Merknad.SeKabalText" />
          </Heading>
          <VerticalSpacer sixteenPx />
        </>
      )}
      {behandletKabal && (
        <>
          <Heading size="small">
            <FormattedMessage id="Ankebehandling.Merknad.BehandletKabal" />
          </Heading>
          <VerticalSpacer sixteenPx />
        </>
      )}
      {!behandlesKabal && !behandlesKabalTrygderett && (
        <>
          <Label size="small">
            <FormattedMessage id="Ankebehandling.Merknad.Merknader" />
          </Label>
          <BodyShort size="small">
            {avr.erMerknaderMottatt ? (
              <FormattedMessage id="Ankebehandling.Merknad.Merknader.Ja" />
            ) : (
              <FormattedMessage id="Ankebehandling.Merknad.Merknader.Nei" />
            )}
          </BodyShort>
          <VerticalSpacer sixteenPx />
          <Label size="small">
            <FormattedMessage id="Ankebehandling.Fritekst" />
          </Label>
          <BodyShort size="small">{avr.merknadKommentar}</BodyShort>
          <VerticalSpacer sixteenPx />
          <Label size="small">
            <FormattedMessage id="Ankebehandling.Resultat" />
          </Label>
          <BodyShort size="small">
            {avr.trygderettVurdering === ankeVurderingType.ANKE_OMGJOER && (
              <FormattedMessage id="Ankebehandling.Resultat.Omgjør" />
            )}
            {avr.trygderettVurdering === ankeVurderingType.ANKE_OPPHEVE_OG_HJEMSENDE && (
              <FormattedMessage id="Ankebehandling.Resultat.Opphev" />
            )}
            {avr.trygderettVurdering === ankeVurderingType.ANKE_HJEMSENDE_UTEN_OPPHEV && (
              <FormattedMessage id="Ankebehandling.Resultat.Hjemsend" />
            )}
            {avr.trygderettVurdering === ankeVurderingType.ANKE_AVVIS && (
              <FormattedMessage id="Ankebehandling.Resultat.Avvis" />
            )}
            {avr.trygderettVurdering === ankeVurderingType.ANKE_STADFESTE_YTELSESVEDTAK && (
              <FormattedMessage id="Ankebehandling.Resultat.Stadfest" />
            )}
          </BodyShort>
        </>
      )}
      {ankeVurderingType.ANKE_OMGJOER === avr.trygderettVurdering && (
        <>
          <VerticalSpacer sixteenPx />
          <Label size="small">
            <FormattedMessage id="Ankebehandling.OmgjoeringArsak" />
          </Label>
          <BodyShort size="small">
            {ankeOmgorArsaker.find(aoa => aoa.kode === avr.trygderettOmgjoerArsak)?.navn}
          </BodyShort>
          <VerticalSpacer sixteenPx />
          <BodyShort size="small">
            {avr.trygderettVurderingOmgjoer === ankeVurderingOmgjoer.ANKE_TIL_GUNST && (
              <FormattedMessage id="Ankebehandling.VurderingOmgjoer.Gunst" />
            )}
            {avr.trygderettVurderingOmgjoer === ankeVurderingOmgjoer.ANKE_TIL_UGUNST && (
              <FormattedMessage id="Ankebehandling.VurderingOmgjoer.Ugunst" />
            )}
            {avr.trygderettVurderingOmgjoer === ankeVurderingOmgjoer.ANKE_DELVIS_OMGJOERING_TIL_GUNST && (
              <FormattedMessage id="Ankebehandling.VurderingOmgjoer.Delvis" />
            )}
          </BodyShort>
        </>
      )}
      {(ankeVurderingType.ANKE_OPPHEVE_OG_HJEMSENDE === avr.trygderettVurdering ||
        ankeVurderingType.ANKE_HJEMSENDE_UTEN_OPPHEV === avr.trygderettVurdering) &&
        !behandletKabal && (
          <>
            <VerticalSpacer sixteenPx />
            <Label size="small">
              <FormattedMessage id="Ankebehandling.OmgjoeringArsak" />
            </Label>
            <BodyShort size="small">
              {ankeOmgorArsaker.find(aoa => aoa.kode === avr.trygderettOmgjoerArsak)?.navn}
            </BodyShort>
          </>
        )}
    </>
  );
};

export default TrygderettsbehandlingForm;
