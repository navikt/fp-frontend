import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { MagnifyingGlassIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Dialog, HStack, VStack } from '@navikt/ds-react';
import { RhfForm, RhfTextField } from '@navikt/ft-form-hooks';
import { hasValidInteger, minLength, required } from '@navikt/ft-form-validators';

type FormValues = {
  journalpostId: string;
};

interface Props {
  hentJournalpost: (journalpostId: string) => void;
  lukkModal: () => void;
  erÅpen: boolean;
  harSøktOgFunnetIngenMatch: boolean;
}

/**
 * JournalpostSøkModal - Modal for å søke etter en journalpost ved ID
 */
export const JournalpostSøkModal = ({ hentJournalpost, lukkModal, erÅpen, harSøktOgFunnetIngenMatch }: Props) => {
  const [lasterJournalpost, setLasterJournalpost] = useState(false);

  const formMethods = useForm({
    defaultValues: {} as FormValues,
  });

  return (
    <Dialog open={erÅpen} onOpenChange={lukkModal}>
      <Dialog.Popup closeOnOutsideClick={false} width="small">
        <Dialog.Header>
          <Dialog.Title>
            <FormattedMessage id="Journalpost.Søk.Tittel" />
          </Dialog.Title>
        </Dialog.Header>
        <Dialog.Body>
          <VStack gap="space-8">
            <RhfForm<FormValues>
              formMethods={formMethods}
              onSubmit={(data: FormValues) => {
                setLasterJournalpost(true);
                hentJournalpost(data.journalpostId);
                setLasterJournalpost(false);
              }}
            >
              <HStack gap="space-8" align="end">
                <RhfTextField
                  description={<FormattedMessage id="Journalpost.Søk.KunTall" />}
                  label={<FormattedMessage id="Journalpost.Søk.JournalpostID" />}
                  name="journalpostId"
                  control={formMethods.control}
                  validate={[required, hasValidInteger, minLength(9)]}
                  size="medium"
                />
                <Button loading={lasterJournalpost} icon={<MagnifyingGlassIcon aria-hidden />}>
                  <FormattedMessage id="Journalpost.Søk.Finn" />
                </Button>
              </HStack>
            </RhfForm>
            {harSøktOgFunnetIngenMatch && (
              <BodyShort>
                <FormattedMessage id="Journalpost.Søk.IngenTreffEllerManglerTilgang" />
              </BodyShort>
            )}
          </VStack>
        </Dialog.Body>
      </Dialog.Popup>
    </Dialog>
  );
};
