<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Redirect;
use Schema;
use App\About;
use App\Http\Requests\CreateAboutRequest;
use App\Http\Requests\UpdateAboutRequest;
use Illuminate\Http\Request;

use App\Language;


class AboutController extends Controller {

	/**
	 * Display a listing of about
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $about = About::with("language")->get();

		return view('admin.about.index', compact('about'));
	}

	/**
	 * Show the form for creating a new about
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
		$language = Language::pluck("lang_name", "id")->prepend('Выбрать', 0);


	    return view('admin.about.create', compact("language"));
	}

	/**
	 * Store a newly created about in storage.
	 *
     * @param CreateAboutRequest|Request $request
	 */
	public function store(CreateAboutRequest $request)
	{

		About::create($request->all());

		return redirect()->route(config('quickadmin.route').'.about.index');
	}

	/**
	 * Show the form for editing the specified about.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$about = About::find($id);
		$language = Language::pluck("lang_name", "id")->prepend('Выбрать', 0);


		return view('admin.about.edit', compact('about', 'language'));
	}

	/**
	 * Update the specified about in storage.
     * @param UpdateAboutRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateAboutRequest $request)
	{
		$about = About::findOrFail($id);



		$about->update($request->all());

		return redirect()->route(config('quickadmin.route').'.about.index');
	}

	/**
	 * Remove the specified about from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		About::destroy($id);

		return redirect()->route(config('quickadmin.route').'.about.index');
	}

    /**
     * Mass delete function from index page
     * @param Request $request
     *
     * @return mixed
     */
    public function massDelete(Request $request)
    {
        if ($request->get('toDelete') != 'mass') {
            $toDelete = json_decode($request->get('toDelete'));
            About::destroy($toDelete);
        } else {
            About::whereNotNull('id')->delete();
        }

        return redirect()->route(config('quickadmin.route').'.about.index');
    }

}
