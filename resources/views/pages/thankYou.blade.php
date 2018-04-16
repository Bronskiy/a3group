@extends('layouts.default')

@section('meta_title', __('common.thanks'))
@section('content')
<section class="spec pb-0">
  <div class="container">
    <div class="title text-center wow fadeInUp" data-wow-delay="300ms">
      <h4>@lang('common.messagereceived')</h4>
      <h1>@lang('common.thanks')</h1>
      <hr>
    </div>
    <div class="section-content">
      <div class="row">
        <div class="col-md-8 ml-md-auto mr-auto text-center">
          <p class="wow fadeInUp" data-wow-delay="600ms">@lang('common.ourresponse')</p>
        </div>
      </div>
    </div>
  </div>
</section>
@stop
