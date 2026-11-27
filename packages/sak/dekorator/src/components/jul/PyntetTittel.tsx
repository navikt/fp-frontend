import type { ReactNode } from 'react';

import styles from './pyntetTittel.module.css';

const KULEFARGER = ['#d32f2f', '#e8b931', '#9ec9ec'];

const HENGEBOKSTAVER = new Set(['g', 'p', 'j', 'y', 'q']);

/** En julekule som henger i en tynn tråd fra halen på bokstaven. */
const Julekule = ({ farge, indeks }: { farge: string; indeks: number }) => (
  <svg
    className={styles['julekule']}
    style={{ animationDelay: `${indeks * -0.7}s` }}
    viewBox="0 0 20 36"
    aria-hidden
    focusable="false"
  >
    <line x1="10" y1="0" x2="10" y2="12" stroke="#d4af37" strokeWidth="1" />
    <rect x="7" y="11.5" width="6" height="3.4" rx="0.8" fill="#d4af37" />
    <circle cx="10" cy="24" r="9" fill={farge} />
    <path d="M1.6 22 Q10 26 18.4 22" stroke="#fff" strokeOpacity="0.55" strokeWidth="1.2" fill="none" />
    <ellipse cx="6.6" cy="19.8" rx="2.4" ry="1.6" fill="#fff" fillOpacity="0.7" transform="rotate(-30 6.6 19.8)" />
  </svg>
);

const Stjerne = ({ indeks }: { indeks: number }) => (
  <svg
    className={styles['stjerne']}
    style={{ animationDelay: `${indeks * 1.5}s` }}
    viewBox="0 0 24 24"
    aria-hidden
    focusable="false"
  >
    <path d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z" fill="#ffd54f" />
  </svg>
);

/**
 * Viser tittelen med julepynt: julekuler henger i tråder fra halene på g, p og j, og det glitrer en stjerne over hvert ord.
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
              if (HENGEBOKSTAVER.has(tegn)) {
                const farge = KULEFARGER[kuleindeks % KULEFARGER.length] ?? '#d32f2f';
                kuleindeks++;
                return (
                  // eslint-disable-next-line @eslint-react/no-array-index-key -- tegnene er faste og kan gjentas
                  <span key={tegnindeks} className={styles['krok']}>
                    {tegn}
                    <Julekule farge={farge} indeks={kuleindeks} />
                  </span>
                );
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
