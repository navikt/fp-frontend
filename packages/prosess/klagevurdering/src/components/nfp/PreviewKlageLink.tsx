import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Link } from '@navikt/ds-react';

import { DokumentMalType, KlageVurdering as klageVurderingType } from '@navikt/fp-kodeverk';
import type { foreldrepenger_dokumentbestiller_DokumentMalType } from '@navikt/fp-types';

const getBrevKode = (
  klageVurdertAvKa: boolean,
  klageVurdering?: string,
): foreldrepenger_dokumentbestiller_DokumentMalType | undefined => {
  switch (klageVurdering) {
    case klageVurderingType.STADFESTE_YTELSESVEDTAK:
      return klageVurdertAvKa ? DokumentMalType.KLAGE_STADFESTET : DokumentMalType.KLAGE_OVERSENDT;
    case klageVurderingType.OPPHEVE_YTELSESVEDTAK:
      return DokumentMalType.KLAGE_HJEMSENDT;
    case klageVurderingType.HJEMSENDE_UTEN_Å_OPPHEVE:
      return DokumentMalType.KLAGE_HJEMSENDT;
    case klageVurderingType.MEDHOLD_I_KLAGE:
      return DokumentMalType.KLAGE_OMGJORING;
    default:
      return undefined;
  }
};

export type KlagevurderingForhåndsvisData = {
  fritekst: string;
  dokumentMal?: foreldrepenger_dokumentbestiller_DokumentMalType;
  erOpphevetKlage: boolean;
};

const getBrevData = (klageVurdering?: string, fritekstTilBrev?: string): KlagevurderingForhåndsvisData => ({
  fritekst: fritekstTilBrev ?? '',
  dokumentMal: getBrevKode(false, klageVurdering),
  erOpphevetKlage: klageVurdering === klageVurderingType.OPPHEVE_YTELSESVEDTAK,
});

interface Props {
  previewCallback: (data: KlagevurderingForhåndsvisData) => void;
  fritekstTilBrev?: string;
  klageVurdering?: string;
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
