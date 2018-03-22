<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Redirect;
use Schema;
use App\TeamCategories;
use App\Http\Requests\CreateTeamCategoriesRequest;
use App\Http\Requests\UpdateTeamCategoriesRequest;
use Illuminate\Http\Request;

use App\Language;


class TeamCategoriesController extends Controller {

	/**
	 * Display a listing of teamcategories
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $teamcategories = TeamCategories::with("language")->get();

		return view('admin.teamcategories.index', compact('teamcategories'));
	}

	/**
	 * Show the form for creating a new teamcategories
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
		$language = Language::pluck("lang_name", "id")->prepend('Выбрать', 0);


	    return view('admin.teamcategories.create', compact("language"));
	}

	/**
	 * Store a newly created teamcategories in storage.
	 *
     * @param CreateTeamCategoriesRequest|Request $request
	 */
	public function store(CreateTeamCategoriesRequest $request)
	{

		TeamCategories::create($request->all());

		return redirect()->route(config('quickadmin.route').'.teamcategories.index');
	}

	/**
	 * Show the form for editing the specified teamcategories.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$teamcategories = TeamCategories::find($id);

		$language = Language::pluck("lang_name", "id")->prepend('Выбрать', 0);

		return view('admin.teamcategories.edit', compact('teamcategories', 'language'));
	}

	/**
	 * Update the specified teamcategories in storage.
     * @param UpdateTeamCategoriesRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateTeamCategoriesRequest $request)
	{
		$teamcategories = TeamCategories::findOrFail($id);



		$teamcategories->update($request->all());

		return redirect()->route(config('quickadmin.route').'.teamcategories.index');
	}

	/**
	 * Remove the specified teamcategories from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		TeamCategories::destroy($id);

		return redirect()->route(config('quickadmin.route').'.teamcategories.index');
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
            TeamCategories::destroy($toDelete);
        } else {
            TeamCategories::whereNotNull('id')->delete();
        }

        return redirect()->route(config('quickadmin.route').'.teamcategories.index');
    }

}
