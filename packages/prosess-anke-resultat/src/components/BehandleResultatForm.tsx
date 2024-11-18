import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { Detail, Heading, Label } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import {
  KodeverkType,
  getKodeverknavnFn,
  AnkeVurdering as AnkeVurderingKodeverk,
  AnkeVurderingOmgjoer,
} from '@navikt/fp-kodeverk';
import { AnkeVurdering, AlleKodeverk } from '@navikt/fp-types';

interface OwnPropsResultat {
  ankeVurderingResultat?: AnkeVurdering['ankeVurderingResultat'];
}

const ResultatEnkel: FunctionComponent<OwnPropsResultat> = ({ ankeVurderingResultat }): ReactElement => (
  <>
    <Detail>
      <FormattedMessage id="Ankebehandling.Resultat.Innstilling.Stadfest" />
    </Detail>
    <VerticalSpacer sixteenPx />
    <Label size="small">
      <FormattedMessage id="Ankebehandling.Resultat.Innstilling.Begrunnelse" />
    </Label>
    <Detail>{ankeVurderingResultat?.begrunnelse}</Detail>
  </>
);

const ResultatOpphev: FunctionComponent<OwnPropsResultat> = ({ ankeVurderingResultat }): ReactElement => (
  <>
    <Detail>
      <FormattedMessage id="Ankebehandling.Resultat.Innstilling.Oppheves" />
    </Detail>
    <VerticalSpacer sixteenPx />
    <Label size="small">
      <FormattedMessage id="Ankebehandling.Resultat.Innstilling.Begrunnelse" />
    </Label>
    <Detail>{ankeVurderingResultat?.begrunnelse}</Detail>
  </>
);

const ResultatHjemsend: FunctionComponent<OwnPropsResultat> = ({ ankeVurderingResultat }): ReactElement => (
  <>
    <Detail>
      <FormattedMessage id="Ankebehandling.Resultat.Innstilling.Hjemsendes" />
    </Detail>
    <VerticalSpacer sixteenPx />
    <Label size="small">
      <FormattedMessage id="Ankebehandling.Resultat.Innstilling.Begrunnelse" />
    </Label>
    <Detail>{ankeVurderingResultat?.begrunnelse}</Detail>
  </>
);

const ResultatAvvise: FunctionComponent<OwnPropsResultat> = ({ ankeVurderingResultat }): ReactElement => (
  <>
    <Detail>
      {ankeVurderingResultat?.påAnketKlageBehandlingUuid && (
        <FormattedMessage id="Ankebehandling.Resultat.Innstilling.Avvises" />
      )}
      {!ankeVurderingResultat?.påAnketKlageBehandlingUuid && (
        <FormattedMessage id="Ankebehandling.Resultat.Innstilling.AvvisesUten" />
      )}
    </Detail>
    <VerticalSpacer sixteenPx />
    <Label size="small">
      <FormattedMessage id="Ankebehandling.Resultat.Innstilling.Arsak" />
    </Label>
    <ul>
      {ankeVurderingResultat?.erAnkerIkkePart && (
        <li>
          <Detail>
            <FormattedMessage id="Ankebehandling.Avvisning.IkkePart" />
          </Detail>
        </li>
      )}
      {ankeVurderingResultat?.erIkkeKonkret && (
        <li>
          <Detail>
            <FormattedMessage id="Ankebehandling.Avvisning.IkkeKonkret" />
          </Detail>
        </li>
      )}
      {ankeVurderingResultat?.erFristIkkeOverholdt && (
        <li>
          <Detail>
            <FormattedMessage id="Ankebehandling.Avvisning.IkkeFrist" />
          </Detail>
        </li>
      )}
      {ankeVurderingResultat?.erIkkeSignert && (
        <li>
          <Detail>
            <FormattedMessage id="Ankebehandling.Avvisning.IkkeSignert" />
          </Detail>
        </li>
      )}
    </ul>
    <Label size="small">
      <FormattedMessage id="Ankebehandling.Realitetsbehandles" />
    </Label>
    <Detail>
      <FormattedMessage
        id={
          ankeVurderingResultat?.erSubsidiartRealitetsbehandles
            ? 'Ankebehandling.Realitetsbehandles.Ja'
            : 'Ankebehandling.Realitetsbehandles.Nei'
        }
      />
    </Detail>
    <VerticalSpacer sixteenPx />
    <Label size="small">
      <FormattedMessage id="Ankebehandling.Resultat.Innstilling.Begrunnelse" />
    </Label>
    <Detail>{ankeVurderingResultat?.begrunnelse}</Detail>
  </>
);

