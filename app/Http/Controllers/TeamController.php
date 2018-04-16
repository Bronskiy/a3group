<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use App\TeamMembers;
use App\TeamCategories;
use App\Language;

class TeamController extends Controller
{
  public function getData(Request $request, $name = "default")
  {
    $lang = $request->route()->getAction()['lang_id'];
    $data['Name'] = $name;
    if ($name == "default") {
      $data['TeamData'] = TeamCategories::where('language_id', $lang)
      ->orderBy('team_cat', 'desc')
      ->get();
      return view('pages.team',$data);
    } else {
      $data['TeamData'] = TeamMembers::where('member_slug', $name)->where('language_id', $lang)->first();
      return view('pages.teamDetail',$data);
    }
  }

  public function getCategoryData(Request $request, $name = "default")
  {
    $lang = $request->route()->getAction()['lang_id'];
    $data['Name'] = $name;
    if ($name == "default") {
      abort(404);
    } else {
      $categories = TeamCategories::where('team_slug', $name)->where('language_id', $lang)->first();
      if ($categories == '') {
        abort(404);
      }else {
        $data['Category'] = $categories;
        $data['TeamData'] = TeamMembers::where('teamcategories_id', $categories['id'])
        ->where('language_id', $lang)
        ->orderBy('created_at', 'desc')
        ->get();
        return view('pages.team',$data);
      }
    }
  }

}
