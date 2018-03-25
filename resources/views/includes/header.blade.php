<div class="container-fluid">
  <div class="inner-header">
    <a class="inner-brand fonttextlogoonly" href="/">
      <div class="brand-common"><img src="/assets/img/logo.svg" class="logo"></div>
    </a>
  </div>
  <div class="inner-navigation collapse">
    <div class="inner-navigation-inline ml-3">
      <div class="inner-nav">
        <ul>
          @if ( ! $menuData->isEmpty() )
          @foreach ($menuData->where('mainmenu_id',0)->sortBy('menu_order') as $value)
          @if ($menuData->where('mainmenu_id', $value->id )->isEmpty())
          <li class=" {{{ (Request::is(preg_replace('|/|','',$value->menu_link)) ? 'active' : '') }}}"><a href="{{ $value->menu_link }}">{{ $value->menu_title }}</a></li>
          @else
          <li class="menu-item-has-children {{{ (Request::is(preg_replace('|/|','',$value->menu_link)) ? 'active' : '') }}}">
            <a href="{{ $value->menu_link }}">{{ $value->menu_title }} <i class="fa fa-angle-down"></i></a>
            <ul class="sub-menu" style="margin-left: 0px;">
              @foreach ($menuData->where('mainmenu_id',$value->id)->sortBy('menu_order') as $subvalue)
              <li><a href="{{ $subvalue->menu_link }}">{{ $subvalue->menu_title }}</a></li>
              @endforeach
            </ul>
          </li>
          @endif
          @endforeach
          <li class="menu-item-has-children menu-language">
            <a href="#"><span class="flag-icon flag-icon-{{ LaravelLocalization::getCurrentLocale() }} flag-icon-squared"></span> {{ LaravelLocalization::getCurrentLocaleNative() }} <i class="fa fa-angle-down"></i></a>
            <ul class="sub-menu" style="margin-left: 0px;">
              @foreach(LaravelLocalization::getLocalesOrder() as $localeCode => $properties)
              <li>
                <a rel="alternate" hreflang="{{ $localeCode }}" href="{{ LaravelLocalization::getLocalizedURL($localeCode, null, [], true) }}">
                  <span class="flag-icon flag-icon-{{ $localeCode }} flag-icon-squared"></span> {{ $properties['native'] }}
                </a>
              </li>
              @endforeach
            </ul>
          </li>
        </ul>
        @endif
      </div>
    </div>
  </div>
  <div class="nav-toggle"><a href="#" data-toggle="collapse" data-target=".inner-navigation"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></a></div>
</div>
