var window=window||{};var navigator=navigator||{};RSA=function(){function t(t,e){return new r(t,e)}
    function e(t,e){if(e&lt;t.length+11)return uv_alert("Message too long for RSA"),null;for(var i=new Array,n=t.length-1;n&gt;=0&amp;&amp;e&gt;0;){var o=t.charCodeAt(n--);i[--e]=o}
        i[--e]=0;for(var p=new Y,s=new Array;e&gt;2;){for(s[0]=0;0==s[0];)p.nextBytes(s);i[--e]=s[0]}
        return i[--e]=2,i[--e]=0,new r(i)}
    function i(){this.n=null,this.e=0,this.d=null,this.p=null,this.q=null,this.dmp1=null,this.dmq1=null,this.coeff=null}
    function n(e,i){null!=e&amp;&amp;null!=i&amp;&amp;e.length&gt;0&amp;&amp;i.length&gt;0?(this.n=t(e,16),this.e=parseInt(i,16)):uv_alert("Invalid RSA public key")}
    function o(t){return t.modPowInt(this.e,this.n)}
    function p(t){var i=e(t,this.n.bitLength()+7&gt;&gt;3);if(null==i)return null;var n=this.doPublic(i);if(null==n)return null;var o=n.toString(16);return 0==(1&amp;o.length)?o:"0"+o}
    function r(t,e,i){null!=t&amp;&amp;("number"==typeof t?this.fromNumber(t,e,i):null==e&amp;&amp;"string"!=typeof t?this.fromString(t,256):this.fromString(t,e))}
    function s(){return new r(null)}
    function a(t,e,i,n,o,p){for(;--p&gt;=0;){var r=e*this[t++]+i[n]+o;o=Math.floor(r/67108864),i[n++]=67108863&amp;r}
        return o}
    function l(t,e,i,n,o,p){for(var r=32767&amp;e,s=e&gt;&gt;15;--p&gt;=0;){var a=32767&amp;this[t],l=this[t++]&gt;&gt;15,c=s*a+l*r;a=r*a+((32767&amp;c)&lt;&lt;15)+i[n]+(1073741823&amp;o),o=(a&gt;&gt;&gt;30)+(c&gt;&gt;&gt;15)+s*l+(o&gt;&gt;&gt;30),i[n++]=1073741823&amp;a}
        return o}
    function c(t,e,i,n,o,p){for(var r=16383&amp;e,s=e&gt;&gt;14;--p&gt;=0;){var a=16383&amp;this[t],l=this[t++]&gt;&gt;14,c=s*a+l*r;a=r*a+((16383&amp;c)&lt;&lt;14)+i[n]+o,o=(a&gt;&gt;28)+(c&gt;&gt;14)+s*l,i[n++]=268435455&amp;a}
        return o}
    function u(t){return at.charAt(t)}
    function g(t,e){var i=lt[t.charCodeAt(e)];return null==i?-1:i}
    function d(t){for(var e=this.t-1;e&gt;=0;--e)t[e]=this[e];t.t=this.t,t.s=this.s}
    function h(t){this.t=1,this.s=t&lt;0?-1:0,t&gt;0?this[0]=t:t&lt;-1?this[0]=t+DV:this.t=0}
    function f(t){var e=s();return e.fromInt(t),e}
    function _(t,e){var i;if(16==e)i=4;else if(8==e)i=3;else if(256==e)i=8;else if(2==e)i=1;else if(32==e)i=5;else{if(4!=e)return void this.fromRadix(t,e);i=2}
        this.t=0,this.s=0;for(var n=t.length,o=!1,p=0;--n&gt;=0;){var s=8==i?255&amp;t[n]:g(t,n);s&lt;0?"-"==t.charAt(n)&amp;&amp;(o=!0):(o=!1,0==p?this[this.t++]=s:p+i&gt;this.DB?(this[this.t-1]|=(s&amp;(1&lt;&lt;this.DB-p)-1)&lt;&lt;p,this[this.t++]=s&gt;&gt;this.DB-p):this[this.t-1]|=s&lt;&lt;p,(p+=i)&gt;=this.DB&amp;&amp;(p-=this.DB))}
        8==i&amp;&amp;0!=(128&amp;t[0])&amp;&amp;(this.s=-1,p&gt;0&amp;&amp;(this[this.t-1]|=(1&lt;&lt;this.DB-p)-1&lt;&lt;p)),this.clamp(),o&amp;&amp;r.ZERO.subTo(this,this)}
    function m(){for(var t=this.s&amp;this.DM;this.t&gt;0&amp;&amp;this[this.t-1]==t;)--this.t}
    function $(t){if(this.s&lt;0)return"-"+this.negate().toString(t);var e;if(16==t)e=4;else if(8==t)e=3;else if(2==t)e=1;else if(32==t)e=5;else{if(4!=t)return this.toRadix(t);e=2}
        var i,n=(1&lt;&lt;e)-1,o=!1,p="",r=this.t,s=this.DB-r*this.DB%e;if(r--&gt;0)for(s&lt;this.DB&amp;&amp;(i=this[r]&gt;&gt;s)&gt;0&amp;&amp;(o=!0,p=u(i));r&gt;=0;)s&lt;e?(i=(this[r]&amp;(1&lt;&lt;s)-1)&lt;&lt;e-s,i|=this[--r]&gt;&gt;(s+=this.DB-e)):(i=this[r]&gt;&gt;(s-=e)&amp;n,s&lt;=0&amp;&amp;(s+=this.DB,--r)),i&gt;0&amp;&amp;(o=!0),o&amp;&amp;(p+=u(i));return o?p:"0"}
    function v(){var t=s();return r.ZERO.subTo(this,t),t}
    function y(){return this.s&lt;0?this.negate():this}
    function w(t){var e=this.s-t.s;if(0!=e)return e;var i=this.t;if(0!=(e=i-t.t))return e;for(;--i&gt;=0;)if(0!=(e=this[i]-t[i]))return e;return 0}
    function k(t){var e,i=1;return 0!=(e=t&gt;&gt;&gt;16)&amp;&amp;(t=e,i+=16),0!=(e=t&gt;&gt;8)&amp;&amp;(t=e,i+=8),0!=(e=t&gt;&gt;4)&amp;&amp;(t=e,i+=4),0!=(e=t&gt;&gt;2)&amp;&amp;(t=e,i+=2),0!=(e=t&gt;&gt;1)&amp;&amp;(t=e,i+=1),i}
    function b(){return this.t&lt;=0?0:this.DB*(this.t-1)+k(this[this.t-1]^this.s&amp;this.DM)}
    function q(t,e){var i;for(i=this.t-1;i&gt;=0;--i)e[i+t]=this[i];for(i=t-1;i&gt;=0;--i)e[i]=0;e.t=this.t+t,e.s=this.s}
    function S(t,e){for(var i=t;i&lt;this.t;++i)e[i-t]=this[i];e.t=Math.max(this.t-t,0),e.s=this.s}
    function C(t,e){var i,n=t%this.DB,o=this.DB-n,p=(1&lt;&lt;o)-1,r=Math.floor(t/this.DB),s=this.s&lt;&lt;n&amp;this.DM;for(i=this.t-1;i&gt;=0;--i)e[i+r+1]=this[i]&gt;&gt;o|s,s=(this[i]&amp;p)&lt;&lt;n;for(i=r-1;i&gt;=0;--i)e[i]=0;e[r]=s,e.t=this.t+r+1,e.s=this.s,e.clamp()}
    function T(t,e){e.s=this.s;var i=Math.floor(t/this.DB);if(i&gt;=this.t)return void(e.t=0);var n=t%this.DB,o=this.DB-n,p=(1&lt;&lt;n)-1;e[0]=this[i]&gt;&gt;n;for(var r=i+1;r&lt;this.t;++r)e[r-i-1]|=(this[r]&amp;p)&lt;&lt;o,e[r-i]=this[r]&gt;&gt;n;n&gt;0&amp;&amp;(e[this.t-i-1]|=(this.s&amp;p)&lt;&lt;o),e.t=this.t-i,e.clamp()}
    function x(t,e){for(var i=0,n=0,o=Math.min(t.t,this.t);i&lt;o;)n+=this[i]-t[i],e[i++]=n&amp;this.DM,n&gt;&gt;=this.DB;if(t.t&lt;this.t){for(n-=t.s;i&lt;this.t;)n+=this[i],e[i++]=n&amp;this.DM,n&gt;&gt;=this.DB;n+=this.s}else{for(n+=this.s;i&lt;t.t;)n-=t[i],e[i++]=n&amp;this.DM,n&gt;&gt;=this.DB;n-=t.s}
        e.s=n&lt;0?-1:0,n&lt;-1?e[i++]=this.DV+n:n&gt;0&amp;&amp;(e[i++]=n),e.t=i,e.clamp()}
    function L(t,e){var i=this.abs(),n=t.abs(),o=i.t;for(e.t=o+n.t;--o&gt;=0;)e[o]=0;for(o=0;o&lt;n.t;++o)e[o+i.t]=i.am(0,n[o],e,o,0,i.t);e.s=0,e.clamp(),this.s!=t.s&amp;&amp;r.ZERO.subTo(e,e)}
    function N(t){for(var e=this.abs(),i=t.t=2*e.t;--i&gt;=0;)t[i]=0;for(i=0;i&lt;e.t-1;++i){var n=e.am(i,e[i],t,2*i,0,1);(t[i+e.t]+=e.am(i+1,2*e[i],t,2*i+1,n,e.t-i-1))&gt;=e.DV&amp;&amp;(t[i+e.t]-=e.DV,t[i+e.t+1]=1)}
        t.t&gt;0&amp;&amp;(t[t.t-1]+=e.am(i,e[i],t,2*i,0,1)),t.s=0,t.clamp()}
    function E(t,e,i){var n=t.abs();if(!(n.t&lt;=0)){var o=this.abs();if(o.t&lt;n.t)return null!=e&amp;&amp;e.fromInt(0),void(null!=i&amp;&amp;this.copyTo(i));null==i&amp;&amp;(i=s());var p=s(),a=this.s,l=t.s,c=this.DB-k(n[n.t-1]);c&gt;0?(n.lShiftTo(c,p),o.lShiftTo(c,i)):(n.copyTo(p),o.copyTo(i));var u=p.t,g=p[u-1];if(0!=g){var d=g*(1&lt;&lt;this.F1)+(u&gt;1?p[u-2]&gt;&gt;this.F2:0),h=this.FV/d,f=(1&lt;&lt;this.F1)/d,_=1&lt;&lt;this.F2,m=i.t,$=m-u,v=null==e?s():e;for(p.dlShiftTo($,v),i.compareTo(v)&gt;=0&amp;&amp;(i[i.t++]=1,i.subTo(v,i)),r.ONE.dlShiftTo(u,v),v.subTo(p,p);p.t&lt;u;)p[p.t++]=0;for(;--$&gt;=0;){var y=i[--m]==g?this.DM:Math.floor(i[m]*h+(i[m-1]+_)*f);if((i[m]+=p.am(0,y,i,$,0,u))&lt;y)for(p.dlShiftTo($,v),i.subTo(v,i);i[m]&lt;--y;)i.subTo(v,i)}
        null!=e&amp;&amp;(i.drShiftTo(u,e),a!=l&amp;&amp;r.ZERO.subTo(e,e)),i.t=u,i.clamp(),c&gt;0&amp;&amp;i.rShiftTo(c,i),a&lt;0&amp;&amp;r.ZERO.subTo(i,i)}}}
    function P(t){var e=s();return this.abs().divRemTo(t,null,e),this.s&lt;0&amp;&amp;e.compareTo(r.ZERO)&gt;0&amp;&amp;t.subTo(e,e),e}
    function A(t){this.m=t}
    function I(t){return t.s&lt;0||t.compareTo(this.m)&gt;=0?t.mod(this.m):t}
    function Q(t){return t}
    function M(t){t.divRemTo(this.m,null,t)}
    function D(t,e,i){t.multiplyTo(e,i),this.reduce(i)}
    function B(t,e){t.squareTo(e),this.reduce(e)}
    function H(){if(this.t&lt;1)return 0;var t=this[0];if(0==(1&amp;t))return 0;var e=3&amp;t;return e=e*(2-(15&amp;t)*e)&amp;15,e=e*(2-(255&amp;t)*e)&amp;255,e=e*(2-((65535&amp;t)*e&amp;65535))&amp;65535,e=e*(2-t*e%this.DV)%this.DV,e&gt;0?this.DV-e:-e}
    function U(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&amp;this.mp,this.mph=this.mp&gt;&gt;15,this.um=(1&lt;&lt;t.DB-15)-1,this.mt2=2*t.t}
    function O(t){var e=s();return t.abs().dlShiftTo(this.m.t,e),e.divRemTo(this.m,null,e),t.s&lt;0&amp;&amp;e.compareTo(r.ZERO)&gt;0&amp;&amp;this.m.subTo(e,e),e}
    function j(t){var e=s();return t.copyTo(e),this.reduce(e),e}
    function V(t){for(;t.t&lt;=this.mt2;)t[t.t++]=0;for(var e=0;e&lt;this.m.t;++e){var i=32767&amp;t[e],n=i*this.mpl+((i*this.mph+(t[e]&gt;&gt;15)*this.mpl&amp;this.um)&lt;&lt;15)&amp;t.DM;for(i=e+this.m.t,t[i]+=this.m.am(0,n,t,e,0,this.m.t);t[i]&gt;=t.DV;)t[i]-=t.DV,t[++i]++}
        t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)&gt;=0&amp;&amp;t.subTo(this.m,t)}
    function R(t,e){t.squareTo(e),this.reduce(e)}
    function F(t,e,i){t.multiplyTo(e,i),this.reduce(i)}
    function G(){return 0==(this.t&gt;0?1&amp;this[0]:this.s)}
    function z(t,e){if(t&gt;4294967295||t&lt;1)return r.ONE;var i=s(),n=s(),o=e.convert(this),p=k(t)-1;for(o.copyTo(i);--p&gt;=0;)if(e.sqrTo(i,n),(t&amp;1&lt;&lt;p)&gt;0)e.mulTo(n,o,i);else{var a=i;i=n,n=a}
        return e.revert(i)}
    function W(t,e){var i;return i=t&lt;256||e.isEven()?new A(e):new U(e),this.exp(t,i)}
    function X(t){ut[gt++]^=255&amp;t,ut[gt++]^=t&gt;&gt;8&amp;255,ut[gt++]^=t&gt;&gt;16&amp;255,ut[gt++]^=t&gt;&gt;24&amp;255,gt&gt;=ft&amp;&amp;(gt-=ft)}
    function Z(){X((new Date).getTime())}
    function K(){if(null==ct){for(Z(),ct=nt(),ct.init(ut),gt=0;gt&lt;ut.length;++gt)ut[gt]=0;gt=0}
        return ct.next()}
    function J(t){var e;for(e=0;e&lt;t.length;++e)t[e]=K()}
    function Y(){}
    function tt(){this.i=0,this.j=0,this.S=new Array}
    function et(t){var e,i,n;for(e=0;e&lt;256;++e)this.S[e]=e;for(i=0,e=0;e&lt;256;++e)i=i+this.S[e]+t[e%t.length]&amp;255,n=this.S[e],this.S[e]=this.S[i],this.S[i]=n;this.i=0,this.j=0}
    function it(){var t;return this.i=this.i+1&amp;255,this.j=this.j+this.S[this.i]&amp;255,t=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=t,this.S[t+this.S[this.i]&amp;255]}
    function nt(){return new tt}
    function ot(t,e,n){e="e9a815ab9d6e86abbf33a4ac64e9196d5be44a09bd0ed6ae052914e1a865ac8331fed863de8ea697e9a7f63329e5e23cda09c72570f46775b7e39ea9670086f847d3c9c51963b131409b1e04265d9747419c635404ca651bbcbc87f99b8008f7f5824653e3658be4ba73e4480156b390bb73bc1f8b33578e7a4e12440e9396f2552c1aff1c92e797ebacdc37c109ab7bce2367a19c56a033ee04534723cc2558cb27368f5b9d32c04d12dbd86bbd68b1d99b7c349a8453ea75d1b2e94491ab30acf6c46a36a75b721b312bedf4e7aad21e54e9bcbcf8144c79b6e3c05eb4a1547750d224c0085d80e6da3907c3d945051c13c7c1dcefd6520ee8379c4f5231ed",n="10001";var o=new i;return o.setPublic(e,n),o.encrypt(t)}
    i.prototype.doPublic=o,i.prototype.setPublic=n,i.prototype.encrypt=p;var pt;"Microsoft Internet Explorer"==navigator.appName?(r.prototype.am=l,pt=30):"Netscape"!=navigator.appName?(r.prototype.am=a,pt=26):(r.prototype.am=c,pt=28),r.prototype.DB=pt,r.prototype.DM=(1&lt;&lt;pt)-1,r.prototype.DV=1&lt;&lt;pt;r.prototype.FV=Math.pow(2,52),r.prototype.F1=52-pt,r.prototype.F2=2*pt-52;var rt,st,at="0123456789abcdefghijklmnopqrstuvwxyz",lt=new Array;for(rt="0".charCodeAt(0),st=0;st&lt;=9;++st)lt[rt++]=st;for(rt="a".charCodeAt(0),st=10;st&lt;36;++st)lt[rt++]=st;for(rt="A".charCodeAt(0),st=10;st&lt;36;++st)lt[rt++]=st;A.prototype.convert=I,A.prototype.revert=Q,A.prototype.reduce=M,A.prototype.mulTo=D,A.prototype.sqrTo=B,U.prototype.convert=O,U.prototype.revert=j,U.prototype.reduce=V,U.prototype.mulTo=F,U.prototype.sqrTo=R,r.prototype.copyTo=d,r.prototype.fromInt=h,r.prototype.fromString=_,r.prototype.clamp=m,r.prototype.dlShiftTo=q,r.prototype.drShiftTo=S,r.prototype.lShiftTo=C,r.prototype.rShiftTo=T,r.prototype.subTo=x,r.prototype.multiplyTo=L,r.prototype.squareTo=N,r.prototype.divRemTo=E,r.prototype.invDigit=H,r.prototype.isEven=G,r.prototype.exp=z,r.prototype.toString=$,r.prototype.negate=v,r.prototype.abs=y,r.prototype.compareTo=w,r.prototype.bitLength=b,r.prototype.mod=P,r.prototype.modPowInt=W,r.ZERO=f(0),r.ONE=f(1);var ct,ut,gt;if(null==ut){ut=new Array,gt=0;var dt;if("Netscape"==navigator.appName&amp;&amp;navigator.appVersion&lt;"5"&amp;&amp;window.crypto&amp;&amp;window.crypto.random){var ht=window.crypto.random(32);for(dt=0;dt&lt;ht.length;++dt)ut[gt++]=255&amp;ht.charCodeAt(dt)}
        for(;gt&lt;ft;)dt=Math.floor(65536*Math.random()),ut[gt++]=dt&gt;&gt;&gt;8,ut[gt++]=255&amp;dt;gt=0,Z()}
    Y.prototype.nextBytes=J,tt.prototype.init=et,tt.prototype.next=it;var ft=256;return{rsa_encrypt:ot}}(),function(t){function e(){return Math.round(4294967295*Math.random())}
    function i(t,e,i){(!i||i&gt;4)&amp;&amp;(i=4);for(var n=0,o=e;o&lt;e+i;o++)n&lt;&lt;=8,n|=t[o];return(4294967295&amp;n)&gt;&gt;&gt;0}
    function n(t,e,i){t[e+3]=i&gt;&gt;0&amp;255,t[e+2]=i&gt;&gt;8&amp;255,t[e+1]=i&gt;&gt;16&amp;255,t[e+0]=i&gt;&gt;24&amp;255}
    function o(t){if(!t)return"";for(var e="",i=0;i&lt;t.length;i++){var n=Number(t[i]).toString(16);1==n.length&amp;&amp;(n="0"+n),e+=n}
        return e}
    function p(t){for(var e="",i=0;i&lt;t.length;i+=2)e+=String.fromCharCode(parseInt(t.substr(i,2),16));return e}
    function r(t,e){if(!t)return"";e&amp;&amp;(t=s(t));for(var i=[],n=0;n&lt;t.length;n++)i[n]=t.charCodeAt(n);return o(i)}
    function s(t){var e,i,n=[],o=t.length;for(e=0;e&lt;o;e++)i=t.charCodeAt(e),i&gt;0&amp;&amp;i&lt;=127?n.push(t.charAt(e)):i&gt;=128&amp;&amp;i&lt;=2047?n.push(String.fromCharCode(192|i&gt;&gt;6&amp;31),String.fromCharCode(128|63&amp;i)):i&gt;=2048&amp;&amp;i&lt;=65535&amp;&amp;n.push(String.fromCharCode(224|i&gt;&gt;12&amp;15),String.fromCharCode(128|i&gt;&gt;6&amp;63),String.fromCharCode(128|63&amp;i));return n.join("")}
    function a(t){m=new Array(8),$=new Array(8),v=y=0,b=!0,_=0;var i=t.length,n=0;_=(i+10)%8,0!=_&amp;&amp;(_=8-_),w=new Array(i+_+10),m[0]=255&amp;(248&amp;e()|_);for(var o=1;o&lt;=_;o++)m[o]=255&amp;e();_++;for(var o=0;o&lt;8;o++)$[o]=0;for(n=1;n&lt;=2;)_&lt;8&amp;&amp;(m[_++]=255&amp;e(),n++),8==_&amp;&amp;c();for(var o=0;i&gt;0;)_&lt;8&amp;&amp;(m[_++]=t[o++],i--),8==_&amp;&amp;c();for(n=1;n&lt;=7;)_&lt;8&amp;&amp;(m[_++]=0,n++),8==_&amp;&amp;c();return w}
    function l(t){var e=0,i=new Array(8),n=t.length;if(k=t,n%8!=0||n&lt;16)return null;if($=g(t),_=7&amp;$[0],(e=n-_-10)&lt;0)return null;for(var o=0;o&lt;i.length;o++)i[o]=0;w=new Array(e),y=0,v=8,_++;for(var p=1;p&lt;=2;)if(_&lt;8&amp;&amp;(_++,p++),8==_&amp;&amp;(i=t,!d()))return null;for(var o=0;0!=e;)if(_&lt;8&amp;&amp;(w[o]=255&amp;(i[y+_]^$[_]),o++,e--,_++),8==_&amp;&amp;(i=t,y=v-8,!d()))return null;for(p=1;p&lt;8;p++){if(_&lt;8){if(0!=(i[y+_]^$[_]))return null;_++}
        if(8==_&amp;&amp;(i=t,y=v,!d()))return null}
        return w}
    function c(){for(var t=0;t&lt;8;t++)m[t]^=b?$[t]:w[y+t];for(var e=u(m),t=0;t&lt;8;t++)w[v+t]=e[t]^$[t],$[t]=m[t];y=v,v+=8,_=0,b=!1}
    function u(t){for(var e=16,o=i(t,0,4),p=i(t,4,4),r=i(f,0,4),s=i(f,4,4),a=i(f,8,4),l=i(f,12,4),c=0;e--&gt;0;)c+=2654435769,c=(4294967295&amp;c)&gt;&gt;&gt;0,o+=(p&lt;&lt;4)+r^p+c^(p&gt;&gt;&gt;5)+s,o=(4294967295&amp;o)&gt;&gt;&gt;0,p+=(o&lt;&lt;4)+a^o+c^(o&gt;&gt;&gt;5)+l,p=(4294967295&amp;p)&gt;&gt;&gt;0;var u=new Array(8);return n(u,0,o),n(u,4,p),u}
    function g(t){for(var e=16,o=i(t,0,4),p=i(t,4,4),r=i(f,0,4),s=i(f,4,4),a=i(f,8,4),l=i(f,12,4),c=3816266640;e--&gt;0;)p-=(o&lt;&lt;4)+a^o+c^(o&gt;&gt;&gt;5)+l,p=(4294967295&amp;p)&gt;&gt;&gt;0,o-=(p&lt;&lt;4)+r^p+c^(p&gt;&gt;&gt;5)+s,o=(4294967295&amp;o)&gt;&gt;&gt;0,c-=2654435769,c=(4294967295&amp;c)&gt;&gt;&gt;0;var u=new Array(8);return n(u,0,o),n(u,4,p),u}
    function d(){for(var t=(k.length,0);t&lt;8;t++)$[t]^=k[v+t];return $=g($),v+=8,_=0,!0}
    function h(t,e){var i=[];if(e)for(var n=0;n&lt;t.length;n++)i[n]=255&amp;t.charCodeAt(n);else for(var o=0,n=0;n&lt;t.length;n+=2)i[o++]=parseInt(t.substr(n,2),16);return i}
    var f="",_=0,m=[],$=[],v=0,y=0,w=[],k=[],b=!0;TEA={encrypt:function(t,e){return o(a(h(t,e)))},enAsBase64:function(t,e){for(var i=h(t,e),n=a(i),o="",p=0;p&lt;n.length;p++)o+=String.fromCharCode(n[p]);return btoa(o)},decrypt:function(t){return o(l(h(t,!1)))},initkey:function(t,e){f=h(t,e)},bytesToStr:p,strToBytes:r,bytesInStr:o,dataFromStr:h};var q={};q.PADCHAR="=",q.ALPHA="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",q.getbyte=function(t,e){var i=t.charCodeAt(e);if(i&gt;255)throw"INVALID_CHARACTER_ERR: DOM Exception 5";return i},q.encode=function(t){if(1!=arguments.length)throw"SyntaxError: Not enough arguments";var e,i,n=q.PADCHAR,o=q.ALPHA,p=q.getbyte,r=[];t=""+t;var s=t.length-t.length%3;if(0==t.length)return t;for(e=0;e&lt;s;e+=3)i=p(t,e)&lt;&lt;16|p(t,e+1)&lt;&lt;8|p(t,e+2),r.push(o.charAt(i&gt;&gt;18)),r.push(o.charAt(i&gt;&gt;12&amp;63)),r.push(o.charAt(i&gt;&gt;6&amp;63)),r.push(o.charAt(63&amp;i));switch(t.length-s){case 1:i=p(t,e)&lt;&lt;16,r.push(o.charAt(i&gt;&gt;18)+o.charAt(i&gt;&gt;12&amp;63)+n+n);break;case 2:i=p(t,e)&lt;&lt;16|p(t,e+1)&lt;&lt;8,r.push(o.charAt(i&gt;&gt;18)+o.charAt(i&gt;&gt;12&amp;63)+o.charAt(i&gt;&gt;6&amp;63)+n)}
        return r.join("")},btoa=window.btoa||(window.btoa=q.encode)}(window),$=window.$||{},$pt=window.$pt||{},function t(t){return e(t)}
