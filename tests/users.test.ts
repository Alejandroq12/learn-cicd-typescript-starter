import { describe, expect, test } from "vitest";
import { IncomingHttpHeaders } from "http";
import { getAPIKey } from '../src/api/auth'

describe("Get API key", () => {
  const headers: IncomingHttpHeaders = {
    authorization: "ApiKey 12345abcdef"
  }

  const headers2: IncomingHttpHeaders = {
    authorization: "Api 12345abcdef"
  }

  test("getAPIKey exists", () => {
    expect(getAPIKey(headers)).toBe("12345abcdef");
  });

  test("getAPIKey is null", () => {
    expect(getAPIKey(headers2)).toBeNull();
  });
});