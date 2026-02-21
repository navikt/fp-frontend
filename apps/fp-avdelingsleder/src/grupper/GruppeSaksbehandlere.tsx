import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { XMarkIcon } from '@navikt/aksel-icons';
import { Button, HStack, UNSAFE_Combobox, VStack } from '@navikt/ds-react';
import { RhfForm, RhfTextField } from '@navikt/ft-form-hooks';
import { hasValidName, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { LabeledValue } from '@navikt/ft-ui-komponenter';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { type SaksbehandlerGruppeDto, type SaksbehandlerProfil } from '@navikt/fp-types';

import { useDebounce } from '../behandlingskoer/sakslisteForm/useDebounce';
import {
  endreGruppenavn,
  fjernSaksbehandlerFraGruppe,
  leggSaksbehandlerTilGruppe,
  LosUrl,
} from '../data/fplosAvdelingslederApi';

import styles from './gruppeSaksbehandlere.module.css';

const minLength3 = minLength(3);
const maxLength100 = maxLength(100);

const sortGrupperteSaksbehandlere = (saksbehandlere: SaksbehandlerProfil[]) =>
  [...saksbehandlere].sort((saksbehandler1, saksbehandler2) => saksbehandler1.navn.localeCompare(saksbehandler2.navn));

const sortAvdelingensSaksbehandlere = (
  saksbehandlere: SaksbehandlerProfil[],
  grupperteSaksbehandlere: SaksbehandlerProfil[],
) =>
  saksbehandlere
    .filter(s => !grupperteSaksbehandlere.some(gs => gs.brukerIdent === s.brukerIdent))
    .sort((saksbehandler1, saksbehandler2) => saksbehandler1.navn.localeCompare(saksbehandler2.navn));

interface Props {
  valgAvdeldingEnhet: string;
  saksbehandlerGruppe: SaksbehandlerGruppeDto;
  avdelingensSaksbehandlere: SaksbehandlerProfil[];
}

export const GruppeSaksbehandlere = ({ valgAvdeldingEnhet, saksbehandlerGruppe, avdelingensSaksbehandlere }: Props) => {
  const queryClient = useQueryClient();
  const intl = useIntl();

  const { mutate: leggTilSaksbehandler } = useMutation({
    mutationFn: (valuesToStore: { brukerIdent: string; gruppeId: number }) =>
      leggSaksbehandlerTilGruppe(valuesToStore.brukerIdent, valgAvdeldingEnhet, valuesToStore.gruppeId),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.HENT_GRUPPER],
      });
    },
  });

  const { mutate: fjernSaksbehandler } = useMutation({
    mutationFn: (valuesToStore: { brukerIdent: string; gruppeId: number }) =>
      fjernSaksbehandlerFraGruppe(valuesToStore.brukerIdent, valgAvdeldingEnhet, valuesToStore.gruppeId),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.HENT_GRUPPER],
      });
    },
  });

  const { mutate: endreNavnPåGruppe } = useMutation({
    mutationFn: (valuesToStore: { gruppeId: number; gruppeNavn: string }) =>
      endreGruppenavn(valuesToStore.gruppeId, valuesToStore.gruppeNavn, valgAvdeldingEnhet),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.HENT_GRUPPER],
      });
    },
  });

  const formMethods = useForm({
    defaultValues: {
      navn: saksbehandlerGruppe.gruppeNavn,
    },
  });

  const sorterteGrupperteSaksbehandlere = sortGrupperteSaksbehandlere(saksbehandlerGruppe.saksbehandlere);
  const sorterteSaksbehandlereForAvdeling = sortAvdelingensSaksbehandlere(
    avdelingensSaksbehandlere,
    sorterteGrupperteSaksbehandlere,
  );

  const options = sorterteSaksbehandlereForAvdeling.map(sb => `${sb.navn} (${sb.brukerIdent})`);

  const lagreNavnDebounce = useDebounce(
    'navn',
    (navn: string) => endreNavnPåGruppe({ gruppeId: saksbehandlerGruppe.gruppeId, gruppeNavn: navn }),
    formMethods.trigger,
  );

  const [filterValue, setFilterValue] = useState<string>('');

  const filteredOptions = filterValue.trim()
    ? options.filter(option => option.toLowerCase().includes(filterValue.toLowerCase()))
    : options;

  const toggleSelected = (option: string, isSelected: boolean) => {
    const selectedOption = filteredOptions.find(o => o.toLowerCase().includes(option.toLowerCase()));
    const navnOgBrukerIdent = selectedOption?.replace(')', '').split(' (');
    const alreadySelected = sorterteGrupperteSaksbehandlere.some(
      gs => navnOgBrukerIdent && gs.brukerIdent === navnOgBrukerIdent[1],
    );

    if (selectedOption && isSelected && !alreadySelected && navnOgBrukerIdent) {
      leggTilSaksbehandler({ brukerIdent: navnOgBrukerIdent[1]!, gruppeId: saksbehandlerGruppe.gruppeId });
    }
  };

  return (
    <RhfForm formMethods={formMethods}>
      <VStack gap="space-20">
        <RhfTextField
          name="navn"
          control={formMethods.control}
          label={intl.formatMessage({ id: 'GruppeSaksbehandlere.Navn' })}
          validate={[required, minLength3, maxLength100, hasValidName]}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- [JOHANNES] bedre typede forms
          onBlur={value => lagreNavnDebounce(value)}
          className={styles['navn']}
        />
        <VStack gap="space-16">
          <UNSAFE_Combobox
            label={intl.formatMessage({ id: 'GruppeSaksbehandlere.VelgSaksbehandlere' })}
            size="small"
            options={options}
            filteredOptions={filteredOptions}
            selectedOptions={[]}
            onChange={setFilterValue}
            onToggleSelected={toggleSelected}
            className={styles['saksbehandlerCombo']}
          />

          <VStack gap="space-8">
            <LabeledValue
              size="small"
              label={<FormattedMessage id="GruppeSaksbehandlere.ValgteSaksbehandlere" />}
              value={
                <>
                  {sorterteGrupperteSaksbehandlere.length === 0 && <FormattedMessage id="GruppeSaksbehandlere.Ingen" />}
                  {sorterteGrupperteSaksbehandlere.map(saksbehandler => (
                    <HStack as="span" gap="space-8" align="center" key={saksbehandler.brukerIdent}>
                      {`${saksbehandler.navn} (${saksbehandler.brukerIdent})`}
                      <Button
                        variant="tertiary"
                        data-color="danger"
                        size="small"
                        title={intl.formatMessage(
                          { id: 'GruppeSaksbehandlere.SlettSaksbehandler' },
                          { navn: saksbehandler.navn },
                        )}
                        icon={<XMarkIcon aria-hidden />}
                        onClick={() =>
                          fjernSaksbehandler({
                            brukerIdent: saksbehandler.brukerIdent,
                            gruppeId: saksbehandlerGruppe.gruppeId,
                          })
                        }
                      />
                    </HStack>
                  ))}
                </>
              }
            />
          </VStack>
        </VStack>
      </VStack>
    </RhfForm>
  );
};
