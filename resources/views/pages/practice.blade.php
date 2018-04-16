@extends('layouts.default')
@section('meta_title', __('common.practice'))

@section('content')
<section class="spec-page-title">
  <div class="container">
    <div class="row-page-title">
      <div class="page-title-captions">
        <h1 class="h5">@lang('common.practice')</h1>
      </div>
      <div class="page-title-secondary">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">@lang('common.home')</a></li>
          <li class="breadcrumb-item active">@lang('common.practice')</li>
        </ol>
      </div>
    </div>
  </div>
</section>
<section class="spec">
  <div class="container">
    <div class="row">
      @foreach ($PracticeData as $value)
      <div class="col-md-4 col-sm-6 my-5">
        <div class="text-center mt-3">
          <a href="/practice/{{ $value->practice_slug }}"><h5 class="text-uppercase">{{ $value->practice_title }}</h5></a>
        </div>
        <div class="blog-info text-center">
          <p>{{ str_limit(strip_tags(preg_replace('#<a.*?>.*?</a>#i', '', $value->description)), $limit = 100, $end = '...') }}</p>
          <a href="/practice/{{ $value->practice_slug }}">@lang('common.readmore') →</a>
        </div>
      </div>
      @endforeach
    </div>
  </div>
</section>
@stop
