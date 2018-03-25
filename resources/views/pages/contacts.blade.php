@extends('layouts.default')

@section('content')
<!-- Page Header-->
<section class="spec-page-title">
  <div class="container">
    <div class="row-page-title">
      <div class="page-title-captions">
        <h1 class="h5">@lang('common.contacts')</h1>
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
<!-- Page Header end-->

<!-- Map -->
<section class="spec pt-0">
  <div class="container-indent">
    <div class="row">
      <div class="col-md-12">
        <iframe
        width="100%"
        height="450"
        frameborder="0" style="border:0"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCX7PShAXSiqvsXU_TSvrcSn7r9mZGEuz0
        &q=Space+Needle,Seattle+WA" allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
</section>
<!-- Map -->

<!-- Contact-->
<section class="spec">
  <div class="container">
    <div class="row">
      <div class="col-md-9 mb-5">
        <div class="special-heading"><h2>Contact Form</h2></div>
        <p>Et harum quidem rerum facilis est et expedita distinctio lorem ipsum dolor sit amet, consectetur adipiscing elit landitiis.</p><br>

        <form action="#" method="post" id="sky-form3" class="sky-form contact-style" novalidate="novalidate">
          <fieldset>
            <label class="mt-2">Name :</label>
            <div class="row sky-space-20">
              <div class="col-md-7 col-md-offset-0">
                <input type="text" name="name" id="name" class="form-control">
              </div>
            </div>

            <label class="mt-2">Email :</label>
            <div class="row">
              <div class="col-md-7 col-md-offset-0">
                <input type="text" name="email" id="email" class="form-control">

              </div>
            </div>

            <label class="mt-2">Message :</label>
            <div class="row mb-3">
              <div class="col-md-11 col-md-offset-0">
                <textarea rows="8" name="message" id="message" class="form-control"></textarea>
              </div>
            </div>

            <p><button type="submit" class="btn btn-primary">Send Message</button></p>
          </fieldset>
        </form>


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
        {!! Form::open(array('url' => 'contacts/store', 'id' => 'form-with-validation', 'class' => 'form-horizontal mt50')) !!}
        <div class="row-input">
          {!! Form::label('contact_name', 'Name', array('class'=>'control-label required-label')) !!}
          {!! Form::text('contact_name', old('contact_name'), array('class'=>'','required' => '','placeholder' => 'Please provide your first and last name')) !!}
        </div>
        <div class="row-input">
          {!! Form::label('contact_phone', 'Phone', array('class'=>'control-label required-label')) !!}
          {!! Form::text('contact_phone', old('contact_phone'), array('class'=>'','required' => '','placeholder' => 'Please provide your land line or mobile phone number')) !!}

        </div>
        <div class="row-input">
          {!! Form::label('contact_email', 'Email', array('class'=>'control-label required-label')) !!}
          {!! Form::email('contact_email', old('contact_email'), array('class'=>'','placeholder' => 'Please provide your email address')) !!}
        </div>
        <div class="row-input">
          {!! Form::label('contact_text', 'Enquiry', array('class'=>'control-label')) !!}
          {!! Form::textarea('contact_text', old('contact_text'), array('class'=>'','placeholder' => 'We will follow up on your enquiry with a telephone call. Please let us know convenient times to call.')) !!}

        </div>

        <div class="row-input mt25">
          <label for="g-recaptcha" class="control-label required-label">Captcha</label>
          {!! NoCaptcha::display() !!}
        </div>

        <div class="form-group mt25">
          {!! Form::submit( 'Submit Form' , array('class' => 'btn btn-primary')) !!}
        </div>

        {!! Form::close() !!}
      </div><!--/col-md-9-->

      <div class="col-md-3">
        <!-- Contacts -->
        <div class="special-heading"><h2>Contacts</h2></div>
        <ul class="list-unstyled">
          <li><i class="fa fa-home mr-1"></i>123 Streat, City ABC B Town UK</li>
          <li><i class="fa fa-envelope mr-1"></i>support@example.com</li>
          <li><i class="fa fa-phone mr-1"></i>1(222) 4567 8910</li>
          <li><a href="#"><i class="fa fa-globe mr-1"></i>http://www.xbootstrap.com</a></li>
        </ul>

        <!-- Working Hours -->
        <div class="special-heading"><h2>Working Hours</h2></div>
        <ul class="list-unstyled margin-bottom-30">
          <li><strong>Monday-Friday:</strong> 9am to 5pm</li>
          <li><strong>Saturday:</strong> 11am to 3pm</li>
          <li><strong>Sunday:</strong> Closed</li>
        </ul>

        <!-- Why us? -->
        <div class="special-heading"><h2>Why us?</h2></div>
        <p>Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
        <ul class="list-unstyled">
          <li><i class="fa fa-check color-blue mr-1"></i> Odio dignissimos ducimus</li>
          <li><i class="fa fa-check color-blue mr-1"></i> Blanditiis praesentium volup</li>
          <li><i class="fa fa-check color-blue mr-1"></i> Eos et accusamus</li>
        </ul>
      </div><!--/col-md-3-->
    </div>
  </div>
</section>
<!-- Contact end-->
@stop
