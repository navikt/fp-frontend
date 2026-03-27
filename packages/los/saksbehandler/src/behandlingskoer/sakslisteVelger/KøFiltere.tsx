import { type JSX, type ReactNode, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import {
  ArrowsUpDownIcon,
  DocPencilIcon,
  FunnelIcon,
  PersonHeadsetIcon,
  PlusIcon,
  SackKronerIcon,
} from '@navikt/aksel-icons';
import { BodyShort, Box, Button, HStack, VStack } from '@navikt/ds-react';
import { LabeledValue } from '@navikt/ft-ui-komponenter';
import { dateFormat, DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type { LosKodeverkMedNavn, SakslisteDto } from '@navikt/fp-types';

import { useLosKodeverk } from '../../data/useLosKodeverk';
import { AndreKriterier } from './AndreKriterier';
import { FilterBox } from './FilterBox';
import { SaksbehandlerBadge } from './SaksbehandlerBadge';

import styles from './sakslisteVelgerForm.module.css';

interface Props {
  valgtSaksliste: SakslisteDto;
}

export const KøFiltere = ({ valgtSaksliste }: Props) => {
  const { andreKriterie, behandlingTyper, fagsakYtelseTyper, saksbehandlere, sortering } = valgtSaksliste;
  const [visAlleSaksbehandlere, setVisAlleSaksbehandlere] = useState(false);

  const sorterteSaksbehandlere = saksbehandlere.toSorted((s1, s2) => s1.navn.localeCompare(s2.navn));

  const behandlingTypeKoder = useLosKodeverk('BehandlingType');
  const fagsakYtelseTypeKoder = useLosKodeverk('FagsakYtelseType');
  const køSorteringKoder = useLosKodeverk('KøSortering');

  return (
    <Box maxHeight="500px" className={styles['køFilterBoks']}>
      <VStack gap="space-24">
        <HStack gap="space-20">
          <FilterBox
            label={<FormattedMessage id="SakslisteVelgerForm.Stonadstype" />}
            icon={<SackKronerIcon aria-hidden />}
            value={
              <>
                {fagsakYtelseTyper.map(type => (
                  <BodyShort key={type}>{fagsakYtelseTypeKoder.find(fyt => fyt.kode === type)?.navn}</BodyShort>
                ))}

                {fagsakYtelseTyper.length === 0 && (
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
                {behandlingTyper.map(type => (
                  <BodyShort key={type}>{behandlingTypeKoder.find(bt => bt.kode === type)?.navn}</BodyShort>
                ))}
                {behandlingTyper.length === 0 && <FormattedMessage tagName={BodyShort} id="SakslisteVelgerForm.Alle" />}
              </>
            }
          />
          <FilterBox
            label={<FormattedMessage id="SakslisteVelgerForm.AndreKriterier" />}
            icon={<FunnelIcon aria-hidden />}
            value={<AndreKriterier andreKriterie={andreKriterie} />}
          />
          <FilterBox
            label={<FormattedMessage id="SakslisteVelgerForm.Sortering" />}
            icon={<ArrowsUpDownIcon aria-hidden />}
            value={getSorteringsInformasjon(køSorteringKoder, sortering)}
          />
        </HStack>

        <LabeledValue
          size="small"
          label={<FormattedMessage id="SakslisteVelgerForm.AndreSomJobber" />}
          fieldType="component"
          value={
            sorterteSaksbehandlere.length === 0 ? (
              <BodyShort size="small">
                <FormattedMessage id="SakslisteVelgerForm.Ingen" />
              </BodyShort>
            ) : (
              <HStack gap="space-8" paddingBlock="space-8">
                {sorterteSaksbehandlere
                  .slice(
                    0,
                    sorterteSaksbehandlere.length > 3 && !visAlleSaksbehandlere ? 3 : sorterteSaksbehandlere.length,
                  )
                  .map(s => (
                    <SaksbehandlerBadge key={s.brukerIdent} icon={<PersonHeadsetIcon aria-hidden />} label={s.navn} />
                  ))}
                {sorterteSaksbehandlere.length > 3 && (
                  <>
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
                  </>
                )}
              </HStack>
            )
          }
        />
      </VStack>
    </Box>
  );
};

type TextValues = {
  navn: string;
  fomDato?: string;
  tomDato?: string;
  br: JSX.Element;
};

const getNavn = (values: TextValues) => {
  if (!values.fomDato) {
    return <FormattedMessage id="SakslisteVelgerForm.SorteringsinfoTom" values={values} />;
  }
  if (!values.tomDato) {
    return <FormattedMessage id="SakslisteVelgerForm.SorteringsinfoFom" values={values} />;
  }
  return <FormattedMessage id="SakslisteVelgerForm.Sorteringsinfo" values={values} />;
};

const getSorteringsnavnForPeriode = (
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
  return getNavn(values);
};

const getSorteringsnavnForDynamiskPeriode = (
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
  return getNavn(values);
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

const getSorteringsInformasjon = (
  køSorteringTyper: LosKodeverkMedNavn<'KøSortering'>[],
  sortering: SakslisteDto['sortering'],
): ReactNode => {
  const { periodefilter, sorteringType, fra, til, fomDato, tomDato } = sortering;

  const sorteringsnavn =
    periodefilter === 'FAST_PERIODE'
      ? getSorteringsnavnForPeriode(køSorteringTyper, sorteringType, fomDato, tomDato)
      : getSorteringsnavnForDynamiskPeriode(køSorteringTyper, sorteringType, periodefilter, fra, til);

  if (sorteringType !== 'BELOP') {
    return <BodyShort>{sorteringsnavn}</BodyShort>;
  }

  const harBelopFra = fra !== undefined;
  const harBelopTil = til !== undefined;

  if (!harBelopFra && !harBelopTil) {
    return <BodyShort>{sorteringsnavn}</BodyShort>;
  }

  const formatertFra = harBelopFra ? Number(fra).toLocaleString('nb-NO') : undefined;
  const formatertTil = harBelopTil ? Number(til).toLocaleString('nb-NO') : undefined;

  return (
    <VStack gap="space-0">
      <BodyShort>{sorteringsnavn}</BodyShort>
      {harBelopFra && (
        <BodyShort>
          <FormattedMessage id="SakslisteVelgerForm.SorteringsinfoFra" />: {formatertFra} kr
        </BodyShort>
      )}
      {harBelopTil && (
        <BodyShort>
          <FormattedMessage id="SakslisteVelgerForm.SorteringsinfoTil" />: {formatertTil} kr
        </BodyShort>
      )}
    </VStack>
  );
};
