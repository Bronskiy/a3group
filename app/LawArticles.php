<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;


use Illuminate\Database\Eloquent\SoftDeletes;

class LawArticles extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'lawarticles';

    protected $fillable = [
          'law_articles_title',
          'law_articles_slug',
          'law_articles_description',
          'language_id'
    ];


    public static function boot()
    {
        parent::boot();

        LawArticles::observe(new UserActionsObserver);
    }


        public function language()
        {
            return $this->hasOne('App\Language', 'id', 'language_id');
        }


}
