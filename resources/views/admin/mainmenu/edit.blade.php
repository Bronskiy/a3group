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

{!! Form::model($mainmenu, array('class' => 'form-horizontal', 'id' => 'form-with-validation', 'method' => 'PATCH', 'route' => array(config('quickadmin.route').'.mainmenu.update', $mainmenu->id))) !!}

<div class="form-group">
    {!! Form::label('menu_title', 'Название', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('menu_title', old('menu_title',$mainmenu->menu_title), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('menu_link', 'Ссылка', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('menu_link', old('menu_link',$mainmenu->menu_link), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('menu_order', 'Порядок', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::text('menu_order', old('menu_order',$mainmenu->menu_order), array('class'=>'form-control')) !!}

    </div>
</div><div class="form-group">
    {!! Form::label('mainmenu_id', 'Родительский пункт', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::select('mainmenu_id', $mainmenu_p, old('mainmenu_id',$mainmenu->mainmenu_id), array('class'=>'form-control')) !!}

    </div>
</div>
<div class="form-group">
    {!! Form::label('menulang_id', 'Язык*', array('class'=>'col-sm-2 control-label')) !!}
    <div class="col-sm-10">
        {!! Form::select('menulang_id', $language, old('menulang_id',$mainmenu->menulang_id), array('class'=>'form-control')) !!}

    </div>
</div>
<div class="form-group">
    <div class="col-sm-10 col-sm-offset-2">
      {!! Form::submit(trans('quickadmin::templates.templates-view_edit-update'), array('class' => 'btn btn-primary')) !!}
      {!! link_to_route(config('quickadmin.route').'.mainmenu.index', trans('quickadmin::templates.templates-view_edit-cancel'), null, array('class' => 'btn btn-default')) !!}
    </div>
</div>

{!! Form::close() !!}

@endsection
