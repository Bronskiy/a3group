@extends('layouts.default')

@if ($PracticeData->practice_title)
<?php
$title = $PracticeData->practice_title;
?>
@elseif ($PracticeData->project_title)
<?php
$title = $PracticeData->project_title;
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
          <li class="breadcrumb-item"><a href="/practice">@lang('common.practice')</a></li>
          <li class="breadcrumb-item active">{{ $title }}</li>
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
          </div>
          <div class="post-content">
            @isset($PracticeData->description)
            {!! $PracticeData->description !!}
            @isset($PracticeData->projects)
            <div class="icon-box icon-box-left">
              <div class="icon-box-icon"><span class="fas fa-briefcase"></span></div>
              <div class="icon-box-title">
                <a href="/projects/{{ $PracticeData->projects->project_slug }}"><h3>@lang('common.projects')</h3></a>
              </div>
            </div>
            @endisset
            @endisset

            @isset($PracticeData->project_description)
            {!! $PracticeData->project_description !!}
            @endisset
          </div>
        </article>
      </div>
      @include('includes.sidebar')
    </div>
  </div>
</section>
@stop