function e(t){return u(i(c(t),t.length*m))}
function i(t,e){t[e&gt;&gt;5]|=128&lt;&lt;e%32,t[14+(e+64&gt;&gt;&gt;9&lt;&lt;4)]=e;for(var i=1732584193,n=-271733879,l=-1732584194,c=271733878,u=0;u&lt;t.length;u+=16){var g=i,d=n,h=l,f=c;i=o(i,n,l,c,t[u+0],7,-680876936),c=o(c,i,n,l,t[u+1],12,-389564586),l=o(l,c,i,n,t[u+2],17,606105819),n=o(n,l,c,i,t[u+3],22,-1044525330),i=o(i,n,l,c,t[u+4],7,-176418897),c=o(c,i,n,l,t[u+5],12,1200080426),l=o(l,c,i,n,t[u+6],17,-1473231341),n=o(n,l,c,i,t[u+7],22,-45705983),i=o(i,n,l,c,t[u+8],7,1770035416),c=o(c,i,n,l,t[u+9],12,-1958414417),l=o(l,c,i,n,t[u+10],17,-42063),n=o(n,l,c,i,t[u+11],22,-1990404162),i=o(i,n,l,c,t[u+12],7,1804603682),c=o(c,i,n,l,t[u+13],12,-40341101),l=o(l,c,i,n,t[u+14],17,-1502002290),n=o(n,l,c,i,t[u+15],22,1236535329),i=p(i,n,l,c,t[u+1],5,-165796510),c=p(c,i,n,l,t[u+6],9,-1069501632),l=p(l,c,i,n,t[u+11],14,643717713),n=p(n,l,c,i,t[u+0],20,-373897302),i=p(i,n,l,c,t[u+5],5,-701558691),c=p(c,i,n,l,t[u+10],9,38016083),l=p(l,c,i,n,t[u+15],14,-660478335),n=p(n,l,c,i,t[u+4],20,-405537848),i=p(i,n,l,c,t[u+9],5,568446438),c=p(c,i,n,l,t[u+14],9,-1019803690),l=p(l,c,i,n,t[u+3],14,-187363961),n=p(n,l,c,i,t[u+8],20,1163531501),i=p(i,n,l,c,t[u+13],5,-1444681467),c=p(c,i,n,l,t[u+2],9,-51403784),l=p(l,c,i,n,t[u+7],14,1735328473),n=p(n,l,c,i,t[u+12],20,-1926607734),i=r(i,n,l,c,t[u+5],4,-378558),c=r(c,i,n,l,t[u+8],11,-2022574463),l=r(l,c,i,n,t[u+11],16,1839030562),n=r(n,l,c,i,t[u+14],23,-35309556),i=r(i,n,l,c,t[u+1],4,-1530992060),c=r(c,i,n,l,t[u+4],11,1272893353),l=r(l,c,i,n,t[u+7],16,-155497632),n=r(n,l,c,i,t[u+10],23,-1094730640),i=r(i,n,l,c,t[u+13],4,681279174),c=r(c,i,n,l,t[u+0],11,-358537222),l=r(l,c,i,n,t[u+3],16,-722521979),n=r(n,l,c,i,t[u+6],23,76029189),i=r(i,n,l,c,t[u+9],4,-640364487),c=r(c,i,n,l,t[u+12],11,-421815835),l=r(l,c,i,n,t[u+15],16,530742520),n=r(n,l,c,i,t[u+2],23,-995338651),i=s(i,n,l,c,t[u+0],6,-198630844),c=s(c,i,n,l,t[u+7],10,1126891415),l=s(l,c,i,n,t[u+14],15,-1416354905),n=s(n,l,c,i,t[u+5],21,-57434055),i=s(i,n,l,c,t[u+12],6,1700485571),c=s(c,i,n,l,t[u+3],10,-1894986606),l=s(l,c,i,n,t[u+10],15,-1051523),n=s(n,l,c,i,t[u+1],21,-2054922799),i=s(i,n,l,c,t[u+8],6,1873313359),c=s(c,i,n,l,t[u+15],10,-30611744),l=s(l,c,i,n,t[u+6],15,-1560198380),n=s(n,l,c,i,t[u+13],21,1309151649),i=s(i,n,l,c,t[u+4],6,-145523070),c=s(c,i,n,l,t[u+11],10,-1120210379),l=s(l,c,i,n,t[u+2],15,718787259),n=s(n,l,c,i,t[u+9],21,-343485551),i=a(i,g),n=a(n,d),l=a(l,h),c=a(c,f)}
    return 16==v?Array(n,l):Array(i,n,l,c)}
