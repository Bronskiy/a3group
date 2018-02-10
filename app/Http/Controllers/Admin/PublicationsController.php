<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Redirect;
use Schema;
use App\Publications;
use App\Http\Requests\CreatePublicationsRequest;
use App\Http\Requests\UpdatePublicationsRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Traits\FileUploadTrait;


class PublicationsController extends Controller {

	/**
	 * Display a listing of publications
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $publications = Publications::all();

		return view('admin.publications.index', compact('publications'));
	}

	/**
	 * Show the form for creating a new publications
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    
	    
	    return view('admin.publications.create');
	}

	/**
	 * Store a newly created publications in storage.
	 *
     * @param CreatePublicationsRequest|Request $request
	 */
	public function store(CreatePublicationsRequest $request)
	{
	    $request = $this->saveFiles($request);
		Publications::create($request->all());

		return redirect()->route(config('quickadmin.route').'.publications.index');
	}

	/**
	 * Show the form for editing the specified publications.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$publications = Publications::find($id);
	    
	    
		return view('admin.publications.edit', compact('publications'));
	}

	/**
	 * Update the specified publications in storage.
     * @param UpdatePublicationsRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdatePublicationsRequest $request)
	{
		$publications = Publications::findOrFail($id);

        $request = $this->saveFiles($request);

		$publications->update($request->all());

		return redirect()->route(config('quickadmin.route').'.publications.index');
	}

	/**
	 * Remove the specified publications from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		Publications::destroy($id);

		return redirect()->route(config('quickadmin.route').'.publications.index');
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
            Publications::destroy($toDelete);
        } else {
            Publications::whereNotNull('id')->delete();
        }

        return redirect()->route(config('quickadmin.route').'.publications.index');
    }

}
