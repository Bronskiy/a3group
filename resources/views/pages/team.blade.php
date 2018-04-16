@extends('layouts.default')
@if ($Name == 'default')
<?php
$title =  __('common.ourteam');
?>
@else
<?php
$title = $Category->team_cat;
?>
@endif
@section('meta_title', $title)
@section('content')
@if ($Name == 'default')
<section class="spec spec-divider-bottom">
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="spec-title text-center">
          <h2>@lang('common.ourteam')</h2>
        </div>
      </div>
    </div>
    <div class="row">
      @foreach ($TeamData as $value)
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-6 mt-3 mb-3">
            <h2>{{ $value->team_cat}}</h2>
            <p>@lang('common.teamdesc')</p>
            <strong><a class="btn btn-brand" href="/team-category/{{ $value->team_slug }}">@lang('common.readmore')</a></strong>
          </div>
          <div class="col-md-6 mt-3">
            <img src="/assets/img/{{ $value->team_slug }}.jpg" alt="img">
          </div>
        </div>
      </div>
      @endforeach
    </div>
  </div>
</section>
@else
<section class="spec">
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="spec-title text-center">
          <h2>@lang('common.ourteam')</h2>
          <p class="font-serif">{{$Category->team_cat}}</p>
        </div>
      </div>
    </div>
    <div class="row text-center">
      @foreach ($TeamData as $value)
      <div class="col-md-3 col-sm-6 m-b-30">
        @if($value->member_image != '')
        <div class="team-img">
          <a href="/team/{{ $value->member_slug }}"><img class="img-responsive" src="{{ asset('uploads') . '/'.  $value->member_image }}" alt="{{ $value->member_name }}"></a>
        </div>
        @endif
        <div class="icon-box-title text-uppercase mb-3">
          <a href="/team/{{ $value->member_slug }}"><h4>{{ $value->member_name }}</h4></a>
        </div>
        <h4 class="font-serif">{{ $value->member_position }}</h4>
        <p><a href="mailto:{{ $value->member_email }}">{{ $value->member_email }}</a></p>
      </div>
      @endforeach
    </div>
  </div>
</section>
@endif
@stop
