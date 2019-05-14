export default function getCookieValue(name) {
  const strCookie = document.cookie;
  const arrCookie = strCookie.split(';');
  for (const cookie of arrCookie) {
    const arr = cookie.split('=');
    if (arr[0] === name) {
      return unescape(arr[1]);//可以使用 unescape() 对 escape() 编码的字符串进行解码。
    }
  }
}
