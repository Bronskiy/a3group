@extends('admin.layouts.master')

@section('content')

<div class="row">
    <div class="col-sm-10 col-sm-offset-2">
        <h1>{{ trans('quickadmin::templates.templates-view_create-add_new') }}</h1>

        @if ($errors->any())
        	<div class="alert alert-danger">
        	    <ul>
                    {!! implode('', $errors->all('<li class="error">:message</li>')) !!}
                </ul>
        	</div>
        @endif
    </div>
</div>

{!! Form::open(array('route' => config('quickadmin.route').'.commonvariables.store', 'id' => 'form-with-validation', 'class' => 'form-horizontal')) !!}

<div class="form-group">
    {!! Form::label('moscow_address', 'Адрес в Москве', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('moscow_address', old('moscow_address'), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('moscow_phone', 'Телефон в Москве', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('moscow_phone', old('moscow_phone'), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('moscow_email', 'Email в Москве', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::email('moscow_email', old('moscow_email'), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('moscow_map', 'Карта Москвы', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('moscow_map', old('moscow_map'), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('kaluga_address', 'Адрес в Калуге', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('kaluga_address', old('kaluga_address'), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('kaluga_phone', 'Телефон в Калуге', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('kaluga_phone', old('kaluga_phone'), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('kaluga_email', 'Email в Калуге', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::email('kaluga_email', old('kaluga_email'), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('kaluga_map', 'Карта Калуги', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('kaluga_map', old('kaluga_map'), array('class'=>'form-control')) !!}

    </div>
</div>
<div class="form-group">
    {!! Form::label('language_id', 'Язык*', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::select('language_id', $language, old('language_id'), array('class'=>'form-control')) !!}

    </div>
</div>
<div class="form-group">
    <div class="col-sm-10 col-sm-offset-2">
      {!! Form::submit( trans('quickadmin::templates.templates-view_create-create') , array('class' => 'btn btn-primary')) !!}
    </div>
</div>

{!! Form::close() !!}

@endsection
