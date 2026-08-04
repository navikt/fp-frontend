import type { AksjonspunktKode, AksjonspunktKodeTilbakekreving, OverstyringKode } from '@navikt/fp-kodeverk';
import type {
  BekreftetAksjonspunktDto,
  BekreftetTilbakekrevingAksjonspunktDto,
  OverstyringAksjonspunktDto,
} from '@navikt/fp-types';

export type AksjonspunktTilBekreftelse<K extends AksjonspunktKode> = Extract<
  BekreftetAksjonspunktDto,
  { '@type': `${K}` }
>;

export type TilbakekrevingAksjonspunktTilBekreftelse<K extends AksjonspunktKodeTilbakekreving> = Extract<
  BekreftetTilbakekrevingAksjonspunktDto,
  { '@type': `${K}` }
>;

export type OverstyringAksjonspunktTilBekreftelse<K extends OverstyringKode> = Extract<
  OverstyringAksjonspunktDto,
  { '@type': `${K}` }
>;

export type BekreftedeAksjonspunkterDto = {
  behandlingUuid: string;
  behandlingVersjon: number;
  bekreftedeAksjonspunktDtoer?: BekreftetAksjonspunktDto[] | BekreftetTilbakekrevingAksjonspunktDto[];
};
