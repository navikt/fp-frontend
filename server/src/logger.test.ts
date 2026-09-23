import { afterEach, expect, test, vi } from "vitest";

import logger from "./logger.js";

const captureLogLines = () => {
  const lines: Record<string, unknown>[] = [];
  const capture = (chunk: unknown) => {
    for (const line of String(chunk).split("\n")) {
      if (line) {
        lines.push(JSON.parse(line) as Record<string, unknown>);
      }
    }
    return true;
  };
  // winston's Console transport writes to console._stdout when available
  const stdout =
    (console as unknown as { _stdout?: NodeJS.WriteStream })._stdout ??
    process.stdout;
  vi.spyOn(stdout, "write").mockImplementation(capture);
  vi.spyOn(console, "log").mockImplementation(capture);
  return lines;
};

afterEach(() => {
  vi.restoreAllMocks();
});

test("interpolates printf-style arguments from http-proxy-middleware", () => {
  const lines = captureLogLines();

  logger.logger.error(
    "[HPM] Error occurred while proxying request %s to %s [%s] (%s)",
    "fpsak.intern.dev.nav.no/behandlinger",
    "http://fpsak/fpsak/api",
    "ECONNREFUSED",
    "https://nodejs.org/api/errors.html#errors_common_system_errors",
  );

  expect(lines).toHaveLength(1);
  expect(lines[0]!.level).toBe("ERROR");
  expect(lines[0]!.message).toBe(
    "[HPM] Error occurred while proxying request fpsak.intern.dev.nav.no/behandlinger to http://fpsak/fpsak/api [ECONNREFUSED] (https://nodejs.org/api/errors.html#errors_common_system_errors)",
  );
});

test("keeps meta as separate fields", () => {
  const lines = captureLogLines();

  logger.logger.info("200 OK: GET - /fpsak/api/behandlinger (12ms)", {
    callId: "abc-123",
  });

  expect(lines).toHaveLength(1);
  expect(lines[0]!.message).toBe(
    "200 OK: GET - /fpsak/api/behandlinger (12ms)",
  );
  expect(lines[0]!.callId).toBe("abc-123");
});

test("keeps error details from the error helper", () => {
  const lines = captureLogLines();

  logger.error("Oppstart av server feilet", new Error("boom"));

  expect(lines).toHaveLength(1);
  expect(lines[0]!.message).toBe("Oppstart av server feilet: boom");
});

test("logs single-argument messages unchanged, including percent-encoded URLs", () => {
  const lines = captureLogLines();
  const melding =
    "[HPM] GET /fptilbake/api/behandlinger/fagsak-full?saksnummer=1 -> https://fptilbake/fptilbake/api/behandlinger/fagsak-full%3Fsaksnummer=1 [200]";

  logger.logger.info(melding);

  expect(lines).toHaveLength(1);
  expect(lines[0]!.message).toBe(melding);
});
