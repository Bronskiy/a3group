<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Redirect;
use Schema;
use App\NewsCategories;
use App\Http\Requests\CreateNewsCategoriesRequest;
use App\Http\Requests\UpdateNewsCategoriesRequest;
use Illuminate\Http\Request;
use App\Language;


class NewsCategoriesController extends Controller {

	/**
	 * Display a listing of newscategories
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $newscategories = NewsCategories::with("language")->get();

		return view('admin.newscategories.index', compact('newscategories'));
	}

	/**
	 * Show the form for creating a new newscategories
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
		$language = Language::pluck("lang_name", "id")->prepend('Выбрать', 0);

	    return view('admin.newscategories.create', compact("language"));
	}

	/**
	 * Store a newly created newscategories in storage.
	 *
     * @param CreateNewsCategoriesRequest|Request $request
	 */
	public function store(CreateNewsCategoriesRequest $request)
	{

		NewsCategories::create($request->all());

		return redirect()->route(config('quickadmin.route').'.newscategories.index');
	}

	/**
	 * Show the form for editing the specified newscategories.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$newscategories = NewsCategories::find($id);
		$language = Language::pluck("lang_name", "id")->prepend('Выбрать', 0);

		return view('admin.newscategories.edit', compact('newscategories', 'language'));
	}

	/**
	 * Update the specified newscategories in storage.
     * @param UpdateNewsCategoriesRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateNewsCategoriesRequest $request)
	{
		$newscategories = NewsCategories::findOrFail($id);



		$newscategories->update($request->all());

		return redirect()->route(config('quickadmin.route').'.newscategories.index');
	}

	/**
	 * Remove the specified newscategories from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		NewsCategories::destroy($id);

		return redirect()->route(config('quickadmin.route').'.newscategories.index');
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
            NewsCategories::destroy($toDelete);
        } else {
            NewsCategories::whereNotNull('id')->delete();
        }

        return redirect()->route(config('quickadmin.route').'.newscategories.index');
    }

}
