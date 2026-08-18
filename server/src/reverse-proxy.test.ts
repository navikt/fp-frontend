/* eslint-disable unicorn/no-top-level-assignment-in-function */
import http from "node:http";

import express, { Router } from "express";
import supertest from "supertest";
import { afterAll, beforeAll, expect, test, vi } from "vitest";

vi.mock("@navikt/oasis", () => ({
  getToken: () => "mock-wonderwall-token",
  requestAzureOboToken: async () => ({ ok: true, token: "mock-obo-token" }),
}));

vi.mock("./logger.js", () => ({
  default: {
    info: () => {},
    warning: () => {},
    error: () => {},
    logger: console,
  },
}));

let app: express.Express;
let backendServer: http.Server;
let backendPort: number;
let lastRequest: { path: string; headers: http.IncomingHttpHeaders };

beforeAll(async () => {
  // Start a simple backend server
  backendServer = http.createServer((request, response) => {
    lastRequest = { path: request.url ?? "", headers: request.headers };
    if (request.url?.includes("redirect")) {
      response.writeHead(302, {
        Location: `http://localhost:${backendPort}/fpsak/api/behandlinger/123`,
      });
      response.end();
      return;
    }
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ ok: true }));
  });
  await new Promise<void>((resolve) => {
    backendServer.listen(0, () => {
      backendPort = (backendServer.address() as { port: number }).port;
      resolve();
    });
  });

  // Mock config with dynamic backend port
  vi.doMock("./config.js", () => ({
    default: {
      reverseProxyConfig: {
        apis: [
          {
            path: "/fpsak/api",
            url: `http://localhost:${backendPort}`,
            scopes: "api://test/.default",
          },
        ],
      },
    },
  }));

  const { setupProxies } = await import("./reverse-proxy.js");
  app = express();
  const router = Router();
  setupProxies(router);
  app.use(router);
});

afterAll(() => backendServer?.close());

test("forwards full path to backend", async () => {
  await supertest(app)
    .get("/fpsak/api/init-fetch")
    .set("Authorization", "Bearer t")
    .expect(200);
  expect(lastRequest.path).toBe("/fpsak/api/init-fetch");
});

test("forwards query string", async () => {
  await supertest(app)
    .get("/fpsak/api/behandlinger?saksnummer=123")
    .set("Authorization", "Bearer t")
    .expect(200);
  expect(lastRequest.path).toBe("/fpsak/api/behandlinger?saksnummer=123");
});

test("sets OBO token as Authorization header", async () => {
  await supertest(app)
    .get("/fpsak/api/init-fetch")
    .set("Authorization", "Bearer t")
    .expect(200);
  expect(lastRequest.headers.authorization).toBe("Bearer mock-obo-token");
});

test("strips cookie header", async () => {
  await supertest(app)
    .get("/fpsak/api/init-fetch")
    .set("Authorization", "Bearer t")
    .set("Cookie", "s=1")
    .expect(200);
  expect(lastRequest.headers.cookie).toBeUndefined();
});

test("rewrites Location header on redirect", async () => {
  const response = await supertest(app)
    .get("/fpsak/api/redirect")
    .set("Authorization", "Bearer t")
    .redirects(0);
  expect(response.status).toBe(302);
  expect(response.headers.location).toBe("/fpsak/api/behandlinger/123");
});

test("does not proxy requests outside /api path", async () => {
  const response = await supertest(app)
    .get("/fpsak/internal/health")
    .set("Authorization", "Bearer t");
  expect(response.status).toBe(404);
});
