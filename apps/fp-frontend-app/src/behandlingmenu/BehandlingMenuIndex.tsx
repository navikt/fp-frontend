import React, { FunctionComponent, useCallback, useMemo, useEffect, useRef } from 'react';
import moment from 'moment';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  behandlingType as BehandlingType,
  behandlingStatus as BehandlingStatus,
  KodeverkType,
} from '@navikt/fp-kodeverk';
import {
  MenySakIndex,
  MenyData,
  MenyEndreBehandlendeEnhetIndex,
  getEndreEnhetMenytekst,
  MenyVergeIndex,
  getVergeMenytekst,
  MenyTaAvVentIndex,
  getTaAvVentMenytekst,
} from '@navikt/ft-sak-meny';
import { FormValues } from '@navikt/fp-modal-sett-pa-vent';

import { MenySettPaVentIndex, getMenytekst as getSettPaVentMenytekst } from '@navikt/fp-sak-meny-sett-pa-vent';
import { MenyHenleggIndex, getMenytekst as getHenleggMenytekst } from '@navikt/fp-sak-meny-henlegg';
import {
  MenyApneForEndringerIndex,
  getMenytekst as getApneForEndringerMenytekst,
} from '@navikt/fp-sak-meny-apne-for-endringer';
import {
  MenyNyBehandlingIndex,
  getMenytekst as getNyBehandlingMenytekst,
  FormValues as NyBehandlingFormValues,
} from '@navikt/fp-sak-meny-ny-behandling';
import {
  MenyEndreUtlandIndex,
  getMenytekst as getEndreUtlandMenytekst,
  FormValues as EndreUtlandFormValues,
} from '@navikt/fp-sak-meny-endre-utland';
import { VergeBehandlingmenyValg, BehandlingAppKontekst, Behandling } from '@navikt/fp-types';

import { getLocationWithDefaultProsessStegAndFakta, pathToBehandling } from '../app/paths';
import useVisForhandsvisningAvMelding from '../data/useVisForhandsvisningAvMelding';
import { FagsakApiKeys, restFagsakApiHooks } from '../data/fagsakContextApi';
import useGetEnabledApplikasjonContext from '../app/useGetEnabledApplikasjonContext';
import ApplicationContextPath from '../app/ApplicationContextPath';
import MenyKodeverk from './MenyKodeverk';
import FagsakData from '../fagsak/FagsakData';

import '@navikt/ft-sak-meny/dist/style.css';
import { BehandlingApiKeys } from '../data/behandlingContextApi';

const BEHANDLINGSTYPER_SOM_SKAL_KUNNE_OPPRETTES = [
  BehandlingType.FORSTEGANGSSOKNAD,
  BehandlingType.KLAGE,
  BehandlingType.REVURDERING,
  BehandlingType.DOKUMENTINNSYN,
  BehandlingType.ANKE,
  BehandlingType.TILBAKEKREVING,
  BehandlingType.TILBAKEKREVING_REVURDERING,
];

const findNewBehandlingUuid = (alleBehandlinger: BehandlingAppKontekst[]): string => {
  alleBehandlinger.sort((b1, b2) => moment(b2.opprettet).diff(moment(b1.opprettet)));
  return alleBehandlinger[0].uuid;
};

const getUuidForSisteLukkedeForsteEllerRevurd = (behandlinger: BehandlingAppKontekst[] = []): string | undefined => {
  const behandling = behandlinger.find(
    b =>
      b.gjeldendeVedtak &&
      b.status === BehandlingStatus.AVSLUTTET &&
      (b.type === BehandlingType.FORSTEGANGSSOKNAD || b.type === BehandlingType.REVURDERING),
  );
  return behandling ? behandling.uuid : undefined;
};

const skalLageVergeFn = (
  vergeType: VergeBehandlingmenyValg,
  vergeMenyvalg?: VergeBehandlingmenyValg,
  behandlingUuid?: string,
  behandlingVersjon?: number,
): boolean => vergeMenyvalg === vergeType && !!behandlingUuid && !!behandlingVersjon;

