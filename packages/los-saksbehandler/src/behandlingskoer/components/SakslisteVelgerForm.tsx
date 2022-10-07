import React, {
  FunctionComponent, useEffect, useMemo,
} from 'react';
import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';
import {
  useIntl, FormattedMessage, IntlShape,
} from 'react-intl';
import { Label, BodyShort } from '@navikt/ds-react';
import { DDMMYYYY_DATE_FORMAT, getKodeverknavnFraKode } from '@navikt/ft-utils';
import {
  Image, FlexContainer, FlexRow, FlexColumn, VerticalSpacer, LabelWithHeader,
} from '@navikt/ft-ui-komponenter';
import { Form, SelectField } from '@navikt/ft-form-hooks';
import { AlleKodeverk } from '@navikt/ft-types';
import { KodeverkType } from '@navikt/ft-kodeverk';

import gruppeHoverUrl from '@fpsak-frontend/assets/images/gruppe_hover.svg';
import gruppeUrl from '@fpsak-frontend/assets/images/gruppe.svg';

import Saksliste from '../../typer/sakslisteTsType';
import Saksbehandler from '../../typer/saksbehandlerTsType';
import { RestApiPathsKeys, RestApiGlobalStatePathsKeys, restApiHooks } from '../../data/fplosSaksbehandlerRestApi';

import styles from './sakslisteVelgerForm.less';

interface OwnProps {
  sakslister: Saksliste[];
  setValgtSakslisteId: (sakslisteId: number) => void;
  fetchAntallOppgaver: (data: {sakslisteId: number}) => void;
  getValueFromLocalStorage: (key: string) => string | undefined;
  setValueInLocalStorage: (key: string, value: string) => void;
  removeValueFromLocalStorage: (key: string) => void;
}

const getDefaultSaksliste = (
  sakslister: Saksliste[],
  getValueFromLocalStorage: (key: string) => string | undefined,
  removeValueFromLocalStorage: (key: string) => void,
) => {
  const lagretSakslisteId = getValueFromLocalStorage('sakslisteId');
  if (lagretSakslisteId) {
    if (sakslister.some((s) => `${s.sakslisteId}` === lagretSakslisteId)) {
      return parseInt(lagretSakslisteId, 10);
    }
    removeValueFromLocalStorage('sakslisteId');
  }

  const sortertSakslister = sakslister.sort((saksliste1, saksliste2) => saksliste1.navn.localeCompare(saksliste2.navn));
  return sortertSakslister.length > 0 ? sortertSakslister[0].sakslisteId : undefined;
};

const getInitialValues = (
  sakslister: Saksliste[],
  getValueFromLocalStorage: (key: string) => string | undefined,
  removeValueFromLocalStorage: (key: string) => void,
) => {
  if (sakslister.length === 0) {
    return {
      sakslisteId: undefined,
    };
  }
  const defaultSaksliste = getDefaultSaksliste(sakslister, getValueFromLocalStorage, removeValueFromLocalStorage);
  return {
    sakslisteId: defaultSaksliste ? `${defaultSaksliste}` : undefined,
  };
};

const getValgtSaksliste = (sakslister: Saksliste[], sakslisteId: string) => sakslister.find((s) => sakslisteId === `${s.sakslisteId}`);

const getStonadstyper = (intl: IntlShape, alleKodeverk: AlleKodeverk, saksliste?: Saksliste) => (saksliste && saksliste.fagsakYtelseTyper.length > 0
  ? saksliste.fagsakYtelseTyper.map((type) => getKodeverknavnFraKode(alleKodeverk, KodeverkType.FAGSAK_YTELSE, type))
  : [intl.formatMessage({ id: 'SakslisteVelgerForm.Alle' })]);

const getBehandlingstyper = (intl: IntlShape, alleKodeverk: AlleKodeverk, saksliste?: Saksliste) => (saksliste && saksliste.behandlingTyper.length > 0
  ? saksliste.behandlingTyper.map((type) => getKodeverknavnFraKode(alleKodeverk, KodeverkType.BEHANDLING_TYPE, type))
  : [intl.formatMessage({ id: 'SakslisteVelgerForm.Alle' })]);

const getAndreKriterier = (intl: IntlShape, alleKodeverk: AlleKodeverk, saksliste?: Saksliste) => {
  if (saksliste && saksliste.andreKriterier.length > 0) {
    return saksliste.andreKriterier.map((ak) => (ak.inkluder
      ? getKodeverknavnFraKode(alleKodeverk, 'AndreKriterierType', ak.andreKriterierType)
      : intl.formatMessage({ id: 'SakslisteVelgerForm.Uten' }, {
        kriterie: getKodeverknavnFraKode(
          alleKodeverk, 'AndreKriterierType', ak.andreKriterierType),
      })));
  }
  return [intl.formatMessage({ id: 'SakslisteVelgerForm.Alle' })];
};

