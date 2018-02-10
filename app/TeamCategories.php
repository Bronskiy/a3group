<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class TeamCategories extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'teamcategories';
    
    protected $fillable = [
          'team_cat',
          'team_slug'
    ];
    

    public static function boot()
    {
        parent::boot();

        TeamCategories::observe(new UserActionsObserver);
    }
    
    
    
    
}