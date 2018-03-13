/**
 * get current time text.
 */

export function now(): string {
  return new Date().toLocaleTimeString('zh-CN');
}

export function today(): string {
  return new Date().toLocaleDateString('zh-CN');
}
