<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Recommendations;

class RecommendationsController extends Controller
{
  public function getData(Request $request, $name = "default")
  {
    $lang = $request->route()->getAction()['lang_id'];

    if ($name == "default") {
      $data['RecommendationsData'] = Recommendations::orderBy('id', 'asc')
      ->where('language_id', $lang)
      ->get();
      return view('pages.recommendations', $data);
    } else {
      $data['RecommendationsData'] = Recommendations::where('recommendations_slug', $name)->where('language_id', $lang)->first();
      if (empty($data['RecommendationsData'])) {
        return redirect('/recommendations');
      };
      return view('pages.recommendationsDetail',$data);
    }
  }
}
