<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class LegalStatement extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'legalstatement';
    
    protected $fillable = [
          'legal_title',
          'legal_description'
    ];
    

    public static function boot()
    {
        parent::boot();

        LegalStatement::observe(new UserActionsObserver);
    }
    
    
    
    
}