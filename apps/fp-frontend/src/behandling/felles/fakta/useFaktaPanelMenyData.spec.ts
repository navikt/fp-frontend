import { act, renderHook } from '@testing-library/react';
import { expect, vi } from 'vitest';

import { type FaktaPanelMenyData, useFaktaPanelMenyData } from './useFaktaPanelMenyData';

const lagPanel = (id: string, harÅpentAksjonspunkt: boolean): FaktaPanelMenyData => ({
  id,
  tekst: `Tekst ${id}`,
  erAktiv: false,
  harÅpentAksjonspunkt,
  skalVisesIMeny: true,
});

describe('useFaktaPanelMenyData', () => {
  it('skal beholde info om panel med åpent aksjonspunkt når et senere panel uten åpent aksjonspunkt registreres', () => {
    const setInfo = vi.fn();
    const { result } = renderHook(() => useFaktaPanelMenyData(setInfo));

    act(() => {
      result.current.settFaktaPanelMenyData(lagPanel('a', true));
      result.current.settFaktaPanelMenyData(lagPanel('b', false));
    });

    expect(setInfo).toHaveBeenLastCalledWith({ urlCode: 'a', text: 'Tekst a' });
  });

  it('skal velge første panel i menyrekkefølge når flere har åpent aksjonspunkt', () => {
    const setInfo = vi.fn();
    const { result } = renderHook(() => useFaktaPanelMenyData(setInfo));

    act(() => {
      result.current.settFaktaPanelMenyData(lagPanel('a', false));
      result.current.settFaktaPanelMenyData(lagPanel('b', true));
      result.current.settFaktaPanelMenyData(lagPanel('c', true));
    });
    expect(setInfo).toHaveBeenLastCalledWith({ urlCode: 'b', text: 'Tekst b' });

    act(() => {
      result.current.settFaktaPanelMenyData(lagPanel('b', false));
    });
    expect(setInfo).toHaveBeenLastCalledWith({ urlCode: 'c', text: 'Tekst c' });

    act(() => {
      result.current.settFaktaPanelMenyData(lagPanel('c', false));
    });
    expect(setInfo).toHaveBeenLastCalledWith(undefined);
  });
});
