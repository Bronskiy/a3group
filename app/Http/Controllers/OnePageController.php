<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\About;
use App\Mission;
use App\Membership;

class OnePageController extends Controller
{
  public function getDataHome()
  {
    //    $data['About'] = About::all();
    //  $data['Mission'] = Mission::all();
    // $data['Membership'] = Membership::all();
    //  return view('pages.home',$data);
    return view('pages.home');
  }

  public function getDataAbout(){
    return view('pages.common');

  }

  public function getData(){

  }

  public function getDataContact(){
    return view('pages.contacts');
  }

  public function thankYou(){
    return view('pages.thankYou');
  }

  public function getDataLegal(){
    return view('pages.common');
  }

  public function getDataPrivacy(){
    return view('pages.common');
  }

  public function getDataCopyrights(){
    return view('pages.common');
  }

}
