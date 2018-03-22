<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Redirect;
use Schema;
use App\FooterMenu;
use App\Http\Requests\CreateFooterMenuRequest;
use App\Http\Requests\UpdateFooterMenuRequest;
use Illuminate\Http\Request;

use App\Language;


class FooterMenuController extends Controller {

	/**
	 * Display a listing of footermenu
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $footermenu = FooterMenu::with("language")->get();

		return view('admin.footermenu.index', compact('footermenu'));
	}

	/**
	 * Show the form for creating a new footermenu
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{

		$language = Language::pluck("lang_name", "id")->prepend('Выбрать', 0);

	    return view('admin.footermenu.create', compact("language"));
	}

	/**
	 * Store a newly created footermenu in storage.
	 *
     * @param CreateFooterMenuRequest|Request $request
	 */
	public function store(CreateFooterMenuRequest $request)
	{

		FooterMenu::create($request->all());

		return redirect()->route(config('quickadmin.route').'.footermenu.index');
	}

	/**
	 * Show the form for editing the specified footermenu.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$footermenu = FooterMenu::find($id);

		$language = Language::pluck("lang_name", "id")->prepend('Выбрать', 0);

		return view('admin.footermenu.edit', compact('footermenu', 'language'));
	}

	/**
	 * Update the specified footermenu in storage.
     * @param UpdateFooterMenuRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateFooterMenuRequest $request)
	{
		$footermenu = FooterMenu::findOrFail($id);



		$footermenu->update($request->all());

		return redirect()->route(config('quickadmin.route').'.footermenu.index');
	}

	/**
	 * Remove the specified footermenu from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		FooterMenu::destroy($id);

		return redirect()->route(config('quickadmin.route').'.footermenu.index');
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
            FooterMenu::destroy($toDelete);
        } else {
            FooterMenu::whereNotNull('id')->delete();
        }

        return redirect()->route(config('quickadmin.route').'.footermenu.index');
    }

}
