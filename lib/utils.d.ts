export {};

declare global {
  interface String {
    format(arg: string[]): string;
  }
}
