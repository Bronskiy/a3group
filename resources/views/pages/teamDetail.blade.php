@extends('layouts.default')

@section('content')
<section class="spec-page-title">
  <div class="container">
    <div class="row-page-title">
      <div class="page-title-secondary">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Главная</a></li>
          <li class="breadcrumb-item"><a href="/team">Команда</a></li>
          <li class="breadcrumb-item"><a href="/team-category/{{ $TeamData->teamcategories->team_slug }}">{{ $TeamData->teamcategories->team_cat }}</a></li>
          <li class="breadcrumb-item active">{{ $TeamData->member_name }}</li>
        </ol>
      </div>
    </div>
  </div>
</section>

<section class="spec">
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-6">
        @if($TeamData->member_image != '')
        <div class="img-responsive">
          <img class="img-responsive" src="{{ asset('uploads') . '/'.  $TeamData->member_image }}" alt="{{ $TeamData->member_name }}">
        </div>
        @endif
      </div>
      <div class="col-lg-9 col-md-9 col-sm-6">
        <div class="spec-title mt-5">
          <h2>{{ $TeamData->member_name }}</h2>
        </div>
        <p>{{ $TeamData->member_position }}</p>
        <p><a href="mailto:{{ $TeamData->member_email }}">{{ $TeamData->member_email }}</a></p>
        {!! $TeamData->member_about !!}

      </div>
    </div>
  </div>
</section>
@stop
