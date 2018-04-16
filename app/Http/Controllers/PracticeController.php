<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Practice;
use App\Projects;

class PracticeController extends Controller
{
  public function getData(Request $request, $name = "default")
  {
    $lang = $request->route()->getAction()['lang_id'];

    if ($name == "default") {
      $data['PracticeData'] = Practice::orderBy('id', 'asc')
      ->where('language_id', $lang)
      ->get();
      return view('pages.practice', $data);
    } else {
      $data['PracticeData'] = Practice::where('practice_slug', $name)->where('language_id', $lang)->first();
      if (empty($data['PracticeData'])) {
        return redirect('/practice');
      };
      return view('pages.practiceDetail',$data);
    }
  }

  public function getProjectsData(Request $request, $name = "default")
  {
    $lang = $request->route()->getAction()['lang_id'];

    if ($name == "default") {
      abort(404);
    } else {
      $data['PracticeData'] = Projects::where('project_slug', $name)->where('language_id', $lang)->first();
      if (empty($data['PracticeData'])) {
        return redirect('/practice');
      };
      return view('pages.practiceDetail',$data);
    }
  }
}
