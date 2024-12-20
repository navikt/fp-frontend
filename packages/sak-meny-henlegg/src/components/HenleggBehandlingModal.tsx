import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, Heading, HStack, Label, Link, Modal, VStack } from '@navikt/ds-react';
import { Form, SelectField, TextAreaField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, required } from '@navikt/ft-form-validators';
import { formaterFritekst } from '@navikt/ft-utils';

import { BehandlingResultatType, BehandlingType, DokumentMalType, FagsakYtelseType } from '@navikt/fp-kodeverk';
import { KodeverkMedNavn } from '@navikt/fp-types';

import styles from './henleggBehandlingModal.module.css';

const maxLength1500 = maxLength(1500);

// TODO (TOR) Skal bruka navn fra kodeverk i staden for oppslag klientside for "henleggArsaker"

const previewHenleggBehandlingDoc =
  (
    previewHenleggBehandling: (erHenleggelse: boolean, data: any) => void,
    ytelseType: string,
    behandlingUuid: string,
    fritekst?: string,
  ) =>
  (e: React.MouseEvent | React.KeyboardEvent): void => {
    // TODO Hardkoda verdiar. Er dette eit kodeverk?
    const data = {
      behandlingUuid,
      fagsakYtelseType: ytelseType,
      dokumentMal: DokumentMalType.INFO_OM_HENLEGGELSE,
      fritekst,
      mottaker: 'Søker',
    };
    previewHenleggBehandling(true, data);
    e.preventDefault();
  };

const showHenleggelseFritekst = (behandlingTypeKode: string, årsakKode?: string): boolean =>
  BehandlingType.TILBAKEKREVING_REVURDERING === behandlingTypeKode &&
  BehandlingResultatType.HENLAGT_FEILOPPRETTET_MED_BREV === årsakKode;

const disableHovedKnapp = (
  behandlingTypeKode: string,
  årsakKode?: string,
  begrunnelse?: string,
  fritekst?: string,
): boolean => {
  if (showHenleggelseFritekst(behandlingTypeKode, årsakKode)) {
    return !(årsakKode && begrunnelse && fritekst);
  }
  return !(årsakKode && begrunnelse);
};

const getShowLink = (behandlingType: string, arsakKode?: string, fritekst?: string): boolean => {
  if (behandlingType === BehandlingType.TILBAKEKREVING) {
    return BehandlingResultatType.HENLAGT_FEILOPPRETTET === arsakKode;
  }
  if (behandlingType === BehandlingType.TILBAKEKREVING_REVURDERING) {
    return BehandlingResultatType.HENLAGT_FEILOPPRETTET_MED_BREV === arsakKode && !!fritekst;
  }

  return [
    BehandlingResultatType.HENLAGT_SOKNAD_TRUKKET,
    BehandlingResultatType.HENLAGT_KLAGE_TRUKKET,
    BehandlingResultatType.HENLAGT_INNSYN_TRUKKET,
  ].some(brt => brt === arsakKode);
};

const henleggArsakerPerBehandlingType = {
  [BehandlingType.KLAGE]: [BehandlingResultatType.HENLAGT_KLAGE_TRUKKET, BehandlingResultatType.HENLAGT_FEILOPPRETTET],
  [BehandlingType.ANKE]: [BehandlingResultatType.HENLAGT_ANKE_TRUKKET, BehandlingResultatType.HENLAGT_FEILOPPRETTET],
  [BehandlingType.DOKUMENTINNSYN]: [
    BehandlingResultatType.HENLAGT_INNSYN_TRUKKET,
    BehandlingResultatType.HENLAGT_FEILOPPRETTET,
  ],
  [BehandlingType.TILBAKEKREVING]: [BehandlingResultatType.HENLAGT_FEILOPPRETTET],
  [BehandlingType.TILBAKEKREVING_REVURDERING]: [
    BehandlingResultatType.HENLAGT_FEILOPPRETTET_MED_BREV,
    BehandlingResultatType.HENLAGT_FEILOPPRETTET_UTEN_BREV,
  ],
  [BehandlingType.REVURDERING]: [
    BehandlingResultatType.HENLAGT_SOKNAD_TRUKKET,
    BehandlingResultatType.HENLAGT_FEILOPPRETTET,
    BehandlingResultatType.HENLAGT_SOKNAD_MANGLER,
  ],
  [BehandlingType.FORSTEGANGSSOKNAD]: [
    BehandlingResultatType.HENLAGT_SOKNAD_TRUKKET,
    BehandlingResultatType.HENLAGT_FEILOPPRETTET,
    BehandlingResultatType.HENLAGT_SOKNAD_MANGLER,
  ],
};

