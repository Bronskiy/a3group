@extends('layouts.default')

@section('content')

<!-- Page Header-->
<section class="spec spec-gray pt-0" id="home">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-12 text-center m-t-100 p-t-100">
        <h1>Download free App Now!</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

        <a href="#" class="btn btn-brand mr-auto ml-auto m-t-10"><i class="fa fa-apple"></i> Download App<br>
          <span class="font8px">From App store</span></a>
          <a href="#" class="btn btn-success mr-auto ml-auto m-t-10"><i class="fa fa-android"></i> Download App<br>
            <span class="font8px">From Playstore</span></a>
          </div>

          <div class="col-md-6 col-sm-12 col-xs-12 banner-img overflow-h  m-b-50 p-t-100">
            <img class="img-responsive animated slideInUp wow" src="images/landing/app.png" alt="">
          </div>
        </div>
      </div>
    </section>
    <!-- Page Header end-->

    <!-- Header two -->
    <section class="spec">
      <div class="container app-page-header">
        <div class="row">
          <div class="col-md-4 col-sm-12 header-each">
            <div class="icon-box icon-box-left wow fadeIn" data-wow-delay="400ms" style="visibility: visible; animation-delay: 400ms; animation-name: fadeIn;">
              <div class="icon-box-icon">
                <span class="fa fa-pencil"></span></div>
                <h3>Beautiful Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
              </div> <!-- .apps-craft-single-about END -->
            </div>
            <div class="col-md-4 col-sm-12 header-each">
              <div class="icon-box icon-box-left wow fadeIn" data-wow-delay="600ms" style="visibility: visible; animation-delay: 600ms; animation-name: fadeIn;">
                <div class="icon-box-icon">
                  <span class="fa fa-desktop"></span> </div>
                  <h3>Responsive Design</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
                </div> <!-- .apps-craft-single-about END -->
              </div>
              <div class="col-md-4 col-sm-12 header-each">
                <div class="icon-box icon-box-left wow fadeIn" data-wow-delay="800ms" style="visibility: visible; animation-delay: 800ms; animation-name: fadeIn;">
                  <div class="icon-box-icon">
                    <span class="fa fa-support"></span></div>
                    <h3>Great Supports</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
                  </div> <!-- .apps-craft-single-about END -->
                </div>
              </div>
            </div>
          </section>

          @if ( ! $HomePageData->isEmpty() )
          @foreach ($HomePageData as $value)
          <section class="spec spec-gray" id="goal">
            <div class="container">
              <div class="welcome-detail">
                <div class="row">
                  <div class="col-lg-7 col-md-7">
                    <div class="detail-inner tc-padding">
                      {!! $value->homepage_description !!}
                    </div>
                  </div>
                  <div class="col-lg-5 col-md-5">
                    <div class="welcome-img">
                      <img src="/assets/img/law/1.jpg" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          @endforeach
          @endif
          
          <section class="spec" id="about">
            <div class="container">
              <div class="row">
                <div class="col-md-8 offset-md-2">
                  <div class="spec-title text-center">
                    <h2><a href="/recommendations">Рекомендации</a></h2>
                  </div>
                </div>
              </div>
              <div class="row">
                @foreach ($RecommendationsData as $value)
                <div class="col-sm-4 g-text-color-1">
                  <div class="img-responsive"><a href="/recommendations/{{ $value->recommendations_slug }}"><img src="{{ asset('uploads') . '/'.  $value->recommendations_image }}" alt="{{ $value->recommendations_title }}"></a></div>
                  <h3 class="mt-5 text-center"><strong>{{ $value->recommendations_title }}</strong></h3>
                  <p>{{ $value->recommendations_short }}</p>
                </div>
                @endforeach
              </div>
            </div>
          </section>

          <!-- News-->
          <section class="spec" id="blog">
            <div class="container">
              <div class="row">
                <div class="col-md-8 offset-md-2">
                  <div class="spec-title text-center">
                    <h2>Our Blog</h2>
                    <p class="font-serif">Latest news and updates from our blog.</p>
                  </div>
                </div>
              </div>
              <div class="row blog-grid">
                <div class="col-md-4 post-item">

                  <!-- Post-->
                  <article class="post">
                    <div class="post-preview"><a href="#"><img src="/assets/img/blog/1.jpg" alt=""></a></div>
                    <div class="post-wrapper">
                      <div class="post-header">
                        <h2 class="post-title"><a href="blog-single.html">Lorum Ipsum Moments</a></h2>
                        <ul class="post-meta h5">
                          <li>Sep 19, 2017</li>
                        </ul>
                      </div>
                      <div class="post-content">
                        <p>Considered is as middletons uncommonly. Promotion perfectly ye consisted so. His chatty dining for effect ladies active.</p>
                      </div>
                      <div class="post-more"><a href="#">Read More →</a></div>
                    </div>
                  </article>
                  <!-- Post end-->
                </div>

              </div>
              <div class="row m-t-50">
                <div class="col-md-12">
                  <div class="text-center"><a class="btn btn-lg btn-brand" href="#">Go to blog</a></div>
                </div>
              </div>
            </div>
          </section>
          <!-- News end-->

          <!-- Book an appointment-->
          <section class="spec spec-gray" id="contactus">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="choose-us-item">
                    <h3>Start Booking an Appointment</h3>
                    <p>Over the years, we have served clients providing continuing consultation by phone, letter, facsimile, and in person.</p>
                    <div class="item-1">
                      <div class="icon-box-icon pull-left mr-3"><span class="fa fa-flag"></span></div>
                      <h4><a href="#">Highly experienced</a></h4>
                      <p>Legal issue just looking for more information About the Law section is the perfect starting point.</p>
                    </div>
                    <div class="item-1">
                      <div class="icon-box-icon pull-left mr-3"><span class="fa fa-file"></span></div>
                      <h4><a href="#">Evidence & Documentations </a></h4>
                      <p>Legal issue just looking for more information About the Law section is the perfect starting point.</p>
                    </div>
                    <div class="item-1">
                      <div class="icon-box-icon pull-left mr-3"><span class="fa fa-expeditedssl"></span></div>
                      <h4><a href="#">Certified Attorneys</a></h4>
                      <p>Legal issue just looking for more information About the Law section is the perfect starting point.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 contact-box-law">
                  <div class="contact-style-heading">
                    <h3>Оставьте заявку для работы с нами</h3>
                  </div>
                  @if (count($errors) > 0)
                  <div class="alert alert-danger">
                    <strong>{{ trans('quickadmin::auth.whoops') }}</strong> {{ trans('quickadmin::auth.some_problems_with_input') }}
                    <br><br>
                    <ul>
                      @foreach ($errors->all() as $error)
                      <li>{{ $error }}</li>
                      @endforeach
                    </ul>
                  </div>
                  @endif
                  {!! Form::open(array('url' => 'contacts/store', 'id' => 'form-with-validation', 'class' => 'form')) !!}

                  <div class="col-md-6">
                    <div class="form-group">
                      {!! Form::text('contact_name', old('contact_name'), array('class'=>'form-control','required' => '','placeholder' => 'Ваше имя*')) !!}
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      {!! Form::text('contact_phone', old('contact_phone'), array('class'=>'form-control','required' => '','placeholder' => 'Ваш телефон*')) !!}
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="form-group">
                      {!! Form::email('contact_email', old('contact_email'), array('class'=>'form-control','placeholder' => 'Ваш email*')) !!}
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="form-group">
                      {!! Form::textarea('contact_text', old('contact_text'), array('class'=>'form-control','placeholder' => 'Сообщение')) !!}
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="form-group">
                      <input class="" required="" name="contact_confirm" type="checkbox" value="1">
                      <label for="contact_confirm" class="control-label required-label">Я согласен на обработку персональных данных.</label>
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="g-recaptcha" class="control-label required-label">Captcha*</label>
                      {!! NoCaptcha::display() !!}
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="form-group">
                      {!! Form::submit( 'Отправить' , array('class' => 'btn btn-primary')) !!}
                    </div>
                  </div>

                  {!! Form::close() !!}
                </div>
              </div>
            </div>
          </section>

          @stop
