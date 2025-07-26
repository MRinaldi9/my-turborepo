import { of } from "rxjs";
import { vi } from "vitest";

export const getUser = vi.fn();
export const user$ = of({ id: 1, name: "John Doe" });
