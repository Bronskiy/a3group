<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Redirect;
use Schema;
use App\LawNews;
use App\Http\Requests\CreateLawNewsRequest;
use App\Http\Requests\UpdateLawNewsRequest;
use Illuminate\Http\Request;

use App\LawNewsCategories;


class LawNewsController extends Controller {

	/**
	 * Display a listing of lawnews
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $lawnews = LawNews::with("lawnewscategories")->get();

		return view('admin.lawnews.index', compact('lawnews'));
	}

	/**
	 * Show the form for creating a new lawnews
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    $lawnewscategories = LawNewsCategories::pluck("lawnews_cat_title", "id")->prepend('Please select', 0);

	    
	    return view('admin.lawnews.create', compact("lawnewscategories"));
	}

	/**
	 * Store a newly created lawnews in storage.
	 *
     * @param CreateLawNewsRequest|Request $request
	 */
	public function store(CreateLawNewsRequest $request)
	{
	    
		LawNews::create($request->all());

		return redirect()->route(config('quickadmin.route').'.lawnews.index');
	}

	/**
	 * Show the form for editing the specified lawnews.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$lawnews = LawNews::find($id);
	    $lawnewscategories = LawNewsCategories::pluck("lawnews_cat_title", "id")->prepend('Please select', 0);

	    
		return view('admin.lawnews.edit', compact('lawnews', "lawnewscategories"));
	}

	/**
	 * Update the specified lawnews in storage.
     * @param UpdateLawNewsRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateLawNewsRequest $request)
	{
		$lawnews = LawNews::findOrFail($id);

        

		$lawnews->update($request->all());

		return redirect()->route(config('quickadmin.route').'.lawnews.index');
	}

	/**
	 * Remove the specified lawnews from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		LawNews::destroy($id);

		return redirect()->route(config('quickadmin.route').'.lawnews.index');
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
            LawNews::destroy($toDelete);
        } else {
            LawNews::whereNotNull('id')->delete();
        }

        return redirect()->route(config('quickadmin.route').'.lawnews.index');
    }

}
