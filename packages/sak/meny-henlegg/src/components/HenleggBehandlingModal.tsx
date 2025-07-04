import React from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, Heading, HStack, Label, Link, Modal, VStack } from '@navikt/ds-react';
import { RhfForm, RhfSelect, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, required } from '@navikt/ft-form-validators';
import { formaterFritekst } from '@navikt/ft-utils';

import {
  BehandlingResultatType,
  BehandlingResultatTypeTilbakekreving,
  BehandlingType,
  DokumentMalType,
  FagsakYtelseType,
} from '@navikt/fp-kodeverk';
import type { KodeverkMedNavn, KodeverkMedNavnTilbakekreving } from '@navikt/fp-types';

import styles from './henleggBehandlingModal.module.css';

const maxLength1500 = maxLength(1500);

export type ForhåndsvisHenleggParams = {
  behandlingUuid: string;
  dokumentMal: string;
  fritekst?: string;
};

const forhåndsvisHenleggBehandlingDoc =
  (forhåndsvisHenleggingsbrev: (data: ForhåndsvisHenleggParams) => void, behandlingUuid: string, fritekst?: string) =>
  (e: React.MouseEvent | React.KeyboardEvent): void => {
    forhåndsvisHenleggingsbrev({
      behandlingUuid,
      dokumentMal: DokumentMalType.INFO_OM_HENLEGGELSE,
      fritekst,
    });
    e.preventDefault();
  };

const showHenleggelseFritekst = (behandlingTypeKode: string, årsakKode?: string): boolean =>
  BehandlingType.TILBAKEKREVING_REVURDERING === behandlingTypeKode &&
  BehandlingResultatType.HENLAGT_FEILOPPRETTET_MED_BREV === årsakKode;

const disableHovedKnapp = (
  behandlingTypeKode: BehandlingType,
  årsakKode?: string,
  begrunnelse?: string,
  fritekst?: string,
): boolean => {
  if (showHenleggelseFritekst(behandlingTypeKode, årsakKode)) {
    return !(årsakKode && begrunnelse && fritekst);
  }
  return !(årsakKode && begrunnelse);
};

const getShowLink = (behandlingType: BehandlingType, arsakKode?: string, fritekst?: string): boolean => {
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
  [BehandlingType.TILBAKEKREVING]: [BehandlingResultatTypeTilbakekreving.HENLAGT_FEILOPPRETTET],
  [BehandlingType.TILBAKEKREVING_REVURDERING]: [
    BehandlingResultatTypeTilbakekreving.HENLAGT_FEILOPPRETTET_MED_BREV,
    BehandlingResultatTypeTilbakekreving.HENLAGT_FEILOPPRETTET_UTEN_BREV,
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
  behandlingResultatTyper:
    | KodeverkMedNavn<'BehandlingResultatType'>[]
    | KodeverkMedNavnTilbakekreving<'BehandlingResultatType'>[],
  behandlingType: BehandlingType,
  ytelseType: FagsakYtelseType,
): (KodeverkMedNavn<'BehandlingResultatType'> | KodeverkMedNavnTilbakekreving<'BehandlingResultatType'>)[] => {
  const typerForBehandlingType = henleggArsakerPerBehandlingType[behandlingType];
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
  forhandsvisHenleggBehandling: (data: ForhåndsvisHenleggParams) => void;
  behandlingUuid: string;
  ytelseType: FagsakYtelseType;
  behandlingResultatTyper:
    | KodeverkMedNavn<'BehandlingResultatType'>[]
    | KodeverkMedNavnTilbakekreving<'BehandlingResultatType'>[];
  behandlingType: BehandlingType;
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
  forhandsvisHenleggBehandling,
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

  const henleggArsaker = getHenleggArsaker(behandlingResultatTyper, behandlingType, ytelseType);

  return (
    <RhfForm formMethods={formMethods} onSubmit={handleSubmit}>
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
            <RhfSelect
              name="årsakKode"
              control={formMethods.control}
              className={styles.selectWidth}
              label={intl.formatMessage({ id: 'HenleggBehandlingModal.ArsakField' })}
              validate={[required]}
              selectValues={henleggArsaker.map(arsak => (
                <option value={arsak.kode} key={arsak.kode}>
                  {intl.formatMessage({ id: arsak.kode })}
                </option>
              ))}
            />
            <RhfTextarea
              name="begrunnelse"
              control={formMethods.control}
              label={intl.formatMessage({ id: 'HenleggBehandlingModal.BegrunnelseField' })}
              validate={[required, maxLength1500, hasValidText]}
              maxLength={1500}
            />
            {showHenleggelseFritekst(behandlingType, årsakKode) && (
              <div className={styles.fritekstTilBrevTextArea}>
                <RhfTextarea
                  name="fritekst"
                  control={formMethods.control}
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
                  onClick={forhåndsvisHenleggBehandlingDoc(forhandsvisHenleggBehandling, behandlingUuid, fritekst)}
                  onKeyDown={forhåndsvisHenleggBehandlingDoc(forhandsvisHenleggBehandling, behandlingUuid, fritekst)}
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
    </RhfForm>
  );
};
