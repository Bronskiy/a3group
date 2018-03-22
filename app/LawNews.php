<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laraveldaily\Quickadmin\Observers\UserActionsObserver;

use Carbon\Carbon;

use Illuminate\Database\Eloquent\SoftDeletes;

class LawNews extends Model {

    use SoftDeletes;

    /**
    * The attributes that should be mutated to dates.
    *
    * @var array
    */
    protected $dates = ['deleted_at'];

    protected $table    = 'lawnews';

    protected $fillable = [
          'lawnews_title',
          'lawnews_slug',
          'lawnewscategories_id',
          'lawnews_description',
          'cat_date',
          'language_id'
    ];


    public static function boot()
    {
        parent::boot();

        LawNews::observe(new UserActionsObserver);
    }

    public function lawnewscategories()
    {
        return $this->hasOne('App\LawNewsCategories', 'id', 'lawnewscategories_id');
    }


        public function language()
        {
            return $this->hasOne('App\Language', 'id', 'language_id');
        }
    /**
     * Set attribute to date format
     * @param $input
     */
    public function setCatDateAttribute($input)
    {
        if($input != '') {
            $this->attributes['cat_date'] = Carbon::createFromFormat(config('quickadmin.date_format'), $input)->format('Y-m-d');
        }else{
            $this->attributes['cat_date'] = '';
        }
    }

    /**
     * Get attribute from date format
     * @param $input
     *
     * @return string
     */
    public function getCatDateAttribute($input)
    {
        if($input != '0000-00-00') {
            return Carbon::createFromFormat('Y-m-d', $input)->format(config('quickadmin.date_format'));
        }else{
            return '';
        }
    }



}
