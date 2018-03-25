@extends('layouts.default')

@section('content')
@foreach ($TeamData as $value)
<a href="/team/{{ $value->member_slug }}"><h4>{{ $value->member_name }}</h4></a>

@endforeach

@stop
