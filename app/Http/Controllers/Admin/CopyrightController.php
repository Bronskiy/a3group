<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Redirect;
use Schema;
use App\Copyright;
use App\Http\Requests\CreateCopyrightRequest;
use App\Http\Requests\UpdateCopyrightRequest;
use Illuminate\Http\Request;



class CopyrightController extends Controller {

	/**
	 * Display a listing of copyright
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $copyright = Copyright::all();

		return view('admin.copyright.index', compact('copyright'));
	}

	/**
	 * Show the form for creating a new copyright
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    
	    
	    return view('admin.copyright.create');
	}

	/**
	 * Store a newly created copyright in storage.
	 *
     * @param CreateCopyrightRequest|Request $request
	 */
	public function store(CreateCopyrightRequest $request)
	{
	    
		Copyright::create($request->all());

		return redirect()->route(config('quickadmin.route').'.copyright.index');
	}

	/**
	 * Show the form for editing the specified copyright.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$copyright = Copyright::find($id);
	    
	    
		return view('admin.copyright.edit', compact('copyright'));
	}

	/**
	 * Update the specified copyright in storage.
     * @param UpdateCopyrightRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateCopyrightRequest $request)
	{
		$copyright = Copyright::findOrFail($id);

        

		$copyright->update($request->all());

		return redirect()->route(config('quickadmin.route').'.copyright.index');
	}

	/**
	 * Remove the specified copyright from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		Copyright::destroy($id);

		return redirect()->route(config('quickadmin.route').'.copyright.index');
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
            Copyright::destroy($toDelete);
        } else {
            Copyright::whereNotNull('id')->delete();
        }

        return redirect()->route(config('quickadmin.route').'.copyright.index');
    }

}
