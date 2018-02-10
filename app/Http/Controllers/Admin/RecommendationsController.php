<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Redirect;
use Schema;
use App\Recommendations;
use App\Http\Requests\CreateRecommendationsRequest;
use App\Http\Requests\UpdateRecommendationsRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Traits\FileUploadTrait;


class RecommendationsController extends Controller {

	/**
	 * Display a listing of recommendations
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $recommendations = Recommendations::all();

		return view('admin.recommendations.index', compact('recommendations'));
	}

	/**
	 * Show the form for creating a new recommendations
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    
	    
	    return view('admin.recommendations.create');
	}

	/**
	 * Store a newly created recommendations in storage.
	 *
     * @param CreateRecommendationsRequest|Request $request
	 */
	public function store(CreateRecommendationsRequest $request)
	{
	    $request = $this->saveFiles($request);
		Recommendations::create($request->all());

		return redirect()->route(config('quickadmin.route').'.recommendations.index');
	}

	/**
	 * Show the form for editing the specified recommendations.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$recommendations = Recommendations::find($id);
	    
	    
		return view('admin.recommendations.edit', compact('recommendations'));
	}

	/**
	 * Update the specified recommendations in storage.
     * @param UpdateRecommendationsRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateRecommendationsRequest $request)
	{
		$recommendations = Recommendations::findOrFail($id);

        $request = $this->saveFiles($request);

		$recommendations->update($request->all());

		return redirect()->route(config('quickadmin.route').'.recommendations.index');
	}

	/**
	 * Remove the specified recommendations from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		Recommendations::destroy($id);

		return redirect()->route(config('quickadmin.route').'.recommendations.index');
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
            Recommendations::destroy($toDelete);
        } else {
            Recommendations::whereNotNull('id')->delete();
        }

        return redirect()->route(config('quickadmin.route').'.recommendations.index');
    }

}
