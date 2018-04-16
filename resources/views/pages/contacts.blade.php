@extends('layouts.default')
@if ($Name == 'default')
<?php
$title =  __('common.contacts');
?>
@elseif ($Name == 'moscow')
<?php
$title =  __('common.moscowoffice');
?>
@elseif ($Name == 'kaluga')
<?php
$title =  __('common.kalugaoffice');
?>
@else
<?php
header('Location: /404');
exit();
?>
@endif
@section('meta_title', $title)
@section('content')
<section class="spec-page-title">
  <div class="container">
    <div class="row-page-title">
      <div class="page-title-captions">
        <h1 class="h5">{{ $title }}</h1>
      </div>
      <div class="page-title-secondary">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">@lang('common.home')</a></li>
          <li class="breadcrumb-item active">@lang('common.contacts')</li>
        </ol>
      </div>
    </div>
  </div>
</section>
@foreach ($сommonVariablesData as $value)
@if ($Name != 'default')
<section class="spec pt-0">
  <div class="container-indent">
    <div class="row">
      <div class="col-md-12">
        @if ($Name == 'moscow')
        {!! $value->moscow_map !!}
        @elseif ($Name == 'kaluga')
        {!! $value->kaluga_map !!}
        @endif
      </div>
    </div>
  </div>
</section>
<section class="spec">
  <div class="container">
    <div class="row">
      <div class="col-md-9 mb-5">
        <div class="special-heading"><h2>@lang('common.letstalk')</h2></div>
        @include('includes.form')
      </div>
      <div class="col-md-3">
        <div class="special-heading"><h2>@lang('common.moscowoffice')</h2></div>
        <ul class="list-unstyled">
          <li><i class="fa fa-home mr-1"></i>{{ $value->moscow_address }}</li>
          <li><i class="fa fa-envelope mr-1"></i> <a href="mailto:{{ $value->moscow_email }}">{{ $value->moscow_email }}</a></li>
          <li><i class="fa fa-phone mr-1"></i> {{ $value->moscow_phone }}</li>
        </ul>
      </div>
    </div>
  </div>
</section>
@else
<section class="spec">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="special-heading"><h2>@lang('common.moscowoffice')</h2></div>
        <div class="row">
          <div class="col-md-9">
            {!! $value->moscow_map !!}
          </div>
          <div class="col-md-3">
            <ul class="list-unstyled">
              <li><i class="fa fa-home mr-1"></i>{{ $value->moscow_address }}</li>
              <li><i class="fa fa-envelope mr-1"></i> <a href="mailto:{{ $value->moscow_email }}">{{ $value->moscow_email }}</a></li>
              <li><i class="fa fa-phone mr-1"></i> {{ $value->moscow_phone }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="spec">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="special-heading"><h2>@lang('common.kalugaoffice')</h2></div>
        <div class="row">
          <div class="col-md-9">
            {!! $value->kaluga_map !!}
          </div>
          <div class="col-md-3">
            <ul class="list-unstyled">
              <li><i class="fa fa-home mr-1"></i>{{ $value->kaluga_address }}</li>
              <li><i class="fa fa-envelope mr-1"></i> <a href="mailto:{{ $value->kaluga_email }}">{{ $value->kaluga_email }}</a></li>
              <li><i class="fa fa-phone mr-1"></i> {{ $value->kaluga_phone }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="spec">
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="spec-title text-center">
          <h2>@lang('common.letstalk')</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 offset-md-2">
        @include('includes.form')
      </div>
    </div>
  </div>
</section>
@endif
@endforeach
@stop
