export function classNames(...classNames: (string | undefined | boolean)[]): string {
  return classNames.filter((classN) => classN).join(' ');
}
