import { FormattedMessage, useIntl } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { Table, Tag } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import dayjs from 'dayjs';

import { getLabelForFaktaKilde } from '@navikt/fp-fakta-felles';
import type { OmsorgsovertakelseDto } from '@navikt/fp-types';
import { FaktaKort } from '@navikt/fp-ui-komponenter';
import { usePanelDataContext } from '@navikt/fp-utils';

import { ErEndret } from './ErEndret';

interface Props {
  omsorgsovertakelse: OmsorgsovertakelseDto;
}

export const FaktaSammenligning = ({ omsorgsovertakelse: { søknad, gjeldende } }: Props) => {
  const intl = useIntl();
  const { alleKodeverk } = usePanelDataContext();
  const lengsteListeBarn = søknad.barn.length >= gjeldende.barn.length ? søknad.barn : gjeldende.barn;

  return (
    <FaktaKort label={intl.formatMessage({ id: 'FaktaSammenligning.Tittel' })}>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>{getLabelForFaktaKilde('SØKNAD')}</Table.HeaderCell>
            <Table.HeaderCell>{getLabelForFaktaKilde('SAKSBEHANDLER')}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row shadeOnHover={false}>
            <Table.HeaderCell>
              <FormattedMessage id="Label.Omsorgsovertakelsesdato" />
            </Table.HeaderCell>
            <Table.DataCell>
              {søknad.omsorgsovertakelseDato ? <DateLabel dateString={søknad.omsorgsovertakelseDato} /> : '-'}
            </Table.DataCell>
            <Table.DataCell>
              {gjeldende.omsorgsovertakelseDato ? <DateLabel dateString={gjeldende.omsorgsovertakelseDato} /> : '-'}
              <ErEndret første={søknad.omsorgsovertakelseDato} andre={gjeldende.omsorgsovertakelseDato} />
            </Table.DataCell>
          </Table.Row>

          {(søknad.ankomstNorgeDato || gjeldende.ankomstNorgeDato) && (
            <Table.Row shadeOnHover={false}>
              <Table.HeaderCell>
                <FormattedMessage id="Label.Ankomstdato" />
              </Table.HeaderCell>
              <Table.DataCell>
                {søknad.ankomstNorgeDato ? <DateLabel dateString={søknad.ankomstNorgeDato} /> : '-'}
              </Table.DataCell>
              <Table.DataCell>
                {gjeldende.ankomstNorgeDato ? <DateLabel dateString={gjeldende.ankomstNorgeDato} /> : '-'}
                <ErEndret første={søknad.ankomstNorgeDato} andre={gjeldende.ankomstNorgeDato} />
              </Table.DataCell>
            </Table.Row>
          )}

          <Table.Row shadeOnHover={false}>
            <Table.HeaderCell>
              <FormattedMessage id="Label.AntallBarn" />
            </Table.HeaderCell>
            <Table.DataCell>{søknad.antallBarn}</Table.DataCell>
            <Table.DataCell>
              {gjeldende.antallBarn}
              <ErEndret første={søknad.antallBarn} andre={gjeldende.antallBarn} />
            </Table.DataCell>
          </Table.Row>

          {lengsteListeBarn.map((barn, index) => {
            const søknadFødselsdato = søknad.barn.at(index)?.fødselsdato;
            const gjeldendeFødselsdato = gjeldende.barn.at(index)?.fødselsdato;
            return (
              <Table.Row shadeOnHover={false} key={barn.barnNummer}>
                <Table.HeaderCell>
                  {lengsteListeBarn.length === 1 ? (
                    <FormattedMessage id="Label.Fødselsdato" />
                  ) : (
                    <FormattedMessage id="Label.Label.FødselsdatoNummerert" values={{ nummer: index + 1 }} />
                  )}
                </Table.HeaderCell>
                <Table.DataCell>
                  {søknadFødselsdato ? (
                    <>
                      <DateLabel dateString={søknadFødselsdato} />
                      {erOver15År(søknadFødselsdato) && (
                        <Tag variant="warning" icon={<ExclamationmarkTriangleFillIcon color="var(--ax-warning-700)" />}>
                          Over 15 år
                        </Tag>
                      )}
                    </>
                  ) : (
                    '-'
                  )}
                  <ErEndret første={søknadFødselsdato} andre={gjeldendeFødselsdato} />
                </Table.DataCell>
                <Table.DataCell>
                  {gjeldendeFødselsdato ? <DateLabel dateString={gjeldendeFødselsdato} /> : '-'}
                </Table.DataCell>
              </Table.Row>
            );
          })}
          {søknad.erEktefellesBarn !== undefined && (
            <Table.Row shadeOnHover={false}>
              <Table.HeaderCell>
                <FormattedMessage id="Label.ErEktefellesBarn" />
              </Table.HeaderCell>
              <Table.DataCell>
                {søknad.erEktefellesBarn ? <FormattedMessage id="Label.Ja" /> : <FormattedMessage id="Label.Nei" />}
              </Table.DataCell>
              <Table.DataCell>
                {gjeldende.erEktefellesBarn ? <FormattedMessage id="Label.Ja" /> : <FormattedMessage id="Label.Nei" />}
                <ErEndret første={søknad.erEktefellesBarn} andre={gjeldende.erEktefellesBarn} />
              </Table.DataCell>
            </Table.Row>
          )}

          <Table.Row shadeOnHover={false}>
            <Table.HeaderCell>
              <FormattedMessage id="Label.Delvilkår" />
            </Table.HeaderCell>
            <Table.DataCell>
              {alleKodeverk['OmsorgsovertakelseVilkårType'].find(k => k.kode === søknad.delvilkår)?.navn}
            </Table.DataCell>
            <Table.DataCell>
              {alleKodeverk['OmsorgsovertakelseVilkårType'].find(k => k.kode === gjeldende.delvilkår)?.navn}
              <ErEndret første={søknad.delvilkår} andre={gjeldende.delvilkår} />
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
    </FaktaKort>
  );
};

const erOver15År = (fødselsdato: string): boolean => {
  return dayjs(fødselsdato).add(15, 'year').isBefore(dayjs());
};
