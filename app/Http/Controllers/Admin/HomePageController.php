<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Redirect;
use Schema;
use App\HomePage;
use App\Http\Requests\CreateHomePageRequest;
use App\Http\Requests\UpdateHomePageRequest;
use Illuminate\Http\Request;

use App\Language;



class HomePageController extends Controller {

	/**
	 * Display a listing of homepage
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $homepage = HomePage::with("language")->get();

		return view('admin.homepage.index', compact('homepage'));
	}

	/**
	 * Show the form for creating a new homepage
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{

		$language = Language::pluck("lang_name", "id")->prepend('Выбрать', 0);

	    return view('admin.homepage.create', compact("language"));
	}

	/**
	 * Store a newly created homepage in storage.
	 *
     * @param CreateHomePageRequest|Request $request
	 */
	public function store(CreateHomePageRequest $request)
	{

		HomePage::create($request->all());

		return redirect()->route(config('quickadmin.route').'.homepage.index');
	}

	/**
	 * Show the form for editing the specified homepage.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$homepage = HomePage::find($id);

		$language = Language::pluck("lang_name", "id")->prepend('Выбрать', 0);

		return view('admin.homepage.edit', compact('homepage', 'language'));
	}

	/**
	 * Update the specified homepage in storage.
     * @param UpdateHomePageRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateHomePageRequest $request)
	{
		$homepage = HomePage::findOrFail($id);



		$homepage->update($request->all());

		return redirect()->route(config('quickadmin.route').'.homepage.index');
	}

	/**
	 * Remove the specified homepage from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		HomePage::destroy($id);

		return redirect()->route(config('quickadmin.route').'.homepage.index');
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
            HomePage::destroy($toDelete);
        } else {
            HomePage::whereNotNull('id')->delete();
        }

        return redirect()->route(config('quickadmin.route').'.homepage.index');
    }

}
