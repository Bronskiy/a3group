<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\CreateContactEntriesRequest;
use App\HomePage;
use App\About;
use App\Mission;
use App\Membership;
use App\ContactEntries;
use App\Recommendations;

class OnePageController extends Controller
{

  public function getDataHome(Request $request)
  {
    $action = $request->route()->getAction()['lang_id'];

    $data['RecommendationsData'] = Recommendations::where('language_id', $action)->orderBy('updated_at', 'desc')->take(6)->get();
    $data['HomePageData'] = HomePage::where('language_id', $action)->get();
    return view('pages.home',$data);
  }

  public function getDataAbout(Request $request)
  {
    $action = $request->route()->getAction()['lang_id'];

    $data['CommonData'] = About::where('language_id', $action)->get();
    return view('pages.common',$data);
  }

  public function getData(){

  }

  public function getDataContact(){
    return view('pages.contacts');
  }

  public function contactsStore(CreateContactEntriesRequest $request)
  {
    ContactEntries::create($request->all());
    return redirect('/thank-you');
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
