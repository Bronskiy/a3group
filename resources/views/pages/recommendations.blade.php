@extends('layouts.default')
@section('meta_title', __('common.reviews'))

@section('content')
<section class="spec-page-title">
  <div class="container">
    <div class="row-page-title">
      <div class="page-title-captions">
        <h1 class="h5">@lang('common.reviews')</h1>
      </div>
      <div class="page-title-secondary">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">@lang('common.home')</a></li>
          <li class="breadcrumb-item active">@lang('common.reviews')</li>
        </ol>
      </div>
    </div>
  </div>
</section>
<section class="spec" id="about">
  <div class="container">
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
@stop
