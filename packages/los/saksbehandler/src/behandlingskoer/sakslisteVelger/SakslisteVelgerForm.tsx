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
import { useMutation } from '@tanstack/react-query';
import dayjs from 'dayjs';

import type { LosKodeverkMedNavn } from '@navikt/fp-types';

import { getSakslisteSaksbehandlere } from '../../data/fplosSaksbehandlerApi';
import { useLosKodeverk } from '../../data/useLosKodeverk';
import type { Saksliste } from '../../typer/sakslisteTsType';

import styles from './sakslisteVelgerForm.module.css';

const getDefaultSaksliste = (
  sorterteSakslister: Saksliste[],
  getValueFromLocalStorage: (key: string) => string | undefined,
  removeValueFromLocalStorage: (key: string) => void,
): number | undefined => {
  const lagretSakslisteId = getValueFromLocalStorage('sakslisteId');
  if (lagretSakslisteId) {
    if (sorterteSakslister.some(s => `${s.sakslisteId}` === lagretSakslisteId)) {
      return parseInt(lagretSakslisteId, 10);
    }
    removeValueFromLocalStorage('sakslisteId');
  }

  return sorterteSakslister.at(0)?.sakslisteId;
};

const getFormDefaultValues = (
  sorterteSakslister: Saksliste[],
  getValueFromLocalStorage: (key: string) => string | undefined,
  removeValueFromLocalStorage: (key: string) => void,
): { sakslisteId: string | undefined } => {
  if (sorterteSakslister.length === 0) {
    return {
      sakslisteId: undefined,
    };
  }
  const defaultSaksliste = getDefaultSaksliste(
    sorterteSakslister,
    getValueFromLocalStorage,
    removeValueFromLocalStorage,
  );
  return {
    sakslisteId: defaultSaksliste ? `${defaultSaksliste}` : undefined,
  };
};

const AndreKriterier = ({ saksliste }: { saksliste?: Saksliste }): ReactNode => {
  const intl = useIntl();
  const andreKriterierTyper = useLosKodeverk('AndreKriterierType');

  if (saksliste && saksliste.andreKriterier.length > 0) {
    return (
      <VStack gap="space-4">
        {saksliste.andreKriterier.map(ak => (
          <BodyShort key={ak.andreKriterierType}>
            {ak.inkluder
              ? andreKriterierTyper.find(akt => akt.kode === ak.andreKriterierType)?.navn
              : intl.formatMessage(
                  { id: 'SakslisteVelgerForm.Uten' },
                  {
                    kriterie: andreKriterierTyper.find(akt => akt.kode === ak.andreKriterierType)?.navn,
                  },
                )}
          </BodyShort>
        ))}
      </VStack>
    );
  }
  return (
    <BodyShort>
      <FormattedMessage id="SakslisteVelgerForm.Alle" />
    </BodyShort>
  );
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
  fra?: number,
  til?: number,
) => {
  if (!fra && !til) {
    return køSorteringTyper.find(kst => kst.kode === sorteringType)?.navn ?? '';
  }
  const values = {
    navn: køSorteringTyper.find(kst => kst.kode === sorteringType)?.navn ?? '',
    fomDato: fra ? dayjs().add(fra, 'days').format(DDMMYYYY_DATE_FORMAT) : undefined,
    tomDato: til ? dayjs().add(til, 'days').format(DDMMYYYY_DATE_FORMAT) : undefined,
    br: <br />,
  };
  return getNavn(values, intl);
};

const getSorteringsnavn = (
  intl: IntlShape,
  køSorteringTyper: LosKodeverkMedNavn<'KøSortering'>[],
  saksliste?: Saksliste,
) => {
  if (!saksliste?.sortering) {
    return '';
  }

  const { erDynamiskPeriode, sorteringType, fra, til, fomDato, tomDato } = saksliste.sortering;

  return erDynamiskPeriode
    ? getSorteringsnavnForDynamiskPeriode(intl, køSorteringTyper, sorteringType, fra, til)
    : getSorteringsnavnForPeriode(intl, køSorteringTyper, sorteringType, fomDato, tomDato);
};

type FormValues = {
  sakslisteId: string | undefined;
};

interface Props {
  sakslister: Saksliste[];
  setValgtSakslisteId: (sakslisteId: number) => void;
  fetchAntallOppgaver: (sakslisteId: number) => void;
  getValueFromLocalStorage: (key: string) => string | undefined;
  setValueInLocalStorage: (key: string, value: string) => void;
  removeValueFromLocalStorage: (key: string) => void;
}

