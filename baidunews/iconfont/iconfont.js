;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-baidu" viewBox="0 0 1000 1000">'+
      ''+
      '<path d="M278.5498 475.8344c81.0734-17.4172 70.0385-114.2965 67.605-135.4781-3.9775-32.6519-42.3721-89.6952-94.5149-85.1992-65.6143 5.881-75.1922 100.6558-75.1922 100.6558C167.5694 399.639 197.6743 493.2366 278.5498 475.8344zM364.6361 644.3291c-2.3805 6.8194-7.6741 24.2366-3.08 39.3993 9.0442 34.0369 38.5895 35.5629 38.5895 35.5629h42.45499862087712V615.5276722382225h-45.452092469189594C376.7054 621.6185 366.8467 637.5098 364.6361 644.3291zM429.0171 313.3605c44.7785 0 80.9615-51.5261 80.9615-115.2339 0-63.6498-36.184-115.1619-80.9615-115.1619-44.6946 0-80.9875 51.5121-80.9875 115.1619C348.0297 261.8345 384.3226 313.3605 429.0171 313.3605zM621.8535 320.9774c59.8449 7.7707 98.3225-56.091 105.9676-104.4952 7.815-48.3322-30.8044-104.4922-73.1735-114.1386-42.455-9.7314-95.4663 58.2595-100.2842 102.6024C548.5941 259.1453 562.1215 313.2896 621.8535 320.9774zM768.4842 605.5145c0 0-92.5811-71.6304-146.6307-149.0589-73.2594-114.1556-177.3482-67.6961-212.1591-9.6465-34.6699 58.0496-88.6896 94.7628-96.3637 104.4922-7.7821 9.5775-111.8489 65.7374-88.7446 168.3539 23.1043 102.5335 104.2327 100.5718 104.2327 100.5718s59.787 5.881 129.1549-9.6465c69.3939-15.3866 129.1269 3.8514 129.1269 3.8514s162.0899 54.2702 206.4467-50.2239C837.8521 659.7157 768.4842 605.5145 768.4842 605.5145zM491.1586 761.016H385.7786447819187c-45.5061-9.0728-63.6245-40.1278-65.9211-45.4212-2.2396-5.3764-15.1504-30.3414-8.3197-72.7946 19.6605-63.6359 75.7508-68.2008 75.7508-68.2008h56.09332464552544v-68.9432564721119l47.7746 0.7285V761.0160311308932zM687.4138 760.2885H566.1529267385943c-46.9891-12.1128-49.2027-45.4902-49.2027-45.4902V580.6902919820361l49.2027-0.7975v120.5242845350852c2.9971 12.8553 18.9609 15.1777 18.9609 15.1777h49.95922593230705V580.6902919820361h52.33971194320412V760.28852438047zM859.0786 402.2563c0-23.1613-19.2388-92.887-90.5944-92.887-71.4675 0-81.0165 65.8064-81.0165 112.3348 0 44.3979 3.7536 106.3819 92.5272 104.4092C868.7964 524.1516 859.0786 425.5405 859.0786 402.2563z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-sousuo" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M961.219584 916.31616 688.850944 643.946496c53.470208-62.217216 86.011904-142.891008 86.011904-231.169024 0-195.97312-159.427584-355.400704-355.400704-355.400704-195.97312 0-355.400704 159.427584-355.400704 355.400704 0 195.97312 159.427584 355.400704 355.400704 355.400704 77.601792 0 149.220352-25.276416 207.731712-67.638272l274.900992 274.900992L961.219584 916.31616zM105.873408 412.777472c0-172.914688 140.686336-313.588736 313.588736-313.588736 172.9024 0 313.588736 140.674048 313.588736 313.588736 0 172.91264-140.68736 313.588736-313.588736 313.588736C246.55872 726.366208 105.873408 585.690112 105.873408 412.777472z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jiajian02" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M895.955484 460.757942l-326.173098 0L569.782386 134.597511c0-23.736611-19.243057-42.97886-42.980664-42.97886s-42.980664 19.24225-42.980664 42.97886l0 326.160431-326.174121 0c-23.737607 0-42.980664 19.24225-42.980664 42.97886s19.243057 42.97886 42.980664 42.97886l326.174121 0 0 326.159408c0 23.736611 19.243057 42.97886 42.980664 42.97886s42.980664-19.24225 42.980664-42.97886L569.782386 546.715663l326.173098 0c23.737607 0 42.980664-19.24225 42.980664-42.97886S919.693091 460.757942 895.955484 460.757942z"  ></path>'+
      ''+
      '<path d="M531.954285 144.573723"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-tubiao102" viewBox="0 0 1025 1024">'+
      ''+
      '<path d="M511.882314 258.483172l244.87664 285.677815-20.872354 0c-52.942262 0-96.003006 43.070977-96.003006 96.018356l0 288.054046-255.999488 0L383.884105 640.179343c0-52.947379-43.065861-96.018356-95.999936-96.018356l-20.879518 0L511.882314 258.483172M511.882314 174.343923c-7.559525 0-15.127238 3.372979-20.811976 10.000228l-342.379885 399.571118c-11.433949 13.321016-6.431788 24.258637 11.19346 24.258637l128.001279 0c17.623201 0 31.99725 14.377118 31.99725 32.004413l0 320.058459c0 17.630365 14.377118 32.008507 32.001343 32.008507l320.002175 0c17.629342 0 31.995203-14.379165 31.995203-32.008507L703.881163 640.179343c0-17.628318 14.376095-32.004413 32.00646-32.004413l127.998209 0c17.621155 0 22.623315-10.937621 11.186297-24.258637l-342.378861-399.571118C527.005459 177.716902 519.44184 174.343923 511.882314 174.343923L511.882314 174.343923z"  ></path>'+
      ''+
      '<path d="M191.88321 64.070228c0 17.693813-14.312647 32.008507-32.00032 32.008507-17.687673 0-31.999296-14.314694-31.999296-32.008507 0-17.688696 14.3106-32.004413 31.999296-32.004413C177.570563 32.065815 191.88321 46.381532 191.88321 64.070228z"  ></path>'+
      ''+
      '<path d="M895.884105 64.070228c0 17.693813-14.311624 32.008507-32.00032 32.008507-17.693813 0-32.002367-14.314694-32.002367-32.008507 0-17.688696 14.308554-32.004413 32.002367-32.004413C881.572481 32.065815 895.884105 46.381532 895.884105 64.070228z"  ></path>'+
      ''+
      '<path d="M159.88289 32.065815l704.001919 0 0 64.01292-704.001919 0 0-64.01292Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-yonghu" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M758.688587 326.006726c0-135.872144-110.744767-246.152044-247.549716-246.152044-136.801877 0-247.552788 110.280924-247.552788 246.152044 0 136.340083 110.750911 246.618959 247.552788 246.618959C647.942796 572.625685 758.688587 462.346808 758.688587 326.006726L758.688587 326.006726zM976.927126 981.646956c0 22.799972-18.615147 41.874866-41.884081 41.874866-23.263814 0-42.34178-19.074894-42.34178-41.874866l-0.463843-4.189944 0.463843-4.655835C866.640058 789.004757 708.435881 654.060298 515.792657 651.734941l-4.653787 0.463843-4.655835-0.463843c-190.315818 2.325358-347.130515 134.012677-375.976825 314.552983 0.928709 3.727125 1.857419 7.447083 1.857419 11.169088l0 4.189944c0 23.260743-19.07899 42.340757-42.34178 42.340757-23.732777 0-42.813815-19.080014-42.813815-42.340757l0-0.466915-0.926662 0 0.464867-3.723029c0-3.722006 0.462819-6.97812 1.398696-10.236283 21.869214-169.377361 135.870096-306.183334 291.290193-365.2767-90.737068-57.699789-149.37171-159.603897-149.37171-275.937304 0-179.614668 140.526955-325.723095 321.074428-325.723095 181.009268 0 321.07238 146.109451 321.07238 325.723095 0 116.333407-58.630546 218.237515-148.905819 275.937304 154.023449 58.630546 267.559464 194.035776 290.829422 361.552646 1.392552 4.654811 2.322286 9.305526 2.322286 13.96136L976.927126 981.646956 976.927126 981.646956zM976.927126 981.646956"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
