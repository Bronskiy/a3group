<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Redirect;
use Schema;
use App\Vacancies;
use App\Http\Requests\CreateVacanciesRequest;
use App\Http\Requests\UpdateVacanciesRequest;
use Illuminate\Http\Request;
use App\Language;



class VacanciesController extends Controller {

	/**
	 * Display a listing of vacancies
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $vacancies = Vacancies::with("language")->get();

		return view('admin.vacancies.index', compact('vacancies'));
	}

	/**
	 * Show the form for creating a new vacancies
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
		$language = Language::pluck("lang_name", "id")->prepend('Выбрать', 0);


	    return view('admin.vacancies.create', compact("language"));
	}

	/**
	 * Store a newly created vacancies in storage.
	 *
     * @param CreateVacanciesRequest|Request $request
	 */
	public function store(CreateVacanciesRequest $request)
	{

		Vacancies::create($request->all());

		return redirect()->route(config('quickadmin.route').'.vacancies.index');
	}

	/**
	 * Show the form for editing the specified vacancies.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$vacancies = Vacancies::find($id);
		$language = Language::pluck("lang_name", "id")->prepend('Выбрать', 0);


		return view('admin.vacancies.edit', compact('vacancies', 'language'));
	}

	/**
	 * Update the specified vacancies in storage.
     * @param UpdateVacanciesRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateVacanciesRequest $request)
	{
		$vacancies = Vacancies::findOrFail($id);



		$vacancies->update($request->all());

		return redirect()->route(config('quickadmin.route').'.vacancies.index');
	}

	/**
	 * Remove the specified vacancies from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		Vacancies::destroy($id);

		return redirect()->route(config('quickadmin.route').'.vacancies.index');
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
            Vacancies::destroy($toDelete);
        } else {
            Vacancies::whereNotNull('id')->delete();
        }

        return redirect()->route(config('quickadmin.route').'.vacancies.index');
    }

}
