<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

class CreateLawNewsTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Model::unguard();
        Schema::create('lawnews',function(Blueprint $table){
            $table->increments("id");
            $table->string("lawnews_title");
            $table->string("lawnews_slug");
            $table->integer("lawnewscategories_id")->references("id")->on("lawnewscategories");
            $table->text("lawnews_description")->nullable();
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
        Schema::drop('lawnews');
    }

}
