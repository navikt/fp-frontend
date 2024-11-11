import React, { ReactNode, useState } from 'react';
import { PersonHeadsetIcon } from '@navikt/aksel-icons';
import { ArrowsUpDownIcon, DocPencilIcon } from '@navikt/aksel-icons';
import { FunnelIcon, PlusIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack, Label, VStack, Box, Heading, Button } from '@navikt/ds-react';
import { Form, SelectField } from '@navikt/ft-form-hooks';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { SackKronerIcon } from '@navikt/aksel-icons';
import { KodeverkType, getKodeverknavnFraKode } from '@navikt/fp-kodeverk';
import { AlleKodeverk } from '@navikt/fp-types';

import styles from './sakslisteVelgerForm.module.css';

import { RestApiGlobalStatePathsKeys, RestApiPathsKeys, restApiHooks } from '../../data/fplosSaksbehandlerRestApi';
import { Saksliste } from '../../typer/sakslisteTsType';

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

  return sorterteSakslister.length > 0 ? sorterteSakslister[0].sakslisteId : undefined;
};

const getInitialValues = (
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

const getAndreKriterier = (intl: IntlShape, alleKodeverk: AlleKodeverk, saksliste?: Saksliste): ReactNode => {
  if (saksliste && saksliste.andreKriterier.length > 0) {
    return (
      <VStack gap="1">
        {saksliste.andreKriterier.map(ak => (
          <BodyShort key={ak.andreKriterierType}>
            {ak.inkluder
              ? getKodeverknavnFraKode(alleKodeverk, 'AndreKriterierType', ak.andreKriterierType)
              : intl.formatMessage(
                  { id: 'SakslisteVelgerForm.Uten' },
                  {
                    kriterie: getKodeverknavnFraKode(alleKodeverk, 'AndreKriterierType', ak.andreKriterierType),
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

const getNavn = (values: TextValues, intl: IntlShape): string => {
  if (!values.fomDato) {
    return intl.formatMessage({ id: 'SakslisteVelgerForm.SorteringsinfoTom' }, values) as string;
  }
  if (!values.tomDato) {
    return intl.formatMessage({ id: 'SakslisteVelgerForm.SorteringsinfoFom' }, values) as string;
  }
  return intl.formatMessage({ id: 'SakslisteVelgerForm.Sorteringsinfo' }, values) as string;
};

const getSorteringsnavnForPeriode = (
  intl: IntlShape,
  alleKodeverk: AlleKodeverk,
  sorteringType: string,
  fomDato?: string,
  tomDato?: string,
): string => {
  if (!fomDato && !tomDato) {
    return getKodeverknavnFraKode(alleKodeverk, 'KøSortering', sorteringType);
  }

  const values = {
    navn: getKodeverknavnFraKode(alleKodeverk, 'KøSortering', sorteringType),
    fomDato: fomDato ? dayjs(fomDato).format(DDMMYYYY_DATE_FORMAT) : undefined,
    tomDato: tomDato ? dayjs(tomDato).format(DDMMYYYY_DATE_FORMAT) : undefined,
    br: <br />,
  };
  return getNavn(values, intl);
};

const getSorteringsnavnForDynamiskPeriode = (
  intl: IntlShape,
  alleKodeverk: AlleKodeverk,
  sorteringType: string,
  fra?: number,
  til?: number,
): string => {
  if (!fra && !til) {
    return getKodeverknavnFraKode(alleKodeverk, 'KøSortering', sorteringType);
  }
  const values = {
    navn: getKodeverknavnFraKode(alleKodeverk, 'KøSortering', sorteringType),
    fomDato: fra ? dayjs().add(fra, 'days').format(DDMMYYYY_DATE_FORMAT) : undefined,
    tomDato: til ? dayjs().add(til, 'days').format(DDMMYYYY_DATE_FORMAT) : undefined,
    br: <br />,
  };
  return getNavn(values, intl);
};

const getSorteringsnavn = (intl: IntlShape, alleKodeverk: AlleKodeverk, saksliste?: Saksliste): string => {
  if (!saksliste || !saksliste.sortering) {
    return '';
  }

  const { erDynamiskPeriode, sorteringType, fra, til, fomDato, tomDato } = saksliste.sortering;

  return erDynamiskPeriode
    ? getSorteringsnavnForDynamiskPeriode(intl, alleKodeverk, sorteringType, fra, til)
    : getSorteringsnavnForPeriode(intl, alleKodeverk, sorteringType, fomDato, tomDato);
};

type FormValues = {
  sakslisteId: string | undefined;
};

interface Props {
  sakslister: Saksliste[];
  setValgtSakslisteId: (sakslisteId: number) => void;
  fetchAntallOppgaver: (data: { sakslisteId: number }) => void;
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

  const [visAlleSaksbehandlere, setVisAlleSaksbehandlere] = useState(false);

  const sorterteSakslister = [...sakslister].sort((saksliste1, saksliste2) =>
    saksliste1.navn.localeCompare(saksliste2.navn),
  );

  const { data: saksbehandlere, startRequest: fetchSaksbehandlere } = restApiHooks.useRestApiRunner(
    RestApiPathsKeys.SAKSLISTE_SAKSBEHANDLERE,
  );
  const alleKodeverk = restApiHooks.useGlobalStateRestApiData(RestApiGlobalStatePathsKeys.KODEVERK_LOS);

  const formMethods = useForm<FormValues>({
    defaultValues: getInitialValues(sorterteSakslister, getValueFromLocalStorage, removeValueFromLocalStorage),
  });

  const sakslisteId = formMethods.watch('sakslisteId');

  useEffect(() => {
    if (sakslisteId) {
      setValueInLocalStorage('sakslisteId', sakslisteId);
      const id = parseInt(sakslisteId, 10);
      setValgtSakslisteId(id);
      fetchSaksbehandlere({ sakslisteId: id });
      fetchAntallOppgaver({ sakslisteId: id });
    }
  }, [sakslisteId]);

  const valgtSaksliste = sorterteSakslister.find(s => sakslisteId === `${s.sakslisteId}`);

  if (sakslister.length === 0) {
    return (
      <VStack gap="2" className={styles.container}>
        <Heading size="xsmall">
          <FormattedMessage id="SakslisteVelgerForm.Saksliste" />
        </Heading>
        <BodyShort>
          <FormattedMessage id="SakslisteVelgerForm.IkkeOppfort" values={{ i: (chunks: any) => <i>{chunks}</i> }} />
        </BodyShort>
      </VStack>
    );
  }

  const sorterteSaksbehandlere = saksbehandlere?.toSorted((s1, s2) => s1.navn.localeCompare(s2.navn));

  return (
    <Form formMethods={formMethods} className={styles.container}>
      <VStack gap="6">
        <HStack justify="space-between" align="start">
          <SelectField
            name="sakslisteId"
            label={intl.formatMessage({ id: 'SakslisteVelgerForm.Saksliste' })}
            selectValues={sorterteSakslister.map(saksliste => (
              <option key={saksliste.sakslisteId} value={`${saksliste.sakslisteId}`}>
                {saksliste.navn}
              </option>
            ))}
            className={styles.koInput}
          />
          {valgtSaksliste && (
            <HStack gap="5" align="stretch">
              <Box background="surface-neutral-subtle" padding="4" borderRadius="xlarge" width="200px">
                <VStack gap="4">
                  <HStack justify="space-between">
                    <Label size="small">
                      <FormattedMessage id="SakslisteVelgerForm.Stonadstype" />
                    </Label>
                    <SackKronerIcon aria-hidden className={styles.grayout} />
                  </HStack>
                  {valgtSaksliste.fagsakYtelseTyper.length > 0 ? (
                    <VStack gap="1">
                      {valgtSaksliste.fagsakYtelseTyper.map(type => (
                        <BodyShort key={type}>
                          {getKodeverknavnFraKode(alleKodeverk, KodeverkType.FAGSAK_YTELSE, type)}
                        </BodyShort>
                      ))}
                    </VStack>
                  ) : (
                    <BodyShort>
                      <FormattedMessage id="SakslisteVelgerForm.Alle" />
                    </BodyShort>
                  )}
                </VStack>
              </Box>
              <Box background="surface-neutral-subtle" padding="4" borderRadius="xlarge" width="200px">
                <VStack gap="4">
                  <HStack justify="space-between">
                    <Label size="small">
                      <FormattedMessage id="SakslisteVelgerForm.Behandlingstype" />
                    </Label>
                    <DocPencilIcon aria-hidden className={styles.grayout} />
                  </HStack>
                  {valgtSaksliste.behandlingTyper.length > 0 ? (
                    <VStack gap="1">
                      {valgtSaksliste.behandlingTyper.map(type => (
                        <BodyShort key={type}>
                          {getKodeverknavnFraKode(alleKodeverk, KodeverkType.BEHANDLING_TYPE, type)}
                        </BodyShort>
                      ))}
                    </VStack>
                  ) : (
                    <FormattedMessage id="SakslisteVelgerForm.Alle" />
                  )}
                </VStack>
              </Box>
              <Box background="surface-neutral-subtle" padding="4" borderRadius="xlarge" width="200px">
                <VStack gap="4">
                  <HStack justify="space-between">
                    <Label size="small">
                      <FormattedMessage id="SakslisteVelgerForm.AndreKriterier" />
                    </Label>
                    <FunnelIcon aria-hidden className={styles.grayout} />
                  </HStack>
                  {getAndreKriterier(intl, alleKodeverk, valgtSaksliste)}
                </VStack>
              </Box>
              <Box background="surface-neutral-subtle" padding="4" borderRadius="xlarge" width="200px">
                <VStack gap="4">
                  <HStack justify="space-between">
                    <Label size="small">
                      <FormattedMessage id="SakslisteVelgerForm.Sortering" />
                    </Label>
                    <ArrowsUpDownIcon aria-hidden className={styles.grayout} />
                  </HStack>
                  <BodyShort>{getSorteringsnavn(intl, alleKodeverk, valgtSaksliste)}</BodyShort>
                </VStack>
              </Box>
            </HStack>
          )}
        </HStack>
        <VStack gap="2">
          <Label size="small">
            <FormattedMessage id="SakslisteVelgerForm.AndreSomJobber" />
          </Label>
          <HStack gap="2">
            {sorterteSaksbehandlere
              ?.slice(
                0,
                sorterteSaksbehandlere.length > 3 && !visAlleSaksbehandlere ? 3 : sorterteSaksbehandlere.length,
              )
              .map(s => (
                <Box
                  background="surface-neutral-subtle"
                  padding="2"
                  borderRadius="full"
                  key={s.brukerIdent.brukerIdent}
                >
                  <HStack gap="2" align="center">
                    <PersonHeadsetIcon />
                    <BodyShort>{s.navn}</BodyShort>
                  </HStack>
                </Box>
              ))}
            {sorterteSaksbehandlere && sorterteSaksbehandlere.length > 3 && (
              <HStack gap="2">
                {!visAlleSaksbehandlere && (
                  <Box background="surface-neutral-subtle" padding="2" borderRadius="full">
                    <HStack gap="2" align="center">
                      <PlusIcon />
                      <BodyShort>
                        <FormattedMessage
                          id="SakslisteVelgerForm.Andre"
                          values={{ antallAndre: sorterteSaksbehandlere.length - 3 }}
                        />
                      </BodyShort>
                    </HStack>
                  </Box>
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
    </Form>
  );
};