export const SakslisteVelgerForm = ({
  sakslister,
  setValgtSakslisteId,
  fetchAntallOppgaver,
  getValueFromLocalStorage,
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

  const { mutate: fetchSaksbehandlere, data: saksbehandlere } = useMutation({
    mutationFn: getSakslisteSaksbehandlere,
  });

  const formMethods = useForm<FormValues>({
    defaultValues: getFormDefaultValues(sorterteSakslister, getValueFromLocalStorage, removeValueFromLocalStorage),
  });

  const sakslisteId = formMethods.watch('sakslisteId');

  // (TOR) Prøv å refaktorer dette
  useEffect(() => {
    if (sakslisteId) {
      setValueInLocalStorage('sakslisteId', sakslisteId);
      const id = parseInt(sakslisteId, 10);
      setValgtSakslisteId(id);
      fetchSaksbehandlere(id);
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

  const sorterteSaksbehandlere = saksbehandlere?.toSorted((s1, s2) => s1.navn.localeCompare(s2.navn));

  return (
    <RhfForm formMethods={formMethods} className={styles['container']}>
      <VStack gap="space-24">
        <HStack justify="space-between" align="end">
          <RhfSelect
            name="sakslisteId"
            control={formMethods.control}
            label={intl.formatMessage({ id: 'SakslisteVelgerForm.Saksliste' })}
            selectValues={sorterteSakslister.map(saksliste => (
              <option key={saksliste.sakslisteId} value={`${saksliste.sakslisteId}`}>
                {saksliste.navn}
              </option>
            ))}
            className={styles['koInput']}
          />
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
        <div className={visKøFiltere ? styles['active'] : styles['hidden']}>
          {visKøFiltere && (
            <VStack gap="space-24">
              {valgtSaksliste && (
                <HStack gap="space-20" align="stretch">
                  <Box.New background="neutral-moderateA" padding="4" borderRadius="xlarge" width="200px">
                    <VStack gap="space-16">
                      <HStack justify="space-between">
                        <Label size="small">
                          <FormattedMessage id="SakslisteVelgerForm.Stonadstype" />
                        </Label>
                        <SackKronerIcon aria-hidden className={styles['grayout']} />
                      </HStack>
                      {valgtSaksliste.fagsakYtelseTyper.length > 0 ? (
                        <VStack gap="space-4">
                          {valgtSaksliste.fagsakYtelseTyper.map(type => (
                            <BodyShort key={type}>{fagsakYtelseTyper.find(fyt => fyt.kode === type)?.navn}</BodyShort>
                          ))}
                        </VStack>
                      ) : (
                        <BodyShort>
                          <FormattedMessage id="SakslisteVelgerForm.Alle" />
                        </BodyShort>
                      )}
                    </VStack>
                  </Box.New>
                  <Box.New background="neutral-moderateA" padding="4" borderRadius="xlarge" width="200px">
                    <VStack gap="space-16">
                      <HStack justify="space-between">
                        <Label size="small">
                          <FormattedMessage id="SakslisteVelgerForm.Behandlingstype" />
                        </Label>
                        <DocPencilIcon aria-hidden className={styles['grayout']} />
                      </HStack>
                      {valgtSaksliste.behandlingTyper.length > 0 ? (
                        <VStack gap="space-4">
                          {valgtSaksliste.behandlingTyper.map(type => (
                            <BodyShort key={type}>{behandlingsTyper.find(bt => bt.kode === type)?.navn}</BodyShort>
                          ))}
                        </VStack>
                      ) : (
                        <FormattedMessage id="SakslisteVelgerForm.Alle" />
                      )}
                    </VStack>
                  </Box.New>
                  <Box.New background="neutral-moderateA" padding="4" borderRadius="xlarge" width="200px">
                    <VStack gap="space-16">
                      <HStack justify="space-between">
                        <Label size="small">
                          <FormattedMessage id="SakslisteVelgerForm.AndreKriterier" />
                        </Label>
                        <FunnelIcon aria-hidden className={styles['grayout']} />
                      </HStack>
                      <AndreKriterier saksliste={valgtSaksliste} />
                    </VStack>
                  </Box.New>
                  <Box.New background="neutral-moderateA" padding="4" borderRadius="xlarge" width="200px">
                    <VStack gap="space-16">
                      <HStack justify="space-between">
                        <Label size="small">
                          <FormattedMessage id="SakslisteVelgerForm.Sortering" />
                        </Label>
                        <ArrowsUpDownIcon aria-hidden className={styles['grayout']} />
                      </HStack>
                      <BodyShort>{getSorteringsnavn(intl, køSorteringTyper, valgtSaksliste)}</BodyShort>
                    </VStack>
                  </Box.New>
                </HStack>
              )}
              <VStack gap="space-8">
                <Label size="small">
                  <FormattedMessage id="SakslisteVelgerForm.AndreSomJobber" />
                </Label>
                <HStack gap="space-8" className={styles['paddingBottom']}>
                  {sorterteSaksbehandlere
                    ?.slice(
                      0,
                      sorterteSaksbehandlere.length > 3 && !visAlleSaksbehandlere ? 3 : sorterteSaksbehandlere.length,
                    )
                    .map(s => (
                      <Box.New
                        background="neutral-moderateA"
                        padding="2"
                        borderRadius="full"
                        key={s.brukerIdent.brukerIdent}
                      >
                        <HStack gap="space-8" align="center">
                          <PersonHeadsetIcon aria-hidden className={styles['grayout']} />
                          <BodyShort>{s.navn}</BodyShort>
                        </HStack>
                      </Box.New>
                    ))}
                  {sorterteSaksbehandlere && sorterteSaksbehandlere.length > 3 && (
                    <HStack gap="space-8">
                      {!visAlleSaksbehandlere && (
                        <Box.New background="neutral-moderateA" padding="2" borderRadius="full">
                          <HStack gap="space-8" align="center">
                            <PlusIcon aria-hidden className={styles['grayout']} />
                            <BodyShort>
                              <FormattedMessage
                                id="SakslisteVelgerForm.Andre"
                                values={{ antallAndre: sorterteSaksbehandlere.length - 3 }}
                              />
                            </BodyShort>
                          </HStack>
                        </Box.New>
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
          )}
        </div>
      </VStack>
    </RhfForm>
  );
};
