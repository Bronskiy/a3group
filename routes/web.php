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
		View::share('сommonVariablesData', App\CommonVariables::where('language_id', $lang['id'])->get());
		View::share('articlesData', App\Articles::where('language_id', $lang['id'])->orderBy('cat_date', 'desc')->take(4)->get());
		View::share('lawnewsData', App\LawNews::where('language_id', $lang['id'])->orderBy('cat_date', 'desc')->take(4)->get());
		View::share('lawArticlesData', App\LawArticles::where('language_id', $lang['id'])->get());
		View::share('publicationsData', App\Publications::where('language_id', $lang['id'])->orderBy('updated_at', 'desc')->get());

		/** ADD ALL LOCALIZED ROUTES INSIDE THIS GROUP **/

		Route::get('/', [
			'lang_id' => $lang['id'],
			'uses' => 'OnePageController@getDataHome'
		]);

		// Route::view('/terms', 'pages.terms', ['name' => 'Terms & Conditions']);
		// Route::get('/practice', 'OnePageController@getDataPractice');

		Route::get('/recommendations/{name?}', [
			'lang_id' => $lang['id'],
			'uses' => 'RecommendationsController@getData'
			]);

		Route::get('/team/{name?}', [
			'lang_id' => $lang['id'],
			'uses' => 'TeamController@getData'
			]);

		Route::get('/team-category/{name?}',[
			'lang_id' => $lang['id'],
			'uses' => 'TeamController@getCategoryData'
			]);

		Route::get('/vacancy/{name?}', [
			'lang_id' => $lang['id'],
			'uses' => 'VacancyController@getData'
			]);

		Route::get('/news/{name?}', [
			'lang_id' => $lang['id'],
			'uses' => 'NewsController@getData'
		]);

		Route::get('/category/{name?}', [
			'lang_id' => $lang['id'],
			'uses' => 'NewsController@getCategoryData'
		]);

		Route::get('/lawnews/{name?}', [
			'lang_id' => $lang['id'],
			'uses' => 'NewsController@getLawNewsData'
		]);

		Route::get('/common/{name?}', [
			'lang_id' => $lang['id'],
			'uses' => 'NewsController@getCommonArticlesData'
		]);

		Route::get('/lawnews-category/{name?}', [
			'lang_id' => $lang['id'],
			'uses' => 'NewsController@getLawNewsCategoryData'
		]);

		Route::get('/law-articles/{name?}', [
			'lang_id' => $lang['id'],
			'uses' => 'NewsController@getLawArticlesData'
		]);

		Route::get('/search', [
			'lang_id' => $lang['id'],
			'uses' => 'NewsController@search'
			]);

		Route::get('/contacts/{name?}', [
			'lang_id' => $lang['id'],
			'uses' => 'OnePageController@getDataContact'
		]);

		Route::post('/contacts/store', 'OnePageController@contactsStore');
		Route::get('/thank-you', 'OnePageController@thankYou');

		Route::get('/about', [
			'lang_id' => $lang['id'],
			'uses' => 'OnePageController@getDataAbout'
		]);

		Route::get('/legal', [
			'lang_id' => $lang['id'],
			'uses' => 'OnePageController@getDataLegal'
		]);

		Route::get('/privacy', [
			'lang_id' => $lang['id'],
			'uses' => 'OnePageController@getDataPrivacy'
		]);

		Route::get('/copyrights', [
			'lang_id' => $lang['id'],
			'uses' => 'OnePageController@getDataCopyrights'
		]);

		Route::get('/mission', [
			'lang_id' => $lang['id'],
			'uses' => 'OnePageController@getDataMission'
		]);

		Route::get('/membership', [
			'lang_id' => $lang['id'],
			'uses' => 'OnePageController@getDataMembership'
		]);

	});

	/** OTHER PAGES THAT SHOULD NOT BE LOCALIZED **/
	Route::get('a3login', [
		'as' => 'a3login',
		'uses' => 'Auth\LoginController@showLoginForm'
	]);
