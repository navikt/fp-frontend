import { useState } from 'react';
import { useIntl } from 'react-intl';

import { finnAdventsstatus } from './adventUtils';

import styles from './adventslys.module.css';

const LYS = [0, 1, 2, 3];
const BUNN = 25;
const LYSHØYDE = 14;
const NEDBRENT_PER_UKE = 2;
const LYSBREDDE = 6;
const AVSTAND = 10;

interface Props {
  dato?: Date;
}

const lagFlamme = (midt: number, topp: number): string =>
  `M${midt} ${topp - 8} C${midt + 2.6} ${topp - 4.5} ${midt + 2} ${topp - 1} ${midt} ${topp - 1} ` +
  `C${midt - 2} ${topp - 1} ${midt - 2.6} ${topp - 4.5} ${midt} ${topp - 8} Z`;

/**
 * Viser fire adventslys der antall tente lys følger søndagene i advent.
 * Lysene som er tent først har brent lengst og er derfor litt kortere.
 */
export const Adventslys = ({ dato }: Props) => {
  const intl = useIntl();
  const [idag] = useState(() => new Date());
  const status = finnAdventsstatus(dato ?? idag);

  if (!status) {
    return null;
  }

  const { antallTenteLys, erJul } = status;
  const beskrivelse = erJul
    ? intl.formatMessage({ id: 'Adventslys.GodJul' })
    : intl.formatMessage({ id: 'Adventslys.SondagIAdvent' }, { antall: antallTenteLys });

  return (
    <span className={styles['adventslys']} role="img" aria-label={beskrivelse} title={beskrivelse}>
      <svg viewBox="0 0 42 28" width="42" height="28" aria-hidden focusable="false">
        <rect x="0" y={BUNN} width="42" height="3" rx="1.5" className={styles['holder']} />
        {LYS.map(indeks => {
          const erTent = indeks < antallTenteLys;
          const høyde = LYSHØYDE - (erTent ? (antallTenteLys - indeks) * NEDBRENT_PER_UKE : 0);
          const x = 2 + indeks * AVSTAND;
          const midt = x + LYSBREDDE / 2;
          const topp = BUNN - høyde;
          return (
            <g key={indeks}>
              <rect x={x} y={topp} width={LYSBREDDE} height={høyde} rx="1" className={styles['lys']} />
              <line x1={midt} y1={topp} x2={midt} y2={topp - 1.5} className={styles['veke']} />
              {erTent && (
                <g className={styles['flamme']} style={{ animationDelay: `${indeks * -0.7}s` }}>
                  <path d={lagFlamme(midt, topp)} className={styles['flammeYtre']} />
                  <ellipse cx={midt} cy={topp - 2.8} rx="0.9" ry="1.6" className={styles['flammeIndre']} />
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </span>
  );
};
