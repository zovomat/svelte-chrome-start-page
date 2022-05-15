export type BookmarkNode = chrome.bookmarks.BookmarkTreeNode;
export type CpuInfo = chrome.system.cpu.ProcessorUsage;

export type CpuStore = {
  prev?: CpuInfo[];
  history: number[];
};
