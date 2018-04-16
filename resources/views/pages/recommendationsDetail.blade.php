@extends('layouts.default')

@section('meta_title', $RecommendationsData->recommendations_title)
@section('content')
<section class="spec-page-title">
  <div class="container">
    <div class="row-page-title">
      <div class="page-title-secondary">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">@lang('common.home')</a></li>
          <li class="breadcrumb-item"><a href="/recommendations">@lang('common.reviews')</a></li>
          <li class="breadcrumb-item active">{{ $RecommendationsData->recommendations_title }}</li>
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
          <div class="m-b-10 text-center">
            <img src="{{ asset('uploads') . '/'.  $RecommendationsData->recommendations_image }}" alt="{{ $RecommendationsData->recommendations_title }}">
          </div>
          <div class="post-header">
            <h1 class="post-title">{{ $RecommendationsData->recommendations_title }}</h1>
          </div>
          <div class="post-content">
            {!! $RecommendationsData->recommendations_full !!}
          </div>
        </article>
      </div>
      @include('includes.sidebar')
    </div>
  </div>
</section>
@stop
