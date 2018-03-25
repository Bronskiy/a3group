<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use App\TeamMembers;
use App\TeamCategories;
use App\Language;

class TeamController extends Controller
{

  public function getData($name = "default")
  {
    // $data['PostsData'] = Posts::all();
    if ($name == "default") {
    //  $data['TopImage'] = MainImage::find(5);
      $data['TeamData'] = TeamMembers::get();
      return view('pages.team',$data);
    } else {
      $data['TeamData'] = TeamMembers::where('member_slug', $name)->first();
      return view('pages.teamDetail',$data);
    }
  }

  public function getCategoryData($name = "default")
  {
    if ($name == "default") {
      abort(404);
    } else {
      $categories = TeamCategories::where('team_slug', $name)->first();
      if ($categories == '') {
        abort(404);
      }else {
        $data['Category'] = $categories;
        $data['TeamData'] = TeamMembers::where('teamcategories_id', $categories['id'])
        ->get();
        return view('pages.teamCategory',$data);
      }
    }
  }

}
