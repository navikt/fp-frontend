import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { Detail, Heading, Label } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import {
  KodeverkType, getKodeverknavnFn, ankeVurdering, ankeVurderingOmgjoer,
} from '@navikt/fp-kodeverk';
import { AnkeVurdering, AlleKodeverk } from '@navikt/fp-types';

interface OwnPropsResultat {
  ankeVurderingResultat?: AnkeVurdering['ankeVurderingResultat'];
}

const ResultatEnkel: FunctionComponent<OwnPropsResultat> = ({
  ankeVurderingResultat,
}): ReactElement => (
  <>
    <Detail size="small"><FormattedMessage id="Ankebehandling.Resultat.Innstilling.Stadfest" /></Detail>
    <VerticalSpacer sixteenPx />
    <Label size="small"><FormattedMessage id="Ankebehandling.Resultat.Innstilling.Begrunnelse" /></Label>
    <Detail size="small">{ankeVurderingResultat.begrunnelse}</Detail>
  </>
);

const ResultatOpphev: FunctionComponent<OwnPropsResultat> = ({
  ankeVurderingResultat,
}): ReactElement => (
  <>
    <Detail size="small"><FormattedMessage id="Ankebehandling.Resultat.Innstilling.Oppheves" /></Detail>
    <VerticalSpacer sixteenPx />
    <Label size="small"><FormattedMessage id="Ankebehandling.Resultat.Innstilling.Begrunnelse" /></Label>
    <Detail size="small">{ankeVurderingResultat.begrunnelse}</Detail>
  </>
);

const ResultatHjemsend: FunctionComponent<OwnPropsResultat> = ({
  ankeVurderingResultat,
}): ReactElement => (
  <>
    <Detail size="small"><FormattedMessage id="Ankebehandling.Resultat.Innstilling.Hjemsendes" /></Detail>
    <VerticalSpacer sixteenPx />
    <Label size="small"><FormattedMessage id="Ankebehandling.Resultat.Innstilling.Begrunnelse" /></Label>
    <Detail size="small">{ankeVurderingResultat.begrunnelse}</Detail>
  </>
);

const ResultatAvvise: FunctionComponent<OwnPropsResultat> = ({
  ankeVurderingResultat,
}): ReactElement => (
  <>
    <Detail size="small">
      {ankeVurderingResultat.påAnketKlageBehandlingUuid != null && (
        <FormattedMessage id="Ankebehandling.Resultat.Innstilling.Avvises" />
      )}
      {ankeVurderingResultat.påAnketKlageBehandlingUuid == null && (
        <FormattedMessage id="Ankebehandling.Resultat.Innstilling.AvvisesUten" />
      )}
    </Detail>
    <VerticalSpacer sixteenPx />
    <Label size="small"><FormattedMessage id="Ankebehandling.Resultat.Innstilling.Arsak" /></Label>
    <ul>
      {ankeVurderingResultat.erAnkerIkkePart && (
      <li><Detail size="small"><FormattedMessage id="Ankebehandling.Avvisning.IkkePart" /></Detail></li>
      )}
      {ankeVurderingResultat.erIkkeKonkret && (
      <li><Detail size="small"><FormattedMessage id="Ankebehandling.Avvisning.IkkeKonkret" /></Detail></li>
      )}
      {ankeVurderingResultat.erFristIkkeOverholdt && (
      <li><Detail size="small"><FormattedMessage id="Ankebehandling.Avvisning.IkkeFrist" /></Detail></li>
      )}
      {ankeVurderingResultat.erIkkeSignert && (
      <li><Detail size="small"><FormattedMessage id="Ankebehandling.Avvisning.IkkeSignert" /></Detail></li>
      )}
    </ul>
    <Label size="small">
      <FormattedMessage id="Ankebehandling.Realitetsbehandles" />
    </Label>
    <Detail size="small">
      <FormattedMessage id={ankeVurderingResultat.erSubsidiartRealitetsbehandles
        ? 'Ankebehandling.Realitetsbehandles.Ja' : 'Ankebehandling.Realitetsbehandles.Nei'}
      />
    </Detail>
    <VerticalSpacer sixteenPx />
    <Label size="small"><FormattedMessage id="Ankebehandling.Resultat.Innstilling.Begrunnelse" /></Label>
    <Detail size="small">{ankeVurderingResultat.begrunnelse}</Detail>
  </>
);

