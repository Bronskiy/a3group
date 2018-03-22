<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Redirect;
use Schema;
use App\TeamMembers;
use App\Http\Requests\CreateTeamMembersRequest;
use App\Http\Requests\UpdateTeamMembersRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Traits\FileUploadTrait;
use App\TeamCategories;

use App\Language;

class TeamMembersController extends Controller {

	/**
	 * Display a listing of teammembers
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $teammembers = TeamMembers::with("teamcategories")->with("language")->get();

		return view('admin.teammembers.index', compact('teammembers'));
	}

	/**
	 * Show the form for creating a new teammembers
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    $teamcategories = TeamCategories::pluck("team_cat", "id")->prepend('Please select', 0);

			$language = Language::pluck("lang_name", "id")->prepend('Выбрать', 0);

	    return view('admin.teammembers.create', compact("teamcategories", "language"));
	}

	/**
	 * Store a newly created teammembers in storage.
	 *
     * @param CreateTeamMembersRequest|Request $request
	 */
	public function store(CreateTeamMembersRequest $request)
	{
	    $request = $this->saveFiles($request);
		TeamMembers::create($request->all());

		return redirect()->route(config('quickadmin.route').'.teammembers.index');
	}

	/**
	 * Show the form for editing the specified teammembers.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$teammembers = TeamMembers::find($id);
	    $teamcategories = TeamCategories::pluck("team_cat", "id")->prepend('Please select', 0);
			$language = Language::pluck("lang_name", "id")->prepend('Выбрать', 0);


		return view('admin.teammembers.edit', compact('teammembers', "teamcategories", "language"));
	}

	/**
	 * Update the specified teammembers in storage.
     * @param UpdateTeamMembersRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateTeamMembersRequest $request)
	{
		$teammembers = TeamMembers::findOrFail($id);

        $request = $this->saveFiles($request);

		$teammembers->update($request->all());

		return redirect()->route(config('quickadmin.route').'.teammembers.index');
	}

	/**
	 * Remove the specified teammembers from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		TeamMembers::destroy($id);

		return redirect()->route(config('quickadmin.route').'.teammembers.index');
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
            TeamMembers::destroy($toDelete);
        } else {
            TeamMembers::whereNotNull('id')->delete();
        }

        return redirect()->route(config('quickadmin.route').'.teammembers.index');
    }

}
