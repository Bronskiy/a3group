@extends('layouts.default')

@section('meta_title', $VacanciesData->vacancy_title)
@section('content')
<section class="spec-page-title">
  <div class="container">
    <div class="row-page-title">
      <div class="page-title-secondary">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">@lang('common.home')</a></li>
          <li class="breadcrumb-item"><a href="/vacancy">@lang('common.vacancy')</a></li>
          <li class="breadcrumb-item active">{{ $VacanciesData->vacancy_title }}</li>
        </ol>
      </div>
    </div>
  </div>
</section>
<section class="spec">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 mt-5">
        <article class="post p-3 blog-border-white">
          <div class="post-header">
            <h1 class="post-title">{{ $VacanciesData->vacancy_title }}</h1>
          </div>
          <div class="post-content">
            <h3>{{ $VacanciesData->vacancy_company }}</h3>
            {!! $VacanciesData->vacancy_description !!}
          </div>
        </article>
        @if (!empty($Related))
        <div class="row">
          @foreach ($Related as $value)
          <div class="col-md-6 col-lg-6 post-item">
            <article class="post p-3 blog-border-white">
              <div class="post-wrapper">
                <div class="post-header">
                  @isset($value->news_slug)
                  <h2 class="post-title"><a href="/news/{{ $value->news_slug }}">{{ $value->news_title }}</a></h2>
                  @endisset
                  @isset($value->lawnews_slug)
                  <h2 class="post-title"><a href="/lawnews/{{ $value->lawnews_slug }}">{{ $value->lawnews_title }}</a></h2>
                  @endisset
                  <ul class="post-meta h5">
                    @isset($value->newscategories)
                    <li><a href="/category/{{ $value->newscategories->cat_slug }}">{{ $value->newscategories->cat_title }}</a></li>
                    @endisset
                    @isset($value->lawnewscategories)
                    <li><a href="/lawnews-category/{{ $value->lawnewscategories->lawnews_cat_slug }}">{{ $value->lawnewscategories->lawnews_cat_title }}</a></li>
                    @endisset
                    <li>{{ \DateTime::createFromFormat("d-m-Y", $value->cat_date)->format("M jS, Y") }}</li>
                  </ul>
                </div>
                <div class="post-content">
                  <p>
                    {{ str_limit(strip_tags($value->news_body), $limit = 200, $end = '...') }}
                    {{ str_limit(strip_tags(preg_replace('#<a.*?>.*?</a>#i', '', $value->lawnews_description)), $limit = 200, $end = '...') }}
                  </p>
                </div>
                <div class="post-more">
                  @isset($value->news_slug)
                  <a href="/news/{{ $value->news_slug }}">@lang('common.readmore') →</a>
                  @endisset
                  @isset($value->lawnews_slug)
                  <a href="/lawnews/{{ $value->lawnews_slug }}">@lang('common.readmore') →</a>
                  @endisset
                </div>
              </div>
            </article>
          </div>
          @endforeach
        </div>
        @endif
      </div>
      @include('includes.sidebar')
    </div>
  </div>
</section>
@stop
