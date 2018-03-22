<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use App\TeamMembers;
use App\TeamCategories;
use App\Language;

class TeamController extends Controller
{
  public function getData(){
    return view('pages.team');

  }
}
