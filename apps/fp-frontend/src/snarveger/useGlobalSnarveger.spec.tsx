import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { BEHANDLING_SNARVEG_IDER, GLOBALE_SNARVEG_IDER } from './snarvegDefinisjoner';
import { SnarvegerProvider, useRegistrerSnarveg, useSnarvegerContext } from './SnarvegerContext';
import { useGlobalSnarveger } from './useGlobalSnarveger';

const SnarvegLytter = () => {
  useGlobalSnarveger();
  return null;
};

const Testflate = ({
  id,
  onSnarveg,
  dialogtype,
}: {
  id: string;
  onSnarveg: () => void;
  dialogtype?: 'åpen' | 'skjult';
}) => {
  const { snarveiModalÅpen, settAktiv } = useSnarvegerContext();
  useRegistrerSnarveg(id, onSnarveg);

  return (
    <>
      <button type="button" onClick={() => settAktiv(false)}>
        Deaktiver snarvegar
      </button>
      <span data-testid="snarvei-modal-status">{snarveiModalÅpen ? 'open' : 'closed'}</span>
      <label>
        <span>Skrivefelt</span>
        <input />
      </label>
      {dialogtype === 'åpen' && <dialog open>Ein annan modal</dialog>}
      {dialogtype === 'skjult' && (
        <div aria-hidden="true" role="dialog">
          Ein skjult modal
        </div>
      )}
    </>
  );
};

const renderSnarveger = (id: string, onSnarveg = vi.fn(), dialogtype?: 'åpen' | 'skjult') =>
  render(
    <SnarvegerProvider>
      <SnarvegLytter />
      <Testflate id={id} onSnarveg={onSnarveg} dialogtype={dialogtype} />
    </SnarvegerProvider>,
  );

const trykk = (key: string) => {
  fireEvent.keyDown(globalThis.window, { key });
};

describe('useGlobalSnarveger', () => {
  it('skal køyre registrert enkelttast-snarveg', () => {
    const onSnarveg = vi.fn();
    renderSnarveger(BEHANDLING_SNARVEG_IDER.STØTTE_HISTORIKK, onSnarveg);

    trykk('1');

    expect(onSnarveg).toHaveBeenCalledTimes(1);
  });

  it('skal køyre registrert G-sekvens', () => {
    const onSnarveg = vi.fn();
    renderSnarveger(GLOBALE_SNARVEG_IDER.OPPGAVELISTE, onSnarveg);

    trykk('g');
    trykk('o');

    expect(onSnarveg).toHaveBeenCalledTimes(1);
  });

  it('skal køyre registrert enkelttast-snarveg for faktapanel utan å bruke PageUp eller PageDown', () => {
    const onSnarveg = vi.fn();
    renderSnarveger(BEHANDLING_SNARVEG_IDER.FORRIGE_FAKTA, onSnarveg);

    trykk(';');

    expect(onSnarveg).toHaveBeenCalledTimes(1);
  });

  it('skal ignorere snarvegar når fokus er i skrivefelt', () => {
    const onSnarveg = vi.fn();
    renderSnarveger(BEHANDLING_SNARVEG_IDER.STØTTE_HISTORIKK, onSnarveg);

    fireEvent.keyDown(screen.getByLabelText('Skrivefelt'), { key: '1' });

    expect(onSnarveg).not.toHaveBeenCalled();
  });

  it('skal ignorere snarvegar når ein annan dialog er open', () => {
    const onSnarveg = vi.fn();
    renderSnarveger(BEHANDLING_SNARVEG_IDER.STØTTE_HISTORIKK, onSnarveg, 'åpen');

    trykk('1');

    expect(onSnarveg).not.toHaveBeenCalled();
  });

  it('skal ikkje ignorere snarvegar når ein skjult dialog finst i DOM-en', () => {
    const onSnarveg = vi.fn();
    renderSnarveger(BEHANDLING_SNARVEG_IDER.STØTTE_HISTORIKK, onSnarveg, 'skjult');

    trykk('1');

    expect(onSnarveg).toHaveBeenCalledTimes(1);
  });

  it('skal opne hjelp med spørsmålsteikn sjølv om snarvegar elles er deaktivert', async () => {
    renderSnarveger(BEHANDLING_SNARVEG_IDER.STØTTE_HISTORIKK);

    fireEvent.click(screen.getByRole('button', { name: 'Deaktiver snarvegar' }));
    trykk('?');

    await waitFor(() => expect(screen.getByTestId('snarvei-modal-status')).toHaveTextContent('open'));
  });
});
