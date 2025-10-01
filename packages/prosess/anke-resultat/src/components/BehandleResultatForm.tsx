import { type ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { Detail, Heading, Label, VStack } from '@navikt/ds-react';

import type { AlleKodeverk, AnkeVurdering } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

interface Props {
  ankeVurderingResultat?: AnkeVurdering['ankeVurderingResultat'];
}

const ResultatEnkel = ({ ankeVurderingResultat }: Props): ReactElement => (
  <VStack gap="space-16">
    <Detail>
      <FormattedMessage id="Ankebehandling.Resultat.Innstilling.Stadfest" />
    </Detail>
    <VStack gap="space-4">
      <Label size="small">
        <FormattedMessage id="Ankebehandling.Resultat.Innstilling.Begrunnelse" />
      </Label>
      <Detail>{ankeVurderingResultat?.begrunnelse}</Detail>
    </VStack>
  </VStack>
);

const ResultatOpphev = ({ ankeVurderingResultat }: Props): ReactElement => (
  <VStack gap="space-16">
    <Detail>
      <FormattedMessage id="Ankebehandling.Resultat.Innstilling.Oppheves" />
    </Detail>
    <VStack gap="space-4">
      <Label size="small">
        <FormattedMessage id="Ankebehandling.Resultat.Innstilling.Begrunnelse" />
      </Label>
      <Detail>{ankeVurderingResultat?.begrunnelse}</Detail>
    </VStack>
  </VStack>
);

const ResultatHjemsend = ({ ankeVurderingResultat }: Props): ReactElement => (
  <VStack gap="space-16">
    <Detail>
      <FormattedMessage id="Ankebehandling.Resultat.Innstilling.Hjemsendes" />
    </Detail>
    <VStack gap="space-4">
      <Label size="small">
        <FormattedMessage id="Ankebehandling.Resultat.Innstilling.Begrunnelse" />
      </Label>
      <Detail>{ankeVurderingResultat?.begrunnelse}</Detail>
    </VStack>
  </VStack>
);

const ResultatAvvise = ({ ankeVurderingResultat }: Props): ReactElement => (
  <VStack gap="space-16">
    <Detail>
      {ankeVurderingResultat?.påAnketKlageBehandlingUuid && (
        <FormattedMessage id="Ankebehandling.Resultat.Innstilling.Avvises" />
      )}
      {!ankeVurderingResultat?.påAnketKlageBehandlingUuid && (
        <FormattedMessage id="Ankebehandling.Resultat.Innstilling.AvvisesUten" />
      )}
    </Detail>
    <VStack gap="space-4">
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
    </VStack>
    <VStack gap="space-4">
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
    </VStack>
    <VStack gap="space-4">
      <Label size="small">
        <FormattedMessage id="Ankebehandling.Resultat.Innstilling.Begrunnelse" />
      </Label>
      <Detail>{ankeVurderingResultat?.begrunnelse}</Detail>
    </VStack>
  </VStack>
);

const hentSpråkkode = (ankeOmgjoerArsak: string | null | undefined): string => {
  switch (ankeOmgjoerArsak) {
    case 'ANKE_TIL_UGUNST':
      return 'Ankebehandling.Resultat.Innstilling.Omgjores.TilUgunst';
    case 'ANKE_TIL_GUNST':
      return 'Ankebehandling.Resultat.Innstilling.Omgjores.TilGunst';
    case 'ANKE_DELVIS_OMGJOERING_TIL_GUNST':
      return 'Ankebehandling.Resultat.Innstilling.Omgjores.Delvis';
    default:
      return '';
  }
};

const ResultatOmgjores = ({
  ankeVurderingResultat,
  alleKodeverk,
}: Props & { alleKodeverk: AlleKodeverk }): ReactElement => (
  <VStack gap="space-16">
    <Detail>
      <FormattedMessage id={hentSpråkkode(ankeVurderingResultat?.ankeVurderingOmgjoer)} />
    </Detail>
    {ankeVurderingResultat?.ankeOmgjoerArsak && (
      <>
        <Detail>
          <FormattedMessage id="Ankebehandling.Resultat.Innstilling.Arsak" />
        </Detail>
        <Detail>
          {alleKodeverk['AnkeOmgjørÅrsak'].find(({ kode }) => kode === ankeVurderingResultat.ankeOmgjoerArsak)?.navn ??
            ''}
        </Detail>
      </>
    )}
    <VStack gap="space-4">
      <Label size="small">
        <FormattedMessage id="Ankebehandling.Resultat.Innstilling.Begrunnelse" />
      </Label>
      <Detail>{ankeVurderingResultat?.begrunnelse}</Detail>
    </VStack>
  </VStack>
);

const AnkeResultat = ({ ankeVurderingResultat }: Props): ReactElement | null => {
  const { alleKodeverk } = usePanelDataContext();

  if (!ankeVurderingResultat) {
    return null;
  }

  switch (ankeVurderingResultat.ankeVurdering) {
    case 'ANKE_STADFESTE_YTELSESVEDTAK':
      return <ResultatEnkel ankeVurderingResultat={ankeVurderingResultat} />;
    case 'ANKE_OPPHEVE_OG_HJEMSENDE':
      return <ResultatOpphev ankeVurderingResultat={ankeVurderingResultat} />;
    case 'ANKE_HJEMSENDE_UTEN_OPPHEV':
      return <ResultatHjemsend ankeVurderingResultat={ankeVurderingResultat} />;
    case 'ANKE_OMGJOER':
      return <ResultatOmgjores ankeVurderingResultat={ankeVurderingResultat} alleKodeverk={alleKodeverk} />;
    case 'ANKE_AVVIS':
      return <ResultatAvvise ankeVurderingResultat={ankeVurderingResultat} />;
    default:
      return <div>???</div>;
  }
};

interface Props {
  ankeVurderingResultat?: AnkeVurdering['ankeVurderingResultat'];
}

export const BehandleResultatForm = ({ ankeVurderingResultat }: Props) => (
  <VStack gap="space-16">
    <Heading size="small" level="2">
      <FormattedMessage id="Ankebehandling.Resultat.Title" />
    </Heading>
    <VStack gap="space-4">
      <Label size="small">
        <FormattedMessage id="Ankebehandling.Resultat.Innstilling" />
      </Label>
      <AnkeResultat ankeVurderingResultat={ankeVurderingResultat} />
    </VStack>
  </VStack>
);
