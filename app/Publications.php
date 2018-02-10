<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class Publications extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'publications';
    
    protected $fillable = [
          'publications_title',
          'publications_file',
          'publications_link'
    ];
    

    public static function boot()
    {
        parent::boot();

        Publications::observe(new UserActionsObserver);
    }
    
    
    
    
}