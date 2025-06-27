<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'stock',
        'price',
        'description',
    ];

    public function inventory()
    {
        return $this->hasOne(Inventory::class);
    }
}