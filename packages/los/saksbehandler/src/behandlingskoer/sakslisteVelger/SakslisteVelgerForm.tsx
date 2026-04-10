import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Detail, HStack, Label, Spacer, VStack } from '@navikt/ds-react';
import { RhfForm, RhfSelect } from '@navikt/ft-form-hooks';

import type { SakslisteDto } from '@navikt/fp-types';

import {
  getValueFromLocalStorage,
  removeValueFromLocalStorage,
  setValueInLocalStorage,
} from '../../data/localStorageHelper';
import { KøFiltere } from './KøFiltere';

import styles from './sakslisteVelgerForm.module.css';
import { AvsluttedeOppgaverDialog } from './AvsluttedeOppgaverDialog';

type FormValues = {
  sakslisteId: string | undefined;
};

interface Props {
  sakslister: SakslisteDto[];
  setValgtSakslisteId: (sakslisteId: number) => void;
  fetchAntallOppgaver: (sakslisteId: number) => void;
}

export const SakslisteVelgerForm = ({ sakslister, setValgtSakslisteId, fetchAntallOppgaver }: Props) => {
  const [visKøFiltere, setVisKøFiltere] = useState(false);

  const sorterteSakslister = sakslister.toSorted((saksliste1, saksliste2) =>
    saksliste1.navn.localeCompare(saksliste2.navn),
  );

  const formMethods = useForm<FormValues>({
    defaultValues: getFormDefaultValues(sorterteSakslister),
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

  if (sakslister.length === 0) {
    return (
      <VStack gap="space-8" className={styles['container']}>
        <Label size="small">
          <FormattedMessage id="SakslisteVelgerForm.Saksliste" />
        </Label>
        <BodyShort>
          <FormattedMessage id="SakslisteVelgerForm.IkkeOppfort" tagName="i" />
        </BodyShort>
      </VStack>
    );
  }
  const valgtSaksliste = sorterteSakslister.find(s => sakslisteId === `${s.sakslisteId}`);

  return (
    <VStack gap="space-24" className={styles['container']}>
      <HStack wrap={false} gap="space-20">
        <RhfForm formMethods={formMethods}>
          <RhfSelect
            name="sakslisteId"
            control={formMethods.control}
            label={<FormattedMessage id="SakslisteVelgerForm.Saksliste" />}
            selectValues={sorterteSakslister.map(saksliste => (
              <option key={saksliste.sakslisteId} value={`${saksliste.sakslisteId}`}>
                {saksliste.navn}
                {getAntallSaker(saksliste)}
              </option>
            ))}
            className="min-w-2xs"
          />
        </RhfForm>
        {valgtSaksliste?.beskrivelse && (
          <Detail className="content-end pb-1 whitespace-pre-line">{valgtSaksliste.beskrivelse}</Detail>
        )}
        <Spacer />
        {valgtSaksliste && <AvsluttedeOppgaverDialog valgtSakslisteId={valgtSaksliste.sakslisteId} sakslisteNavn={valgtSaksliste.navn} />}
        <Button
          size="small"
          variant="tertiary"
          type="button"
          onClick={() => setVisKøFiltere(!visKøFiltere)}
          icon={visKøFiltere ? <ChevronUpIcon aria-hidden /> : <ChevronDownIcon aria-hidden />}
          iconPosition="right"
          className="self-end"
        >
          <FormattedMessage id="SakslisteVelgerForm.FilterForKoen" />
        </Button>
      </HStack>

      {visKøFiltere && valgtSaksliste && <KøFiltere valgtSaksliste={valgtSaksliste} />}
    </VStack>
  );
};

const getAntallSaker = ({ gjeldendeStatistikk }: SakslisteDto) => {
  if (gjeldendeStatistikk) {
    const { tilgjengeligeOppgaver } = gjeldendeStatistikk;

    return ` (${tilgjengeligeOppgaver} ${tilgjengeligeOppgaver === 1 ? 'sak' : 'saker'})`;
  }
  return '';
};

const getDefaultSaksliste = (sorterteSakslister: SakslisteDto[]): string | undefined => {
  const lagretSakslisteId = getValueFromLocalStorage('sakslisteId');
  if (lagretSakslisteId) {
    if (sorterteSakslister.some(s => `${s.sakslisteId}` === lagretSakslisteId)) {
      return lagretSakslisteId;
    }
    removeValueFromLocalStorage('sakslisteId');
  }

  return sorterteSakslister.at(0)?.sakslisteId.toString();
};

const getFormDefaultValues = (sorterteSakslister: SakslisteDto[]): { sakslisteId: string | undefined } => {
  if (sorterteSakslister.length === 0) {
    return {
      sakslisteId: undefined,
    };
  }
  return {
    sakslisteId: getDefaultSaksliste(sorterteSakslister),
  };
};
