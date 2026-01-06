import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Button, Dialog, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfForm, RhfSelect } from '@navikt/ft-form-hooks';
import { dateAfterOrEqualToToday, dateBeforeToday, hasValidDate, required } from '@navikt/ft-form-validators';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type {
  KodeverkMedNavn,
  KodeverkMedNavnTilbakekreving,
  VenteArsakType,
  VenteÅrsakTypeFpTilbake,
} from '@navikt/fp-types';

export type FormValues = {
  frist?: string;
  ventearsak?: VenteArsakType | VenteÅrsakTypeFpTilbake;
};

interface Props {
  submitCallback: (formData: FormValues) => void;
  cancelEvent: () => void;
  showModal: boolean;
  ventearsaker: KodeverkMedNavn<'Venteårsak'>[] | KodeverkMedNavnTilbakekreving<'Venteårsak'>[];
  erTilbakekreving: boolean;
  visBrevErBestilt?: boolean;
  hasManualPaVent: boolean;
  frist?: string;
  ventearsak?: VenteArsakType | VenteÅrsakTypeFpTilbake;
  defaultVenteårsak?: VenteArsakType;
}

export const SettPaVentModal = ({
  submitCallback,
  cancelEvent,
  showModal,
  ventearsaker,
  erTilbakekreving,
  frist,
  ventearsak,
  visBrevErBestilt = false,
  hasManualPaVent,
  defaultVenteårsak,
}: Props) => {
  const formMethods = useForm<FormValues>({
    defaultValues: buildInitialValues(hasManualPaVent, frist, ventearsak ?? defaultVenteårsak),
  });

  const fristFraFelt = formMethods.watch('frist');
  const ventearsakFraFelt = formMethods.watch('ventearsak');

  const venteArsakHasChanged = harEndretVenteårsak(ventearsak, ventearsakFraFelt);
  const fristHasChanged = harEndretFrist(frist, fristFraFelt);

  const showAvbryt = !(frist === fristFraFelt && !venteArsakHasChanged);
  const showFristenTekst = skalViseFristenTekst(erTilbakekreving, frist, fristFraFelt, ventearsakFraFelt);

  return (
    <RhfForm formMethods={formMethods} onSubmit={submitCallback}>
      <Dialog open={showModal} onOpenChange={cancelEvent} size="small">
        <Dialog.Popup>
          <Dialog.Header>
            <Dialog.Title>
              <FormattedMessage id={ventearsak ? 'SettPaVentModal.ErSettPaVent' : 'SettPaVentModal.SettesPaVent'} />
            </Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>
            <VStack gap="space-16">
              {(hasManualPaVent || fristFraFelt) && (
                <RhfDatepicker
                  name="frist"
                  control={formMethods.control}
                  label={<FormattedMessage id="SettPaVentModal.Frist" />}
                  validate={[required, hasValidDate, dateAfterOrEqualToToday]}
                />
              )}
              <RhfSelect
                name="ventearsak"
                control={formMethods.control}
                label={<FormattedMessage id="SettPaVentModal.Arsak" />}
                validate={[required]}
                selectValues={ventearsaker
                  .filter(
                    va =>
                      !hasManualPaVent ||
                      (erTilbakekreving
                        ? inkluderVentearsak(va, ventearsakFraFelt)
                        : manuelleVenteArsaker.has(va.kode)),
                  )
                  .sort((v1, v2) => v1.navn.localeCompare(v2.navn))
                  .map(va => (
                    <option key={va.kode} value={va.kode}>
                      {va.navn}
                    </option>
                  ))}
                readOnly={!hasManualPaVent}
              />
              {visBrevErBestilt && (
                <BodyShort size="small">
                  <FormattedMessage id="SettPaVentModal.BrevBlirBestilt" />
                </BodyShort>
              )}
              {hasManualPaVent && (
                <BodyShort size="small">
                  <FormattedMessage id="SettPaVentModal.EndreFrist" />
                </BodyShort>
              )}
              {!hasManualPaVent && showFristenTekst && (
                <>
                  <BodyShort size="small">
                    <FormattedMessage id="SettPaVentModal.UtløptFrist" />
                  </BodyShort>
                  <BodyShort size="small">
                    <FormattedMessage id="SettPaVentModal.HenleggeSaken" />
                  </BodyShort>
                </>
              )}
            </VStack>
          </Dialog.Body>
          <Dialog.Footer>
            <Button
              size="small"
              variant="primary"
              style={{ paddingInline: '36px' }}
              onClick={showAvbryt ? undefined : cancelEvent}
              disabled={!venteArsakHasChanged && !fristHasChanged}
            >
              <FormattedMessage id="SettPaVentModal.Ok" />
            </Button>
            {(!hasManualPaVent || showAvbryt || !visBrevErBestilt) && (
              <Button size="small" variant="secondary" onClick={cancelEvent} type="button">
                <FormattedMessage
                  id={venteArsakHasChanged || fristHasChanged ? 'SettPaVentModal.Avbryt' : 'SettPaVentModal.Lukk'}
                />
              </Button>
            )}
          </Dialog.Footer>
        </Dialog.Popup>
      </Dialog>
    </RhfForm>
  );
};

