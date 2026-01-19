import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { RawIntlProvider } from 'react-intl';

import { Button, Dialog } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { createIntl } from '@navikt/ft-utils';

import { RegistrereVergeForm, type VergeFormValues } from '@navikt/fp-fakta-verge';
import type { AlleKodeverk, AlleKodeverkTilbakekreving, Verge } from '@navikt/fp-types';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

export const getMenytekst = (erOpprettVerge: boolean): string =>
  intl.formatMessage({
    id: erOpprettVerge ? 'MenyVergeIndex.OpprettVerge' : 'MenyVergeIndex.FjernVerge',
  });

interface Props {
  verge: Verge | undefined;
  alleKodeverk: AlleKodeverk | AlleKodeverkTilbakekreving;
  lukkModal: () => void;
  type: 'OPPRETT' | 'FJERN';
  fjernVerge: () => void;
  opprettVerge: (values: Verge) => void;
}

export const MenyVergeIndex = ({ verge, type, fjernVerge, opprettVerge, lukkModal, alleKodeverk }: Props) => {
  const erFjerneOperasjon = type === 'FJERN';

  const formMethods = useForm<VergeFormValues>({
    defaultValues: verge ? RegistrereVergeForm.buildInitialValues(verge) : undefined,
  });

  const handleSubmit = (values: VergeFormValues) => {
    if (erFjerneOperasjon) {
      fjernVerge();
    } else opprettVerge(RegistrereVergeForm.transformValues(values));
    lukkModal();
  };

  const valgtVergeType = formMethods.watch('vergeType');

  useEffect(() => {
    if (verge) {
      formMethods.reset(RegistrereVergeForm.buildInitialValues(verge));
    }
  }, [verge]);

  return (
    <RawIntlProvider value={intl}>
      <Dialog open onOpenChange={lukkModal}>
        <Dialog.Popup width="small">
          <RhfForm formMethods={formMethods} onSubmit={handleSubmit}>
            <Dialog.Header>
              <Dialog.Title>
                {intl.formatMessage({
                  id: erFjerneOperasjon ? 'MenyVergeIndex.FjernVergeSporsmal' : 'MenyVergeIndex.OpprettVergeSporsmal',
                })}
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <RegistrereVergeForm
                readOnly={erFjerneOperasjon}
                vergetyper={alleKodeverk['VergeType']}
                valgtVergeType={valgtVergeType}
              />
            </Dialog.Body>
            <Dialog.Footer>
              <Button variant="primary" size="small" autoFocus type="submit">
                {intl.formatMessage({ id: erFjerneOperasjon ? 'MenyVergeIndex.Fjern' : 'MenyVergeIndex.Opprett' })}
              </Button>
              <Button variant="secondary" size="small" onClick={lukkModal} type="button">
                {intl.formatMessage({ id: 'MenyVergeIndex.Avbryt' })}
              </Button>
            </Dialog.Footer>
          </RhfForm>
        </Dialog.Popup>
      </Dialog>
    </RawIntlProvider>
  );
};
