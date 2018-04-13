<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use App\Articles;
use App\NewsCategories;
use App\CommonArticles;
use App\LawArticles;
use App\LawNews;
use App\LawNewsCategories;
use App\Language;

class NewsController extends Controller
{
  public function getData(Request $request, $name = "default")
  {
    $lang = $request->route()->getAction()['lang_id'];
    // $data['PostsData'] = Posts::all();
    if ($name == "default") {
    //  $data['TopImage'] = MainImage::find(5);
      $data['PostsData'] = Articles::orderBy('cat_date', 'asc')
      ->where('language_id', $lang)
      ->paginate(15);
      return view('pages.news',$data);
    } else {
      $data['PostsData'] = Articles::where('news_slug', $name)->where('language_id', $lang)->first();
      if (empty($data['PostsData'])) {
        return redirect('/news');
      };
      $data['Related'] = Articles::where('newscategories_id', $data['PostsData']['newscategories_id'])
      ->where('id', '!=', $data['PostsData']['id'])
      ->where('language_id', $lang)
      ->orderBy('cat_date', 'asc')
      ->take(6)
      ->get();
      return view('pages.newsDetail',$data);
    }
  }

  public function getCategoryData(Request $request, $name = "default")
  {
    $lang = $request->route()->getAction()['lang_id'];
    if ($name == "default") {
      abort(404);
    } else {
      $categories = NewsCategories::where('cat_slug', $name)->first();
      if ($categories == '') {
        abort(404);
      }else {
        $data['Category'] = $categories;
        $data['PostsData'] = Articles::where('newscategories_id', $categories['id'])
        ->where('language_id', $lang)
        ->orderBy('cat_date', 'asc')
        ->paginate(15);
        return view('pages.newsCategory',$data);
      }
    }
  }

  public function getLawNewsData(Request $request, $name = "default")
  {
    $lang = $request->route()->getAction()['lang_id'];
    if ($name == "default") {
      $data['PostsData'] = LawNews::orderBy('cat_date', 'asc')
      ->where('language_id', $lang)
      ->paginate(15);
      return view('pages.news',$data);
    } else {
      $data['PostsData'] = LawNews::where('lawnews_slug', $name)->first();
      $data['Related'] = LawNews::where('lawnewscategories_id', $data['PostsData']['lawnewscategories_id'])
      ->where('id', '!=', $data['PostsData']['id'])
      ->where('language_id', $lang)
      ->orderBy('cat_date', 'desc')
      ->take(6)
      ->get();
      return view('pages.newsDetail',$data);
    }
  }

  public function getLawNewsCategoryData(Request $request, $name = "default")
  {
    $lang = $request->route()->getAction()['lang_id'];
    if ($name == "default") {
      abort(404);
    } else {
      $categories = LawNewsCategories::where('lawnews_cat_slug', $name)->first();
      if ($categories == '') {
        abort(404);
      }else {
        $data['Category'] = $categories;
        $data['PostsData'] = LawNews::where('lawnewscategories_id', $categories['id'])
        ->where('language_id', $lang)
        ->orderBy('cat_date', 'desc')
        ->paginate(15);
        return view('pages.newsCategory',$data);
      }
    }
  }

  public function getLawArticlesData(Request $request, $name = "default")
  {
    $lang = $request->route()->getAction()['lang_id'];
    if ($name == "default") {
      abort(404);
    } else {
      $data['PostsData'] = LawArticles::where('law_articles_slug', $name)->first();
      return view('pages.newsDetail',$data);
    }
  }

  public function getCommonArticlesData(Request $request, $name = "default")
  {
    $lang = $request->route()->getAction()['lang_id'];
    if ($name == "default") {
      abort(404);
    } else {
      $data['PostsData'] = CommonArticles::where('common_slug', $name)->first();
      return view('pages.newsDetail',$data);
    }
  }

  public function search()
  {
    $name = Input::get('keyword');
    if ($name) {
      $data['Keyword'] = $name;
      $data['PostsData'] = Articles::where('news_title', 'LIKE', "%$name%")
      ->orWhere('news_body', 'LIKE', "%$name%")
      ->get();
      return view('pages.search',$data);
    } else {
      abort(404);
    }
  }
  
}
