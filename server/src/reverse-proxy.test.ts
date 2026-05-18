import http from "node:http";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import express, { Router } from "express";

/**
 * Integration test for reverse-proxy.
 * Verifies:
 * 1. Request path is correctly forwarded to backend
 * 2. Location headers with absolute backend URLs are rewritten
 * 3. OBO token is set as Authorization header
 * 4. Cookie header is stripped
 */

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

// Mock backend that records requests and can return redirects
let backendServer: http.Server;
let backendPort: number;
let lastBackendRequest: { path: string; headers: http.IncomingHttpHeaders };

// Proxy server
let proxyServer: http.Server;
let proxyPort: number;

function createBackendServer(): Promise<{ server: http.Server; port: number }> {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      lastBackendRequest = {
        path: req.url ?? "",
        headers: req.headers,
      };

      // If request path contains "redirect", return a redirect with absolute backend URL
      if (req.url?.includes("redirect")) {
        res.writeHead(302, {
          Location: `http://localhost:${backendPort}/fpsak/api/behandlinger/123`,
        });
        res.end();
        return;
      }

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ ok: true, path: req.url }));
    });

    server.listen(0, () => {
      const addr = server.address();
      const port = typeof addr === "object" ? addr!.port : 0;
      resolve({ server, port });
    });
  });
}

function makeRequest(
  port: number,
  path: string,
  options: { followRedirect?: boolean; headers?: Record<string, string> } = {},
): Promise<{ status: number; headers: http.IncomingHttpHeaders; body: string }> {
  return new Promise((resolve, reject) => {
    const req = http.get(
      {
        hostname: "localhost",
        port,
        path,
        headers: {
          Authorization: "Bearer wonderwall-token",
          cookie: "session=abc123",
          ...options.headers,
        },
      },
      (res) => {
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () =>
          resolve({ status: res.statusCode ?? 0, headers: res.headers, body }),
        );
      },
    );
    req.on("error", reject);
  });
}

describe("reverse-proxy", () => {
  beforeAll(async () => {
    const backend = await createBackendServer();
    backendServer = backend.server;
    backendPort = backend.port;

    // Mock config with dynamic port
    vi.doMock("./config.js", () => ({
      default: {
        reverseProxyConfig: {
          apis: [
            {
              path: "/fpsak",
              url: `http://localhost:${backendPort}/fpsak`,
              scopes: "api://test.teamforeldrepenger.fpsak/.default",
            },
          ],
        },
      },
    }));

    const { setupProxies } = await import("./reverse-proxy.js");
    const app = express();
    const router = Router();
    setupProxies(router);
    app.use(router);

    await new Promise<void>((resolve) => {
      proxyServer = app.listen(0, () => {
        const addr = proxyServer.address();
        proxyPort = typeof addr === "object" ? addr!.port : 0;
        resolve();
      });
    });
  });

  afterAll(() => {
    backendServer?.close();
    proxyServer?.close();
  });

  it("forwards full path to backend", async () => {
    const res = await makeRequest(proxyPort, "/fpsak/api/init-fetch");
    expect(res.status).toBe(200);
    expect(lastBackendRequest.path).toBe("/fpsak/api/init-fetch");
  });

  it("forwards path with query string", async () => {
    const res = await makeRequest(
      proxyPort,
      "/fpsak/api/behandlinger?saksnummer=123",
    );
    expect(res.status).toBe(200);
    expect(lastBackendRequest.path).toBe(
      "/fpsak/api/behandlinger?saksnummer=123",
    );
  });

  it("sets OBO token as Authorization header", async () => {
    await makeRequest(proxyPort, "/fpsak/api/init-fetch");
    expect(lastBackendRequest.headers.authorization).toBe(
      "Bearer mock-obo-token",
    );
  });

  it("strips cookie header", async () => {
    await makeRequest(proxyPort, "/fpsak/api/init-fetch");
    expect(lastBackendRequest.headers.cookie).toBeUndefined();
  });

  it("rewrites Location header on redirect", async () => {
    const res = await makeRequest(proxyPort, "/fpsak/api/redirect-test");
    expect(res.status).toBe(302);
    const location = res.headers.location;
    // Should NOT contain the backend host
    expect(location).not.toContain(`localhost:${backendPort}`);
    // Should contain the path
    expect(location).toContain("/fpsak/api/behandlinger/123");
  });
});
