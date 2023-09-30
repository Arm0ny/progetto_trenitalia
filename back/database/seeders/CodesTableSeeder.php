<?php

namespace Database\Seeders;

use App\Models\Code;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CodesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $file = storage_path('codici.csv'); // Percorso del file CSV

        $data = array_map('str_getcsv', file($file));
        $header = array_shift($data);

        foreach ($data as $row) {
            $promoCode = $row[array_search('CODICE BUONO SCONTO', $header)];

            // Rimuove il ";20" dal promoCode se presente
            $promoCode = rtrim($promoCode, ';20');

            DB::table('codes')->insert([
                'promo_code' => $promoCode,
            ]);
        }
    }
}
