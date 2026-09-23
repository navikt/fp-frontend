import { PermisjonRettigheterPanel } from './PermisjonRettigheterPanel';

describe('PermisjonRettigheterPanel', () => {
  it.each([
    [true, false, false, true, undefined, undefined, undefined],
    [true, false, true, false, undefined, undefined, undefined],
    [false, true, false, true, true, undefined, undefined],
    [false, false, true, true, false, true, undefined],
    [false, false, false, true, false, false, true],
    [false, false, false, false, false, false, false],
    [false, false, false, undefined, false, false, undefined],
    [undefined, false, false, true, undefined, undefined, undefined],
    [false, undefined, false, true, undefined, undefined, undefined],
    [false, false, undefined, true, false, undefined, undefined],
  ])(
    'skal bare beholde relevante svar med aleneomsorg=%s, rett=%s, EØS=%s og uføretrygd=%s',
    (aleneomsorg, rett, eøs, uføretrygd, forventetRett, forventetEøs, forventetUføretrygd) => {
      expect(
        PermisjonRettigheterPanel.transformValues({
          søkerHarAleneomsorg: aleneomsorg,
          denAndreForelderenHarRettPåForeldrepenger: rett,
          annenForelderRettEØS: eøs,
          morMottarUføretrygd: uføretrygd,
        }),
      ).toStrictEqual({
        søkerHarAleneomsorg: aleneomsorg,
        denAndreForelderenHarRettPåForeldrepenger: forventetRett,
        annenForelderRettEØS: forventetEøs,
        morMottarUføretrygd: forventetUføretrygd,
      });
    },
  );
});
