import { writable } from "svelte/store";
import { BookmarkNode } from "../types";

export const tree = writable<BookmarkNode[]>();

export const cpu = writable({});
