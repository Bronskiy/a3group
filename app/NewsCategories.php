<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class NewsCategories extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'newscategories';
    
    protected $fillable = [
          'cat_title',
          'cat_slug'
    ];
    

    public static function boot()
    {
        parent::boot();

        NewsCategories::observe(new UserActionsObserver);
    }
    
    
    
    
}