const getSorteringsnavn = (intl: IntlShape, alleKodeverk: AlleKodeverk, saksliste?: Saksliste): string => {
  if (!saksliste || !saksliste.sortering) {
    return '';
  }

  const {
    erDynamiskPeriode, sorteringType, fra, til, fomDato, tomDato,
  } = saksliste.sortering;
  let values: Record<string, string | JSX.Element | undefined > = {
    br: <br />,
    fomDato: undefined,
    tomDato: undefined,
    navn: undefined,
  };
  if (!erDynamiskPeriode) {
    if (!fomDato && !tomDato) {
      return getKodeverknavnFraKode(alleKodeverk, 'KøSortering', sorteringType);
    }
    values = {
      navn: getKodeverknavnFraKode(alleKodeverk, 'KøSortering', sorteringType),
      fomDato: fomDato ? dayjs(fomDato).format(DDMMYYYY_DATE_FORMAT) : undefined,
      tomDato: tomDato ? dayjs(tomDato).format(DDMMYYYY_DATE_FORMAT) : undefined,
      br: <br />,
    };
  } else {
    if (!fra && !til) {
      return getKodeverknavnFraKode(alleKodeverk, 'KøSortering', sorteringType);
    }
    values = {
      navn: getKodeverknavnFraKode(alleKodeverk, 'KøSortering', sorteringType),
      fomDato: fra ? dayjs().add(fra, 'days').format(DDMMYYYY_DATE_FORMAT) : undefined,
      tomDato: til ? dayjs().add(til, 'days').format(DDMMYYYY_DATE_FORMAT) : undefined,
      br: <br />,
    };
  }

  if (!values.fomDato) {
    return intl.formatMessage({ id: 'SakslisteVelgerForm.SorteringsinfoTom' }, values) as string;
  } if (!values.tomDato) {
    return intl.formatMessage({ id: 'SakslisteVelgerForm.SorteringsinfoFom' }, values) as string;
  }
  return intl.formatMessage({ id: 'SakslisteVelgerForm.Sorteringsinfo' }, values) as string;
};

const createTooltip = (saksbehandlere?: Saksbehandler[]) => {
  if (!saksbehandlere || saksbehandlere.length === 0) {
    return undefined;
  }

  return (
    <div>
      <Label size="small"><FormattedMessage id="SakslisteVelgerForm.SaksbehandlerToolip" /></Label>
      {saksbehandlere.map((s) => s.navn).sort((n1, n2) => n1.localeCompare(n2)).map((navn) => (<BodyShort size="small" key={navn}>{navn}</BodyShort>))}
    </div>
  );
};

type FormValues = {
  sakslisteId: string | undefined;
};

/**
 * SakslisteVelgerForm
 *
 */
const SakslisteVelgerForm: FunctionComponent<OwnProps> = ({
  sakslister,
  setValgtSakslisteId,
  fetchAntallOppgaver,
  getValueFromLocalStorage,
  setValueInLocalStorage,
  removeValueFromLocalStorage,
}) => {
  const intl = useIntl();

  const { data: saksbehandlere, startRequest: fetchSaksbehandlere } = restApiHooks.useRestApiRunner(RestApiPathsKeys.SAKSLISTE_SAKSBEHANDLERE);
  const alleKodeverk = restApiHooks.useGlobalStateRestApiData(RestApiGlobalStatePathsKeys.KODEVERK_LOS);

  useEffect(() => {
    if (sakslister.length > 0) {
      const defaultSakslisteId = getDefaultSaksliste(sakslister, getValueFromLocalStorage, removeValueFromLocalStorage);
      if (defaultSakslisteId) {
        setValgtSakslisteId(defaultSakslisteId);
        fetchSaksbehandlere({ sakslisteId: defaultSakslisteId });
        fetchAntallOppgaver({ sakslisteId: defaultSakslisteId });
      }
    }
  }, []);

  const tooltip = useMemo(() => createTooltip(saksbehandlere), [saksbehandlere]);

  const formMethods = useForm<FormValues>({
    defaultValues: getInitialValues(sakslister, getValueFromLocalStorage, removeValueFromLocalStorage),
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

  return (
    <Form<FormValues> formMethods={formMethods}>
      <Label size="small"><FormattedMessage id="SakslisteVelgerForm.Utvalgskriterier" /></Label>
      <VerticalSpacer eightPx />
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={styles.navnInput}>
            <SelectField
              name="sakslisteId"
              label={intl.formatMessage({ id: 'SakslisteVelgerForm.Saksliste' })}
              selectValues={sakslister
                .map((saksliste) => (<option key={saksliste.sakslisteId} value={`${saksliste.sakslisteId}`}>{saksliste.navn}</option>))}
            />
          </FlexColumn>
          {sakslisteId && (
            <>
              <FlexColumn>
                <div className={styles.saksbehandlerIkon} />
                <Image
                  alt={intl.formatMessage({ id: 'SakslisteVelgerForm.Saksbehandlere' })}
                  src={gruppeUrl}
                  srcHover={gruppeHoverUrl}
                  tooltip={tooltip}
                />
              </FlexColumn>
              <FlexColumn className={styles.marginFilters}>
                <LabelWithHeader
                  header={intl.formatMessage({ id: 'SakslisteVelgerForm.Stonadstype' })}
                  texts={getStonadstyper(intl, alleKodeverk, getValgtSaksliste(sakslister, sakslisteId))}
                />
              </FlexColumn>
              <FlexColumn className={styles.marginFilters}>
                <LabelWithHeader
                  header={intl.formatMessage({ id: 'SakslisteVelgerForm.Behandlingstype' })}
                  texts={getBehandlingstyper(intl, alleKodeverk, getValgtSaksliste(sakslister, sakslisteId))}
                />
              </FlexColumn>
              <FlexColumn className={styles.marginFilters}>
                <LabelWithHeader
                  header={intl.formatMessage({ id: 'SakslisteVelgerForm.AndreKriterier' })}
                  texts={getAndreKriterier(intl, alleKodeverk, getValgtSaksliste(sakslister, sakslisteId))}
                />
              </FlexColumn>
              <FlexColumn className={styles.marginFilters}>
                <LabelWithHeader
                  header={intl.formatMessage({ id: 'SakslisteVelgerForm.Sortering' })}
                  texts={[getSorteringsnavn(intl, alleKodeverk, getValgtSaksliste(sakslister, sakslisteId))]}
                />
              </FlexColumn>
            </>
          )}
        </FlexRow>
      </FlexContainer>
    </Form>
  );
};

export default SakslisteVelgerForm;
