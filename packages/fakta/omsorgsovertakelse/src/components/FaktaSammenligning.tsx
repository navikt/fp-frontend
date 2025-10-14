import { FormattedMessage, useIntl } from 'react-intl';

import { HStack, Table } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';

import type { OmsorgsovertakelseDto } from '@navikt/fp-types';
import { FaktaKort } from '@navikt/fp-ui-komponenter';
import { usePanelDataContext } from '@navikt/fp-utils';

import { ErEndretMarkering, Over15Markering } from './Markering';

interface Props {
  omsorgsovertakelse: OmsorgsovertakelseDto;
}

export const FaktaSammenligning = ({ omsorgsovertakelse: { søknad, gjeldende, kildeGjeldende } }: Props) => {
  const intl = useIntl();
  const { alleKodeverk } = usePanelDataContext();
  const lengsteListeBarn = søknad.barn.length >= gjeldende.barn.length ? søknad.barn : gjeldende.barn;
  const erIkkeFraSøknad = kildeGjeldende !== 'SØKNAD';

  return (
    <FaktaKort label={intl.formatMessage({ id: 'FaktaSammenligning.Tittel' })}>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>
              <FormattedMessage id="FaktaSammenligning.FraSøknaden" />
            </Table.HeaderCell>
            {erIkkeFraSøknad && (
              <Table.HeaderCell>
                <FormattedMessage id="FaktaSammenligning.FraSaksbehandler" />
              </Table.HeaderCell>
            )}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row shadeOnHover={false}>
            <Table.HeaderCell scope="row">
              <FormattedMessage id="Label.Omsorgsovertakelsesdato" />
            </Table.HeaderCell>
            <Table.DataCell>
              {søknad.omsorgsovertakelseDato ? <DateLabel dateString={søknad.omsorgsovertakelseDato} /> : '-'}
            </Table.DataCell>
            {erIkkeFraSøknad && (
              <Table.DataCell>
                {gjeldende.omsorgsovertakelseDato ? <DateLabel dateString={gjeldende.omsorgsovertakelseDato} /> : '-'}
                <ErEndretMarkering første={søknad.omsorgsovertakelseDato} andre={gjeldende.omsorgsovertakelseDato} />
              </Table.DataCell>
            )}
          </Table.Row>

          {(søknad.ankomstNorgeDato || gjeldende.ankomstNorgeDato) && (
            <Table.Row shadeOnHover={false}>
              <Table.HeaderCell scope="row">
                <FormattedMessage id="Label.Ankomstdato" />
              </Table.HeaderCell>
              <Table.DataCell>
                {søknad.ankomstNorgeDato ? <DateLabel dateString={søknad.ankomstNorgeDato} /> : '-'}
              </Table.DataCell>
              {erIkkeFraSøknad && (
                <Table.DataCell>
                  {gjeldende.ankomstNorgeDato ? <DateLabel dateString={gjeldende.ankomstNorgeDato} /> : '-'}
                  <ErEndretMarkering første={søknad.ankomstNorgeDato} andre={gjeldende.ankomstNorgeDato} />
                </Table.DataCell>
              )}
            </Table.Row>
          )}

          <Table.Row shadeOnHover={false}>
            <Table.HeaderCell scope="row">
              <FormattedMessage id="Label.AntallBarn" />
            </Table.HeaderCell>
            <Table.DataCell>{søknad.antallBarn}</Table.DataCell>
            {erIkkeFraSøknad && (
              <Table.DataCell>
                {gjeldende.antallBarn}
                <ErEndretMarkering første={søknad.antallBarn} andre={gjeldende.antallBarn} />
              </Table.DataCell>
            )}
          </Table.Row>

          {lengsteListeBarn.map((barn, index) => {
            const søknadFødselsdato = søknad.barn.at(index)?.fødselsdato;
            const gjeldendeFødselsdato = gjeldende.barn.at(index)?.fødselsdato;
            return (
              <Table.Row shadeOnHover={false} key={barn.barnNummer}>
                <Table.HeaderCell scope="row">
                  {lengsteListeBarn.length === 1 ? (
                    <FormattedMessage id="Label.Fødselsdato" />
                  ) : (
                    <FormattedMessage id="Label.FødselsdatoNummerert" values={{ nummer: index + 1 }} />
                  )}
                </Table.HeaderCell>
                <Table.DataCell>
                  {søknadFødselsdato ? (
                    <HStack gap="space-12">
                      <DateLabel dateString={søknadFødselsdato} />
                      <Over15Markering fødselsdato={søknadFødselsdato} />
                    </HStack>
                  ) : (
                    '-'
                  )}
                </Table.DataCell>
                {erIkkeFraSøknad && (
                  <Table.DataCell>
                    {gjeldendeFødselsdato ? <DateLabel dateString={gjeldendeFødselsdato} /> : '-'}
                    <ErEndretMarkering første={søknadFødselsdato} andre={gjeldendeFødselsdato} />
                  </Table.DataCell>
                )}
              </Table.Row>
            );
          })}
          {søknad.erEktefellesBarn !== undefined && (
            <Table.Row shadeOnHover={false}>
              <Table.HeaderCell scope="row">
                <FormattedMessage id="Label.ErEktefellesBarn" />
              </Table.HeaderCell>
              <Table.DataCell>
                {søknad.erEktefellesBarn ? <FormattedMessage id="Label.Ja" /> : <FormattedMessage id="Label.Nei" />}
              </Table.DataCell>
              {erIkkeFraSøknad && (
                <Table.DataCell>
                  {gjeldende.erEktefellesBarn ? (
                    <FormattedMessage id="Label.Ja" />
                  ) : (
                    <FormattedMessage id="Label.Nei" />
                  )}
                  <ErEndretMarkering første={søknad.erEktefellesBarn} andre={gjeldende.erEktefellesBarn} />
                </Table.DataCell>
              )}
            </Table.Row>
          )}

          <Table.Row shadeOnHover={false}>
            <Table.HeaderCell scope="row">
              <FormattedMessage id="Label.Delvilkår" />
            </Table.HeaderCell>
            <Table.DataCell>
              {alleKodeverk['OmsorgsovertakelseVilkårType'].find(k => k.kode === søknad.delvilkår)?.navn}
            </Table.DataCell>
            {erIkkeFraSøknad && (
              <Table.DataCell>
                {alleKodeverk['OmsorgsovertakelseVilkårType'].find(k => k.kode === gjeldende.delvilkår)?.navn}
                <ErEndretMarkering første={søknad.delvilkår} andre={gjeldende.delvilkår} />
              </Table.DataCell>
            )}
          </Table.Row>
        </Table.Body>
      </Table>
    </FaktaKort>
  );
};
