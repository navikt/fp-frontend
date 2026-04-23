import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Alert, VStack } from '@navikt/ds-react';

import type { BekreftTilrettelegging } from '@navikt/fp-types';

import { filtrerVelferdspermisjoner } from './arbeidsforholdUtils';

export const harUvurderteVelferdspermisjoner = (arbeidsforhold: BekreftTilrettelegging[]) =>
  arbeidsforhold.some(a =>
    filtrerVelferdspermisjoner(a.velferdspermisjoner, a.tilretteleggingBehovFom).some(p => p.erGyldig === undefined),
  );

export const useTilretteleggingFeil = (arbeidsforhold: BekreftTilrettelegging[]) => {
  const [visFeil, setVisFeil] = useState(false);

  const harIkkeVurdertAlleVelferdspermisjoner = harUvurderteVelferdspermisjoner(arbeidsforhold);
  const harIkkeValgtNoenArbeidsforhold = !arbeidsforhold.some(a => a.skalBrukes);
  const harPeriodeSomIkkeErFerdig = arbeidsforhold.some(
    a => a.tilretteleggingDatoer.some(td => !td.fom) || a.avklarteOppholdPerioder.some(td => !td.fom),
  );
  const harArbeidsforholdUtenTilrettelegging = arbeidsforhold.some(
    a => a.skalBrukes && a.tilretteleggingDatoer.length === 0,
  );
  const harGyldig100PermisjonDerEnHarValgtSvp = arbeidsforhold.some(
    a => a.skalBrukes && a.velferdspermisjoner.some(vp => vp.erGyldig && vp.permisjonsprosent === 100),
  );

  const harFeil =
    harIkkeVurdertAlleVelferdspermisjoner ||
    harIkkeValgtNoenArbeidsforhold ||
    harPeriodeSomIkkeErFerdig ||
    harArbeidsforholdUtenTilrettelegging ||
    harGyldig100PermisjonDerEnHarValgtSvp;

  const feilkomponent =
    visFeil && harFeil ? (
      <VStack gap="space-4">
        {harIkkeVurdertAlleVelferdspermisjoner && (
          <Alert variant="error">
            <FormattedMessage id="TilretteleggingFaktaForm.IkkeAllePermisjonerVurdert" />
          </Alert>
        )}
        {harIkkeValgtNoenArbeidsforhold && (
          <Alert variant="error">
            <FormattedMessage id="TilretteleggingFaktaForm.HarIkkeValgtArbeidsforhold" />
          </Alert>
        )}
        {harPeriodeSomIkkeErFerdig && (
          <Alert variant="error">
            <FormattedMessage id="TilretteleggingFaktaForm.PeriodeIkkeLagtTil" />
          </Alert>
        )}
        {harArbeidsforholdUtenTilrettelegging && (
          <Alert variant="error">
            <FormattedMessage id="TilretteleggingFaktaForm.ArbeidsforholdUtenTilrettelegging" />
          </Alert>
        )}
        {harGyldig100PermisjonDerEnHarValgtSvp && (
          <Alert variant="error">
            <FormattedMessage id="TilretteleggingFaktaForm.ValgtSvpVedGyldig100Permisjon" />
          </Alert>
        )}
      </VStack>
    ) : null;

  return { harFeil, visFeilmelding: () => setVisFeil(true), feilkomponent };
};