export const getHenleggArsaker = (
  behandlingResultatTyper: KodeverkMedNavn[],
  behandlingType: string,
  ytelseType: string,
): KodeverkMedNavn[] => {
  const typerForBehandlingType = henleggArsakerPerBehandlingType[behandlingType as BehandlingType];
  return typerForBehandlingType
    .filter(
      type =>
        ytelseType !== FagsakYtelseType.ENGANGSSTONAD ||
        (ytelseType === FagsakYtelseType.ENGANGSSTONAD && type !== BehandlingResultatType.HENLAGT_SOKNAD_MANGLER),
    )
    .flatMap(type => {
      const typer = behandlingResultatTyper.find(brt => brt.kode === type);
      return typer ? [typer] : [];
    });
};

export type FormValues = {
  årsakKode?: string;
  begrunnelse?: string;
  fritekst?: string;
};

interface Props {
  handleSubmit: (values: FormValues) => void;
  cancelEvent: () => void;
  previewHenleggBehandling: (erHenleggelse: boolean, data: any) => void;
  behandlingUuid: string;
  ytelseType: string;
  behandlingResultatTyper: KodeverkMedNavn[];
  behandlingType: string;
}

/**
 * HenleggBehandlingModal
 *
 * Presentasjonskomponent. Denne modalen vises når saksbehandler valger 'Henlegg behandling og avslutt'.
 * Ved å angi årsak og begrunnelse og trykke på 'Henlegg behandling' blir behandlingen henlagt og avsluttet.
 */
export const HenleggBehandlingModal = ({
  handleSubmit,
  cancelEvent,
  previewHenleggBehandling,
  behandlingUuid,
  ytelseType,
  behandlingType,
  behandlingResultatTyper,
}: Props) => {
  const intl = useIntl();

  const formMethods = useForm<FormValues>();

  const årsakKode = formMethods.watch('årsakKode');
  const begrunnelse = formMethods.watch('begrunnelse');
  const fritekst = formMethods.watch('fritekst');

  const showLink = getShowLink(behandlingType, årsakKode, fritekst);

  const henleggArsaker = useMemo(
    () => getHenleggArsaker(behandlingResultatTyper, behandlingType, ytelseType),
    [behandlingResultatTyper, behandlingType, ytelseType],
  );

  return (
    <Form formMethods={formMethods} onSubmit={handleSubmit}>
      <Modal
        className={styles.modal}
        open
        aria-label={intl.formatMessage({ id: 'HenleggBehandlingModal.ModalDescription' })}
        onClose={cancelEvent}
      >
        <Modal.Header>
          <Heading size="small">
            <FormattedMessage id="HenleggBehandlingModal.HenleggBehandling" />
          </Heading>
        </Modal.Header>
        <Modal.Body>
          <VStack gap="4">
            <SelectField
              name="årsakKode"
              className={styles.selectWidth}
              label={intl.formatMessage({ id: 'HenleggBehandlingModal.ArsakField' })}
              validate={[required]}
              selectValues={henleggArsaker.map(arsak => (
                <option value={arsak.kode} key={arsak.kode}>
                  {intl.formatMessage({ id: arsak.kode })}
                </option>
              ))}
            />
            <TextAreaField
              name="begrunnelse"
              label={intl.formatMessage({ id: 'HenleggBehandlingModal.BegrunnelseField' })}
              validate={[required, maxLength1500, hasValidText]}
              maxLength={1500}
            />
            {showHenleggelseFritekst(behandlingType, årsakKode) && (
              <div className={styles.fritekstTilBrevTextArea}>
                <TextAreaField
                  name="fritekst"
                  label={intl.formatMessage({ id: 'HenleggBehandlingModal.Fritekst' })}
                  validate={[required, hasValidText]}
                  maxLength={2000}
                  parse={formaterFritekst}
                />
              </div>
            )}
            {showLink && (
              <HStack justify="space-between">
                <Label size="small">{intl.formatMessage({ id: 'HenleggBehandlingModal.SokerInformeres' })}</Label>
                <Link
                  href="#"
                  onClick={previewHenleggBehandlingDoc(previewHenleggBehandling, ytelseType, behandlingUuid, fritekst)}
                  onKeyDown={previewHenleggBehandlingDoc(
                    previewHenleggBehandling,
                    ytelseType,
                    behandlingUuid,
                    fritekst,
                  )}
                >
                  <FormattedMessage id="HenleggBehandlingModal.ForhandsvisBrev" />
                </Link>
              </HStack>
            )}
          </VStack>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            size="small"
            className={styles.button}
            disabled={disableHovedKnapp(behandlingType, årsakKode, begrunnelse, fritekst)}
          >
            <FormattedMessage id="HenleggBehandlingModal.HenleggBehandlingSubmit" />
          </Button>
          <Button variant="secondary" size="small" onClick={cancelEvent} type="button">
            <FormattedMessage id="HenleggBehandlingModal.Avbryt" />
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};
