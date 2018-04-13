<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\CreateContactEntriesRequest;
use App\HomePage;
use App\About;
use App\Copyright;
use App\LegalStatement;
use App\Privacy;
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
  public function getDataLegal(Request $request){
    $action = $request->route()->getAction()['lang_id'];

    $data['CommonData'] = LegalStatement::where('language_id', $action)->get();
    return view('pages.common',$data);
  }

  public function getDataPrivacy(Request $request){
    $action = $request->route()->getAction()['lang_id'];
    $data['CommonData'] = Privacy::where('language_id', $action)->get();
    return view('pages.common',$data);
  }

  public function getDataCopyrights(Request $request){
    $action = $request->route()->getAction()['lang_id'];

    $data['CommonData'] = Copyright::where('language_id', $action)->get();
    return view('pages.common',$data);
  }

  public function getDataMission(Request $request){
    $action = $request->route()->getAction()['lang_id'];

    $data['CommonData'] = Mission::where('language_id', $action)->get();
    return view('pages.common',$data);
  }

  public function getDataMembership(Request $request){
    $action = $request->route()->getAction()['lang_id'];

    $data['CommonData'] = Membership::where('language_id', $action)->get();
    return view('pages.common',$data);
  }

  public function getDataContact($name = "default"){
    $data['Name'] = $name;
    return view('pages.contacts', $data);
  }

  public function contactsStore(CreateContactEntriesRequest $request)
  {
    ContactEntries::create($request->all());
    return redirect('/thank-you');
  }

  public function thankYou(){
    return view('pages.thankYou');
  }



}
