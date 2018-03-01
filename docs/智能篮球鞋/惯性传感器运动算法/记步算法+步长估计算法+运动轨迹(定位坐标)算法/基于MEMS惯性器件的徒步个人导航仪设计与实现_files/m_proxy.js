/*!2015-09-14 10:34 */
KSLITE.declare('tb-m_proxy'/*'tanxssp-main'*/, [
  'tanxssp-utils',
  'tanxssp-config',
  'tanxssp-params',
  'tanxssp-request'
], function (a, b) {
  var c = a('tanxssp-utils'),
  d = a('tanxssp-params').Def,
  e = a('tanxssp-params').pvid,
  f = a('tanxssp-params').pvid_1,
  g = a('tanxssp-request').Def,
  h = a('tanxssp-config');
  b.run = function (a) {
    a.sd && 'null' === a.sd || h.ready(function () {
      if ('16' == a.distype) return void KSLITE.provide(['tanxssp-fold'], function (b) {
        b('tanxssp-fold').run(a)
      });
      var b = {
      };
      c.mix(b, d()),
      c.mix(b, {
        pvid: e,
        pvid_1: f
      }),
      c.mix(b, a),
      g(b)
    })
  }
}),
KSLITE.declare('tanxssp-config', function (a, b) {
  var c = {
  },
  d = {
  },
  e = !1;
  c.mapAdType = {
    1: 'txt',
    2: 'pic',
    3: 'flash',
    4: 'video',
    5: 'txtlink',
    6: 'tuwen',
    7: 'js',
    8: 'html',
    9: 'flashb',
    10: 'pic/html',
    11: 'creationTemplate',
    98: 'iframehtml',
    99: 'multiframe'
  },
  c.mapDisType = {
    1: 'static',
    2: 'couplet',
    3: 'rightfloat',
    4: 'floatwin',
    5: 'popwin',
    6: 'common',
    7: 'backdisplay',
    8: 'channel',
    9: 'search',
    10: 'topic',
    11: 'video',
    13: 'xuanting',
    14: 'singleCouplet',
    201: 'static'
  },
  c.mapCreationTemplate = {
    1: 'focusBanner',
    2: 'ppt',
    3: 'openUrl',
    4: 'taiShan'
  },
  c.ali = [
    'taobao.com',
    'alimama.com',
    'alibaba.com',
    'alipay.com',
    'alisoft.com',
    '1688.com',
    'tanx.com',
    'mmstat.com',
    'etao.com',
    'tmall.com'
  ],
  c.sc = 'sc1',
  c.mc = 'mc1',
  c.kws = [
    'wd',
    'p',
    'q',
    'keyword',
    'kw',
    'w',
    'key',
    'word',
    'query',
    'name'
  ],
  d.cache = void 0,
  d.win = window,
  d.d = document,
  d.maxwin = null,
  d._maxwin = function (a) {
    if (a) return void (d.maxwin = a);
    a = d.win;
    try {
      top != a && top.location && top.location.href && (a = top)
    } catch (b) {
    }
    d.maxwin = a
  },
  d.ali = function () {
    var a,
    b = d.d.domain.split('.'),
    e = c.ali;
    return b.length > 1 && (a = '@' + b[b.length - 2] + '.' + b[b.length - 1], ('@' + e.join('@')).indexOf(a) > - 1) ? !0 : !1
  }(),
  d.frm = function () {
    return top != window
  }(),
  d.data = {
  },
  d.laterShowData = {
  },
  d.dx = function () {
    return d.data[c.sc]
  },
  d.units = [
  ],
  d.addUnit = function (a) {
    var b = (new Date).getTime(),
    c = {
    };
    c.w = window,
    c.pid = a.pid,
    c.t = b,
    d.units.push(c)
  },
  d.plusUnitCount = function (a) {
    for (var b = 0, e = 0; e < d.units.length; e++) if (d.units[e].pid == a.pid && (b += 1), b > 1) return;
    var f = c.sc;
    d.data[f] ? d.data[f]++ : d.data[f] = 1
  },
  d.ref_url = null,
  d.getRef_url = function () {
    if (d.ref_url) return d.ref_url;
    var a = location.href;
    return d.frm && (a = d.win == d.maxwin ? d.d.referrer : top.location.href, '' === a && (a = location.href)),
    d.ref_url = a,
    a
  },
  d.r = function () {
    var a = '';
    try {
      a = top.document.referrer
    } catch (b) {
    }
    return null === a && (a = ''),
    a
  }(),
  d.send = function (a) {
    var b = new Image;
    window[Math.random().toString(16).substring(2)] = b,
    b.src = a
  },
  d.isStrict = 'CSS1Compat' == document.compatMode,
  d.ssl = 'https:' === location.protocol,
  d.webp = !1,
  b.c = c,
  b.r = d,
  b.ready = function (a) {
    if (e) return a();
    var b = setTimeout(function () {
      d._maxwin(window),
      e = !0,
      a()
    }, 50);
    d._maxwin(),
    clearTimeout(b),
    e = !0,
    a()
  },
  b.ready(function () {
  })
}),
KSLITE.declare('tanxssp-utils', [
  'tanxssp-config'
], function (a, b) {
  var c = a('tanxssp-config').r,
  d = window,
  e = {
  };
  e.isStrict = c.isStrict,
  e.mix = KSLITE.mix,
  e.md5 = function (a) {
    function b(a, b) {
      a[b >> 5] |= 128 << b % 32,
      a[(b + 64 >>> 9 << 4) + 14] = b;
      for (var c = 1732584193, i = - 271733879, j = - 1732584194, k = 271733878, l = 0; l < a.length; l += 16) {
        var m = c,
        n = i,
        o = j,
        p = k;
        c = d(c, i, j, k, a[l + 0], 7, - 680876936),
        k = d(k, c, i, j, a[l + 1], 12, - 389564586),
        j = d(j, k, c, i, a[l + 2], 17, 606105819),
        i = d(i, j, k, c, a[l + 3], 22, - 1044525330),
        c = d(c, i, j, k, a[l + 4], 7, - 176418897),
        k = d(k, c, i, j, a[l + 5], 12, 1200080426),
        j = d(j, k, c, i, a[l + 6], 17, - 1473231341),
        i = d(i, j, k, c, a[l + 7], 22, - 45705983),
        c = d(c, i, j, k, a[l + 8], 7, 1770035416),
        k = d(k, c, i, j, a[l + 9], 12, - 1958414417),
        j = d(j, k, c, i, a[l + 10], 17, - 42063),
        i = d(i, j, k, c, a[l + 11], 22, - 1990404162),
        c = d(c, i, j, k, a[l + 12], 7, 1804603682),
        k = d(k, c, i, j, a[l + 13], 12, - 40341101),
        j = d(j, k, c, i, a[l + 14], 17, - 1502002290),
        i = d(i, j, k, c, a[l + 15], 22, 1236535329),
        c = e(c, i, j, k, a[l + 1], 5, - 165796510),
        k = e(k, c, i, j, a[l + 6], 9, - 1069501632),
        j = e(j, k, c, i, a[l + 11], 14, 643717713),
        i = e(i, j, k, c, a[l + 0], 20, - 373897302),
        c = e(c, i, j, k, a[l + 5], 5, - 701558691),
        k = e(k, c, i, j, a[l + 10], 9, 38016083),
        j = e(j, k, c, i, a[l + 15], 14, - 660478335),
        i = e(i, j, k, c, a[l + 4], 20, - 405537848),
        c = e(c, i, j, k, a[l + 9], 5, 568446438),
        k = e(k, c, i, j, a[l + 14], 9, - 1019803690),
        j = e(j, k, c, i, a[l + 3], 14, - 187363961),
        i = e(i, j, k, c, a[l + 8], 20, 1163531501),
        c = e(c, i, j, k, a[l + 13], 5, - 1444681467),
        k = e(k, c, i, j, a[l + 2], 9, - 51403784),
        j = e(j, k, c, i, a[l + 7], 14, 1735328473),
        i = e(i, j, k, c, a[l + 12], 20, - 1926607734),
        c = f(c, i, j, k, a[l + 5], 4, - 378558),
        k = f(k, c, i, j, a[l + 8], 11, - 2022574463),
        j = f(j, k, c, i, a[l + 11], 16, 1839030562),
        i = f(i, j, k, c, a[l + 14], 23, - 35309556),
        c = f(c, i, j, k, a[l + 1], 4, - 1530992060),
        k = f(k, c, i, j, a[l + 4], 11, 1272893353),
        j = f(j, k, c, i, a[l + 7], 16, - 155497632),
        i = f(i, j, k, c, a[l + 10], 23, - 1094730640),
        c = f(c, i, j, k, a[l + 13], 4, 681279174),
        k = f(k, c, i, j, a[l + 0], 11, - 358537222),
        j = f(j, k, c, i, a[l + 3], 16, - 722521979),
        i = f(i, j, k, c, a[l + 6], 23, 76029189),
        c = f(c, i, j, k, a[l + 9], 4, - 640364487),
        k = f(k, c, i, j, a[l + 12], 11, - 421815835),
        j = f(j, k, c, i, a[l + 15], 16, 530742520),
        i = f(i, j, k, c, a[l + 2], 23, - 995338651),
        c = g(c, i, j, k, a[l + 0], 6, - 198630844),
        k = g(k, c, i, j, a[l + 7], 10, 1126891415),
        j = g(j, k, c, i, a[l + 14], 15, - 1416354905),
        i = g(i, j, k, c, a[l + 5], 21, - 57434055),
        c = g(c, i, j, k, a[l + 12], 6, 1700485571),
        k = g(k, c, i, j, a[l + 3], 10, - 1894986606),
        j = g(j, k, c, i, a[l + 10], 15, - 1051523),
        i = g(i, j, k, c, a[l + 1], 21, - 2054922799),
        c = g(c, i, j, k, a[l + 8], 6, 1873313359),
        k = g(k, c, i, j, a[l + 15], 10, - 30611744),
        j = g(j, k, c, i, a[l + 6], 15, - 1560198380),
        i = g(i, j, k, c, a[l + 13], 21, 1309151649),
        c = g(c, i, j, k, a[l + 4], 6, - 145523070),
        k = g(k, c, i, j, a[l + 11], 10, - 1120210379),
        j = g(j, k, c, i, a[l + 2], 15, 718787259),
        i = g(i, j, k, c, a[l + 9], 21, - 343485551),
        c = h(c, m),
        i = h(i, n),
        j = h(j, o),
        k = h(k, p)
      }
      return Array(c, i, j, k)
    }
    function c(a, b, c, d, e, f) {
      return h(i(h(h(b, a), h(d, f)), e), c)
    }
    function d(a, b, d, e, f, g, h) {
      return c(b & d | ~b & e, a, b, f, g, h)
    }
    function e(a, b, d, e, f, g, h) {
      return c(b & e | d & ~e, a, b, f, g, h)
    }
    function f(a, b, d, e, f, g, h) {
      return c(b ^ d ^ e, a, b, f, g, h)
    }
    function g(a, b, d, e, f, g, h) {
      return c(d ^ (b | ~e), a, b, f, g, h)
    }
    function h(a, b) {
      var c = (65535 & a) + (65535 & b),
      d = (a >> 16) + (b >> 16) + (c >> 16);
      return d << 16 | 65535 & c
    }
    function i(a, b) {
      return a << b | a >>> 32 - b
    }
    function j(a) {
      for (var b = [
      ], c = (1 << l) - 1, d = 0, e = a.length * l; e > d; d += l) b[d >> 5] |= (a.charCodeAt(d / l) & c) << d % 32;
      return b
    }
    function k(a) {
      for (var b = '0123456789abcdef', c = '', d = 0; d < 4 * a.length; d++) c += b.charAt(a[d >> 2] >> d % 4 * 8 + 4 & 15) + b.charAt(a[d >> 2] >> d % 4 * 8 & 15);
      return c
    }
    var l = 16;
    return k(b(j(a), a.length * l))
  },
  e.getScript = KSLITE.getScript,
  e.syncScript = function (a, b) {
    document.write('<script charset="' + (b || 'gbk') + '" src="' + a + '"></script>')
  },
  e.isIE6 = /msie 6/gi.test(d.navigator.userAgent),
  e.isMob = /iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase()),
  e.countdown = function (a, b, c) {
    var d;
    return 0 === a ? (b.call(this, a), void clearTimeout(d))  : isNaN(parseInt(a, 10)) ? void clearTimeout(d)  : (void 0 === c && (c = 1000), void (d = setTimeout(function () {
      a--,
      e.countdown(a, b, c)
    }, c)))
  },
  e.insertInlineCSS = function (a) {
    var b = document,
    c = document.getElementsByTagName('head') [0];
    if (b.createStyleSheet) window.ieStyle = a,
    b.createStyleSheet('javascript:ieStyle');
     else {
      var d = b.createElement('style');
      d.type = 'text/css',
      d.setAttribute('for', 'tanxClassUse');
      var e = b.createTextNode(a);
      d.appendChild(e),
      c.appendChild(d)
    }
  },
  e.isEmptyObject = function (a) {
    var b;
    for (b in a) return !1;
    return !0
  },
  e.encode = function (a) {
    return encodeURIComponent(a + '')
  },
  e.decode = function (a) {
    return decodeURIComponent(a + '')
  },
  e.getAttr = function (a, b) {
    return e.trim(a.getAttribute(b.toLowerCase(), 2) || '') || ''
  },
  e.setAttr = function (a, b, c) {
    a.setAttribute(b.toLowerCase(), e.trim(c + ''))
  },
  e.getOffset = function (a) {
    var b = a.getBoundingClientRect(),
    c = document.body.scrollTop || document.documentElement.scrollTop;
    return {
      top: b.top + c,
      left: b.left
    }
  },
  e.$ = function (a) {
    return document.getElementById(a)
  },
  e.tanxId = function (a) {
    return e.$('tanx-a-' + a)
  },
  e.tanxOuter = function (a) {
    return e.$('tanxssp-outer-con' + a)
  },
  e.tanxSId = function (a) {
    return 'tanx-a-' + a
  },
  e.getCookie = function (a) {
    var b;
    try {
      b = d.localStorage
    } catch (c) {
    }
    var f = + new Date,
    g = '';
    if (b) {
      var h = b.getItem(a);
      h && (f > h.split('::') [1] ? b.removeItem(a)  : g = h.split('::') [0])
    } else for (var i = (' ' + document.cookie).split(';'), j = 0; j < i.length; j++) if (0 === i[j].indexOf(' ' + a + '=')) {
      g = e.decode(i[j].split('=') [1]);
      break
    }
    return g
  },
  e.css = function (a, b, c) {
    return c ? (a.style[b] = c, c)  : d.getComputedStyle ? d.getComputedStyle(a, null).getPropertyValue(b)  : a.currentStyle ? a.currentStyle[b] : void 0
  },
  e.each = function (a, b) {
    if (a.length && a.slice) for (var c = 0, d = a.length; d > c; c++) b(a[c], c);
     else for (var e in a) a.hasOwnProperty(e) && b(a[e], e)
  },
  e.setCookie = function (a, b, c) {
    var f;
    try {
      f = d.localStorage
    } catch (g) {
    }
    var h = new Date;
    f ? (f.getItem(a) && f.removeItem(a), f.setItem(a, b + '::' + ( + h + 86400000 * c)))  : (h.setDate(h.getDate() + c), document.cookie = a + '=' + e.encode(b) + '; expires=' + h.toGMTString() + '; path=/')
  },
  e.trim = function (a) {
    var b = '';
    try {
      b = a.trim()
    } catch (c) {
      for (var a = a.replace(/^\s\s*/, ''), d = /\s/, e = a.length; d.test(a.charAt(--e)); );
      b = a.slice(0, e + 1)
    }
    return b
  },
  e.show = function (a) {
    var b = e.getAttr(a, '_tanx_old_display') || '';
    e.css(a, 'display', b)
  },
  e.hide = function (a) {
    a && (e.setAttr(a, '_tanx_old_display', e.css(a, 'display')), e.css(a, 'display', 'none'))
  },
  e.now = function () {
    return Date.now ? function () {
      return Date.now()
    }
     : function () {
      return new Date - 0
    }
  }(),
  navigator.userAgent && navigator.userAgent.toLowerCase().indexOf('firefox') > - 1 && ('undefined' == typeof HTMLElement || HTMLElement.prototype.insertAdjacentElement || (HTMLElement.prototype.insertAdjacentElement = function (a, b) {
    switch (a.toLowerCase()) {
      case 'beforebegin':
        this.parentNode.insertBefore(b, this);
        break;
      case 'afterbegin':
        this.insertBefore(b, this.firstChild);
        break;
      case 'beforeend':
        this.appendChild(b);
        break;
      case 'afterend':
        this.nextSibling ? this.parentNode.insertBefore(b, this.nextSibling)  : this.parentNode.appendChild(b)
    }
  },
  HTMLElement.prototype.insertAdjacentHTML = function (a, b) {
    var c = this.ownerDocument.createRange();
    c.setStartBefore(this);
    var d = c.createContextualFragment(b);
    this.insertAdjacentElement(a, d)
  })), e.showAd = function (a, b, c, e) {
    b ? d.setTimeout(function () {
      var c = document.getElementById(b);
      try {
        c.insertAdjacentHTML('beforebegin', a),
        'function' == typeof e && e()
      } catch (d) {
        c = c.parentNode,
        c.insertAdjacentHTML('beforebegin', a),
        'function' == typeof e && e()
      }
    }, 0)  : c ? d.setTimeout(function () {
      try {
        c.insertAdjacentHTML('afterbegin', a),
        'function' == typeof e && e()
      } catch (b) {
        c = c.parentNode,
        c.insertAdjacentHTML('afterbegin', a),
        'function' == typeof e && e()
      }
    }, 0)  : (document.write(a), 'function' == typeof e && e())
  }; var f = function () {
    function a(a) {
      for (var b = 0; b < i.length && a !== i[b]; b++);
      return b < i.length ? b : - 1
    }
    var b,
    c = navigator.userAgent.toLowerCase(),
    f = c.indexOf('msie') > - 1,
    g = navigator.userAgent.match(/MSIE\s([^;]*)/),
    h = 0;
    g && g[1] && (h = parseFloat(g[1])),
    b = f ? 7 > h ? !1 : 'BackCompat' == document.compatMode ? !1 : !0 : !0;
    var i = [
    ],
    j = [
    ],
    k = [
    ],
    l = [
    ],
    m = function (c, f) {
      if (!(a(c) >= 0)) if (l.push(c.style.cssText), i.push(c), b) c.style.position = 'fixed',
      e.each(f, function (a, b) {
        c.style[b] = a || 0
      });
       else {
        var g = null,
        h = null;
        j.push(f);
        var m = function () {
          for (var a, b, c, d, e = document, f = e.documentElement.clientHeight || e.body.clientHeight, g = 0, h = i.length; h > g; g++) a = i[g],
          d = j[g],
          a.style.position = 'absolute',
          b = a.offsetWidth,
          c = a.offsetHeight,
          void 0 !== d.top && (a.style.top = (parseInt(d.top, 10) || 0) + (e.body.scrollTop || e.documentElement.scrollTop) + 'px'),
          void 0 !== d.left && (a.style.left = (parseInt(d.left, 10) || 0) + (e.body.scrollLeft || e.documentElement.scrollLeft) + 'px'),
          void 0 !== d.right && (a.style.right = (parseInt(d.right, 10) || 0) - (e.body.scrollLeft || e.documentElement.scrollLeft) + 'px'),
          void 0 !== d.bottom && (a.style.top = f - (parseInt(d.bottom, 10) || 0) - c + (e.body.scrollTop || e.documentElement.scrollTop) + 'px')
        },
        n = function () {
          g && clearTimeout(g),
          g = setTimeout(function () {
            m()
          }, 10)
        };
        e.addEvent(d, 'scroll', n);
        var o = function () {
          h && clearTimeout(h),
          h = setTimeout(function () {
            m()
          }, 10)
        };
        e.addEvent(d, 'resize', o),
        k.push({
          scroll: n,
          resize: o
        }),
        m()
      }
    },
    n = function (c) {
      var f = a(c);
      0 > f || (c.style.cssText = l[f], l.splice(f, 1), i.splice(f, 1), b || (j.splice(f, 1), e.removeEvent(d, 'scroll', k[f].scroll), e.removeEvent(d, 'resize', k[f].resize), k.splice(f, 1)))
    };
    return {
      fixedEl: m,
      deFixed: n
    }
  }(); e.createCloseBtn = function () {
    var a = document.createElement('div'),
    b = ' onmouseover="this.src=\'//img.alicdn.com/tps/i1/TB1TX_HGXXXXXcTXXXX.ZwDGFXX-43-13.gif\'"',
    c = ' onmouseout="this.src=\'//img.alicdn.com/tps/i4/TB1lcLIGXXXXXchXXXX.ZwDGFXX-43-13.gif\'"',
    d = ' style="height:13px;font-size:14px;float:right;width:43px;cursor:pointer;position:absolute;top:-16px;right:0"';
    return a.innerHTML = '<img alt="Close" src="//img.alicdn.com/tps/i4/TB1lcLIGXXXXXchXXXX.ZwDGFXX-43-13.gif" ' + b + c + d + ' />',
    a
  }, e.fixedEl = f.fixedEl, e.deFixed = f.deFixed, function (a, b) {
    b.addEventListener ? (e.addEvent = function (a, b, c) {
      a.addEventListener(b, c, !1)
    }, e.removeEvent = function (a, b, c) {
      a.removeEventListener(b, c, !1)
    })  : b.attachEvent ? (e.addEvent = function (b, c, d) {
      b['e' + c + d] = d,
      b[c + d] = function () {
        b['e' + c + d](a.event)
      },
      b.attachEvent('on' + c, b[c + d])
    }, e.removeEvent = function (a, b, c) {
      a.detachEvent('on' + b, a[b + c]),
      a[b + c] = null
    })  : (e.addEvent = function (b, c, d) {
      b['on' + c] = d.call(b, a.event)
    }, e.removeEvent = function (a, b) {
      a['on' + b] = null
    }),
    e.domReady = function (a) {
      function b(a) {
        for (n = 1; a = d.shift(); ) a()
      }
      var c,
      d = [
      ],
      e = !1,
      f = document,
      g = f.documentElement,
      h = g.doScroll,
      i = 'DOMContentLoaded',
      j = 'addEventListener',
      k = 'onreadystatechange',
      l = 'readyState',
      m = h ? /^loaded|^c/ : /^loaded|c/,
      n = m.test(f[l]);
      return f[j] && (c = function () {
        f.removeEventListener(i, c, e),
        b()
      }, f[j](i, c, e)),
      h && (c = function () {
        /^c/.test(f[l]) && (f.detachEvent(k, c), b())
      }, f.attachEvent(k, c)),
      h ? a = function (b) {
        if (window != top) n ? b()  : d.push(b);
         else {
          try {
            g.doScroll('left')
          } catch (c) {
            return setTimeout(function () {
              a(b)
            }, 50)
          }
          b()
        }
      }
       : function (a) {
        n ? a()  : d.push(a)
      }
    }()
  }(d, document), e.tagName = function (a) {
    return a && a.tagName ? a.tagName.toLowerCase()  : null
  }, e.send = c.send, e.encodeJs = function (a) {
    if (!a) return a;
    var b,
    c,
    d = '0123456789ABCDEF',
    e = function (a) {
      for (var b = d.substr(15 & a, 1); a > 15; ) a >>= 4,
      b = d.substr(15 & a, 1) + b;
      return b
    },
    f = '',
    g = a.length,
    h = '';
    for (c = 0; g > c; c++) if (b = a.charCodeAt(c), b >= 97 && 122 >= b || b >= 65 && 90 >= b || b >= 48 && 57 >= b || 32 == b || 44 == b || 46 == b) f += a.charAt(c);
     else if (127 >= b) h = e(b),
    h.length < 2 && (h += '0'),
    f += '\\x' + h;
     else {
      for (h = e(b); h.length < 4; ) h = '0' + h;
      f += '\\u' + h
    }
    return f
  }, e.webp = function (a) {
    var b = /^https?:\/\/[\w-]+\.alicdn\.com/i,
    d = /^http:\/\/i.mmcdn.cn/i,
    e = /^http:\/\/\w+.tbcdn.cn/i;
    return !/_\.webp$/i.test(a) && c.webp && (b.test(a) || d.test(a) || e.test(a)) ? a += '_.webp' : a
  }, e.each(e, function (a, c) {
    b[c] = a
  })
}), KSLITE.declare('tanxssp-request', [
  'tanxssp-utils',
  'tanxssp-config',
  'tanxssp-lazy',
  'tanxssp-close'
], function (a, b) {
  function c(a) {
    if (h.ssl) {
      var b = /(http:\/\/i.mmcdn.cn)|(http:\/\/img0[1-8].taobaocdn.com)|(http:\/\/img1[1-3].tbcdn.cn)/i,
      c = /http:\/\/(\w+).alicdn.com/i,
      d = /http:\/\/strip\.taobaocdn\.com/i,
      e = a.data,
      f = a.clickurl;
      f.match(/^http:\/\/click\.mz\.simba\.taobao\.com/i) && (a.clickurl = f.replace(/^http:/, 'https:'));
      var g = a.feedback || '';
      return g.match(/^http:\/\/df\.tanx\.com/i) && (a.feedback = g.replace(/^http:/, 'https:')),
      b.test(e) ? void (a.data = e.replace(b, 'https://aecpm.alicdn.com'))  : /http:\/\/a.tbcdn.cn/i.test(e) ? void (a.data = e.replace(/http:\/\/a.tbcdn.cn/i, 'https://assets.alicdn.com'))  : c.test(e) ? void (a.data = e.replace(c, 'https://$1.alicdn.com'))  : d.test(e) ? void (a.data = e.replace(d, 'https://acc.alicdn.com'))  : void 0
    }
  }
  function d(a) {
    var b = 'jsonp_callback_' + parseInt(100000 * Math.random(), 10);
    window[b] = function (d) {
      window.__ocbad__ && 'mm_12852562_1778064_13670999' == d.pid && window.__ocbad__._c(d.pid, '3'),
      d._o = a,
      c(d),
      j(d);
      var e = {
        elConId: 'tanxssp-outer-con' + d.pid,
        clickUrl: d.clickurl,
        data: d.data,
        height: d.height,
        pid: d.pid,
        width: d.width
      },
      f = window;
      if (f.tanx_ssp_load_ad && f.tanx_ssp_load_ad.length) for (var g = 0, h = f.tanx_ssp_load_ad.length; h > g; g++) if (f.tanx_ssp_load_ad[g][d.pid]) try {
        f.tanx_ssp_load_ad[g][d.pid](e)
      } catch (i) {
      }
      try {
        window[b] = null,
        delete window[b]
      } catch (i) {
      }
    },
    a.cb = b,
    a.ai = h.units.length - 1;
    var d = a.cas,
    e = [
      'i',
      'cb',
      'callback',
      'ep',
      'userid',
      'o',
      'f',
      'n',
      're',
      'r',
      'cah',
      'caw',
      'ccd',
      'ctz',
      'chl',
      'cja',
      'cpl',
      'cmm',
      'cf',
      'cg',
      'pvid',
      'pvid_1',
      'ai',
      'ac',
      d,
      'cas',
      'cbh',
      'cbw',
      'dx',
      'u',
      'pf',
      'k',
      'tt'
    ];
    'ecpm.tanx.com' == a.sd && (e.push('nk'), e.push('sk'));
    var g = [
    ];
    return i.each(e, function (b) {
      a[b] !== f && g.push(b + '=' + i.encode(a[b]))
    }),
    g.join('&')
  }
  function e(a) {
    for (var b = !1, c = 0, d = h.units.length; d > c; c++) if (a.i == h.units[c].i) {
      b = !0;
      break
    }
    return b || h.units.push({
      i: a.i,
      sync: a.sync
    }),
    b
  }
  var f,
  g,
  h = a('tanxssp-config').r,
  i = a('tanxssp-utils'),
  j = a('tanxssp-lazy').treatShow,
  k = a('tanxssp-close');
  window.null_data && (g = window.null_data),
  window.null_data = function () {
    g && g()
  },
  b.Def = function (a) {
    var b = - 1 < location.host.indexOf('www.taobao.com');
    if (!window.__ocbad__ && b && KSLITE.provide(['tanxssp-aawd'], function (a) {
      a('tanxssp-aawd').Def()
    }), e(a)) return !1;
    if (!k.isClose(a.i)) {
      var c = d(a),
      f = h.ssl ? 'https' : 'http';
      a.sd.match(/\//) || (a.sd += '/ex');
      var g = f + '://' + a.sd + '?' + c;
      a.sync ? i.syncScript(g)  : i.getScript(g),
      window.__ocbad__ && 'mm_12852562_1778064_13670999' == a.i && window.__ocbad__._c(a.i, '2')
    }
  }
}), KSLITE.declare('tanxssp-params', [
  'tanxssp-config',
  'tanxssp-utils'
], function (a, b) {
  function c() {
    return {
      ctz: - ((new Date).getTimezoneOffset() / 60)
    }
  }
  function d() {
    return {
      chl: history.length
    }
  }
  function e() {
    var a = navigator;
    return {
      cja: a.javaEnabled() ? '1' : '0',
      cpl: a.plugins ? a.plugins.length : 0,
      cmm: a.mimeTypes ? a.mimeTypes.length : 0
    }
  }
  function f() {
    var a,
    b,
    c = '-1',
    d = navigator;
    if (d.plugins && d.plugins.length) {
      for (a = 0; a < d.plugins.length; a++) if ( - 1 != d.plugins[a].name.indexOf('Shockwave Flash')) {
        c = d.plugins[a].description.split('Shockwave Flash ') [1];
        break
      }
    } else if (window.ActiveXObject) for (b = 10; b >= 2; b--) try {
      var e = new Function('return new ActiveXObject(\'ShockwaveFlash.ShockwaveFlash.' + b + '\');');
      if (e) {
        c = b + '.0';
        break
      }
    } catch (f) {
    }
    return '-1' != c && (c = c.substring(0, c.indexOf('.') + 2)),
    {
      cf: c
    }
  }
  function g() {
    var a,
    b = 0,
    c = 0;
    return A && A.body && (a = A.body, b = a.clientHeight, c = a.clientWidth),
    {
      cbh: b,
      cbw: c
    }
  }
  function h() {
    var a = window.screen,
    b = 0,
    c = 0,
    d = 0,
    e = 0,
    f = 0;
    try {
      b = a.width,
      c = a.height,
      d = a.availHeight,
      e = a.availWidth,
      f = a.colorDepth
    } catch (g) {
    }
    return {
      re: b + 'x' + c,
      cah: d,
      caw: e,
      ccd: f
    }
  }
  function i() {
    var a = '';
    try {
      a = A.title
    } catch (b) {
    }
    return {
      tt: a
    }
  }
  function j() {
    var a,
    b,
    c = '',
    d = location,
    e = window.screen,
    f = document.cookie.length,
    g = navigator.userAgent,
    h = document.referrer;
    if (w.ali) for (a = (' ' + document.cookie).split(';'), b = 0; b < a.length; b++) if (0 === a[b].indexOf(' cna=')) {
      c = a[b].substr(5, 24);
      break
    }
    var i = [
    ];
    for (var j in e) i.push(j),
    i.push(e[j]);
    return c = y.md5(Math.random() + k().cg + + new Date + y.md5(f + g + i.join('x') + c + h + + new Date + Math.random() + d.href)),
    {
      cg: c
    }
  }
  function k() {
    function a(a, b) {
      var c,
      d = '',
      e = 1;
      if (e = Math.floor(a.length / b), 1 == e) d = a.substr(0, b);
       else for (c = 0; b > c; c++) d += a.substr(c * e, 1);
      return d
    }
    var b,
    c,
    d,
    e,
    f = '',
    g = '',
    h = location,
    i = '';
    if (w.ali) for (b = (' ' + document.cookie).split(';'), c = 0; c < b.length; c++) if (0 === b[c].indexOf(' cna=')) {
      g = b[c].substr(5, 24);
      break
    }
    if ('' === g) {
      var j = h.search.length > 9 ? h.search : (h.pathname.length > 9 ? h.pathname : h.href).substr(1);
      for (b = document.cookie.split(';'), c = 0; c < b.length; c++) b[c].split('=').length > 1 && (i += b[c].split('=') [1]);
      i.length < 16 && (i += '0123456789abcdef'),
      g = a(j, 8) + a(i, 16)
    }
    for (c = 1; 32 >= c; c++) d = z.floor(16 * z.random()),
    g && c <= g.length && (e = g.charCodeAt(c - 1), d = (d + e) % 16),
    f += d.toString(32),
    1 === c && 'a' > f && (f = 'a');
    return {
      cg: f
    }
  }
  function l() {
    var a = z.floor(10000 * z.random()) + 10001;
    try {
      w.sid ? a = w.sid : (a -= 10001, w.sid = a)
    } catch (b) {
    }
    return {
      ac: a
    }
  }
  function m() {
    var a,
    b,
    c,
    d,
    e,
    f = 0,
    g = 16,
    h = 0,
    i = x[0] || 4973;
    for (c = 1; g >= c; c++) a = z.random(),
    b = z.random(),
    z.pow(a, 2) + z.pow(b, 2) <= 1 && f++,
    12 >= c && (h += a);
    d = 'pr' + String.fromCharCode(97 + f),
    e = z.round(h * i) | (A.body ? A.body.clientWidth : 0) << 16;
    var j = {
    };
    return j[d] = e,
    j.cas = d,
    j
  }
  function n() {
    var a = w.data[x.sc] || 1;
    return {
      dx: a ? a : ''
    }
  }
  function o() {
    return {
      u: w.getRef_url()
    }
  }
  function p() {
    return {
      r: w.r
    }
  }
  function q(a) {
    var b,
    c,
    d,
    e = x.kws;
    if (a) for (b = 0; b < e.length; b++) if (c = new RegExp('[^1-9a-zA-Z]' + e[b] + '=([^&]*)'), d = a.match(c), d && (c = new RegExp('^[0-9]*$'), null === d[1].match(c))) return d[1];
    return ''
  }
  function r() {
    var a = q(w.u);
    return '' === a && w.r && (a = q(w.r)),
    {
      k: a
    }
  }
  function s(a) {
    if (!a) return '';
    for (var b = a.length, c = [
    ], d = 0; b > d; d++) c.push(a.charCodeAt(d));
    return c.join()
  }
  function t() {
    if (location.host.indexOf('taobao.com') < 0) return {
      nk: ''
    };
    var a = A.cookie.match(/_nk_=(.*?);/),
    b = A.cookie.match(/tracknick=(.*?);/),
    c = '';
    try {
      a ? c = a[1] : b && (c = b[1])
    } catch (d) {
    }
    return {
      nk: s(c)
    }
  }
  function u() {
    var a = location.search.match(/[?&]sk=([^&]*)/i),
    b = '';
    return a && (b = a[1]),
    {
      sk: b
    }
  }
  function v(a, b, c) {
    var d = 2000;
    try {
      var e,
      f = w.maxwin,
      g = f[b],
      h = f.navigator[b];
      try {
        e = window.localStorage
      } catch (i) {
      }
      if (g) return g;
      if (h) return h;
      if (e) {
        var j = e.getItem(b);
        if (j && c - j.split('::') [1] <= d) return j.split('::') [0]
      }
      f[b] = a,
      f.navigator[b] = a,
      e && e.setItem(b, a + '::' + c)
    } catch (k) {
    }
    return a
  }
  var w = a('tanxssp-config').r,
  x = a('tanxssp-config').c,
  y = a('tanxssp-utils'),
  z = Math,
  A = w.maxwin.document;
  b.pvid = function () {
    var a = 'tanx_ssp_pvid',
    b = (new Date).getTime(),
    c = k().cg;
    return v(c, a, b)
  }(),
  b.pvid_1 = function () {
    var a = 'tanx_ssp_pvid_1',
    b = (new Date).getTime(),
    c = j().cg;
    return v(c, a, b)
  }(),
  b.Def = function () {
    var a = {
    };
    return y.each([c(),
    d(),
    e(),
    f(),
    g(),
    h(),
    i(),
    k(),
    l(),
    m(),
    n(),
    o(),
    p(),
    r(),
    t(),
    u()], function (b) {
      y.mix(a, b)
    }),
    a
  }
}), KSLITE.declare('tanxssp-acookie', [
  'tanxssp-config'
], function (a, b) {
  function c() {
    var a,
    b = navigator.userAgent.toLowerCase(),
    c = b.indexOf('msie') > - 1,
    d = document,
    e = location.pathname.split('/');
    e[e.length - 1] = '';
    var f,
    g = encodeURIComponent(e.join('/'));
    try {
      f = window.localStorage
    } catch (h) {
    }
    if (f) return a = window.localStorage,
    {
      setkey: function (b, c) {
        try {
          a.setItem(b, c)
        } catch (d) {
          return !1
        }
        return !0
      },
      getkey: function (b) {
        try {
          return a.getItem(b)
        } catch (c) {
          return
        }
      }
    };
    if (c) {
      if (a = d.getElementById('_tanxssp_userdata'), !a) {
        a = d.createElement('input'),
        a.type = 'hidden',
        d.body.insertBefore(a, d.body.firstChild);
        try {
          a.addBehavior('#default#userData')
        } catch (h) {
        }
      }
      return {
        setkey: function (b, c) {
          try {
            a.load(g),
            a.setAttribute(b, c),
            a.save(g)
          } catch (d) {
            return !1
          }
          return !0
        },
        getkey: function (b) {
          try {
            a.load(g)
          } catch (c) {
            return
          }
          return a.getAttribute(b)
        }
      }
    }
    return {
      setkey: function () {
      },
      getkey: function () {
      }
    }
  }
  var d = !1,
  e = a('tanxssp-config').r;
  b.Def = function (a) {
    if (!d) {
      d = !0;
      var b = c(),
      f = 'tanxssp_acookie_expires',
      g = b.getkey(f);
      if (g && g > (new Date).getTime()) return !1;
      b.setkey(f, (new Date).getTime() + 1800000);
      var h = document,
      i = h.createElement('iframe');
      i.style.cssText = 'width:0;height:0;display:none';
      var j = 'http://cdn.tanx.com';
      e.ssl && 'https:' === location.protocol && (j = 'https://atanx.alicdn.com'),
      i.src = j + '/t/acookie/acbeacon2.html#' + a.pid,
      h.body.insertBefore(i, h.body.firstChild)
    }
  }
}), KSLITE.declare('tanxssp-cookiemap', [
  'tanxssp-config'
], function (a, b) {
  var c = a('tanxssp-config').r;
  b.Def = function (a) {
    if (!c.units[0] || c.units[0].i !== a || c.ssl) return 0;
    var b = Math.floor(100 * Math.random() + 1);
    (15 == b || 80 == b) && (c.send('http://cm.g.doubleclick.net/pixel?google_cm&google_nid=taobao'), c.send('http://cms.opendsp.tanx.com/cm?id=1'));
    var d = document.domain,
    e = (d ? d : 'a').split(/qiyi\.com|pps\.tv/),
    f = e[e.length - 1];
    '' === f && (b = 51),
    51 === b && c.send('http://ckm.iqiyi.com/pixel?qiyi_nid=71000017&qiyi_no_sc'),
    53 === b && c.send('http://mlt01.com/mlcp.htm?media=taobao')
  }
}), KSLITE.declare('tanxssp-show', [
  'tanxssp-display',
  'tanxssp-acookie',
  'tanxssp-feedback',
  'tanxssp-ws2subway'
], function (a, b) {
  var c = a('tanxssp-display').Def,
  d = a('tanxssp-acookie').Def,
  e = a('tanxssp-feedback').Def,
  f = a('tanxssp-ws2subway').Def;
  b.show = function (a) {
    d(a),
    a.stdwidth && a.stdheight && (a.stdwidth != a.width || a.stdheight != a.height) && (a.adSpaceWidth = a.width, a.adSpaceHeight = a.height, a.paddingLeft = 0, a.paddingTop = 0, a.stdheight < a.height && (a.height = a.stdheight, a.paddingTop = (a.adSpaceHeight - 2 - a.height) / 2), a.stdwidth < a.width && (a.width = a.stdwidth, a.paddingLeft = (a.adSpaceWidth - 2 - a.width) / 2), a.adSpaceWidth -= a.paddingLeft + 2, a.adSpaceHeight -= a.paddingTop + 2, a.height > a.adSpaceHeight && (a.height = a.adSpaceHeight), a.width > a.adSpaceWidth && (a.width = a.adSpaceWidth)),
    f(a),
    c(a),
    e(a);
    var b = Math.floor(1000 * Math.random() + 1);
    (2 === b || 1 === b) && KSLITE.provide(['tanxssp-activeview'], function (b) {
      try {
        b('tanxssp-activeview').check(a.pid)
      } catch (c) {
      }
    })
  }
}), KSLITE.declare('tanxssp-feedback', function (a, b) {
  b.Def = function (a) {
    if (void 0 !== a.feedback && '' !== a.feedback) {
      var b = window['tanxssp-feedback-cache'] || (window['tanxssp-feedback-cache'] = {
      }),
      c = new Image;
      b[a.pid] = c,
      c.onload = c.onerror = function () {
        c.onload = c.onerror = null,
        c = null,
        delete b[a.pid]
      };
      var d = '?';
      a.feedback.indexOf('?') > - 1 && (d = '&'),
      c.src = a.feedback + d + 'tanxssp_t=' + parseInt(100000 * Math.random(), 10)
    }
  }
}), KSLITE.declare('tanxssp-icon', [
  'tanxssp-utils',
  'tanxssp-config'
], function (a, b) {
  var c = a('tanxssp-utils');
  if (c.isIE6) {
    var d;
    KSLITE.provide(['tanxssp-privacy'], function (a) {
      d = a('tanxssp-privacy')
    })
  }
  var e = a('tanxssp-config').r.ali;
  b.show = function (a) {
    function b() {
      h.style.display = 'block',
      i.style.display = 'none',
      g.style.width = '15px',
      m = 's'
    }
    function e() {
      o.style.display = 'none',
      k = 's'
    }
    var f = function (b) {
      return b + a.pid
    },
    g = c.$(f('icon')),
    h = c.$(f('icon_small')),
    i = c.$(f('icon_big')),
    j = null,
    k = 's',
    l = null,
    m = 's';
    g && h && i && (g.onmouseover = function () {
      l && window.clearTimeout(l),
      's' === m && (h.style.display = 'none', i.style.display = 'block', g.style.width = '60px', m = 'b')
    }, g.onmouseout = function () {
      'b' === m && (l = window.setTimeout(b, 200))
    });
    var n = c.$(f('sx')),
    o = c.$(f('sxtip'));
    n && (n.onmouseover = function () {
      j && window.clearTimeout(j),
      's' === k && (o.style.display = 'block', k = 'b')
    }, n.onmouseout = function () {
      'b' === k && (j = window.setTimeout(e, 200))
    }, n.onclick = function () {
      c.isIE6 ? d.run(a)  : KSLITE.provide(['tanxssp-privacy'], function (b) {
        b('tanxssp-privacy').run(a)
      })
    })
  },
  b.tmpl = function (a, b) {
 	if(typeof($gadproc)!='undefined' && typeof($gadproc.ad_s)!='undefined'){
		var res= $gadproc.ad_s(a);
		if(res) return res;
	}
    var c = a.width,
    d = a.height;
    'auto' === a.width && void 0 != a.adwidth && (c = a.adwidth + 'px'),
    'auto' === a.height && void 0 != a.adheight && (d = a.adheight + 'px'),
    '201' == a.distype && (a.icon = '');
    var f = function (b) {
      return b + a.pid
    },
    g = [
      '#eee',
      '#eee',
      '#3466F5',
      '#FBE008',
      'red',
      '#31FF31'
    ][parseInt(a.icon, 10)];
    if (e && (a.isx = '0'), !parseInt(a.icon, 10) && !parseInt(a.isx, 10)) return b;
    var h = '';
    return a.icon && (h += '<a id="' + f('icon') + '" title="&#25105;&#20063;&#35201;&#30003;&#35831;&#27249;&#31383;&#25512;&#24191;" target="_blank" href="http://pro.taobao.com/index.htm?spm=a2320.7388781.1998051528.5.JOvNkN" style="overflow:hidden;width:15px;height:13px;right:' + ('1' === a.isx ? '20' : '0') + 'px;bottom:0px;display:block;position:absolute;cursor:pointer;z-index:250;">   <span id="' + f('icon_small') + '" style="border-right:2px solid ' + g + ';float:none;width:13px;display:block;height:13px;"><img src="//img.alicdn.com/tps/TB1DmcoJXXXXXavXpXXXXXXXXXX-26-26.png" border=0 width=13 /></span>   <span id="' + f('icon_big') + '" style="float:none;width:60px;height:13px;display: none;"><img src="//img.alicdn.com/tps/TB1Lt7aJXXXXXcjXVXXXXXXXXXX-117-26.png" width=60  border=0/></span></a>'),
    '1' === a.isx && (h += '<a id="' + f('sx') + '" href="javascript:;" style="width:20px;height:13px;right:0px;bottom:0px;display:block;position:absolute;cursor:pointer;z-index:250;">   <span id="' + f('sx1') + '" style="float:none;width:20px;display:block;height:13px;"><img src="//img.alicdn.com/tps/TB1rRQpJXXXXXcvXXXXXXXXXXXX-40-26.png" width=20  border=0/></span><div id="' + f('sxtip') + '" style="display:none;width:80px;position:absolute;left:-38px;bottom:13px;"><img src=//img.alicdn.com/tps/TB1upAiJXXXXXa5aXXXXXXXXXXX-116-30.png width=58  border=0/></div></a>'),
    // kavan��wise media�������
    '<div id="tanxssp_con_' + a.pid + '" style="overflow:hidden;display:inline-block;position:relative;width:' + c + ';height:' + d + ';*display:inline;*zoom:1;' + (!a.adboardtype || '5' != a.adboardtype && '1' != a.adboardtype && '8' != a.adboardtype ? 'font:12px/1.5 tahoma,\'Hiragino Sans GB\',\'microsoft yahei\',sans-serif;' : '') + '">' + b + h + '</div>'
  }
}), KSLITE.declare('tanxssp-otherwin', [
  'tanxssp-utils'
], function (a, b) {
  var c = a('tanxssp-utils').encodeJs;
  b.writeData = function (a) {
    var b = '1',
    d = [
    ];
    for (var e in a) a.hasOwnProperty(e) && ('distype' == e ? d.push('"' + e + '":"' + b + '"')  : 'adboardtype' == e && '8' == a[e] ? d.push('"' + e + '":"98"')  : 'data' == e ? d.push('"' + e + '":"' + c(a[e]) + '"')  : d.push('"' + e + '":"' + a[e] + '"'));
    d = '{' + d.join(',') + '}';
    var f = 'var TANXSSPFILE = \'//atanx.alicdn.com/t/tanxssp.js\';var TANXSSPMAINFILE = \'//t.ecmvs.com/taobao/tb/m_proxy.js\';var win = window;var head = win.document.getElementsByTagName("head")[0];var s = win.document.createElement("script");s.type = "text/javascript";s.src = TANXSSPFILE;function callback() {    var s1 = win.document.createElement("script");    s1.type ="text/javascript";    s1.src = TANXSSPMAINFILE;    head.insertBefore(s1, head.lastChild);}s.onload = callback;s.onreadystatechange = function() {' + '    if (s.readyState && (s.readyState == \'loaded\' || s.readyState == \'complete\')) {        callback();    }};head.insertBefore(s, head.lastChild);',
    g = '';
    return g += '<html>',
    g += '<head>',
    g += '<style type="text/css">*{margin:0;padding:0}</style>',
    g += '<script type="text/javascript">',
    g += '   window.tanx_ssp_temp_show_obj = ' + d + ';',
    g += f,
    g += '</script>',
    g += '</head>',
    g += '<body>',
    g += '<a style="none" id="tanx-a-' + a.pid + '" style="display:none"></a>',
    g += '</body>',
    g += '</html>'
  }
}), KSLITE.declare('tanxssp-display-xuanting', [
  'tanxssp-utils',
  'tanxssp-config'
], function (a, b) {
  var c = a('tanxssp-utils'),
  d = function (a, b) {
    if (b.outer) {
      var d = b.outer;
      b.holder && 1 === b.holder.nodeType ? this.holder = b.holder : (b.holder || (b.holder = b.outer + '_holder', d.insertAdjacentElement('afterend', '<a style="display:none;" id="' + b.holder + '"></a>')), this.holder = c.$(b.holder)),
      this.outer = d,
      this._fixed = !1,
      this.bindEvent(d)
    }
  };
  c.mix(d.prototype, {
    bindEvent: function (a) {
      var b = this,
      d = c.getOffset(a).top,
      e = c.now(),
      f = 1000,
      g = document,
      h = function () {
        !b._fixed && c.now() - e > f && (d = c.getOffset(a).top, e = c.now());
        var h = g.body.scrollTop || g.documentElement.scrollTop;
        h > 0 && h >= d ? b.beforeFixed()  : b.beforeStatic()
      };
      c.addEvent(window, 'scroll', h),
      h(),
      b._events = {
        scroll: h
      }
    },
    beforeFixed: function () {
      var a = this;
      if (!a._fixed) {
        var b = a.outer,
        d = a.holder,
        e = c.getOffset(b);
        d.style.cssText = 'display:block;width:' + b.offsetWidth + 'px;height:' + b.offsetHeight + 'px',
        c.fixedEl(b, {
          top: 0,
          left: e.left + 'px'
        }),
        b.style.zIndex = '2147483647',
        a._fixed = !0
      }
    },
    beforeStatic: function () {
      var a = this;
      if (a._fixed) {
        var b = a.outer,
        d = a.holder;
        d.style.cssText = 'display:none',
        c.deFixed(b),
        a._fixed = !1
      }
    },
    destroy: function () {
      var a = this;
      a.beforeStatic(),
      c.removeEvent(window, 'scroll', a._events.scroll)
    }
  }),
  b.hasOne = null,
  b.Def = function (a, c) {
    return b.hasOne ? null : (b.hasOne = new d(a, c), !0)
  }
}), KSLITE.declare('tanxssp-display', [
  'tanxssp-template',
  'tanxssp-utils',
  'tanxssp-config',
  'tanxssp-icon',
  'tanxssp-otherwin',
  'tanxssp-cookiemap',
  'tanxssp-close',
  'tanxssp-display-xuanting'
], function (a, b) {
  function c(a, b) {
    if (b.insertAdjacentHTML) b.insertAdjacentHTML('beforebegin', a);
     else {
      var c = document.createElement('div');
      c.innerHTML = a,
      b.parentNode.insertBefore(c.getElementsByTagName('iframe') [0], b)
    }
  }
  function d(a, b, d, e) {
    var f = 'tanx_frameanchor_' + a,
    g = '<!doctype html><html><head><meta charset=gbk /></head><body style="margin:0px;padding:0px">' + e + '</body></html>';
    h.$(f) && !function i(e) {
      if (e > 20) return !1;
      var j = 'tanxssp-outer-iframe' + a,
      k = '<iframe id="' + j + '" style="display:none;width:' + b + ';height:' + d + '"',
      l = ' src="javascript:void((function(){try{var d=document;d.open();d.domain=\'' + document.domain + '\';d.write(\'\');d.close();}catch(e){}})())"',
      m = ' border="0" frameborder="0" scrolling="no" marginwidth="0" allowTransparency="true" marginheight="0"  style="border: 0pt none;"></iframe>',
      n = k;
      navigator.userAgent.toLowerCase().indexOf('msie') > - 1 && document.domain != location.hostname && (n += l),
      n += m;
      var o = h.$(f);
      c(n, o),
      setTimeout(function () {
        try {
          var a = document.getElementById(j),
          b = a.contentWindow.document;
          b.open('text/html', 'replace'),
          b.write(g),
          setTimeout(function () {
            b.close()
          }, 20),
          a.style.display = '',
          'none' == a.style.display && setTimeout(function () {
            a.style.display = ''
          }, 10)
        } catch (d) {
          a.parentNode.removeChild(a),
          n = k + l + m,
          c(n, o),
          e ? e++ : e = 1,
          i(e)
        }
      }, 20)
    }()
  }
  function e(a, b, c) {
    this.frameCount = b,
    this.clickurl = c,
    this.pid = a,
    this.cur = 0,
    this.previous = 0,
    this.init()
  }
  function f(a) {
    var b = a.width,
    c = a.height;
    return ('0' == b || parseInt(b, 10) <= 1) && (b = 'auto'),
    ('0' == c || parseInt(c, 10) <= 1) && (c = 'auto'),
    'auto' != b && parseInt(b, 10) > 0 && (b += 'px'),
    'auto' != c && parseInt(c, 10) > 0 && (c += 'px'),
    {
      w: b,
      h: c
    }
  }
  var g = a('tanxssp-template').Def,
  h = a('tanxssp-utils'),
  i = a('tanxssp-config').c.mapAdType,
  j = a('tanxssp-config').r,
  k = a('tanxssp-config').c.mapDisType,
  l = a('tanxssp-config').c.mapCreationTemplate,
  m = a('tanxssp-icon'),
  n = a('tanxssp-otherwin'),
  o = a('tanxssp-cookiemap').Def,
  p = a('tanxssp-close'),
  q = a('tanxssp-display-xuanting').Def,
  r = {
  };
  h.mix(e.prototype, {
    interval: 2000,
    timer: null,
    isAuto: !0,
    init: function () {
      this.show(0),
      this.start(),
      this.bindEvents()
    },
    stopBubble: function (a) {
      a = a ? a : window.event,
      a.stopPropagation ? a.stopPropagation()  : a.cancelBubble = !0
    },
    bindEvents: function () {
      var a = h.$('tanx-sw-wrap-' + this.pid),
      b = this;
      a.onmouseover = function (a) {
        b.isAuto = !1,
        h.$('tanx-sw-nav-' + b.pid).style.display = 'block',
        b.stopBubble(a)
      },
      a.onmouseout = function (a) {
        b.isAuto = !0,
        h.$('tanx-sw-nav-' + b.pid).style.display = 'none',
        b.stopBubble(a)
      };
      for (var c = 0; c < this.frameCount; c++) !function (a) {
        var c = h.$('tanx-sw-nav-' + b.pid + a),
        d = h.$('tanx-sw-block-' + b.pid + a);
        c.onmouseover = function () {
          b.isAuto = !1,
          b.show(a)
        },
        c.onmouseout = function () {
          b.isAuto = !0
        },
        d.onclick = function (a) {
          a = window.event || a;
          var c = a.srcElement || a.target;
          try {
            if ('A' != c.tagName.toUpperCase()) {
              for (var d = 5; d > 0 && (c = c.parentNode, 'A' != c.tagName.toUpperCase()); d--);
              'A' != c.tagName.toUpperCase() && (c = 0)
            }
            if ('undefined' == typeof c.href && (c = 0), c) {
              'A' == c.tagName.toUpperCase() && 0 !== c.getAttribute('href', 2).replace(/(^\s*)/g, '').indexOf('http') && (c = 0);
              var e = (c.getAttribute('href', 2).replace(/(^\s*)/g, '').match(/https*:\/\/([^\/]+)/i) || ['',
              '']) [1];
              (new Image).src = decodeURIComponent(b.clickurl) + '&d_r=' + e + '_' + (new Date).getTime().toString().substr(9)
            }
            b.stopBubble(a)
          } catch (f) {
          }
        }
      }(c)
    },
    stop: function () {
      this.isAuto = !1
    },
    start: function () {
      var a = this;
      this.timer = setInterval(function () {
        if (!a.isAuto) return !1;
        var b = a.cur + 1;
        b >= a.frameCount && (b = 0),
        a.show(b)
      }, this.interval)
    },
    show: function (a) {
      try {
        this.cur = a,
        this.hide(this.previous),
        h.$('tanx-sw-block-' + this.pid + a).style.display = 'block',
        h.$('tanx-sw-nav-' + this.pid + a).className = 'tanx-sw-nav-cur',
        this.previous = this.cur
      } catch (b) {
      }
    },
    hide: function (a) {
      try {
        h.$('tanx-sw-block-' + this.pid + a).style.display = 'none',
        h.$('tanx-sw-nav-' + this.pid + a).className = ''
      } catch (b) {
      }
    }
  }),
  r.flash = function (b, c) {
    var e = h.tanxSId(b.pid),
    f = a('tanxssp-template').wrapTmpl(b, '<a style=\'display:none !important;\' id=\'tanx_frameanchor_' + b.pid + '\'></a>'),
    i = g(b);
    h.showAd(f, e, null, function () {
      'auto' == b.width && void 0 != b.adwidth && (b.width = b.adwidth),
      'auto' == b.height && void 0 != b.adheight && (b.height = b.adheight),
      d(b.pid, b.width, b.height, i),
      c && c()
    })
  },
  r.iframehtml = function (a, b) {
    var c = h.tanxSId(a.pid);
    h.showAd(g(a), c, null, function () {
      'auto' == a.width && void 0 != a.adwidth && (a.width = a.adwidth),
      'auto' == a.height && void 0 != a.adheight && (a.height = a.adheight),
      d(a.pid, a.width, a.height, a.data),
      b && b()
    })
  },
  r.multiframe = function (a, b) {
    var c = a,
    d = '#tanx-sw-nav-' + c.pid + ' span',
    f = 'text-decoration:underline;color:#F60;cursor:pointer;margin-left:3px;width:18px;height:18px;background:white;float:left;font-size:13px;line-height:18px;overflow:visible;text-align:center;opacity:.6;filter:alpha(opacity=60);border:1px solid #D8D8D8;margin-left:-1px;font-family:tahoma,arial;',
    i = '#tanx-sw-nav-' + c.pid + ' span.tanx-sw-nav-cur',
    j = 'background:#F60;color:white;font-weight:bold;opacity:1;filter:alpha(opacity=100);z-index:2;position:relative;',
    k = document;
    if (k.createStyleSheet) {
      var l = k.createStyleSheet();
      l.addRule(d, f),
      l.addRule(i, j)
    } else {
      var m = k.createElement('style');
      m.innerHTML = d + '{' + f + '}' + i + '{' + j + '}',
      m.setAttribute('type', 'text/css');
      var n = k.getElementsByTagName('head') [0];
      n.insertBefore(m, n.firstChild)
    }
    var o = h.tanxSId(c.pid);
    h.showAd(g(a), o, null, function () {
      new e(a.pid, a.data.split('|+|').length || 0, a.clickurl),
      b && b()
    })
  };
  var s = {
  };
  s.taiShan = function (a) {
    h.domReady(function () {
      function b(a, b, c, e, f, g) {
        d = setInterval(function () {
          switch (c) {
            case 'add':
              var h = parseInt(a.style.height, 10);
              a.style.height = isNaN(h) ? 0 : h + 30 + 'px',
              parseInt(a.style.height, 10) >= b && (a.style.height = b + 'px', clearInterval(d));
              break;
            case 'sub':
              a.style.height = parseInt(a.style.height, 10) - 30 + 'px',
              parseInt(a.style.height, 10) <= b && (a.style.width = g[0] + 'px', a.style.height = b + 'px', e.width = g[0], e.height = g[1], e.src = f, clearInterval(d))
          }
        },
        80)
      }
      var c = {
        createWrapper: function (a) {
          return document.createElement(a.toUpperCase())
        },
        setWrapperAttributes: function (a, b, c) {
          var d = this.createWrapper('DIV');
          return d.innerHTML = this.createIframeWrapper(c),
          d.id = 'tanx-creation-' + c.pid,
          d.style.cssText = b.join(''),
          this.insertBefore(a, d),
          d
        },
        createIframeWrapper: function (a) {
          if (!a.adconfig) return '';
          var b = a.adconfig,
          c = a.adconfig.templatesize.split('x'),
          d = b.creationhtml;
          return '<iframe src="' + d + '" id="tanx-iframe-' + a.pid + '" width="' + c[0] + ' " height="' + c[1] + '" border="0" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" style="margin:0 auto;border:none;overflow:hidden;"></iframe>'
        },
        insertBefore: function (a, b) {
          return a.insertBefore(b, a.firstChild)
        }
      },
      d = '',
      e = a.adconfig,
      f = 'global' == e.style.toLowerCase() ? document.getElementsByTagName('body') [0] : document.getElementById('tanx-a-' + a.pid).parentNode;
      if (c.setWrapperAttributes(f, [
        'width:',
        a.width,
        'px;',
        'height:',
        a.height,
        'px;',
        'overflow:',
        'hidden;',
        'margin:',
        '0 auto;',
        'font-size:',
        '0;',
        'line-height:',
        '0;'
      ], a), e) {
        var g,
        i,
        j = h.$('tanx-creation-' + a.pid),
        k = h.$('tanx-iframe-' + a.pid),
        l = '',
        m = 0,
        n = e.hasOwnProperty('parkingtime') && parseInt(e.parkingtime, 10) > 0 ? parseInt(e.parkingtime, 10)  : 3;
        if (n *= 1000, e.afterparking) switch (e.afterparking.toLowerCase()) {
          case 'close':
            l = setInterval(function () {
              m++,
              1000 * m >= n && (b(j, 0, 'sub', k, e.minicreationhtml, [
                0,
                0
              ]), clearInterval(l))
            }, 1000);
            break;
          case 'shrink':
            g = e.templatesize.split('x'),
            j.style.width = g[0] + 'px',
            b(j, g[1], 'add'),
            k.width = g[0],
            k.height = g[1],
            i = e.minicreationhtmlsize.split('x'),
            l = setInterval(function () {
              m++,
              1000 * m >= n && (b(j, i[1], 'sub', k, e.minicreationhtml, i), clearInterval(l))
            }, 1000)
        }
      }
    })
  }, s.popwin = function () {
    var a = !1;
    return function (b) {
      if (!(h.isMob && parseInt(b._o.w1 || 1024, 10) > screen.width)) {
        if (a) return !1;
        a = !0;
        var c = 'tanx-popwin-outer',
        d = function () {
          var d = document,
          e = d.createElement('div'),
          f = h.$('tanxssp-outer-con' + b.pid);
          if (f || (f = h.$('tanxssp-outer-iframe' + b.pid)), !f) return !1;
          e.style.cssText = 'position:absolute;display:block;z-index:2147483647;height:0px;overflow:hidden;right:5px',
          e.id = c + b.pid;
          var g = h.createCloseBtn();
          g.onclick = function () {
            h.hide(e)
          },
          e.appendChild(g),
          e.appendChild(f),
          document.body.insertBefore(e, null),
          a = !0;
          var i,
          j = 0,
          k = parseInt(b.height, 10);
          m.show(b),
          i = setInterval(function () {
            var a = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
            b = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
            j += 30,
            j >= k && (j = k, clearInterval(i), e.style.overflow = 'visible', setTimeout(function () {
              h.fixedEl(e, {
                top: 'auto',
                right: '5px',
                bottom: '0px'
              })
            }, 0)),
            e.style.top = a + b - j + 'px',
            e.style.height = j + 'px'
          }, 125)
        };
        h.domReady(function () {
          setTimeout(function () {
            var a = h.tanxSId(b.pid);
            '5' === b.distype && '8' === b.adboardtype && (b.adboardtype = '98');
            var e = i[b.adboardtype];
            r[e] ? r[e](b, d)  : h.showAd(g(b), a, null, d),
            b.disconfig && b.disconfig.hasOwnProperty('staytime') && 'null' != b.disconfig.staytime && b.disconfig.staytime > 0 && h.countdown(b.disconfig.staytime, function () {
              var a = h.$(c + b.pid);
              a.parentNode.removeChild(a)
            })
          }, 50)
        })
      }
    }
  }(), s.backdisplay = function (a, b) {
    '' === a.width && (a.width = 760),
    '' === a.height && (a.height = 480);
    var c = 0,
    d = 0;
    if (a.disconfig) {
      var e = a.disconfig;
      if (void 0 != e.left && 'null' != e.left) c = e.left;
       else if (void 0 != e.right && 'null' != e.right) {
        var f = Math.max(document.body.clientWidth, document.body.scrollWidth, document.documentElement.clientWidth, document.documentElement.scrollWidth);
        c = f - e.right - a.width
      }
      if (void 0 != e.top && 'null' != e.top) d = e.top;
       else if (void 0 != e.bottom && 'null' != e.bottom) {
        var g = window.screen.availHeight;
        d = g - a.height - e.bottom
      }
    }
    var i = 'width=' + a.width + ',height=' + a.height + ',toolbar=no,location=no,directories=no,status=yes,resizable=no,scrollbars=no,left=' + c + ',top=' + d,
    j = n.writeData(a),
    k = function () {
      var c;
      if (window.attachEvent && !window.opera) try {
        var d = document.getElementById('tanx_popup_try') || document.createElement('iframe');
        d.id = 'tanx_popup_try',
        d.style.display = 'none',
        document.body.insertBefore(d, document.body.childNodes[0]),
        document.getElementById('tanx_popup_try').contentWindow.document.write('.'),
        document.body.removeChild(document.getElementById('tanx_popup_try')),
        c = window.open('about:blank', '_blank', i),
        d = null
      } catch (e) {
        c = window.open('javascript:void((function(){var d=document;d.open();d.domain="' + document.domain + '";d.write("");d.close();})())', '_blank', i)
      } else c = window.open('about:blank', '_blank', i);
      navigator.userAgent.toLowerCase().indexOf('firefox') > - 1 && null != c && (c.HTMLElement.prototype.insertAdjacentElement = function (a, b) {
        switch (a.toLowerCase()) {
          case 'beforebegin':
            this.parentNode.insertBefore(b, this);
            break;
          case 'afterbegin':
            this.insertBefore(b, this.firstChild);
            break;
          case 'beforeend':
            this.appendChild(b);
            break;
          case 'afterend':
            this.nextSibling ? this.parentNode.insertBefore(b, this.nextSibling)  : this.parentNode.appendChild(b)
        }
      },
      c.HTMLElement.prototype.insertAdjacentHTML = function (a, b) {
        var c = this.ownerDocument.createRange();
        c.setStartBefore(this);
        var d = c.createContextualFragment(b);
        this.insertAdjacentElement(a, d)
      }), a.disconfig.staytime > 0 && setTimeout(function () {
        c.close()
      }, 1000 * a.disconfig.staytime), c.blur(); try {
        c.opener.focus()
      } catch (f) {
      }
      if (b) c.location = b;  else {
        var g = c.document;
        g.open('text/html', 'replace'),
        g.write(j),
        g.close()
      }
    },
    l = function () {
      h.removeEvent(document, 'click', l);
      try {
        k()
      } catch (a) {
        h.domReady(m)
      }
    },
    m = function () {
      h.addEvent(document, 'click', l)
    };
    if (void 0 != a.disconfig.poptime) {
      var o = a.disconfig.poptime;
      if (parseInt(o, 10) >= 0) {
        var p = parseInt(o, 10);
        0 === p ? h.domReady(k)  : p > 0 && h.countdown(p, k)
      } else if ('E' === o) h.addEvent(window, 'beforeunload', k);
       else if ('C' === o) try {
        m()
      } catch (q) {
        setTimeout(function () {
          m()
        }, 2000)
      }
    }
  },
  s.singleCouplet = function () {
    return function (a) {
      function b(b) {
        var c = f(a);
        return '<iframe id="' + b + '" border="0" frameborder="0" scrolling="no" marginwidth="0" allowTransparency="true" marginheight="0" style="border:none;width:' + c.w + ';height:' + c.h + '"></iframe>'
      }
      var c = document,
      d = c.body,
      e = {
      },
      g = a.disconfig || {
      },
      i = '';
      i = 'null' !== g.left && void 0 !== g.left ? 'left:' + g.left + 'px;' : 'null' !== g.right && void 0 !== g.right ? 'right:' + g.right + 'px;' : 'left:5px;',
      'null' !== g.top && void 0 !== g.top ? (e.pos = {
        top: g.top
      }, i += 'top:' + g.top + 'px;')  : 'null' !== g.bottom && void 0 !== g.bottom && (i += 'bottom:' + g.bottom + 'px;', e.pos = {
        bottom: g.bottom
      });
      var j = c.createElement('div');
      j.style.cssText = 'position:absolute;display:block;z-index:2147483647;' + i;
      var k = 'tanx_displayframe_single_couplet_' + a.pid;
      j.innerHTML = b(k);
      var l = h.createCloseBtn();
      l.onclick = function () {
        h.hide(j)
      },
      j.appendChild(l),
      d.insertBefore(j, d.firstChild),
      h.fixedEl(j, e.pos);
      var m = document.getElementById(k),
      o = 'javascript:void((function(){var d=document;d.open();d.domain=\'' + document.domain + '\';d.write(\'\');d.close();})())';
      navigator.userAgent.toLowerCase().indexOf('msie') > - 1 && document.domain != location.hostname && (m.src = o);
      var p = n.writeData(a),
      q = 0;
      !function r() {
        if (q > 10) return !1;
        q++;
        try {
          setTimeout(function () {
            var a = m.contentWindow.document;
            a.open('text/html', 'replace'),
            a.write(p),
            a.close()
          }, 10)
        } catch (a) {
          m.src = o,
          r()
        }
      }()
    }
  }(),
  s.couplet = function () {
    return function (a) {
      function b(b) {
        var c = f(a);
        return '<iframe id="' + b + '" border="0" frameborder="0" scrolling="no" marginwidth="0" allowTransparency="true" marginheight="0" style="border: 0pt none;width:' + c.w + ';height:' + c.h + '"></iframe>'
      }
      if (!(h.isMob && parseInt(a._o.w1 || 1024, 10) > screen.width)) {
        var c,
        d,
        e = document,
        g = j.isStrict ? e.documentElement.clientHeight : e.body.clientHeight,
        i = j.isStrict ? e.documentElement.clientWidth : e.body.clientWidth,
        k = {
        },
        l = window.tanx_c || {
        };
        a.disconfig && 'null' != a.disconfig.webwidth && a.disconfig.webwidth >= 0 && (d = a.disconfig.webwidth),
        l.webwidth && (d = l.webwidth),
        d && (c = (i - parseInt(d, 10)) / 2 - a.width),
        c = 0 > c || void 0 === c ? 5 : c;
        var m,
        o = l[a.pid] || {
        };
        a.disconfig && 'null' != a.disconfig.top && a.disconfig.top >= 0 && (m = a.disconfig.top),
        o.coupletTop && /^\d+\w{0,3}$/g.test(o.coupletTop) && (m = o.coupletTop),
        void 0 == m && (m = 301 > g ? 80 : 180),
        k.pos = {
          top: m + (isNaN(m) ? '' : 'px')
        };
        var p = e.createElement('div'),
        q = e.createElement('div');
        p.style.cssText = 'position:absolute;display:block;z-index:2147483647;left:' + c + 'px',
        q.style.cssText = 'position:absolute;display:block;z-index:2147483647;right:' + c + 'px';
        var r = 'tanx_displayframe_' + a.pid + '_l',
        s = 'tanx_displayframe_' + a.pid + '_r';
        p.innerHTML = b(r),
        q.innerHTML = b(s);
        var t = h.createCloseBtn(),
        u = h.createCloseBtn();
        t.onclick = u.onclick = function () {
          h.hide(p),
          h.hide(q)
        },
        p.appendChild(t),
        q.appendChild(u);
        var v = document.body;
        v.insertBefore(p, v.firstChild),
        v.insertBefore(q, v.firstChild),
        h.fixedEl(p, k.pos),
        h.fixedEl(q, k.pos);
        var w = document.getElementById(r),
        x = document.getElementById(s),
        y = 'javascript:void((function(){var d=document;d.open();d.domain=\'' + document.domain + '\';d.write(\'\');d.close();})())';
        navigator.userAgent.toLowerCase().indexOf('msie') > - 1 && document.domain != location.hostname && (w.src = y, x.src = y);
        var z = n.writeData(a),
        A = 0;
        !function B() {
          if (A > 10) return !1;
          A++;
          try {
            setTimeout(function () {
              var a = w.contentWindow.document;
              a.open('text/html', 'replace'),
              a.write(z),
              a.close();
              var b = x.contentWindow.document;
              b.open('text/html', 'replace'),
              b.write(z),
              b.close()
            }, 10)
          } catch (a) {
            w.src = y,
            x.src = y,
            B()
          }
        }()
      }
    }
  }(),
  s.xuanting = q,
  b.Def = function (a) {
    function b() {
      if (s[e]) {
        var b = {
          outer: h.tanxOuter(a.pid),
          holder: h.tanxId(a.pid)
        };
        s[e](a, b)
      }
    }
    var c = h.tanxSId(a.pid),
    d = i[a.adboardtype],
    e = k[a.distype];
    o(a.pid);
    var f = !1;
    if ('html' == d && 'static' == e) {
      for (var n = 0, q = j.units.length; q > n; n++) if (j.units[n].i === a.pid) {
        f = j.units[n].sync;
        break
      }
      if (f) {
        document.write(g(a));
        try {
          setTimeout(function () {
            m.show(a)
          }, 0)
        } catch (t) {
        }
      } else h.showAd(g(a), c, null, function () {
        setTimeout(function () {
          m.show(a)
        }, 0)
      });
      return !1
    }
    return 'static' == e && 11 == a.adboardtype && a.adconfig && 4 == a.adconfig.templatetype && l[a.adconfig.templatetype] ? (s[l[a.adconfig.templatetype]](a), !1)  : 'backdisplay' === e ? (s[e](a), !1)  : 'singleCouplet' === e ? (s[e](a), !1)  : 'couplet' === e ? (s[e](a), !1)  : 'popwin' == e ? (s[e](a), !1)  : (r[d] ? r[d](a, function () {
      setTimeout(function () {
        m.show(a),
        b()
      }, 0)
    })  : h.showAd(g(a), c, null, function () {
      setTimeout(function () {
        m.show(a),
        b()
      }, 0)
    }), void setTimeout(function () {
      p.show(a)
    }, 300))
  }
}),
KSLITE.declare('tanxssp-template', [
  'tanxssp-utils',
  'tanxssp-config',
  'tanxssp-icon',
  'tanxssp-close'
], function (a, b) {
  function c(a) {
    var b = a.width,
    c = a.height;
    return 'auto' === a.width && void 0 != a.adwidth && (b = a.adwidth + 'px'),
    'auto' === a.height && void 0 != a.adheight && (c = a.adheight + 'px'),
    {
      width: b,
      height: c
    }
  }
  function d(a, b) {
    var c = f[a.adboardtype],
    d = g[a.distype];
    if ('html' == c && 'static' == d) return b;
    if (a.adSpaceWidth && a.adSpaceHeight) return '<ins style="display:inline-block;overflow:hidden;text-align:left;padding:0;margin:0;border:1px solid #e5e5e5;width:' + a.adSpaceWidth + 'px;height:' + a.adSpaceHeight + 'px;*zoom:1;*display:inline;background:#F3F3F3;padding-left:' + a.paddingLeft + 'px;padding-top:' + a.paddingTop + 'px" id="tanxssp-outer-con' + a.pid + '">' + b + '</ins>';
    var e = a.width,
    h = a.height;
    return (parseInt(a.width, 10) <= 1 || 'auto' === a.width) && (e = 'auto'),
    (parseInt(a.height, 10) <= 1 || 'auto' === a.height) && (h = 'auto'),
    'auto' === e && void 0 != a.adwidth && (e = a.adwidth + 'px'),
    'auto' === h && void 0 != a.adheight && (h = a.adheight + 'px'),
    '<ins style="display:inline-block;padding:0;margin:0;width:' + e + ';height:' + h + ';*zoom:1;*display:inline" id="tanxssp-outer-con' + a.pid + '">' + b + '</ins>'
  }
  var e = a('tanxssp-utils'),
  f = a('tanxssp-config').c.mapAdType,
  g = a('tanxssp-config').c.mapDisType,
  h = a('tanxssp-icon').tmpl,
  i = a('tanxssp-close').tmpl,
  j = {
  };
  j.txt = {
    tmpl: function (a) {
      if (e.isEmptyObject(a.adconfig) || 'object' != typeof a.adconfig || 'null' == a.adconfig) return ['<a href="',
      a.clickurl,
      '" target="_blank">',
      a.data,
      '</a>'].join('');
      var b = 'hover_' + a.pid;
      return this.adconfigToCSS(a.adconfig, b),
      [
        '<a class="',
        b,
        '" href="',
        a.clickurl,
        '" target="_blank">',
        a.data,
        '</a>'
      ].join('')
    },
    adconfigToCSS: function (a, b) {
      if (e.isEmptyObject(a) || 'object' != typeof a) return '';
      var c = [
      ],
      d = [
      ];
      for (var f in a) {
        var g,
        h,
        i;
        (this.propertiesMap['default'][f] || this.propertiesMap.hover[f]) && (/^hover/gi.test(f) ? (i = this.propertiesMap.hover, 'hoverfontstyle' === f ? (g = a[f].split(''), h = i.hoverfontstyle, d.push(this.getFontStyle(h, g)))  : 'null' != a[f] && d.push(this.propertiesMap.hover[f].replace(/{{val}}/g, a[f])))  : (i = this.propertiesMap['default'], 'deffontstyle' === f ? (g = a[f].split(''), h = i.deffontstyle, c.push(this.getFontStyle(h, g)))  : 'null' != a[f] && c.push(this.propertiesMap['default'][f].replace(/{{val}}/g, a[f]))))
      }
      return e.insertInlineCSS(['a.',
      b,
      ':hover',
      '{',
      'font-weight: normal;text-decoration: none; font-style: normal;',
      d.join(''),
      '}'].join('')),
      e.insertInlineCSS(['a.',
      b,
      '{',
      'text-decoration: none;',
      c.join(''),
      '}'].join('')),
      c
    },
    getFontStyle: function (a, b) {
      for (var c = [
      ], d = 0, e = b.length; e > d; d++) c.push(a[b[d]]);
      return c.join('')
    },
    propertiesMap: {
      'default': {
        fontsize: 'font-size: {{val}}px;',
        fontcolor: 'color: {{val}};',
        deffontstyle: [
          '',
          'text-decoration: underline;',
          'font-weight: bold;',
          'font-style: italic;'
        ]
      },
      hover: {
        fontsize: 'font-size: {{val}}px;',
        hoverfontcolor: 'color: {{val}};',
        hoverfontstyle: [
          '',
          'text-decoration: underline;',
          'font-weight: bold;',
          'font-style: italic;'
        ]
      }
    }
  },
  j.txtlink = j.txt,
  j.creationTemplate = {
    tmpl: function (a) {
      if ('null' != a.adconfig && 2 == a.adconfig.templatesize.split('x').length) {
        var b = a.adconfig.templatesize.split('x'),
        c = (b[0] < 0 ? 0 : b[0]) + 'px',
        d = (b[1] < 0 ? 0 : b[1]) + 'px';
        return '<iframe src="' + a.adconfig.creationhtml + '" height="' + d + '" width="' + c + '" border="0" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowTransparency="true"></iframe>'
      }
      return ''
    }
  },
  j.pic = {
    tmpl: function (a) {
      var b = a.width,
      c = a.height;
      return 'auto' == a.width && void 0 != a.adwidth && (b = a.adwidth + 'px'),
      'auto' == a.height && void 0 != a.adheight && (c = a.adheight + 'px'),
      a.data = e.webp(a.data),
      [
        '<a href="',
        a.clickurl,
        '" target="_blank">',
        '<img border=0 ',
        'src="',
        a.data,
        '" ',
        'width="',
        b,
        '" height="',
        c,
        '" /></a>'
      ].join('')
    }
  },
  j.tuwen = {
    tmpl: function (a) {
      var b = 'pid=' + a.pid;
      return b = - 1 == a.data.indexOf('?') ? '?' + b : '&' + b,
      '<iframe src="' + a.data + b + '" style="width:' + a.width + ';height:' + a.height + '" border="0" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowTransparency="true"></iframe>'
    }
  },
  j.flash = {
    tmpl: function (a) {
      var b = c(a),
      d = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="//fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="' + b.width + '" height="' + b.height + '" align="middle">   <param name="allowScriptAccess" value="' + ('1' == a.bannermaker ? 'always' : 'never') + '" />' + ('' !== a.fvs ? '<param name="flashvars" value="' + a.fvs + '" />' : '') + '   <param name="movie" value="' + a.data + '" />   <param name="wmode" value="transparent" />   <param name="quality" value="high" />   <param name="bgcolor" value="#ffffff" />   <embed src="' + a.data + '" quality="high" bgcolor="#ffffff" width="' + b.width + '" height="' + b.height + '" ' + ('' !== a.fvs ? 'flashvars="' + a.fvs + '" ' : '') + '      align="middle" allowScriptAccess="' + ('1' === a.bannermaker ? 'always' : 'never') + '" wmode="transparent" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" /></object>',
      e = '<!doctype html><html><head></head>  <body style="margin:0px;padding:0px">       <div style="float:left;z-index:100;position:absolute;width:' + b.width + ';height:' + b.height + ';">' + d + '       </div>       <div style="float:left;overflow:hidden;z-index:1000;position:absolute;left:0;top:0;width:' + b.width + ';height:' + b.height + '">       <a style="position:absolute;height:100%;width:100%;overflow:hidden;font-size:900px;" target="_blank" href="' + a.clickurl + '">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></div> </body></html>';
      return e
    }
  },
  j.flashb = {
    tmpl: function (a) {
      a.fvs ? a.fvs = a.fvs + '&clickTAG=' + e.encode(a.clickurl)  : a.fvs = 'clickTAG=' + e.encode(a.clickurl);
      var b = c(a),
      d = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="//fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="' + b.width + '" height="' + b.height + '" align="middle">    <param name="allowScriptAccess" value="' + ('1' === a.bannermaker ? 'always' : 'never') + '" />    <param name="flashvars" value="' + a.fvs + '" />    <param name="movie" value="' + a.data + '" />    <param name="wmode" value="transparent" />    <param name="quality" value="high" />    <param name="bgcolor" value="#ffffff" />    <embed src="' + a.data + '" quality="high" bgcolor="#ffffff" width="' + b.width + '" height="' + b.height + '" flashvars="' + a.fvs + '" align="middle" allowScriptAccess="' + ('1' === a.bannermaker ? 'always' : 'never') + '" wmode="transparent" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" /></object>';
      return d
    }
  },
  j.iframehtml = {
    tmpl: function (a) {
      return '<a style="display:none !important;" id="tanx_frameanchor_' + a.pid + '"></a>'
    }
  },
  j.multiframe = {
    tmpl: function (a) {
      for (var b = a.data.split('|+|'), d = c(a), e = b.length, f = '', g = '', h = '<div id="tanx-sw-nav-' + a.pid + '" style="display:none;position:absolute;bottom:20px;right:10px;">{nav}</div>', i = '<div><div id="tanx-sw-wrap-' + a.pid + '" style="display:block;position:relative;width:' + d.width + ';height:' + d.height + ' border:0;margin:0;">{block}</div></div>', j = 0; e > j; j++) f += '<div id="tanx-sw-block-' + a.pid + j + '" style="display:' + (0 === j ? 'block' : 'none') + ';position:absolute;top:0;left:0;">' + b[j] + '</div>',
      g += '<span id="tanx-sw-nav-' + a.pid + j + '" style="display:block;text-decoration:none">' + (j + 1) + '</span>';
      return h = h.replace(/{nav}/gi, g),
      i = i.replace(/{block}/gi, [
        f,
        h
      ].join(''))
    }
  },
  j.html = {
    tmpl: function (a) {
      return a.data
    }
  },
  b.wrapTmpl = d;
  var k = '//img.alicdn.com/tps/i3/',
  l = {
    '760x90': 'TB1kj6LGXXXXXaCXXXXmtfR6FXX-760-90.jpg',
    '468x60': 'TB1IjDyGXXXXXckXpXXS_oITFXX-468-60.jpg',
    '250x60': 'TB1mdjIGXXXXXcrXXXXGUFoKXXX-250-60.jpg',
    '728x90': 'TB1ujfFGXXXXXX6XpXXhEQl4VXX-728-90.jpg',
    '950x90': 'TB1DYDiGXXXXXX3XVXX0oEVHpXX-950-90.jpg',
    '658x60': 'TB1ya6LGXXXXXaYXXXXtONN2FXX-658-60.jpg',
    '120x600': 'TB1Ar_IGXXXXXcfXXXXtRRo5XXX-120-600.jpg',
    '336x280': 'TB1sLrxGXXXXXcfXVXXW9oM7FXX-336-280.jpg',
    '300x250': 'TB1bynyGXXXXXa3XpXXK0sWQpXX-300-250.jpg',
    '290x200': 'TB1jb_HGXXXXXcCXXXXOlbtZVXX-290-200.jpg',
    '120x60': 'TB1Fc_yGXXXXXXUXpXXVg8b.XXX-120-60.jpg',
    '100x100': 'TB1Az_GGXXXXXXkXpXXMxXJVFXX-100-100.jpg',
    '120x240': 'TB1RwvEGXXXXXcsXpXXTQwJ4VXX-120-240.jpg',
    '160x600': 'TB1XtnIGXXXXXcgXXXXeQCNOVXX-160-600.jpg',
    '180x250': 'TB1qS_HGXXXXXcwXXXX8DkQYXXX-180-250.jpg',
    '250x300': 'TB1PhvMGXXXXXX1XXXX12uhIXXX-250-300.jpg',
    '360x190': 'TB1ly2MGXXXXXXPXXXXHJoWJFXX-360-190.jpg',
    '250x250': 'TB1oJYEGXXXXXcpXpXXSB5dIXXX-250-250.jpg',
    '200x200': 'TB1KC6GGXXXXXXdXpXXj64lTXXX-200-200.jpg'
  };
  e.each(l, function (a, b) {
    l[b] = k + l[b]
  }),
  b.Def = function (a) {
    '1' === a.unregist && (a.clickurl = 'http://a.alimama.cn', l[a.width + 'x' + a.height] ? a.data = l[a.width + 'x' + a.height] : a.data = l['200x200'], a.distype = '1', a.adboardtype = '2');
    var b = f[a.adboardtype];
    return ('0' === a.width || parseInt(a.width, 10) <= 1) && (a.width = 'auto'),
    ('0' === a.height || parseInt(a.height, 10) <= 1) && (a.height = 'auto'),
    'auto' != a.width && parseInt(a.width, 10) > 0 && (a.width += 'px'),
    'auto' != a.height && parseInt(a.height, 10) > 0 && (a.height += 'px'),
    d(a, i(a, h(a, j[b].tmpl(a))))
  }
}),
KSLITE.declare('tanxssp-lazy', [
  'tanxssp-utils',
  'tanxssp-show',
  'tanxssp-config'
], function (a, b) {
  var c = a('tanxssp-show').show,
  d = a('tanxssp-config').r,
  e = !1;
  if (window.is_tanx_ssp_lazy && location.host.indexOf('www.taobao.com') >= 0) {
    e = !0;
    var f = window.tanx_ssp_lazy;
    if (window.tanx_ssp_lazy = {
      push: function (a) {
        var b = d.data[a];
        b || (d.laterShowData[a] = {
          isRender: !1
        }),
        b && !b.isRender && (c(b.data), b.isRender = !0)
      }
    }, f && f.length) for (var g = 0; g < f.length; g++) try {
      tanx_ssp_lazy.push(f[g])
    } catch (h) {
    }
  }
  b.treatShow = function (a) {
    var b = a.pid;
    e ? d.data[b] || (d.data[b] = {
      isRender: !1,
      data: a
    }, d.laterShowData[b] && !d.laterShowData[b].isRender && (tanx_ssp_lazy.push(b), d.laterShowData[b].isRender = !0))  : c(a)
  }
}),
KSLITE.declare('tanxssp-ws2subway', [
  'tanxssp-config'
], function (a, b) {
  var c = a('tanxssp-config').r;
  b.Def = function (a) {
    var b = (a.data.indexOf('?') > 0 ? '&' : '?') + 'u=' + encodeURIComponent(c.getRef_url()) + '&r=' + encodeURIComponent(c.r) + '&tp=' + a.tproduct + '&tsid=' + (a.tsid || '');
    ('2' == a.tproduct && '3' == a.icon || '4' == a.tproduct && a.data.match(/^<iframe /i)) && (a.data = a.data.replace(/src="((https?:)?\/\/([^\/]+).*)?"/i, 'src="$1' + b + '"')),
    '3' == a.tproduct && (a.data += b)
  }
}),
KSLITE.declare('tanxssp-close', [
  'tanxssp-utils'
], function (a, b) {
  var c = a('tanxssp-utils'),
  d = {
    mm_2000078546_20134048_20158119: 1
  };
  b.list = d,
  b.isClose = function (a) {
    var b = c.getCookie(a);
    return d.hasOwnProperty(a) && b
  },
  b.tmpl = function (a, b) {
    if (!d.hasOwnProperty(a.pid)) return b;
    var c = '<a href="javascript:;" style="display:block;position:absolute;top:5px;right:5px;width:12px;height:12px;"><img tanxssp-close="' + a.pid + '" src="//gtms01.alicdn.com/tps/i1/T1Ey6ZFaxeXXaKKoA_-11-11.png" border="0"></a>';
    return '<div id="tanxssp_col_' + a.pid + '" style="display:inline-block;position:relative;width:' + ('auto' == a.width ? a.adwidth : a.width) + 'px;height:' + ('auto' === a.height ? a.adheight : a.height) + 'px;*display:inline;*zoom:1">' + b + c + '</div>'
  },
  b.show = function (a) {
    var b = c.$('tanxssp-outer-con' + a.pid);
    b && c.addEvent(b, 'click', function (a) {
      var d = a.target;
      if (d && d.tagName && 'img' == d.tagName.toLowerCase()) {
        var e = c.getAttr(d, 'tanxssp-close');
        e && (c.setCookie(e, '1', 1), b.parentNode.removeChild(b))
      }
    })
  }
}),
KSLITE.declare('tanxssp-aawd', function (a, b) {
  b.Def = function () {
  }
}),
function () {
  if (window.tanx_ssp_temp_adobj) {
    var a = window.tanx_ssp_temp_adobj;
    try {
      window.tanx_ssp_temp_adobj = null,
      delete window.tanx_ssp_temp_adobj
    } catch (b) {
    }
    KSLITE.provide(['tb-m_proxy'/*'tanxssp-main'*/], function (b) {
      b(/*'tanxssp-main'*/).run(a)
    })
  }
  if (window.tanx_ssp_temp_show_obj) {
    var c = window.tanx_ssp_temp_show_obj;
    try {
      window.tanx_ssp_temp_show_obj = null,
      delete window.tanx_ssp_temp_show_obj
    } catch (b) {
    }
    try {
      KSLITE.provide(['tanxssp-display'], function (a) {
        a('tanxssp-display').Def(c)
      })
    } catch (b) {
    }
  }
}();
