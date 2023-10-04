<?php

namespace App\Http\Controllers;

use App\Models\Code;
use App\Models\Token;
use http\Env\Response;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CodeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function sendCode(Request $request)
    {
        $tokenParam = $request->input("token");
        $token = Token::where("token", $tokenParam)->first();

        if (!$token) {
            return response()->json(['message' => "invalid token provided"], 400);
        }

        $codes = $token->codes()->get();

        if ($codes->count() < 2) {
            $firstAvailableCode = Code::query()->where('given','=', false)->first();

            if ($firstAvailableCode) {
                $token->codes()->attach($firstAvailableCode->id);
                $firstAvailableCode->given = true;
                $firstAvailableCode->save();
                return response()->json(['promo_code' => $firstAvailableCode->promo_code], 200);
            } else {
                return response()->json(['message' => "no codes available"], 404);
            }
        }

        return response()->json(['promo_code' => $codes->last()->promo_code], 200);
    }
}
