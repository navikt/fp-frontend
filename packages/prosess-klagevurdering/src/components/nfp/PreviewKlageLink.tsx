import React from 'react';
import { FormattedMessage } from 'react-intl';

import { DokumentMalType, KlageVurdering as klageVurderingType } from '@navikt/fp-kodeverk';

import { Link } from '@navikt/ds-react';

const getBrevKode = (klageVurdertAvKa: boolean, klageVurdering?: string): string | undefined => {
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

export type BrevData = {
  fritekst: string;
  dokumentMal?: string;
  erOpphevetKlage: boolean;
};

const getBrevData = (klageVurdering?: string, fritekstTilBrev?: string): BrevData => ({
  fritekst: fritekstTilBrev ?? '',
  dokumentMal: getBrevKode(false, klageVurdering),
  erOpphevetKlage: klageVurdering === klageVurderingType.OPPHEVE_YTELSESVEDTAK,
});

interface Props {
  previewCallback: (data: BrevData) => Promise<any>;
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
