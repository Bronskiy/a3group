<div class="container">
  <div class="row">
    <div class="col-md-6 col-lg-3">
      @foreach ($сommonVariablesData as $value)
      <aside class="widget widget_text">
        <div class="textwidget">
          <img src="/assets/img/logo.svg" class="footer-logo">
          <h5 class="p-t-20">@lang('common.moscowoffice')</h5>
          <i class="fa fa-phone mr-2"></i> {{ $value->moscow_phone }} <br>
          <i class="fa fa-fax mr-2"></i> <a href="mailto:{{ $value->moscow_email }}">{{ $value->moscow_email }}</a> <br>
          <h5 class="p-t-20">@lang('common.kalugaoffice')</h5>
          <i class="fa fa-phone mr-2"></i> {{ $value->kaluga_phone }} <br>
          <i class="fa fa-fax mr-2"></i> <a href="mailto:{{ $value->kaluga_email }}">{{ $value->kaluga_email }}</a> <br>
        </div>
      </aside>
      @endforeach
    </div>
    <div class="col-md-6 col-lg-3">
      <aside class="widget widget_recent_entries">
        <div class="widget-title">
          <h5>@lang('common.news')</h5>
        </div>
        <div class="latest-posts">
          @foreach ($articlesData as $value)
          <article class="clearfix m-b-20">
            <div class="post-right">
              <h5><a href="/news/{{ $value->news_slug }}">{{ str_limit(strip_tags($value->news_title), $limit = 60, $end = '...') }}</a></h5>
              <p class="post-date mb-0 font-12">{{ Carbon\Carbon::parse($value->cat_date)->formatLocalized('%d %b %Y') }}</p>
            </div>
          </article>
          @endforeach
        </div>
      </aside>
    </div>
    <div class="col-md-6 col-lg-3">
      <aside class="widget widget_recent_entries">
        <div class="widget-title">
          <h5>@lang('common.lawnews')</h5>
        </div>
        <div class="latest-posts">
          @foreach ($lawnewsData as $value)
          <article class="clearfix m-b-20">
            <div class="post-right">
              <h5><a href="/lawnews/{{ $value->lawnews_slug }}">{{ str_limit(strip_tags($value->lawnews_title), $limit = 60, $end = '...') }}</a></h5>
              <p class="post-date mb-0 font-12">{{ Carbon\Carbon::parse($value->cat_date)->formatLocalized('%d %b %Y') }}</p>
            </div>
          </article>
          @endforeach
        </div>
      </aside>
    </div>
    <div class="col-md-6 col-lg-3">
      <aside class="widget">
        <div class="widget-title">
          <h5>@lang('common.info')</h5>
        </div>
        @if ( ! $footerMenuData->isEmpty() )
        <ul>
          @foreach ($footerMenuData->sortBy('footer_menu_order') as $value)
          <li class=" {{{ (Request::is(preg_replace('|/|','',$value->footer_menu_link)) ? 'active' : '') }}}"><a href="{{ $value->footer_menu_link }}">{{ $value->footer_menu_title }}</a></li>
          @endforeach
        </ul>
        @endif
      </aside>
    </div>
  </div>
</div>
<div class="footer-copyright">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="text-center"><span class="copyright">© 1998-<?php echo date("Y"); ?> A3 Group | @lang('common.allrightsreserved')</span></div>
      </div>
    </div>
  </div>
</div>
