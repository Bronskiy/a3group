<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class About extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'about';
    
    protected $fillable = [
          'about_title',
          'about_description'
    ];
    

    public static function boot()
    {
        parent::boot();

        About::observe(new UserActionsObserver);
    }
    
    
    
    
}