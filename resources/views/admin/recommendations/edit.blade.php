@extends('admin.layouts.master')

@section('content')

<div class="row">
    <div class="col-sm-10 col-sm-offset-2">
        <h1>{{ trans('quickadmin::templates.templates-view_edit-edit') }}</h1>

        @if ($errors->any())
        	<div class="alert alert-danger">
        	    <ul>
                    {!! implode('', $errors->all('<li class="error">:message</li>')) !!}
                </ul>
        	</div>
        @endif
    </div>
</div>

{!! Form::model($recommendations, array('files' => true, 'class' => 'form-horizontal', 'id' => 'form-with-validation', 'method' => 'PATCH', 'route' => array(config('quickadmin.route').'.recommendations.update', $recommendations->id))) !!}

<div class="form-group">
    {!! Form::label('recommendations_title', 'Название*', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('recommendations_title', old('recommendations_title',$recommendations->recommendations_title), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('recommendations_slug', 'URL*', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('recommendations_slug', old('recommendations_slug',$recommendations->recommendations_slug), array('class'=>'form-control')) !!}

    </div>
</div>
<div class="form-group">
    {!! Form::label('recommendations_image', 'Логотип', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::file('recommendations_image') !!}
        {!! Form::hidden('recommendations_image_w', 4096) !!}
        {!! Form::hidden('recommendations_image_h', 4096) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('recommendations_short', 'Краткое описание', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::textarea('recommendations_short', old('recommendations_short',$recommendations->recommendations_short), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('recommendations_full', 'Полный текст', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::textarea('recommendations_full', old('recommendations_full',$recommendations->recommendations_full), array('class'=>'form-control ckeditor')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('recommendations_file', 'Файл', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::file('recommendations_file') !!}

    </div>
</div>
<div class="form-group">
    {!! Form::label('language_id', 'Язык*', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::select('language_id', $language, old('language_id',$recommendations->language_id), array('class'=>'form-control')) !!}

    </div>
</div>
<div class="form-group">
    <div class="col-sm-10 col-sm-offset-2">
      {!! Form::submit(trans('quickadmin::templates.templates-view_edit-update'), array('class' => 'btn btn-primary')) !!}
      {!! link_to_route(config('quickadmin.route').'.recommendations.index', trans('quickadmin::templates.templates-view_edit-cancel'), null, array('class' => 'btn btn-default')) !!}
    </div>
</div>

{!! Form::close() !!}

@endsection
