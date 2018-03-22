@extends('layouts.default')

@section('content')
<section class="spec-page-title">
  <div class="container">
    <div class="row-page-title">
      <div class="page-title-secondary">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Главная</a></li>
          <li class="breadcrumb-item"><a href="/news">Новости</a></li>
        </ol>
      </div>
    </div>
  </div>
</section>

<!-- Blog-->
<section class="spec pt-0">
  <div class="container">
    <div class="row">
      <!-- Content-->
      <div class="col-lg-8 mt-5">

        @foreach ($articlesData as $value)
        <!-- Post-->
        <article class="post p-3 blog-border-white">
          <div class="post-wrapper">
            <div class="post-header">
              <h2 class="post-title"><a href="/news/{{ $value->news_slug }}">{{ $value->news_title }}</a></h2>
              <ul class="post-meta h5">
                <li>{{ \DateTime::createFromFormat("d-m-Y", $value->cat_date)->format("M jS, Y") }}</li>
                <li><a href="/category/{{ $value->newscategories->cat_slug }}">{{ $value->newscategories->cat_title }}</a></li>
              </ul>
            </div>
            <div class="post-content">
              <p>{{ str_limit(strip_tags($value->news_body), $limit = 300, $end = '...') }}</p>
            </div>
            <div class="post-more"><a href="/news/{{ $value->news_slug }}">Подробнее →</a></div>
          </div>
        </article>
        <!-- Post end-->
        @endforeach


      </div>
      <!-- Content end-->

      <!-- Sidebar-->
      <div class="col-lg-4 col-12 mt-5">
        <div class="blog-sidebar-heading mb-0"><h2>Trending</h2></div>
        <!-- Trending -->
        <ul class="list-unstyled blog-border-white p-3 mb-3">
          <li class="mb-2">
            <p class="mb-0"><a href="#">Praesent tincidunt ornare tortor</a></p>
            <small>Nov 10, 2017 / <a href="#">Design,</a> <a href="#">App</a></small>
          </li>
          <li class="mb-2">
            <p class="mb-0"><a href="#">Nunc leo leo, faucibus non gravida</a></p>
            <small>Nov 10, 2017 / <a href="#">Marketing</a></small>
          </li>
          <li class="mb-2">
            <p class="mb-0"><a href="#">Proin dapibus ornare magna.</a></p>
            <small>Nov 10, 2017 / <a href="#">Tech,</a> <a href="#">Computers</a></small>
          </li>
          <li class="mb-2">
            <p class="mb-0"><a href="#">Fusce at diam ante.</a></p>
            <small>Nov 10, 2017 / <a href="#">Tuts</a></small>
          </li>
          <li class="mb-2">
            <p class="mb-0"><a href="#">Donec quis consequat magna...</a></p>
            <small>Nov 10, 2017 / <a href="#">Tuts,</a> <a href="#">WordPress</a></small>
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
          <li>
            <div class="blog-latest-post">
              <h3><a href="#">Why Learn HTML5</a></h3>
            </div>
            <small>Nov 10, 2017 / <a href="#">Tuts</a></small>
            <p>Pellentesque efficitur blandit dui, porta cursus velit imperdiet sit amet.</p>
          </li>
          <li>
            <div class="blog-latest-post">
              <h3><a href="#">Why Learn Joomla</a></h3>
            </div>
            <small>Nov 10, 2017 / <a href="#">Tech,</a> <a href="#">Laptops</a></small>
            <p>Phasellus ullamcorper pellentesque ex. Cras venenatis elit orci, vitae dictum elit egestas a. Nunc nec auctor mauris, semper scelerisque nibh.</p>
          </li>
          <li>
            <div class="blog-latest-post">
              <h3><a href="#">Why Learn Drupal</a></h3>
            </div>
            <small>Nov 10, 2017 / <a href="#">SEO,</a> <a href="#">Google</a></small>
            <p>Integer vehicula sed justo ac dapibus. In sodales nunc non varius accumsan.</p>
          </li>
        </ul>
        <!-- End Latest Links -->

        <div class="blog-sidebar-heading"><h2>Tags</h2></div>
        <!-- Tags v2 -->
        <div class="list-inline blog-border-white p-3 mb-3">
          <span class="ml-2"><a href="#">Web Design</a></span>
          <span class="ml-2"><a href="#">Responsive</a></span>
          <span class="ml-2"><a href="#">tuts</a></span>
          <span class="ml-2"><a href="#">Wordpress</a></span>
          <span class="ml-2"><a href="#">Bootstrap</a></span>
          <span class="ml-2"><a href="#">Tech</a></span>
          <span class="ml-2"><a href="#">New</a></span>
          <span class="ml-2"><a href="#">Latest</a></span>
          <span class="ml-2"><a href="#">Marketing</a></span>
          <span class="ml-2"><a href="#">Web Hosting</a></span>
          <span class="ml-2"><a href="#">SEO</a></span>
          <span class="ml-2"><a href="#">xBootstrap</a></span>
        </div>
        <!-- End Tags v2 -->


        <div class="blog-sidebar-heading"><h2>Newsletter</h2></div>
        <!-- Blog Newsletter -->
        <div class="blog-newsletter blog-border-white p-3">
          <p>Subscribe to our newsletter for future updates.</p>
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Email">
            <span class="input-group-btn">
              <button class="btn btn-primary" type="button">Subscribe</button>
            </span>
          </div>
        </div>
        <!-- End Blog Newsletter -->
      </div>
      <!-- Sidebar end-->
    </div>
  </div>
</section>
<!-- Blog end-->

<!-- Pagination-->
<section class="spec-sm spec-gray">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <nav aria-label="Page navigation">
          <ul class="pagination h4">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">»</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</section>
<!-- Pagination end-->
@stop
