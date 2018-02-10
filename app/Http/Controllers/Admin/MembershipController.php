<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Redirect;
use Schema;
use App\Membership;
use App\Http\Requests\CreateMembershipRequest;
use App\Http\Requests\UpdateMembershipRequest;
use Illuminate\Http\Request;



class MembershipController extends Controller {

	/**
	 * Display a listing of membership
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $membership = Membership::all();

		return view('admin.membership.index', compact('membership'));
	}

	/**
	 * Show the form for creating a new membership
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    
	    
	    return view('admin.membership.create');
	}

	/**
	 * Store a newly created membership in storage.
	 *
     * @param CreateMembershipRequest|Request $request
	 */
	public function store(CreateMembershipRequest $request)
	{
	    
		Membership::create($request->all());

		return redirect()->route(config('quickadmin.route').'.membership.index');
	}

	/**
	 * Show the form for editing the specified membership.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$membership = Membership::find($id);
	    
	    
		return view('admin.membership.edit', compact('membership'));
	}

	/**
	 * Update the specified membership in storage.
     * @param UpdateMembershipRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateMembershipRequest $request)
	{
		$membership = Membership::findOrFail($id);

        

		$membership->update($request->all());

		return redirect()->route(config('quickadmin.route').'.membership.index');
	}

	/**
	 * Remove the specified membership from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		Membership::destroy($id);

		return redirect()->route(config('quickadmin.route').'.membership.index');
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
            Membership::destroy($toDelete);
        } else {
            Membership::whereNotNull('id')->delete();
        }

        return redirect()->route(config('quickadmin.route').'.membership.index');
    }

}
