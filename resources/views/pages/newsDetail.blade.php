@extends('layouts.default')
@section('meta_title', $PostsData->news_title)

@section('content')

<section class="spec-page-title">
  <div class="container">
    <div class="row-page-title">
      <div class="page-title-secondary">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Главная</a></li>
          <li class="breadcrumb-item"><a href="/news">Новости</a></li>
          <li class="breadcrumb-item active">{{ $PostsData->news_title }}</li>
        </ol>
      </div>
    </div>
  </div>
</section>

<!-- Blog-->
<section class="spec">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 mt-5">
        <!-- Post-->
        <article class="post p-3 blog-border-white">
          <div class="post-header">
            <h1 class="post-title">{{ $PostsData->news_title }}</h1>
            <ul class="post-meta h5">
              <li><i class="fa fa-clock-o"></i> {{ \DateTime::createFromFormat("d-m-Y", $PostsData->cat_date)->format("M jS, Y") }}</li>
              <li><a href="/category/{{ $PostsData->newscategories->cat_slug }}">{{ $PostsData->newscategories->cat_title }}</a></li>
            </ul>
          </div>
          <div class="post-content">{!! $PostsData->news_body !!}</div>
        </article>
        <!-- Post end-->

        @if (!empty($Related))
        <!-- Recent Posts -->
        <div class="row">



          @foreach ($Related as $value)
          <div class="col-md-6 col-lg-6 post-item">
            <!-- Post-->
            <article class="post p-3 blog-border-white">
              <div class="post-wrapper">
                <div class="post-header">
                  <h2 class="post-title"><a href="/news/{{ $value->news_slug }}">{{ $value->news_title }}</a></h2>
                  <ul class="post-meta h5">
                    <li><a href="/category/{{ $PostsData->newscategories->cat_slug }}">{{ $PostsData->newscategories->cat_title }}</a></li>
                    <li>{{ \DateTime::createFromFormat("d-m-Y", $value->cat_date)->format("M jS, Y") }}</li>
                  </ul>
                </div>
                <div class="post-content">
                  <p>{{ str_limit(strip_tags($value->news_body), $limit = 300, $end = '...') }}</p>
                </div>
                <div class="post-more"><a href="/news/{{ $value->news_slug }}">Подробнее →</a></div>
              </div>
            </article>
            <!-- Post end-->
          </div>
          @endforeach

        </div>
        @endif
      </div>
      @include('includes.sidebar')


    </div>
  </div>
</section>
<!-- Blog end-->

@stop
