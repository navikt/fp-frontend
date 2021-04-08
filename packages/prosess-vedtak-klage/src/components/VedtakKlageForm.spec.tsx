import React from 'react';
import sinon from 'sinon';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';

import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import behandlingResultatType from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import { Behandling, KlageVurdering } from '@fpsak-frontend/types';

import { getAvvisningsAarsaker, getIsAvvist, VedtakKlageForm } from './VedtakKlageForm';
import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

const KLAGE_OMGJORT_TEKST = 'VedtakKlageForm.KlageOmgjortGunst';

describe('<VedtakKlageForm>', () => {
  it('skal vise riktige avvisningsårsaker', () => {
    const avvistArsaker = [{ kode: 'KLAGET_FOR_SENT', kodeverk: 'KLAGE_AVVIST_AARSAK', navn: '' },
      { kode: 'KLAGER_IKKE_PART', kodeverk: 'KLAGE_AVVIST_AARSAK', navn: '' }];
    const forhandsvisVedtaksbrevFunc = sinon.spy();
    const br = {
      id: 1,
      type: {
        kode: behandlingResultatType.KLAGE_AVVIST,
        kodeverk: '',
      },
    };
    const wrapper = shallowWithIntl(<VedtakKlageForm
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      isAvvist
      isOmgjort={false}
      behandlingsResultatTekst={KLAGE_OMGJORT_TEKST}
      isOpphevOgHjemsend={false}
      avvistArsaker={avvistArsaker}
      behandlingPaaVent={false}
      behandlingsresultat={br}
      previewVedtakCallback={forhandsvisVedtaksbrevFunc}
      klageVurderingResultat={{} as KlageVurdering['klageVurderingResultatNK']}
      alleKodeverk={{
        KlageAvvistÅrsak: [{
          kode: 'KLAGET_FOR_SENT', navn: 'Bruker har klaget for sent', kodeverk: 'KLAGE_AVVIST_AARSAK',
        }, {
          kode: 'KLAGER_IKKE_PART', navn: 'Klager er ikke part', kodeverk: 'KLAGE_AVVIST_AARSAK',
        }],
      }}
      behandlingId={1}
      behandlingVersjon={2}
      klageVurdering={{} as KlageVurdering}
      aksjonspunkter={[]}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
    />, messages);
    expect(wrapper.find(Undertekst).at(1).childAt(0).text()).toBe('Årsak til avvisning');
    expect(wrapper.find(Normaltekst).at(1).childAt(0).text()).toBe('Bruker har klaget for sent');
    expect(wrapper.find(Normaltekst).at(2).childAt(0).text()).toBe('Klager er ikke part');
  });

  describe('Klage vedtak Selectors', () => {
    describe('getIsAvvist', () => {
      it('should return true', () => {
        const brt = { type: { kode: behandlingResultatType.KLAGE_AVVIST } } as Behandling['behandlingsresultat'];
        const selected = getIsAvvist.resultFunc(brt);
        expect(selected).toBe(true);
      });
    });

    describe('getIsAvgetAvvisningsAarsakervist', () => {
      it('should return avvisningsAarsaker with length 2', () => {
        const klageVurdering = {
          klageFormkravResultatNFP: { avvistArsaker: [{ navn: 'arsak1' }, { navn: 'arsak2' }] } as KlageVurdering['klageFormkravResultatNFP'],
          klageVurderingResultatNFP: { klageVurdertAv: '' },
        } as KlageVurdering;
        const selected = getAvvisningsAarsaker.resultFunc(klageVurdering);
        expect(selected).toHaveLength(2);
      });
    });
  });
});
