let myUtil = {};

var _toString = Object.prototype.toString;

myUtil.toRawType = function (val) {
  return _toString.call(val).slice(8, -1);
};

myUtil.makeMap = function (str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
};

myUtil.removeItemFromArray = function (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      console.log(index);
      return arr.splice(index, 1);
    }
  }
};

myUtil.extendByFrom = function (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to;
};

myUtil.extendByTo = function (to, _from) {
  for (var key in to) {
    to[key] = _from[key];
  }
  return to;
};

function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key , {
    enumerable : true,
    configurable : true,
    get : function reactiveGetter() {
      return val;
    },
    set : function reactiveSetter(newVal) {
      if (newVal === val) return;
      cb(newVal);
    }
  })
};

myUtil.observer = function (value) {
  if (!value || typeof value != 'object') {
    return;
  }
  Object.keys(value).forEach((key) => {
    defineReactive(value, key, value[key]);
  })
};

/**
 * 检查浏览器是否支持svg
 * @returns {boolean}
 */
myUtil.isSupportSvg = function () {
  let SVG_NS = 'http://www.w3.org/2000/svg';
  return !!document.createElementNS && !!document.createElementNS(SVG_NS,'svg').createSVGRect;
};

/**
 * 检测浏览器是否支持canvas
 * @returns {boolean}
 */
myUtil.isSupportCanvas = function () {
  if (document.createElement('canvas').getContext) {
    return true;
  }
  return false;
};


/**
 * 检测是否是微信浏览器
 * @returns {boolean}
 */
myUtil.isWeiXinClient = function () {
  let ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  }
  return false;
};

myUtil.browser = {
  versions : function () {
    let u = navigator.userAgent;
    return {
      trident: u.indexOf('Trident') > -1, //IE内核
      presto: u.indexOf('Presto') > -1, //opera内核
      webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      gecko: u.indexOf('Firefox') > -1, //火狐内核Gecko
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android
      iPhone: u.indexOf('iPhone') > -1 , //iPhone
      iPad: u.indexOf('iPad') > -1, //iPad
      webApp: u.indexOf('Safari') > -1 //Safari
    };
  }
}

myUtil.isMobileOrPC = function () {
  console.log(this.browser.versions.mobile);
  if (this.browser.versions.mobile || this.browser.versions.ios ||
    this.browser.versions.android || this.browser.versions.iPhone ||
    this.browser.versions.iPad) {
    console.log('移动端');
  } else {
    console.log('PC');
  }
}

myUtil.getInternet = function () {
  console.log(navigator.userAgent)
  if(navigator.userAgent.indexOf("MSIE")>0) {
    return "MSIE";       //IE浏览器
  }

  if(navigator.userAgent.indexOf("Firefox")>0){
    return "Firefox";     //Firefox浏览器
  }

  if(navigator.userAgent.indexOf("Safari")>0) {
    return "Safari";      //Safan浏览器
  }

  if(navigator.userAgent.indexOf("Camino")>0){
    return "Camino";   //Camino浏览器
  }
  if(navigator.userAgent.indexOf("Gecko/")>0){
    return "Gecko";    //Gecko浏览器
  }
};

myUtil.assignObj = function (target, source) {
  let keyArr = [];
  for (var k in target) {
    keyArr.push(k);
  }
  for (var obj in source) {
    let bHave = null;
    bHave = keyArr.filter((child) => {
      return child == obj;
    });
    if (bHave && bHave.length > 0) {
      target[obj] = source[obj];
    }
  }
  return target;
};

export default myUtil;
