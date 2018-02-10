<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Redirect;
use Schema;
use App\MainMenu;
use App\Http\Requests\CreateMainMenuRequest;
use App\Http\Requests\UpdateMainMenuRequest;
use Illuminate\Http\Request;



class MainMenuController extends Controller {

	/**
	 * Display a listing of mainmenu
	 *
     * @param Request $request
     *
     * @return \Illuminate\View\View
	 */
	public function index(Request $request)
    {
        $mainmenu = MainMenu::with("mainmenu")->get();

		return view('admin.mainmenu.index', compact('mainmenu'));
	}

	/**
	 * Show the form for creating a new mainmenu
	 *
     * @return \Illuminate\View\View
	 */
	public function create()
	{
	    $mainmenu = MainMenu::pluck("menu_title", "id")->prepend('Please select', 0);


	    return view('admin.mainmenu.create', compact("mainmenu"));
	}

	/**
	 * Store a newly created mainmenu in storage.
	 *
     * @param CreateMainMenuRequest|Request $request
	 */
	public function store(CreateMainMenuRequest $request)
	{

		MainMenu::create($request->all());

		return redirect()->route(config('quickadmin.route').'.mainmenu.index');
	}

	/**
	 * Show the form for editing the specified mainmenu.
	 *
	 * @param  int  $id
     * @return \Illuminate\View\View
	 */
	public function edit($id)
	{
		$mainmenu = MainMenu::find($id);
	   $mainmenu_p = MainMenu::pluck("menu_title", "id")->prepend('Please select', 0);


		return view('admin.mainmenu.edit', compact('mainmenu', "mainmenu_p"));
	}

	/**
	 * Update the specified mainmenu in storage.
     * @param UpdateMainMenuRequest|Request $request
     *
	 * @param  int  $id
	 */
	public function update($id, UpdateMainMenuRequest $request)
	{
		$mainmenu = MainMenu::findOrFail($id);



		$mainmenu->update($request->all());

		return redirect()->route(config('quickadmin.route').'.mainmenu.index');
	}

	/**
	 * Remove the specified mainmenu from storage.
	 *
	 * @param  int  $id
	 */
	public function destroy($id)
	{
		MainMenu::destroy($id);

		return redirect()->route(config('quickadmin.route').'.mainmenu.index');
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
            MainMenu::destroy($toDelete);
        } else {
            MainMenu::whereNotNull('id')->delete();
        }

        return redirect()->route(config('quickadmin.route').'.mainmenu.index');
    }

}
