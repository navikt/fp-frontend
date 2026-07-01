import { finnPanelConfig, skalHenteArbeidsgivere } from './behandlingPanelRegistry';

describe('behandlingPanelRegistry', () => {
  it('skal finne ytelsespanel for førstegangsbehandling og revurdering', () => {
    expect(finnPanelConfig('FP', 'BT-002')).toMatchObject({
      fagsakYtelseType: 'FP',
      skalHenteArbeidsgivere: true,
      skalViseFellesPaVent: true,
    });
    expect(finnPanelConfig('SVP', 'BT-004')).toMatchObject({
      fagsakYtelseType: 'SVP',
      skalHenteArbeidsgivere: true,
      skalViseFellesPaVent: true,
    });
    expect(finnPanelConfig('ES', 'BT-002')).toMatchObject({
      fagsakYtelseType: 'ES',
      skalHenteArbeidsgivere: true,
      skalViseFellesPaVent: true,
    });
  });

  it('skal kreve ytelsetype for førstegangsbehandling og revurdering', () => {
    expect(finnPanelConfig(undefined, 'BT-002')).toBeUndefined();
    expect(finnPanelConfig(undefined, 'BT-004')).toBeUndefined();
  });

  it('skal finne panel for behandlingstypar som ikkje er ytelsspesifikke', () => {
    expect(finnPanelConfig(undefined, 'BT-003')).toMatchObject({
      skalHenteArbeidsgivere: false,
      skalViseFellesPaVent: true,
    });
    expect(finnPanelConfig(undefined, 'BT-006')).toMatchObject({
      skalHenteArbeidsgivere: false,
      skalViseFellesPaVent: true,
    });
    expect(finnPanelConfig(undefined, 'BT-008')).toMatchObject({
      skalHenteArbeidsgivere: false,
      skalViseFellesPaVent: true,
    });
  });

  it('skal finne tilbakekrevingspanel utan felles på-vent-panel', () => {
    expect(finnPanelConfig(undefined, 'BT-007')).toMatchObject({
      skalHenteArbeidsgivere: false,
      skalViseFellesPaVent: false,
    });
    expect(finnPanelConfig(undefined, 'BT-009')).toMatchObject({
      skalHenteArbeidsgivere: false,
      skalViseFellesPaVent: false,
    });
  });

  it('skal returnere undefined for behandlingstype utan panel', () => {
    expect(finnPanelConfig('FP', '-')).toBeUndefined();
    expect(finnPanelConfig('FP', undefined)).toBeUndefined();
  });

  it('skal ha trygg default for arbeidsgivarhenting når panel ikkje finst', () => {
    expect(skalHenteArbeidsgivere(undefined)).toBe(false);
  });
});
