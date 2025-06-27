<?php

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', fn (Request $req) => $req->user());

    Route::apiResource('products', ProductController::class);
    Route::apiResource('orders', OrderController::class);
    Route::apiResource('productions', ProductionController::class);
    Route::apiResource('inventory', InventoryController::class);

    Route::post('/logout', [AuthController::class, 'logout']);
});
