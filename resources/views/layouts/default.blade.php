<!DOCTYPE html>
<html lang="en">
<head>
  @include('includes.head')
</head>
<body>
  <!-- Layout-->
  <div class="layout">
    <!-- Header-->
    <header class="header header-right">
      @include('includes.header')
    </header>
    <!-- Header end-->
    <!-- Wrapper-->
    <div class="wrapper">
      @yield('content')
      <!-- Footer-->
      <footer class="footer-light">
        @include('includes.footer')
      </footer>
      <!-- Footer end-->
      <a class="scroll-top" href="#top"><i class="fa fa-angle-up"></i></a>
    </div>
    <!-- Wrapper end-->
  </div>
  <!-- Layout end-->
  <!-- Scripts-->
  <script src="/assets/js/jquery.js"></script>
  <script src="/assets/js/bootstrap.min.js"></script>
  <script src="/assets/js/fontawesome-all.min.js"></script>
  <script src="/assets/js/plugins.js"></script>
  <script src="/assets/js/main.js"></script>
</body>
</html>
