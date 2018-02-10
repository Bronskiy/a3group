<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Redirect;
use Schema;
use App\CommonArticles;
use App\Http\Requests\CreateCommonArticlesRequest;
use App\Http\Requests\UpdateCommonArticlesRequest;
use Illuminate\Http\Request;



class CommonArticlesController extends Controller {

	/**
	 * Display a listing of commonarticles
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $commonarticles = CommonArticles::all();

		return view('admin.commonarticles.index', compact('commonarticles'));
	}

	/**
	 * Show the form for creating a new commonarticles
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    
	    
	    return view('admin.commonarticles.create');
	}

	/**
	 * Store a newly created commonarticles in storage.
	 *
     * @param CreateCommonArticlesRequest|Request $request
	 */
	public function store(CreateCommonArticlesRequest $request)
	{
	    
		CommonArticles::create($request->all());

		return redirect()->route(config('quickadmin.route').'.commonarticles.index');
	}

	/**
	 * Show the form for editing the specified commonarticles.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$commonarticles = CommonArticles::find($id);
	    
	    
		return view('admin.commonarticles.edit', compact('commonarticles'));
	}

	/**
	 * Update the specified commonarticles in storage.
     * @param UpdateCommonArticlesRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateCommonArticlesRequest $request)
	{
		$commonarticles = CommonArticles::findOrFail($id);

        

		$commonarticles->update($request->all());

		return redirect()->route(config('quickadmin.route').'.commonarticles.index');
	}

	/**
	 * Remove the specified commonarticles from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		CommonArticles::destroy($id);

		return redirect()->route(config('quickadmin.route').'.commonarticles.index');
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
            CommonArticles::destroy($toDelete);
        } else {
            CommonArticles::whereNotNull('id')->delete();
        }

        return redirect()->route(config('quickadmin.route').'.commonarticles.index');
    }

}
