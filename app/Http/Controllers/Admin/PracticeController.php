<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Redirect;
use Schema;
use App\Practice;
use App\Http\Requests\CreatePracticeRequest;
use App\Http\Requests\UpdatePracticeRequest;
use Illuminate\Http\Request;
use App\Projects;
use App\Language;


class PracticeController extends Controller {

	/**
	 * Display a listing of practice
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $practice = Practice::with("projects")->with("language")->get();

		return view('admin.practice.index', compact('practice'));
	}

	/**
	 * Show the form for creating a new practice
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{

		$projects = Projects::pluck("project_title", "id")->prepend('Выберите проекты', 0);
		$language = Language::pluck("lang_name", "id")->prepend('Выбрать', 0);

	    return view('admin.practice.create', compact("projects", "language"));
	}

	/**
	 * Store a newly created practice in storage.
	 *
     * @param CreatePracticeRequest|Request $request
	 */
	public function store(CreatePracticeRequest $request)
	{

		Practice::create($request->all());

		return redirect()->route(config('quickadmin.route').'.practice.index');
	}

	/**
	 * Show the form for editing the specified practice.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$practice = Practice::find($id);

		$projects = Projects::pluck("project_title", "id")->prepend('Выберите проекты', 0);
		$language = Language::pluck("lang_name", "id")->prepend('Выбрать', 0);

		return view('admin.practice.edit', compact('practice', "projects", "language"));
	}

	/**
	 * Update the specified practice in storage.
     * @param UpdatePracticeRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdatePracticeRequest $request)
	{
		$practice = Practice::findOrFail($id);



		$practice->update($request->all());

		return redirect()->route(config('quickadmin.route').'.practice.index');
	}

	/**
	 * Remove the specified practice from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		Practice::destroy($id);

		return redirect()->route(config('quickadmin.route').'.practice.index');
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
            Practice::destroy($toDelete);
        } else {
            Practice::whereNotNull('id')->delete();
        }

        return redirect()->route(config('quickadmin.route').'.practice.index');
    }

}
