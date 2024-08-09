/* eslint-disable @typescript-eslint/no-use-before-define */ // TODO
import FaktaPanelInitProps from '../../felles/typer/faktaPanelInitProps';
import FaktaDefaultInitPanel from '../../felles/fakta/FaktaDefaultInitPanel';
import React from 'react';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { useIntl } from 'react-intl';
import { BehandlingApiKeys } from '../../../data/behandlingContextApi';
import { HGrid, HStack, Label, Table, VStack } from '@navikt/ds-react';
import { ArbeidsgiverOpplysningerPerId, Behandling, Inntektsmelding } from '@navikt/fp-types';
import { formatCurrencyWithKr } from '@navikt/ft-utils';
import { DateLabel, DateTimeLabel } from '@navikt/ft-ui-komponenter';
import { CircleFillIcon } from '@navikt/aksel-icons';
import { NaturalytelseType } from '@navikt/fp-types/src/arbeidOgInntektsmeldingTsType';

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.INNTEKTSMELDINGER];
type EndepunktPanelData = {
  inntektsmeldinger: Inntektsmelding[];
};

type OwnProps = {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  behandling: Behandling;
}

export const InntektsmeldingerFaktaInitPanel = ({arbeidsgiverOpplysningerPerId, ...props}: FaktaPanelInitProps & OwnProps) => (
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    faktaPanelKode={FaktaPanelCode.INNTEKTSMELDINGER}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'InntektsmeldingerInfoPanel.Title' })}
    skalPanelVisesIMeny={() => true}
    renderPanel={data =>
      <InntektsmledingerFaktaInnhold {...data} behandling={props.behandling} arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}  />}
  />
);

const InntektsmledingerFaktaInnhold = ({ arbeidsgiverOpplysningerPerId, behandling, inntektsmeldinger }: {inntektsmeldinger:Inntektsmelding[]} & OwnProps) => {
  console.log(inntektsmeldinger);
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col">Innhold</Table.HeaderCell>
          <Table.HeaderCell scope="col">Dato innsendt</Table.HeaderCell>
          <Table.HeaderCell scope="col">Bedrift</Table.HeaderCell>
          <Table.HeaderCell scope="col">Skjæringst.</Table.HeaderCell>
          <Table.HeaderCell scope="col">Månedsi.</Table.HeaderCell>
          <Table.HeaderCell scope="col">Behandling</Table.HeaderCell>
          <Table.HeaderCell scope="col">Dato for beh.</Table.HeaderCell>
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>
        <Table.Body>
          {inntektsmeldinger.map((inntektsmelding, index) => {
            return (
              <Table.ExpandableRow togglePlacement="right" key={index} content={
                <InntektsmeldingContent arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId} inntektsmelding={inntektsmelding} /> }>
                <Table.DataCell>{inntektsmelding.innsendingsårsak}</Table.DataCell>
                <Table.DataCell><DateTimeLabel dateTimeString={inntektsmelding.innsendingstidspunkt} /></Table.DataCell>
                <Table.DataCell>{arbeidsgiverOpplysningerPerId[inntektsmelding.arbeidsgiverIdent].navn}</Table.DataCell>
                <Table.DataCell>{inntektsmelding.startDatoPermisjon ? <DateLabel dateString={inntektsmelding.startDatoPermisjon} /> : "-"}</Table.DataCell>
                <Table.DataCell>{formatCurrencyWithKr(inntektsmelding.inntektPrMnd)}</Table.DataCell>
                <Table.DataCell><InntektsmeldingStatus behandling={behandling} inntektsmelding={inntektsmelding}  /></Table.DataCell>
                <Table.DataCell>HVORDAN?</Table.DataCell>
              </Table.ExpandableRow>
            );
          })}
        </Table.Body>
    </Table>
  )
}

