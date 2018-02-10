<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class TeamMembers extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'teammembers';
    
    protected $fillable = [
          'member_name',
          'member_slug',
          'member_image',
          'teamcategories_id',
          'member_about',
          'member_email',
          'member_position'
    ];
    

    public static function boot()
    {
        parent::boot();

        TeamMembers::observe(new UserActionsObserver);
    }
    
    public function teamcategories()
    {
        return $this->hasOne('App\TeamCategories', 'id', 'teamcategories_id');
    }


    
    
    
}