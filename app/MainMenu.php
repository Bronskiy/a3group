<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class MainMenu extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'mainmenu';

    protected $fillable = [
          'menu_title',
          'menu_link',
          'menu_order',
          'mainmenu_id'
    ];


    public static function boot()
    {
        parent::boot();

        MainMenu::observe(new UserActionsObserver);
    }

    public function mainmenu()
    {
        return $this->hasOne('App\MainMenu', 'id', 'mainmenu_id');
    }





}
