(function(window) {
  const svgSprite =
    '<svg>' +
    '' +
    '<symbol id="icon-share" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M0 0 0 0 0 0Z"  ></path>' +
    '' +
    '<path d="M864 704c-45.152 0-85.92 18.752-115.008 48.832l-431.008-215.488c1.312-8.256 2.016-16.704 2.016-25.312s-0.704-17.088-2.016-25.312l431.008-215.488c29.088 30.08 69.856 48.832 115.008 48.832 88.352 0 160-71.648 160-160s-71.648-160-160-160-160 71.648-160 160c0 8.608 0.704 17.088 2.016 25.312l-431.008 215.488c-29.088-30.08-69.856-48.832-115.008-48.832-88.352 0-160 71.648-160 160s71.648 160 160 160c45.152 0 85.92-18.752 115.008-48.832l431.008 215.488c-1.312 8.256-2.016 16.704-2.016 25.312 0 88.352 71.648 160 160 160s160-71.648 160-160c0-88.352-71.648-160-160-160z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M730.47792 491.709885c0 0 129.105427-229.116211-244.296959-108.85829 46.810119-36.676317 39.247886-111.410416 2.514263-137.952932-136.705522-98.743932-470.802716 216.430284-470.802716 403.764903 0 113.905236 122.752742 262.011412 402.478608 262.011412 351.906815 0 461.994096-192.401008 461.994096-286.039665C882.365212 495.491001 730.47792 491.709885 730.47792 491.709885zM431.944709 861.389482c-163.92035 15.276938-305.192887-62.470797-315.500651-173.688831-10.422374-111.180172 114.058732-213.704197 278.017968-228.962715 163.92035-15.257495 305.192887 62.470797 315.53749 173.669388C720.345142 743.606938 595.902922 846.131987 431.944709 861.389482z"  ></path>' +
    '' +
    '<path d="M374.060371 538.980491c-88.763626 15.027252-150.274562 88.87926-137.377834 164.860768 12.858866 76.020394 95.212502 125.477806 183.976128 110.469997 88.724741-15.027252 150.2367-88.820931 137.377834-164.860768C545.138748 573.431118 462.823997 523.991102 374.060371 538.980491zM358.63096 755.832378c-28.67304 7.869225-57.80759-7.023974-65.080228-33.278941-7.196912-26.331715 10.191106-54.025451 38.826284-61.932538 28.67304-7.907087 57.80759 6.986111 65.041342 33.278941C404.653133 720.192669 387.302977 747.887428 358.63096 755.832378zM433.095929 671.425989c-14.739702 0-26.696012-11.918447-26.696012-26.65815 0-14.72026 11.95631-26.676569 26.696012-26.676569 14.739702 0 26.657126 11.975752 26.657126 26.676569C459.754079 659.507542 447.835631 671.425989 433.095929 671.425989z"  ></path>' +
    '' +
    '<path d="M950.689321 207.647247C891.769396 132.318608 797.343817 99.653651 684.878372 115.678626c-18.961864 2.687202-32.166607 20.24816-29.459962 39.228443 2.667759 18.922978 20.171412 32.070416 39.210024 29.421077 111.37153-15.890922 171.040515 27.13808 201.478757 66.059532 39.957037 51.14689 51.243081 124.039038 28.039613 181.327812-7.196912 17.752316 1.343601 37.981033 19.11536 45.159526 4.28049 1.727341 8.655124 2.552126 13.012362 2.552126 13.684674 0 26.657126-8.176217 32.127721-21.649066C1020.643556 378.227274 1005.500671 277.718139 950.689321 207.647247z"  ></path>' +
    '' +
    '<path d="M718.213595 241.521752c-18.885116 2.705622-32.088836 20.266579-29.383214 39.210024 2.705622 18.942421 20.171412 32.088836 39.210024 29.421077 31.858592-4.568039 56.67479 3.090385 71.567989 22.128997 13.414521 17.196661 17.388019 42.433438 9.749038 61.414745-7.196912 17.752316 1.382487 37.96159 19.11536 45.159526 4.317329 1.727341 8.655124 2.533706 13.012362 2.533706 13.684674 0 26.696012-8.176217 32.127721-21.649066 17.10047-42.145889 9.480932-93.235474-19.384489-130.161479C836.513932 266.893606 795.270599 230.504838 718.213595 241.521752z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-up" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M928.462087 727.187991c-23.431665 27.608801-56.788377 41.797965-90.38045 41.797965-27.075659 0-54.329373-9.272177-76.635401-28.17162L511.98772 528.977673 262.558881 740.814336c-49.856501 42.360783-124.655068 36.288484-167.04655-13.596669C53.151547 677.331489 59.253522 602.561575 109.139699 560.200792L435.292967 283.192827c44.227294-37.592177 109.191888-37.592177 153.419182 0l326.153268 277.007965C964.750571 602.532923 970.853569 677.301813 928.462087 727.187991z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-github" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M402.262528 694.878208q0 22.85568-7.1424 46.854144t-24.569856 43.425792-41.42592 19.427328-41.42592-19.427328-24.569856-43.425792-7.1424-46.854144 7.1424-46.854144 24.569856-43.425792 41.42592-19.427328 41.42592 19.427328 24.569856 43.425792 7.1424 46.854144zm365.69088 0q0 22.85568-7.1424 46.854144t-24.569856 43.425792-41.42592 19.427328-41.42592-19.427328-24.569856-43.425792-7.1424-46.854144 7.1424-46.854144 24.569856-43.425792 41.42592-19.427328 41.42592 19.427328 24.569856 43.425792 7.1424 46.854144zm91.42272 0q0-68.56704-39.426048-116.563968t-106.850304-47.996928q-23.427072 0-111.42144 11.999232-40.568832 6.285312-89.708544 6.285312t-89.708544-6.285312q-86.851584-11.999232-111.42144-11.999232-67.424256 0-106.850304 47.996928t-39.426048 116.563968q0 50.282496 18.284544 87.708672t46.282752 58.853376 69.709824 34.28352 79.99488 16.856064 85.137408 3.999744l95.993856 0q46.854144 0 85.137408-3.999744t79.99488-16.856064 69.709824-34.28352 46.282752-58.853376 18.284544-87.708672zm127.991808-100.564992q0 118.278144-34.854912 189.130752-21.712896 43.997184-60.281856 75.995136t-80.566272 49.139712-97.13664 27.14112-97.993728 12.570624-95.422464 2.571264q-44.568576 0-81.137664-1.714176t-84.28032-7.1424-87.13728-17.14176-78.280704-29.426688-69.138432-46.282752-49.139712-65.71008q-35.426304-70.281216-35.426304-189.130752 0-135.419904 77.709312-226.271232-15.427584-46.854144-15.427584-97.13664 0-66.281472 29.140992-124.563456 61.710336 0 108.56448 22.569984t107.993088 70.566912q83.994624-19.99872 176.560128-19.99872 84.566016 0 159.98976 18.284544 59.99616-46.854144 106.850304-69.138432t107.993088-22.284288q29.140992 58.281984 29.140992 124.563456 0 49.711104-15.427584 95.993856 77.709312 91.42272 77.709312 227.414016z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-googleplus" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M981.333333 469.333333 896 469.333333 896 384 810.666667 384 810.666667 469.333333 725.333333 469.333333 725.333333 554.666667 810.666667 554.666667 810.666667 640 896 640 896 554.666667 981.333333 554.666667M341.333333 469.333333 341.333333 571.733333 512 571.733333C503.466667 614.4 460.8 699.733333 341.333333 699.733333 238.933333 699.733333 157.866667 614.4 157.866667 512 157.866667 409.6 238.933333 324.266667 341.333333 324.266667 401.066667 324.266667 439.466667 349.866667 460.8 371.2L541.866667 294.4C490.666667 243.2 422.4 213.333333 341.333333 213.333333 174.933333 213.333333 42.666667 345.6 42.666667 512 42.666667 678.4 174.933333 810.666667 341.333333 810.666667 512 810.666667 627.2 691.2 627.2 520.533333 627.2 499.2 627.2 486.4 622.933333 469.333333L341.333333 469.333333Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-stackoverflow" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M809.714286 932.571429l-638.857143 0 0-274.285714-91.428571 0 0 365.714286 821.714286 0 0-365.714286-91.428571 0 0 274.285714zm-538.285714-299.428571l18.857143-89.714286 447.428571 94.285714-18.857143 89.142857zm58.857143-213.714286l38.285714-83.428571 414.285714 193.714286-38.285714 82.857143zm114.857143-203.428571l58.285714-70.285714 350.857143 293.142857-58.285714 70.285714zm226.857143-216l272.571429 366.285714-73.142857 54.857143-272.571429-366.285714zm-410.285714 840.571429l0-90.857143 457.142857 0 0 90.857143-457.142857 0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-instagram" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.934 257.236C371.233 257.236 257.17 371.297 257.17 512c0 140.7 114.062 254.761 254.764 254.761 140.7 0 254.761-114.063 254.761-254.761 0-140.702-114.062-254.764-254.761-254.764z m0 418.121c-90.219 0-163.357-73.137-163.357-163.356s73.137-163.357 163.357-163.357c90.218 0 163.356 73.137 163.356 163.357 0 90.218-73.135 163.356-163.356 163.356z" fill="" ></path>' +
    '' +
    '<path d="M720.989 21.614H299.753c-155.828 0-282.148 126.321-282.148 282.148v421.235c0 155.828 126.321 282.148 282.148 282.148h421.235c155.828 0 282.148-126.321 282.148-282.148V303.763c0.001-155.828-126.321-282.149-282.147-282.149z m190.749 704.729c0 102.427-83.033 185.46-185.46 185.46h-428.69c-102.427 0-185.46-83.033-185.46-185.46V297.652c0-102.425 83.033-185.46 185.46-185.46h428.69c102.427 0 185.46 83.033 185.46 185.46v428.691z" fill="" ></path>' +
    '' +
    '<path d="M713.716 248.79c0 32.917 26.686 59.602 59.602 59.602s59.602-26.686 59.602-59.602c0-32.917-26.686-59.602-59.602-59.602-32.917 0-59.602 26.686-59.602 59.602z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-feed" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M329.142857 768q0 45.714286-32 77.714286t-77.714286 32-77.714285-32-32-77.714286 32-77.714286 77.714285-32 77.714286 32 32 77.714286z m292.571429 70.285714q1.142857 16-9.714286 27.428572-10.285714 12-26.857143 12H508q-14.285714 0-24.571429-9.428572t-11.428571-23.714285q-12.571429-130.857143-105.428571-223.714286T142.857143 515.428571q-14.285714-1.142857-23.714286-11.428571T109.714286 479.428571V402.285714q0-16.571429 12-26.857143 9.714286-9.714286 24.571428-9.714285h2.857143q91.428571 7.428571 174.857143 46T472 515.428571q65.142857 64.571429 103.714286 148t46 174.857143z m292.571428 1.142857q1.142857 15.428571-10.285714 26.857143-10.285714 11.428571-26.285714 11.428572h-81.714286q-14.857143 0-25.428571-10T759.428571 843.428571q-6.857143-122.857143-57.714285-233.428571t-132.285715-192-192-132.285714T144 227.428571q-14.285714-0.571429-24.285714-11.142857T109.714286 191.428571V109.714286q0-16 11.428571-26.285715 10.285714-10.285714 25.142857-10.285714h1.714286q149.714286 7.428571 286.571429 68.571429T677.714286 309.714286q106.857143 106.285714 168 243.142857t68.571428 286.571428z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>';
  const script = (function() {
    const scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  })();
  const shouldInjectCss = script.getAttribute('data-injectcss');

  /**
   * document ready
   */
  const ready = function(fn) {
    if (document.addEventListener) {
      document.addEventListener(
        'DOMContentLoaded',
        function() {
          document.removeEventListener(
            'DOMContentLoaded',
            arguments.callee,
            false
          );
          fn();
        },
        false
      );
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn);
    }

    function IEContentLoaded(w, fn) {
      let d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true;
            fn();
          }
        };
        // polling for no errors
      (function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left');
        } catch (e) {
          setTimeout(arguments.callee, 50);
          return;
        }
        // no errors, fire

        init();
      })();
      // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null;
          init();
        }
      };
    }
  };

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  const before = function(el, target) {
    target.parentNode.insertBefore(el, target);
  };

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  const prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild);
    } else {
      target.appendChild(el);
    }
  };

  function appendSvg() {
    let div, svg;

    div = document.createElement('div');
    div.innerHTML = svgSprite;
    svg = div.getElementsByTagName('svg')[0];
    if (svg) {
      svg.setAttribute('aria-hidden', 'true');
      svg.style.position = 'absolute';
      svg.style.width = 0;
      svg.style.height = 0;
      svg.style.overflow = 'hidden';
      prepend(svg, document.body);
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true;
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
      );
    } catch (e) {
      console && console.log(e);
    }
  }

  ready(appendSvg);
})(window);
