/**
 * get current time text.
 */

export function now() {
  return new Date().toLocaleTimeString('zh-CN');
}

export function today() {
  return new Date().toLocaleDateString('zh-CN');
}
