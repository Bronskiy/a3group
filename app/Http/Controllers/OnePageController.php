<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\About;
use App\Mission;
use App\Membership;

class OnePageController extends Controller
{
  public function getData()
  {
    $data['About'] = About::all();
    $data['Mission'] = Mission::all();
    $data['Membership'] = Membership::all();
    return view('pages.home',$data);
  }
}
