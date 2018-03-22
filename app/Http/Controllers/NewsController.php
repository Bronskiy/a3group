<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use App\Articles;
use App\NewsCategories;
use App\Language;

class NewsController extends Controller
{
  public function getData($name = "default")
  {
    // $data['PostsData'] = Posts::all();
    if ($name == "default") {
    //  $data['TopImage'] = MainImage::find(5);
      $data['PostsData'] = Articles::orderBy('cat_date', 'asc')->get();
      return view('pages.news',$data);
    } else {
      $data['PostsData'] = Articles::where('news_slug', $name)->first();
      $data['Related'] = Articles::where('newscategories_id', $data['PostsData']['newscategories_id'])
      ->where('id', '!=', $data['PostsData']['id'])
      ->orderBy('cat_date', 'asc')
      ->get();
      return view('pages.newsDetail',$data);
    }
  }
  public function getCategoryData($name = "default")
  {
    if ($name == "default") {
      abort(404);
    } else {
      $categories = Categories::where('cat_slug', $name)->first();
      if ($categories == '') {
        abort(404);
      }else {
        $data['Category'] = $categories;
        $data['PostsData'] = Articles::where('categories_id', $categories['id'])
        ->orderBy('cat_date', 'asc')
        ->get();
        return view('pages.newsCategory',$data);
      }
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
