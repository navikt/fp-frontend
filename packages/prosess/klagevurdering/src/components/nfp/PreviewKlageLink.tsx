import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Link } from '@navikt/ds-react';

import type { DokumentMalType, KlageVurderingType } from '@navikt/fp-types';

const getBrevKode = (klageVurdertAvKa: boolean, klageVurdering?: KlageVurderingType): DokumentMalType | undefined => {
  switch (klageVurdering) {
    case 'STADFESTE_YTELSESVEDTAK':
      return klageVurdertAvKa ? 'KGESTA' : 'KGEOVE';
    case 'OPPHEVE_YTELSESVEDTAK':
      return 'KGEHJE';
    case 'HJEMSENDE_UTEN_Å_OPPHEVE':
      return 'KGEHJE';
    case 'MEDHOLD_I_KLAGE':
      return 'KGEOMG';
    default:
      return undefined;
  }
};

export type KlagevurderingForhåndsvisData = {
  fritekst: string;
  dokumentMal?: DokumentMalType;
  erOpphevetKlage: boolean;
};

const getBrevData = (klageVurdering?: KlageVurderingType, fritekstTilBrev?: string): KlagevurderingForhåndsvisData => ({
  fritekst: fritekstTilBrev ?? '',
  dokumentMal: getBrevKode(false, klageVurdering),
  erOpphevetKlage: klageVurdering === 'OPPHEVE_YTELSESVEDTAK',
});

interface Props {
  previewCallback: (data: KlagevurderingForhåndsvisData) => void;
  fritekstTilBrev?: string;
  klageVurdering?: KlageVurderingType;
}

export const PreviewKlageLink = ({ previewCallback, fritekstTilBrev, klageVurdering }: Props) => {
  const previewMessage = (e: React.MouseEvent | React.KeyboardEvent): void => {
    previewCallback(getBrevData(klageVurdering, fritekstTilBrev));
    e.preventDefault();
  };
  return (
    <Link href="#" onClick={previewMessage} onKeyDown={e => (e.key === 'Enter' ? previewMessage(e) : null)}>
      <FormattedMessage id="PreviewKlageLink.ForhandvisBrev" />
    </Link>
  );
};
