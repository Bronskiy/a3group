<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class CommonArticles extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'commonarticles';
    
    protected $fillable = [
          'common_title',
          'common_slug',
          'common_description'
    ];
    

    public static function boot()
    {
        parent::boot();

        CommonArticles::observe(new UserActionsObserver);
    }
    
    
    
    
}