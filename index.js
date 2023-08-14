发件人:<由眨眼保存>
快照-内容-位置:https://cdn . jsdelivr . net/GH/HexoPlusPlus/HexoPlusPlus @ main/index . js
主题:
日期:2023年8月14日星期一14:01:40 -0000
哑剧版本：1.0
内容类型:多部分/相关；
类型="文本/html "；
边界="-多部分边界-JV 5 bwzklz 3 erq 74 ugwebukfo 7 eiifveb 78 cvfommo-"


-多方边界-合资企业5bwzklz3erq74ugwebukfo7eiifveb78cvfommo-
内容类型：文本/html
内容标识:<框架-5b8225a1 e6C4足协6a830f387f19b2009d@mhtml。眨眼 >
内容-传输-编码:引用-可打印
内容位置:https://cdn . jsdelivr . net/GH/hexop lusplus/hexop lusplus @ main/index . js

< html > < head > < meta http-equiv =3D"内容类型"内容=3D“文本/html；字符集=
" > </head > < body > < pre style = 3D " > </head > < body > < pre style = 3D " word-wrap:break-word；空白:pr=
" >//const MD5 = 3d require(' MD5 ')>//const MD5 = 3d require(' MD5 ')

//=E5=BC=80=E5=8F=91=E8=80=85=E8=AF=B7=E5=B0=86=E4=B8=8A=E8=BF=B0=E4=BE=9D=
= E8 = B5 =96= E6 = B3 = A8 = E9 =87 = 8A = E5 =8E = BB = E9 =99= A4

常量hpp_CDNver =3D" d4051c3 "
常数const HPP _ ver = 3D " HexoPlusPlus @ 1 . 2 . 0 "hpp =3D" HexoPlusPlus@1.2.0 "3D" HexoPlusPlus@1.2.0 "3D" HexoPlusPlus@1.2.0 "HPP _ ver =3D" HexoPlusPlus @ 1。2 .0 "
constconst dev_mode_branch =3D"距离"开发模式分支=3d "距离"
letlet hpp_logstatus =3D 0hpp_logstatus = 3D 0


