import { act, fireEvent, render, screen } from '@testing-library/react';

import { FagsakGrid } from './FagsakGrid';

describe('FagsakGrid', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('skal oppdatere ledig støttehøyde og rydde opp etter målingen', () => {
    let top = 300;
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(() => new DOMRect(0, top));
    const requestFrame = vi.spyOn(window, 'requestAnimationFrame').mockReturnValue(42);
    const cancelFrame = vi.spyOn(window, 'cancelAnimationFrame');
    let onResize = () => {};
    const observe = vi.fn();
    const disconnect = vi.fn();
    vi.stubGlobal(
      'ResizeObserver',
      class {
        observe = observe;
        disconnect = disconnect;

        constructor(callback: () => void) {
          onResize = callback;
        }
      },
    );

    const { unmount } = render(
      <Context value={{ width: 1536 }}>
        <FagsakGrid
          visSideMeny
          toggleSideMeny={vi.fn()}
          behandlingContent="Fakta"
          profileAndNavigationContent="Profil"
          supportContent="Støtte"
        />
      </Context>,
    );
    const support = screen.getByText('Støtte');
    expect(support.style.getPropertyValue('--support-height')).toBe(`${window.innerHeight - 300}px`);
    expect(observe).toHaveBeenCalledTimes(2);

    top = 100;
    fireEvent.scroll(window);
    fireEvent.resize(window);
    onResize();
    expect(requestFrame).toHaveBeenCalledTimes(1);
    act(() => requestFrame.mock.calls[0]![0](0));
    expect(support.style.getPropertyValue('--support-height')).toBe(`${window.innerHeight - 100}px`);

    top = window.innerHeight + 100;
    onResize();
    act(() => requestFrame.mock.calls[1]![0](0));
    expect(support.style.getPropertyValue('--support-height')).toBe('0px');

    fireEvent.scroll(window);
    unmount();
    expect(disconnect).toHaveBeenCalledOnce();
    expect(cancelFrame).toHaveBeenCalledWith(42);
    expect(support.style.getPropertyValue('--support-height')).toBe('');
  });

  it('skal vise fagsakgrid med underkomponenter', async () => {
    render(
      <FagsakGrid
        behandlingContent={<div>behandlingContent</div>}
        profileAndNavigationContent={<div>profileContent</div>}
        supportContent={<div>supportContent</div>}
        visittkortContent={<div>visittkort</div>}
        visSideMeny
        toggleSideMeny={() => {}}
      />,
    );

    expect(await screen.findByText('behandlingContent')).toBeInTheDocument();
    expect(screen.getByText('profileContent')).toBeInTheDocument();
    expect(screen.getByText('supportContent')).toBeInTheDocument();
  });
});
import { Context } from 'react-responsive';
