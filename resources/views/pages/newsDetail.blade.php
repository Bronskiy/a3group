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

      <!-- Sidebar-->
      <div class="col-lg-4 col-12 mt-5">
        <div class="blog-sidebar-heading mb-0"><h2>Trending</h2></div>
        <!-- Trending -->
        <ul class="list-unstyled blog-border-white p-3 mb-3">
          <li class="mb-2">
            <p class="mb-0"><a href="#">Praesent tincidunt ornare tortor</a></p>
            <small>Nov 10, 2017 / <a href="#">Design,</a> <a href="#">App</a></small>
          </li>
        </ul>
        <!-- End Trending -->

        <div class="blog-sidebar-heading"><h2>Latest Posts</h2></div>
        <!-- Latest Links -->
        <ul class="list-unstyled blog-border-white p-3 mb-3">
          <li>
            <div class="blog-latest-post">
              <h3><a href="#">How to Learn HTML5..</a></h3>
            </div>
            <small>Nov 10, 2017 / <a href="#">Tuts,</a> <a href="#">Bootstrap</a></small>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam odio leo.</p>
          </li>
        </ul>
        <!-- End Latest Links -->

        <div class="blog-sidebar-heading"><h2>Tags</h2></div>
        <!-- Tags v2 -->
        <ul class="list-inline blog-border-white p-3 mb-3">
          <span class="ml-2"><a href="#">Web Design</a></span>
          <span class="ml-2"><a href="#">Responsive</a></span>
          <span class="ml-2"><a href="#">tuts</a></span>
        </ul>
        <!-- End Tags v2 -->

      </div>
      <!-- Sidebar end-->

    </div>
  </div>
</section>
<!-- Blog end-->

@stop