函数getJsonLength(function getJsonLength(jsonData) {) {

var  var jsonLength =3D 0;jsonLength = 3D 0；

for(  for (var item in jsonData) {){

    jsonLength++;

  }

  return jsonLength;
}

addEventListener("fetch", event =3D&gt; {
  event.respondWith(handleRequest(event.request))
})
function getCookie(request, name) {
  let result =3D ""
  const cookieString =3D request.headers.get("Cookie")
  if (cookieString) {
    const cookies =3D cookieString.split(";")
    cookies.forEach(cookie =3D&gt; {
      const cookiePair =3D cookie.split("=3D", 2)
      const cookieName =3D cookiePair[0].trim()
      if (cookieName =3D=3D=3D name) {
        const cookieVal =3D cookiePair[1]
        result =3D cookieVal
      }
    })
  }
  return result
}
!function (n) { "use strict"; function d(n, t) { var r =3D (65535 &amp; n) =
+ (65535 &amp; t); return (n &gt;&gt; 16) + (t &gt;&gt; 16) + (r &gt;&gt; 1=
6) &lt;&lt; 16 | 65535 &amp; r } function f(n, t, r, e, o, u) { return d((c=
 =3D d(d(t, n), d(e, u))) &lt;&lt; (f =3D o) | c &gt;&gt;&gt; 32 - f, r); v=
ar c, f } function l(n, t, r, e, o, u, c) { return f(t &amp; r | ~t &amp; e=
, n, t, o, u, c) } function v(n, t, r, e, o, u, c) { return f(t &amp; e | r=
 &amp; ~e, n, t, o, u, c) } function g(n, t, r, e, o, u, c) { return f(t ^ =
r ^ e, n, t, o, u, c) } function m(n, t, r, e, o, u, c) { return f(r ^ (t |=
 ~e), n, t, o, u, c) } function i(n, t) { var r, e, o, u; n[t &gt;&gt; 5] |=
=3D 128 &lt;&lt; t % 32, n[14 + (t + 64 &gt;&gt;&gt; 9 &lt;&lt; 4)] =3D t; =
for (var c =3D 1732584193, f =3D -271733879, i =3D -1732584194, a =3D 27173=
3878, h =3D 0; h &lt; n.length; h +=3D 16)c =3D l(r =3D c, e =3D f, o =3D i=
, u =3D a, n[h], 7, -680876936), a =3D l(a, c, f, i, n[h + 1], 12, -3895645=
86), i =3D l(i, a, c, f, n[h + 2], 17, 606105819), f =3D l(f, i, a, c, n[h =
+ 3], 22, -1044525330), c =3D l(c, f, i, a, n[h + 4], 7, -176418897), a =3D=
 l(a, c, f, i, n[h + 5], 12, 1200080426), i =3D l(i, a, c, f, n[h + 6], 17,=
 -1473231341), f =3D l(f, i, a, c, n[h + 7], 22, -45705983), c =3D l(c, f, =
i, a, n[h + 8], 7, 1770035416), a =3D l(a, c, f, i, n[h + 9], 12, -19584144=
17), i =3D l(i, a, c, f, n[h + 10], 17, -42063), f =3D l(f, i, a, c, n[h + =
11], 22, -1990404162), c =3D l(c, f, i, a, n[h + 12], 7, 1804603682), a =3D=
 l(a, c, f, i, n[h + 13], 12, -40341101), i =3D l(i, a, c, f, n[h + 14], 17=
, -1502002290), c =3D v(c, f =3D l(f, i, a, c, n[h + 15], 22, 1236535329), =
i, a, n[h + 1], 5, -165796510), a =3D v(a, c, f, i, n[h + 6], 9, -106950163=
2), i =3D v(i, a, c, f, n[h + 11], 14, 643717713), f =3D v(f, i, a, c, n[h]=
, 20, -373897302), c =3D v(c, f, i, a, n[h + 5], 5, -701558691), a =3D v(a,=
 c, f, i, n[h + 10], 9, 38016083), i =3D v(i, a, c, f, n[h + 15], 14, -6604=
78335), f =3D v(f, i, a, c, n[h + 4], 20, -405537848), c =3D v(c, f, i, a, =
n[h + 9], 5, 568446438), a =3D v(a, c, f, i, n[h + 14], 9, -1019803690), i =
=3D v(i, a, c, f, n[h + 3], 14, -187363961), f =3D v(f, i, a, c, n[h + 8], =
20, 1163531501), c =3D v(c, f, i, a, n[h + 13], 5, -1444681467), a =3D v(a,=
 c, f, i, n[h + 2], 9, -51403784), i =3D v(i, a, c, f, n[h + 7], 14, 173532=
8473), c =3D g(c, f =3D v(f, i, a, c, n[h + 12], 20, -1926607734), i, a, n[=
h + 5], 4, -378558), a =3D g(a, c, f, i, n[h + 8], 11, -2022574463), i =3D =
g(i, a, c, f, n[h + 11], 16, 1839030562), f =3D g(f, i, a, c, n[h + 14], 23=
, -35309556), c =3D g(c, f, i, a, n[h + 1], 4, -1530992060), a =3D g(a, c, =
f, i, n[h + 4], 11, 1272893353), i =3D g(i, a, c, f, n[h + 7], 16, -1554976=
32), f =3D g(f, i, a, c, n[h + 10], 23, -1094730640), c =3D g(c, f, i, a, n=
[h + 13], 4, 681279174), a =3D g(a, c, f, i, n[h], 11, -358537222), i =3D g=
(i, a, c, f, n[h + 3], 16, -722521979), f =3D g(f, i, a, c, n[h + 6], 23, 7=
6029189), c =3D g(c, f, i, a, n[h + 9], 4, -640364487), a =3D g(a, c, f, i,=
 n[h + 12], 11, -421815835), i =3D g(i, a, c, f, n[h + 15], 16, 530742520),=
 c =3D m(c, f =3D g(f, i, a, c, n[h + 2], 23, -995338651), i, a, n[h], 6, -=
198630844), a =3D m(a, c, f, i, n[h + 7], 10, 1126891415), i =3D m(i, a, c,=
 f, n[h + 14], 15, -1416354905), f =3D m(f, i, a, c, n[h + 5], 21, -5743405=
5), c =3D m(c, f, i, a, n[h + 12], 6, 1700485571), a =3D m(a, c, f, i, n[h =
+ 3], 10, -1894986606), i =3D m(i, a, c, f, n[h + 10], 15, -1051523), f =3D=
 m(f, i, a, c, n[h + 1], 21, -2054922799), c =3D m(c, f, i, a, n[h + 8], 6,=
 1873313359), a =3D m(a, c, f, i, n[h + 15], 10, -30611744), i =3D m(i, a, =
c, f, n[h + 6], 15, -1560198380), f =3D m(f, i, a, c, n[h + 13], 21, 130915=
1649), c =3D m(c, f, i, a, n[h + 4], 6, -145523070), a =3D m(a, c, f, i, n[=
h + 11], 10, -1120210379), i =3D m(i, a, c, f, n[h + 2], 15, 718787259), f =
=3D m(f, i, a, c, n[h + 9], 21, -343485551), c =3D d(c, r), f =3D d(f, e), =
i =3D d(i, o), a =3D d(a, u); return [c, f, i, a] } function a(n) { for (va=
r t =3D "", r =3D 32 * n.length, e =3D 0; e &lt; r; e +=3D 8)t +=3D String.=
fromCharCode(n[e &gt;&gt; 5] &gt;&gt;&gt; e % 32 &amp; 255); return t } fun=
ction h(n) { var t =3D []; for (t[(n.length &gt;&gt; 2) - 1] =3D void 0, e =
=3D 0; e &lt; t.length; e +=3D 1)t[e] =3D 0; for (var r =3D 8 * n.length, e=
 =3D 0; e &lt; r; e +=3D 8)t[e &gt;&gt; 5] |=3D (255 &amp; n.charCodeAt(e /=
 8)) &lt;&lt; e % 32; return t } function e(n) { for (var t, r =3D "0123456=
789abcdef", e =3D "", o =3D 0; o &lt; n.length; o +=3D 1)t =3D n.charCodeAt=
(o), e +=3D r.charAt(t &gt;&gt;&gt; 4 &amp; 15) + r.charAt(15 &amp; t); ret=
urn e } function r(n) { return unescape(encodeURIComponent(n)) } function o=
(n) { return a(i(h(t =3D r(n)), 8 * t.length)); var t } function u(n, t) { =
return function (n, t) { var r, e, o =3D h(n), u =3D [], c =3D []; for (u[1=
5] =3D c[15] =3D void 0, 16 &lt; o.length &amp;&amp; (o =3D i(o, 8 * n.leng=
th)), r =3D 0; r &lt; 16; r +=3D 1)u[r] =3D 909522486 ^ o[r], c[r] =3D 1549=
556828 ^ o[r]; return e =3D i(u.concat(h(t)), 512 + 8 * t.length), a(i(c.co=
ncat(e), 640)) }(r(n), r(t)) } function t(n, t, r) { return t ? r ? u(t, n)=
 : e(u(t, n)) : r ? o(n) : e(o(n)) } "function" =3D=3D typeof define &amp;&=
amp; define.amd ? define(function () { return t }) : "object" =3D=3D typeof=
 module &amp;&amp; module.exports ? module.exports =3D t : n.md5 =3D t }(th=
is);
async function handleRequest(request) {
  try {
    const req =3D request
    const urlStr =3D req.url
    const urlObj =3D new URL(urlStr)
    const path =3D urlObj.href.substr(urlObj.origin.length)
    const domain =3D (urlStr.split('/'))[2]
    const username =3D hpp_username.split(",");
    const password =3D hpp_password.split(",");
    //console.log(hpp_logstatus)
    for (var i =3D 0; i &lt; getJsonLength(username); i++) {
      if (getCookie(request, "password") =3D=3D md5(password[i]) &amp;&amp;=
 getCookie(request, "username") =3D=3D md5(username[i])) {
        hpp_logstatus =3D 1
      }
    }

    if (path.startsWith('/hpp/admin')) {
      if (hpp_logstatus =3D=3D 1) {
        const hpp_config =3D await KVNAME.get("hpp_config");
        if (hpp_config =3D=3D=3D null) {
          if (path =3D=3D '/hpp/admin/api/upconfig') {
            const config_r =3D JSON.stringify(await request.text())
            await KVNAME.put("hpp_config", config_r)
            return new Response("OK")
          } else {

            let hpp_installhtml =3D `&lt;!doctype html&gt;
&lt;html lang=3D"zh"&gt;
&lt;head&gt;
	&lt;meta charset=3D"UTF-8"&gt;
	&lt;meta http-equiv=3D"X-UA-Compatible" content=3D"IE=3Dedge,chrome=3D1"&g=
t;=20
	&lt;meta content=3D"width=3Ddevice-width, initial-scale=3D1.0, maximum-sca=
le=3D1.0, user-scalable=3D0" name=3D"viewport" /&gt;
	&lt;title&gt;${hpp_ver}=E5=AE=89=E8=A3=85&lt;/title&gt;
	&lt;link rel=3D"stylesheet" href=3D"https://cdn.jsdelivr.net/gh/HexoPlusPl=
us/HexoPlusPlus@${hpp_CDNver}/install.css"&gt;
&lt;/head&gt;
&lt;body&gt;
		&lt;div class=3D"cont_principal"&gt;
		=09
		  &lt;div class=3D"cont_join  "&gt;
		    &lt;div class=3D"cont_letras"&gt;
		      &lt;p&gt;Hexo&lt;/p&gt;
		      &lt;p&gt;Plus&lt;/p&gt;
		      &lt;p&gt;plus&lt;/p&gt;
		    &lt;/div&gt;

		    &lt;div class=3D"cont_form_join" style=3D"overflow-x: auto;"&gt;
		      &lt;h2&gt;=E5=AE=89=E8=A3=85=E4=BF=A1=E6=81=AF&lt;/h2&gt;
			  &lt;h3 style=3D"color:#fff"&gt;=E5=9F=BA=E6=9C=AC=E4=BF=A1=E6=81=AF&lt=
;/h3&gt;
		      &lt;p&gt;=E5=9F=9F=E5=90=8D:&lt;/p&gt;   =20
		      &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_domain" plac=
eholder=3D"xxx.xxx.com"/&gt;
		      &lt;p&gt;=E5=A4=B4=E5=83=8F=E5=9C=B0=E5=9D=80:&lt;/p&gt;   =20
		      &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_userimage" p=
laceholder=3D"https://cdn.jsdelivr.net/gh/ChenYFan/CDN/img/avatar.png"/&gt;
		      &lt;p&gt;=E6=A0=87=E9=A2=98:&lt;/p&gt;   =20
		      &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_title" place=
holder=3D"XXX=E7=9A=84=E5=90=8E=E5=8F=B0"/&gt;
		      &lt;p&gt;icon=E5=9C=B0=E5=9D=80:&lt;/p&gt;   =20
		      &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_usericon" pl=
aceholder=3D"https://cdn.jsdelivr.net/gh/ChenYFan/chenyfan.github.io/favico=
n.ico"/&gt;
		      &lt;p&gt;=E8=B7=A8=E5=9F=9F=E8=AF=B7=E6=B1=82:&lt;/p&gt;   =20
			  &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_cors" placehold=
er=3D"*"/&gt;
			  &lt;h3 style=3D"color:#fff"&gt;=E9=9D=A2=E6=9D=BF=E9=85=8D=E7=BD=AE&lt=
;/h3&gt;
			  &lt;p&gt;OwOJSON=E5=9C=B0=E5=9D=80:&lt;/p&gt;   =20
              &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_OwO" p=
laceholder=3D"https://cdn.jsdelivr.net/gh/ChenYFan/CDN@ca3ea6c/assets/list.=
json" /&gt;
			  &lt;p&gt;=E9=9D=A2=E6=9D=BF=E8=83=8C=E6=99=AF=E5=9B=BE=E7=89=87:&lt;/p=
&gt;   =20
              &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_back" =
placeholder=3D"https://cdn.jsdelivr.net/gh/ChenYFan-Tester/DailyGet@gh-page=
s/bingpic/bing.jpg" /&gt;
			  &lt;p&gt;=E6=87=92=E5=8A=A0=E8=BD=BD=E5=9B=BE=E7=89=87:&lt;/p&gt;   =
=20
              &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_lazy_i=
mg" placeholder=3D"https://cdn.jsdelivr.net/gh/ChenYFan/blog@master/themes/=
fluid/source/img/loading.gif" /&gt;
			  &lt;p&gt;=E9=AB=98=E4=BA=AE=E6=A0=B7=E5=BC=8F:&lt;/p&gt;   =20
              &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_highli=
ght_style" placeholder=3D"github" /&gt;
			 =20
			  &lt;p&gt;=E9=9D=A2=E6=9D=BF=E9=80=89=E9=A1=B9=E5=8D=A1=E9=A2=9C=E8=89=
=B2:&lt;/p&gt;   =20
              &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_color"=
 placeholder=3D"azure" /&gt;
			  &lt;p&gt;=E9=9D=A2=E6=9D=BF=E9=80=89=E9=A1=B9=E6=A1=86=E9=A2=9C=E8=89=
=B2:&lt;/p&gt;   =20
              &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_bg_col=
or" placeholder=3D"black" /&gt;
			  &lt;p&gt;=E9=9D=A2=E6=9D=BF=E4=B8=BB=E9=A2=98=E8=89=B2:&lt;/p&gt;   =
=20
              &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_theme_=
mode" placeholder=3D"light" /&gt;
			 =20
			  &lt;p&gt;=E5=88=97=E8=A1=A8=E9=99=90=E5=88=B6=E6=95=B0=E9=87=8F:&lt;/p=
&gt;   =20
              &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_page_l=
imit" placeholder=3D"10" /&gt;
			 =20
			  &lt;h3 style=3D"color:#fff"&gt;Github=E4=BF=A1=E6=81=AF&lt;/h3&gt;
		      &lt;p&gt;Github=E6=96=87=E6=A1=A3=E4=BB=93=E5=BA=93Token:&lt;/p&gt;=
   =20
		      &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_githubdoctok=
en" placeholder=3D"*********"/&gt;
			  &lt;p&gt;Github=E5=9B=BE=E7=89=87=E4=BB=93=E5=BA=93Token:&lt;/p&gt;   =
=20
		      &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_githubimaget=
oken" placeholder=3D"*********"/&gt;
			  &lt;p&gt;Github=E6=96=87=E6=A1=A3=E4=BB=93=E5=BA=93=E7=94=A8=E6=88=B7=
=E5=90=8D:&lt;/p&gt;   =20
		      &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_githubdocuse=
rname" placeholder=3D"XXX" /&gt;
			  &lt;p&gt;Github=E5=9B=BE=E7=89=87=E4=BB=93=E5=BA=93=E7=94=A8=E6=88=B7=
=E5=90=8D:&lt;/p&gt;   =20
		      &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_githubimageu=
sername" placeholder=3D"XXX" /&gt;
			  &lt;p&gt;Github=E6=96=87=E6=A1=A3=E4=BB=93=E5=BA=93=E5=90=8D:&lt;/p&gt=
;   =20
		      &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_githubdocrep=
o" placeholder=3D"blog" /&gt;
			  &lt;p&gt;Github=E5=9B=BE=E7=89=87=E4=BB=93=E5=BA=93=E5=90=8D:&lt;/p&gt=
;   =20
		      &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_githubimager=
epo" placeholder=3D"image" /&gt;
			  &lt;p&gt;Github=E6=96=87=E6=A1=A3=E4=BB=93=E5=BA=93=E6=A0=B9=E7=9B=AE=
=E5=BD=95:&lt;/p&gt;   =20
		      &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_githubdocroo=
t" placeholder=3D"/" /&gt;
			  &lt;p&gt;Github=E5=9B=BE=E7=89=87=E4=BB=93=E5=BA=93=E8=B7=AF=E5=BE=84:=
&lt;/p&gt;   =20
		      &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_githubimagep=
ath" placeholder=3D"/" /&gt;
			  &lt;p&gt;Github=E6=96=87=E6=A1=A3=E4=BB=93=E5=BA=93=E5=88=86=E6=94=AF:=
&lt;/p&gt;   =20
		      &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_githubdocbra=
nch" placeholder=3D"master" /&gt;
			  &lt;p&gt;Github=E5=9B=BE=E7=89=87=E4=BB=93=E5=BA=93=E5=88=86=E6=94=AF:=
&lt;/p&gt;   =20
		      &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_githubimageb=
ranch" placeholder=3D"main" /&gt;
			  &lt;h3 style=3D"color:#fff"&gt;=E9=99=84=E5=8A=A0=E5=8A=9F=E8=83=BD&lt=
;/h3&gt;
			  &lt;p&gt;=E6=98=AF=E5=90=A6=E8=87=AA=E5=8A=A8=E7=AD=BE=E5=88=B0=E3=80=
=90=E6=98=AF=E4=B8=BATrue=EF=BC=8C=E5=90=A6=E4=B8=BAFalse=E3=80=91:&lt;/p&g=
t;   =20
		      &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_autodate" pl=
aceholder=3D"False" /&gt;
              &lt;h3 style=3D"color:#fff"&gt;CloudFlare=E8=AE=BF=E9=97=AE=
=E5=8A=9F=E8=83=BD&lt;/h3&gt;
			  &lt;p&gt;Global API Key:&lt;/p&gt;   =20
		      &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_CF_Auth_Key"=
 placeholder=3D"***" /&gt;
              &lt;p&gt;=E7=9B=AE=E6=A0=87Workers=E5=90=8D=E7=A7=B0:&lt;/p&g=
t;   =20
		      &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_script_name"=
 placeholder=3D"HexoPlusPlus" /&gt;
              &lt;p&gt;Workers=E8=B4=A6=E6=88=B7ID:&lt;/p&gt;   =20
		      &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_account_iden=
tifier" placeholder=3D"***" /&gt;
              &lt;p&gt;=E8=B4=A6=E6=88=B7=E7=99=BB=E5=BD=95=E9=82=AE=E7=AE=
=B1:&lt;/p&gt;   =20
		      &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_Auth_Email" =
placeholder=3D"ABC@DEF.com" /&gt;
              &lt;h3 style=3D"color:#fff"&gt;Twikoo=E5=8A=A0=E5=BC=BA&lt;/h=
3&gt;
              &lt;p&gt;Twikoo=E7=8E=AF=E5=A2=83ID:&lt;/p&gt;   =20
              &lt;input type=3D"text" class=3D"input_text" id=3D"hpp_twikoo=
_envId" placeholder=3D"xxx" /&gt;
			 =20
		    &lt;/div&gt;
		 =20
		    &lt;div class=3D"cont_join_form_finish" style=3D"display:none"&gt;
		      &lt;h2&gt;=E5=AE=8C=E6=88=90&lt;/h2&gt; =20
		    &lt;/div&gt;

		    &lt;div class=3D"cont_btn_join"&gt;
		      &lt;a href=3D"#" onclick=3D'start()' id=3D"butttt"&gt;=E5=BC=80=E5=
=A7=8B=E9=85=8D=E7=BD=AE&lt;/a&gt;
		    &lt;/div&gt;
		  &lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
=09
	&lt;script src=3D"https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@${=
hpp_CDNver}/install.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;`
            return new Response(hpp_installhtml, {
              headers: { "content-type": "text/html;charset=3DUTF-8" }
            })
          }
        } else {

          const config =3D JSON.parse(JSON.parse(hpp_config))
          const hpp_domain =3D config["hpp_domain"]
          const hpp_userimage =3D config["hpp_userimage"]
          const hpp_title =3D config["hpp_title"]
          const hpp_usericon =3D config["hpp_usericon"]
          const hpp_cors =3D config["hpp_cors"]
          const hpp_githubdoctoken =3D config["hpp_githubdoctoken"]
          const hpp_githubimagetoken =3D config["hpp_githubimagetoken"]
          const hpp_githubdocusername =3D config["hpp_githubdocusername"]
          const hpp_githubdocrepo =3D config["hpp_githubdocrepo"]
          const hpp_githubdocroot =3D config["hpp_githubdocroot"]
          const hpp_githubdocbranch =3D config["hpp_githubdocbranch"]
          const hpp_githubimageusername =3D config["hpp_githubimageusername=
"]
          const hpp_githubimagerepo =3D config["hpp_githubimagerepo"]
          const hpp_githubimagepath =3D config["hpp_githubimagepath"]
          const hpp_githubimagebranch =3D config["hpp_githubimagebranch"]
          const hpp_autodate =3D config["hpp_autodate"]
          const hpp_account_identifier =3D config["hpp_account_identifier"]
          const hpp_script_name =3D config["hpp_script_name"]
          const hpp_CF_Auth_Key =3D config["hpp_CF_Auth_Key"]
          const hpp_Auth_Email =3D config["hpp_Auth_Email"]
          const hpp_twikoo_envId =3D config["hpp_twikoo-envId"]
          const hpp_OwO =3D config["hpp_OwO"]
          const hpp_back =3D config["hpp_back"]
          const hpp_lazy_img =3D config["hpp_lazy_img"]
          const hpp_highlight_style =3D config["hpp_highlight_style"]
          const hpp_plugin_js =3D config["hpp_plugin_js"]
          const hpp_plugin_css =3D config["hpp_plugin_css"]
          const hpp_githubdocpath =3D hpp_githubdocroot + "source/_posts/"
          const hpp_githubdocdraftpath =3D hpp_githubdocroot + "source/_dra=
fts/"
          const githubdocdraftpath =3D encodeURI(hpp_githubdocdraftpath)
          const githubdocpath =3D encodeURI(hpp_githubdocpath)
          const githubimagepath =3D encodeURI(hpp_githubimagepath)
		  const hpp_color=3Dconfig["hpp_color"]=3D=3Dundefined?"rose":config["hpp=
_color"]
		  const hpp_bg_color=3Dconfig["hpp_bg_color"]=3D=3Dundefined?"white":conf=
ig["hpp_bg_color"]
		  const hpp_theme_mode=3Dconfig["hpp_theme_mode"]=3D=3D"dark"?"dark":"lig=
ht"
		  const hpp_page_limit=3Dconfig["hpp_page_limit"]=3D=3Dundefined?"10":con=
fig["hpp_page_limit"]
          if (hpp_autodate =3D=3D "True") {
            const now =3D Date.now(new Date())
            await KVNAME.put("hpp_activetime", now)
            const hpp_kvwait =3D Date.now(new Date()) - now
          }
          const hpp_githubgetimageinit =3D {
            method: "GET",
            headers: {
              "content-type": "application/json;charset=3DUTF-8",
              "user-agent": hpp_ver,
              "Authorization": "token " + hpp_githubimagetoken
            },
          }
          const hpp_githubgetdocinit =3D {
            method: "GET",
            headers: {
              "content-type": "application/json;charset=3DUTF-8",
              "user-agent": hpp_ver,
              "Authorization": "token " + hpp_githubdoctoken
            },
          }
          /*=E4=B8=BB=E9=9D=A2=E6=9D=BF*/
          if (path.startsWith("/hpp/admin/dash")) {
            let hpp_home_act =3D ""
            let hpp_edit_act =3D ""
            let hpp_talk_act =3D ""
            let hpp_docs_man_act =3D ""
            let hpp_img_man_act =3D ""
			let hpp_tool_act =3D ""
            let hpp_set_act =3D ""
            let hpp_js =3D ""
            let hpp_init =3D `&lt;div class=3D"content"&gt;&lt;div class=3D=
"container-fluid"&gt;&lt;div class=3D"row"&gt;&lt;div class=3D"col-md-12"&g=
t;&lt;div class=3D"card"&gt;&lt;div class=3D"card-header card-header-primar=
y"&gt;&lt;h4 class=3D"card-title"&gt;404&lt;/h4&gt;&lt;p class=3D"card-cate=
gory"&gt;=E6=88=91=E4=BB=AC=E4=B8=8D=E7=9F=A5=E9=81=93=E6=82=A8=E7=9A=84=E9=
=9C=80=E6=B1=82&lt;/p&gt;&lt;/div&gt;&lt;/br&gt;&lt;div class=3D"card-body"=
&gt;&lt;a href=3D"/hpp/admin/dash/home"&gt;=E5=9B=9E=E5=88=B0=E4=B8=BB=E9=
=A1=B5&lt;/a&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt=
;&lt;/div&gt;`
            if (path =3D=3D "/hpp/admin/dash/home") {
              hpp_home_act =3D " active"
              hpp_init =3D `&lt;div class=3D"content"&gt;
        &lt;div class=3D"container-fluid"&gt;
          &lt;div class=3D"row"&gt;
            &lt;div class=3D"col-lg-6 col-md-6 col-sm-6"&gt;
              &lt;div class=3D"card card-stats"&gt;
                &lt;div class=3D"card-header card-header-warning card-heade=
r-icon"&gt;
                  &lt;div class=3D"card-icon"&gt;
                    &lt;i class=3D"fa fa-file"&gt;&lt;/i&gt;
                  &lt;/div&gt;
                  &lt;p class=3D"card-category"&gt;=E6=80=BB=E6=96=87=E6=A1=
=A3=E6=95=B0&lt;/p&gt;
                  &lt;h3 class=3D"card-title" id=3D"document_all"&gt;NaN
                    &lt;small&gt;=E4=B8=AA&lt;/small&gt;
                  &lt;/h3&gt;
                &lt;/div&gt;
                &lt;div class=3D"card-footer"&gt;
				&lt;div class=3D"stats"&gt;
                    &lt;a href=3D"/hpp/admin/dash/edit" style=3D"color: #cf=
6ae0 !important"&gt;&lt;i class=3D"fa fa-pencil"&gt;&lt;/i&gt;=E5=89=8D=E5=
=BE=80=E7=AE=A1=E7=90=86&lt;/a&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=3D"col-lg-6 col-md-6 col-sm-6"&gt;
              &lt;div class=3D"card card-stats"&gt;
                &lt;div class=3D"card-header card-header-success card-heade=
r-icon"&gt;
                  &lt;div class=3D"card-icon"&gt;
                    &lt;i class=3D"fa fa-image"&gt;&lt;/i&gt;
                  &lt;/div&gt;
                  &lt;p class=3D"card-category"&gt;=E6=80=BB=E5=9B=BE=E7=89=
=87=E6=95=B0&lt;/p&gt;
                  &lt;h3 class=3D"card-title" id=3D"img_all"&gt;NaN
                    &lt;small&gt;=E5=BC=A0&lt;/small&gt;
                  &lt;/h3&gt;
                &lt;/div&gt;
                &lt;div class=3D"card-footer"&gt;
				&lt;div class=3D"stats"&gt;
                    &lt;a href=3D"/hpp/admin/dash/img_man" style=3D"color: =
#cf6ae0 !important"&gt;&lt;i class=3D"fa fa-upload"&gt;&lt;/i&gt;=E5=89=8D=
=E5=BE=80=E7=AE=A1=E7=90=86&lt;/a&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=3D"col-lg-6 col-md- col-sm-6"&gt;
              &lt;a href=3D"javascript:checkUpdate()"&gt;
              &lt;div class=3D"card card-stats"&gt;
                &lt;div class=3D"card-header card-header-info card-header-i=
con"&gt;
                  &lt;div class=3D"card-icon"&gt;
                    &lt;i class=3D"fa fa-upload"&gt;&lt;/i&gt;
                  &lt;/div&gt;
                  &lt;p class=3D"card-category"&gt;=E5=BD=93=E5=89=8D=E7=89=
=88=E6=9C=AC&lt;/p&gt;
                  &lt;h3 class=3D"card-title"&gt;${hpp_ver}&lt;/h3&gt;
                &lt;/div&gt;
                &lt;div class=3D"card-footer"&gt;
                  &lt;div class=3D"stats"&gt;
                    &lt;i class=3D"material-icons"&gt;update&lt;/i&gt;=E7=
=82=B9=E5=87=BB=E6=9B=B4=E6=96=B0
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/a&gt;
            &lt;/div&gt;
           =20
           =20
		=09
			&lt;div class=3D"col-lg-6 col-md-6 col-sm-6"&gt;
              &lt;a href=3D"https://jq.qq.com/?_wv=3D1027&amp;k=3DrAcnhzqK"=
 target=3D"_blank"&gt;
              &lt;div class=3D"card card-stats"&gt;
                &lt;div class=3D"card-header card-header-success card-heade=
r-icon"&gt;
                  &lt;div class=3D"card-icon"&gt;
                    &lt;i class=3D"fa fa-qq"&gt;&lt;/i&gt;
                  &lt;/div&gt;
                  &lt;h3 class=3D"card-title"&gt;QQ=E7=BE=A4=E8=81=8A=E5=A4=
=A9=E5=8E=BB=EF=BC=9F&lt;/h3&gt;
                &lt;/div&gt;
                &lt;div class=3D"card-footer"&gt;
				=E8=AF=9A=E8=81=98=E5=B0=8F=E7=99=BD=E9=BC=A0(bushi
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/a&gt;
            &lt;/div&gt;
		=09
			&lt;div class=3D"col-lg-6 col-md-6 col-sm-6"&gt;
              &lt;a href=3D"https://hexoplusplus.js.org" target=3D"_blank"&=
gt;
              &lt;div class=3D"card card-stats"&gt;
                &lt;div class=3D"card-header card-header-normal card-header=
-icon"&gt;
                  &lt;div class=3D"card-icon"&gt;
                    &lt;i class=3D"fa fa-book"&gt;&lt;/i&gt;
                  &lt;/div&gt;
                  &lt;h3 class=3D"card-title"&gt;=E6=96=87=E6=A1=A3=E5=9C=
=B0=E5=9D=80&lt;/h3&gt;
                &lt;/div&gt;
                &lt;div class=3D"card-footer"&gt;=E6=9C=89=E5=A4=9A=E5=B0=
=91=E4=BA=BA=E6=B2=A1=E7=9C=8B=E6=96=87=E6=A1=A3=E6=9D=A5=E6=8F=90issues=EF=
=BC=9F
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/a&gt;
            &lt;/div&gt;
		=09
			&lt;div class=3D"col-lg-6 col-md-6 col-sm-6"&gt;
              &lt;a href=3D"https://github.com/HexoPlusPlus/HexoPlusPlus" t=
arget=3D"_blank"&gt;
              &lt;div class=3D"card card-stats"&gt;
                &lt;div class=3D"card-header card-header-primary card-heade=
r-icon"&gt;
                  &lt;div class=3D"card-icon"&gt;
                    &lt;i class=3D"fa fa-github"&gt;&lt;/i&gt;
                  &lt;/div&gt;
                  &lt;h3 class=3D"card-title"&gt;Github&lt;/h3&gt;
                &lt;/div&gt;
                &lt;div class=3D"card-footer"&gt;
				=E6=AC=A2=E8=BF=8EPR
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/a&gt;
            &lt;/div&gt;
		=09
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;`
              hpp_js =3D `&lt;script src=3D'https://cdn.jsdelivr.net/gh/Hex=
oPlusPlus/HexoPlusPlus@${hpp_CDNver}/home.js'&gt;&lt;/script&gt;`
            }
            if (path =3D=3D "/hpp/admin/dash/edit") {
              hpp_edit_act =3D " active"
              hpp_init =3D `&lt;div class=3D"content"&gt;
        &lt;div class=3D"container-fluid"&gt;
          &lt;div class=3D"row"&gt;
            &lt;div class=3D"col-md-12"&gt;
              &lt;div class=3D"card"&gt;
                &lt;div class=3D"card-header card-header-primary"&gt;
                  &lt;h4 class=3D"card-title"&gt;=E4=B9=A6=E5=86=99&lt;/h4&=
gt;
                  &lt;p class=3D"card-category"&gt;Wrtie&lt;/p&gt;
                &lt;/div&gt;
              &lt;/br&gt;
                &lt;div class=3D"card-body"&gt;
                          &lt;div class=3D"col-md-8"&gt;
                              &lt;label class=3D"bmd-label-floating"&gt;=E6=
=96=87=E4=BB=B6=E9=80=89=E6=8B=A9&lt;/label&gt;
                              &lt;select id=3D"choo" class=3D"form-control =
form-control-chosen" style=3D"display: inline;"&gt;&lt;/select&gt;
							  &lt;button type=3D"submit" class=3D"btn btn-success" onclick=3D"ja=
vascript:hpp_get_md()"&gt;=E8=8E=B7=E5=8F=96=E6=96=87=E7=AB=A0&lt;/button&g=
t;
							  &lt;button type=3D"submit" class=3D"btn btn-normal" onclick=3D"jav=
ascript:hpp_get_draft()"&gt;=E8=8E=B7=E5=8F=96=E8=89=B9=E7=A8=BF&lt;/button=
&gt;
							  &lt;button type=3D"submit" class=3D"btn btn-danger" onclick=3D"jav=
ascript:hpp_del_index()"&gt;=E5=BE=92=E6=89=8B=E6=B8=85=E7=B4=A2=E5=BC=95&l=
t;/button&gt;
                          &lt;/div&gt;
                       =20
                        &lt;div class=3D"row"&gt;
                          &lt;div class=3D"col-md-12"&gt;
                            &lt;div class=3D"form-group"&gt;
                              &lt;label&gt;=E5=86=85=E5=AE=B9&lt;/label&gt;
                              &lt;div class=3D"form-group" id=3D"hpp_doc_ed=
itor"&gt;
							=09
                              &lt;/div&gt;
                            &lt;/div&gt;
                          &lt;/div&gt;
                        &lt;/div&gt;
						&lt;button type=3D"submit" class=3D"btn btn-normal pull-right" onclic=
k=3D"javascript:hpp_upload_draft()"&gt;=E5=8F=91=E5=B8=83=E8=89=B9=E7=A8=BF=
&lt;/button&gt;
                        &lt;button type=3D"submit" class=3D"btn btn-primary=
 pull-right" onclick=3D"javascript:hpp_upload_md()"&gt;=E5=8F=91=E5=B8=83=
=E6=96=87=E4=BB=B6&lt;/button&gt;
                        &lt;div class=3D"clearfix"&gt;&lt;/div&gt;
						&lt;input type=3D"file" name=3D"upload" id=3D"upload_md" style=3D"dis=
play:none"/&gt;
						&lt;form id=3D"upform" enctype=3D'multipart/form-data' style=3D"displ=
ay:none;"&gt;
    &lt;div class=3D"form-group"&gt;
        &lt;label for=3D"upteainput"&gt;=E4=B8=8A=E4=BC=A0=E6=96=87=E4=BB=
=B6&lt;/label&gt;
        &lt;input type=3D"file" id=3D"input"&gt;
    &lt;/div&gt;
&lt;/form&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;`
              hpp_js =3D `&lt;link rel=3D'stylesheet' type=3D'text/css' hre=
f=3D'https://cdn.jsdelivr.net/npm/notyf/notyf.min.css' /&gt;=20
&lt;script src=3D"https://cdn.jsdelivr.net/npm/notyf/notyf.min.js"&gt;&lt;/=
script&gt;&lt;script src=3D"https://cdn.jsdelivr.net/gh/indrimuska/jquery-e=
ditable-select/dist/jquery-editable-select.min.js"&gt;&lt;/script&gt;&lt;sc=
ript src=3D'https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@${hpp_CDN=
ver}/edit.js'&gt;&lt;/script&gt;&lt;script type=3D"text/javascript" src=3D"=
https://cdn.jsdelivr.net/npm/jquery-lazy@1.7.11/jquery.lazy.min.js"&gt;&lt;=
/script&gt;&lt;script type=3D"text/javascript" src=3D"https://cdn.jsdelivr.=
net/npm/jquery-lazy@1.7.11/jquery.lazy.plugins.min.js"&gt;&lt;/script&gt;&l=
t;link rel=3D"stylesheet" href=3D"https://cdn.jsdelivr.net/gh/HexoPlusPlus/=
HexoPlusPlus@${hpp_CDNver}/OwO.min.css"&gt;
&lt;script src=3D"https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.5.=
0/build/highlight.min.js"&gt;&lt;/script&gt;
&lt;link rel=3D'stylesheet' type=3D'text/css' href=3D'https://cdn.jsdelivr.=
net/gh/highlightjs/cdn-release@10.5.0/build/styles/${hpp_highlight_style}.m=
in.css' /&gt;=20

`
            }
            if (path =3D=3D "/hpp/admin/dash/talk") {
              hpp_talk_act =3D " active"
              hpp_init =3D `&lt;div class=3D"content"&gt;
        &lt;div class=3D"container-fluid"&gt;
          &lt;div class=3D"row"&gt;
            &lt;div class=3D"col-md-12"&gt;
              &lt;div class=3D"card"&gt;
                &lt;div class=3D"card-header card-header-primary"&gt;
                  &lt;h4 class=3D"card-title"&gt;=E8=AF=B4=E8=AF=B4&lt;/h4&=
gt;
                  &lt;p class=3D"card-category"&gt;Talk&lt;/p&gt;
                &lt;/div&gt;
              &lt;/br&gt;
                &lt;div class=3D"card-body"&gt;
                         =20
                       =20
                        &lt;div class=3D"row"&gt;
                          &lt;div class=3D"col-md-12"&gt;
                            &lt;div class=3D"form-group"&gt;
                              &lt;label&gt;=E4=B9=A6=E5=86=99&lt;/label&gt;
                              &lt;div class=3D"form-group" id=3D"hpp_talk_e=
ditor"&gt;&lt;/div&gt;
                            &lt;/div&gt;
                          &lt;/div&gt;
                        &lt;/div&gt;
                        &lt;button type=3D"submit" class=3D"btn btn-primary=
 pull-right" onclick=3D"javascript:hpp_upload_md()"&gt;Upload&lt;/button&gt=
;
                        &lt;div class=3D"clearfix"&gt;&lt;/div&gt;
						&lt;input type=3D"file" name=3D"upload" id=3D"upload_md" style=3D"dis=
play:none"/&gt;
						&lt;form id=3D"upform" enctype=3D'multipart/form-data' style=3D"displ=
ay:none;"&gt;
    &lt;div class=3D"form-group"&gt;
        &lt;label for=3D"upteainput"&gt;=E4=B8=8A=E4=BC=A0=E6=96=87=E4=BB=
=B6&lt;/label&gt;
        &lt;input type=3D"file" id=3D"input"&gt;
    &lt;/div&gt;
&lt;/form&gt;&lt;div id=3D"hpp_talk"&gt;&lt;/div&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;`
              hpp_js =3D `&lt;link rel=3D'stylesheet' type=3D'text/css' hre=
f=3D'https://cdn.jsdelivr.net/npm/notyf/notyf.min.css' /&gt; &lt;script src=
=3D"https://cdn.jsdelivr.net/npm/notyf/notyf.min.js"&gt;&lt;/script&gt;&lt;=
link rel=3D"stylesheet" href=3D"https://cdn.jsdelivr.net/gh/HexoPlusPlus/He=
xoPlusPlus@${hpp_CDNver}/talk.css" /&gt;&lt;script src=3D'https://cdn.jsdel=
ivr.net/gh/HexoPlusPlus/HexoPlusPlus@${hpp_CDNver}/talk.js'&gt;&lt;/script&=
gt;&lt;script type=3D"text/javascript" src=3D"https://cdn.jsdelivr.net/npm/=
jquery-lazy@1.7.11/jquery.lazy.min.js"&gt;&lt;/script&gt;&lt;script type=3D=
"text/javascript" src=3D"https://cdn.jsdelivr.net/npm/jquery-lazy@1.7.11/jq=
uery.lazy.plugins.min.js"&gt;&lt;/script&gt;&lt;link rel=3D"stylesheet" hre=
f=3D"https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@${hpp_CDNver}/Ow=
O.min.css"&gt;`
            }
            if (path =3D=3D "/hpp/admin/dash/docs_man") {
              hpp_docs_man_act =3D " active"
              hpp_init =3D `
&lt;div class=3D"content"&gt;
        &lt;div class=3D"container-fluid"&gt;
          &lt;div class=3D"row"&gt;
            &lt;div class=3D"col-md-12"&gt;
              &lt;div class=3D"card"&gt;
                &lt;div class=3D"card-header card-header-primary"&gt;
                  &lt;h4 class=3D"card-title "&gt;=E6=96=87=E7=AB=A0=E5=88=
=97=E8=A1=A8&lt;/h4&gt;
                  &lt;p class=3D"card-category"&gt;=E8=BF=99=E9=87=8C=E5=88=
=97=E5=87=BA=E4=BA=86=E4=BD=A0=E6=89=80=E6=9C=89=E6=96=87=E7=AB=A0&lt;/p&gt=
;
                &lt;/div&gt;
                &lt;div class=3D"card-body"&gt;
                  &lt;div class=3D"table-responsive"&gt;
				  &lt;input type=3D"text" id=3D"search_Input" onkeyup=3D"hpp_search()" =
placeholder=3D"=E6=90=9C=E7=B4=A2=E6=96=87=E7=AB=A0..."&gt;
                    &lt;table class=3D"table" id=3D"hpp_table"&gt;
                      &lt;thead class=3D"text-primary"&gt;
                        &lt;th&gt;
                          =E5=90=8D=E7=A7=B0
                        &lt;/th&gt;
                        &lt;th&gt;
                          =E5=A4=A7=E5=B0=8F
                        &lt;/th&gt;
                        &lt;th&gt;=E5=8F=91=E5=B8=83=E7=8A=B6=E6=80=81&lt;/=
th&gt;&lt;th&gt;&lt;/th&gt;
                        &lt;th&gt;&lt;/th&gt;&lt;th&gt;&lt;/th&gt;&lt;th&gt=
;&lt;/th&gt;
                      &lt;/thead&gt;
                      &lt;tbody id=3D"tbody_doc"&gt;
					=09
                      &lt;/tbody&gt;
                    &lt;/table&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;`
              hpp_js =3D `&lt;script src=3D'https://cdn.jsdelivr.net/gh/Hex=
oPlusPlus/HexoPlusPlus@${hpp_CDNver}/doc_man.js'&gt;&lt;/script&gt;`

            }
            if (path =3D=3D "/hpp/admin/dash/img_man") {
              hpp_img_man_act =3D " active"
              hpp_init =3D `&lt;div class=3D"content"&gt;
        &lt;div class=3D"container-fluid"&gt;
          &lt;div class=3D"row"&gt;
            &lt;div class=3D"col-md-12"&gt;
              &lt;div class=3D"card"&gt;
                &lt;div class=3D"card-header card-header-primary"&gt;
                  &lt;h4 class=3D"card-title "&gt;=E5=9B=BE=E7=89=87=E5=88=
=97=E8=A1=A8&lt;/h4&gt;
                  &lt;p class=3D"card-category"&gt;=E8=BF=99=E9=87=8C=E5=88=
=97=E5=87=BA=E4=BA=86=E4=BD=A0=E6=89=80=E6=9C=89=E5=9B=BE=E7=89=87&lt;/p&gt=
;
                &lt;/div&gt;
                &lt;div class=3D"card-body"&gt;
                  &lt;div class=3D"table-responsive"&gt;
				  &lt;input type=3D"text" id=3D"search_Input" onkeyup=3D"hpp_search()" =
placeholder=3D"=E6=90=9C=E7=B4=A2=E5=9B=BE=E7=89=87..."&gt;
                    &lt;table class=3D"table" id=3D"hpp_table"&gt;
                      &lt;thead class=3D" text-primary"&gt;
                        &lt;th&gt;
                          =E5=90=8D=E7=A7=B0
                        &lt;/th&gt;
                        &lt;th&gt;
                          =E5=A4=A7=E5=B0=8F
                        &lt;/th&gt;&lt;th&gt;=E9=A2=84=E8=A7=88&lt;/th&gt;
                        &lt;th&gt;&lt;/th&gt;
                        &lt;th&gt;&lt;/th&gt;&lt;th&gt;&lt;/th&gt;&lt;th&gt=
;&lt;/th&gt;&lt;th&gt;&lt;/th&gt;
                      &lt;/thead&gt;
                      &lt;tbody id=3D"tbody_img"&gt;
					=09
                      &lt;/tbody&gt;
                    &lt;/table&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;`
              hpp_js =3D `&lt;link rel=3D"stylesheet" href=3D"https://cdn.j=
sdelivr.net/gh/brutaldesign/swipebox/src/css/swipebox.css"&gt;&lt;script sr=
c=3D'https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@${hpp_CDNver}/im=
g_man.js'&gt;&lt;/script&gt;&lt;script type=3D"text/javascript" src=3D"http=
s://cdn.jsdelivr.net/npm/jquery-lazy@1.7.11/jquery.lazy.min.js"&gt;&lt;/scr=
ipt&gt;
&lt;script type=3D"text/javascript" src=3D"https://cdn.jsdelivr.net/npm/jqu=
ery-lazy@1.7.11/jquery.lazy.plugins.min.js"&gt;&lt;/script&gt;&lt;script sr=
c=3D"https://cdn.jsdelivr.net/gh/brutaldesign/swipebox/src/js/jquery.swipeb=
ox.min.js"&gt;&lt;/script&gt;`

            }
			if (path =3D=3D "/hpp/admin/dash/tool") {
              hpp_tool_act =3D " active"
              hpp_init =3D `&lt;div class=3D"content"&gt;
        &lt;div class=3D"container-fluid"&gt;
          &lt;div class=3D"row"&gt;
       =20
		=09
			&lt;div class=3D"col-lg-6 col-md-6 col-sm-6"&gt;
              &lt;a href=3D"javascript:hpp_artitalk_into_hpptalk()"&gt;
              &lt;div class=3D"card card-stats"&gt;
                &lt;div class=3D"card-header card-header-primary card-heade=
r-icon"&gt;
                  &lt;div class=3D"card-icon"&gt;
                    &lt;i class=3D"fa fa-download"&gt;&lt;/i&gt;
                  &lt;/div&gt;
                  &lt;h3 class=3D"card-title"&gt;=E4=BB=8EArtitalk=E4=B8=AD=
=E5=AF=BC=E5=85=A5&lt;/h3&gt;
                &lt;/div&gt;
                &lt;div class=3D"card-footer"&gt;=E8=BF=99=E4=B8=8D=E6=98=
=AF=E6=8A=A2=E7=94=9F=E6=84=8F=E5=95=8A=E5=96=82
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/a&gt;
            &lt;/div&gt;
		=09
			&lt;div class=3D"col-lg-6 col-md-6 col-sm-6"&gt;
              &lt;a href=3D"javascript:hpp_del_all()"&gt;
              &lt;div class=3D"card card-stats"&gt;
                &lt;div class=3D"card-header card-header-danger card-header=
-icon"&gt;
                  &lt;div class=3D"card-icon"&gt;
                    &lt;i class=3D"fa fa-close"&gt;&lt;/i&gt;
                  &lt;/div&gt;
                  &lt;h3 class=3D"card-title"&gt;=E9=94=80=E6=AF=81=E9=85=
=8D=E7=BD=AE&lt;/h3&gt;
                &lt;/div&gt;
                &lt;div class=3D"card-footer"&gt;
                  &lt;div class=3D"stats"&gt;
                    &lt;i class=3D"material-icons text-danger"&gt;warning&l=
t;/i&gt;=E9=AB=98=E5=8D=B1=E6=93=8D=E4=BD=9C=EF=BC=8C=E4=BD=A0=E7=9F=A5=E9=
=81=93=E4=BC=9A=E5=8F=91=E7=94=9F=E4=BB=80=E4=B9=88=E7=9A=84
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/a&gt;
            &lt;/div&gt;
		=09
		=09
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;`
              hpp_js =3D `&lt;script src=3D'https://cdn.jsdelivr.net/gh/Hex=
oPlusPlus/HexoPlusPlus@${hpp_CDNver}/tool.js'&gt;&lt;/script&gt;`
            }
            if (path =3D=3D "/hpp/admin/dash/set") {
              hpp_set_act =3D " active"
              hpp_init =3D `&lt;div class=3D"content"&gt;
        &lt;div class=3D"container-fluid"&gt;
          &lt;div class=3D"row"&gt;
            &lt;div class=3D"col-md-12"&gt;
              &lt;div class=3D"card"&gt;
                &lt;div class=3D"card-header card-header-primary"&gt;
                  &lt;h4 class=3D"card-title "&gt;=E9=85=8D=E7=BD=AE&lt;/h4=
&gt;
                  &lt;p class=3D"card-category"&gt;=E8=AF=B7=E6=A0=B9=E6=8D=
=AE=E9=9C=80=E8=A6=81=E4=BF=AE=E6=94=B9=E9=85=8D=E7=BD=AE&lt;/p&gt;
                &lt;/div&gt;
                &lt;div class=3D"card-body"&gt;
                  &lt;div class=3D"table-responsive"&gt;
				  &lt;input type=3D"text" id=3D"search_Input" onkeyup=3D"hpp_search()" =
placeholder=3D"=E6=90=9C=E7=B4=A2=E9=85=8D=E7=BD=AE..."&gt;
                    &lt;table class=3D"table" id=3D"hpp_table"&gt;
                      &lt;thead class=3D" text-primary"&gt;
                        &lt;th&gt;
                          =E9=94=AE=E5=80=BC
                        &lt;/th&gt;
                        &lt;th&gt;
                          =E5=86=85=E5=AE=B9
                        &lt;/th&gt;&lt;th&gt;=E6=93=8D=E4=BD=9C&lt;/th&gt;
                      &lt;/thead&gt;
                      &lt;tbody id=3D"tbody_config"&gt;
					=09
                      &lt;/tbody&gt;
                    &lt;/table&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;`
              hpp_js =3D `&lt;script src=3D'https://cdn.jsdelivr.net/gh/Hex=
oPlusPlus/HexoPlusPlus@${hpp_CDNver}/config.js'&gt;&lt;/script&gt;`
            }
            let hpp_plugin =3D ""
            if (hpp_plugin_css !=3D undefined) { hpp_plugin +=3D `&lt;link =
rel=3D"stylesheet" type=3D"text/css" href=3D"${hpp_plugin_css}" /&gt;` }
            if (hpp_plugin_js !=3D undefined) { hpp_js +=3D `&lt;script src=
=3D"${hpp_plugin_js}"&gt;&lt;/script&gt;` }
            let hpp_dash_head =3D `&lt;!DOCTYPE html&gt;
&lt;html lang=3D"en"&gt;

&lt;head&gt;
  &lt;meta charset=3D"utf-8" /&gt;
  &lt;link rel=3D"apple-touch-icon" sizes=3D"76x76" href=3D"${hpp_usericon}=
"&gt;
  &lt;link rel=3D"icon" type=3D"image/png" href=3D"${hpp_usericon}"&gt;
  &lt;title&gt;${hpp_title}&lt;/title&gt;
  &lt;meta content=3D"width=3Ddevice-width, initial-scale=3D1.0, maximum-sc=
ale=3D1.0, user-scalable=3D0" name=3D"viewport" /&gt;
  ${hpp_plugin}
  &lt;link rel=3D"stylesheet" type=3D"text/css" href=3D"https://cdn.jsdeliv=
r.net/gh/HexoPlusPlus/HexoPlusPlus@${hpp_CDNver}/font.css" /&gt;
  &lt;link href=3D"https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@${=
hpp_CDNver}/admin_all_${hpp_theme_mode}.css" rel=3D"stylesheet" /&gt;
  &lt;link rel=3D"stylesheet" href=3D"https://cdn.jsdelivr.net/gh/indrimusk=
a/jquery-editable-select/dist/jquery-editable-select.min.css"&gt;
  &lt;link rel=3D"stylesheet" href=3D"https://cdn.jsdelivr.net/npm/font-awe=
some@4.7.0/css/font-awesome.min.css"&gt;
  &lt;script&gt;
  //=E8=BF=99=E4=B8=AA=E8=84=9A=E6=9C=AC=E7=9A=84=E7=94=A8=E9=80=94=E6=98=
=AF=E5=89=8D=E7=AB=AF=E5=8F=98=E9=87=8F=E4=BC=A0=E9=80=92
  const hpp_ver=3D"${hpp_ver}";
  const hpp_OwO=3D"${hpp_OwO}";
  const avatar=3D"${hpp_userimage}";
  const username=3D"${username[0]}";
  const hpp_githubdocusername =3D "${hpp_githubdocusername}"
  const hpp_githubdocrepo =3D"${hpp_githubdocrepo}"
  const hpp_githubdocbranch =3D"${hpp_githubdocbranch}"
  const hpp_githubdocpath =3D"${hpp_githubdocpath}"
  const hpp_githubimageusername =3D "${hpp_githubimageusername}"
  const hpp_githubimagerepo =3D"${hpp_githubimagerepo}"
  const hpp_githubimagebranch =3D"${hpp_githubimagebranch}"
  const hpp_githubimagepath =3D"${hpp_githubimagepath}"
  const hpp_githubdocdraftpath =3D"${hpp_githubdocdraftpath}"
  const hpp_lazy_img =3D "${hpp_lazy_img}"
  const hpp_highlight_style =3D "${hpp_highlight_style}"
  const hpp_page_limit =3D ${hpp_page_limit}
  &lt;/script&gt;
&lt;/head&gt;
&lt;body class=3D"${hpp_theme_mode=3D=3D'dark'?'dark-edition':''}"&gt;
  &lt;div class=3D"wrapper "&gt;
    &lt;div class=3D"sidebar" data-color=3D"${hpp_color}" data-background-c=
olor=3D"${hpp_theme_mode=3D=3D'dark'?'default':hpp_bg_color}" data-image=3D=
"${hpp_back}"&gt;
      &lt;div class=3D"logo"&gt;&lt;a class=3D"simple-text logo-normal"&gt;=
${hpp_title}&lt;/a&gt;&lt;/div&gt;
      &lt;div class=3D"sidebar-wrapper"&gt;
        &lt;ul class=3D"nav"&gt;
          &lt;li class=3D"nav-item${hpp_home_act}"&gt;
            &lt;a class=3D"nav-link" href=3D"/hpp/admin/dash/home"&gt;
              &lt;i class=3D"material-icons"&gt;dashboard&lt;/i&gt;
              &lt;p&gt;=E4=B8=BB=E9=A1=B5&lt;/p&gt;
            &lt;/a&gt;
          &lt;/li&gt;
          &lt;li class=3D"nav-item${hpp_edit_act}"&gt;
            &lt;a class=3D"nav-link" href=3D"/hpp/admin/dash/edit"&gt;
              &lt;i class=3D"material-icons"&gt;create&lt;/i&gt;
              &lt;p&gt;=E4=B9=A6=E5=86=99&lt;/p&gt;
            &lt;/a&gt;
          &lt;/li&gt;
          &lt;li class=3D"nav-item${hpp_talk_act}"&gt;
            &lt;a class=3D"nav-link" href=3D"/hpp/admin/dash/talk"&gt;
              &lt;i class=3D"material-icons"&gt;chat&lt;/i&gt;
              &lt;p&gt;=E8=AF=B4=E8=AF=B4&lt;/p&gt;
            &lt;/a&gt;
          &lt;/li&gt;
          &lt;li class=3D"nav-item${hpp_docs_man_act}"&gt;
            &lt;a class=3D"nav-link" href=3D"/hpp/admin/dash/docs_man"&gt;
              &lt;i class=3D"material-icons"&gt;descriptionoutlined&lt;/i&g=
t;
              &lt;p&gt;=E6=96=87=E6=A1=A3=E7=AE=A1=E7=90=86&lt;/p&gt;
            &lt;/a&gt;
          &lt;/li&gt;
		  &lt;li class=3D"nav-item${hpp_img_man_act}"&gt;
            &lt;a class=3D"nav-link" href=3D"/hpp/admin/dash/img_man"&gt;
              &lt;i class=3D"material-icons"&gt;imagerounded&lt;/i&gt;
              &lt;p&gt;=E5=9B=BE=E7=89=87=E7=AE=A1=E7=90=86&lt;/p&gt;
            &lt;/a&gt;
          &lt;/li&gt;
		  &lt;li class=3D"nav-item${hpp_tool_act}"&gt;
            &lt;a class=3D"nav-link" href=3D"/hpp/admin/dash/tool"&gt;
              &lt;i class=3D"material-icons"&gt;widgets&lt;/i&gt;
              &lt;p&gt;=E5=B7=A5=E5=85=B7&lt;/p&gt;
            &lt;/a&gt;
          &lt;/li&gt;
		  &lt;li class=3D"nav-item${hpp_set_act}"&gt;
            &lt;a class=3D"nav-link" href=3D"/hpp/admin/dash/set"&gt;
              &lt;i class=3D"material-icons"&gt;settings&lt;/i&gt;
              &lt;p&gt;=E8=AE=BE=E7=BD=AE&lt;/p&gt;
            &lt;/a&gt;
          &lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=3D"main-panel"&gt;
      &lt;!-- Navbar --&gt;
      &lt;nav class=3D"navbar navbar-expand-lg navbar-transparent navbar-ab=
solute fixed-top "&gt;
        &lt;div class=3D"container-fluid"&gt;
          &lt;div class=3D"navbar-wrapper"&gt;
            &lt;a class=3D"navbar-brand" href=3D"javascript:;"&gt;HexoPlusP=
lus=E5=90=8E=E5=8F=B0&lt;/a&gt;
          &lt;/div&gt;
          &lt;button class=3D"navbar-toggler" type=3D"button" data-toggle=
=3D"collapse" aria-controls=3D"navigation-index" aria-expanded=3D"false" ar=
ia-label=3D"Toggle navigation"&gt;
            &lt;span class=3D"sr-only"&gt;Toggle navigation&lt;/span&gt;
            &lt;span class=3D"navbar-toggler-icon icon-bar"&gt;&lt;/span&gt=
;
            &lt;span class=3D"navbar-toggler-icon icon-bar"&gt;&lt;/span&gt=
;
            &lt;span class=3D"navbar-toggler-icon icon-bar"&gt;&lt;/span&gt=
;
          &lt;/button&gt;
          &lt;div class=3D"collapse navbar-collapse justify-content-end"&gt=
;
            &lt;ul class=3D"navbar-nav"&gt;
              &lt;li class=3D"nav-item dropdown"&gt;
                &lt;a class=3D"nav-link" href=3D"javascript:;" id=3D"navbar=
DropdownProfile" data-toggle=3D"dropdown" aria-haspopup=3D"true" aria-expan=
ded=3D"false"&gt;
                  &lt;img src=3D"${hpp_userimage}" style=3D"width: 30px;bor=
der-radius: 50%;border: 0;"&gt;
                  &lt;p class=3D"d-lg-none d-md-block"&gt;
                    Account
                  &lt;/p&gt;
                &lt;/a&gt;
                &lt;div class=3D"dropdown-menu dropdown-menu-right" aria-la=
belledby=3D"navbarDropdownProfile"&gt;
                  &lt;a class=3D"dropdown-item" href=3D"javascript:kick()"&=
gt;=E7=AD=BE=E5=88=B0&lt;/a&gt;
                  &lt;div class=3D"dropdown-divider"&gt;&lt;/div&gt;
                  &lt;a class=3D"dropdown-item" href=3D"javascript:hpp_logo=
ut()"&gt;=E9=80=80=E5=87=BA&lt;/a&gt;
                &lt;/div&gt;
              &lt;/li&gt;
            &lt;/ul&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/nav&gt;
      &lt;!-- End Navbar --&gt;=20

&lt;!--innerHTMLSTART--&gt;`
            let hpp_dash_foot =3D `
					&lt;!--innerHTMLEND--&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;script src=3D"https://cdn.jsdelivr.net/npm/jquery@2.2.4"&gt;&lt;/script=
&gt;
&lt;script src=3D"https://cdn.jsdelivr.net/npm/sweetalert/dist/sweetalert.m=
in.js"&gt;&lt;/script&gt;
&lt;script src=3D"https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@${h=
pp_CDNver}/admin_all.js"&gt;&lt;/script&gt;
${hpp_js}

&lt;/body&gt;

&lt;/html&gt;`
            let hpp_dash =3D `${hpp_dash_head}${hpp_init}${hpp_dash_foot}`
            return new Response(hpp_dash, {
              headers: { "content-type": "text/html;charset=3DUTF-8" }
            })














          }
          if (path.startsWith("/hpp/admin/api/adddoc/")) {

            const file =3D await request.text()
            const filename =3D path.substr(("/hpp/admin/api/adddoc/").lengt=
h)
            const url =3D `https://api.github.com/repos/${hpp_githubdocuser=
name}/${hpp_githubdocrepo}/contents${githubdocpath}${filename}?ref=3D${hpp_=
githubdocbranch}`
            const hpp_sha =3D (JSON.parse(await (await fetch(url, hpp_githu=
bgetdocinit)).text())).sha
            const hpp_body =3D {
              branch: hpp_githubdocbranch, message: `Upload from ${hpp_ver}=
 By ${hpp_githubdocusername}`, content: file, sha: hpp_sha
            }
            const hpp_docputinit =3D {
              body: JSON.stringify(hpp_body),
              method: "PUT",
              headers: {
                "content-type": "application/json;charset=3DUTF-8",
                "user-agent": hpp_ver,
                "Authorization": "token " + hpp_githubdoctoken
              }
            }
            const hpp_r =3D await fetch(url, hpp_docputinit)
            const hpp_r_s =3D await hpp_r.status
            if (hpp_r_s =3D=3D 200 || hpp_r_s =3D=3D 201) {
              if (hpp_r_s =3D=3D 201) { await KVNAME.delete("hpp_doc_list_i=
ndex") }
              return new Response('Update Success', { status: hpp_r_s })
            } else {
              return new Response('Fail To Update', { status: hpp_r_s })
            }

          }
          if (path.startsWith("/hpp/admin/api/adddraft/")) {

            const file =3D await request.text()
            const filename =3D path.substr(("/hpp/admin/api/adddraft/").len=
gth)
            const url =3D `https://api.github.com/repos/${hpp_githubdocuser=
name}/${hpp_githubdocrepo}/contents${githubdocdraftpath}${filename}?ref=3D$=
{hpp_githubdocbranch}`
            const hpp_sha =3D (JSON.parse(await (await fetch(url, hpp_githu=
bgetdocinit)).text())).sha
            const hpp_body =3D {
              branch: hpp_githubdocbranch, message: `Upload draft from ${hp=
p_ver} By ${hpp_githubdocusername}`, content: file, sha: hpp_sha
            }
            const hpp_docputinit =3D {
              body: JSON.stringify(hpp_body),
              method: "PUT",
              headers: {
                "content-type": "application/json;charset=3DUTF-8",
                "user-agent": hpp_ver,
                "Authorization": "token " + hpp_githubdoctoken
              }
            }
            const hpp_r =3D await fetch(url, hpp_docputinit)
            const hpp_r_s =3D await hpp_r.status
            if (hpp_r_s =3D=3D 200 || hpp_r_s =3D=3D 201) {
              if (hpp_r_s =3D=3D 201) { await KVNAME.delete("hpp_doc_draft_=
list_index") }
              return new Response('Update Success', { status: hpp_r_s })
            } else {
              return new Response('Fail To Update', { status: hpp_r_s })
            }

          }
          if (path.startsWith("/hpp/admin/api/addimage")) {
            const file =3D await request.text()
            const hpp_time =3D Date.parse(new Date())
            const filename =3D path.substr(("/hpp/admin/api/addimage/").len=
gth)

            const url =3D `https://api.github.com/repos/${hpp_githubimageus=
ername}/${hpp_githubimagerepo}/contents${githubimagepath}${hpp_time}.${file=
name}`
            const hpp_body =3D {
              branch: hpp_githubimagebranch, message: `Upload from ${hpp_ve=
r} By ${hpp_githubimageusername}`, content: file
            }
            const hpp_imageputinit =3D {
              body: JSON.stringify(hpp_body),
              method: "PUT",
              headers: {
                "content-type": "application/json;charset=3DUTF-8",
                "user-agent": hpp_ver,
                "Authorization": "token " + hpp_githubimagetoken
              }
            }
            const hpp_r =3D await fetch(url, hpp_imageputinit)
            const hpp_r_s =3D await hpp_r.status
            if (hpp_r_s =3D=3D 200 || hpp_r_s =3D=3D 201) {
              return new Response(`https://cdn.jsdelivr.net/gh/${hpp_github=
imageusername}/${hpp_githubimagerepo}@${hpp_githubimagebranch}${hpp_githubi=
magepath}${hpp_time}.${filename}`, { status: hpp_r_s })
            } else {
              return new Response(`Fail To Upload Image`, { status: hpp_r_s=
 })
            }
          }
          if (path.startsWith("/hpp/admin/api/deldoc")) {

            const filename =3D path.substr(("/hpp/admin/api/deldoc/").lengt=
h)
            const url =3D `https://api.github.com/repos/${hpp_githubdocuser=
name}/${hpp_githubdocrepo}/contents${githubdocpath}${filename}?ref=3D${hpp_=
githubdocbranch}`
            const hpp_sha =3D (JSON.parse(await (await fetch(url, hpp_githu=
bgetdocinit)).text())).sha
            const hpp_body =3D {
              branch: hpp_githubdocbranch, message: `Delete from ${hpp_ver}=
 By ${hpp_githubdocusername}`, sha: hpp_sha
            }
            const hpp_docputinit =3D {
              body: JSON.stringify(hpp_body),
              method: "DELETE",
              headers: {
                "content-type": "application/json;charset=3DUTF-8",
                "user-agent": hpp_ver,
                "Authorization": "token " + hpp_githubdoctoken
              }
            }
            const hpp_r =3D await fetch(url, hpp_docputinit)
            const hpp_r_s =3D await hpp_r.status
            if (hpp_r_s =3D=3D 200) {
              await KVNAME.delete("hpp_doc_list_index")
              return new Response('Delete Success', { status: hpp_r_s })
            } else {
              return new Response('Fail To Delete doc', { status: hpp_r_s }=
)
            }
          }

          if (path.startsWith("/hpp/admin/api/deldraft")) {

            const filename =3D path.substr(("/hpp/admin/api/deldraft/").len=
gth)
            const url =3D `https://api.github.com/repos/${hpp_githubdocuser=
name}/${hpp_githubdocrepo}/contents${githubdocdraftpath}${filename}?ref=3D$=
{hpp_githubdocbranch}`
            const hpp_sha =3D (JSON.parse(await (await fetch(url, hpp_githu=
bgetdocinit)).text())).sha
            const hpp_body =3D {
              branch: hpp_githubdocbranch, message: `Delete draft from ${hp=
p_ver} By ${hpp_githubdocusername}`, sha: hpp_sha
            }
            const hpp_docputinit =3D {
              body: JSON.stringify(hpp_body),
              method: "DELETE",
              headers: {
                "content-type": "application/json;charset=3DUTF-8",
                "user-agent": hpp_ver,
                "Authorization": "token " + hpp_githubdoctoken
              }
            }
            const hpp_r =3D await fetch(url, hpp_docputinit)
            const hpp_r_s =3D await hpp_r.status
            if (hpp_r_s =3D=3D 200) {
              await KVNAME.delete("hpp_doc_draft_list_index")
              return new Response('Delete Success', { status: hpp_r_s })
            } else {
              return new Response('Fail To Delete doc', { status: hpp_r_s }=
)
            }
          }

          if (path.startsWith("/hpp/admin/api/delimage")) {
            const filepath =3D githubimagepath.substr(0, (githubimagepath).=
length - 1)
            const listurl =3D `https://api.github.com/repos/${hpp_githubima=
geusername}/${hpp_githubimagerepo}/contents${filepath}?ref=3D${hpp_githubim=
agebranch}`
            const filename =3D path.substr(("/hpp/admin/api/delimage/").len=
gth)
            const url =3D `https://api.github.com/repos/${hpp_githubimageus=
ername}/${hpp_githubimagerepo}/contents${githubimagepath}${filename}?ref=3D=
${hpp_githubimagebranch}`
            const hpp_re =3D (JSON.parse(await (await fetch(listurl, hpp_gi=
thubgetimageinit)).text()))
            //console.log(hpp_re)
            let hpp_sha =3D ""
            for (var i =3D 0; i &lt; getJsonLength(hpp_re); i++) {
              if (hpp_re[i]["name"] =3D=3D filename) {
                hpp_sha =3D hpp_re[i]["sha"]
                break
              }
            }
            //console.log(hpp_sha)
            const hpp_body =3D {
              branch: hpp_githubimagebranch, message: `Delete from ${hpp_ve=
r} By ${hpp_githubdocusername}`, sha: hpp_sha
            }
            const hpp_imageputinit =3D {
              body: JSON.stringify(hpp_body),
              method: "DELETE",
              headers: {
                "content-type": "application/json;charset=3DUTF-8",
                "user-agent": hpp_ver,
                "Authorization": "token " + hpp_githubimagetoken
              }
            }
            const hpp_r =3D await fetch(url, hpp_imageputinit)
            const hpp_r_s =3D await hpp_r.status
            if (hpp_r_s =3D=3D 200) {
              return new Response('Delete Success', { status: hpp_r_s })
            } else {
              return new Response('Fail To Delete Image', { status: hpp_r_s=
 })
            }
          }
          if (path.startsWith("/hpp/admin/api/getdoc")) {
            const filename =3D path.substr(("/hpp/admin/api/getdoc/").lengt=
h)
            return (fetch(`https://raw.githubusercontent.com/${hpp_githubdo=
cusername}/${hpp_githubdocrepo}/${hpp_githubdocbranch}${githubdocpath}${fil=
ename}?ref=3D${hpp_githubdocbranch}`, hpp_githubgetdocinit))
          }
		  if (path =3D=3D ("/hpp/admin/api/getscaffolds")) {
            return (fetch(`https://raw.githubusercontent.com/${hpp_githubdo=
cusername}/${hpp_githubdocrepo}/${hpp_githubdocbranch}${hpp_githubdocroot}s=
caffolds/post.md?ref=3D${hpp_githubdocbranch}`, hpp_githubgetdocinit))
          }
          //=E4=BB=96=E5=90=8D=E5=AD=97=E5=8F=ABbfs=EF=BC=8C=E4=BB=96=E5=B0=
=B1=E5=8F=ABbfs/doge
          async function fetch_bfs(arr, url, getinit) {
            try {
              const hpp_getlist =3D await JSON.parse(await (await fetch(url=
, hpp_githubgetdocinit)).text())
              for (var i =3D 0; i &lt; getJsonLength(hpp_getlist); i++) {
                if (hpp_getlist[i]["type"] !=3D "dir") {
                  arr.push(hpp_getlist[i])
                } else {
                  await fetch_bfs(arr, hpp_getlist[i]["_links"]["self"], ge=
tinit)
                }
              }
              return arr;
            } catch (e) { return {} }
          }
          if (path =3D=3D "/hpp/admin/api/getlist") {
            let hpp_doc_list_index =3D await KVNAME.get("hpp_doc_list_index=
")
            if (hpp_doc_list_index =3D=3D=3D null) {
              const filepath =3D githubdocpath.substr(0, (githubdocpath).le=
ngth - 1)
              const url =3D `https://api.github.com/repos/${hpp_githubdocus=
ername}/${hpp_githubdocrepo}/contents${filepath}?ref=3D${hpp_githubdocbranc=
h}`
              hpp_doc_list_index =3D await JSON.stringify(await fetch_bfs([=
], url, hpp_githubgetdocinit))
              await KVNAME.put("hpp_doc_list_index", hpp_doc_list_index)
            }
            return new Response(hpp_doc_list_index, {
              headers: {
                "content-type": "application/json;charset=3DUTF-8",
                "Access-Control-Allow-Origin": hpp_cors
              }
            })
          }
          if (path.startsWith("/hpp/admin/api/getdraft")) {
            const filename =3D path.substr(("/hpp/admin/api/getdraft/").len=
gth)
            return (fetch(`https://raw.githubusercontent.com/${hpp_githubdo=
cusername}/${hpp_githubdocrepo}/${hpp_githubdocbranch}${githubdocdraftpath}=
${filename}?ref=3D${hpp_githubdocbranch}`, hpp_githubgetdocinit))
          }
          if (path =3D=3D "/hpp/admin/api/get_draftlist") {
            let hpp_doc_draft_list_index =3D await KVNAME.get("hpp_doc_draf=
t_list_index")
            if (hpp_doc_draft_list_index =3D=3D=3D null) {
              const filepath =3D githubdocdraftpath.substr(0, (githubdocdra=
ftpath).length - 1)
              const url =3D `https://api.github.com/repos/${hpp_githubdocus=
ername}/${hpp_githubdocrepo}/contents${filepath}?ref=3D${hpp_githubdocbranc=
h}`
              hpp_doc_draft_list_index =3D await JSON.stringify(await fetch=
_bfs([], url, hpp_githubgetdocinit))
              await KVNAME.put("hpp_doc_draft_list_index", hpp_doc_draft_li=
st_index)
            }
            return new Response(hpp_doc_draft_list_index, {
              headers: {
                "content-type": "application/json;charset=3DUTF-8",
                "Access-Control-Allow-Origin": hpp_cors
              }
            })
          }
          if (path =3D=3D "/hpp/admin/api/getimglist") {
            const filepath =3D githubimagepath.substr(0, (githubimagepath).=
length - 1)
            const url =3D `https://api.github.com/repos/${hpp_githubimageus=
ername}/${hpp_githubimagerepo}/contents${filepath}?ref=3D${hpp_githubimageb=
ranch}`
            return new Response(await JSON.stringify(await fetch_bfs([], ur=
l, hpp_githubgetimageinit)), {
              headers: {
                "content-type": "application/json;charset=3DUTF-8",
                "Access-Control-Allow-Origin": hpp_cors
              }
            })
          }

          if (path =3D=3D "/hpp/admin/api/index_del") {
            await KVNAME.delete("hpp_doc_draft_list_index")
            await KVNAME.delete("hpp_doc_list_index")
            return new Response("OK")
          }

          if (path =3D=3D "/hpp/admin/api/addtalk") {
            let hpp_talk_re =3D await KVNAME.get("hpp_talk_data")
            if (hpp_talk_re =3D=3D=3D null) { hpp_talk_re =3D "[]" }
            let hpp_talk =3D await JSON.parse(hpp_talk_re);
            let hpp_talk_id_re =3D await KVNAME.get("hpp_talk_id")
            if (hpp_talk_id_re =3D=3D=3D null) { hpp_talk_id_re =3D 0 }
            let hpp_talk_id =3D hpp_talk_id_re;
            hpp_talk_id++;
            const now =3D await request.json()
            const add =3D {
              id: hpp_talk_id,
              time: now["time"],
              name: now["name"],
              avatar: now["avatar"],
              content: now["content"],
              visible: "True"
            }
            hpp_talk.push(add);
            await KVNAME.put("hpp_talk_data", JSON.stringify(hpp_talk))
            await KVNAME.put("hpp_talk_id", hpp_talk_id)
            return new Response('OK')
          }
          if (path =3D=3D "/hpp/admin/api/deltalk") {
            const hpp_talk =3D JSON.parse(await KVNAME.get("hpp_talk_data")=
);
            const now =3D Number(await request.text())
            for (var i =3D 0; i &lt; getJsonLength(hpp_talk); i++) {
              if (Number(hpp_talk[i]["id"]) =3D=3D now) {
                hpp_talk.splice(i, 1)
              }
            }
            await KVNAME.put("hpp_talk_data", JSON.stringify(hpp_talk))
            return new Response('OK')
          }
          if (path =3D=3D "/hpp/admin/api/visibletalk") {
            const hpp_talk =3D JSON.parse(await KVNAME.get("hpp_talk_data")=
);
            const now =3D await request.text()
            for (var i =3D 0; i &lt; getJsonLength(hpp_talk); i++) {
              if (hpp_talk[i]["id"] =3D=3D now) {
                hpp_talk[i]["visible"] =3D hpp_talk[i]["visible"] =3D=3D "F=
alse" ? "True" : "False"
              }
            }
            await KVNAME.put("hpp_talk_data", JSON.stringify(hpp_talk))
            return new Response('OK')
          }
          if (path =3D=3D "/hpp/admin/api/update") {
            const update_script =3D await (await fetch(`https://raw.githubu=
sercontent.com/HexoPlusPlus/HexoPlusPlus/main/index.js`)).text()
            const up_init =3D {
              body: update_script,
              method: "PUT",
              headers: {
                "content-type": "application/javascript",
                "X-Auth-Key": hpp_CF_Auth_Key,
                "X-Auth-Email": hpp_Auth_Email
              }
            }
            const update_resul =3D await (await fetch(`https://api.cloudfla=
re.com/client/v4/accounts/${hpp_account_identifier}/workers/scripts/${hpp_s=
cript_name}`, up_init)).text()
            return new Response(JSON.parse(update_resul)["success"])
          }
          if (path =3D=3D "/hpp/admin/api/small_white_mouse_update") {
            const update_script =3D await (await fetch(`https://raw.githubu=
sercontent.com/HexoPlusPlus/HexoPlusPlus/dev/index.js`)).text()
            const up_init =3D {
              body: update_script,
              method: "PUT",
              headers: {
                "content-type": "application/javascript",
                "X-Auth-Key": hpp_CF_Auth_Key,
                "X-Auth-Email": hpp_Auth_Email
              }
            }
            const update_resul =3D await (await fetch(`https://api.cloudfla=
re.com/client/v4/accounts/${hpp_account_identifier}/workers/scripts/${hpp_s=
cript_name}`, up_init)).text()
            return new Response(JSON.parse(update_resul)["success"])
          }
          if (path =3D=3D "/hpp/admin/api/inputtalk") {
            let hpp_talk_re =3D await KVNAME.get("hpp_talk_data")
            if (hpp_talk_re =3D=3D=3D null) { hpp_talk_re =3D "[]" }
            let hpp_talk =3D await JSON.parse(hpp_talk_re);
            let hpp_talk_id_re =3D await KVNAME.get("hpp_talk_id")
            if (hpp_talk_id_re =3D=3D=3D null) { hpp_talk_id_re =3D 0 }
            let hpp_talk_id =3D hpp_talk_id_re;
            let now =3D await JSON.parse(await request.text())
            let talk_init =3D {}
            for (var i =3D 0; i &lt; now.length; i++) {
              hpp_talk_id++;
              ftime =3D now[i]["updatedAt"]
              ftime =3D ftime.split('T')
              talk_init =3D {
                id: hpp_talk_id,
                time: ftime[0],
                name: username[0],
                avatar: now[i]["avatar"],
                content: now[i]["atContentHtml"],
                visible: "True"
              }
              hpp_talk.push(talk_init)
            }
            await KVNAME.put("hpp_talk_data", JSON.stringify(hpp_talk))
            await KVNAME.put("hpp_talk_id", hpp_talk_id)
            return new Response(JSON.stringify(hpp_talk))
          }
          if (path.startsWith("/hpp/admin/api/checkupdate")) {
            const update_check_script =3D await (await fetch(`https://raw.g=
ithubusercontent.com/HexoPlusPlus/HexoPlusPlus/main/update.js`)).text()
            return new Response(update_check_script, { headers: { headers: =
"content-type: application/javascript; charset=3Dutf-8" } })
          }
          if (path =3D=3D "/hpp/admin/api/del_all") {
            await KVNAME.delete("hpp_config")
            return new Response('OK')
          }
          if (path =3D=3D "/hpp/admin/api/get_config") { return new Respons=
e(await JSON.parse(hpp_config)) }
          if (path =3D=3D "/hpp/admin/api/edit_config") {
            let req_con =3D await JSON.parse(await request.text())
            let _index =3D req_con["index"]
            let _value =3D req_con["value"]
            let k =3D await JSON.parse(await JSON.parse(hpp_config))
            k[_index] =3D _value
            k =3D await JSON.stringify(k)
            await KVNAME.put("hpp_config", await JSON.stringify(k))
            return new Response('OK')
          }
          if (path =3D=3D "/hpp/admin/api/del_config") {
            let _index =3D await request.text()
            let k =3D await JSON.parse(await JSON.parse(hpp_config))
            delete k[_index]
            await KVNAME.put("hpp_config", await JSON.stringify(await JSON.=
stringify(k)))
            return new Response('OK')
          }
          if (path =3D=3D '/hpp/admin/api/kick') {
            const now =3D Date.now(new Date())
            await KVNAME.put("hpp_activetime", now)
            const hpp_kvwait =3D Date.now(new Date()) - now
            return new Response("OK")
          }
          if (path =3D=3D "/hpp/admin/api/gethpptalk") {
            const req_r =3D await request.text()
            if (req_r !=3D "") {
              const limit =3D (await JSON.parse(req_r))["limit"]
              const start =3D (await JSON.parse(req_r))["start"]
              const hpp_talk =3D await JSON.parse(await KVNAME.get("hpp_tal=
k_data"));
              let hpp_talk_res =3D []
              for (var i =3D getJsonLength(hpp_talk) - start - 1; i &gt; ge=
tJsonLength(hpp_talk) - start - limit; i--) {
                hpp_talk_res.push(await JSON.stringify(hpp_talk[i]))
              }
              return new Response(JSON.stringify(hpp_talk_res), {
                headers: {
                  "content-type": "application/json;charset=3DUTF-8",
                  "Access-Control-Allow-Origin": "*"
                }
              })
            } else {
              return new Response("ERROR", {
                headers: {
                  "Access-Control-Allow-Origin": "*"
                }
              })
            }
          }
        }
      }
      else {
        if (path =3D=3D '/hpp/admin/login') {
          let hpp_captcha_html =3D ""
          let hpp_captcha_no_1 =3D ""
          let hpp_captcha_no_2 =3D ""
          try { captcha =3D hpp_captcha } catch (e) { captcha =3D "Flase" }
          if (captcha !=3D "True") { hpp_captcha_html =3D "//"; hpp_captcha=
_no_1 =3D "&lt;!--"; hpp_captcha_no_2 =3D "--&gt;" }
          let hpp_loginhtml =3D `
&lt;!DOCTYPE html&gt;
&lt;html lang=3D"zh-cmn-Hans"&gt;
 &lt;head&gt;
  &lt;meta charset=3D"utf-8" /&gt;
  &lt;meta name=3D"viewport" content=3D"width=3Ddevice-width, initial-scale=
=3D1, minimum-scale=3D1, maximum-scale=3D1, user-scalable=3Dno" /&gt;
  &lt;script src=3D"https://cdn.jsdelivr.net/npm/jquery@3.4.1"&gt;&lt;/scri=
pt&gt;
  &lt;title&gt;=E5=90=8E=E5=8F=B0&lt;/title&gt;
  &lt;style&gt;
  .rv-root{
      z-index:999;
  }
  a:link { text-decoration: none;color: white}
=E3=80=80=E3=80=80 a:active { text-decoration:blink}
=E3=80=80=E3=80=80 a:hover { text-decoration:underline;color: white}=20
=E3=80=80=E3=80=80 a:visited { text-decoration: none;color: white}
  &lt;/style&gt;
  &lt;link rel=3D"stylesheet" href=3D"https://cdn.jsdelivr.net/gh/HexoPlusP=
lus/HexoPlusPlus@${hpp_CDNver}/login.css" /&gt;=20
 &lt;/head&gt;
 &lt;body&gt;
  &lt;div id=3D"all"&gt;
   &lt;div class=3D"wrapper"&gt;
    &lt;div class=3D"bg-container"&gt;
     &lt;div class=3D"container"&gt;
      &lt;h1 style=3D"margin: 0;" id=3D"bar"&gt;Welcome&lt;/h1&gt;
      &lt;form class=3D"form" id=3D"fm"&gt;
       &lt;input id=3D"username" type=3D"text" placeholder=3D"=E7=94=A8=E6=
=88=B7=E5=90=8D" value=3D"" name=3D"username" /&gt;
       &lt;input id=3D"password" type=3D"password" placeholder=3D"=E5=AF=86=
=E7=A0=81" value=3D"" name=3D"password" /&gt;
       &lt;button type=3D"button" id=3D"login-button"&gt;=E7=99=BB=E5=BD=95=
&lt;/button&gt;
       &lt;br /&gt;
       &lt;br /&gt;
       &lt;a href=3D"https://github.com/HexoPlusPlus/HexoPlusPlus" id=3D"ti=
ps" style=3D"color: #fff;"&gt;@HexoPP&lt;/a&gt;
      &lt;/form&gt;
     &lt;/div&gt;
    &lt;/div&gt;
    &lt;ul class=3D"bg-bubbles"&gt;
     &lt;li&gt;&lt;/li&gt;
     &lt;li&gt;&lt;/li&gt;
     &lt;li&gt;&lt;/li&gt;
     &lt;li&gt;&lt;/li&gt;
     &lt;li&gt;&lt;/li&gt;
     &lt;li&gt;&lt;/li&gt;
     &lt;li&gt;&lt;/li&gt;
     &lt;li&gt;&lt;/li&gt;
     &lt;li&gt;&lt;/li&gt;
     &lt;li&gt;&lt;/li&gt;
    &lt;/ul&gt;
   &lt;/div&gt;
  &lt;/div&gt;
  &lt;script src=3D"https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@$=
{hpp_CDNver}/md5.js"&gt;&lt;/script&gt;
  ${hpp_captcha_no_1}&lt;script src=3D"https://cdn.jsdelivr.net/gh/zpfz/RVe=
rify.js/dist/RVerify.min.js"&gt;&lt;/script&gt;${hpp_captcha_no_2}
	  ${hpp_captcha_no_1}&lt;link rel=3D"stylesheet" href=3D"https://cdn.jsdel=
ivr.net/gh/zpfz/RVerify.js/dist/RVerify.min.css"/&gt;${hpp_captcha_no_2}
  &lt;script&gt;
document.onkeydown=3DkeyListener;
${hpp_captcha_html}  RVerify.configure({
${hpp_captcha_html}   mask: 0.5,
${hpp_captcha_html}   maskClosable: true,
${hpp_captcha_html}   title: '=E4=BA=BA=E6=9C=BA=E9=AA=8C=E8=AF=81',
${hpp_captcha_html}   album: ['/hpp/api/captchaimg']
${hpp_captcha_html} })
function login(){
${hpp_captcha_html} RVerify.action(function(res){
${hpp_captcha_html} if(res=3D=3D1){
document.cookie =3D "username=3D" + md5(document.getElementById("username")=
.value);
document.cookie =3D "password=3D" + md5(document.getElementById("password")=
.value);
window.location.href =3D '/hpp/admin/dash/home';
${hpp_captcha_html} }
${hpp_captcha_html}});
}
function keyListener(e){
    if(e.keyCode =3D=3D 13){
        login();
    }
}
$("#login-button").click(function(event) {
login();
});
  &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
`
          return new Response(hpp_loginhtml, {
            headers: { "content-type": "text/html;charset=3DUTF-8" }
          })
        }

        return Response.redirect('https://' + domain + '/hpp/admin/login', =
302)
      }
      return Response.redirect('https://' + domain + '/hpp/admin/dash', 302=
)
    }
    if (path.startsWith('/hpp/api')) {
      if (path =3D=3D "/hpp/api/getblogeractive") {
        const hpp_activetime =3D await KVNAME.get("hpp_activetime")
        var k =3D (Date.parse(new Date()) - hpp_activetime) / 1000
        const hpp_re_active_init =3D {
          headers: {
            "content-type": "application/javascript; charset=3Dutf-8",
            "Access-Control-Allow-Origin": "*"
          }
        }
        if (k &lt; 30) {
          return new Response('document.getElementById("bloggeractivetime")=
.innerHTML=3D\'=E5=8D=9A=E4=B8=BB=E5=88=9A=E5=88=9A=E8=BF=98=E5=9C=A8=E8=BF=
=99=E5=84=BF=E5=91=A2\'', hpp_re_active_init)
        }
        else if (k &lt; 60) {
          return new Response('document.getElementById("bloggeractivetime")=
.innerHTML=3D\'=E5=8D=9A=E4=B8=BB=E5=9C=A8' + k + '=E7=A7=92=E5=89=8D=E7=A6=
=BB=E5=BC=80=E8=BF=99=E5=84=BF\'', hpp_re_active_init)
        }
        else if (k &lt; 3600) {
          return new Response('document.getElementById("bloggeractivetime")=
.innerHTML=3D\'=E5=8D=9A=E4=B8=BB=E5=9C=A8' + Math.round(k / 60) + '=E5=88=
=86=E9=92=9F=E5=89=8D=E5=81=B7=E5=81=B7=E7=9E=84=E4=BA=86=E4=B8=80=E7=9C=BC=
=E5=8D=9A=E5=AE=A2\'', hpp_re_active_init)
        }
        else {
          return new Response('document.getElementById("bloggeractivetime")=
.innerHTML=3D\'=E5=8D=9A=E4=B8=BB=E5=9C=A8' + Math.round(k / 3600) + '=E5=
=B0=8F=E6=97=B6=E5=89=8D=E6=B4=BB=E8=B7=83=E4=BA=86=E4=B8=80=E6=AC=A1\'', h=
pp_re_active_init)
        }
      }
      if (path =3D=3D "/hpp/api/captchaimg") {
        let url =3D "https://thispersondoesnotexist.com/image"
        let request =3D new Request(url);
        return (
          fetch(request)
        );

      }
      if (path =3D=3D "/hpp/api/twikoo") {
        const hpp_config =3D await JSON.parse(await JSON.parse(await KVNAME=
.get("hpp_config")));
        const env_id =3D hpp_config["hpp_twikoo_envId"]
        const hpp_cors =3D hpp_config["hpp_cors"]
        const url =3D "https://tcb-api.tencentcloudapi.com/web?env=3D" + en=
v_id
        async function get_refresh_token() {
          /*=E7=AC=AC=E4=B8=80=E6=AD=A5=E8=8E=B7=E5=BE=97refresh_token*/
          const step_1_body =3D {
            action: "auth.signInAnonymously",
            anonymous_uuid: "",
            dataVersion: "1970-1-1",
            env: env_id,
            refresh_token: "",
            seqId: ""
          }
          const step_1 =3D {
            body: JSON.stringify(step_1_body),
            method: "POST",
            headers: {
              "content-type": "application/json;charset=3DUTF-8"
            }
          }
          /*refresh_token=E5=88=B0=E6=89=8B*/
          //console.log(step_1_body)
          return JSON.parse(await (await fetch(url, step_1)).text())["refre=
sh_token"]
        }
        async function get_access_token(refresh_token) {
          const step_2_body =3D {
            action: "auth.fetchAccessTokenWithRefreshToken",
            anonymous_uuid: "",
            dataVersion: "1970-1-1",
            env: env_id,
            refresh_token: refresh_token,
            seqId: ""
          }
          const step_2 =3D {
            body: JSON.stringify(step_2_body),
            method: "POST",
            headers: {
              "content-type": "application/json;charset=3DUTF-8"
            }
          }
          /*access_token=E5=88=B0=E6=89=8B*/
          return JSON.parse(await (await fetch(url, step_2)).text())["acces=
s_token"];
        }
        async function get_comment(access_token, path, before) {

          const re_data =3D { "event": "COMMENT_GET", "url": path, "before"=
: before }
          const step_3_body =3D {
            access_token: access_token,
            action: "functions.invokeFunction",
            dataVersion: "1970-1-1",
            env: env_id,
            function_name: "twikoo",
            request_data: JSON.stringify(re_data),
            seqId: ""
          }
          const step_3 =3D {
            body: JSON.stringify(step_3_body),
            method: "POST",
            headers: {
              "content-type": "application/json;charset=3DUTF-8"
            }
          }
          return (await (await fetch(url, step_3)).text())

        }
        const req =3D await JSON.parse(await request.text())
        const path =3D req["path"]
        const before =3D req["before"]
        let refresh_token =3D await KVNAME.get("hpp_comment_refresh_token")
        let access_token =3D await KVNAME.get("hpp_comment_access_token")
        let val =3D await get_comment(access_token, path, before)
        let twikoo_code =3D await JSON.parse(val)['code']
        if (twikoo_code =3D=3D 'CHECK_LOGIN_FAILED' | twikoo_code =3D=3D 'I=
NVALID_PARAM') {
          refresh_token =3D await get_refresh_token()
          await KVNAME.put("hpp_comment_refresh_token", refresh_token)
          access_token =3D await get_access_token(refresh_token)
          await KVNAME.put("hpp_comment_access_token", access_token)
          val =3D await get_comment(access_token, path, before)
        }
        return new Response(val, {
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        }
        )
      }
      if (path =3D=3D "/hpp/api/gethpptalk") {
        const req_r =3D await request.text()
        if (req_r !=3D "") {
          const limit =3D (await JSON.parse(req_r))["limit"]
          const start =3D (await JSON.parse(req_r))["start"]
          const hpp_talk =3D await JSON.parse(await KVNAME.get("hpp_talk_da=
ta"));
          let hpp_talk_res =3D []
          let hpp_vi =3D ""
          for (var i =3D getJsonLength(hpp_talk) - start - 1; i &gt; getJso=
nLength(hpp_talk) - start - limit; i--) {
            try { hpp_vi =3D hpp_talk[i]["visible"] } catch (e) { hpp_vi =
=3D null }
            if (hpp_vi !=3D "False") {
              hpp_talk_res.push(await JSON.stringify(hpp_talk[i]))
            }
          }
          return new Response(JSON.stringify(hpp_talk_res), {
            headers: {
              "content-type": "application/json;charset=3DUTF-8",
              "Access-Control-Allow-Origin": "*"
            }
          })
        } else {
          return new Response("ERROR", {
            headers: {
              "Access-Control-Allow-Origin": "*"
            }
          })
        }
      }

    }
    if (path =3D=3D "/hpp/hpp_talk") {
      const talk_user_html =3D `&lt;!DOCTYPE html&gt;
&lt;html lang=3D"zh"&gt;
&lt;head&gt;
&lt;meta charset=3D"UTF-8"&gt;
&lt;meta http-equiv=3D"X-UA-Compatible" content=3D"IE=3Dedge,chrome=3D1"&gt=
;=20
&lt;meta name=3D"viewport" content=3D"width=3Ddevice-width, initial-scale=
=3D1.0"&gt;
&lt;title&gt;HexoPlusPlus_Talk=E9=A2=84=E8=A7=88=E9=A1=B5=E9=9D=A2&lt;/titl=
e&gt;
&lt;/head&gt;
&lt;body&gt;
	&lt;link rel=3D"stylesheet" href=3D"https://cdn.jsdelivr.net/gh/HexoPlusPl=
us/HexoPlusPlus@${hpp_CDNver}/talk.css" /&gt;=20
&lt;script src=3D"https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@${h=
pp_CDNver}/talk_user.js"&gt;&lt;/script&gt;
&lt;div id=3D"hpp_talk"&gt;&lt;/div&gt;
&lt;script&gt;
new hpp_talk({
id:"hpp_talk",
domain: window.location.host,
limit: 10,
start: 0=20
});
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;`
      return new Response(talk_user_html, {
        headers: { "content-type": "text/html;charset=3DUTF-8" }
      })
    }
    let hpp_errorhtml =3D `
&lt;!DOCTYPE html&gt;
&lt;html lang=3D"en" class=3D"no-js"&gt;
	&lt;head&gt;
        &lt;meta charset=3D"UTF-8" /&gt;
        &lt;meta http-equiv=3D"X-UA-Compatible" content=3D"IE=3Dedge"&gt;=
=20
        &lt;meta content=3D"width=3Ddevice-width, initial-scale=3D1.0, maxi=
mum-scale=3D1.0, user-scalable=3D0;" name=3D"viewport" /&gt;=20
        &lt;title&gt;HexoPlusPlusError&lt;/title&gt;
        &lt;link rel=3D"stylesheet" type=3D"text/css" href=3D"https://cdn.j=
sdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@${hpp_CDNver}/error.css" /&gt;
	&lt;/head&gt;
	&lt;body&gt;
		&lt;div class=3D"container demo-2"&gt;
			&lt;div class=3D"content"&gt;
                &lt;div id=3D"large-header" class=3D"large-header"&gt;
                    &lt;canvas id=3D"demo-canvas"&gt;&lt;/canvas&gt;
                    &lt;h1 class=3D"main-title"&gt;&lt;span&gt;Error&lt;/sp=
an&gt;&lt;/h1&gt;
                &lt;/div&gt;
                &lt;div class=3D"codrops-header"&gt;
                    &lt;h1&gt;HexoPlusPlus =E9=94=99=E8=AF=AF&lt;span&gt;=
=E4=B8=8D=E7=9F=A5=E9=81=93=E4=BD=A0=E7=9A=84=E7=9B=AE=E7=9A=84=E6=98=AF=E4=
=BB=80=E4=B9=88&lt;/span&gt;&lt;/h1&gt;
                    &lt;nav class=3D"codrops-demos"&gt;
                        &lt;a class=3D"current-demo" href=3D"/hpp/admin/das=
h/home"&gt;=E4=BB=AA=E8=A1=A8=E7=9B=98&lt;/a&gt;
                        &lt;a class=3D"current-demo" href=3D"https://github=
.com/HexoPlusPlus/HexoPlusPlus"&gt;Github&lt;/a&gt;
                    &lt;/nav&gt;
                &lt;/div&gt;
            &lt;/div&gt;
		&lt;/div&gt;
        &lt;script src=3D"https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlus=
Plus@${hpp_CDNver}/error.js"&gt;&lt;/script&gt;
	&lt;/body&gt;
&lt;/html&gt;
`
    return new Response(hpp_errorhtml, {
      headers: { "content-type": "text/html;charset=3DUTF-8" }
    })

  } catch (e) {
    let hpp_errorhtml =3D `
&lt;!DOCTYPE html&gt;
&lt;html lang=3D"en" class=3D"no-js"&gt;
	&lt;head&gt;
        &lt;meta charset=3D"UTF-8" /&gt;
        &lt;meta http-equiv=3D"X-UA-Compatible" content=3D"IE=3Dedge"&gt;=
=20
        &lt;meta content=3D"width=3Ddevice-width, initial-scale=3D1.0, maxi=
mum-scale=3D1.0, user-scalable=3D0;" name=3D"viewport" /&gt;=20
        &lt;title&gt;HexoPlusPlusError&lt;/title&gt;
        &lt;link rel=3D"stylesheet" type=3D"text/css" href=3D"https://cdn.j=
sdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@${hpp_CDNver}/error.css" /&gt;
	&lt;/head&gt;
	&lt;body&gt;
		&lt;div class=3D"container demo-2"&gt;
			&lt;div class=3D"content"&gt;
                &lt;div id=3D"large-header" class=3D"large-header"&gt;
                    &lt;canvas id=3D"demo-canvas"&gt;&lt;/canvas&gt;
                    &lt;h1 class=3D"main-title"&gt;&lt;span&gt;Error&lt;/sp=
an&gt;&lt;/h1&gt;
                &lt;/div&gt;
                &lt;div class=3D"codrops-header"&gt;
                    &lt;h1&gt;HexoPlusPlus =E5=BC=82=E5=B8=B8&lt;span&gt;${=
e}&lt;/span&gt;&lt;/h1&gt;
                    &lt;nav class=3D"codrops-demos"&gt;
                        &lt;a class=3D"current-demo" href=3D"https://hexopl=
usplus.js.org"&gt;=E6=96=87=E6=A1=A3&lt;/a&gt;
                        &lt;a class=3D"current-demo" href=3D"https://github=
.com/HexoPlusPlus/HexoPlusPlus"&gt;Github&lt;/a&gt;
						&lt;a class=3D"current-demo" href=3D"https://jq.qq.com/?_wv=3D1027&am=
p;k=3DrAcnhzqK"&gt;QQ=E7=BE=A4=E5=AF=BB=E6=B1=82=E5=B8=AE=E5=8A=A9&lt;/a&gt=
;
                    &lt;/nav&gt;
                &lt;/div&gt;
            &lt;/div&gt;
		&lt;/div&gt;
        &lt;script src=3D"https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlus=
Plus@${hpp_CDNver}/error.js"&gt;&lt;/script&gt;
	&lt;/body&gt;
&lt;/html&gt;
`
    return new Response(hpp_errorhtml, {
      headers: { "content-type": "text/html;charset=3DUTF-8" }
    })

  }
}
</pre></body></html>
------MultipartBoundary--jV5Bwzklz3erq74XugwEbUKfo7eIifVeB78CVfOmmO------
