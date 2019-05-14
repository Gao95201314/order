export default function editCookie(name, value, expiresHours) {
  //escape编码;escape() 函数可对字符串进行编码,这样就可以在所有的计算机上读取该字符串
  let cookieString = `${name}=${escape(value)}`;
  if (expiresHours > 0) {
    const date = new Date();
    date.setTime(date.getTime() + expiresHours * 1000);
    cookieString = `${cookieString};expires=${date.toGMTString()}`
  }
  document.cookie = cookieString;
}
