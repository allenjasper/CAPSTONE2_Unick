<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'user_id',
        'total',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // If you have order items, you can add:
    // public function items()
    // {
    //     return $this->hasMany(OrderItem::class);
    // }
}