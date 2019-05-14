// expiresHours 过期时间

export default function addCookie(name, value, expiresHours) {
  //escape编码;escape() 函数可对字符串进行编码,这样就可以在所有的计算机上读取该字符串
  let cookieString = `${name}=${escape(value)}`;
  // 判断是否设置过期时间，0代表关闭浏览器时失败
  if (expiresHours > 0) {
    const date = new Date();
    date.setTime(date.getTime() + expiresHours * 1000);
    cookieString = `${cookieString};expires=${date.toUTCString()}`;//转化时间格式
  }
  document.cookie = cookieString;
}




