import React, { FunctionComponent, useMemo } from 'react';
import { useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import {
  Button, Heading, Label, Modal,
} from '@navikt/ds-react';
import {
  FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';

import {
  behandlingType as BehandlingType, behandlingResultatType, fagsakYtelseType, dokumentMalType,
} from '@navikt/fp-kodeverk';
import { SelectField, TextAreaField, Form } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, required } from '@navikt/ft-form-validators';
import { KodeverkMedNavn } from '@navikt/fp-types';

import styles from './henleggBehandlingModal.module.css';

const maxLength1500 = maxLength(1500);

// TODO (TOR) Skal bruka navn fra kodeverk i staden for oppslag klientside for "henleggArsaker"

const previewHenleggBehandlingDoc = (
  previewHenleggBehandling: (erHenleggelse: boolean, data: any) => void,
  ytelseType: string,
  fritekst?: string,
  behandlingUuid?: string,
) => (e: React.MouseEvent | React.KeyboardEvent): void => {
  // TODO Hardkoda verdiar. Er dette eit kodeverk?
  const data = {
    behandlingUuid,
    fagsakYtelseType: ytelseType,
    dokumentMal: dokumentMalType.INFO_OM_HENLEGGELSE,
    fritekst,
    mottaker: 'Søker',
  };
  previewHenleggBehandling(true, data);
  e.preventDefault();
};

const showHenleggelseFritekst = (
  behandlingTypeKode: string,
  årsakKode?: string,
): boolean => BehandlingType.TILBAKEKREVING_REVURDERING === behandlingTypeKode && behandlingResultatType.HENLAGT_FEILOPPRETTET_MED_BREV === årsakKode;

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
    return behandlingResultatType.HENLAGT_FEILOPPRETTET === arsakKode;
  }
  if (behandlingType === BehandlingType.TILBAKEKREVING_REVURDERING) {
    return behandlingResultatType.HENLAGT_FEILOPPRETTET_MED_BREV === arsakKode && !!fritekst;
  }

  return [
    behandlingResultatType.HENLAGT_SOKNAD_TRUKKET,
    behandlingResultatType.HENLAGT_KLAGE_TRUKKET,
    behandlingResultatType.HENLAGT_INNSYN_TRUKKET,
  ].includes(arsakKode || '');
};

const henleggArsakerPerBehandlingType = {
  [BehandlingType.KLAGE]: [behandlingResultatType.HENLAGT_KLAGE_TRUKKET, behandlingResultatType.HENLAGT_FEILOPPRETTET],
  [BehandlingType.ANKE]: [behandlingResultatType.HENLAGT_ANKE_TRUKKET, behandlingResultatType.HENLAGT_FEILOPPRETTET],
  [BehandlingType.DOKUMENTINNSYN]: [behandlingResultatType.HENLAGT_INNSYN_TRUKKET, behandlingResultatType.HENLAGT_FEILOPPRETTET],
  [BehandlingType.TILBAKEKREVING]: [behandlingResultatType.HENLAGT_FEILOPPRETTET],
  [BehandlingType.TILBAKEKREVING_REVURDERING]: [behandlingResultatType.HENLAGT_FEILOPPRETTET_MED_BREV, behandlingResultatType.HENLAGT_FEILOPPRETTET_UTEN_BREV],
  [BehandlingType.REVURDERING]: [behandlingResultatType.HENLAGT_SOKNAD_TRUKKET, behandlingResultatType.HENLAGT_FEILOPPRETTET,
    behandlingResultatType.HENLAGT_SOKNAD_MANGLER],
  [BehandlingType.FORSTEGANGSSOKNAD]: [behandlingResultatType.HENLAGT_SOKNAD_TRUKKET, behandlingResultatType.HENLAGT_FEILOPPRETTET,
    behandlingResultatType.HENLAGT_SOKNAD_MANGLER],
};

export const getHenleggArsaker = (behandlingResultatTyper: KodeverkMedNavn[], behandlingType: string, ytelseType: string): KodeverkMedNavn[] => {
  const typerForBehandlingType = henleggArsakerPerBehandlingType[behandlingType];
  return typerForBehandlingType
    .filter((type) => ytelseType !== fagsakYtelseType.ENGANGSSTONAD
      || (ytelseType === fagsakYtelseType.ENGANGSSTONAD && type !== behandlingResultatType.HENLAGT_SOKNAD_MANGLER))
    .flatMap((type) => {
      const typer = behandlingResultatTyper.find((brt) => brt.kode === type);
      return typer ? [typer] : [];
    });
};