const hentSprakKode = (ankeOmgjoerArsak?: string): string => {
  switch (ankeOmgjoerArsak) {
    case AnkeVurderingOmgjoer.ANKE_TIL_UGUNST:
      return 'Ankebehandling.Resultat.Innstilling.Omgjores.TilUgunst';
    case AnkeVurderingOmgjoer.ANKE_TIL_GUNST:
      return 'Ankebehandling.Resultat.Innstilling.Omgjores.TilGunst';
    case AnkeVurderingOmgjoer.ANKE_DELVIS_OMGJOERING_TIL_GUNST:
      return 'Ankebehandling.Resultat.Innstilling.Omgjores.Delvis';
    default:
      return '';
  }
};

const ResultatOmgjores: FunctionComponent<OwnPropsResultat & { alleKodeverk: AlleKodeverk }> = ({
  ankeVurderingResultat,
  alleKodeverk,
}): ReactElement => (
  <>
    <Detail>
      <FormattedMessage id={hentSprakKode(ankeVurderingResultat?.ankeVurderingOmgjoer)} />
    </Detail>
    <VerticalSpacer sixteenPx />
    {ankeVurderingResultat?.ankeOmgjoerArsak && (
      <>
        <Detail>
          <FormattedMessage id="Ankebehandling.Resultat.Innstilling.Arsak" />
        </Detail>
        <Detail>
          {getKodeverknavnFn(alleKodeverk)(ankeVurderingResultat.ankeOmgjoerArsak, KodeverkType.ANKE_OMGJOER_AARSAK)}
        </Detail>
        <VerticalSpacer sixteenPx />
      </>
    )}
    <Label size="small">
      <FormattedMessage id="Ankebehandling.Resultat.Innstilling.Begrunnelse" />
    </Label>
    <Detail>{ankeVurderingResultat?.begrunnelse}</Detail>
  </>
);

const AnkeResultat: FunctionComponent<OwnPropsResultat & { alleKodeverk: AlleKodeverk }> = ({
  ankeVurderingResultat,
  alleKodeverk,
}): ReactElement | null => {
  if (!ankeVurderingResultat) {
    return null;
  }
  switch (ankeVurderingResultat.ankeVurdering) {
    case AnkeVurderingKodeverk.ANKE_STADFESTE_YTELSESVEDTAK:
      return <ResultatEnkel ankeVurderingResultat={ankeVurderingResultat} />;
    case AnkeVurderingKodeverk.ANKE_OPPHEVE_OG_HJEMSENDE:
      return <ResultatOpphev ankeVurderingResultat={ankeVurderingResultat} />;
    case AnkeVurderingKodeverk.ANKE_HJEMSENDE_UTEN_OPPHEV:
      return <ResultatHjemsend ankeVurderingResultat={ankeVurderingResultat} />;
    case AnkeVurderingKodeverk.ANKE_OMGJOER:
      return <ResultatOmgjores ankeVurderingResultat={ankeVurderingResultat} alleKodeverk={alleKodeverk} />;
    case AnkeVurderingKodeverk.ANKE_AVVIS:
      return <ResultatAvvise ankeVurderingResultat={ankeVurderingResultat} />;
    default:
      return <div>???</div>;
  }
};

interface OwnProps {
  ankeVurderingResultat?: AnkeVurdering['ankeVurderingResultat'];
  alleKodeverk: AlleKodeverk;
}

const BehandleResultatForm: FunctionComponent<OwnProps> = ({ ankeVurderingResultat, alleKodeverk }) => (
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
