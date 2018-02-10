<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class FooterMenu extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'footermenu';
    
    protected $fillable = [
          'footer_menu_title',
          'footer_menu_link',
          'footer_menu_order'
    ];
    

    public static function boot()
    {
        parent::boot();

        FooterMenu::observe(new UserActionsObserver);
    }
    
    
    
    
}