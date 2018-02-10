<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class Vacancies extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'vacancies';
    
    protected $fillable = [
          'vacancy_title',
          'vacancy_slug',
          'vacancy_company',
          'vacancy_description'
    ];
    

    public static function boot()
    {
        parent::boot();

        Vacancies::observe(new UserActionsObserver);
    }
    
    
    
    
}