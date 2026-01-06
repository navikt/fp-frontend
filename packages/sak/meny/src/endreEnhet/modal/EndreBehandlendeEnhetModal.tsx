import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, Dialog, VStack } from '@navikt/ds-react';
import { RhfForm, RhfSelect, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, required } from '@navikt/ft-form-validators';

const maxLength400 = maxLength(400);

export type FormValues = {
  nyEnhet: string;
  begrunnelse: string;
};

interface Props {
  lukkModal: () => void;
  behandlendeEnheter: {
    enhetId: string;
    enhetNavn: string;
  }[];
  gjeldendeBehandlendeEnhetId: string;
  gjeldendeBehandlendeEnhetNavn: string;
  handleSubmit: (formValues: FormValues) => void;
}

/**
 * EndreBehandlendeEnhetModal
 *
 * Denne modalen vises når saksbehandler valger 'Bytt behandlende enhet'.
 * Ved å angi ny enhet og begrunnelse og trykke på 'OK' blir behandlende enhet endret.
 */
export const EndreBehandlendeEnhetModal = ({
  handleSubmit,
  lukkModal,
  behandlendeEnheter,
  gjeldendeBehandlendeEnhetId,
  gjeldendeBehandlendeEnhetNavn,
}: Props) => {
  const options = behandlendeEnheter.map((enhet, index) => (
    <option key={enhet.enhetId} value={`${index}`}>
      {`${enhet.enhetId} ${enhet.enhetNavn}`}
    </option>
  ));

  const selectOptions = [
    <option key={gjeldendeBehandlendeEnhetId} disabled>
      {`${gjeldendeBehandlendeEnhetId} ${gjeldendeBehandlendeEnhetNavn}`}
    </option>,
  ].concat(options);

  const intl = useIntl();

  const formMethods = useForm<FormValues>();

  const nyEnhet = formMethods.watch('nyEnhet');
  const begrunnelse = formMethods.watch('begrunnelse');

  return (
    <RhfForm formMethods={formMethods} onSubmit={handleSubmit}>
      <Dialog open onOpenChange={lukkModal} size="small">
        <Dialog.Popup>
          <Dialog.Header>
            <Dialog.Title>
              <FormattedMessage id="EndreBehandlendeEnhetModal.EndreEnhet" />
            </Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>
            <VStack gap="space-16">
              <RhfSelect
                name="nyEnhet"
                style={{ width: '350px' }}
                control={formMethods.control}
                label={intl.formatMessage({ id: 'EndreBehandlendeEnhetModal.NyEnhetField' })}
                validate={[required]}
                selectValues={selectOptions}
              />
              <RhfTextarea
                name="begrunnelse"
                control={formMethods.control}
                label={intl.formatMessage({ id: 'EndreBehandlendeEnhetModal.BegrunnelseField' })}
                validate={[required, maxLength400, hasValidText]}
                maxLength={400}
              />
            </VStack>
          </Dialog.Body>
          <Dialog.Footer>
            <Button size="small" variant="secondary" onClick={lukkModal} type="button">
              {intl.formatMessage({ id: 'EndreBehandlendeEnhetModal.Avbryt' })}
            </Button>
            <Button size="small" variant="primary" disabled={!(nyEnhet && begrunnelse)}>
              {intl.formatMessage({ id: 'EndreBehandlendeEnhetModal.Ok' })}
            </Button>
          </Dialog.Footer>
        </Dialog.Popup>
      </Dialog>
    </RhfForm>
  );
};
