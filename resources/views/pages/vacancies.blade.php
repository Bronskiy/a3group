@extends('layouts.default')

@section('meta_title', __('common.vacancy'))
@section('content')
<section class="spec-page-title">
  <div class="container">
    <div class="row-page-title">
      <div class="page-title-captions">
        <h1 class="h5">
          {{ $RecruitingData->recruiting_title }}
        </h1>
      </div>
      <div class="page-title-secondary">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">@lang('common.home')</a></li>
          <li class="breadcrumb-item"><a href="/vacancy">@lang('common.vacancy')</a></li>
        </ol>
      </div>
    </div>
  </div>
</section>
<section class="spec pt-0">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 mt-5">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#aboutus" role="tab" aria-controls="about" aria-selected="true" aria-expanded="true">@lang('common.recruiting')</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#ourservices" role="tab" aria-controls="services" aria-selected="false" aria-expanded="false">@lang('common.features')</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="process-tab" data-toggle="tab" href="#process" role="tab" aria-controls="process" aria-selected="false" aria-expanded="false">@lang('common.advices')</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="contacts-tab" data-toggle="tab" href="#contacts" role="tab" aria-controls="contacts" aria-selected="false" aria-expanded="false">@lang('common.contacts')</a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade active show" id="aboutus" role="tabpanel" aria-labelledby="about-tab" aria-expanded="true">
            <div class="py-5">
              {!! $RecruitingData->recruiting_about !!}
            </div>
          </div>
          <div class="tab-pane fade" id="ourservices" role="tabpanel" aria-labelledby="services-tab" aria-expanded="false">
            <div class="py-5">
              {!! $RecruitingData->recruiting_features !!}
            </div>
          </div>
          <div class="tab-pane fade" id="process" role="tabpanel" aria-labelledby="process-tab" aria-expanded="false">
            <div class="caption py-5">
              {!! $RecruitingData->recruiting_faq !!}
            </div>
          </div>
          <div class="tab-pane fade" id="contacts" role="tabpanel" aria-labelledby="contacts-tab" aria-expanded="false">
            <div class="caption py-5">
              {!! $RecruitingData->recruiting_contacts !!}
            </div>
          </div>
        </div>
        <div class="spec-title text-center mt-5">
          <h2>@lang('common.vacancy')</h2>
        </div>
        @foreach ($VacanciesData as $value)
        <div class="card col-md-12 card-padding">
          <div class="card-body card-body-pad">
            <h3 class="card-title"><a href="/vacancy/{{ $value->vacancy_slug }}">{{ $value->vacancy_title }}</a></h3>
            <p class="card-text">{{ $value->vacancy_company}}</p>
            <a href="/vacancy/{{ $value->vacancy_slug }}" class="btn btn-primary">@lang('common.readmore') →</a>
          </div>
        </div>
        @endforeach
      </div>
      @include('includes.sidebar')
    </div>
  </div>
</section>
@stop
