import React, {
  FunctionComponent, useEffect, useCallback, useMemo,
} from 'react';
import { useIntl, FormattedMessage, IntlShape } from 'react-intl';
import { useForm } from 'react-hook-form';
import {
  Heading, BodyShort, Panel,
} from '@navikt/ds-react';
import {
  required, minLength, maxLength, hasValidName,
} from '@navikt/ft-form-validators';
import {
  FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { Form, InputField } from '@navikt/ft-form-hooks';

import { restApiHooks, RestApiPathsKeys } from '../../../data/fplosRestApi';
import BehandlingstypeVelger from './filtrering/BehandlingstypeVelger';
import AndreKriterierVelger from './filtrering/AndreKriterierVelger';
import FagsakYtelseTypeVelger from './filtrering/FagsakYtelseTypeVelger';
import SorteringVelger from './sortering/SorteringVelger';
import useDebounce from './useDebounce';
import Saksliste from '../../../typer/sakslisteAvdelingTsType';

import styles from './utvalgskriterierForSakslisteForm.less';

const minLength3 = minLength(3);
const maxLength100 = maxLength(100);

type FormValues = {
  sakslisteId: number
  navn: string;
  sortering?: string;
  erDynamiskPeriode?: boolean;
  fra?: string;
  til?: string;
  fomDato?: string;
  tomDato?: string;
}

const buildInitialValues = (intl: IntlShape, valgtSaksliste: Saksliste): FormValues => {
  const behandlingTypes = valgtSaksliste.behandlingTyper ? valgtSaksliste.behandlingTyper.reduce((acc, bt) => ({ ...acc, [bt]: true }), {}) : {};
  const fagsakYtelseTypes = valgtSaksliste.fagsakYtelseTyper ? valgtSaksliste.fagsakYtelseTyper.reduce((acc, fyt) => ({ ...acc, [fyt]: true }), {}) : {};

  const andreKriterierTyper = valgtSaksliste.andreKriterier
    ? valgtSaksliste.andreKriterier.reduce((acc, ak) => ({ ...acc, [ak.andreKriterierType]: true }), {}) : {};
  const andreKriterierInkluder = valgtSaksliste.andreKriterier
    ? valgtSaksliste.andreKriterier.reduce((acc, ak) => ({ ...acc, [`${ak.andreKriterierType}_inkluder`]: ak.inkluder }), {}) : {};

  return {
    sakslisteId: valgtSaksliste.sakslisteId,
    navn: valgtSaksliste.navn ? valgtSaksliste.navn : intl.formatMessage({ id: 'UtvalgskriterierForSakslisteForm.NyListe' }),
    sortering: valgtSaksliste.sortering ? valgtSaksliste.sortering.sorteringType : undefined,
    fomDato: valgtSaksliste.sortering ? valgtSaksliste.sortering.fomDato : undefined,
    tomDato: valgtSaksliste.sortering ? valgtSaksliste.sortering.tomDato : undefined,
    fra: valgtSaksliste.sortering ? valgtSaksliste.sortering.fra?.toString() : undefined,
    til: valgtSaksliste.sortering ? valgtSaksliste.sortering.til?.toString() : undefined,
    erDynamiskPeriode: valgtSaksliste.sortering ? valgtSaksliste.sortering.erDynamiskPeriode : undefined,
    ...andreKriterierTyper,
    ...andreKriterierInkluder,
    ...behandlingTypes,
    ...fagsakYtelseTypes,
  };
};

interface OwnProps {
  valgtSaksliste: Saksliste;
  valgtAvdelingEnhet: string;
  hentAvdelingensSakslister: (params: {avdelingEnhet: string}) => void;
  hentOppgaverForAvdelingAntall: (params: {avdelingEnhet: string}) => void;
}

/**
 * UtvalgskriterierForSakslisteForm
 */
const UtvalgskriterierForSakslisteForm: FunctionComponent<OwnProps> = ({
  valgtSaksliste,
  valgtAvdelingEnhet,
  hentAvdelingensSakslister,
  hentOppgaverForAvdelingAntall,
}) => {
  const intl = useIntl();
  const { data: antallOppgaver, startRequest: hentAntallOppgaverForSaksliste } = restApiHooks
    .useRestApiRunner(RestApiPathsKeys.OPPGAVE_ANTALL);
  useEffect(() => {
    hentAntallOppgaverForSaksliste({ sakslisteId: valgtSaksliste.sakslisteId, avdelingEnhet: valgtAvdelingEnhet });
  }, [valgtSaksliste.sakslisteId]);

  const hentAntallOppgaver = useCallback((sakslisteId: number, avdelingEnhet: string) => {
    hentAntallOppgaverForSaksliste({ sakslisteId, avdelingEnhet });
    hentOppgaverForAvdelingAntall({ avdelingEnhet });
  }, []);

  const { startRequest: lagreSakslisteNavn } = restApiHooks.useRestApiRunner(RestApiPathsKeys.LAGRE_SAKSLISTE_NAVN);

  const tranformValues = useCallback((nyttNavn: string): void => {
    lagreSakslisteNavn({ sakslisteId: valgtSaksliste.sakslisteId, navn: nyttNavn, avdelingEnhet: valgtAvdelingEnhet })
      .then(() => hentAvdelingensSakslister({ avdelingEnhet: valgtAvdelingEnhet }));
  }, [valgtAvdelingEnhet, valgtSaksliste]);

  const defaultValues = useMemo(() => buildInitialValues(intl, valgtSaksliste), [valgtSaksliste]);

  const formMethods = useForm<FormValues>({
    defaultValues,
  });

  const lagreNavn = useDebounce<string>('navn', tranformValues, formMethods.trigger);

  const values = formMethods.watch();

  return (
    <Form<FormValues> formMethods={formMethods}>
      <Panel className={styles.panel}>
        <Heading size="small">
          <FormattedMessage id="UtvalgskriterierForSakslisteForm.Utvalgskriterier" />
        </Heading>
        <VerticalSpacer eightPx />
        <FlexContainer>
          <FlexRow className={styles.utvalgskriterieRad}>
            <FlexColumn>
              <InputField
                name="navn"
                label={intl.formatMessage({ id: 'UtvalgskriterierForSakslisteForm.Navn' })}
                validate={[required, minLength3, maxLength100, hasValidName]}
                onChange={lagreNavn}
                className={styles.bredde}
              />
            </FlexColumn>
            <FlexColumn className={styles.colRight}>
              <div className={styles.grayBox}>
                <BodyShort size="small"><FormattedMessage id="UtvalgskriterierForSakslisteForm.AntallSaker" /></BodyShort>
                <Heading size="small">{antallOppgaver ? `${antallOppgaver}` : '0'}</Heading>
              </div>
            </FlexColumn>
          </FlexRow>
          <FlexRow spaceBetween>
            <FlexColumn>
              <FagsakYtelseTypeVelger
                valgtSakslisteId={valgtSaksliste.sakslisteId}
                valgtAvdelingEnhet={valgtAvdelingEnhet}
                hentAvdelingensSakslister={hentAvdelingensSakslister}
                hentAntallOppgaver={hentAntallOppgaver}
              />
              <BehandlingstypeVelger
                valgtSakslisteId={valgtSaksliste.sakslisteId}
                valgtAvdelingEnhet={valgtAvdelingEnhet}
                hentAvdelingensSakslister={hentAvdelingensSakslister}
                hentAntallOppgaver={hentAntallOppgaver}
              />
            </FlexColumn>
            <FlexColumn>
              <AndreKriterierVelger
                valgtSakslisteId={valgtSaksliste.sakslisteId}
                valgtAvdelingEnhet={valgtAvdelingEnhet}
                values={values}
                hentAvdelingensSakslister={hentAvdelingensSakslister}
                hentAntallOppgaver={hentAntallOppgaver}
              />
            </FlexColumn>
            <FlexColumn>
              <SorteringVelger
                valgtSakslisteId={valgtSaksliste.sakslisteId}
                valgteBehandlingtyper={valgtSaksliste.behandlingTyper}
                valgtAvdelingEnhet={valgtAvdelingEnhet}
                erDynamiskPeriode={!!values.erDynamiskPeriode}
                hentAvdelingensSakslister={hentAvdelingensSakslister}
                hentAntallOppgaver={hentAntallOppgaver}
              />
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </Panel>
    </Form>
  );
};

export default UtvalgskriterierForSakslisteForm;
