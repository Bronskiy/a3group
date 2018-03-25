<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

class CreateCommonVariablesTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Model::unguard();
        Schema::create('commonvariables',function(Blueprint $table){
            $table->increments("id");
            $table->string("moscow_address")->nullable();
            $table->string("moscow_phone")->nullable();
            $table->string("moscow_email")->nullable();
            $table->string("moscow_map")->nullable();
            $table->string("kaluga_address")->nullable();
            $table->string("kaluga_phone")->nullable();
            $table->string("kaluga_email")->nullable();
            $table->string("kaluga_map")->nullable();
            $table->integer("language_id")->references("id")->on("language");
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
        Schema::drop('commonvariables');
    }

}
