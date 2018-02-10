<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Redirect;
use Schema;
use App\Privacy;
use App\Http\Requests\CreatePrivacyRequest;
use App\Http\Requests\UpdatePrivacyRequest;
use Illuminate\Http\Request;



class PrivacyController extends Controller {

	/**
	 * Display a listing of privacy
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $privacy = Privacy::all();

		return view('admin.privacy.index', compact('privacy'));
	}

	/**
	 * Show the form for creating a new privacy
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    
	    
	    return view('admin.privacy.create');
	}

	/**
	 * Store a newly created privacy in storage.
	 *
     * @param CreatePrivacyRequest|Request $request
	 */
	public function store(CreatePrivacyRequest $request)
	{
	    
		Privacy::create($request->all());

		return redirect()->route(config('quickadmin.route').'.privacy.index');
	}

	/**
	 * Show the form for editing the specified privacy.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$privacy = Privacy::find($id);
	    
	    
		return view('admin.privacy.edit', compact('privacy'));
	}

	/**
	 * Update the specified privacy in storage.
     * @param UpdatePrivacyRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdatePrivacyRequest $request)
	{
		$privacy = Privacy::findOrFail($id);

        

		$privacy->update($request->all());

		return redirect()->route(config('quickadmin.route').'.privacy.index');
	}

	/**
	 * Remove the specified privacy from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		Privacy::destroy($id);

		return redirect()->route(config('quickadmin.route').'.privacy.index');
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
            Privacy::destroy($toDelete);
        } else {
            Privacy::whereNotNull('id')->delete();
        }

        return redirect()->route(config('quickadmin.route').'.privacy.index');
    }

}
