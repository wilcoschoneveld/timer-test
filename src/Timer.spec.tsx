import { vi, expect, test, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Timer from "./Timer";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.runOnlyPendingTimers();
  vi.useRealTimers();
});

test("timer test", () => {
  render(<Timer></Timer>);

  expect(screen.getByText("Start")).toBeDefined();

  vi.advanceTimersByTime(1000);

  expect(screen.getByText("Next")).toBeDefined();
});

test("sanity check", () => {
  let flag = false;
  setTimeout(() => (flag = true), 1000);

  expect(flag).toBe(false);

  vi.advanceTimersByTime(1000);

  expect(flag).toBe(true);
});