export type FormValues = {
  årsakKode?: string;
  begrunnelse?: string;
  fritekst?: string;
}

interface PureOwnProps {
  handleSubmit: (values: FormValues) => void;
  cancelEvent: () => void;
  previewHenleggBehandling: (erHenleggelse: boolean, data: any) => void;
  behandlingUuid?: string;
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
const HenleggBehandlingModal: FunctionComponent<PureOwnProps> = ({
  handleSubmit,
  cancelEvent,
  previewHenleggBehandling,
  behandlingUuid,
  ytelseType,
  behandlingType,
  behandlingResultatTyper,
}) => {
  const intl = useIntl();

  const formMethods = useForm<FormValues>();

  const årsakKode = formMethods.watch('årsakKode');
  const begrunnelse = formMethods.watch('begrunnelse');
  const fritekst = formMethods.watch('fritekst');

  const showLink = getShowLink(behandlingType, årsakKode, fritekst);

  const henleggArsaker = useMemo(() => getHenleggArsaker(behandlingResultatTyper, behandlingType, ytelseType),
    [behandlingResultatTyper, behandlingType, ytelseType]);

  return (
    <Modal
      className={styles.modal}
      open
      closeButton
      aria-label={intl.formatMessage({ id: 'HenleggBehandlingModal.ModalDescription' })}
      onClose={cancelEvent}
      shouldCloseOnOverlayClick={false}
    >
      <Modal.Content>
        <Form formMethods={formMethods} onSubmit={handleSubmit}>
          <Heading size="small">{intl.formatMessage({ id: 'HenleggBehandlingModal.HenleggBehandling' })}</Heading>
          <VerticalSpacer sixteenPx />
          <SelectField
            name="årsakKode"
            className={styles.selectWidth}
            label={intl.formatMessage({ id: 'HenleggBehandlingModal.ArsakField' })}
            validate={[required]}
            selectValues={henleggArsaker.map((arsak) => <option value={arsak.kode} key={arsak.kode}>{intl.formatMessage({ id: arsak.kode })}</option>)}
          />
          <VerticalSpacer sixteenPx />
          <TextAreaField
            name="begrunnelse"
            label={intl.formatMessage({ id: 'HenleggBehandlingModal.BegrunnelseField' })}
            validate={[required, maxLength1500, hasValidText]}
            maxLength={1500}
          />
          {showHenleggelseFritekst(behandlingType, årsakKode) && (
            <>
              <VerticalSpacer sixteenPx />
              <div className={styles.fritekstTilBrevTextArea}>
                <TextAreaField
                  name="fritekst"
                  label={intl.formatMessage({ id: 'HenleggBehandlingModal.Fritekst' })}
                  validate={[required, hasValidText]}
                  maxLength={2000}
                />
              </div>
            </>
          )}
          <FlexContainer>
            <FlexRow spaceBetween>
              <FlexColumn>
                <VerticalSpacer sixteenPx />
                <FlexContainer>
                  <FlexRow>
                    <FlexColumn>
                      <Button
                        variant="primary"
                        size="small"
                        className={styles.button}
                        disabled={disableHovedKnapp(behandlingType, årsakKode, begrunnelse, fritekst)}
                      >
                        {intl.formatMessage({ id: 'HenleggBehandlingModal.HenleggBehandlingSubmit' })}
                      </Button>
                    </FlexColumn>
                    <FlexColumn>
                      <Button
                        variant="secondary"
                        size="small"
                        onClick={cancelEvent}
                        type="button"
                      >
                        {intl.formatMessage({ id: 'HenleggBehandlingModal.Avbryt' })}
                      </Button>
                    </FlexColumn>
                  </FlexRow>
                </FlexContainer>
              </FlexColumn>
              <FlexColumn>
                {showLink && (
                  <div className={styles.forhandsvis}>
                    <Label size="small">{intl.formatMessage({ id: 'HenleggBehandlingModal.SokerInformeres' })}</Label>
                    <VerticalSpacer fourPx />
                    <a
                      href=""
                      onClick={previewHenleggBehandlingDoc(previewHenleggBehandling, ytelseType, fritekst, behandlingUuid)}
                      onKeyDown={previewHenleggBehandlingDoc(previewHenleggBehandling, ytelseType, fritekst, behandlingUuid)}
                      className="lenke lenke--frittstaende"
                    >
                      {intl.formatMessage({ id: 'HenleggBehandlingModal.ForhandsvisBrev' })}
                    </a>
                  </div>
                )}
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default HenleggBehandlingModal;
