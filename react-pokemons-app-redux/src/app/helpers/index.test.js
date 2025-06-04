import { expect, test } from "vitest";
import { formatDate } from "./index.js";

test('formatDate works', () => {
  expect(formatDate(new Date('2023-01-01T00:00:00Z'))).toBe('01/01/2023');
  expect(formatDate(new Date('2023-10-01T00:00:00Z'))).toBe('01/10/2023');
});