<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\BuyRequest;
use Illuminate\Http\Request;

class BuyController extends Controller
{
    /**
     *
     */
    public function buyItem(BuyRequest $request){
        $data = $request->validated();
        return response(['Name' => 'hello']);
    }

    public function returnMoney(Request $request){

    }
}
