<div class="container">
  <div class="row">
    <div class="col-md-6 col-lg-3">
      <!-- Text widget-->
      <aside class="widget widget_text">
        <div class="textwidget">
          <img src="/assets/img/logo.svg" class="footer-logo">
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non enim eleifend felis pretium feugiat.</p><i class="fa fa-envelope mr-2"></i> E-mail: <a href="mailto:support@test.com">support@test.com</a> <br>
          <i class="fa fa-phone mr-2"></i> Phone: 7 891 011 1267 <br>
          <i class="fa fa-fax mr-2"></i> Fax: 7 891 011 1267 <br>
        </div>

      </aside>
    </div>
    <div class="col-md-6 col-lg-3">
      <!-- Recent entries widget-->
      <aside class="widget widget_recent_entries">
        <div class="widget-title">
          <h5>Новости</h5>
        </div>
        <div class="latest-posts">
          @foreach ($articlesData as $value)
          <article class="clearfix m-b-20">
            <div class="post-right">
              <h5><a href="/news/{{ $value->news_slug }}">{{ str_limit(strip_tags($value->news_title), $limit = 40, $end = '...') }}</a></h5>
              <p class="post-date mb-0 font-12">{{ \DateTime::createFromFormat("d-m-Y", $value->cat_date)->format("M jS, Y") }}</p>
            </div>
          </article>
          @endforeach
        </div>
      </aside>
    </div>
    <div class="col-md-6 col-lg-3">
      <!-- Flickr widget-->
      <aside class="widget widget_recent_entries">
        <div class="widget-title">
          <h5>Новости законодательства</h5>
        </div>
        <div class="latest-posts">
          @foreach ($lawnewsData as $value)
          <article class="clearfix m-b-20">
            <div class="post-right">
              <h5><a href="/lawnews/{{ $value->lawnews_slug }}">{{ str_limit(strip_tags($value->lawnews_title), $limit = 40, $end = '...') }}</a></h5>
              <p class="post-date mb-0 font-12">{{ \DateTime::createFromFormat("d-m-Y", $value->cat_date)->format("M jS, Y") }}</p>
            </div>
          </article>
          @endforeach
        </div>
      </aside>
    </div>
    <div class="col-md-6 col-lg-3">
      <!-- Links widget-->
      <aside class="widget">
        <div class="widget-title">
          <h5>Информация</h5>
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
        <div class="text-center"><span class="copyright">© 1998-<?php echo date("Y"); ?> A3 Group | Все права защищены</span></div>
      </div>
    </div>
  </div>
</div>
