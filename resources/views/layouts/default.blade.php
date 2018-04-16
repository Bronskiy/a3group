<!DOCTYPE html>
<html lang="{{ LaravelLocalization::getCurrentLocale() }}">
<head>
  @include('includes.head')
</head>
<body>
  <div class="layout">
    <header class="header header-right">
      @include('includes.header')
    </header>
    <div class="wrapper">
      @yield('content')
      <footer class="footer-light">
        @include('includes.footer')
      </footer>
      <a class="scroll-top" href="#top"><i class="fa fa-angle-up"></i></a>
    </div>
  </div>
  <script src="/assets/js/jquery.js"></script>
  <script src="/assets/js/bootstrap.min.js"></script>
  <script src="/assets/js/fontawesome-all.min.js"></script>
  <script src="/assets/js/plugins.js"></script>
  <script src="/assets/js/main.js"></script>
  {!! NoCaptcha::renderJs() !!}
  <!-- Yandex.Metrika counter --> <script type="text/javascript" > (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter48195371 = new Ya.Metrika({ id:48195371, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks"); </script> <noscript><div><img src="https://mc.yandex.ru/watch/48195371" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-27028673-83"></script>
  <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-27028673-83');
</script>
</body>
</html>
