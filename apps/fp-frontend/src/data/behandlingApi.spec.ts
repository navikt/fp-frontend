import type { BeregningOverstyringAP } from '@navikt/ft-fakta-beregning';
import type { FordelBeregningsgrunnlagAP } from '@navikt/ft-fakta-fordel-beregningsgrunnlag';
import { expectTypeOf } from 'vitest';

import type { PapirsøknadAp } from '@navikt/fp-papirsoknad';
import type { Behandling } from '@navikt/fp-types';
import type {
  FordelBeregningAp,
  OverstyringAvklarStartdatoForPeriodenAp,
  VurderInnsynAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';

import {
  type AksjonspunktArgs,
  type BekreftetAksjonspunkt,
  getBehandlingApi,
  type OverstyrtAksjonspunkt,
  type OverstyrteAksjonspunktArgs,
  type UtgåttKode,
} from './behandlingApi';

type BekreftetInput = AksjonspunktArgs['bekreftedeAksjonspunktDtoer'][number];
type OverstyrtInput = OverstyrteAksjonspunktArgs['overstyrteAksjonspunktDtoer'][number];

const lagApi = () =>
  getBehandlingApi({
    links: [
      { rel: 'lagre-aksjonspunkter', href: '/bekreft', requestPayload: undefined, type: 'POST' },
      { rel: 'lagre-overstyr-aksjonspunkter', href: '/overstyr', requestPayload: undefined, type: 'POST' },
    ],
  } as unknown as Behandling);

const stubFetch = () => {
  const requests: { url: string; body: Record<string, unknown> }[] = [];
  vi.stubGlobal('fetch', async (request: Request) => {
    requests.push({ url: request.url, body: (await request.clone().json()) as Record<string, unknown> });
    return new Response('{}');
  });
  return () => requests[0]!;
};

const innsyn = { kode: '5037', begrunnelse: 'test' } as unknown as VurderInnsynAp;
const startdato = { kode: '6045', begrunnelse: 'test' } as unknown as OverstyringAvklarStartdatoForPeriodenAp;

// Typesjekkene under håndheves av tsc, ikke av vitest.
expectTypeOf<BeregningOverstyringAP>().not.toExtend<BekreftetAksjonspunkt>();
expectTypeOf<BeregningOverstyringAP>().not.toExtend<OverstyrtAksjonspunkt>();

expectTypeOf<VurderInnsynAp>().toExtend<BekreftetInput>();
expectTypeOf<VurderInnsynAp>().not.toExtend<OverstyrtInput>();
expectTypeOf<OverstyringAvklarStartdatoForPeriodenAp>().toExtend<OverstyrtInput>();
expectTypeOf<OverstyringAvklarStartdatoForPeriodenAp>().not.toExtend<BekreftetInput>();

expectTypeOf<FordelBeregningAp>().toExtend<BekreftetAksjonspunkt>();
expectTypeOf<FordelBeregningsgrunnlagAP>().not.toExtend<BekreftetAksjonspunkt>();

expectTypeOf<UtgåttKode>().toEqualTypeOf<'5056' | '6012'>();

describe('behandlingApi', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('skal sette @type fra kode ved lagring av aksjonspunkt', async () => {
    const hentRequest = stubFetch();

    await lagApi().pollingApi.lagreAksjonspunkt({
      saksnummer: '1',
      behandlingUuid: 'uuid',
      behandlingVersjon: 1,
      bekreftedeAksjonspunktDtoer: [{ ...innsyn, '@type': '6045' } as VurderInnsynAp],
    });

    const { url, body } = hentRequest();
    expect(url).toBe('https://www.test.com/bekreft');
    expect(body['bekreftedeAksjonspunktDtoer']).toEqual([{ ...innsyn, '@type': '5037' }]);
  });

  it('skal sende papirsøknad uendret', async () => {
    const hentRequest = stubFetch();
    const papirsøknad = { '@type': '5012', tema: 'FODSL' } as unknown as PapirsøknadAp;

    await lagApi().pollingApi.lagreAksjonspunkt({
      saksnummer: '1',
      behandlingUuid: 'uuid',
      behandlingVersjon: 1,
      bekreftedeAksjonspunktDtoer: [papirsøknad],
    });

    const { body } = hentRequest();
    expect(body['bekreftedeAksjonspunktDtoer']).toEqual([papirsøknad]);
  });

  it('skal sette @type fra kode ved lagring av overstyrt aksjonspunkt', async () => {
    const hentRequest = stubFetch();

    await lagApi().pollingApi.lagreOverstyrtAksjonspunkt({
      saksnummer: '1',
      behandlingUuid: 'uuid',
      behandlingVersjon: 1,
      overstyrteAksjonspunktDtoer: [startdato],
    });

    const { url, body } = hentRequest();
    expect(url).toBe('https://www.test.com/overstyr');
    expect(body['overstyrteAksjonspunktDtoer']).toEqual([{ ...startdato, '@type': '6045' }]);
  });
});
