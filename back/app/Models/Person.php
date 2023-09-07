<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    protected $fillable = ['first_name', 'last_name', 'email_id'];

    public function email()
    {
        return $this->hasOne(Email::class, 'id', 'email_id');
    }
}
