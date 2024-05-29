import { BodyShort, HStack, Label, UNSAFE_Combobox, VStack } from '@navikt/ds-react'; // eslint-disable-line camelcase
import { Form, InputField } from '@navikt/ft-form-hooks';
import { hasValidName, maxLength, minLength, required } from '@navikt/ft-form-validators';
import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { XMarkIcon } from '@navikt/aksel-icons';
import SaksbehandlerAvdeling from '../../typer/saksbehandlerAvdelingTsType';
import { GruppeSaksbehandler, SaksbehandlerGruppe } from '../../typer/saksbehandlereOgSaksbehandlerGrupper ';

import styles from './gruppeSaksbehandlere.module.css';
import useDebounce from '../../behandlingskoer/components/sakslisteForm/useDebounce';

const minLength3 = minLength(3);
const maxLength100 = maxLength(100);

const sortGrupperteSaksbehandlere = (saksbehandlere: GruppeSaksbehandler[]) =>
  [...saksbehandlere].sort((saksbehandler1, saksbehandler2) => saksbehandler1.navn.localeCompare(saksbehandler2.navn));

const sortAvdelingensSaksbehandlere = (
  saksbehandlere: SaksbehandlerAvdeling[],
  grupperteSaksbehandlere: SaksbehandlerAvdeling[],
) =>
  saksbehandlere
    .filter(s => !grupperteSaksbehandlere.some(gs => gs.brukerIdent === s.brukerIdent))
    .sort((saksbehandler1, saksbehandler2) => saksbehandler1.navn.localeCompare(saksbehandler2.navn));

interface Props {
  saksbehandlerGruppe: SaksbehandlerGruppe;
  avdelingensSaksbehandlere: SaksbehandlerAvdeling[];
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

  const lagreNavnDebounce = useDebounce<string>(
    'navn',
    (navn: string) => endreGruppenavn(saksbehandlerGruppe.gruppeId, navn),
    formMethods.trigger,
  );

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
          {/* eslint-disable-next-line react/jsx-pascal-case */}
          <UNSAFE_Combobox // eslint-disable-line camelcase
            label={intl.formatMessage({ id: 'GruppeSaksbehandlere.VelgSaksbehandlere' })}
            size="small"
            options={sorterteSaksbehandlereForAvdeling.map(
              saksbehandler => `${saksbehandler.navn} (${saksbehandler.brukerIdent})`,
            )}
            onToggleSelected={option => {
              const navnOgBrukerIdent = option.replace(')', '').split(' (');
              if (!sorterteGrupperteSaksbehandlere.some(gs => gs.brukerIdent === navnOgBrukerIdent[1])) {
                lagreValgtSaksbehandlar(navnOgBrukerIdent[1], saksbehandlerGruppe.gruppeId, true);
              }
            }}
            shouldAutocomplete
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
                    onMouseDown={() =>
                      lagreValgtSaksbehandlar(saksbehandler.brukerIdent, saksbehandlerGruppe.gruppeId, false)
                    }
                    onKeyDown={() =>
                      lagreValgtSaksbehandlar(saksbehandler.brukerIdent, saksbehandlerGruppe.gruppeId, false)
                    }
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
