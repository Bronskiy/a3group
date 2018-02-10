<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Redirect;
use Schema;
use App\LawArticles;
use App\Http\Requests\CreateLawArticlesRequest;
use App\Http\Requests\UpdateLawArticlesRequest;
use Illuminate\Http\Request;



class LawArticlesController extends Controller {

	/**
	 * Display a listing of lawarticles
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $lawarticles = LawArticles::all();

		return view('admin.lawarticles.index', compact('lawarticles'));
	}

	/**
	 * Show the form for creating a new lawarticles
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    
	    
	    return view('admin.lawarticles.create');
	}

	/**
	 * Store a newly created lawarticles in storage.
	 *
     * @param CreateLawArticlesRequest|Request $request
	 */
	public function store(CreateLawArticlesRequest $request)
	{
	    
		LawArticles::create($request->all());

		return redirect()->route(config('quickadmin.route').'.lawarticles.index');
	}

	/**
	 * Show the form for editing the specified lawarticles.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$lawarticles = LawArticles::find($id);
	    
	    
		return view('admin.lawarticles.edit', compact('lawarticles'));
	}

	/**
	 * Update the specified lawarticles in storage.
     * @param UpdateLawArticlesRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateLawArticlesRequest $request)
	{
		$lawarticles = LawArticles::findOrFail($id);

        

		$lawarticles->update($request->all());

		return redirect()->route(config('quickadmin.route').'.lawarticles.index');
	}

	/**
	 * Remove the specified lawarticles from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		LawArticles::destroy($id);

		return redirect()->route(config('quickadmin.route').'.lawarticles.index');
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
            LawArticles::destroy($toDelete);
        } else {
            LawArticles::whereNotNull('id')->delete();
        }

        return redirect()->route(config('quickadmin.route').'.lawarticles.index');
    }

}
