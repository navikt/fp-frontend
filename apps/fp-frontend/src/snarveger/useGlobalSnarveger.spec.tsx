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
  visDialog = false,
}: {
  id: string;
  onSnarveg: () => void;
  visDialog?: boolean;
}) => {
  const { hjelpÅpen, settAktiv } = useSnarvegerContext();
  useRegistrerSnarveg(id, onSnarveg);

  return (
    <>
      <button type="button" onClick={() => settAktiv(false)}>
        Deaktiver snarvegar
      </button>
      <span data-testid="hjelpstatus">{hjelpÅpen ? 'open' : 'closed'}</span>
      <label>
        Skrivefelt
        <input />
      </label>
      {visDialog && <div role="dialog">Ein annan modal</div>}
    </>
  );
};

const renderSnarveger = (id: string, onSnarveg = vi.fn(), visDialog = false) =>
  render(
    <SnarvegerProvider>
      <SnarvegLytter />
      <Testflate id={id} onSnarveg={onSnarveg} visDialog={visDialog} />
    </SnarvegerProvider>,
  );

const trykk = (key: string) => {
  fireEvent.keyDown(window, { key });
};

describe('useGlobalSnarveger', () => {
  it('skal køyre registrert enkelttast-snarveg', () => {
    const onSnarveg = vi.fn();
    renderSnarveger(BEHANDLING_SNARVEG_IDER.STOTTE_HISTORIKK, onSnarveg);

    trykk('1');

    expect(onSnarveg).toHaveBeenCalledTimes(1);
  });

  it('skal køyre registrert G-sekvens', () => {
    const onSnarveg = vi.fn();
    renderSnarveger(GLOBALE_SNARVEG_IDER.GAA_OPPGAVELISTE, onSnarveg);

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
    renderSnarveger(BEHANDLING_SNARVEG_IDER.STOTTE_HISTORIKK, onSnarveg);

    fireEvent.keyDown(screen.getByLabelText('Skrivefelt'), { key: '1' });

    expect(onSnarveg).not.toHaveBeenCalled();
  });

  it('skal ignorere snarvegar når ein annan dialog er open', () => {
    const onSnarveg = vi.fn();
    renderSnarveger(BEHANDLING_SNARVEG_IDER.STOTTE_HISTORIKK, onSnarveg, true);

    trykk('1');

    expect(onSnarveg).not.toHaveBeenCalled();
  });

  it('skal opne hjelp med spørsmålsteikn sjølv om snarvegar elles er deaktivert', async () => {
    renderSnarveger(BEHANDLING_SNARVEG_IDER.STOTTE_HISTORIKK);

    fireEvent.click(screen.getByRole('button', { name: 'Deaktiver snarvegar' }));
    trykk('?');

    await waitFor(() => expect(screen.getByTestId('hjelpstatus')).toHaveTextContent('open'));
  });
});
