import React, { FunctionComponent } from 'react';
import {
  FormattedMessage,
} from 'react-intl';
import { BodyShort, Heading, Label } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import ankeVurderingOmgjoer from '@fpsak-frontend/kodeverk/src/ankeVurderingOmgjoer';
import ankeVurderingType from '@fpsak-frontend/kodeverk/src/ankeVurdering';
import { AlleKodeverk, AnkeVurdering } from '@fpsak-frontend/types';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

interface OwnProps {
  ankeVurdering?: AnkeVurdering;
  alleKodeverk: AlleKodeverk;
}

const TrygderettsbehandlingForm: FunctionComponent<OwnProps> = ({
  ankeVurdering,
  alleKodeverk,
}) => {
  const avr = ankeVurdering ? ankeVurdering.ankeVurderingResultat : null;

  const ankeOmgorArsaker = alleKodeverk[kodeverkTyper.ANKE_OMGJOER_AARSAK];

  const behandlesKabal = ankeVurdering && ankeVurdering.underBehandlingKabal ? ankeVurdering.underBehandlingKabal : false;
  const behandletKabal = ankeVurdering && ankeVurdering.behandletAvKabal ? ankeVurdering.behandletAvKabal : false;

  return (
    <>
      {behandlesKabal && (
        <>
          <Heading size="small"><FormattedMessage id="Ankebehandling.Merknad.SeKabalText" /></Heading>
          <VerticalSpacer sixteenPx />
        </>
      )}
      {!behandlesKabal && !behandletKabal && (
        <>
          <Label size="small">
            <FormattedMessage id="Ankebehandling.Merknad.Merknader" />
          </Label>
          <BodyShort size="small">
            {avr.erMerknaderMottatt
              ? <FormattedMessage id="Ankebehandling.Merknad.Merknader.Ja" /> : <FormattedMessage id="Ankebehandling.Merknad.Merknader.Nei" />}
          </BodyShort>
          <VerticalSpacer sixteenPx />
          <Label size="small">
            <FormattedMessage id="Ankebehandling.Fritekst" />
          </Label>
          <BodyShort size="small">
            {avr.merknadKommentar}
          </BodyShort>
          <VerticalSpacer sixteenPx />
          <Label size="small">
            <FormattedMessage id="Ankebehandling.Resultat" />
          </Label>
          <BodyShort size="small">
            {avr.trygderettVurdering === ankeVurderingType.ANKE_OMGJOER && <FormattedMessage id="Ankebehandling.Resultat.Omgjør" />}
            {avr.trygderettVurdering === ankeVurderingType.ANKE_OPPHEVE_OG_HJEMSENDE && <FormattedMessage id="Ankebehandling.Resultat.Opphev" />}
            {avr.trygderettVurdering === ankeVurderingType.ANKE_HJEMSENDE_UTEN_OPPHEV && <FormattedMessage id="Ankebehandling.Resultat.Hjemsend" />}
            {avr.trygderettVurdering === ankeVurderingType.ANKE_AVVIS && <FormattedMessage id="Ankebehandling.Resultat.Avvis" />}
            {avr.trygderettVurdering === ankeVurderingType.ANKE_STADFESTE_YTELSESVEDTAK && <FormattedMessage id="Ankebehandling.Resultat.Stadfest" />}
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
            {ankeOmgorArsaker.find((aoa) => aoa.kode === avr.trygderettOmgjoerArsak)?.navn}
          </BodyShort>
          <VerticalSpacer sixteenPx />
          <BodyShort size="small">
            {avr.trygderettVurderingOmgjoer === ankeVurderingOmgjoer.ANKE_TIL_GUNST
              && <FormattedMessage id="Ankebehandling.VurderingOmgjoer.Gunst" />}
            {avr.trygderettVurderingOmgjoer === ankeVurderingOmgjoer.ANKE_TIL_UGUNST && <FormattedMessage id="Ankebehandling.VurderingOmgjoer.Ugunst" />}
            {avr.trygderettVurderingOmgjoer === ankeVurderingOmgjoer.ANKE_DELVIS_OMGJOERING_TIL_GUNST
              && <FormattedMessage id="Ankebehandling.VurderingOmgjoer.Delvis" />}
          </BodyShort>
        </>
      )}
      {(ankeVurderingType.ANKE_OPPHEVE_OG_HJEMSENDE === avr.trygderettVurdering
        || ankeVurderingType.ANKE_HJEMSENDE_UTEN_OPPHEV === avr.trygderettVurdering) && (
        <>
          <VerticalSpacer sixteenPx />
          <Label size="small">
            <FormattedMessage id="Ankebehandling.OmgjoeringArsak" />
          </Label>
          <BodyShort size="small">
            {ankeOmgorArsaker.find((aoa) => aoa.kode === avr.trygderettOmgjoerArsak)?.navn}
          </BodyShort>
        </>
      )}
    </>
  );
};

export default TrygderettsbehandlingForm;
