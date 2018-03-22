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

{!! Form::model($teammembers, array('files' => true, 'class' => 'form-horizontal', 'id' => 'form-with-validation', 'method' => 'PATCH', 'route' => array(config('quickadmin.route').'.teammembers.update', $teammembers->id))) !!}

<div class="form-group">
    {!! Form::label('member_name', 'Имя*', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('member_name', old('member_name',$teammembers->member_name), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('member_slug', 'URL*', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('member_slug', old('member_slug',$teammembers->member_slug), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('member_image', 'Фотография', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::file('member_image') !!}
        {!! Form::hidden('member_image_w', 4096) !!}
        {!! Form::hidden('member_image_h', 4096) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('teamcategories_id', 'Офис*', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::select('teamcategories_id', $teamcategories, old('teamcategories_id',$teammembers->teamcategories_id), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('member_about', 'О сотруднике', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::textarea('member_about', old('member_about',$teammembers->member_about), array('class'=>'form-control ckeditor')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('member_email', 'Email', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::email('member_email', old('member_email',$teammembers->member_email), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('member_position', 'Должность', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::textarea('member_position', old('member_position',$teammembers->member_position), array('class'=>'form-control')) !!}

    </div>
</div>
<div class="form-group">
    {!! Form::label('language_id', 'Язык*', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::select('language_id', $language, old('language_id',$teammembers->language_id), array('class'=>'form-control')) !!}

    </div>
</div>
<div class="form-group">
    <div class="col-sm-10 col-sm-offset-2">
      {!! Form::submit(trans('quickadmin::templates.templates-view_edit-update'), array('class' => 'btn btn-primary')) !!}
      {!! link_to_route(config('quickadmin.route').'.teammembers.index', trans('quickadmin::templates.templates-view_edit-cancel'), null, array('class' => 'btn btn-default')) !!}
    </div>
</div>

{!! Form::close() !!}

@endsection
