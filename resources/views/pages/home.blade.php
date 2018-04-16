@extends('layouts.default')

@section('meta_title', __('common.title'))
@section('content')
<section class="spec spec-gray pt-0" id="home">
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-sm-12 text-center m-t-100 p-t-50 p-b-50">
        <h1>A3 Group Law Firm</h1>
        <p>@lang('common.slogan')</p>
      </div>
    </div>
  </div>
</section>
<section class="spec">
  <div class="container app-page-header">
    <div class="row">
      <div class="col-md-4 col-sm-12 header-each">
        <div class="icon-box icon-box-left wow fadeIn" data-wow-delay="400ms" style="visibility: visible; animation-delay: 400ms; animation-name: fadeIn;">
          <div class="icon-box-icon"><span class="fa fa-briefcase"></span></div>
          <a href="/vacancy"><h3>@lang('common.recruiting')</h3></a>
          <p>@lang('common.recruitingdesc')</p>
        </div>
      </div>
      <div class="col-md-4 col-sm-12 header-each">
        <div class="icon-box icon-box-left wow fadeIn" data-wow-delay="600ms" style="visibility: visible; animation-delay: 600ms; animation-name: fadeIn;">
          <div class="icon-box-icon"><span class="fas fa-clipboard-list"></span> </div>
          <a href="/common/migratsionnyy-audit"><h3>@lang('common.migration')</h3></a>
          <p>@lang('common.migrationdesc')</p>
        </div>
      </div>
      <div class="col-md-4 col-sm-12 header-each">
        <div class="icon-box icon-box-left wow fadeIn" data-wow-delay="800ms" style="visibility: visible; animation-delay: 800ms; animation-name: fadeIn;">
          <div class="icon-box-icon"><span class="far fa-newspaper"></span></div>
          <a href="/lawnews"><h3>@lang('common.lawnews')</h3></a>
          <p>@lang('common.lawnewsdesc')</p>
        </div>
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
        <div class="col-lg-6 col-md-6 services-body-area">
          <div class="detail-inner tc-padding">
            <img class="mb-5 mt-5 img-responsive animated slideInUp wow" src="/assets/img/a3group-main.svg" alt="A3 Group Law Firm">
            {!! $value->homepage_description !!}
          </div>
        </div>
        <div class="col-lg-6 col-md-6 services-body-area">
          <h2>@lang('common.lawarticles')</h2>
          <ul class="list-unstyled p-3 mb-3">
            @foreach ($lawArticlesData as $value)
            <li class="mb-2">
              <p class="mb-0"><a href="/law-articles/{{ $value->law_articles_slug }}">{{ $value->law_articles_title }}</a></p>
            </li>
            @endforeach
          </ul>
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
          <h2><a href="/recommendations">@lang('common.reviews')</a></h2>
        </div>
      </div>
    </div>
    <div class="row">
      @foreach ($RecommendationsData as $value)
      <div class="col-sm-4 g-text-color-1 m-b-50">
        @if($value->recommendations_full != '')
        <div class="text-center img-responsive">
          <a href="/recommendations/{{ $value->recommendations_slug }}">
            <img src="{{ asset('uploads') . '/'.  $value->recommendations_image }}" alt="{{ $value->recommendations_title }}">
          </a>
        </div>
        <a href="/recommendations/{{ $value->recommendations_slug }}"><h3 class="mt-5 text-center"><strong>{{ $value->recommendations_title }}</strong></h3></a>
        @else
        <div class="text-center img-responsive">
          <img src="{{ asset('uploads') . '/'.  $value->recommendations_image }}" alt="{{ $value->recommendations_title }}">
        </div>
        <h3 class="mt-5 text-center"><strong>{{ $value->recommendations_title }}</strong></h3>
        @endif
        <p>{{ $value->recommendations_short }}</p>
      </div>
      @endforeach
    </div>
  </div>
</section>
<section class="spec" id="blog">
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="spec-title text-center">
          <h2>@lang('common.news')</h2>
          <p class="font-serif">@lang('common.newsdesc')</p>
        </div>
      </div>
    </div>
    <div class="row blog-grid">
      @foreach ($articlesData as $value)
      <div class="col-md-3 post-item">
        <article class="post">
          <div class="post-wrapper">
            <div class="post-header">
              <h2 class="post-title">
                <a href="/news/{{ $value->news_slug }}">{{ str_limit(strip_tags($value->news_title), $limit = 60, $end = '...') }}</a>
              </h2>
              <ul class="post-meta h5">
                <li>{{ Carbon\Carbon::parse($value->cat_date)->formatLocalized('%d %b %Y') }}</li>
                <li><a href="/category/{{ $value->newscategories->cat_slug }}">{{ $value->newscategories->cat_title }}</a></li>
              </ul>
            </div>
            <div class="post-content">
              <p>{{ str_limit(strip_tags($value->news_body), $limit = 150, $end = '...') }}</p>
            </div>
            <div class="post-more"><a href="#">@lang('common.readmore') →</a></div>
          </div>
        </article>
      </div>
      @endforeach
    </div>
    <div class="row m-t-50">
      <div class="col-md-12">
        <div class="text-center"><a class="btn btn-lg btn-brand" href="/news">@lang('common.allnews')</a></div>
      </div>
    </div>
  </div>
</section>
<section class="spec spec-gray" id="contactus">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="blog-sidebar-heading mb-0"><h4>@lang('common.practice')</h4></div>
        <ul class="list-unstyled blog-border-white p-3 mb-3">
          @foreach ($practicesData as $value)
          <li class="mb-2">
            <p class="mb-0"><a href="/practice/{{ $value->practice_slug }}">{{ $value->practice_title }}</a></p>
          </li>
          @endforeach
        </ul>
        <div class="choose-us-item">
          <div class="item-1">
            <div class="icon-box-icon pull-left mr-3"><span class="fas fa-gavel"></span></div>
            <h3><a href="/practice">@lang('common.complex')</a></h3>
            <p>@lang('common.complexdesc')</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 contact-box-law">
        <div class="contact-style-heading">
          <h3>@lang('common.letstalk2')</h3>
        </div>
        @include('includes.form')
      </div>
    </div>
  </div>
</section>
@stop
