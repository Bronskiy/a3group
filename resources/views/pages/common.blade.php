@extends('layouts.default')

@section('content')
<!-- Page Header-->
<section class="spec-page-title">
  <div class="container">
    <div class="row-page-title">
      <div class="page-title-captions">
        <h1 class="h5">About Us</h1>
      </div>
      <div class="page-title-secondary">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Pages</a></li>
          <li class="breadcrumb-item active">About Us</li>
        </ol>
      </div>
    </div>
  </div>
</section>
<!-- Page Header end-->

<!---->
<section class="spec spec-divider-bottom pb-0">
  <div class="container">
    <!---->
    <div class="row m-b-100">
      <div class="col-md-4">
        <img src="images/team/2.png" alt="img">
      </div>
      <div class="col-md-8">
        <div class="spec-title">
          <h2>About Us</h2>
          <p class="font-serif">Welcome to spec here is who we are.</p>
        </div>
        <p>Suspendisse non magna sed justo tincidunt pellentesque. Proin sit amet ligula vel orci tempus viverra. Donec massa justo, sodales in leo pretium, adipiscing dictum mi. Nullam sed eleifend purus. Sed eget lacus eget urna venenatis hendrerit sed sit amet dui. Suspendisse lorem velit, tincidunt nec mattis ut, gravida adipiscing sapien.</p>
        <p>Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth. Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth.</p>
        <div class="row">
          <div class="col-md-6">
            <div class="progress-item">
              <div class="progress-title">HTML5</div>
              <div class="progress">
                <div class="progress-bar progress-bar-brand" aria-valuenow="90" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 90%;"><span class="pb-number-box" style="opacity: 1;"><span class="pb-number">90</span>%</span></div>
              </div>
            </div>

            <div class="progress-item">
              <div class="progress-title">CSS3</div>
              <div class="progress">
                <div class="progress-bar progress-bar-brand" aria-valuenow="90" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 80%;"><span class="pb-number-box" style="opacity: 1;"><span class="pb-number">80</span>%</span></div>
              </div>
            </div>

          </div>
          <div class="col-md-6">
            <div class="progress-item">
              <div class="progress-title">WordPress</div>
              <div class="progress">
                <div class="progress-bar progress-bar-brand" aria-valuenow="70" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"><span class="pb-number-box" style="opacity: 1;"><span class="pb-number">70</span>%</span></div>
              </div>
            </div>

            <div class="progress-item">
              <div class="progress-title">Joomla</div>
              <div class="progress">
                <div class="progress-bar progress-bar-brand" aria-valuenow="85" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 85%;"><span class="pb-number-box" style="opacity: 1;"><span class="pb-number">85</span>%</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!---->

  </div>
</section>

<!-- Manual Counter-->

<section class="spec spec-gray">
  <div class="container">

    <div class="row">
      <div class="col-md-3">
        <div class="text-center manual-counter">
          <span>7865</span>
          <h4 class="text-uppercase">Projets Delivered</h4>
        </div>
      </div>
      <div class="col-md-3">
        <div class="text-center manual-counter">
          <span>865</span>
          <h4 class="text-uppercase">New Projects</h4>
        </div>
      </div>
      <div class="col-md-3">
        <div class="text-center manual-counter">
          <span>75</span>
          <h4 class="text-uppercase">New Clients</h4>
        </div>
      </div>
      <div class="col-md-3">
        <div class="text-center manual-counter">
          <span>1865</span>
          <h4 class="text-uppercase">Returning Clients</h4>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- Manual Counter end-->

<section class="spec spec-divider-bottom">
  <div class="container">
    <!-- Clients-->
    <div class="row">
      <div class="col-md-12">
        <div class="owl-carousel clients-carousel" data-carousel-options="{&quot;items&quot;:&quot;5&quot;}">
          <div class="client"><img src="images/clients/logo-1.png" alt="logo"></div>
          <div class="client"><img src="images/clients/logo-1.png" alt="logo two"></div>
          <div class="client"><img src="images/clients/logo-1.png" alt="logo three"></div>
          <div class="client"><img src="images/clients/logo-1.png" alt="logo four"></div>
          <div class="client"><img src="images/clients/logo-1.png" alt="logo five"></div>
          <div class="client"><img src="images/clients/logo-1.png" alt="logo six"></div>
          <div class="client"><img src="images/clients/logo-1.png" alt="logo 7"></div>
        </div>
      </div>
    </div>
    <!-- Clients end-->
  </div>
</section>
<section class="spec spec-gray pb-0 pt-0">
  <div class="container-indent">
    <div class="row">
      <div class="col-md-12 text-center">
        <div class="parallax-quote parallaxBg" style="background-position: 50% 40px;">
          <div class="tms-content">
            <blockquote>
              <p>Easy to customize, fully responsive &amp; clean design. <br> Just What you need!</p>
              <small>- John Doe -</small>
              <blockquote>
              </blockquote></blockquote></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    @stop
