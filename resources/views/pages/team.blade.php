@extends('layouts.default')

@section('content')
<section class="spec">
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="spec-title text-center">
          <h2>Our Team</h2>
          <p class="font-serif">Meet our team of proffesionals.</p>
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
@stop