const InntektsmeldingStatus = ({behandling, inntektsmelding}:{behandling: Behandling, inntektsmelding: Inntektsmelding} ) => {
  if (inntektsmelding.behandlingsIdeer.includes(behandling.uuid)) {
    return <HStack gap="1" align="center"><CircleFillIcon style={{ color: "var(--a-green-400)"}} /> Denne</HStack>
  }
  if (inntektsmelding.behandlingsIdeer.length > 0) {
    return <HStack gap="1" align="center"><CircleFillIcon style={{ color: "var(--a-border-subtle)"}} /> Tidligere</HStack>
  }

  return <HStack gap="1" align="center"><CircleFillIcon style={{ color: "var(--a-border-subtle)"}} /> Ingen</HStack>
}

const InntektsmeldingContent = (
  {inntektsmelding,arbeidsgiverOpplysningerPerId}: {inntektsmelding:Inntektsmelding} & Pick<OwnProps, "arbeidsgiverOpplysningerPerId">
) => {

  return (
    <HGrid columns={{ md: 3, "2xl": 4 }}  gap="8" style={{background: "rgba(18, 43, 68, 0.08)", padding: "1.5rem 1rem"}}>
      <InntektsmeldingInfoBlokk tittel={"Arbeidsgiver"}>
        <span>Virksomhetsnavn: {arbeidsgiverOpplysningerPerId[inntektsmelding.arbeidsgiverIdent].navn}</span>
        <span>Org.nr. for underenhet: {inntektsmelding.arbeidsgiverIdent} </span>
      </InntektsmeldingInfoBlokk>

      <InntektsmeldingInfoBlokk tittel={"Kontaktperson fra arbeidsgiver"}>
        <span>Navn: {inntektsmelding.kontaktpersonNavn}</span>
        <span>Telefonnummer {inntektsmelding.kontaktpersonNummer}</span>
      </InntektsmeldingInfoBlokk>

      <InntektsmeldingInfoBlokk tittel={"Behandling"}>
        <span>Brukt i denne behandlingen: TODO</span>
        <span>Avsluttet dato 14.14.TODO</span>
      </InntektsmeldingInfoBlokk>

      <InntektsmeldingInfoBlokk tittel={"Månedsinntekt"}>
        <span>{formatCurrencyWithKr(inntektsmelding.inntektPrMnd)}</span>
        <span>TODO</span>
      </InntektsmeldingInfoBlokk>

      <InntektsmeldingInfoBlokk tittel={"Første dag med foreldrepenger"}>
        <span>{inntektsmelding.startDatoPermisjon ? <DateLabel dateString={inntektsmelding.startDatoPermisjon} /> : "-"}</span>
        <span>Oppgitt av arbeidsgiver</span>
      </InntektsmeldingInfoBlokk>

      <InntektsmeldingInfoBlokk tittel={"Kilde"}>
        <span>{inntektsmelding.kildeSystem}</span>
      </InntektsmeldingInfoBlokk>

      <InntektsmeldingInfoBlokk tittel={"Refusjon"}>
        <span>{inntektsmelding.refusjonPrMnd ? formatCurrencyWithKr(inntektsmelding.refusjonPrMnd): "Ingen refusjon"}</span>
      </InntektsmeldingInfoBlokk>

      <InntektsmeldingInfoBlokk tittel={"Naturalytelser som faller bort"}>
        {inntektsmelding.bortfalteNaturalytelser.length === 0 ? <span>Ingen</span> :
        <VStack>
          {inntektsmelding.bortfalteNaturalytelser.map(({ type, periode, beloepPerMnd, indexKey }) => (
            <VStack key={indexKey}>
              <span>{NaturalytelseType[type]}</span>
              <ul style={{margin: 0}}>
                <li><DateLabel dateString={periode.fomDato} /></li>
                <li>Verdi pr måned: {formatCurrencyWithKr(beloepPerMnd.verdi)}</li>
              </ul>
            </VStack>
          ))}
        </VStack>
        }
      </InntektsmeldingInfoBlokk>
    </HGrid>
  )
}

const InntektsmeldingInfoBlokk = ({tittel, children}: {tittel:string, children: React.ReactNode}) => {
  return (
    <VStack><Label size="medium" >
      {tittel}
    </Label>
      {children}
    </VStack>
  )
}
