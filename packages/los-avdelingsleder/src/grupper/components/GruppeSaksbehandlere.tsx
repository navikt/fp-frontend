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

const minLength3 = minLength(3);
const maxLength100 = maxLength(100);

const sortGrupperteSaksbehandlere = (saksbehandlere: GruppeSaksbehandler[]) =>
  [...saksbehandlere].sort((saksbehandler1, saksbehandler2) =>
    saksbehandler1.saksbehandlerDto.navn.localeCompare(saksbehandler2.saksbehandlerDto.navn),
  );

const sortAvdelingensSaksbehandlere = (saksbehandlere: SaksbehandlerAvdeling[]) =>
  [...saksbehandlere].sort((saksbehandler1, saksbehandler2) => saksbehandler1.navn.localeCompare(saksbehandler2.navn));

interface Props {
  saksbehandlerGruppe: SaksbehandlerGruppe;
  avdelingensSaksbehandlere: SaksbehandlerAvdeling[];
  lagreValgtSaksbehandlar: (brukerIdent: string, gruppeId: number, isChecked: boolean) => void;
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
  const sorterteSaksbehandlereForAvdeling = sortAvdelingensSaksbehandlere(avdelingensSaksbehandlere);

  return (
    <Form formMethods={formMethods}>
      <VStack gap="5">
        <InputField
          name="navn"
          label={intl.formatMessage({ id: 'GruppeSaksbehandlere.Navn' })}
          validate={[required, minLength3, maxLength100, hasValidName]}
          onChange={(navn: string) => endreGruppenavn(saksbehandlerGruppe.gruppeId, navn)}
          className={styles.navn}
        />
        <VStack gap="1">
          <Label size="small">
            <FormattedMessage id="GruppeSaksbehandlere.ValgteSaksbehandlere" />
          </Label>
          <VStack gap="2">
            {sorterteGrupperteSaksbehandlere.length === 0 && (
              <BodyShort size="small">
                <FormattedMessage id="GruppeSaksbehandlere.Ingen" />
              </BodyShort>
            )}
            {sorterteGrupperteSaksbehandlere.map(saksbehandler => (
              <HStack gap="2" align="center">
                <div>{`${saksbehandler.saksbehandlerDto.navn} (${saksbehandler.saksbehandlerDto.brukerIdent})`}</div>
                <div>
                  <XMarkIcon
                    onMouseDown={() =>
                      lagreValgtSaksbehandlar(
                        saksbehandler.saksbehandlerDto.brukerIdent,
                        saksbehandlerGruppe.gruppeId,
                        false,
                      )
                    }
                    onKeyDown={() =>
                      lagreValgtSaksbehandlar(
                        saksbehandler.saksbehandlerDto.brukerIdent,
                        saksbehandlerGruppe.gruppeId,
                        false,
                      )
                    }
                  />
                </div>
              </HStack>
            ))}
          </VStack>
        </VStack>
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <UNSAFE_Combobox // eslint-disable-line camelcase
          label={intl.formatMessage({ id: 'GruppeSaksbehandlere.VelgSaksbehandlere' })}
          size="small"
          options={sorterteSaksbehandlereForAvdeling.map(
            saksbehandler => `${saksbehandler.navn} (${saksbehandler.brukerIdent})`,
          )}
          onToggleSelected={option => {
            const navnOgBrukerIdent = option.replace(')', '').split(' (');
            if (!sorterteGrupperteSaksbehandlere.some(gs => gs.saksbehandlerDto.brukerIdent === navnOgBrukerIdent[1])) {
              lagreValgtSaksbehandlar(navnOgBrukerIdent[1], saksbehandlerGruppe.gruppeId, true);
            }
          }}
          shouldAutocomplete
          className={styles.saksbehandlerCombo}
        />
      </VStack>
    </Form>
  );
};

export default GruppeSaksbehandlere;
