<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddLangToRecommendations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('recommendations', function (Blueprint $table) {
          $table->integer("language_id")->references("id")->on("language");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('recommendations', function (Blueprint $table) {
          $table->dropColumn('language_id');
        });
    }
}
