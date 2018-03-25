<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Redirect;
use Schema;
use App\CommonVariables;
use App\Http\Requests\CreateCommonVariablesRequest;
use App\Http\Requests\UpdateCommonVariablesRequest;
use Illuminate\Http\Request;

use App\Language;


class CommonVariablesController extends Controller {

	/**
	 * Display a listing of commonvariables
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $commonvariables = CommonVariables::with("language")->get();

		return view('admin.commonvariables.index', compact('commonvariables'));
	}

	/**
	 * Show the form for creating a new commonvariables
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{

		$language = Language::pluck("lang_name", "id")->prepend('Выбрать', 0);

	    return view('admin.commonvariables.create', compact("language"));
	}

	/**
	 * Store a newly created commonvariables in storage.
	 *
     * @param CreateCommonVariablesRequest|Request $request
	 */
	public function store(CreateCommonVariablesRequest $request)
	{

		CommonVariables::create($request->all());

		return redirect()->route(config('quickadmin.route').'.commonvariables.index');
	}

	/**
	 * Show the form for editing the specified commonvariables.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$commonvariables = CommonVariables::find($id);
		$language = Language::pluck("lang_name", "id")->prepend('Выбрать', 0);


		return view('admin.commonvariables.edit', compact('commonvariables', 'language'));
	}

	/**
	 * Update the specified commonvariables in storage.
     * @param UpdateCommonVariablesRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateCommonVariablesRequest $request)
	{
		$commonvariables = CommonVariables::findOrFail($id);



		$commonvariables->update($request->all());

		return redirect()->route(config('quickadmin.route').'.commonvariables.index');
	}

	/**
	 * Remove the specified commonvariables from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		CommonVariables::destroy($id);

		return redirect()->route(config('quickadmin.route').'.commonvariables.index');
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
            CommonVariables::destroy($toDelete);
        } else {
            CommonVariables::whereNotNull('id')->delete();
        }

        return redirect()->route(config('quickadmin.route').'.commonvariables.index');
    }

}
