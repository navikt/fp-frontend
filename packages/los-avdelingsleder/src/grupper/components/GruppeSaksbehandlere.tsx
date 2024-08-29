import { BodyShort, HStack, Label, UNSAFE_Combobox, VStack } from '@navikt/ds-react';
import { Form, InputField } from '@navikt/ft-form-hooks';
import { hasValidName, maxLength, minLength, required } from '@navikt/ft-form-validators';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { XMarkIcon } from '@navikt/aksel-icons';
import { SaksbehandlerProfil } from '@navikt/fp-los-felles';
import { SaksbehandlerGruppe } from '../../typer/saksbehandlereOgSaksbehandlerGrupper ';

import styles from './gruppeSaksbehandlere.module.css';
import useDebounce from '../../behandlingskoer/components/sakslisteForm/useDebounce';

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
  saksbehandlerGruppe: SaksbehandlerGruppe;
  avdelingensSaksbehandlere: SaksbehandlerProfil[];
  lagreValgtSaksbehandlar: (brukerIdent: string, gruppeId: number, leggTil: boolean) => void;
  endreGruppenavn: (gruppeId: number, gruppeNavn: string) => void;
}

const GruppeSaksbehandlere: FunctionComponent<Props> = ({
  saksbehandlerGruppe,
  avdelingensSaksbehandlere,
  lagreValgtSaksbehandlar,
  endreGruppenavn,
}) => {
  const intl = useIntl();

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

  const lagreNavnDebounce = useDebounce<string>(
    'navn',
    (navn: string) => endreGruppenavn(saksbehandlerGruppe.gruppeId, navn),
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
    const selectedOption = filteredOptions.find(o => o.toLowerCase().includes(option?.toLowerCase()));
    const navnOgBrukerIdent = selectedOption?.replace(')', '').split(' (');
    const alreadySelected = sorterteGrupperteSaksbehandlere.some(
      gs => navnOgBrukerIdent && gs.brukerIdent === navnOgBrukerIdent[1],
    );

    if (selectedOption && isSelected && !alreadySelected && navnOgBrukerIdent) {
      lagreValgtSaksbehandlar(navnOgBrukerIdent[1], saksbehandlerGruppe.gruppeId, true);
    }
  };

  const fjernFraGruppe = (ident: string, gruppeId: number) => {
    lagreValgtSaksbehandlar(ident, gruppeId, false);
  };

  useEffect(() => filterOptions(filterValue), [saksbehandlerGruppe, filterValue]);

  return (
    <Form formMethods={formMethods}>
      <VStack gap="5">
        <InputField
          name="navn"
          label={intl.formatMessage({ id: 'GruppeSaksbehandlere.Navn' })}
          validate={[required, minLength3, maxLength100, hasValidName]}
          onBlur={lagreNavnDebounce}
          className={styles.navn}
        />
        <VStack gap="4">
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

          <VStack gap="2">
            <Label size="small">
              <FormattedMessage id="GruppeSaksbehandlere.ValgteSaksbehandlere" />
            </Label>
            {sorterteGrupperteSaksbehandlere.length === 0 && (
              <BodyShort size="small">
                <FormattedMessage id="GruppeSaksbehandlere.Ingen" />
              </BodyShort>
            )}
            {sorterteGrupperteSaksbehandlere.map(saksbehandler => (
              <HStack gap="2" align="center" key={saksbehandler.brukerIdent}>
                <div>{`${saksbehandler.navn} (${saksbehandler.brukerIdent})`}</div>
                <div>
                  <XMarkIcon
                    className={styles.removeIcon}
                    onMouseDown={() => fjernFraGruppe(saksbehandler.brukerIdent, saksbehandlerGruppe.gruppeId)}
                    onKeyDown={() => fjernFraGruppe(saksbehandler.brukerIdent, saksbehandlerGruppe.gruppeId)}
                  />
                </div>
              </HStack>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </Form>
  );
};

export default GruppeSaksbehandlere;
