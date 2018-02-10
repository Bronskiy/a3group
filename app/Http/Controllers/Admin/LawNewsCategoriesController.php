<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Redirect;
use Schema;
use App\LawNewsCategories;
use App\Http\Requests\CreateLawNewsCategoriesRequest;
use App\Http\Requests\UpdateLawNewsCategoriesRequest;
use Illuminate\Http\Request;



class LawNewsCategoriesController extends Controller {

	/**
	 * Display a listing of lawnewscategories
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $lawnewscategories = LawNewsCategories::all();

		return view('admin.lawnewscategories.index', compact('lawnewscategories'));
	}

	/**
	 * Show the form for creating a new lawnewscategories
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    
	    
	    return view('admin.lawnewscategories.create');
	}

	/**
	 * Store a newly created lawnewscategories in storage.
	 *
     * @param CreateLawNewsCategoriesRequest|Request $request
	 */
	public function store(CreateLawNewsCategoriesRequest $request)
	{
	    
		LawNewsCategories::create($request->all());

		return redirect()->route(config('quickadmin.route').'.lawnewscategories.index');
	}

	/**
	 * Show the form for editing the specified lawnewscategories.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$lawnewscategories = LawNewsCategories::find($id);
	    
	    
		return view('admin.lawnewscategories.edit', compact('lawnewscategories'));
	}

	/**
	 * Update the specified lawnewscategories in storage.
     * @param UpdateLawNewsCategoriesRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateLawNewsCategoriesRequest $request)
	{
		$lawnewscategories = LawNewsCategories::findOrFail($id);

        

		$lawnewscategories->update($request->all());

		return redirect()->route(config('quickadmin.route').'.lawnewscategories.index');
	}

	/**
	 * Remove the specified lawnewscategories from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		LawNewsCategories::destroy($id);

		return redirect()->route(config('quickadmin.route').'.lawnewscategories.index');
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
            LawNewsCategories::destroy($toDelete);
        } else {
            LawNewsCategories::whereNotNull('id')->delete();
        }

        return redirect()->route(config('quickadmin.route').'.lawnewscategories.index');
    }

}