const initFrist = (): string => {
  const date = dayjs().toDate();
  date.setDate(date.getDate() + 28);
  return dayjs(date).format(ISO_DATE_FORMAT);
};

const buildInitialValues = (
  hasManualPaVent: boolean,
  frist?: string,
  ventearsak?: VenteArsakType | VenteÅrsakTypeFpTilbake,
): FormValues => ({
  ventearsak: ventearsak ?? undefined,
  frist: frist || hasManualPaVent === false ? (frist ?? undefined) : initFrist(),
});

const manuelleVenteArsaker = new Set<VenteArsakType | VenteÅrsakTypeFpTilbake>([
  'AVV_DOK',
  'AVV_FODSEL',
  'VENT_PÅ_BRUKERTILBAKEMELDING',
  'UTV_FRIST',
  'FOR_TIDLIG_SOKNAD',
  'VENT_OPDT_INNTEKTSMELDING',
  'VENT_UTLAND_TRYGD',
  'UTV_TIL_FRIST',
  'ENDRE_TILKJENT_YTELSE',
  'VENT_PÅ_MULIG_MOTREGNING',
]);

const automatiskeVentearsakerForTilbakekreving: VenteÅrsakTypeFpTilbake[] = [
  'VENT_PÅ_BRUKERTILBAKEMELDING',
  'VENT_PÅ_TILBAKEKREVINGSGRUNNLAG',
];

const inkluderVentearsak = (
  ventearsak: KodeverkMedNavn<'Venteårsak'> | KodeverkMedNavnTilbakekreving<'Venteårsak'>,
  valgtVentearsak?: VenteArsakType | VenteÅrsakTypeFpTilbake,
): boolean =>
  automatiskeVentearsakerForTilbakekreving.some(kode => kode === ventearsak.kode)
    ? ventearsak.kode === valgtVentearsak
    : true;

const skalViseFristenTekst = (
  erTilbakekreving: boolean,
  originalFrist?: string,
  frist?: string,
  ventearsak?: VenteArsakType | VenteÅrsakTypeFpTilbake,
): boolean => {
  const erFristenUtløpt =
    erTilbakekreving &&
    ((!!frist && dateBeforeToday(frist) === null) || (!!originalFrist && dateBeforeToday(originalFrist) === null));
  const erVenterPaKravgrunnlag = ventearsak === 'VENT_PÅ_TILBAKEKREVINGSGRUNNLAG';
  return erTilbakekreving && erFristenUtløpt && erVenterPaKravgrunnlag;
};

const harEndretVenteårsak = (
  originalVentearsak?: VenteArsakType | VenteÅrsakTypeFpTilbake,
  ventearsak?: VenteArsakType | VenteÅrsakTypeFpTilbake,
) => !(originalVentearsak === ventearsak || (!ventearsak && !originalVentearsak));

const harEndretFrist = (originalFrist?: string, frist?: string) =>
  !(originalFrist === frist || (!frist && !originalFrist));
