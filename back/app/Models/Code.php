<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Code extends Model
{
    use HasFactory;

    protected $fillable = [
        'promo_code',
    ];

    // Definisci la relazione con il modello Token (uno-a-uno)
    public function tokens()
    {
        return $this->belongsToMany(Token::class, 'code_token', 'code_id', 'token_id');
    }
}