function n(t,e,i,n,o,p){return a(l(a(a(e,t),a(n,p)),o),i)}
function o(t,e,i,o,p,r,s){return n(e&amp;i|~e&amp;o,t,e,p,r,s)}
function p(t,e,i,o,p,r,s){return n(e&amp;o|i&amp;~o,t,e,p,r,s)}
function r(t,e,i,o,p,r,s){return n(e^i^o,t,e,p,r,s)}
function s(t,e,i,o,p,r,s){return n(i^(e|~o),t,e,p,r,s)}
function a(t,e){var i=(65535&amp;t)+(65535&amp;e);return(t&gt;&gt;16)+(e&gt;&gt;16)+(i&gt;&gt;16)&lt;&lt;16|65535&amp;i}
function l(t,e){return t&lt;&lt;e|t&gt;&gt;&gt;32-e}
function c(t){for(var e=Array(),i=(1&lt;&lt;m)-1,n=0;n&lt;t.length*m;n+=m)e[n&gt;&gt;5]|=(t.charCodeAt(n/m)&amp;i)&lt;&lt;n%32;return e}
function u(t){for(var e=_?"0123456789ABCDEF":"0123456789abcdef",i="",n=0;n&lt;4*t.length;n++)i+=e.charAt(t[n&gt;&gt;2]&gt;&gt;n%4*8+4&amp;15)+e.charAt(t[n&gt;&gt;2]&gt;&gt;n%4*8&amp;15);return i}
function g(t){for(var e=[],i=0;i&lt;t.length;i+=2)e.push(String.fromCharCode(parseInt(t.substr(i,2),16)));return e.join("")}
function d(t,e){if(!(Math.random()&gt;(e||1)))try{var i=location.protocol+"//ui.ptlogin2.qq.com/cgi-bin/report?id="+t;document.createElement("img").src=i}catch(t){}}
function h(e,i,n,o){n=n||"",e=e||"";for(var p=o?e:t(e),r=g(p),s=t(r+i),a=TEA.strToBytes(n.toUpperCase(),!0),l=Number(a.length/2).toString(16);l.length&lt;4;)l="0"+l;TEA.initkey(s);var c=TEA.encrypt(p+TEA.strToBytes(i)+l+a);TEA.initkey("");for(var u=Number(c.length/2).toString(16);u.length&lt;4;)u="0"+u;var h=RSA.rsa_encrypt(g(u+c));return btoa(g(h)).replace(/[\/\+=]/g,function(t){return{"/":"-","+":"*","=":"_"}[t]})}
function f(e,i,n){var o=n?e:t(e),p=o+i.toUpperCase();return $.RSA.rsa_encrypt(p)}
var _=1,m=8,v=32;



function uin2hex(str) {
    var maxLength = 16;
    str = parseInt(str);
    var hex = str.toString(16);
    var len = hex.length;
    for (var i = len; i &lt; maxLength; i++) {
        hex = "0" + hex
    }
    var arr = [];
    for (var j = 0; j &lt; maxLength; j += 2) {
        arr.push("\\x" + hex.substr(j, 2))
    }
    var result = arr.join("");
    eval('result="' + result + '"');
    return result
}



function my_getEncPass(uid, pass, code) {
    var salt = uin2hex(uid);
    var p = h(pass, salt, code, undefined);
    return p;
}