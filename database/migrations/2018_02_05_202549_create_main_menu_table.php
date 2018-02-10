<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

class CreateMainMenuTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Model::unguard();
        Schema::create('mainmenu',function(Blueprint $table){
            $table->increments("id");
            $table->string("menu_title")->nullable();
            $table->string("menu_link")->nullable();
            $table->string("menu_order")->nullable();
            $table->integer("mainmenu_id")->references("id")->on("mainmenu")->nullable();
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
        Schema::drop('mainmenu');
    }

}
