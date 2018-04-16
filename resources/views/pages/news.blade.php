@extends('layouts.default')
@section('meta_title', __('common.news'))

@section('content')
<section class="spec-page-title">
  <div class="container">
    <div class="row-page-title">
      <div class="page-title-secondary">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">@lang('common.home')</a></li>
          <li class="breadcrumb-item"><a href="/news">@lang('common.news')</a></li>
        </ol>
      </div>
    </div>
  </div>
</section>
<section class="spec pt-0">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 mt-5">
        @foreach ($PostsData as $value)
        <article class="post p-3 blog-border-white">
          <div class="post-wrapper">
            <div class="post-header">
              <h2 class="post-title">
                @if ($value->news_title)
                <a href="/news/{{ $value->news_slug }}">{{ $value->news_title }}</a>
                @elseif ($value->lawnews_title)
                <a href="/lawnews/{{ $value->lawnews_slug }}">{{ $value->lawnews_title }}</a>
                @endif
              </h2>
              <ul class="post-meta h5">
                @isset($value->cat_date)
                <li><i class="far fa-clock"></i> {{ \DateTime::createFromFormat("d-m-Y", $value->cat_date)->format("M jS, Y") }}</li>
                @endisset
                @isset($value->newscategories)
                <li><a href="/category/{{ $value->newscategories->cat_slug }}">{{ $value->newscategories->cat_title }}</a></li>
                @endisset
                @isset($value->lawnewscategories)
                <li><a href="/lawnews-category/{{ $value->lawnewscategories->lawnews_cat_slug }}">{{ $value->lawnewscategories->lawnews_cat_title }}</a></li>
                @endisset
              </ul>
            </div>
            <div class="post-content">
              <p>
                {{ str_limit(strip_tags($value->news_body), $limit = 300, $end = '...') }}
                {{ str_limit(strip_tags(preg_replace('#<a.*?>.*?</a>#i', '', $value->lawnews_description)), $limit = 300, $end = '...') }}
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
        @endforeach
      </div>
      @include('includes.sidebar')
    </div>
  </div>
</section>
<section class="spec-sm spec-gray">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <nav aria-label="Page navigation">
          {{ $PostsData->links() }}
        </nav>
      </div>
    </div>
  </div>
</section>
@stop