const sjekkOgSettBehandling = (setBehandling: (behandling: Behandling) => void) => (behandling?: Behandling) => {
  if (behandling) {
    setBehandling(behandling);
  }
};

interface OwnProps {
  fagsakData: FagsakData;
  behandlingUuid?: string;
  behandlingVersjon?: number;
  setBehandling: (behandling: Behandling) => void;
  hentOgSettBehandling: () => void;
  endreFagsakMarkering: (params: EndreUtlandFormValues) => Promise<void>;
}

const BehandlingMenuIndex: FunctionComponent<OwnProps> = ({
  fagsakData,
  behandlingUuid,
  setBehandling,
  hentOgSettBehandling,
  endreFagsakMarkering,
}) => {
  const fagsak = fagsakData.getFagsak();
  const alleBehandlinger = fagsakData.getAlleBehandlinger();
  const behandling = fagsakData.getBehandling(behandlingUuid);

  const navigate = useNavigate();
  const location = useLocation();

  const ref = useRef<number>();
  useEffect(() => {
    // Når antallet har endret seg er det laget en ny behandling og denne må da velges
    if (ref.current && ref.current > 0) {
      const pathname = pathToBehandling(fagsak.saksnummer, findNewBehandlingUuid(alleBehandlinger));
      navigate(getLocationWithDefaultProsessStegAndFakta({ ...location, pathname }));
    }

    ref.current = alleBehandlinger.length;
  }, [alleBehandlinger.length]);

  const { startRequest: sjekkTilbakeKanOpprettes, data: kanBehandlingOpprettes = false } =
    restFagsakApiHooks.useRestApiRunner(FagsakApiKeys.KAN_TILBAKEKREVING_OPPRETTES);
  const { startRequest: sjekkTilbakeRevurdKanOpprettes, data: kanRevurderingOpprettes = false } =
    restFagsakApiHooks.useRestApiRunner(FagsakApiKeys.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES);

  const initFetchData = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.INIT_FETCH);
  const { innloggetBruker: navAnsatt, behandlendeEnheter } = initFetchData;

  const erTilbakekrevingAktivert = useGetEnabledApplikasjonContext().includes(ApplicationContextPath.FPTILBAKE);

  const alleFpSakKodeverk = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.KODEVERK);
  const alleFpTilbakeKodeverk = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.KODEVERK_FPTILBAKE);
  const menyKodeverk = new MenyKodeverk(behandling?.type)
    .medFpSakKodeverk(alleFpSakKodeverk)
    .medFpTilbakeKodeverk(alleFpTilbakeKodeverk);

  const gaaTilSokeside = useCallback(() => navigate('/'), [navigate]);

  const { startRequest: lagNyBehandlingFpSak } = restFagsakApiHooks.useRestApiRunner(
    FagsakApiKeys.NEW_BEHANDLING_FPSAK,
  );
  const { startRequest: lagNyBehandlingFpTilbake } = restFagsakApiHooks.useRestApiRunner(
    FagsakApiKeys.NEW_BEHANDLING_FPTILBAKE,
  );

  const settBehandling = sjekkOgSettBehandling(setBehandling);

  const lagNyBehandling = useCallback(
    (
      isTilbakekreving: boolean,
      params: {
        saksnummer: string;
        behandlingUuid?: string;
      } & NyBehandlingFormValues,
    ): void => {
      const lagNy = isTilbakekreving ? lagNyBehandlingFpTilbake : lagNyBehandlingFpSak;
      lagNy(params).then(settBehandling);
    },
    [],
  );

  const uuidForSistLukkede = useMemo(
    () => getUuidForSisteLukkedeForsteEllerRevurd(alleBehandlinger),
    [alleBehandlinger],
  );
  const previewHenleggBehandling = useVisForhandsvisningAvMelding(behandling?.type);

  useEffect(() => {
    if (erTilbakekrevingAktivert && !navAnsatt.kanVeilede) {
      if (uuidForSistLukkede !== undefined) {
        sjekkTilbakeKanOpprettes({ saksnummer: fagsak.saksnummer, uuid: uuidForSistLukkede });
      }
      const erTilbakekreving =
        behandling?.type === BehandlingType.TILBAKEKREVING ||
        behandling?.type === BehandlingType.TILBAKEKREVING_REVURDERING;
      if (erTilbakekreving && behandlingUuid) {
        sjekkTilbakeRevurdKanOpprettes({ uuid: behandlingUuid });
      }
    }
  }, [fagsak.saksnummer, behandlingUuid]);

  const erPaVent = behandling ? behandling.behandlingPaaVent : false;
  const behandlingTypeKode = behandling?.type;
  const behandlingTillatteOperasjoner = behandling?.behandlingTillatteOperasjoner;

  const vergeMenyvalg = behandlingTillatteOperasjoner?.vergeBehandlingsmeny;
  const setLocation = () => {
    navigate(
      getLocationWithDefaultProsessStegAndFakta({
        ...location,
        pathname: pathToBehandling(fagsak.saksnummer, behandlingUuid),
      }),
    );
  };

  const { startRequest: fjernVerge } = restFagsakApiHooks.useRestApiRunner(BehandlingApiKeys.VERGE_FJERN);
  const { startRequest: opprettVerge } = restFagsakApiHooks.useRestApiRunner(BehandlingApiKeys.VERGE_OPPRETT);
  const { startRequest: taBehandlingAvVent } = restFagsakApiHooks.useRestApiRunner(BehandlingApiKeys.RESUME_BEHANDLING);
  const { startRequest: henleggBehandling } = restFagsakApiHooks.useRestApiRunner(BehandlingApiKeys.HENLEGG_BEHANDLING);
  const { startRequest: åpneForEndringer } = restFagsakApiHooks.useRestApiRunner(
    BehandlingApiKeys.OPEN_BEHANDLING_FOR_CHANGES,
  );
  const { startRequest: nyBehandlendeEnhet } = restFagsakApiHooks.useRestApiRunner(
    BehandlingApiKeys.BEHANDLING_NY_BEHANDLENDE_ENHET,
  );
  const { startRequest: settBehandlingPåVent } = restFagsakApiHooks.useRestApiRunner(
    BehandlingApiKeys.BEHANDLING_ON_HOLD,
  );
  const taBehandlingAvVentOgOppdaterBehandling = useCallback(() => {
    if (behandling) {
      taBehandlingAvVent({
        behandlingUuid: behandling?.uuid,
        behandlingVersjon: behandling?.versjon,
      }).then(settBehandling);
    }
  }, [behandling]);
  const settBehandlingPåVentOgOppdaterBehandling = useCallback(
    (formValues: FormValues) => {
      if (behandling) {
        settBehandlingPåVent({
          ...formValues,
          behandlingUuid: behandling?.uuid,
          behandlingVersjon: behandling?.versjon,
        }).then(() => {
          hentOgSettBehandling();
        });
      }
    },
    [behandling],
  );
  const henleggBehandlingOgOppdaterBehandling = useCallback(
    formValues => {
      if (behandling) {
        henleggBehandling({
          ...formValues,
          behandlingUuid: behandling?.uuid,
          behandlingVersjon: behandling?.versjon,
        });
      }
    },
    [behandling],
  );
  const endreBehandlendeEnhet = useCallback(
    formValues => {
      if (behandling) {
        nyBehandlendeEnhet({
          ...formValues,
          behandlingUuid: behandling?.uuid,
          behandlingVersjon: behandling?.versjon,
        }).then(() => {
          hentOgSettBehandling();
        });
      }
    },
    [behandling],
  );
  const opneBehandlingForEndringer = useCallback(
    formValues => {
      if (behandling) {
        åpneForEndringer({
          ...formValues,
          behandlingUuid: behandling?.uuid,
          behandlingVersjon: behandling?.versjon,
        }).then(settBehandling);
      }
    },
    [behandling],
  );

  const fjernVergeFn = skalLageVergeFn(
    VergeBehandlingmenyValg.FJERN,
    vergeMenyvalg,
    behandlingUuid,
    behandling?.versjon,
  )
    ? () =>
        fjernVerge({
          behandlingUuid: behandling?.uuid,
          behandlingVersjon: behandling?.versjon,
        }).then(b => {
          settBehandling(b);
          setLocation();
        })
    : undefined;
  const opprettVergeFn = skalLageVergeFn(
    VergeBehandlingmenyValg.OPPRETT,
    vergeMenyvalg,
    behandlingUuid,
    behandling?.versjon,
  )
    ? () =>
        opprettVerge({
          behandlingUuid: behandling?.uuid,
          behandlingVersjon: behandling?.versjon,
        }).then(b => {
          settBehandling(b);
          setLocation();
        })
    : undefined;

  const menyTaAvVentFn = useCallback(
    (lukkModal: () => void) => (
      <div>
        {behandling && (
          <MenyTaAvVentIndex
            behandlingVersjon={behandling.versjon}
            taBehandlingAvVent={taBehandlingAvVentOgOppdaterBehandling}
            lukkModal={lukkModal}
          />
        )}
      </div>
    ),
    [behandling, taBehandlingAvVentOgOppdaterBehandling],
  );

  const menySettPåVentFn = useCallback(
    (lukkModal: () => void) => (
      <MenySettPaVentIndex
        behandlingVersjon={behandling?.versjon}
        settBehandlingPaVent={settBehandlingPåVentOgOppdaterBehandling}
        ventearsaker={menyKodeverk.getKodeverkForValgtBehandling(KodeverkType.VENT_AARSAK)}
        lukkModal={lukkModal}
        erTilbakekreving={
          behandlingTypeKode === BehandlingType.TILBAKEKREVING ||
          behandlingTypeKode === BehandlingType.TILBAKEKREVING_REVURDERING
        }
      />
    ),
    [behandling?.versjon, settBehandlingPåVentOgOppdaterBehandling, behandlingTypeKode],
  );

  const menyHenleggFn = useCallback(
    (lukkModal: () => void) => (
      <div>
        {behandling && (
          <MenyHenleggIndex
            valgtBehandling={behandling}
            forhandsvisHenleggBehandling={previewHenleggBehandling}
            henleggBehandling={henleggBehandlingOgOppdaterBehandling}
            ytelseType={fagsak.fagsakYtelseType}
            behandlingResultatTyper={menyKodeverk.getKodeverkForValgtBehandling(KodeverkType.BEHANDLING_RESULTAT_TYPE)}
            lukkModal={lukkModal}
            gaaTilSokeside={gaaTilSokeside}
          />
        )}
      </div>
    ),
    [behandling, previewHenleggBehandling, henleggBehandlingOgOppdaterBehandling, fagsak, gaaTilSokeside],
  );

  const menyEndreBehandlendeEnhetFn = useCallback(
    (lukkModal: () => void) => (
      <MenyEndreBehandlendeEnhetIndex
        behandlingVersjon={behandling?.versjon}
        behandlendeEnhetId={behandling?.behandlendeEnhetId}
        behandlendeEnhetNavn={behandling?.behandlendeEnhetNavn}
        nyBehandlendeEnhet={endreBehandlendeEnhet}
        behandlendeEnheter={behandlendeEnheter}
        lukkModal={lukkModal}
      />
    ),
    [behandling?.versjon, behandling, endreBehandlendeEnhet, behandlendeEnheter],
  );

  const menyÅpneForEndringerFn = useCallback(
    (lukkModal: () => void) => (
      <MenyApneForEndringerIndex apneBehandlingForEndringer={opneBehandlingForEndringer} lukkModal={lukkModal} />
    ),
    [opneBehandlingForEndringer],
  );

  const menyNyBehandlingFn = useCallback(
    (lukkModal: () => void) => (
      <MenyNyBehandlingIndex
        saksnummer={fagsak.saksnummer}
        behandlingUuid={behandling?.uuid}
        behandlingVersjon={behandling?.versjon}
        uuidForSistLukkede={uuidForSistLukkede}
        behandlingOppretting={fagsakData.getBehandlingOppretting()}
        kanTilbakekrevingOpprettes={{
          kanBehandlingOpprettes,
          kanRevurderingOpprettes,
        }}
        behandlingstyper={menyKodeverk.getKodeverkForBehandlingstyper(
          BEHANDLINGSTYPER_SOM_SKAL_KUNNE_OPPRETTES,
          KodeverkType.BEHANDLING_TYPE,
        )}
        tilbakekrevingRevurderingArsaker={menyKodeverk.getKodeverkForBehandlingstype(
          KodeverkType.BEHANDLING_AARSAK,
          BehandlingType.TILBAKEKREVING_REVURDERING,
        )}
        revurderingArsaker={menyKodeverk.getKodeverkForBehandlingstype(
          KodeverkType.BEHANDLING_AARSAK,
          BehandlingType.REVURDERING,
        )}
        ytelseType={fagsak.fagsakYtelseType}
        lagNyBehandling={lagNyBehandling}
        lukkModal={lukkModal}
      />
    ),
    [
      fagsak,
      behandling,
      uuidForSistLukkede,
      fagsakData,
      kanBehandlingOpprettes,
      kanRevurderingOpprettes,
      lagNyBehandling,
    ],
  );

  const menyEndretUtlandFn = useCallback(
    (lukkModal: () => void) => (
      <MenyEndreUtlandIndex
        saksnummer={fagsak.saksnummer}
        fagsakMarkering={fagsak.fagsakMarkering}
        endreFagsakMarkering={endreFagsakMarkering}
        lukkModal={lukkModal}
      />
    ),
    [fagsak, endreFagsakMarkering],
  );

  const menyVergeFn = useCallback(
    (lukkModal: () => void) => (
      <MenyVergeIndex fjernVerge={fjernVergeFn} opprettVerge={opprettVergeFn} lukkModal={lukkModal} />
    ),
    [fjernVergeFn, opprettVergeFn],
  );

  if (navAnsatt.kanVeilede) {
    return null;
  }

  return (
    <MenySakIndex
      data={[
        new MenyData(behandlingTillatteOperasjoner?.behandlingKanGjenopptas, getTaAvVentMenytekst()).medModal(
          menyTaAvVentFn,
        ),
        new MenyData(behandlingTillatteOperasjoner?.behandlingKanSettesPaVent, getSettPaVentMenytekst()).medModal(
          menySettPåVentFn,
        ),
        new MenyData(behandlingTillatteOperasjoner?.behandlingKanHenlegges, getHenleggMenytekst()).medModal(
          menyHenleggFn,
        ),
        new MenyData(behandlingTillatteOperasjoner?.behandlingKanBytteEnhet, getEndreEnhetMenytekst()).medModal(
          menyEndreBehandlendeEnhetFn,
        ),
        new MenyData(
          behandlingTillatteOperasjoner?.behandlingKanOpnesForEndringer,
          getApneForEndringerMenytekst(),
        ).medModal(menyÅpneForEndringerFn),
        new MenyData(!fagsak.sakSkalTilInfotrygd, getNyBehandlingMenytekst()).medModal(menyNyBehandlingFn),
        new MenyData(!fagsak.sakSkalTilInfotrygd, getEndreUtlandMenytekst()).medModal(menyEndretUtlandFn),
        new MenyData(!erPaVent && (!!opprettVergeFn || !!fjernVergeFn), getVergeMenytekst(!!opprettVergeFn)).medModal(
          menyVergeFn,
        ),
      ]}
    />
  );
};

export default BehandlingMenuIndex;