const hentSprakKode = (ankeOmgjoerArsak: string): string => {
  switch (ankeOmgjoerArsak) {
    case ankeVurderingOmgjoer.ANKE_TIL_UGUNST: return 'Ankebehandling.Resultat.Innstilling.Omgjores.TilUgunst';
    case ankeVurderingOmgjoer.ANKE_TIL_GUNST: return 'Ankebehandling.Resultat.Innstilling.Omgjores.TilGunst';
    case ankeVurderingOmgjoer.ANKE_DELVIS_OMGJOERING_TIL_GUNST: return 'Ankebehandling.Resultat.Innstilling.Omgjores.Delvis';
    default: return '';
  }
};

const ResultatOmgjores: FunctionComponent<OwnPropsResultat & { alleKodeverk: AlleKodeverk; }> = ({
  ankeVurderingResultat,
  alleKodeverk,
}): ReactElement => (
  <>
    <Detail size="small"><FormattedMessage id={hentSprakKode(ankeVurderingResultat.ankeVurderingOmgjoer)} /></Detail>
    <VerticalSpacer sixteenPx />
    {ankeVurderingResultat.ankeOmgjoerArsak && (
      <>
        <Detail size="small"><FormattedMessage id="Ankebehandling.Resultat.Innstilling.Arsak" /></Detail>
        <Detail size="small">{getKodeverknavnFn(alleKodeverk)(ankeVurderingResultat.ankeOmgjoerArsak, KodeverkType.ANKE_OMGJOER_AARSAK)}</Detail>
        <VerticalSpacer sixteenPx />
      </>
    )}
    <Label size="small"><FormattedMessage id="Ankebehandling.Resultat.Innstilling.Begrunnelse" /></Label>
    <Detail size="small">{ankeVurderingResultat.begrunnelse}</Detail>
  </>
);

const AnkeResultat: FunctionComponent<OwnPropsResultat & { alleKodeverk: AlleKodeverk; }> = ({
  ankeVurderingResultat,
  alleKodeverk,
}): ReactElement | null => {
  if (!ankeVurderingResultat) {
    return null;
  }
  switch (ankeVurderingResultat.ankeVurdering) {
    case ankeVurdering.ANKE_STADFESTE_YTELSESVEDTAK: return (<ResultatEnkel ankeVurderingResultat={ankeVurderingResultat} />);
    case ankeVurdering.ANKE_OPPHEVE_OG_HJEMSENDE: return (<ResultatOpphev ankeVurderingResultat={ankeVurderingResultat} />);
    case ankeVurdering.ANKE_HJEMSENDE_UTEN_OPPHEV: return (<ResultatHjemsend ankeVurderingResultat={ankeVurderingResultat} />);
    case ankeVurdering.ANKE_OMGJOER: return (<ResultatOmgjores ankeVurderingResultat={ankeVurderingResultat} alleKodeverk={alleKodeverk} />);
    case ankeVurdering.ANKE_AVVIS: return (<ResultatAvvise ankeVurderingResultat={ankeVurderingResultat} />);
    default: return <div>???</div>;
  }
};

interface OwnProps {
  ankeVurderingResultat?: AnkeVurdering['ankeVurderingResultat'];
  alleKodeverk: AlleKodeverk;
}

const BehandleResultatForm: FunctionComponent<OwnProps> = ({
  ankeVurderingResultat,
  alleKodeverk,
}) => (
  <>
    <Heading size="small">
      <FormattedMessage id="Ankebehandling.Resultat.Title" />
    </Heading>
    <VerticalSpacer fourPx />
    <Label size="small">
      <FormattedMessage id="Ankebehandling.Resultat.Innstilling" />
    </Label>
    <AnkeResultat ankeVurderingResultat={ankeVurderingResultat} alleKodeverk={alleKodeverk} />
  </>
);

export default BehandleResultatForm;
