<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Redirect;
use Schema;
use App\LegalStatement;
use App\Http\Requests\CreateLegalStatementRequest;
use App\Http\Requests\UpdateLegalStatementRequest;
use Illuminate\Http\Request;
use App\Language;



class LegalStatementController extends Controller {

	/**
	 * Display a listing of legalstatement
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $legalstatement = LegalStatement::with("language")->get();

		return view('admin.legalstatement.index', compact('legalstatement'));
	}

	/**
	 * Show the form for creating a new legalstatement
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
		$language = Language::pluck("lang_name", "id")->prepend('Выбрать', 0);


	    return view('admin.legalstatement.create', compact("language"));
	}

	/**
	 * Store a newly created legalstatement in storage.
	 *
     * @param CreateLegalStatementRequest|Request $request
	 */
	public function store(CreateLegalStatementRequest $request)
	{

		LegalStatement::create($request->all());

		return redirect()->route(config('quickadmin.route').'.legalstatement.index');
	}

	/**
	 * Show the form for editing the specified legalstatement.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$legalstatement = LegalStatement::find($id);
		$language = Language::pluck("lang_name", "id")->prepend('Выбрать', 0);


		return view('admin.legalstatement.edit', compact('legalstatement', 'language'));
	}

	/**
	 * Update the specified legalstatement in storage.
     * @param UpdateLegalStatementRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateLegalStatementRequest $request)
	{
		$legalstatement = LegalStatement::findOrFail($id);



		$legalstatement->update($request->all());

		return redirect()->route(config('quickadmin.route').'.legalstatement.index');
	}

	/**
	 * Remove the specified legalstatement from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		LegalStatement::destroy($id);

		return redirect()->route(config('quickadmin.route').'.legalstatement.index');
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
            LegalStatement::destroy($toDelete);
        } else {
            LegalStatement::whereNotNull('id')->delete();
        }

        return redirect()->route(config('quickadmin.route').'.legalstatement.index');
    }

}
