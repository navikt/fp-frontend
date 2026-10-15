import { FormattedMessage } from 'react-intl';

import { HStack, Link, ReadMore } from '@navikt/ds-react';
import { DateLabel, LabeledValue } from '@navikt/ft-ui-komponenter';
import { sortPeriodsBy } from '@navikt/ft-utils';

import { hentVedtakDokumentLenke } from '@navikt/fp-konstanter';
import type { InnsynVedtaksdokument } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

interface Props {
  vedtaksdokumenter: InnsynVedtaksdokument[];
}

export const VedtakDocuments = ({ vedtaksdokumenter }: Props) => {
  const { alleKodeverk } = usePanelDataContext();
  const behandlingTypes = alleKodeverk['BehandlingType'];

  if (vedtaksdokumenter.length === 0) {
    return (
      <LabeledValue
        size="small"
        label={<FormattedMessage id="VedtakDocuments.IngenVedtaksdokumenterLabel" />}
        value={<FormattedMessage tagName="i" id="VedtakDocuments.IngenVedtaksdokumenter" />}
      />
    );
  }

  return (
    <ReadMore
      className={'[&_div]:border-l-0 [&_div]:mt-0'}
      size="small"
      header={
        <FormattedMessage
          id="VedtakDocuments.Vedtaksdokumentasjon"
          values={{ numberOfDocuments: vedtaksdokumenter.length }}
        />
      }
    >
      <ul className="space-y-2">
        {vedtaksdokumenter.toSorted(sortPeriodsBy('opprettetDato')).map(document => (
          <HStack as="li" gap="space-16" key={document.behandlingUuid}>
            <DateLabel dateString={document.opprettetDato} />{' '}
            <Link href={hentVedtakDokumentLenke(document.behandlingUuid)} target="_blank">
              {behandlingTypes.find(bt => bt.kode === document.tittel)?.navn ?? '-'}
            </Link>
          </HStack>
        ))}
      </ul>
    </ReadMore>
  );
};
