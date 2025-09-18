import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { XMarkIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack, Label, UNSAFE_Combobox, VStack } from '@navikt/ds-react';
import { RhfForm, RhfTextField } from '@navikt/ft-form-hooks';
import { hasValidName, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { SaksbehandlerProfil } from '@navikt/fp-los-felles';

import { useDebounce } from '../behandlingskoer/sakslisteForm/useDebounce';
import {
  endreGruppenavn,
  fjernSaksbehandlerFraGruppe,
  leggSaksbehandlerTilGruppe,
  LosUrl,
} from '../data/fplosAvdelingslederApi';
import type { SaksbehandlerGruppe } from '../typer/saksbehandlereOgSaksbehandlerGrupper';

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
  saksbehandlerGruppe: SaksbehandlerGruppe;
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

  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [filterValue, setFilterValue] = useState<string>('');

  const filterOptions = (searchTerm: string | undefined) => {
    if (searchTerm?.trim()) {
      setFilteredOptions(options.filter(option => option.toLowerCase().includes(searchTerm.toLowerCase())));
    } else {
      setFilteredOptions(options);
    }
  };

  const toggleSelected = (option: string, isSelected: boolean) => {
    const selectedOption = filteredOptions.find(o => o.toLowerCase().includes(option.toLowerCase()));
    const navnOgBrukerIdent = selectedOption?.replace(')', '').split(' (');
    const alreadySelected = sorterteGrupperteSaksbehandlere.some(
      gs => navnOgBrukerIdent && gs.brukerIdent === navnOgBrukerIdent[1],
    );

    if (selectedOption && isSelected && !alreadySelected && navnOgBrukerIdent) {
      leggTilSaksbehandler({ brukerIdent: navnOgBrukerIdent[1], gruppeId: saksbehandlerGruppe.gruppeId });
    }
  };

  useEffect(() => filterOptions(filterValue), [saksbehandlerGruppe, filterValue]);

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
          className={styles.navn}
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
            className={styles.saksbehandlerCombo}
          />

          <VStack gap="space-8">
            <Label size="small">
              <FormattedMessage id="GruppeSaksbehandlere.ValgteSaksbehandlere" />
            </Label>
            {sorterteGrupperteSaksbehandlere.length === 0 && (
              <BodyShort size="small">
                <FormattedMessage id="GruppeSaksbehandlere.Ingen" />
              </BodyShort>
            )}
            {sorterteGrupperteSaksbehandlere.map(saksbehandler => (
              <HStack gap="space-8" align="center" key={saksbehandler.brukerIdent}>
                <div>{`${saksbehandler.navn} (${saksbehandler.brukerIdent})`}</div>
                <div>
                  <XMarkIcon
                    className={styles.removeIcon}
                    onMouseDown={() =>
                      fjernSaksbehandler({
                        brukerIdent: saksbehandler.brukerIdent,
                        gruppeId: saksbehandlerGruppe.gruppeId,
                      })
                    }
                    onKeyDown={() =>
                      fjernSaksbehandler({
                        brukerIdent: saksbehandler.brukerIdent,
                        gruppeId: saksbehandlerGruppe.gruppeId,
                      })
                    }
                  />
                </div>
              </HStack>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </RhfForm>
  );
};
