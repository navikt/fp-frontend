import type { ReactNode } from 'react';

import styles from './pyntetTittel.module.css';

const KULEFARGER = ['#d32f2f', '#e8b931', '#9ec9ec'];

const Julekule = ({ farge, indeks }: { farge: string; indeks: number }) => (
  <svg className={styles['julekule']} style={{ animationDelay: `${indeks * -0.7}s` }} viewBox="0 0 20 26">
    <circle cx="10" cy="2.6" r="1.6" fill="none" stroke="#d4af37" strokeWidth="1" />
    <rect x="7" y="3.6" width="6" height="3.4" rx="0.8" fill="#d4af37" />
    <circle cx="10" cy="16" r="9" fill={farge} />
    <path d="M1.6 14 Q10 18 18.4 14" stroke="#fff" strokeOpacity="0.55" strokeWidth="1.2" fill="none" />
    <ellipse cx="6.6" cy="11.8" rx="2.4" ry="1.6" fill="#fff" fillOpacity="0.7" transform="rotate(-30 6.6 11.8)" />
  </svg>
);

const Stjerne = ({ indeks }: { indeks: number }) => (
  <svg className={styles['stjerne']} style={{ animationDelay: `${indeks * 1.5}s` }} viewBox="0 0 24 24">
    <path d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z" fill="#ffd54f" />
  </svg>
);

/**
 * Viser tittelen med julepynt: alle o-er blir til julekuler, og det glitrer en stjerne over hvert ord.
 * Skjermlesere får den vanlige tittelen.
 */
export const PyntetTittel = ({ tittel }: { tittel: string }) => {
  let kuleindeks = 0;
  const ord = tittel.split(' ');

  return (
    <>
      <span className="sr-only">{tittel}</span>
      <span aria-hidden className={styles['tittel']}>
        {ord.map((etOrd, ordindeks) => (
          // eslint-disable-next-line @eslint-react/no-array-index-key -- ordene er faste og kan gjentas
          <span key={ordindeks} className={styles['ord']}>
            <Stjerne indeks={ordindeks} />
            {[...etOrd].map((tegn, tegnindeks): ReactNode => {
              if (tegn === 'o' || tegn === 'O') {
                const farge = KULEFARGER[kuleindeks % KULEFARGER.length] ?? '#d32f2f';
                kuleindeks++;
                // eslint-disable-next-line @eslint-react/no-array-index-key -- tegnene er faste og kan gjentas
                return <Julekule key={tegnindeks} farge={farge} indeks={kuleindeks} />;
              }
              return tegn;
            })}
            {ordindeks < ord.length - 1 && ' '}
          </span>
        ))}
      </span>
    </>
  );
};
