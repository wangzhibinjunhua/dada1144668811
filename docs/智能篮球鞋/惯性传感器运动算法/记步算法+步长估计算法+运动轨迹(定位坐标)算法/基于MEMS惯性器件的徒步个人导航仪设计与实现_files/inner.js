(function(c,m,n,g){if(c[n]){if(c[n].autoPickInit){c[n].autoPickInit()}return}c[n]={};var i=n;n=c[i];var l="20170103001";var j;var h;var b;var o;var e;var a;var k;var f;var p=function(t){var v=i;var q=v.length;var s;var r="";var u;for(u=0;u<q;u++){s=v.charAt(u);if(s!==t){r+=s}}return r}("_");var d=function(r,q){n[r]=q};(function(s,q,t){var r={};j={require:function(u){if(r.hasOwnProperty(u)){return r[u]}throw Error("Module.require : no such Module. named - "+u)},define:function(x,u){var y;var z=typeof u;var w;var v=false;if(r.hasOwnProperty(x)){v=true;y=r[x]}else{y={}}switch(z){case"function":w=u(y,s,q);if(w){r[x]=w}else{r[x]=y}break;case"object":if(u!==null){r[x]=u}else{throw Error("Module.define : params error")}break;case"string":case"undefined":case"number":default:r[x]=u;break}},extend:function(v,u){var x;if(r.hasOwnProperty(v)){x=r[v]}else{x=r[v]={}}if(typeof u==="function"){u(x,s,q)}else{if(typeof u==="object"&&u!==null){for(var w in u){if(u.hasOwnProperty(w)){x[w]=u[w]}}}else{throw Error("Module.extend params error - exports must be a function or an object.")}}}};h=function(u){u(s,q)}}(c,m));j.define("Class",function(t,v,r,q){var u={};var s=function(){};t.define=function(w,y){y=y||{};var B=y.name;var A=y.parent||null;var x=y.methods;var C=y.staticMethods;var D;if(typeof A==="string"){A=t.require(A);if(!A){throw new Error("parentClass undefined")}}var z=function(){if(this===v){throw Error('Constructor - "'+(B||"anonymous")+"\" can't be invoked  as a function")}var E=[].slice.apply(arguments);E.unshift(A);w.apply(this,E)};if(typeof A==="function"){s.prototype=A.prototype;z.prototype=new s;z.prototype.constructor=z}else{z.prototype={constructor:z}}z.__PARENTCLASS__=A;if(x){for(D in x){if(x.hasOwnProperty(D)){z.prototype[D]=x[D]}}}if(B){if(u.hasOwnProperty(B)){throw Error('Class named "'+B+'" has been defined')}u[B]=z}if(C){for(D in C){if(C.hasOwnProperty(D)){z[D]=C[D]}}}return z};t.require=function(w){return u[w]}});b=j.require("Class");j.define("Util",function(v,q,w,r){var s=v.Object={};o=v;s.mixin=function(B,C,z){var A;if(z){for(A in C){if(C.hasOwnProperty(A)){B[A]=C[A]}}}else{for(A in C){if(C.hasOwnProperty(A)&&!B.hasOwnProperty(A)){B[A]=C[A]}}}return B};s.clone=function(C){var B={};var A;for(var z in C){if(C.hasOwnProperty(z)){A=C[z];if(typeof A==="object"&&A!==null){B[z]=s.clone(A)}else{B[z]=A}}}return B};o.uuid=function(){var B=new Date,z=function(G,H,E){G=G.toString(36).split("");H=H/4|0;E=E/4|0;for(var F=H;F<=E;F++){!G[F]&&(G[F]=0)}return G.slice(H,E+1).join("")},A=function(E){return Math.random()*(E+1)|0},D=function(G){G=G.replace(/./g,function(J){return J.charCodeAt()}).split("");var I=16777619,H=2166136261,E=G.length;for(var F=0;F<E;F++){H=(H^G[F])*I}H+=H<<13;H^=H>>7;H+=H<<3;H^=H>>17;H+=H<<5;H=H&2147483647;H=H.toString(36);H.length<6&&(H+=(E%36).toString(36));return H},C=[screen.width,screen.height,navigator.plugins.length,navigator.javaEnabled(),screen.colorDepth,location.href,navigator.userAgent].join("");return function(){var H=new Date,G=(+H+631152000000).toString(36),E=z(A(4095),0,7)+z(A(8191),0,7)+z(A(8191),0,8),I=Math.random()*(251)+50|0,F=[];G.length<9&&(G+=(H%36).toString(36));for(;I--;){F.push(Math.random())}return D(C)+D([w.documentElement.offsetWidth,w.documentElement.offsetHeight,history.length,new Date-B].join(""))+G+E+D(F.slice(0,10).join(""))+D(F.slice(I-9).join(""))}}();var u=o.Browser=function(){var B=navigator.userAgent;var E=function(F){return F.test(B)},C=!+"\v1",D=C||!!q.XDomainRequest||E(/MSIE|Trident/),A=!!w.getBoxObjectFor||q.mozInnerScreenX!=null,z=!D&&!navigator.taintEnabled&&!E(/ Firefox/);return{isIE:C,isIE6:C&&(!q.XMLHttpRequest||!!q.XMLHttpRequest.constructor),isIE7:C&&!!q.XMLHttpRequest&&!q.XMLHttpRequest.constructor&&!q.XDomainRequest,isIE8:C&&!!q.XDomainRequest,isIE9:!C&&!!q.XDomainRequest,isMaxthon:!q.opera&&!!q.external&&(typeof external.max_version!=="undefined"&&typeof external.max_version!=="unknown"),isSogou:E(/ SE \d\./),isTT:E(/; TencentTraveler/),isQQ:E(/QQBrowser/),is360:E(/; 360/),isBaidu:E(/ baidubrowser/),isLiebao:E(/ LBBROWSER/),isChrome:!!q.chrome||E(/ Chrome\//)||navigator.vendor=="Google Inc.",isSafari:!!(navigator.vendor&&navigator.vendor.match(/Apple/)),isWebkit:z,isGecko:A,isTrident:D,isPresto:!!q.opera,isHeadless:(function(){var G=false;try{var I=["_phantom","__phantomas","callPhantom","Buffer","couchjs","spawn","webdriver","domAutomation","domAutomationController"];for(var H=0,F=I.length;H<F;H++){G=G||q[I[H]]}return G?1:0}catch(J){return -1}})()}}();v.Math={};v.Math.getRandomFrom=function(A,z){return Math.random()*(1+z-A)+A|0};var y=v.Event={};y.add=function(B,A,z){if(B.addEventListener){B.addEventListener(A,z,false)}else{B.attachEvent("on"+A,z)}};y.remove=function(B,A,z){if(B.removeEventListener){B.removeEventListener(A,z,false)}else{B.detachEvent("on"+A,z)}};y.once=function(B,A,z){y.add(B,A,function(C){y.remove(B,A,arguments.callee);z(C)})};y.caniuse=function(B,A){if(A in B){return true}B.setAttribute(A,"");var z=typeof B[A]=="function";B.removeAttribute(A);return z};y.bindMouseenter=function(A,B){if(y.caniuse(A,"onmouseenter")){y.add(A,"mouseenter",B)}else{var z=function(D){var C=D.relatedTarget;if(!C||(!(C.compareDocumentPosition(this)&8)&&C!==this)){B.call(A,D)}};y.add(A,"mouseover",z);B.__mouseenterProxyHandler=z}};y.unbindMouseenter=function(z,A){if(y.caniuse(z,"onmouseenter")){y.remove(z,"mouseenter",A)}else{y.remove(z,"mouseover",A.__mouseenterProxyHandler)}};y.bindMouseleave=function(A,B){if(y.caniuse(A,"onmouseleave")){y.add(A,"mouseleave",B)}else{var z=function(D){var C=D.relatedTarget;if(!C||(!(C.compareDocumentPosition(this)&8)&&C!==this)){B.call(this,D)}};y.add(A,"mouseout",z);B.__mouseleaveProxyHandler=z}};y.unbindMouseleave=function(z,A){if(y.caniuse(z,"onmouseleave")){y.remove(z,"mouseleave",A)}else{y.remove(z,"mouseout",A.__mouseleaveProxyHandler)}};v.log=function(){var z=[];return function(B){var A=z.push(new Image)-1;z[A].src=B}}();var t=v.DOM={};t.CSS1Compat=w.compatMode=="CSS1Compat";t.$=function(A,z){z=z||w;if(typeof A==="string"){return z.getElementById(A)}return A};t.$C=function(B,z,H){H=H||w;z=z||"*";if(H.getElementsByClassName&&z=="*"){return[].slice.call(H.getElementsByClassName(B),0)}if(H.querySelectorAll){var F=H.querySelectorAll(z+"."+B),G;if(!+"\v1"){G=[];for(var D=0,E=F.length;D<E;D++){G.push(F[D])}return G}return[].slice.call(F,0)}var J=(z=="*"&&H.all)?H.all:H.getElementsByTagName(z),G=[],D=0,C=0,I=" "+B+" ",A;while(A=J[D++]){(" "+A.className+" ").indexOf(I)!=-1&&(G[C++]=A)}return G};t.hasClass=function(A,B){if(A.classList){return A.classList.contains(B)}var z=A.className||A.getAttribute("class");if(!z){return false}z=" "+z+" ";B=" "+B+" ";return z.indexOf(B)>-1};t.getPos=function(B){var A=B.offsetLeft,z=B.offsetTop;while(B=B.offsetParent){A+=B.offsetLeft;z+=B.offsetTop}return{left:A,top:z}};t.getClientWidth=function(z){z=z||w;if(z.compatMode=="CSS1Compat"){return z.documentElement.clientWidth}else{return z.body.clientWidth}};t.getClientHeight=function(z){z=z||w;if(z.compatMode=="CSS1Compat"){return z.documentElement.clientHeight}else{return z.body.clientHeight}};t.getClientScrollLeft=function(z){z=z||w;if(u.isWebkit){return z.body.scrollLeft}if(z.compatMode=="CSS1Compat"){return z.documentElement.scrollLeft}else{return z.body.scrollLeft}};t.getClientScrollTop=function(z){z=z||w;if(u.isWebkit){return z.body.scrollTop}if(z.compatMode=="CSS1Compat"){return z.documentElement.scrollTop}else{return z.body.scrollTop}};t.createIframe=function(B,E,A,D,z){var C;E=E||w.body;C=w.createElement(!+"\v1"?'<iframe frameborder="0" scrolling="no"'+(A?'name="'+A+'"':"")+'" hspace="0" vspace="0" marginwidth="0" marginheight="0"></iframe>':"iframe");C.setAttribute("frameborder",0);C.setAttribute("scrolling","no");C.setAttribute("scrolling","no");C.setAttribute("hspace","0");C.setAttribute("vspace","0");C.setAttribute("marginwidth","0");C.setAttribute("marginheight","0");C.style.cssText="margin:0;padding:0;border:none;";C.style.width=(D||0)+"px";C.style.height=(z||0)+"px";if(A){C.setAttribute("name",A);C.setAttribute("id",A)}if(typeof E==="function"){E(C)}else{if(typeof E=="string"){E=w.getElementById(E)}E.insertBefore(C,E.lastChild)}C.src=B;return C};t.createFlash=function(z,B,C){C=C&&C.replace(/"/g,"&quot;");var A;B.id=B.id||p+"_SWF_"+(Math.random()*1000000|0);B.width=B.width||1;B.height=B.height||1;if("classid" in w.createElement("object")){A='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" name="'+B.id+'" '+(B.id?'id="'+B.id+'" ':"")+'width="'+B.width+'" height="'+B.height+'"><param name="allowScriptAccess" value="always" /><param name="quality" value="high" /><param name="wmode" value="'+(B.wmode||"opaque")+'" /><param name="movie" value="'+B.src+'" />'+(C?'<param name="flashvars" value="'+C+'" />':"")+"</object>"}else{A='<embed style="width:'+B.width+"px;height:"+B.height+'px;" wmode="'+(B.wmode||"opaque")+'" src="'+B.src+'" quality="high" name="'+B.id+'" '+(B.id?'id="'+B.id+'" ':"")+(C?'flashVars="'+C+'" ':"")+'width="'+B.width+'" height="'+B.height+'"allowScriptAccess="always" type="application/x-shockwave-flash"/>'}z.innerHTML=A;return z.firstChild};t.writeScript=function(z,A){A=A||"utf-8";w.write("<script src="+z+" charset="+A+"><\/script>")};t.loadJS=function(){var z=function(B,C){if(C in B){z=function(){return true}}else{B.setAttribute(C,"");if(typeof B[C]=="function"){z=function(){return true}}else{z=function(){return false}}B.removeAttribute(C)}return z()};var A=function(C,D,E){E=E||w;var B=E.head||E.getElementsByTagName("head")[0];if(z(C,"onload")){C.onload=function(){D&&D();B.removeChild(C);C=C.onload=null}}else{C.attachEvent("onreadystatechange",function(){if(/loaded|complete/.test(C.readyState)){D&&D();C.detachEvent("onreadystatechange",arguments.callee);setTimeout(function(){try{B.removeChild(C);C=null}catch(F){}})}})}};return function(E,D,G,F){F=F||w;var B=F.head||F.getElementsByTagName("head")[0];var C=F.createElement("script");C.charset=G||"utf-8";C.src=E;A(C,D,F);B.insertBefore(C,B.firstChild)}}();t.insertAfter=function(z,B){var A=B.parentNode;A.insertBefore(z,B.nextSibling)};t.isSupportPE=function(){var A=w.createElement("x");var C=w.documentElement;var E=window.getComputedStyle;var z;var B=false;if(!("pointerEvents" in A.style)){return false}A.style.pointerEvents="auto";A.style.pointerEvents="x";C.appendChild(A);try{z=E&&E(A,"").pointerEvents==="auto"}catch(D){z=true}C.removeChild(A);return !!z}();t.isSupportFixed=(!u.isIE6&&(u.isTrident&&t.CSS1Compat))||!u.isTrident;t.isSupportOpacity=function(){if(q.opera){return true}return"opacity" in w.createElement("x").style}();t.setOpacity=function(A,z){z=parseInt(z);z=z>100?100:z<0?0:z;if(t.isSupportOpacity){A.style.opacity=z?z/100:z==0?0:9/10}else{A.style.filter="Alpha(Opacity="+(z?z:z==0?0:90)+")"}};t.getAbsPos=function(B){var A=B.offsetLeft;var z=B.offsetTop;while(B=B.offsetParent){A+=B.offsetLeft;z+=B.offsetTop}return{left:A,top:z}};t.getScreenPosition=function(){var A=q.screenLeft;var z=q.screenTop;if(typeof A==="undefined"){A=q.screenX;z=q.screenY}return{left:A,top:z}};var x=v.QueryString={};x.stringify=function(A){var B=[];for(var z in A){if(A.hasOwnProperty(z)){B.push(z+"="+A[z])}}return B.join("&")};x.parse=function(E){var A=E.indexOf("?");if(A>-1){E=E.substr(A+1)}var z=E.split("&");var D={};var C;for(var B=z.length;B--;){C=z[B].split("=");D[C[0]]=C[1]}return D};x.query=function(z){return x.parse(location.search)[z]||null};v.Cookie=function(A){var z=function(C,D,B){return arguments.length===1?z.get(C):z.set(C,D,B)};z._document=w;z._navigator=navigator;z.defaults={path:"/"};z._areEnabled=function(){return z._navigator.cookieEnabled||z.set("cookies.js",1).get("cookies.js")==="1"};z._getExtendedOptions=function(B){return{path:B&&B.path||z.defaults.path,domain:B&&B.domain||z.defaults.domain,expires:B&&B.expires||z.defaults.expires,secure:B&&B.secure!==A?B.secure:z.defaults.secure}};z._isValidDate=function(B){return Object.prototype.toString.call(B)==="[object Date]"&&!isNaN(B.getTime())};z._getExpiresDate=function(B,C){C=C||new Date();switch(typeof B){case"number":B=new Date(C.getTime()+B*1000);break;case"string":B=new Date(B);break}if(B&&!z._isValidDate(B)){throw new Error("`expires` parameter cannot be converted to a valid Date instance")}return B};z._generateCookieString=function(C,E,B){C=encodeURIComponent(C);E=(E+"").replace(/[^!#$&-+\--:<-\[\]-~]/g,encodeURIComponent);B=B||{};var D=C+"="+E;D+=B.path?";path="+B.path:"";D+=B.domain?";domain="+B.domain:"";D+=B.expires?";expires="+B.expires.toGMTString():"";D+=B.secure?";secure":"";return D};z._getCookieObjectFromString=function(B){var F={};var I=B?B.split("; "):[];for(var D=0;D<I.length;D++){var H=I[D].indexOf("=");var C=decodeURIComponent(I[D].substr(0,H));if(F[C]===A){var E=I[D].substr(H+1);try{E=decodeURIComponent(E)}catch(G){}F[C]=E}}return F};z._renewCache=function(){z._cache=z._getCookieObjectFromString(z._document.cookie);z._cachedDocumentCookie=z._document.cookie};z.get=function(B){if(z._cachedDocumentCookie!==z._document.cookie){z._renewCache()}return z._cache[B]};z.set=function(C,D,B){B=z._getExtendedOptions(B);B.expires=z._getExpiresDate(D===A?-1:B.expires);z._document.cookie=z._generateCookieString(C,D,B);return z};z.expire=function(C,B){return z.set(C,A,B)};z.enabled=z._areEnabled();z.createSubCookie=function(C,E){var D="FUCKIE";var B="|";var F="-";E=E||{};E.expires=999999999;if(!z.get(C)){z.set(C,D,E)}return{set:function(T,R,L){var Q=this.getOrigin();if(!Q){return this}var P=Q.split(B);if(P[0]==D){P=[]}var H=+new Date;var O;var K;var S;var N;var I=false;for(var M=0,J=P.length;M<J;M++){O=P[M].split(F);K=O[0];S=O[1];N=O[2];if(K==T){I=true;P[M]=T+F+R+F+(L*60*1000+H).toString(36)}else{P[M]=K+F+S+F+N}}if(!I){P.push(T+F+R+F+(L*60*1000+H).toString(36))}var G;if(P.length==0){G=D}else{if(P.length==1){G=P[0]}else{G=P.join(B)}}z.set(C,G,E);return this},get:function(O){var N=this.getOrigin();if(!N){return null}var M=N.split(B);if(M[0]==D){M=[]}var G=+new Date;var K;var I;var P;var L;for(var J=0,H=M.length;J<H;J++){K=M[J].split(F);I=K[0];P=K[1];L=parseInt(K[2],36);if(I==O){if(L>G){return P}else{this.remove(O);return null}}else{if(L<=G){this.remove(I)}}}return null},remove:function(P){var O=this.getOrigin();if(!O){return this}var N=O.split(B);if(N[0]==D){N=[]}var H=+new Date;var L;var J;var Q;var M;for(var K=0,I=N.length;K<I;K++){L=N[K].split(F);J=L[0];Q=L[1];M=L[2];if(J==P){N.splice(K,1);break}else{N[K]=J+F+Q+F+M}}var G;if(N.length==0){G=D}else{if(N.length==1){G=N[0]}else{G=N.join(B)}}z.set(C,G,E);return this},clear:function(){z.set(C,D,E)},getOrigin:function(){return z.get(C)}}};return z}();v.getDoc=function(z){var B=w;if(z&&q.parent!==q){try{q.parent.location.href;B=q.parent.document}catch(A){}}return B};v.fixRequestCache=function(z){z=z||99999;return(Math.random()*z|0).toString(36)};v.getTT=function(C){var B;var z;var A;if(!C){return 0}if(typeof C==="number"){z=B=C}else{if(C.indexOf("-")>0){C=C.split("-");B=+C[0];z=+C[1];if(B>z){A=B;B=z;z=A}}else{B=z=+C}}C=v.Math.getRandomFrom(B,z);return C};v.getRootDomain=function(D){D=D||w.domain;var z=D.split("."),C=[".com.cn",".net.cn",".com.hk",".co.kr"],A=2,B=C.length;for(;B--;){if(D.indexOf(C[B])>-1){A=3;break}}return z.slice(z.length-A).join(".")};v.getRefHost=function(B){B=B||w.referrer;if(!B){return""}var z=w.createElement("a");z.href=B;var A=z.hostname;return v.getRootDomain(A)}});j.define("Config",{GlobalIdentifier:p,engineServer:"http://g.ggxt.net:8080/",logServer:"http://s.ggxt.net:8080/l",logAdshowServer:"http://l.ggxt.net:8080/ac",CKI_MKH_LogServer:"http://u.ggxt.net:8080/bdc",ST_LogServer:"http://g.ggxt.net:8080/sl",syncDataEngineServer:"http://g.ggxt.net:8080/ga",syncRenderEngineServer:"http://g.ggxt.net:8080/qa",asyncRenderEngineServer:"http://g.ggxt.net:8080/ga",staticResourceServer:"http://pic.ggxt.net/",adOnloadLogServer:"http://s.ggxt.net:8080/l",IFMCMServer:"http://s.ggxt.net:8080/l?action=click",ASDServer:"http://l.ggxt.net:8080/asd?e=",baseStaticDomain:"http://pic.ggxt.net/",floatLayerCloseButtonURL:"http://pic.ggxt.net/sdk/js/src/images/close.png",grandMiniImage:"http://pic.ggxt.net/sdk/js/src/images/gdm.jpg",grandMiniCloseButtonURL:"http://pic.ggxt.net/sdk/js/src/images/close.png",autoPickSlots:p+"_slots",autoPickSlotID:p+"_slotid",autoPickTarget:p+"_target",autoPickSync:p+"_sync",autoPickOpts:p+"_opts",fieldAdOnloadAction:"play",dataFieldSlotID:"slotid",dataFieldPublisherID:"publisher",dataFieldMode:"mode",dataFieldPassBack:"z",dataFieldExcludeAD:"exclude",dataFieldExcludeMID:"mexclude",dataFieldSyncJSONP:"cb",dataFieldIsFromSearch:"s",dataFieldFlashVersion:"f",dataFieldViewPort:"v",dataFieldDevice:"d",dataFieldOS:"o",dataFieldBrowser:"b",dataFieldIframeNested:"i",dataFieldPVCount:"pvc",dataFieldSourceSlotID:"sesi",dataFieldSourceAdID:"seai",logFieldAdid:"adid",logAdshowFieldType:"tp",logAdshowValueType:"se",logAdshowFieldSlotid:"sid",logAdshowFieldAdid:"adid",logAdshowFieldSourceSlotid:"sesi",logAdshowFieldSourceAdid:"seai",logAdshowFieldPid:"pid",clickPointField:"CPTDATA",commonDataQueryString:"type=JS",renderFieldSlotid:"slotid",renderFieldAdid:"adid",rendexFieldIndex:"index",cookiePPExpiresKey:p+"_PEPS",cookieCKOptimizExpiresKey:p+"_COEPS",cookieMOPExpiresKey:p+"_MOP",cookieSTExpiresKey:p+"_ST",externalSTDefaultInteral:24,cookieSlotBlockKey:p+"_BLOCK_SLOT",cookieSlotPVCountKey:p+"_PVC",googleUnionSDKURL:"http://pagead2.googlesyndication.com/pagead/show_ads.js",crossDomainServerID:"CROSSDOMAINSERVER",crossDomainClientBaseID:"CROSSDOMAINCLIENT_",crossDomainMessageToken:p+"_F\uFEFFr\uFEFFa\uFEFFn\uFEFFk\uFEFFy",crossDomainRegToken:p+"_\uFEFFR\uFEFFE\uFEFFG\uFEFFC\uFEFFL\uFEFFI\uFEFFE\uFEFFN\uFEFFT",crossDomainNavigatorIdentifier:p+"_CROSSDOMAIN_NAVIGATOR",crossDomainRegSuccessToken:p+"_CROSSDUMAIN_REG_SUCCESS_",externalKeyCKOptimize:"co",externalCKOptimizeIntervalCookieKey:p+"_EXTERNALCO",externalCKOptimizeDefaultInteral:24,externalKeyMOP:"mop",externalMOPDefaultInterval:24,externalKeyAdCarousel:"ac",externalAdCarouselDefaultInterval:30,externalAdCarouselDefaultPrefetchOffset:4,externalKeyOEP:"oep",externalKeyIEP:"iep",externalKeyLoadScript:"ls",externalKeyRunScript:"rs",externalKeyGAScript:"ga",externalKeyCNZZScript:"cnzz",externalCNZZScriptURL:"http://s16.cnzz.com/stat.php",externalKeyFloat:"fl",externalKeyGrand:"grand",externalMiniWidth:128,externalMiniHeight:128,externalKeyAbsFloat:"afl",externalKeyCenter:"center",externalKeyCKI:"cki",externalKeyCKI_MKH:"mkh",externalKeyCKI_MKH_CIHT_DEFAULT:3,externalKeyCKI_BES:"bes",externalKeyCKI_BES_CIHT_DEFAULT:3,externalKeyCKI_EH:"eh",externalKeyCKI_EH_CIHT_DEFAULT:5,externalKeyShake:"shake",externalShakeDefaultOffset:5,externalShakeDefaultFPS:30,externalShakeDefaultFrames:30,externalKeyST:"st",externalSTDefaultTimeout:5,externalSTDefaultOT:"999999",externalSTFrequencyDelay:3,externalKeyExtraST:"est",externalKeyUserAnalysis:"ua",externalKeyELH:"eh",externalKeyOutSWF:"oswf",externalKeyReplace:"replace",externalKeySticky:"sticky",externalKeyIFMCM:"ifmcm",externalKeyFPC:"fpc",externalKeyAntiSpamDetect:"asd",externalKeyInFPC:"ifpc",ppDefaultParams:"height="+c.screen.height+",width="+c.screen.width+",left=0,top=0,toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes",adContainerDefaultStyle:"width:0;height:0;line-height:0;font-size:0;position:relative;visibility:hidden;display:inline-table;border:none;margin:0;padding:0;background:white;overflow:hidden;z-index:2147483647; !important",defaultFloaterLayerCloseButtonStyle:"cursor:pointer;position:absolute;margin:0;border:0;border:none;z-index:2147483647; !important;",defaultGrandMiniWidth:100,defaultGrandMiniHeight:100,defaultGrandMiniUrl:"",richMediaSourceSlotTag:"PG_INF",BTOM:1});j.define("Log",function(u){var r=j.require("Config");var t=r.logServer;var v=o.log;var x=o.QueryString.stringify;var s=o.fixRequestCache;var w=function(z,A,y){if(typeof A==="object"){A=x(A)}z=z+"?"+A;if(y===g||y===null){y=true}else{y=!!y}if(y){z=z+"&r="+s()}v(z)};u.send=w;var q=function(){var I=r.logAdshowServer;var z=r.logAdshowFieldType;var G=r.logAdshowValueType;var y=r.logAdshowFieldSlotid;var H=r.logAdshowFieldAdid;var A=r.logAdshowFieldSourceSlotid;var D=r.logAdshowFieldSourceAdid;var E=r.logAdshowFieldPid;var B={};var F=function(J,K){K=K||0;if(!B.hasOwnProperty(J)){q[J]={};q[J][K]=1}else{q[J][K]=1}};var C=function(J,K){K=K||0;if(!B.hasOwnProperty[J]){return false}if(!B[J].hasOwnProperty(K)){return false}return true};return function(K,M,O,J){var L=j.require("DataCache");var N=L.slotsData;M=M||0;if(C(K,M)){return}N.asyncGetItem(K,M,function(Q){var P=Q.adid;var R=Q.pvid;var S={};S[z]=G;S[y]=K;S[H]=P;S[E]=R;if(O){S[A]=O}if(J){S[D]=J}w(I,S,1)});F(K,M)}}();u.send=w;u.adshow=q;d("adshowLog",q)});b.define(function(){this._stack=[]},{name:"Stack",methods:{push:function(q){this.current=q;this._stack.push(q);return q},pop:function(){var q=this._stack.pop();this.current=this._stack[this._stack.length-1]},getLength:function(){return this._stack.length}}});b.define(function(){this._pool={}},{name:"Pool",methods:{add:function(q,r){this._pool[q]=r},remove:function(q){try{delete this._pool[q]}catch(r){this._pool[q]=g}},clear:function(){for(var q in this._pool){if(this._pool.hasOwnProperty(q)){remove(q)}}},get:function(q){if(this._pool.hasOwnProperty(q)){return this._pool[q]}return g},each:function(r){for(var q in this._pool){if(this._pool.hasOwnProperty(q)){r(this._pool[q],q)}}},map:function(){var r=[];for(var q in this._pool){if(this._pool.hasOwnProperty(q)){r.push(q)}}return r}}});j.define("DC",function(){var q=function(x){x=x.toLowerCase();var A=3;var z=1;var B=0;var t=0;var w="";var y;var u;var v;for(var t=0,s=x.length;t<s;t++){y=t+1;switch(x.charAt(t)){case"=":u=1;break;case"+":u=3;break;case"/":u=4;break;default:u=2;y=t;break}w+=String.fromCharCode(parseInt(x.substr(y,u),36)-((B=!B)?z:A));t=u+y-1}return w};var r=function(s){var t;if(s&&s.toLowerCase){t=s.toLowerCase();if(t.indexOf("http://")===0||t.indexOf("https://")===0){return s}return q(s)}};q.u=r;return q});j.define("Performance",function(w,s,x){var z=function(B,A){var C;for(C in A){if(A.hasOwnProperty(C)){B[C]=A[C]}}return B};var y=s.performance;if(!y){return}var r=y.timing;var t=y.navigation;var v=function(C,A){for(var B in A){if(A.hasOwnProperty(B)){if(typeof A[B].get=="function"){C[B]=A[B].get()}else{C[B]=A[B].value}}}return C};var u={isDirectClientCache:{value:function(){if(t.type===1){return false}if(r.requestStart===0){return true}if(r.connectStart===r.connectEnd){return true}return false}()},navigationType:{value:t.type},redirectCount:{value:t.redirectCount},redirectTime:{value:r.redirectEnd-r.redirectStart},domainLookupTime:{value:r.domainLookupEnd-r.domainLookupStart},connectTime:{value:r.connectEnd-r.connectStart},requestTime:{value:r.responseStart-(r.requestStart||r.responseStart+1)}};var q={responseTime:{get:function(){var A=r.responseEnd-r.responseStart;if(r.domContentLoadedEventStart){if(A<0){A=0}}else{A=-1}return A}},domParsingTime:{get:function(){return r.domContentLoadedEventStart?r.domInteractive-r.domLoading:-1}},resourcesLoadedTime:{get:function(){return r.loadEventStart?r.loadEventStart-r.domLoading:-1}},firstPaintTime:{get:function(){var A=r.firstPaint||r.msFirstPaint;if(s.chrome&&typeof chrome.loadTimes==="function"){try{A=chrome.loadTimes().firstPaintTime}catch(B){}}return(typeof A==="number")?A-r.fetchStart:-1}},domContentLoadedTime:{get:function(){return r.domContentLoadedEventStart?r.domContentLoadedEventStart-r.fetchStart:-1}},windowLoadedTime:{get:function(){return r.loadEventStart?r.loadEventStart-r.fetchStart:-1}}};v(w,z(u,q));w.update=function(){for(var A in q){if(q.hasOwnProperty(A)){w[A]=q[A].get()}}}});j.define("MessageTokenizer",function(x){var u=b.require("Stack");var q=g;var v=g;var s=g;var y=g;var t=false;var r=function(z){return({}).toString.call(z)==="[object Array]"};var w={start:function(z){if(z!=="{"){this.exception("");return}v.push(q={});this.stateTransition(this.propertyNameStart)},propertyNameStart:function(A){var z=A.charCodeAt();s=g;if(z===36||z===95||(z>=97&&z<=122)||(z>=65&&z<=90)){s=A;this.stateTransition(this.propertyName)}else{if(A==="}"){this.objectLiterals("}")}else{this.exception()}}},propertyName:function(A){var z=A.charCodeAt();if(z===36||z===95||(z>=97&&z<=122)||(z>=65&&z<=90)||(z>=48&&z<=57)){s+=A}else{if(A===":"){this.stateTransition(this.valueStart)}else{this.exception()}}},valueStart:function(A){y=g;var z=A.charCodeAt();if(A==='"'){y="";this.stateTransition(this.stringLiterals)}else{if(A==="t"){y="t";this.stateTransition(this.booleanLiteralsTrue)}else{if(A==="f"){y="f";this.stateTransition(this.booleanLiteralsFalse)}else{if(A==="n"){y="n";this.stateTransition(this.nullLiterals)}else{if(A==="u"){y="u";this.stateTransition(this.undefinedLiterals)}else{if((z>=48&&z<=57)){y=A;this.stateTransition(this.numericLiteralsBeforePoint)}else{if(A==="-"){y="-";this.stateTransition(this.numericLiteralsAfterNegative)}else{if(A==="{"){this.objectLiterals("{")}else{if(A==="["){this.arrayLiterals("[")}else{if(A==="]"){this.arrayLiterals("]")}else{if(A===","){if(r(v.current)){v.current.length+=1;this.arrayLiterals(A)}else{this.objectLiterals(A)}}else{this.exception()}}}}}}}}}}}},stringLiterals:function(z){if(z==="\\"){this.stateTransition(this.stringLiteralsAfterEscape)}else{if(z==='"'){if(r(v.current)){this.addItem(y);this.stateTransition(this.arrayLiterals)}else{this.setProperty(y);this.stateTransition(this.objectLiterals)}}else{y+=z}}},stringLiteralsAfterEscape:function(z){switch(z){case'"':case"'":case"\\":y+=z;break;case"b":y+="\b";break;case"t":y+="\t";break;case"n":y+="\n";break;case"v":y+="\v";break;case"r":y+="\r";break;default:y+="\\"+z;break}this.stateTransition(this.stringLiterals)},numericLiteralsAfterNegative:function(z){if(z==="."||z===","||z==="}"){this.exception()}else{this.stateTransition(this.numericLiteralsBeforePoint);this.numericLiteralsBeforePoint(z)}},numericLiteralsBeforePoint:function(z){if(z==="."){y+=".";this.stateTransition(this.numericLiteralsAfterPoint)}else{this.numericLiteralsNormal(z)}},numericLiteralsAfterPoint:function(z){if(z==="."){this.exception()}else{this.numericLiteralsNormal(z)}},numericLiteralsNormal:function(A){var z=A.charCodeAt();if((z>=48&&z<=57)){y+=A}else{if(A==="e"){if(y.indexOf("e")>-1){this.exception()}else{y+="e"}}else{if(A===","||A==="}"||A==="]"){if(r(v.current)){this.addItem(+y);this.arrayLiterals(A)}else{this.setProperty(+y);this.objectLiterals(A)}}else{this.exception()}}}},booleanLiteralsTrue:function(z){switch(z){case"r":if(y!=="t"){this.exception()}else{y+=z}break;case"u":if(y!=="tr"){this.exception()}else{y+=z}break;case"e":if(y!=="tru"){this.exception()}else{y+=z}break;case",":case"}":case"]":if(y!=="true"){this.exception()}else{if(r(v.current)){this.addItem(true);this.arrayLiterals(z)}else{this.setProperty(true);this.objectLiterals(z)}}break;default:this.exception();break}},booleanLiteralsFalse:function(z){switch(z){case"a":if(y!=="f"){this.exception()}else{y+=z}break;case"l":if(y!=="fa"){this.exception()}else{y+=z}break;case"s":if(y!=="fal"){this.exception()}else{y+=z}break;case"e":if(y!=="fals"){this.exception()}else{y+=z}break;case",":case"}":case"]":if(y!=="false"){this.exception()}else{if(r(v.current)){this.addItem(false);this.arrayLiterals(z)}else{this.setProperty(false);this.objectLiterals(z)}}break;default:this.exception();break}},nullLiterals:function(z){switch(z){case"u":if(y!=="n"){this.exception()}else{y+=z}break;case"l":if(y!=="nu"&&y!=="nul"){this.exception()}else{y+=z}break;case",":case"}":case"]":if(y!=="null"){this.exception()}else{if(r(v.current)){this.addItem(null);this.arrayLiterals(z)}else{this.setProperty(null);this.objectLiterals(z)}}break;default:this.exception();break}},undefinedLiterals:function(z){switch(z){case"n":if(y!=="u"&&y!=="undefi"){this.exception()}else{y+=z}break;case"d":if(y!=="un"&&y!=="undefine"){this.exception()}else{y+=z}break;case"e":if(y!=="und"&&y!=="undefin"){this.exception()}else{y+=z}break;case"f":if(y!=="unde"){this.exception()}else{y+=z}break;case"i":if(y!=="undef"){this.exception()}else{y+=z}break;case",":case"}":case"]":if(y!=="undefined"){this.exception()}else{if(r(v.current)){this.addItem(g);this.arrayLiterals(z)}else{this.setProperty(g);this.objectLiterals(z)}}break;default:this.exception();break}},objectLiterals:function(A){if(A==="{"){var z={};if(r(v.current)){this.addItem(z)}else{this.setProperty(z)}v.push(z);this.stateTransition(this.propertyNameStart)}else{if(A==="}"){v.pop();this.stateTransition(this.objectLiterals)}else{if(A===","){if(r(v.current)){this.arrayLiterals(A)}else{this.stateTransition(this.propertyNameStart)}}else{if(A==="]"){this.arrayLiterals(A)}else{this.exception()}}}}},arrayLiterals:function(A){var z;if(A==="["){z=[];if(r(v.current)){this.addItem(z)}else{this.setProperty(z)}v.push(z);this.stateTransition(this.valueStart)}else{if(A==="]"){v.pop();this.stateTransition(this.objectLiterals)}else{if(A===","){this.stateTransition(this.valueStart)}else{this.exception()}}}},over:function(){q=g;this.currentState=g;v=g;s=g;y=g;t=false},exception:function(){q=g;t=true;this.currentState=g},stateTransition:function(z){this.currentState=z},setProperty:function(z){v.current[s]=z},addItem:function(z){v.current.push(z)},getData:function(){if(this.currentState!==this.objectLiterals||v.getLength()!==0){this.exception()}return q},isError:function(){return t},init:function(){q=g;this.currentState=this.start;v=new u();s=g;y=g;t=false}};o.Object.mixin(x,w)});j.define("CrossDomainMessageAdapter",function(r){var s=j.require("MessageTokenizer");var q=r.stringify=function(y){var A=[];var z=Object.prototype.toString;var u,x,w;var t;if(z.call(y)==="[object Object]"){for(var v in y){if(y.hasOwnProperty(v)){switch(typeof y[v]){case"string":A.push(v+':"'+y[v]+'"');break;case"number":case"boolean":case"undefined":A.push(v+":"+y[v]);break;case"object":w=z.call(y[v]);if(y[v]===null){A.push(v+":null")}else{if(w!=="[object Object]"&&w!=="[object Array]"){}else{A.push(v+":"+q(y[v]))}}break;default:break}}}t="{"+A.join(",")+"}"}if(z.call(y)==="[object Array]"){for(u=0,x=y.length;u<x;u+=1){switch(typeof y[u]){case"string":A.push('"'+y[u]+'"');break;case"number":case"boolean":case"undefined":A.push(y[u]);break;case"object":w=z.call(y[u]);if(y[u]===null){A.push(null)}else{if(w!=="[object Object]"&&w!=="[object Array]"){}else{A.push(q(y[u]))}}break;default:break}}t="["+A.join(",")+"]"}return t};r.parse=function(w){var v;if(w==="{}"){return{}}s.init();w=new String(w);for(var u=0,t=w.length;u<t;u++){if(s.isError()){return g}s.currentState(w.charAt(u))}v=s.getData();s.over();return v}});j.define("CrossDomainMessageManager",function(s){var r=j.require("Config");var q=j.require("CrossDomainMessageAdapter");var t=r.crossDomainMessageToken;s.validateToken=function(u){if(u.indexOf(t)!==0){return false}return true};s.getRealMessage=function(v){if(s.validateToken(v)){var u=t.length;var w=v.substr(u);return w}return null};s.stringify=function(u){return q.stringify(u)};s.parse=function(u){return q.parse(u)};s.createMessageWithToken=function(u){return t+u};s.wrapDataWithServerID=function(v,u){return{serverID:u,content:v}};s.wrapDataWithClientID=function(u,v){return{clientID:v,content:u}}});j.define("CrossDomainMessageDriver",function(z,N,I,v){var F=j.require("DC");var Q=j.require("Config");var L=j.require("CrossDomainMessageManager");var K=Q.renderFieldSlotid;var C=Q.renderFieldAdid;var R=Q.rendexFieldIndex;var r=Q.crossDomainNavigatorIdentifier;var O=Q.crossDomainRegToken;var y=Q.crossDomainServerID;var x=Q.crossDomainClientBaseID;var A=Q.crossDomainRegSuccessToken;var S=o.Event;var E=!!N.postMessage;var G;var s;var J;var B;var t=o.QueryString;var D=function(){if(G){return G}var W;try{W=location.href}catch(X){}if(W&&W.indexOf("?")===-1){W=W.replace(/\/([^\/]+)$/,function(Z,aa){return"/"+F(aa)})}var Y=t.parse(W);var U=Y[K];var V=Y[R];var T=[U,V].join(".");G=x+o.fixRequestCache()+(+new Date()).toString(36)+"_"+T;return G};var P=function(U,W){var V;var T;if(!L.validateToken(U)){return}U=L.getRealMessage(U);V=L.parse(U);if(V.serverID!==s){return}T=V.content;W(T,s)};var H=function(U){U=U.split("_");var T=U.length;s=U[T-1];if(typeof B==="function"){B()}H=function(){}};var M=function(T){S.add(N,"message",function(W){var V=W.data.toString();var U=N.parent;if(W.source!==U){return}if(V.indexOf(A)===0){J={sendMessage:function(X){q(X,U)}};H(V);return}P(V,T)})};var w=function(T){return function(U){if(U.indexOf(A)===0){H(U);return}P(U,T)}};var q=function(T,U){U.postMessage(T,"*")};var u=function(X){var W=D();var V=N.parent;var T;if(!V){return}if(E){q(O+W,V)}else{if(!navigator[r]){return}T=navigator[r].servers;if({}.toString.call(T)!=="[object Array]"){return}for(var U=T.length;U--;){if(T[U].server==V){J=T[U];J.regClient(W,w(X));break}}}};z.clientListen=function(U,T){B=T;if(E){M(U)}u(U);z.clientListen=function(){}};z.sendMessageToServer=function(U){if(!J){return}var W=D();var V=L.wrapDataWithClientID(U,W);var T=L.stringify(V);T=L.createMessageWithToken(T);J.sendMessage(T)}});j.define("CrossDomainMessageClient",function(r){var s=j.require("CrossDomainMessageDriver");var q=function(u,t){s.clientListen(u,t)};r.init=function(u,t){q(u,t);r.init=function(){return this};return this};r.sendMessage=function(t){s.sendMessageToServer(t);return this}});j.define("API",function(q){q.hzData=function(r){if(typeof dynamicInit==="function"){dynamicInit(r)}else{}}});j.define("CrossDomainCommand",function(t){var x=j.require("CrossDomainMessageClient");var w=j.require("API");var q=[];var s=false;var y=function(B,A){var z={command:B,data:A};x.sendMessage(z)};var u=function(){s=true;y("clientReady",{ok:1});for(var A=0,z=q.length;A<z;A++){y(q[A].command,q[A].data)}};var v={hzData:function(z){w.hzData(z)}};var r=function(B,z){var A=B.command;var C=B.data;t.excute(A,C,z)};t.regCommand=function(A,z){v[A]=z};t.excute=function(A,z,B){if(v.hasOwnProperty(A)){v[A](z,B)}};t.send=function(A,z){if(s){y(A,z)}else{q.push({command:A,data:z})}};d("cmd",function(A,z){t.send(A,z)});x.init(r,u)});j.define("ExternalMap",{});j.extend("ExternalMap",function(r){var v=j.require("Config");var q=j.require("DC");var t=v.externalKeyIEP;var w=o.DOM;var x=o.log;var s=o.getTT;var u=o.Math.getRandomFrom;var y=function(C){var D;if(C){D=C.toLowerCase();if(D.indexOf("http://")===0||D.indexOf("https://")===0){}else{C=q(C)}x(C)}else{}};var z=function(D,F,C){var E=w.createIframe(D,m.body,null,F,C);E.style.position="absolute";E.style.left=E.style.top="-99999px";return E};var A=function(E){var J;var D=screen.width;var F=screen.height;var M;var C;var L=u(0,20);var H=u(0,100);var K;M=D-L;C=F-H;if(u(0,1000)<1){var G=u(100,M);var I=u(120,C);if(G>0){M=D-G}if(I>0){C=F-I}}if(E){J=E.toLowerCase();if(J.indexOf("http://")===0||J.indexOf("https://")===0){}else{E=q(E)}z(E,M,C)}else{}};var B=function(G,F){var D=G.ul;var E=G.tp;var C=G.tt;if(E==="im"){C=s(C);if(C){A(D)}else{setTimeout(function(){A(D)},C*1000)}}else{y(D)}};r[t]=B});j.define("External",function(s){var q=j.require("ExternalMap");var r=function(u,v){for(var t in u){if(u.hasOwnProperty(t)&&t!=="firstRun"){if(q.hasOwnProperty(t)){q[t](u[t],v)}}}};s.excute=function(u,v){if(!u){return}var t=function(){r(u,v)};if(u.firstRun){if(q.firstRun){q.firstRun(u.firstRun,v,t)}}else{t()}}});j.extend("ExternalMap",function(t,E,D){var L=j.require("Config");var C=j.require("DC");var I=C.u;var G=o.DOM;var B=o.getTT;var y=o.Math.getRandomFrom;var s=L.externalKeyInFPC;var x=o.log;var v=function(){return(Math.random()*999999|0).toString(36)+(+new Date()).toString(36)};var H=function(M){var N="r";if(M){if(typeof M==="string"){N=M}return"&"+N+"="+v()}return""};var w=function(M,Q,O,P,R){var N;if(typeof M==="string"){M=[M]}setTimeout(function(){for(var T=0,S=M.length;T<S;T++){N=M[T]+H(O);x(N)}if(typeof R==="function"){setTimeout(function(){R()},250)}},Q*1000|0)};var K=function(N){var S;var P=1;var T=null;var R=N.list||[];var Q=N.rt||1;var M=B(N.it);var O=function(){for(var U=R.length;U--;){S=R[U];w(S.url,S.delay,S.rs,"pv")}};O();if(P<Q){T=setInterval(function(){P+=1;if(P<=Q){O()}if(P==Q){clearInterval(T)}},M*1000)}};var A=[[3,"1-3"],[10,"4-8"],[40,"9-13"],[60,"14-18"],[75,"19-30"],[85,"31-50"],[92,"51-90"],[100,"91-300"]];var z=function(P){P=P||A;if(typeof P==="string"){return B(P)}var N;var Q=y(0,100);for(var O=0,M=P.length;O<M;O++){N=P[O];if(Q<=N[0]){return B(N[1])}}};var u=function(P,M){var Q=z(P.delay);var O=P.url;var N=P.rs;w(O,Q,N,"click",M)};var r=function(N){var R=D;try{top.location.href;R=top.document}catch(Q){}var P=G.getClientWidth(R);var M=G.getClientHeight(R);var O=G.createIframe(N,D.body,null,P,M);O.style.position="absolute";O.style.left="-99999px";O.style.top="-99999px";return O};var F=function(N,M,O){setTimeout(function(){N.contentWindow.location.replace(M)},O*1000)};var J=function(Q){var O;var R=0;var U;var T;var S;var M;for(var P=0,N=Q.length;P<N;P++){U=Q[P];T=B(U.st);S=U.url;if(typeof S!=="string"){M=S.length;S=S[y(0,M-1)]}if(P===0){O=r(S)}else{F(O,S,R)}R+=T}};var q=function(S,O){var T=O.slotID;var N=O.width;var V=O.height;var P=S.pvel;var M=S.cke;var U=S.lde||{};var R=U.list;var Q=U.delay;if(P){K(P)}if(M){if(R){u(M,function(){J(R)})}else{u(M)}}else{if(R){h(function(){var W=z(Q);setTimeout(function(){J(R)},W*1000)})}}};t[s]=q});h(function(E,B){var J=j.require("Config");var F=J.clickPointField;var K=o.Event;var u=o.QueryString;var A=/url=[^&]+/;var y=0;var G=0;var t;var D=0;var z=0;var v=0;var I=0;var x="cp";var H="cto";var r="cts";var C="fmp";var q="duo";var w=function(O,M){var P=O.href;M=encodeURIComponent(u.stringify(M));var L;var N=P.indexOf("&"+F+"=");if(N>-1){P=P.substring(0,N)}else{}L=P+"&"+F+"="+M;O.href=L};var s=function(){D=0;z=0;v=0;I=0};h(function(M,L){if(typeof window.dropClickData!=="undefined"){return}K.once(L,"mouseover",function(O){var N;var P;if(typeof O.clientX==="number"){N=O.clientX;P=O.clientY}else{N=O.x;P=O.y}y=new Date();t=N+","+P});K.add(L,"mousedown",function(N){D=+new Date()});K.add(L,"mouseup",function(N){z=+new Date()});K.add(L,"touchstart",function(N){v=+new Date()});K.add(L,"touchend",function(N){I=+new Date()});K.add(L,"click",function(S){S=S||M.event;var R=S.target||S.srcElement;var Q;var P;var N;var T;var O={};while(R){Q=R.tagName;if(Q==="a"||Q==="A"){P=R.href;break}else{R=R.parentNode}}if(P){if(typeof S.clientX==="number"){N=S.clientX;T=S.clientY}else{N=S.x;T=S.y}G++;O[H]=new Date-y;O[x]=N+","+T;O[r]=G;O[C]=t;O[q]=Math.max(z-D,I-v);if(A.test(P)){w(R,O)}}else{}s()})})});h(function(B,w){var K=j.require("Performance");var H=j.require("Config");var D=H.adOnloadLogServer;var F="action";var y="slotid";var s="adid";var J="i";var v="r";var C="pvid";var r=o.log;var L=o.Event;var q=o.QueryString;var x=false;var t=false;var I=H.fieldAdOnloadAction;var A=o.uuid();var u;var z;var E;L.once(B,"load",function(){x=true;if(t){G(u,z,E)}});var G=function(N,M,Q){var P={};P[F]=I;P[y]=N;P[s]=M;P[v]=A;P[C]=Q||"";if(K.update){K.update();P.du=K.domainLookupTime;P.ct=K.connectTime;P.rq=K.requestTime;P.rp=K.responseTime;P.dp=K.domParsingTime;P.dr=K.domContentLoadedTime;P.ld=K.windowLoadedTime}else{}var R=q.stringify(P);var O=D+"?"+R;r(O)};B.onload_log=function(N,M,O){if(!O){O=q.query("pvid")}t=true;u=N;z=M;E=O;if(x){G(N,M,O)}}});h(function(u,q){var s=j.require("Config");var t=o.log;var r=o.Event;u.click_log=function(w,v){var x=function(){for(var z=0,y=w.length;z<y;z++){t(w[z])}};if(v){r.once(q,"click",x)}else{r.add(q,"click",x)}}});h(function(t,q,w){var s=j.require("Config");var r=j.require("CrossDomainMessageClient");var v=j.require("CrossDomainCommand");var x=j.require("External");var u=function(y){if(!y){return}x.excute(y.ext,y);v.send("fillAsyncData",y)};c.fillData=function(y){u(y)}})}(Function("return this")(),document,"__ADEZ_"));