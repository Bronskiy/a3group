@extends('layouts.default')

@if ($PostsData->news_title)
<?php
$title = $PostsData->news_title;
?>
@elseif ($PostsData->law_articles_title)
<?php
$title = $PostsData->law_articles_title;
?>
@elseif ($PostsData->lawnews_title)
<?php
$title = $PostsData->lawnews_title;
?>
@elseif ($PostsData->common_title)
<?php
$title = $PostsData->common_title;
?>
@endif

@section('meta_title', $title)
@section('content')
<section class="spec-page-title">
  <div class="container">
    <div class="row-page-title">
      <div class="page-title-secondary">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">@lang('common.home')</a></li>
          @if ($PostsData->news_title)
          <li class="breadcrumb-item"><a href="/news">@lang('common.news')</a></li>
          @elseif ($PostsData->lawnews_title)
          <li class="breadcrumb-item"><a href="/lawnews">@lang('common.lawnews')</a></li>
          @endif
          <li class="breadcrumb-item active">{{ str_limit($title, $limit = 50, $end = '...') }}</li>
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
            <h1 class="post-title">{{ $title }}</h1>
            <ul class="post-meta h5">
              @isset($PostsData->cat_date)
              <li><i class="far fa-clock"></i> {{ \DateTime::createFromFormat("d-m-Y", $PostsData->cat_date)->format("M jS, Y") }}</li>
              @endisset
              @isset($PostsData->newscategories)
              <li><a href="/category/{{ $PostsData->newscategories->cat_slug }}">{{ $PostsData->newscategories->cat_title }}</a></li>
              @endisset
              @isset($PostsData->lawnewscategories)
              <li><a href="/lawnews-category/{{ $PostsData->lawnewscategories->lawnews_cat_slug }}">{{ $PostsData->lawnewscategories->lawnews_cat_title }}</a></li>
              @endisset
            </ul>
          </div>
          <div class="post-content">
            @isset($PostsData->news_body)
            {!! $PostsData->news_body !!}
            @endisset

            @isset($PostsData->law_articles_description)
            {!! $PostsData->law_articles_description !!}
            @endisset

            @isset($PostsData->lawnews_description)
            {!! $PostsData->lawnews_description !!}
            @endisset
            
            @isset($PostsData->common_description)
            {!! $PostsData->common_description !!}
            @endisset
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
                    <li><i class="far fa-clock"></i> {{ \DateTime::createFromFormat("d-m-Y", $value->cat_date)->format("M jS, Y") }}</li>
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
