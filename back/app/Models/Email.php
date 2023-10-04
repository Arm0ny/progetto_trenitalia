<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Email extends Model
{
    use HasFactory;

    protected $fillable = [
        'email',
    ];

    // Definisci la relazione con il modello Token (uno-a-uno)
    public function tokens()
    {
        return $this->belongsToMany(Token::class, 'email_token', 'email_id', 'token_id');
    }

    public function person()
    {
        return $this->belongsTo(Person::class, 'email_id', 'id');
    }
}
