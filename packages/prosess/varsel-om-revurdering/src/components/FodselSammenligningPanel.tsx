import { FormattedMessage } from 'react-intl';

import { BodyShort, Heading, HStack, Table, Tag } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';

import { BehandlingType } from '@navikt/fp-kodeverk';
import type { AvklartBarn, FamilieHendelse, Soknad } from '@navikt/fp-types';

import { FodselSammenligningOtherPanel } from './FodselSammenligningOtherPanel';
import { FodselSammenligningRevurderingPanel } from './FodselSammenligningRevurderingPanel';

interface Props {
  behandlingsType: string;
  avklartBarn: AvklartBarn[] | undefined;
  soknad: Soknad;
  soknadOriginalBehandling: Soknad;
  familiehendelseOriginalBehandling: FamilieHendelse;
  termindato: string | undefined;
  vedtaksDatoSomSvangerskapsuke: number | undefined;
}

/**
 * FodselSammenlingningPanel
 *
 * Presentasjonskomponent. Viser sammenligning av fødsel ved ytelsesvedtak/søknad og oppdatert informasjon fra TPS.
 */
export const FodselSammenligningPanel = ({
  behandlingsType,
  avklartBarn = [],
  soknad,
  vedtaksDatoSomSvangerskapsuke,
  termindato,
  soknadOriginalBehandling,
  familiehendelseOriginalBehandling,
}: Props) => {
  const harDødtBarn = avklartBarn.find(barn => !!barn.dodsdato);

  return (
    <HStack gap="10">
      <div>
        {behandlingsType !== BehandlingType.REVURDERING && (
          <FodselSammenligningOtherPanel soknad={soknad} termindato={termindato} />
        )}
        {behandlingsType === BehandlingType.REVURDERING && (
          <FodselSammenligningRevurderingPanel
            soknadOriginalBehandling={soknadOriginalBehandling}
            familiehendelseOriginalBehandling={familiehendelseOriginalBehandling}
            vedtaksDatoSomSvangerskapsuke={vedtaksDatoSomSvangerskapsuke}
          />
        )}
      </div>
      <div>
        <HStack gap="4">
          <Heading size="small">
            <FormattedMessage id="FodselsammenligningPanel.OpplysningerTPS" />
          </Heading>
          {harDødtBarn && (
            <Tag variant="info">
              <FormattedMessage id="FodselsammenligningPanel.Dodfodt" />
            </Tag>
          )}
        </HStack>
        {avklartBarn.length > 0 && (
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell scope="col">
                  <FormattedMessage id="FodselsammenligningPanel.Fodselsdato" />
                </Table.HeaderCell>
                {harDødtBarn && (
                  <Table.HeaderCell scope="col">
                    <FormattedMessage id="FodselsammenligningPanel.Dodsdato" />
                  </Table.HeaderCell>
                )}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {avklartBarn.map((barn: AvklartBarn, index) => {
                const key = barn.fodselsdato + barn.dodsdato + index;
                return (
                  <Table.Row key={key}>
                    <Table.DataCell>
                      <BodyShort>
                        <DateLabel dateString={barn.fodselsdato} />
                      </BodyShort>
                    </Table.DataCell>
                    {harDødtBarn && (
                      <Table.DataCell>
                        {barn.dodsdato ? (
                          <HStack gap="4" align="center">
                            <DateLabel dateString={barn.dodsdato} />
                            <Tag variant="info" size="small">
                              <FormattedMessage id="FodselsammenligningPanel.Dod" />
                            </Tag>
                          </HStack>
                        ) : (
                          '-'
                        )}
                      </Table.DataCell>
                    )}
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        )}
        {avklartBarn.length === 0 && <BodyShort>-</BodyShort>}
      </div>
    </HStack>
  );
};
