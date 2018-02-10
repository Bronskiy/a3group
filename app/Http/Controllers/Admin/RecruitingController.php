<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Redirect;
use Schema;
use App\Recruiting;
use App\Http\Requests\CreateRecruitingRequest;
use App\Http\Requests\UpdateRecruitingRequest;
use Illuminate\Http\Request;



class RecruitingController extends Controller {

	/**
	 * Display a listing of recruiting
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $recruiting = Recruiting::all();

		return view('admin.recruiting.index', compact('recruiting'));
	}

	/**
	 * Show the form for creating a new recruiting
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    
	    
	    return view('admin.recruiting.create');
	}

	/**
	 * Store a newly created recruiting in storage.
	 *
     * @param CreateRecruitingRequest|Request $request
	 */
	public function store(CreateRecruitingRequest $request)
	{
	    
		Recruiting::create($request->all());

		return redirect()->route(config('quickadmin.route').'.recruiting.index');
	}

	/**
	 * Show the form for editing the specified recruiting.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$recruiting = Recruiting::find($id);
	    
	    
		return view('admin.recruiting.edit', compact('recruiting'));
	}

	/**
	 * Update the specified recruiting in storage.
     * @param UpdateRecruitingRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateRecruitingRequest $request)
	{
		$recruiting = Recruiting::findOrFail($id);

        

		$recruiting->update($request->all());

		return redirect()->route(config('quickadmin.route').'.recruiting.index');
	}

	/**
	 * Remove the specified recruiting from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		Recruiting::destroy($id);

		return redirect()->route(config('quickadmin.route').'.recruiting.index');
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
            Recruiting::destroy($toDelete);
        } else {
            Recruiting::whereNotNull('id')->delete();
        }

        return redirect()->route(config('quickadmin.route').'.recruiting.index');
    }

}
