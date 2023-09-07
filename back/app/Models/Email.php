<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Email extends Model
{
    use HasFactory;

    protected $fillable = [
        'email', 'token_id',
    ];

    // Definisci la relazione con il modello Token (uno-a-uno)
    public function token()
    {
        return $this->belongsTo(Token::class, 'token_id');
    }

    public function person()
    {
        return $this->belongsTo(Person::class, 'email_id', 'id');
    }
}
