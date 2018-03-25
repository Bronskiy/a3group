@extends('layouts.default')
@foreach ($CommonData as $value)
@section('meta_title', $value->about_title)

@section('content')

<section class="spec-page-title">
  <div class="container">
    <div class="row-page-title">
      <div class="page-title-captions">
        <h1 class="h5">{{ $value->about_title }}</h1>
      </div>
      <div class="page-title-secondary">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Главная</a></li>
          <li class="breadcrumb-item active">{{ $value->about_title }}</li>
        </ol>
      </div>
    </div>
  </div>
</section>
<!-- Page Header end-->

<!---->
<section class="spec spec-divider-bottom pb-0">
  <div class="container">
    <!---->
    <div class="row m-b-100">

      <div class="col-lg-8 mt-5">
        {!! $value->about_description !!}
      </div>
      @include('includes.sidebar')

    </div>
    <!---->

  </div>
</section>


    @endforeach

    @stop
