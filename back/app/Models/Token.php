<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Token extends Model
{
    use HasFactory;

    protected $fillable = [
        'token',
    ];

    // Definisci la relazione con il modello Email (uno-a-molti)
    public function email()
    {
        return $this->hasOne(Email::class, 'token_id');
    }

    public function codes()
    {
        return $this->belongsToMany(Code::class, 'code_token', 'token_id', 'code_id');
    }
}
