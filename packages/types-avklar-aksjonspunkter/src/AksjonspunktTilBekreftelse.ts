import type { AksjonspunktKode, AksjonspunktKodeTilbakekreving, OverstyringKode } from '@navikt/fp-kodeverk';
import type {
  BekreftetAksjonspunktDto,
  BekreftetTilbakekrevingAksjonspunktDto,
  OverstyringAksjonspunktDto,
} from '@navikt/fp-types';

export type AksjonspunktTilBekreftelse<K extends AksjonspunktKode> = Extract<BekreftetAksjonspunktDto, { kode: `${K}` }>;

export type TilbakekrevingAksjonspunktTilBekreftelse<K extends AksjonspunktKodeTilbakekreving> = Extract<
  BekreftetTilbakekrevingAksjonspunktDto,
  { kode: `${K}` }
>;

export type OverstyringAksjonspunktTilBekreftelse<K extends OverstyringKode> = Extract<
  OverstyringAksjonspunktDto,
  { kode: `${K}` }
>;
