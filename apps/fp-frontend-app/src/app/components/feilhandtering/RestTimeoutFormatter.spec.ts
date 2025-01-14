import { ErrorEventType } from './errorEventType';
import { ErrorMessage } from './ErrorMessage';
import { RestTimeoutFormatter } from './RestTimeoutFormatter';

describe('RestTimeoutFormatter', () => {
  it('skal håndtere feil når feildata er av korrekt type', () => {
    expect(new RestTimeoutFormatter().isOfType(ErrorEventType.POLLING_TIMEOUT)).toBe(true);
  });

  it('skal ikke håndtere feil når feildata er av annen type', () => {
    expect(new RestTimeoutFormatter().isOfType(ErrorEventType.REQUEST_ERROR)).toBe(false);
  });

  it('skal formatere feil når en har fått timeout', () => {
    const errorData = {
      type: ErrorEventType.POLLING_TIMEOUT,
      message: 'timeout',
      location: 'url',
    };
    expect(new RestTimeoutFormatter().format(errorData)).toEqual(
      ErrorMessage.withMessageCode('Rest.ErrorMessage.PollingTimeout', errorData),
    );
  });
});
