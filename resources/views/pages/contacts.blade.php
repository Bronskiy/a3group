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
        {!! Form::open(array('url' => 'contacts/store', 'id' => 'form-with-validation', 'class' => 'form-horizontal mt50')) !!}
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              {!! Form::text('contact_name', old('contact_name'), array('class'=>'form-control','required' => '','placeholder' => 'Ваше имя')) !!}
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              {!! Form::text('contact_phone', old('contact_phone'), array('class'=>'form-control','required' => '','placeholder' => 'Ваш номер телефона')) !!}
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              {!! Form::email('contact_email', old('contact_email'), array('class'=>'form-control','placeholder' => 'Ваш email')) !!}
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              {!! Form::textarea('contact_text', old('contact_text'), array('class'=>'form-control','placeholder' => 'Ваше сообщение')) !!}
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <label class="control-label required-label">
                <input type="checkbox" required> @lang('common.dataprocessing')
              </label>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              {!! NoCaptcha::display() !!}
            </div>
          </div>
          <div class="col-md-12">
            <div class="text-center">
              {!! Form::submit( __('common.send') , array('class' => 'btn btn-primary')) !!}
            </div>
          </div>
        </div>
        {!! Form::close() !!}
        <div class="ajax-response text-center" id="contact-response">
          @if (count($errors) > 0)
          <div class="alert alert-danger">
            <strong>{{ trans('quickadmin::auth.whoops') }}</strong> {{ trans('quickadmin::auth.some_problems_with_input') }}
            <br><br>
            <ul>
              @foreach ($errors->all() as $error)
              <li>{{ $error }}</li>
              @endforeach
            </ul>
          </div>
          @endif
        </div>
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
        {!! Form::open(array('url' => 'contacts/store', 'id' => 'form-with-validation', 'class' => 'form-horizontal mt50')) !!}
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              {!! Form::text('contact_name', old('contact_name'), array('class'=>'form-control','required' => '','placeholder' => 'Ваше имя')) !!}
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              {!! Form::text('contact_phone', old('contact_phone'), array('class'=>'form-control','required' => '','placeholder' => 'Ваш номер телефона')) !!}
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              {!! Form::email('contact_email', old('contact_email'), array('class'=>'form-control','placeholder' => 'Ваш email')) !!}
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              {!! Form::textarea('contact_text', old('contact_text'), array('class'=>'form-control','placeholder' => 'Ваше сообщение')) !!}
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <label class="control-label required-label">
                <input type="checkbox" required> @lang('common.dataprocessing')
              </label>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              {!! NoCaptcha::display() !!}
            </div>
          </div>
          <div class="col-md-12">
            <div class="text-center">
              {!! Form::submit( __('common.send') , array('class' => 'btn btn-primary')) !!}
            </div>
          </div>
        </div>
        {!! Form::close() !!}
        <div class="ajax-response text-center" id="contact-response">
          @if (count($errors) > 0)
          <div class="alert alert-danger">
            <strong>{{ trans('quickadmin::auth.whoops') }}</strong> {{ trans('quickadmin::auth.some_problems_with_input') }}
            <br><br>
            <ul>
              @foreach ($errors->all() as $error)
              <li>{{ $error }}</li>
              @endforeach
            </ul>
          </div>
          @endif
        </div>
      </div>
    </div>
  </div>
</section>
@endif
@endforeach
@stop
