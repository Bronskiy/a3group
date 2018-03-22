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

{!! Form::model($lawnewscategories, array('class' => 'form-horizontal', 'id' => 'form-with-validation', 'method' => 'PATCH', 'route' => array(config('quickadmin.route').'.lawnewscategories.update', $lawnewscategories->id))) !!}

<div class="form-group">
    {!! Form::label('lawnews_cat_title', 'Название*', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('lawnews_cat_title', old('lawnews_cat_title',$lawnewscategories->lawnews_cat_title), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('lawnews_cat_slug', 'URL*', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('lawnews_cat_slug', old('lawnews_cat_slug',$lawnewscategories->lawnews_cat_slug), array('class'=>'form-control')) !!}

    </div>
</div>
<div class="form-group">
    {!! Form::label('language_id', 'Язык*', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::select('language_id', $language, old('language_id',$lawnewscategories->language_id), array('class'=>'form-control')) !!}

    </div>
</div>
<div class="form-group">
    <div class="col-sm-10 col-sm-offset-2">
      {!! Form::submit(trans('quickadmin::templates.templates-view_edit-update'), array('class' => 'btn btn-primary')) !!}
      {!! link_to_route(config('quickadmin.route').'.lawnewscategories.index', trans('quickadmin::templates.templates-view_edit-cancel'), null, array('class' => 'btn btn-default')) !!}
    </div>
</div>

{!! Form::close() !!}

@endsection
