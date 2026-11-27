import styles from './nisseNavn.module.css';

/** Navnet med en liten nisselue på forbokstaven. */
export const NisseNavn = ({ navn }: { navn: string }) => {
  const [forbokstav, ...resten] = [...navn];
  if (!forbokstav) {
    return navn;
  }
  return (
    <>
      <span className="sr-only">{navn}</span>
      <span className={styles['forbokstav']} aria-hidden>
        <svg className={styles['nisselue']} viewBox="0 0 24 20" aria-hidden focusable="false">
          <path d="M3 15 C5 6 11 1 18 3 C21 4 22.5 7 21.5 11 L19 15 Z" fill="#d32f2f" />
          <path d="M8 6 C11 3.5 14 3 17 3.6" stroke="#ef5350" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <rect x="1.5" y="13.5" width="19" height="5" rx="2.5" fill="#fafafa" />
          <circle cx="21.5" cy="12" r="2.4" fill="#fafafa" />
        </svg>
        {forbokstav}
      </span>
      <span aria-hidden>{resten.join('')}</span>
    </>
  );
};
