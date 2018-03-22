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

{!! Form::model($homepage, array('class' => 'form-horizontal', 'id' => 'form-with-validation', 'method' => 'PATCH', 'route' => array(config('quickadmin.route').'.homepage.update', $homepage->id))) !!}

<div class="form-group">
    {!! Form::label('homepage_title', 'Название', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('homepage_title', old('homepage_title',$homepage->homepage_title), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('homepage_description', 'Текст', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::textarea('homepage_description', old('homepage_description',$homepage->homepage_description), array('class'=>'form-control ckeditor')) !!}

    </div>
</div>
<div class="form-group">
    {!! Form::label('language_id', 'Язык*', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::select('language_id', $language, old('language_id',$homepage->language_id), array('class'=>'form-control')) !!}

    </div>
</div>
<div class="form-group">
    <div class="col-sm-10 col-sm-offset-2">
      {!! Form::submit(trans('quickadmin::templates.templates-view_edit-update'), array('class' => 'btn btn-primary')) !!}
      {!! link_to_route(config('quickadmin.route').'.homepage.index', trans('quickadmin::templates.templates-view_edit-cancel'), null, array('class' => 'btn btn-default')) !!}
    </div>
</div>

{!! Form::close() !!}

@endsection
