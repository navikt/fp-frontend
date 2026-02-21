import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { HStack, Label, Radio, VStack } from '@navikt/ds-react';
import { RhfForm, RhfRadioGroup, RhfSelect } from '@navikt/ft-form-hooks';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import { type LosKodeverkMedNavn, type OppgaverForAvdelingPerDato } from '@navikt/fp-types';

import { oppgaverPerDatoOptions } from '../../data/fplosAvdelingslederApi';
import { getParsedValueFromLocalStorage, useStoreValuesInLocalStorage } from '../../data/localStorageHelper';
import { useLosKodeverk } from '../../data/useLosKodeverk';
import { type OppgaveForDatoGraf, TilBehandlingGraf } from './TilBehandlingGraf';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

const ALLE_YTELSETYPER_VALGT = 'ALLE';
const UKE_2 = '2';

type FormValues = {
  ukevalg: string;
  ytelseType: string;
};

const formName = 'tilBehandlingForm';
const formDefaultValues = { ytelseType: ALLE_YTELSETYPER_VALGT, ukevalg: UKE_2 };

interface Props {
  height: number;
  valgtAvdelingEnhet: string;
}

export const TilBehandlingPanel = ({ height, valgtAvdelingEnhet }: Props) => {
  const intl = useIntl();

  const { data: oppgaverPerDato } = useQuery(oppgaverPerDatoOptions(valgtAvdelingEnhet));

  const behandlingTyper = useLosKodeverk('BehandlingType');
  const fagsakYtelseTyper = useLosKodeverk('FagsakYtelseType');

  const lagretFilter = getParsedValueFromLocalStorage<FormValues>(formName);

  const formMethods = useForm<FormValues>({
    defaultValues: lagretFilter ?? formDefaultValues,
  });

  const values = formMethods.watch();

  useStoreValuesInLocalStorage(formName, values);

  return (
    <RhfForm<FormValues> formMethods={formMethods}>
      <VStack gap="space-16">
        <Label size="small">
          <FormattedMessage id="TilBehandlingPanel.TilBehandling" />
        </Label>
        <HStack gap="space-16">
          <RhfSelect
            name="ukevalg"
            control={formMethods.control}
            label=""
            hideLabel
            selectValues={uker.map(u => (
              <option key={u.kode} value={u.kode}>
                {intl.formatMessage({ id: u.tekstKode })}
              </option>
            ))}
          />
          <RhfRadioGroup name="ytelseType" control={formMethods.control} legend="" hideLegend>
            <HStack gap="space-16">
              <Radio value="FP" size="small">
                {finnFagsakYtelseTypeNavn(fagsakYtelseTyper, 'FP')}
              </Radio>
              <Radio value="ES" size="small">
                {finnFagsakYtelseTypeNavn(fagsakYtelseTyper, 'ES')}
              </Radio>
              <Radio value="SVP" size="small">
                {finnFagsakYtelseTypeNavn(fagsakYtelseTyper, 'SVP')}
              </Radio>
              <Radio value={ALLE_YTELSETYPER_VALGT} size="small">
                <FormattedMessage id="Label.Alle" />
              </Radio>
            </HStack>
          </RhfRadioGroup>
        </HStack>
        <TilBehandlingGraf
          height={height}
          isToUkerValgt={values.ukevalg === UKE_2}
          behandlingTyper={behandlingTyper}
          oppgaverPerDato={slaSammenLikeBehandlingstyperOgDatoer(
            oppgaverPerDato
              .filter(ofa =>
                values.ytelseType === ALLE_YTELSETYPER_VALGT ? true : values.ytelseType === ofa.fagsakYtelseType,
              )
              .filter(ofa => erDatoInnenforPeriode(ofa, values.ukevalg)),
          )}
        />
      </VStack>
    </RhfForm>
  );
};

const uker = [
  {
    kode: UKE_2,
    tekstKode: 'TilBehandlingPanel.ToSisteUker',
  },
  {
    kode: '4',
    tekstKode: 'TilBehandlingPanel.FireSisteUker',
  },
];

const erDatoInnenforPeriode = (oppgaveForAvdeling: OppgaverForAvdelingPerDato, ukevalg: string): boolean => {
  if (ukevalg === uker[1]?.kode) {
    return true;
  }
  const toUkerSiden = dayjs().subtract(2, 'w');
  return dayjs(oppgaveForAvdeling.statistikkDato).isSameOrAfter(toUkerSiden);
};

const finnFagsakYtelseTypeNavn = (
  fagsakYtelseTyper: LosKodeverkMedNavn<'FagsakYtelseType'>[],
  valgtFagsakYtelseType: string,
): string => {
  const type = fagsakYtelseTyper.find(fyt => fyt.kode === valgtFagsakYtelseType);
  return type ? type.navn : '';
};

const slaSammenLikeBehandlingstyperOgDatoer = (
  oppgaverForAvdeling: OppgaverForAvdelingPerDato[],
): OppgaveForDatoGraf[] => {
  const sammenslatte: OppgaveForDatoGraf[] = [];

  for (const o of oppgaverForAvdeling) {
    const index = sammenslatte.findIndex(
      s => s.behandlingType === o.behandlingType && s.statistikkDato === o.statistikkDato,
    );
    if (index === -1) {
      sammenslatte.push(o);
    } else {
      sammenslatte[index] = {
        behandlingType: sammenslatte[index]!.behandlingType,
        statistikkDato: sammenslatte[index]!.statistikkDato,
        antall: sammenslatte[index]!.antall + o.antall,
      };
    }
  }

  return sammenslatte;
};
