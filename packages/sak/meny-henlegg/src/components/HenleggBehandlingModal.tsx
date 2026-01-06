import React from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, Dialog, HStack, Label, Link, VStack } from '@navikt/ds-react';
import { RhfForm, RhfSelect, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, required } from '@navikt/ft-form-validators';
import { formaterFritekst } from '@navikt/ft-utils';

import type {
  BehandlingResultatType,
  BehandlingResultatTypeFpTilbake,
  BehandlingType,
  DokumentMalType,
  FagsakYtelseType,
  KodeverkMedNavn,
  KodeverkMedNavnTilbakekreving,
} from '@navikt/fp-types';

const maxLength1500 = maxLength(1500);

export type ForhåndsvisHenleggParams = {
  behandlingUuid: string;
  dokumentMal: DokumentMalType;
  fritekst?: string;
};

const henleggArsakerPerBehandlingType: Record<string, BehandlingResultatType[] | BehandlingResultatTypeFpTilbake[]> = {
  ['BT-003']: ['HENLAGT_KLAGE_TRUKKET', 'HENLAGT_FEILOPPRETTET'],
  ['BT-008']: ['HENLAGT_ANKE_TRUKKET', 'HENLAGT_FEILOPPRETTET'],
  ['BT-006']: ['HENLAGT_INNSYN_TRUKKET', 'HENLAGT_FEILOPPRETTET'],
  ['BT-007']: ['HENLAGT_FEILOPPRETTET'],
  ['BT-009']: ['HENLAGT_FEILOPPRETTET_MED_BREV', 'HENLAGT_FEILOPPRETTET_UTEN_BREV'],
  ['BT-004']: ['HENLAGT_SØKNAD_TRUKKET', 'HENLAGT_FEILOPPRETTET', 'HENLAGT_SØKNAD_MANGLER'],
  ['BT-002']: ['HENLAGT_SØKNAD_TRUKKET', 'HENLAGT_FEILOPPRETTET', 'HENLAGT_SØKNAD_MANGLER'],
  '-': [],
};

export type FormValues = {
  årsakKode?: BehandlingResultatType | BehandlingResultatTypeFpTilbake;
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

  const henleggArsaker = getHenleggÅrsaker(behandlingResultatTyper, behandlingType, ytelseType);

  return (
    <RhfForm formMethods={formMethods} onSubmit={handleSubmit}>
      <Dialog open onOpenChange={cancelEvent}>
        <Dialog.Popup closeOnOutsideClick={false}>
          <Dialog.Header>
            <Dialog.Title>
              <FormattedMessage id="HenleggBehandlingModal.HenleggBehandling" />
            </Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>
            <VStack gap="space-16">
              <RhfSelect
                name="årsakKode"
                control={formMethods.control}
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
                <div>
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
          </Dialog.Body>
          <Dialog.Footer>
            <Button
              variant="primary"
              size="small"
              disabled={disableHovedKnapp(behandlingType, årsakKode, begrunnelse, fritekst)}
            >
              <FormattedMessage id="HenleggBehandlingModal.HenleggBehandlingSubmit" />
            </Button>
            <Button variant="secondary" size="small" onClick={cancelEvent} type="button">
              <FormattedMessage id="HenleggBehandlingModal.Avbryt" />
            </Button>
          </Dialog.Footer>
        </Dialog.Popup>
      </Dialog>
    </RhfForm>
  );
};

const forhåndsvisHenleggBehandlingDoc =
  (forhåndsvisHenleggingsbrev: (data: ForhåndsvisHenleggParams) => void, behandlingUuid: string, fritekst?: string) =>
  (e: React.MouseEvent | React.KeyboardEvent): void => {
    forhåndsvisHenleggingsbrev({
      behandlingUuid,
      dokumentMal: 'IOHENL',
      fritekst,
    });
    e.preventDefault();
  };

const showHenleggelseFritekst = (
  behandlingTypeKode: BehandlingType,
  årsakKode?: BehandlingResultatType | BehandlingResultatTypeFpTilbake,
): boolean => 'BT-009' === behandlingTypeKode && 'HENLAGT_FEILOPPRETTET_MED_BREV' === årsakKode;

const disableHovedKnapp = (
  behandlingTypeKode: BehandlingType,
  årsakKode?: BehandlingResultatType | BehandlingResultatTypeFpTilbake,
  begrunnelse?: string,
  fritekst?: string,
): boolean => {
  if (showHenleggelseFritekst(behandlingTypeKode, årsakKode)) {
    return !(årsakKode && begrunnelse && fritekst);
  }
  return !(årsakKode && begrunnelse);
};

const t = new Set<BehandlingResultatType | BehandlingResultatTypeFpTilbake>([
  'HENLAGT_SØKNAD_TRUKKET',
  'HENLAGT_KLAGE_TRUKKET',
  'HENLAGT_INNSYN_TRUKKET',
]);
const getShowLink = (
  behandlingType: BehandlingType,
  arsakKode?: BehandlingResultatType | BehandlingResultatTypeFpTilbake,
  fritekst?: string,
): boolean => {
  if (behandlingType === 'BT-007') {
    return 'HENLAGT_FEILOPPRETTET' === arsakKode;
  }
  if (behandlingType === 'BT-009') {
    return 'HENLAGT_FEILOPPRETTET_MED_BREV' === arsakKode && !!fritekst;
  }

  return !!arsakKode && t.has(arsakKode);
};

const getHenleggÅrsaker = (
  behandlingResultatTyper:
    | KodeverkMedNavn<'BehandlingResultatType'>[]
    | KodeverkMedNavnTilbakekreving<'BehandlingResultatType'>[],
  behandlingType: BehandlingType,
  ytelseType: FagsakYtelseType,
): (KodeverkMedNavn<'BehandlingResultatType'> | KodeverkMedNavnTilbakekreving<'BehandlingResultatType'>)[] => {
  const typerForBehandlingType = henleggArsakerPerBehandlingType[behandlingType];

  return (
    typerForBehandlingType
      ?.filter(type => ytelseType !== 'ES' || type !== 'HENLAGT_SØKNAD_MANGLER')
      .flatMap(type => {
        const typer = behandlingResultatTyper.find(brt => brt.kode === type);
        return typer ? [typer] : [];
      }) || []
  );
};
