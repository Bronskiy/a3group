<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

class CreateArticlesTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Model::unguard();
        Schema::create('articles',function(Blueprint $table){
            $table->increments("id");
            $table->string("news_title");
            $table->string("news_slug");
            $table->text("news_body")->nullable();
            $table->integer("newscategories_id")->references("id")->on("newscategories")->nullable();
            $table->date("cat_date")->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('articles');
    }

}