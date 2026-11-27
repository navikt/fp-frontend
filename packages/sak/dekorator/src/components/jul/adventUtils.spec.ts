import { erJuletid, finnAdventsstatus } from './adventUtils';

describe('adventUtils', () => {
  it('skal ikke vise lys før første søndag i advent', () => {
    expect(finnAdventsstatus(new Date(2026, 10, 28))).toBeUndefined();
    expect(finnAdventsstatus(new Date(2026, 5, 15))).toBeUndefined();
  });

  it('skal tenne ett nytt lys hver søndag i advent', () => {
    expect(finnAdventsstatus(new Date(2026, 10, 29))).toEqual({ antallTenteLys: 1, erJul: false });
    expect(finnAdventsstatus(new Date(2026, 11, 5))).toEqual({ antallTenteLys: 1, erJul: false });
    expect(finnAdventsstatus(new Date(2026, 11, 6))).toEqual({ antallTenteLys: 2, erJul: false });
    expect(finnAdventsstatus(new Date(2026, 11, 13))).toEqual({ antallTenteLys: 3, erJul: false });
    expect(finnAdventsstatus(new Date(2026, 11, 20))).toEqual({ antallTenteLys: 4, erJul: false });
    expect(finnAdventsstatus(new Date(2026, 11, 24, 23, 59))).toEqual({ antallTenteLys: 4, erJul: false });
  });

  it('skal regne julaften som fjerde søndag i advent når julaften er en søndag', () => {
    expect(finnAdventsstatus(new Date(2023, 11, 2))).toBeUndefined();
    expect(finnAdventsstatus(new Date(2023, 11, 3))).toEqual({ antallTenteLys: 1, erJul: false });
    expect(finnAdventsstatus(new Date(2023, 11, 23))).toEqual({ antallTenteLys: 3, erJul: false });
    expect(finnAdventsstatus(new Date(2023, 11, 24))).toEqual({ antallTenteLys: 4, erJul: false });
  });

  it('skal regne søndag 18. desember som fjerde søndag i advent når 1. juledag er en søndag', () => {
    expect(finnAdventsstatus(new Date(2022, 10, 26))).toBeUndefined();
    expect(finnAdventsstatus(new Date(2022, 10, 27))).toEqual({ antallTenteLys: 1, erJul: false });
    expect(finnAdventsstatus(new Date(2022, 11, 18))).toEqual({ antallTenteLys: 4, erJul: false });
  });

  it('skal la alle lysene brenne i jula til og med trettende dag jul', () => {
    expect(finnAdventsstatus(new Date(2026, 11, 25))).toEqual({ antallTenteLys: 4, erJul: true });
    expect(finnAdventsstatus(new Date(2026, 11, 31))).toEqual({ antallTenteLys: 4, erJul: true });
    expect(finnAdventsstatus(new Date(2027, 0, 6))).toEqual({ antallTenteLys: 4, erJul: true });
    expect(finnAdventsstatus(new Date(2027, 0, 7))).toBeUndefined();
  });

  it('skal vise juledekor fra 1. november til 6. januar', () => {
    expect(erJuletid(new Date(2026, 9, 31))).toBe(false);
    expect(erJuletid(new Date(2026, 10, 1))).toBe(true);
    expect(erJuletid(new Date(2026, 11, 24))).toBe(true);
    expect(erJuletid(new Date(2027, 0, 6))).toBe(true);
    expect(erJuletid(new Date(2027, 0, 7))).toBe(false);
  });
});
