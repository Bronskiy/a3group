<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Recruiting;
use App\Vacancies;

class VacancyController extends Controller
{
  public function getData(Request $request, $name = "default")
  {
    $lang = $request->route()->getAction()['lang_id'];
    if ($name == "default") {
      $data['RecruitingData'] = Recruiting::where('language_id', $lang)->first();
      $data['VacanciesData'] = Vacancies::where('language_id', $lang)->get();
      return view('pages.vacancies',$data);
    } else {
      $data['VacanciesData'] = Vacancies::where('vacancy_slug', $name)->where('language_id', $lang)->first();
      if (empty($data['VacanciesData'])) {
        return redirect('/');
      };
      return view('pages.vacancyDetail',$data);
    }
  }
}
