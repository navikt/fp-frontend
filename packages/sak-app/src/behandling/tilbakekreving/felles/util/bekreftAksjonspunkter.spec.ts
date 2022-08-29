import { Behandling } from '@navikt/ft-types';
import { BehandlingStatus } from '@navikt/ft-kodeverk';
import { AvklarVergeAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import getBekreftAksjonspunktCallback from './bekreftAksjonspunkter';

describe('<bekreftAksjonspunkter>', () => {
  const saksnummer = '1234';
  const behandling = {
    uuid: '1',
    versjon: 2,
    status: BehandlingStatus.OPPRETTET,
    behandlingPaaVent: false,
  } as Behandling;

  it('skal lagre aksjonspunkter', async () => {
    const oppdaterProsessStegOgFaktaPanelIUrl = jest.fn(() => Promise.resolve());
    const lagreAksjonspunkter = jest.fn(() => Promise.resolve());
    const callback = getBekreftAksjonspunktCallback(saksnummer, behandling, oppdaterProsessStegOgFaktaPanelIUrl, lagreAksjonspunkter);
    const lagreAp = callback();

    const aksjonspunktModell = {
      kode: AksjonspunktCode.AVKLAR_VERGE,
      navn: 'Espen Utvikler',
      fnr: 'test',
      gyldigFom: '2021-01-01',
      gyldigTom: '2021-10-10',
      vergeType: 'test',
    } as AvklarVergeAp;
    await lagreAp(aksjonspunktModell);

    expect(lagreAksjonspunkter).toHaveBeenCalledTimes(1);
    expect(lagreAksjonspunkter).toHaveBeenNthCalledWith(1, {
      behandlingUuid: '1',
      behandlingVersjon: 2,
      saksnummer: '1234',
      bekreftedeAksjonspunktDtoer: [{
        '@type': '5030',
        fnr: 'test',
        gyldigFom: '2021-01-01',
        gyldigTom: '2021-10-10',
        kode: '5030',
        navn: 'Espen Utvikler',
        vergeType: 'test',
      }],
    }, true);

    expect(oppdaterProsessStegOgFaktaPanelIUrl).toHaveBeenCalledTimes(1);
  });
});
