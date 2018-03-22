<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|


Route::get('/', function () {
    return view('welcome');
});
Route::get('/', 'OnePageController@getData');
Route::view('/terms', 'pages.terms', ['name' => 'Terms & Conditions']);

*/
Route::group(
[
	'prefix' => LaravelLocalization::setLocale(),
	'middleware' => [ 'localeSessionRedirect', 'localizationRedirect', 'localeViewPath' ]
],
function()
{
	$lang_prefix = LaravelLocalization::getCurrentLocale();
	$lang = App\Language::where('lang_name', $lang_prefix)->first();
	View::share('menuData', App\MainMenu::where('menulang_id', $lang['id'])->get());
	View::share('footerMenuData', App\FooterMenu::where('language_id', $lang['id'])->get());
	View::share('articlesData', App\Articles::where('language_id', $lang['id'])->orderBy('cat_date', 'desc')->take(4)->get());
	View::share('lawnewsData', App\LawNews::where('language_id', $lang['id'])->orderBy('cat_date', 'desc')->take(4)->get());

	/** ADD ALL LOCALIZED ROUTES INSIDE THIS GROUP **/

	Route::get('hello',function(){
		return View::make('hello');

	//	return view('hello',$data);

	});
	Route::get('/', 'OnePageController@getDataHome');
	Route::get('/about', 'OnePageController@getDataAbout');
	//Route::get('/practice', 'OnePageController@getDataPractice');
	Route::get('/team/{name?}', 'TeamController@getData');

	Route::get('/news/{name?}', 'NewsController@getData');
	Route::get('/category/{name?}', 'NewsController@getCategoryData');
	Route::get('/search', 'NewsController@search');

	Route::get('/contacts', 'OnePageController@getDataContact');
	Route::get('/thank-you', 'OnePageController@thankYou');

	Route::get('/legal', 'OnePageController@getDataLegal');
	Route::get('/privacy', 'OnePageController@getDataPrivacy');
	Route::get('/copyrights', 'OnePageController@getDataCopyrights');

});

/** OTHER PAGES THAT SHOULD NOT BE LOCALIZED **/
Route::get('a3login', [
  'as' => 'a3login',
  'uses' => 'Auth\LoginController@showLoginForm'
]);
