/**
 * Hjelpefunksjon for å URL-encode norske spesialtegn i URLs for MSW (Mock Service Worker)
 * Dette sikrer at URLs med norske tegn (ø, å, æ, osv.) blir riktig mappt i Storybook
 *
 * @param url - URL-strengen som skal URL-encodes
 * @returns URL-encoded streng
 *
 * @example
 * // Før: '/fplos/api/avdelingsleder/nøkkeltall/behandlinger-under-arbeid'
 * // Etter: '/fplos/api/avdelingsleder/n%C3%B8kkeltall/behandlinger-under-arbeid'
 * const encodedUrl = urlEncodeNorskeBokstaver(LosUrl.HENT_OPPGAVER_FOR_AVDELING);
 */
export const urlEncodeNorskeBokstaver = (url: string): string => {
  return url.replaceAll('ø', '%C3%B8').replaceAll('å', '%C3%A5').replaceAll('æ', '%C3%A6');
};

