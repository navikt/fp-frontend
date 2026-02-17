import { type JSX, type ReactNode, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import {
  ArrowsUpDownIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  DocPencilIcon,
  FunnelIcon,
  PersonHeadsetIcon,
  PlusIcon,
  SackKronerIcon,
} from '@navikt/aksel-icons';
import { BodyShort, Box, Button, Heading, HStack, Label, VStack } from '@navikt/ds-react';
import { RhfForm, RhfSelect } from '@navikt/ft-form-hooks';
import { dateFormat, DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type { LosKodeverkMedNavn, SakslisteAvdeling } from '@navikt/fp-types';

import { getValueFromLocalStorage } from '../../data/localStorageHelper';
import { useLosKodeverk } from '../../data/useLosKodeverk';

import styles from './sakslisteVelgerForm.module.css';

const getDefaultSaksliste = (
  sorterteSakslister: SakslisteAvdeling[],
  removeValueFromLocalStorage: (key: string) => void,
): number | undefined => {
  const lagretSakslisteId = getValueFromLocalStorage('sakslisteId');
  if (lagretSakslisteId) {
    if (sorterteSakslister.some(s => `${s.sakslisteId}` === lagretSakslisteId)) {
      return Number.parseInt(lagretSakslisteId, 10);
    }
    removeValueFromLocalStorage('sakslisteId');
  }

  return sorterteSakslister.at(0)?.sakslisteId;
};

const getFormDefaultValues = (
  sorterteSakslister: SakslisteAvdeling[],
  removeValueFromLocalStorage: (key: string) => void,
): { sakslisteId: string | undefined } => {
  if (sorterteSakslister.length === 0) {
    return {
      sakslisteId: undefined,
    };
  }
  const defaultSaksliste = getDefaultSaksliste(sorterteSakslister, removeValueFromLocalStorage);
  return {
    sakslisteId: defaultSaksliste ? `${defaultSaksliste}` : undefined,
  };
};

const AndreKriterier = ({ saksliste }: { saksliste?: SakslisteAvdeling }): ReactNode => {
  const intl = useIntl();
  const andreKriterierTyper = useLosKodeverk('AndreKriterierType');

  if (saksliste && (saksliste.andreKriterie.inkluder.length > 0 || saksliste.andreKriterie.ekskluder.length > 0)) {
    return (
      <>
        {saksliste.andreKriterie.inkluder.map(ak => (
          <BodyShort key={ak}>{andreKriterierTyper.find(akt => akt.kode === ak)?.navn}</BodyShort>
        ))}
        {saksliste.andreKriterie.ekskluder.map(ak => (
          <BodyShort key={ak}>
            {intl.formatMessage(
              { id: 'SakslisteVelgerForm.Uten' },
              { kriterie: andreKriterierTyper.find(akt => akt.kode === ak)?.navn },
            )}
          </BodyShort>
        ))}
      </>
    );
  }
  return <FormattedMessage tagName={BodyShort} id="SakslisteVelgerForm.Alle" />;
};

type TextValues = {
  navn: string;
  fomDato?: string;
  tomDato?: string;
  br: JSX.Element;
};

const getNavn = (values: TextValues, intl: IntlShape) => {
  if (!values.fomDato) {
    return intl.formatMessage({ id: 'SakslisteVelgerForm.SorteringsinfoTom' }, values);
  }
  if (!values.tomDato) {
    return intl.formatMessage({ id: 'SakslisteVelgerForm.SorteringsinfoFom' }, values);
  }
  return intl.formatMessage({ id: 'SakslisteVelgerForm.Sorteringsinfo' }, values);
};

const getSorteringsnavnForPeriode = (
  intl: IntlShape,
  køSorteringTyper: LosKodeverkMedNavn<'KøSortering'>[],
  sorteringType: string,
  fomDato?: string,
  tomDato?: string,
) => {
  if (!fomDato && !tomDato) {
    return køSorteringTyper.find(kst => kst.kode === sorteringType)?.navn ?? '';
  }

  const values = {
    navn: køSorteringTyper.find(kst => kst.kode === sorteringType)?.navn ?? '',
    fomDato: fomDato ? dateFormat(fomDato) : undefined,
    tomDato: tomDato ? dateFormat(tomDato) : undefined,
    br: <br />,
  };
  return getNavn(values, intl);
};

const getSorteringsnavnForDynamiskPeriode = (
  intl: IntlShape,
  køSorteringTyper: LosKodeverkMedNavn<'KøSortering'>[],
  sorteringType: string,
  periodefilter: 'RELATIV_PERIODE_DAGER' | 'RELATIV_PERIODE_MÅNEDER',
  fra?: number,
  til?: number,
) => {
  if (!fra && !til) {
    return køSorteringTyper.find(kst => kst.kode === sorteringType)?.navn ?? '';
  }
  const values = {
    navn: køSorteringTyper.find(kst => kst.kode === sorteringType)?.navn ?? '',
    fomDato: datoForRelativPeriode(periodefilter, true, fra),
    tomDato: datoForRelativPeriode(periodefilter, false, til),
    br: <br />,
  };
  return getNavn(values, intl);
};

const datoForRelativPeriode = (
  periodefilter: 'RELATIV_PERIODE_DAGER' | 'RELATIV_PERIODE_MÅNEDER',
  erFom: boolean,
  fraTilAntall?: number,
) => {
  if (fraTilAntall === undefined) {
    return undefined;
  }
  return periodefilter === 'RELATIV_PERIODE_DAGER' ? finnDato(fraTilAntall) : finnDatoMåned(fraTilAntall, erFom);
};

const finnDato = (antallDager: number) => dayjs().add(antallDager, 'd').format(DDMMYYYY_DATE_FORMAT);

const finnDatoMåned = (antallMåneder: number, erStartenAvMåned: boolean) => {
  const baseDato = erStartenAvMåned ? dayjs().startOf('month') : dayjs().endOf('month');
  return baseDato.add(antallMåneder, 'month').format(DDMMYYYY_DATE_FORMAT);
};

const getSorteringsnavn = (
  intl: IntlShape,
  køSorteringTyper: LosKodeverkMedNavn<'KøSortering'>[],
  saksliste?: SakslisteAvdeling,
) => {
  if (!saksliste?.sortering) {
    return '';
  }

  const { periodefilter, sorteringType, fra, til, fomDato, tomDato } = saksliste.sortering;

  return periodefilter === 'FAST_PERIODE'
    ? getSorteringsnavnForPeriode(intl, køSorteringTyper, sorteringType, fomDato, tomDato)
    : getSorteringsnavnForDynamiskPeriode(intl, køSorteringTyper, sorteringType, periodefilter, fra, til);
};

type FormValues = {
  sakslisteId: string | undefined;
};

interface Props {
  sakslister: SakslisteAvdeling[];
  setValgtSakslisteId: (sakslisteId: number) => void;
  fetchAntallOppgaver: (sakslisteId: number) => void;
  setValueInLocalStorage: (key: string, value: string) => void;
  removeValueFromLocalStorage: (key: string) => void;
}

export const SakslisteVelgerForm = ({
  sakslister,
  setValgtSakslisteId,
  fetchAntallOppgaver,
  setValueInLocalStorage,
  removeValueFromLocalStorage,
}: Props) => {
  const intl = useIntl();

  const [visKøFiltere, setVisKøFiltere] = useState(false);

  const [visAlleSaksbehandlere, setVisAlleSaksbehandlere] = useState(false);

  const behandlingsTyper = useLosKodeverk('BehandlingType');
  const fagsakYtelseTyper = useLosKodeverk('FagsakYtelseType');
  const køSorteringTyper = useLosKodeverk('KøSortering');

  const sorterteSakslister = sakslister.toSorted((saksliste1, saksliste2) =>
    saksliste1.navn.localeCompare(saksliste2.navn),
  );

  const formMethods = useForm<FormValues>({
    defaultValues: getFormDefaultValues(sorterteSakslister, removeValueFromLocalStorage),
  });

  const sakslisteId = formMethods.watch('sakslisteId');

  // (TOR) Prøv å refaktorer dette
  useEffect(() => {
    if (sakslisteId) {
      setValueInLocalStorage('sakslisteId', sakslisteId);
      const id = Number.parseInt(sakslisteId, 10);
      setValgtSakslisteId(id);
      fetchAntallOppgaver(id);
    }
  }, [sakslisteId]);

  const valgtSaksliste = sorterteSakslister.find(s => sakslisteId === `${s.sakslisteId}`);

  if (sakslister.length === 0) {
    return (
      <VStack gap="space-8" className={styles['container']}>
        <Heading size="xsmall" level="2">
          <FormattedMessage id="SakslisteVelgerForm.Saksliste" />
        </Heading>
        <BodyShort>
          <FormattedMessage id="SakslisteVelgerForm.IkkeOppfort" tagName="i" />
        </BodyShort>
      </VStack>
    );
  }

  const saksbehandlere = valgtSaksliste?.saksbehandlere;
  const sorterteSaksbehandlere = saksbehandlere?.toSorted((s1, s2) => s1.navn.localeCompare(s2.navn));

  return (
    <VStack gap="space-24" className={styles['container']}>
      <HStack justify="space-between" align="end">
        <RhfForm formMethods={formMethods}>
          <RhfSelect
            name="sakslisteId"
            control={formMethods.control}
            label={intl.formatMessage({ id: 'SakslisteVelgerForm.Saksliste' })}
            selectValues={sorterteSakslister.map(saksliste => (
              <option key={saksliste.sakslisteId} value={`${saksliste.sakslisteId}`}>
                {saksliste.navn}
              </option>
            ))}
            className={styles['sakslisteSelect']}
          />
        </RhfForm>
        <Button
          variant="tertiary"
          type="button"
          onClick={() => setVisKøFiltere(!visKøFiltere)}
          icon={visKøFiltere ? <ChevronUpIcon aria-hidden /> : <ChevronDownIcon aria-hidden />}
          iconPosition="right"
        >
          <FormattedMessage id="SakslisteVelgerForm.FilterForKoen" />
        </Button>
      </HStack>

      {visKøFiltere && (
        <Box maxHeight="500px" className={styles['køFilterBoks']}>
          <VStack gap="space-24">
            {valgtSaksliste && (
              <HStack gap="space-20">
                <FilterBox
                  label={<FormattedMessage id="SakslisteVelgerForm.Stonadstype" />}
                  icon={<SackKronerIcon aria-hidden />}
                  value={
                    <>
                      {valgtSaksliste.fagsakYtelseTyper.map(type => (
                        <BodyShort key={type}>{fagsakYtelseTyper.find(fyt => fyt.kode === type)?.navn}</BodyShort>
                      ))}

                      {valgtSaksliste.fagsakYtelseTyper.length === 0 && (
                        <FormattedMessage tagName={BodyShort} id="SakslisteVelgerForm.Alle" />
                      )}
                    </>
                  }
                />
                <FilterBox
                  label={<FormattedMessage id="SakslisteVelgerForm.Behandlingstype" />}
                  icon={<DocPencilIcon aria-hidden />}
                  value={
                    <>
                      {valgtSaksliste.behandlingTyper.map(type => (
                        <BodyShort key={type}>{behandlingsTyper.find(bt => bt.kode === type)?.navn}</BodyShort>
                      ))}
                      {valgtSaksliste.behandlingTyper.length === 0 && (
                        <FormattedMessage tagName={BodyShort} id="SakslisteVelgerForm.Alle" />
                      )}
                    </>
                  }
                />
                <FilterBox
                  label={<FormattedMessage id="SakslisteVelgerForm.AndreKriterier" />}
                  icon={<FunnelIcon aria-hidden />}
                  value={<AndreKriterier saksliste={valgtSaksliste} />}
                />
                <FilterBox
                  label={<FormattedMessage id="SakslisteVelgerForm.Sortering" />}
                  icon={<ArrowsUpDownIcon aria-hidden />}
                  value={<BodyShort>{getSorteringsnavn(intl, køSorteringTyper, valgtSaksliste)}</BodyShort>}
                />
              </HStack>
            )}

            <VStack gap="space-8">
              <Label size="small">
                <FormattedMessage id="SakslisteVelgerForm.AndreSomJobber" />
              </Label>
              <HStack gap="space-8">
                {sorterteSaksbehandlere
                  ?.slice(
                    0,
                    sorterteSaksbehandlere.length > 3 && !visAlleSaksbehandlere ? 3 : sorterteSaksbehandlere.length,
                  )
                  .map(s => (
                    <SaksbehandlerBadge
                      key={s.brukerIdent}
                      icon={<PersonHeadsetIcon aria-hidden />}
                      label={s.navn}
                    />
                  ))}
                {sorterteSaksbehandlere && sorterteSaksbehandlere.length > 3 && (
                  <HStack gap="space-8">
                    {!visAlleSaksbehandlere && (
                      <SaksbehandlerBadge
                        icon={<PlusIcon aria-hidden />}
                        label={
                          <FormattedMessage
                            id="SakslisteVelgerForm.Andre"
                            values={{ antallAndre: sorterteSaksbehandlere.length - 3 }}
                          />
                        }
                      />
                    )}
                    <Button
                      variant="tertiary"
                      size="xsmall"
                      type="button"
                      onClick={() => setVisAlleSaksbehandlere(!visAlleSaksbehandlere)}
                    >
                      {visAlleSaksbehandlere ? (
                        <FormattedMessage id="SakslisteVelgerForm.VisFærre" />
                      ) : (
                        <FormattedMessage id="SakslisteVelgerForm.VisFlere" />
                      )}
                    </Button>
                  </HStack>
                )}
              </HStack>
            </VStack>
          </VStack>
        </Box>
      )}
    </VStack>
  );
};

interface FilterBoxProps {
  label: ReactNode;
  icon: ReactNode;
  value: ReactNode;
}

const FilterBox = ({ label, icon, value }: FilterBoxProps) => (
  <Box background="neutral-moderateA" padding="space-16" borderRadius="8" flexBasis="0%" flexGrow="1">
    <HStack justify="space-between">
      <Label size="small">{label}</Label>
      <div className={styles['grayIcon']}>{icon}</div>
    </HStack>
    {value}
  </Box>
);

interface SaksbehandlerBadgeProps {
  icon: ReactNode;
  label: ReactNode;
}

const SaksbehandlerBadge = ({ icon, label }: SaksbehandlerBadgeProps) => (
  <Box background="neutral-moderateA" paddingInline="space-12" paddingBlock="space-4" borderRadius="full">
    <HStack asChild gap="space-4" align="center">
      <BodyShort>
        <span className={styles['grayIcon']}>{icon}</span>
        {label}
      </BodyShort>
    </HStack>
  </Box>
);
