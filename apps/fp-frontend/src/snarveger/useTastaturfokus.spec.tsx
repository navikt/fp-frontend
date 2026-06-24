import { renderHook } from '@testing-library/react';

import { useFokuserVedPanelbyte } from './useTastaturfokus';

describe('useTastaturfokus', () => {
  const renderPanelfokus = (fokuser: () => void) =>
    renderHook(({ panel }: { panel: string | undefined }) => useFokuserVedPanelbyte(panel, fokuser), {
      initialProps: { panel: 'a' as string | undefined },
    });

  it('skal flytte fokus når det er planlagt og panelet endrar seg', () => {
    const fokuser = vi.fn();
    const { result, rerender } = renderPanelfokus(fokuser);

    result.current('b');
    rerender({ panel: 'b' });

    expect(fokuser).toHaveBeenCalledTimes(1);
  });

  it('skal ikkje flytte fokus ved panelbyte utan planlegging', () => {
    const fokuser = vi.fn();
    const { rerender } = renderPanelfokus(fokuser);

    rerender({ panel: 'b' });

    expect(fokuser).not.toHaveBeenCalled();
  });

  it('skal ikkje flytte fokus før panelet faktisk endrar seg', () => {
    const fokuser = vi.fn();
    const { result, rerender } = renderPanelfokus(fokuser);

    result.current('b');
    rerender({ panel: 'a' });

    expect(fokuser).not.toHaveBeenCalled();
  });

  it('skal berre flytte fokus éin gong per planlegging', () => {
    const fokuser = vi.fn();
    const { result, rerender } = renderPanelfokus(fokuser);

    result.current('b');
    rerender({ panel: 'b' });
    rerender({ panel: 'c' });

    expect(fokuser).toHaveBeenCalledTimes(1);
  });

  it('skal ikkje planleggje fokus når målpanelet alt er aktivt', () => {
    const fokuser = vi.fn();
    const { result, rerender } = renderPanelfokus(fokuser);

    result.current('a');
    rerender({ panel: 'b' });

    expect(fokuser).not.toHaveBeenCalled();
  });
});
