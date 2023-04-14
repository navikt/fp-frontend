import React, { FunctionComponent } from 'react';
import dayjs from 'dayjs';
import { useIntl, FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Label } from '@navikt/ds-react';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { KodeverkMedNavn } from '@navikt/ft-types';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FagsakYtelseType, KodeverkType } from '@navikt/ft-kodeverk';
import { Form, RadioGroupPanel, SelectField } from '@navikt/ft-form-hooks';

import StoreValuesInLocalStorage from '../../../data/StoreValuesInLocalStorage';
import useLosKodeverk from '../../../data/useLosKodeverk';
import OppgaveForDato from '../../../typer/oppgaverForDatoTsType';
import TilBehandlingGraf, { OppgaveForDatoGraf } from './TilBehandlingGraf';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

export const ALLE_YTELSETYPER_VALGT = 'ALLE';
export const UKE_2 = '2';

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

const erDatoInnenforPeriode = (oppgaveForAvdeling: OppgaveForDato, ukevalg: string): boolean => {
  if (ukevalg === uker[1].kode) {
    return true;
  }
  const toUkerSiden = dayjs().subtract(2, 'w');
  return dayjs(oppgaveForAvdeling.opprettetDato).isSameOrAfter(toUkerSiden);
};

const finnFagsakYtelseTypeNavn = (fagsakYtelseTyper: KodeverkMedNavn[], valgtFagsakYtelseType: string): string => {
  const type = fagsakYtelseTyper.find(fyt => fyt.kode === valgtFagsakYtelseType);
  return type ? type.navn : '';
};

const slaSammenLikeBehandlingstyperOgDatoer = (oppgaverForAvdeling: OppgaveForDato[]): OppgaveForDatoGraf[] => {
  const sammenslatte: OppgaveForDatoGraf[] = [];

  oppgaverForAvdeling.forEach(o => {
    const index = sammenslatte.findIndex(
      s => s.behandlingType === o.behandlingType && s.opprettetDato === o.opprettetDato,
    );
    if (index === -1) {
      sammenslatte.push(o);
    } else {
      sammenslatte[index] = {
        behandlingType: sammenslatte[index].behandlingType,
        opprettetDato: sammenslatte[index].opprettetDato,
        antall: sammenslatte[index].antall + o.antall,
      };
    }
  });

  return sammenslatte;
};

interface OwnProps {
  height: number;
  oppgaverPerDato: OppgaveForDato[];
  getValueFromLocalStorage: (key: string) => string | undefined;
}

type FormValues = {
  ukevalg: string;
  ytelseType: string;
};

const formName = 'tilBehandlingForm';
const formDefaultValues = { ytelseType: ALLE_YTELSETYPER_VALGT, ukevalg: UKE_2 };

/**
 * TilBehandlingPanel.
 */
const TilBehandlingPanel: FunctionComponent<OwnProps> = ({ height, oppgaverPerDato, getValueFromLocalStorage }) => {
  const intl = useIntl();
  const behandlingTyper = useLosKodeverk(KodeverkType.BEHANDLING_TYPE);
  const fagsakYtelseTyper = useLosKodeverk(KodeverkType.FAGSAK_YTELSE);
  const stringFromStorage = getValueFromLocalStorage(formName);
  const lagredeVerdier = stringFromStorage ? JSON.parse(stringFromStorage) : undefined;

  const formMethods = useForm<FormValues>({
    defaultValues: lagredeVerdier || formDefaultValues,
  });

  const values = formMethods.watch();

  return (
    <Form<FormValues> formMethods={formMethods}>
      <StoreValuesInLocalStorage stateKey={formName} values={values} />
      <Label size="small">
        <FormattedMessage id="TilBehandlingPanel.TilBehandling" />
      </Label>
      <VerticalSpacer eightPx />
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            <SelectField
              name="ukevalg"
              label=""
              selectValues={uker.map(u => (
                <option key={u.kode} value={u.kode}>
                  {intl.formatMessage({ id: u.tekstKode })}
                </option>
              ))}
            />
          </FlexColumn>
          <FlexColumn>
            <RadioGroupPanel
              name="ytelseType"
              isHorizontal
              radios={[
                {
                  value: FagsakYtelseType.FORELDREPENGER,
                  label: finnFagsakYtelseTypeNavn(fagsakYtelseTyper, FagsakYtelseType.FORELDREPENGER),
                },
                {
                  value: FagsakYtelseType.ENGANGSSTONAD,
                  label: finnFagsakYtelseTypeNavn(fagsakYtelseTyper, FagsakYtelseType.ENGANGSSTONAD),
                },
                {
                  value: FagsakYtelseType.SVANGERSKAPSPENGER,
                  label: finnFagsakYtelseTypeNavn(fagsakYtelseTyper, FagsakYtelseType.SVANGERSKAPSPENGER),
                },
                {
                  value: ALLE_YTELSETYPER_VALGT,
                  label: <FormattedMessage id="TilBehandlingPanel.Alle" />,
                },
              ]}
            />
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
      <VerticalSpacer sixteenPx />
      <TilBehandlingGraf
        height={height}
        isToUkerValgt={values.ukevalg === UKE_2}
        behandlingTyper={behandlingTyper}
        oppgaverPerDato={
          oppgaverPerDato
            ? slaSammenLikeBehandlingstyperOgDatoer(
                oppgaverPerDato
                  .filter(ofa =>
                    values.ytelseType === ALLE_YTELSETYPER_VALGT ? true : values.ytelseType === ofa.fagsakYtelseType,
                  )
                  .filter(ofa => erDatoInnenforPeriode(ofa, values.ukevalg)),
              )
            : []
        }
      />
    </Form>
  );
};

export default TilBehandlingPanel;
