import { useEffect } from 'react';

import { render, screen } from '@testing-library/react';

import { ErrorType } from './errorType';
import { RestApiErrorProvider, useRestApiError, useRestApiErrorDispatcher } from './RestApiErrorContext';

const TestErrorMessage = ({ skalFjerne = false }) => {
  const { addErrorMessage, removeErrorMessages } = useRestApiErrorDispatcher();
  useEffect(() => {
    addErrorMessage({ type: ErrorType.GENERAL_ERROR, message: 'Feilmeldingstest 1' });
    addErrorMessage({ type: ErrorType.GENERAL_ERROR, message: 'Feilmeldingstest 2' });

    if (skalFjerne) {
      removeErrorMessages();
    }
  }, []);

  const feilmeldinger = useRestApiError();
  return (
    <>
      Feilmeldinger:
      {feilmeldinger.map(feil => (
        <span key={feil.type}>{feil.type === ErrorType.GENERAL_ERROR ? feil.message : ''}</span>
      ))}
    </>
  );
};

describe('<RestApiErrorContext', () => {
  it('skal legge til feilmelding og så hente alle i kontekst', async () => {
    render(
      <RestApiErrorProvider>
        <TestErrorMessage />
      </RestApiErrorProvider>,
    );

    expect(await screen.findByText('Feilmeldingstest 1')).toBeInTheDocument();
    expect(screen.getByText('Feilmeldingstest 2')).toBeInTheDocument();
  });

  it('skal legge til feilmelding og så fjerne alle i kontekst', async () => {
    render(
      <RestApiErrorProvider>
        <TestErrorMessage skalFjerne />
      </RestApiErrorProvider>,
    );

    expect(await screen.findByText('Feilmeldinger:')).toBeInTheDocument();
    expect(screen.queryByText('Feilmeldingstest 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Feilmeldingstest 2')).not.toBeInTheDocument();
  });
});
