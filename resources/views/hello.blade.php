hello {{ LaravelLocalization::getCurrentLocale() }}

<ul class="navbar-nav">
  @if ( ! $menuData->isEmpty() )
  @foreach ($menuData->sortBy('menu_order') as $value)

  <li class="nav-item {{{ (Request::is(preg_replace('|/|','',$value->menu_link)) ? 'active' : '') }}}"><a class="nav-link font-weight-medium" href="{{ $value->menu_link }}">{{ $value->menu_title }}</a></li>

  @endforeach
  @endif
</ul>
