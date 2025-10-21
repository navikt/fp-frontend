import { composeStories } from '@storybook/react';
import { render, screen, waitFor, within } from '@testing-library/react';
import { userEvent } from 'storybook/test';
import { describe, expect } from 'vitest';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { notEmpty } from '@navikt/fp-utils';

import * as stories from './OmsorgsovertakelseFaktaIndex.stories';

const { EngangsstønadUtenAp, EngangsstønadMedAp } = composeStories(stories);

describe('OmsorgsovertakelseFaktaIndex', () => {
  it('skal rendre fakta om omsorgovertagelse', () => {
    render(<EngangsstønadUtenAp />);

    expect(screen.getByLabelText('Sammenligning av opplysninger')).toBeInTheDocument();

    const omsorgsovertakelsesdatoRow = withinRowWithLabel('Omsorgsovertakelsesdato');
    expect(omsorgsovertakelsesdatoRow.getByText('09.11.2025')).toBeInTheDocument();

    const ankomstdatoRow = withinRowWithLabel('Ankomstdato');
    expect(ankomstdatoRow.getByText('09.11.2025')).toBeInTheDocument();

    const antallBarnRow = withinRowWithLabel('Antall barn');
    expect(antallBarnRow.getByText('2')).toBeInTheDocument();

    const fødselsdatoRow1 = withinRowWithLabel('Fødselsdato for barn 1');
    expect(fødselsdatoRow1.getByText('09.10.2015')).toBeInTheDocument();

    const fødselsdatoRow2 = withinRowWithLabel('Fødselsdato for barn 2');
    expect(fødselsdatoRow2.getByText('09.10.2005')).toBeInTheDocument();
    expect(fødselsdatoRow2.getByText('Over 15 år')).toBeInTheDocument();

    const ektefellesBarnRad = withinRowWithLabel('Er det ektefelles barn?');
    expect(ektefellesBarnRad.getByText('Nei')).toBeInTheDocument();

    const delvilkårRad = withinRowWithLabel('Delvilkår');
    expect(delvilkårRad.getByText('Adopsjon §14-17 første ledd')).toBeInTheDocument();

    const fregBoks = within(screen.getByLabelText('Opplysninger fra Folkeregisteret'));
    expect(fregBoks.getByText('Opplysninger fra Folkeregisteret')).toBeInTheDocument();
    expect(fregBoks.getByText('Det er ikke registrert noen fødselshendelse i Folkeregisteret')).toBeInTheDocument();

    expect(screen.queryByText('Vurder opplysningene om omsorgsovertakelse')).not.toBeInTheDocument();
  });

  it('skal rendre aksjonspunkt skjema', async () => {
    const submit = vi.fn();
    render(<EngangsstønadMedAp submitCallback={submit} />);

    const apBoks = within(screen.getByLabelText('Vurder opplysningene om omsorgsovertakelse'));

    expect(apBoks.getByLabelText('Omsorgsovertakelsesdato')).toHaveValue('09.11.2025');

    expect(apBoks.getByText('Hvilke barn skal med i vurderingen?')).toBeInTheDocument();
    expect(apBoks.getByRole('checkbox', { name: 'Barn 1 født 09.10.2015' })).toBeChecked();
    expect(apBoks.getByRole('checkbox', { name: 'Barn 2 født 09.10.2005Over 15 år' })).toBeChecked();

    expect(apBoks.getByLabelText('Er det ektefelles barn?')).toBeInTheDocument();
    expect(apBoks.getByRole('radio', { name: 'Ja' })).not.toBeChecked();
    expect(apBoks.getByRole('radio', { name: 'Nei' })).toBeChecked();

    expect(apBoks.getByLabelText('Velg vilkår som skal anvendes')).toBeInTheDocument();
    expect(apBoks.getByRole('radio', { name: 'Adopsjon §14-17 første ledd' })).toBeChecked();
    expect(apBoks.getByRole('radio', { name: 'Foreldreansvar §14-17 andre ledd' })).not.toBeChecked();
    expect(apBoks.getByRole('radio', { name: 'Foreldreansvar §14-17 fjerde ledd' })).not.toBeChecked();
    expect(apBoks.getByRole('radio', { name: 'Omsorg §14-17 tredje ledd' })).not.toBeChecked();

    expect(apBoks.getByLabelText('Er vilkåret oppfylt?')).toBeInTheDocument();
    expect(apBoks.getByRole('radio', { name: 'Oppfylt' })).not.toBeChecked();
    expect(apBoks.getByRole('radio', { name: 'Ikke oppfylt' })).not.toBeChecked();

    expect(apBoks.getByLabelText('Begrunn endringene')).toBeInTheDocument();

    const omsorgsdatoInput = apBoks.getByLabelText('Omsorgsovertakelsesdato');
    await userEvent.clear(omsorgsdatoInput);
    await userEvent.type(omsorgsdatoInput, '10.11.2025');

    await userEvent.click(apBoks.getByRole('radio', { name: 'Ja' }));
    await userEvent.click(apBoks.getByRole('checkbox', { name: 'Barn 2 født 09.10.2005Over 15 år' }));
    await userEvent.click(apBoks.getByRole('radio', { name: 'Foreldreansvar §14-17 andre ledd' }));
    await userEvent.click(screen.getByText('Ikke oppfylt'));
    await userEvent.selectOptions(screen.getByLabelText('Velg en avslagsårsak'), '1004');
    await userEvent.type(apBoks.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');
    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(submit).toHaveBeenCalledTimes(1));
    expect(submit).toHaveBeenCalledWith({
      kode: AksjonspunktKode.VURDER_OMSORGSOVERTAKELSEVILKÅRET,
      omsorgsovertakelseDato: '2025-11-10',
      barn: [{ barnNummer: 1, fødselsdato: '2015-10-09' }],
      ektefellesBarn: true,
      delvilkår: 'FP_VK_8',
      avslagskode: '1004',
      begrunnelse: 'Dette er en begrunnelse',
    });
  });
});

const withinRowWithLabel = (name: string) => {
  const row = screen.getByRole('rowheader', { name }).closest('tr');
  expect(row).toBeInTheDocument();
  return within(notEmpty(row));
};
