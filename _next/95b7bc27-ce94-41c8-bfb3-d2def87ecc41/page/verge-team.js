
          window.__NEXT_REGISTER_PAGE('/verge-team', function() {
            var comp = module.exports=webpackJsonp([2],{19:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.forceCheck=t.lazyload=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(0),s=a(u),c=n(33),m=a(c),d=n(17),f=a(d),p=n(23),h=n(24),g=a(h),v=n(25),b=a(v),w=n(26),E=a(w),y={top:0,right:0,bottom:0,left:0,width:0,height:0},_="data-lazyload-listened",x=[],N=[],M=!1;try{var k=Object.defineProperty({},"passive",{get:function(){M=!0}});window.addEventListener("test",null,k)}catch(e){}var C=!!M&&{capture:!1,passive:!0},j=function(e,t){var n=m.default.findDOMNode(e),a=void 0,r=void 0,o=void 0,i=void 0;try{var l=t.getBoundingClientRect();a=l.top,r=l.left,o=l.height,i=l.width}catch(e){a=y.top,r=y.left,o=y.height,i=y.width}var u=window.innerHeight||document.documentElement.clientHeight,s=window.innerWidth||document.documentElement.clientWidth,c=Math.max(a,0),d=Math.max(r,0),f=Math.min(u,a+o)-c,p=Math.min(s,r+i)-d,h=void 0,g=void 0,v=void 0,b=void 0;try{var w=n.getBoundingClientRect();h=w.top,g=w.left,v=w.height,b=w.width}catch(e){h=y.top,g=y.left,v=y.height,b=y.width}var E=h-c,_=g-d,x=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return E-x[0]<=f&&E+v+x[1]>=0&&_-x[0]<=p&&_+b+x[1]>=0},S=function(e){var t=m.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,a=void 0;try{var r=t.getBoundingClientRect();n=r.top,a=r.height}catch(e){n=y.top,a=y.height}var o=window.innerHeight||document.documentElement.clientHeight,i=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-i[0]<=o&&n+a+i[1]>=0},O=function(e){var t=m.default.findDOMNode(e);if(t instanceof HTMLElement){var n=(0,g.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?j(e,n):S(e))?e.visible||(e.props.once&&N.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},T=function(){N.forEach(function(e){var t=x.indexOf(e);-1!==t&&x.splice(t,1)}),N=[]},V=function(){for(var e=0;e<x.length;++e){var t=x[e];O(t)}T()},A=void 0,D=null,L=function(e){return"string"==typeof e},P=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n}return i(t,e),l(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&L(t)&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===A||"debounce"===A&&void 0===this.props.debounce;if(n&&((0,p.off)(e,"scroll",D,C),(0,p.off)(window,"resize",D,C),D=null),D||(void 0!==this.props.debounce?(D=(0,b.default)(V,"number"==typeof this.props.debounce?this.props.debounce:300),A="debounce"):void 0!==this.props.throttle?(D=(0,E.default)(V,"number"==typeof this.props.throttle?this.props.throttle:300),A="throttle"):D=V),this.props.overflow){var a=(0,g.default)(m.default.findDOMNode(this));if(a&&"function"==typeof a.getAttribute){var r=+a.getAttribute(_)+1;1===r&&a.addEventListener("scroll",D,C),a.setAttribute(_,r)}}else if(0===x.length||n){var o=this.props,i=o.scroll,l=o.resize;i&&(0,p.on)(e,"scroll",D,C),l&&(0,p.on)(window,"resize",D,C)}x.push(this),O(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,g.default)(m.default.findDOMNode(this));if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(_)-1;0===t?(e.removeEventListener("scroll",D,C),e.removeAttribute(_)):e.setAttribute(_,t)}}var n=x.indexOf(this);-1!==n&&x.splice(n,1),0===x.length&&"undefined"!=typeof window&&((0,p.off)(window,"resize",D,C),(0,p.off)(window,"scroll",D,C))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:s.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}(u.Component);P.propTypes={once:f.default.bool,height:f.default.oneOfType([f.default.number,f.default.string]),offset:f.default.oneOfType([f.default.number,f.default.arrayOf(f.default.number)]),overflow:f.default.bool,resize:f.default.bool,scroll:f.default.bool,children:f.default.node,throttle:f.default.oneOfType([f.default.number,f.default.bool]),debounce:f.default.oneOfType([f.default.number,f.default.bool]),placeholder:f.default.node,scrollContainer:f.default.oneOfType([f.default.string,f.default.object]),unmountIfInvisible:f.default.bool},P.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var z=function(e){return e.displayName||e.name||"Component"},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function a(){r(this,a);var e=o(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));return e.displayName="LazyLoad"+z(t),e}return i(a,n),l(a,[{key:"render",value:function(){return s.default.createElement(P,e,s.default.createElement(t,this.props))}}]),a}(u.Component)}};t.lazyload=H,t.default=P,t.forceCheck=V},20:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise(function(n,a){function r(){var e,t=[],n=[],a={};return o.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(r,o,i){t.push(o=o.toLowerCase()),n.push([o,i]),e=a[o],a[o]=e?e+","+i:i}),{ok:1==(o.status/200|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:r,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return a[e.toLowerCase()]},has:function(e){return e.toLowerCase()in a}}}}var o=new XMLHttpRequest;o.open(t.method||"get",e);for(var i in t.headers)o.setRequestHeader(i,t.headers[i]);o.withCredentials="include"==t.credentials,o.onload=function(){n(r())},o.onerror=a,o.send(t.body)})};t.default=a},23:function(e,t,n){"use strict";function a(e,t,n,a){a=a||!1,e.addEventListener?e.addEventListener(t,n,a):e.attachEvent&&e.attachEvent("on"+t,function(t){n.call(e,t||window.event)})}function r(e,t,n,a){a=a||!1,e.removeEventListener?e.removeEventListener(t,n,a):e.detachEvent&&e.detachEvent("on"+t,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.on=a,t.off=r},24:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,a=e;a;){if(!a.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(a),o=r.position,i=r.overflow,l=r["overflow-x"],u=r["overflow-y"];if("static"===o&&t)a=a.parentNode;else{if(n.test(i)&&n.test(l)&&n.test(u))return a;a=a.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},25:function(e,t,n){"use strict";function a(e,t,n){var a=void 0,r=void 0,o=void 0,i=void 0,l=void 0,u=function u(){var s=+new Date-i;s<t&&s>=0?a=setTimeout(u,t-s):(a=null,n||(l=e.apply(o,r),a||(o=null,r=null)))};return function(){o=this,r=arguments,i=+new Date;var s=n&&!a;return a||(a=setTimeout(u,t)),s&&(l=e.apply(o,r),o=null,r=null),l}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},26:function(e,t,n){"use strict";function a(e,t,n){t||(t=250);var a,r;return function(){var o=n||this,i=+new Date,l=arguments;a&&i<a+t?(clearTimeout(r),r=setTimeout(function(){a=i,e.apply(o,l)},t)):(a=i,e.apply(o,l))}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},30:function(e,t,n){e.exports=window.fetch||(window.fetch=n(20).default||n(20))},442:function(e,t,n){e.exports=n(443)},443:function(e,t,n){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.t;return u.default.createElement(h.default,null,u.default.createElement(d.default,null,u.default.createElement("title",{key:"title"},t("common:meta.verge-team.title",{defaultValue:"Verge Team - VergeCurrency.com"}))),u.default.createElement("div",{className:"about"},u.default.createElement("div",{className:"ribbon ribbon--about"},u.default.createElement("div",{className:"container"},u.default.createElement("div",{className:"row center-xs"},u.default.createElement("div",{className:"col-xs-10 col-sm-9 col-md-6 text-center"},u.default.createElement("div",{className:"ribbon-txt"},u.default.createElement("h1",null,t("verge-team:body.header",{defaultValue:"Meet the Verge Team"})),u.default.createElement("p",{dangerouslySetInnerHTML:{__html:t("common:texts.grassroots",{defaultValue:'The grassroots culture is what makes Verge <span className="hidden-xs"><br /></span> unique and dynamic.'})}})))))),u.default.createElement("div",{className:"intro pt-large pb-large pb-xs-0"},u.default.createElement("div",{className:"row center-xs middle-xs"},u.default.createElement("div",{className:"col-xs-10 col-sm-6"},u.default.createElement("h2",null,t("common:texts.open",{defaultValue:"Verge Currency is a 100% open-source project, and the global Verge Community represents the manpower driving it forward. Verge is not a company, there was no ICO held upon the launch and no pre-mining took place. All contributors, including the Core Team, are unpaid volunteers who donate their time and energy into the project because they are passionate and believe in Verge."})),u.default.createElement("p",null,t("verge-team:body.text1",{defaultValue:"Below are just some of the most active community members who form the Core Team."}))))),u.default.createElement("div",{className:"team pt-xs pb-large"},u.default.createElement("div",{className:"row center-xs"},u.default.createElement("div",{className:"col-xs-10 col-lg-8"},k.map(function(e){return u.default.createElement(y.default,e,u.default.createElement(w.default,e))})))),u.default.createElement("div",{className:"team pt-xs pb-large"},u.default.createElement("div",{className:"row center-xs"},u.default.createElement("div",{className:"col-xs-10 col-lg-8"},u.default.createElement("h2",null,"Telegram Admins"),u.default.createElement(x.default,null)))),u.default.createElement("div",{className:"contributors"},u.default.createElement("div",{className:"row center-xs"},u.default.createElement("div",{className:"col-xs-10"},u.default.createElement("div",{className:"row center-xs start-sm"},u.default.createElement("div",{className:"col-xs-12 col-sm-8 col-lg-6 pb-small pb-xs-0"},u.default.createElement("h2",null,t("verge-team:body.text2",{defaultValue:"Want to contribute to Verge Currency?"})," ",u.default.createElement("span",{className:"hidden-xs"},u.default.createElement("br",null)),t("verge-team:body.text3",{defaultValue:"Join our community on Github"})),u.default.createElement("p",null,t("verge-team:body.text4",{defaultValue:"Verge is open-source software that is constantly improving due to its many contributors. If you would like to contribute as well, take a look at our Github repositories to see where you could make a difference!"}))),u.default.createElement("div",{className:"col-xs-12 col-sm-4 col-lg-6 end-xs"},u.default.createElement(c.default,{href:"https://github.com/vergecurrency?tab=repositories"},u.default.createElement("a",{href:"https://github.com/vergecurrency?tab=repositories",target:"_blank",rel:"noopener noreferrer",className:"btn btn-tertiary btn-github"},t("verge-team:body.text5",{defaultValue:"Go to Verge repo"})))),u.default.createElement("div",{className:"col-xs-12"},u.default.createElement(v.default,null))))))))}Object.defineProperty(t,"__esModule",{value:!0});var o=n(444),i=a(o),l=n(0),u=a(l),s=n(1),c=a(s),m=n(8),d=a(m),f=n(7),p=n(2),h=a(p),g=n(448),v=a(g),b=n(449),w=a(b),E=n(450),y=a(E),_=n(451),x=a(_),N=n(9),M=a(N),k=(0,i.default)(n(453)),C=(0,f.translate)(["common","verge-team"],{i18n:M.default,wait:e.browser})(r);t.default=C}).call(t,n(6))},444:function(e,t,n){e.exports={default:n(445),__esModule:!0}},445:function(e,t,n){n(446),e.exports=n(13).Object.values},446:function(e,t,n){var a=n(18),r=n(447)(!1);a(a.S,"Object",{values:function(e){return r(e)}})},447:function(e,t,n){var a=n(27),r=n(45),o=n(38),i=n(62).f;e.exports=function(e){return function(t){for(var n,l=o(t),u=r(l),s=u.length,c=0,m=[];s>c;)n=u[c++],a&&!i.call(l,n)||m.push(e?[n,l[n]]:l[n]);return m}}},448:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(14),o=a(r),i=n(10),l=a(i),u=n(11),s=a(u),c=n(15),m=a(c),d=n(16),f=a(d),p=n(0),h=a(p),g=n(30),v=a(g),b=n(19),w=a(b),E=function(e){function t(e){(0,l.default)(this,t);var n=(0,m.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return n.state={contributors:[]},n}return(0,f.default)(t,e),(0,s.default)(t,[{key:"componentWillMount",value:function(){var e=this;(0,v.default)("https://api.github.com/repos/vergecurrency/VERGE/contributors").then(function(e){return e.json()}).then(function(t){return e.setState({contributors:t})})}},{key:"render",value:function(){return this.state.contributors.length>0?h.default.createElement("div",null,h.default.createElement("div",{className:"row center-xs pt-xs pb"},this.state.contributors.map(function(e,t){if(15385883!==e.id)return h.default.createElement("div",{key:e.id,className:(0===t?"col-xs-9":"col-xs-6")+" col-xs-6 col-sm-4 col-md-3 col-lg-2"},h.default.createElement("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer",className:"contributors--item"},h.default.createElement("div",{className:"contributors--item__img"},h.default.createElement(w.default,{height:130},h.default.createElement("img",{src:e.avatar_url,alt:e.login}))),h.default.createElement("div",{className:"contributors--item__author"},e.login),h.default.createElement("div",{className:"contributors--item__profile"},h.default.createElement("span",null,"View on GitHub"))))}))):h.default.createElement("span",null,"Loading contributors...")}}]),t}(h.default.Component);t.default=E},449:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=a(r),i=n(1),l=a(i),u=function(e){return e.members.map(function(e){return o.default.createElement("div",{className:"col-xs col-md-3",key:e.name},o.default.createElement("div",{className:"team--member pb-xs"},o.default.createElement("span",{className:"team--member_border"},o.default.createElement("img",{src:e.img,alt:e.name})),o.default.createElement("div",{className:"flexIt"},o.default.createElement("h3",null,e.name),o.default.createElement("div",{className:"socials"},o.default.createElement(l.default,{href:e.twitter},o.default.createElement("a",{className:"icon iconlink "+(e.twitter?"":"hidden"),href:e.twitter,target:"_blank",rel:"noopener noreferrer"},o.default.createElement("i",{className:"icon icon--twitter"}))),o.default.createElement(l.default,{href:e.github},o.default.createElement("a",{className:"icon iconlink "+(e.github?"":"hidden"),href:e.github,target:"_blank",rel:"noopener noreferrer"},o.default.createElement("i",{className:"icon icon--github"}))))),o.default.createElement("h5",null,e.role),o.default.createElement("h5",null,o.default.createElement("i",null,e.location)),o.default.createElement("p",null,o.default.createElement("h5",null,e.occupation)),o.default.createElement("br",null)))})};t.default=u},450:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=a(r),i=n(65),l=a(i),u=function(e){return o.default.createElement("div",{className:"team-category"},o.default.createElement("div",{className:"category-header"},o.default.createElement("h2",{className:"category-"+("ar"===l.default.language||"fa"===l.default.language||"ku"===l.default.language?"title-rtl":"title")},e.title),o.default.createElement("hr",null)),o.default.createElement("div",{className:"row between-xs start-sm"},e.children))};t.default=u},451:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=a(r),i=n(1),l=a(i),u=n(53),s=a(u),c=n(66),m=n(452),d=function(e){return e.twitter||e.telegram},f=function(e){return Boolean(e)?"icon iconlink":"icon iconlink hidden"},p=function(){var e=m.tgadmins.map(function(e){return o.default.createElement("div",{className:"col-xs-12 col-md-3"},o.default.createElement("div",{className:"team--member tg--admins pb-xs"},o.default.createElement("div",{className:"flexIt"},o.default.createElement("h3",null,e.name),d(e)?o.default.createElement("div",{className:"socials"},o.default.createElement(l.default,{href:e.telegram},o.default.createElement("a",{className:f(e.telegram),href:e.telegram,target:"_blank",rel:"noopener noreferrer"},o.default.createElement(s.default,{icon:c.faTelegram,size:"1x"}))),o.default.createElement(l.default,{href:e.twitter},o.default.createElement("a",{className:f(e.twitter),href:e.twitter,target:"_blank",rel:"noopener noreferrer"},o.default.createElement(s.default,{icon:c.faTwitter,size:"1x"})))):null),o.default.createElement("br",null)))});return o.default.createElement("div",{className:"row center-xs start-sm"},e)};t.default=p},452:function(e,t){e.exports={tgadmins:[{name:"Roger",telegram:"https://t.me/Drogert",twitter:"https://twitter.com/DrogertCrypto"},{name:"LewLew",telegram:"https://t.me/VergeSlut",twitter:"https://twitter.com/VergeSlut"},{name:"Hum",telegram:"https://t.me/HULSE",twitter:"https://twitter.com/HUMXVG"},{name:"Wolfie",telegram:"https://t.me/XVG_HypeMan",twitter:"https://twitter.com/XVG_HypeMan"},{name:"Frank Dashwood",telegram:"https://t.me/FDashwood",twitter:"https://twitter.com/DJ_Erock23"},{name:"Ard",telegram:"https://t.me/Ard1980",twitter:""},{name:"Verge Jaguar",telegram:"https://t.me/VergeJaguar",twitter:"https://twitter.com/VergeJaguar"},{name:"Bol Bol",telegram:"https://t.me/Bebolol",twitter:""},{name:"thatguy",telegram:"https://t.me/that99thguy",twitter:""},{name:"El Connekto",telegram:"https://t.me/ElConnekto",twitter:"https://twitter.com/ElConnekto"},{name:"m3L1sS4",telegram:"https://t.me/xMithras",twitter:"https://twitter.com/ecilaam"},{name:"Ezca",telegram:"https://t.me/Ronezca",twitter:"https://twitter.com/Ezca3"},{name:"Vergenia",telegram:"https://t.me/Vergenia_Bot",twitter:""}]}},453:function(e,t){e.exports={developer:{title:"Development Team",members:[{img:"../static/img/team/sunerok.jpg",name:"Justin - Sunerok",role:"Senior Software Engineer",occupation:"Network Security & Blockchain Expert",github:"https://github.com/justinvforvendetta",twitter:"https://twitter.com/justinvendetta",location:"Florida, USA"},{img:"../static/img/team/marpme.jpg",name:"Marvin - marpme",role:"Lead Software Engineer",occupation:"Software Engineer",github:"https://github.com/marpme",twitter:"https://twitter.com/marpme_",location:"Berlin, Germany"},{img:"../static/img/team/swen.jpg",name:"Swen",role:"Software Engineer",occupation:"Full Stack Senior Web Developer",github:"https://github.com/SwenVanZanten",twitter:"https://twitter.com/SwenVanZanten",location:"Voorhout, The Netherlands"},{img:"../static/img/team/manuel.jpg",name:"Manuel",role:"Software Engineer",occupation:"Software Engineer",github:"https://github.com/Cabrasm",twitter:"https://twitter.com/CabrasManuel",location:"Switzerland"},{img:"../static/img/team/maxius.jpg",name:"Damien - Maxius",role:"Web Developer",occupation:"Full Stack Web Developer",github:"https://github.com/Max1us",twitter:"https://twitter.com/_maxius_",location:"Melbourne, Australia"}]},businessdevelopment:{title:"Business Development Team",members:[{img:"../static/img/team/arend.jpg",name:"Arend",role:"Payment Integration Manager",occupation:"Student Entrepreneur",github:"https://github.com/arendgb",twitter:"https://twitter.com/Arend_XVG",location:"Tilburg, The Netherlands"},{img:"../static/img/team/cc66.jpg",name:"Jason - CC66",role:"Senior Community Manager",occupation:"Social Engineering Specialist",github:"",twitter:"https://twitter.com/CoinCrazy66",location:"Tennessee, USA"},{img:"../static/img/team/mark.jpg",name:"Mark",role:"Business Development Strategist",occupation:"Finance / Credit Specialist",github:"",twitter:"https://twitter.com/vergecanada",location:"Alberta, Canada"},{img:"../static/img/team/desolator.jpg",name:"Numan",role:"Business Development",occupation:"Lead System Engineer",github:"",twitter:"https://twitter.com/Desolatorbtc",location:"Istanbul, Turkey"},{img:"../static/img/team/melvin.jpg",name:"Melvin",role:"Outreach",occupation:"Logistics Management",github:"",twitter:"https://twitter.com/melvin_van_es",location:"Rotterdam, The Netherlands"}]},marketing:{title:"Marketing Team",members:[{img:"../static/img/team/alchemi.jpg",name:"Alchemi",role:"Multimedia Designer",occupation:"Multimedia Designer",github:"",twitter:"https://twitter.com/alchemi_co",location:"New York, USA"},{img:"../static/img/team/niteshadow.jpg",name:"NiteShadow",role:"IT/Content Marketing Strategist",occupation:"IT/Content Marketing Strategist",github:"",twitter:"https://twitter.com/NiteShadowXVG",location:"New York, USA"},{img:"../static/img/team/xvgninja.jpg",name:"Alexandre - XVG Ninja",role:"Technical Marketing Engineer",occupation:"Corporate English Teacher / Editor",github:"",twitter:"https://twitter.com/xvg_ninja",location:"Germany"},{img:"../static/img/team/Hassan.png",name:"Hassan",role:"Lead UI Designer & Graphics",occupation:"UI/UX Designer & Webdesigner",github:"",twitter:"https://twitter.com/waveon3",location:"Odense, Denmark"},{img:"../static/img/team/jeroen.png",name:"Jeroen",role:"Marketing Strategist",occupation:"Consultant",github:"",twitter:"",location:"Tillburg, The Netherlands"},{img:"../static/img/team/maxime.jpg",name:"Maxime - MrGoops",role:"Marketing",occupation:"Entrepreneur",github:"",twitter:"https://twitter.com/cryptocuistot",location:"Paris, France"}]},advisor:{title:"Advisors",members:[{img:"../static/img/team/mihael.jpg",name:"Mihael",role:"Internal & External Communications",occupation:"Offshore Marine Engineer",github:"",twitter:"https://twitter.com/Mihael_CM",location:"Rijeka, Croatia"},{img:"../static/img/team/kris.jpg",name:"Kristopher",role:"Marketing & Operations Advisor",occupation:"Serial Entrepreneur & Investor",github:"",twitter:"https://twitter.com/KristopherMT",location:"Canada"},{img:"../static/img/team/swizzlesticks.jpg",name:"Lloyd - Swizzlesticks",role:"Senior Content Manager",occupation:"Owner/CEO - Managed Services Provider",github:"",twitter:"https://twitter.com/3wizzlesticks",location:"Kentucky, USA"},{img:"../static/img/team/birb.jpg",name:"Dan - wit_sec_birb",role:"Advisor & Marketing",occupation:"Procurement",github:"",twitter:"https://twitter.com/wit_sec_birb",location:"Melbourne, Australia"},{img:"../static/img/team/harry.jpg",name:"Harry",role:"General Advisor",occupation:"Venture Advisor",github:"",twitter:"https://twitter.com/XVGHS",location:"British Columbia Canada"},{img:"../static/img/team/thecryptocamel.jpg",name:"TheCryptoCamel",role:"Video Production",occupation:"Master Distiller",github:"",twitter:"https://twitter.com/TheCryptoCamel",location:"Washington, USA"}]}}}},[442]);
            return { page: comp.default }
          })
        