<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class LawNewsCategories extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'lawnewscategories';
    
    protected $fillable = [
          'lawnews_cat_title',
          'lawnews_cat_slug'
    ];
    

    public static function boot()
    {
        parent::boot();

        LawNewsCategories::observe(new UserActionsObserver);
    }
    
    
    
    
}