<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Redirect;
use Schema;
use App\Mission;
use App\Http\Requests\CreateMissionRequest;
use App\Http\Requests\UpdateMissionRequest;
use Illuminate\Http\Request;

use App\Language;


class MissionController extends Controller {

	/**
	 * Display a listing of mission
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $mission = Mission::with("language")->get();

		return view('admin.mission.index', compact('mission'));
	}

	/**
	 * Show the form for creating a new mission
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{

		$language = Language::pluck("lang_name", "id")->prepend('Выбрать', 0);

	    return view('admin.mission.create', compact("language"));
	}

	/**
	 * Store a newly created mission in storage.
	 *
     * @param CreateMissionRequest|Request $request
	 */
	public function store(CreateMissionRequest $request)
	{

		Mission::create($request->all());

		return redirect()->route(config('quickadmin.route').'.mission.index');
	}

	/**
	 * Show the form for editing the specified mission.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$mission = Mission::find($id);
		$language = Language::pluck("lang_name", "id")->prepend('Выбрать', 0);
	    

		return view('admin.mission.edit', compact('mission', 'language'));
	}

	/**
	 * Update the specified mission in storage.
     * @param UpdateMissionRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateMissionRequest $request)
	{
		$mission = Mission::findOrFail($id);



		$mission->update($request->all());

		return redirect()->route(config('quickadmin.route').'.mission.index');
	}

	/**
	 * Remove the specified mission from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		Mission::destroy($id);

		return redirect()->route(config('quickadmin.route').'.mission.index');
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
            Mission::destroy($toDelete);
        } else {
            Mission::whereNotNull('id')->delete();
        }

        return redirect()->route(config('quickadmin.route').'.mission.index');
    }

}
