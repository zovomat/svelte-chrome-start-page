import { writable } from "svelte/store";
import type { BookmarkNode, CpuStore } from "../types";

export const tree = writable<BookmarkNode[]>();

export const cpuInfo = writable<CpuStore>({
  history: Array(100).fill(0),
});

export { theme } from "./theme";
