<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\BuyRequest;
use Illuminate\Http\Request;

class BuyController extends Controller
{
    public function buyItem(BuyRequest $request){
        $data            = $request->validated();
        $out = [];
        if ($data["item"]["availability"] > 0) {
            if ($data["item"]["cost"] <= $data["money"]) {
                $out["message"]  = "Enjoy your " . ucfirst($data["item"]["name"]);
                $out["response"] = $data["item"]["availability"] - 1;
                $out["change"]   = number_format($data["money"] - $data["item"]["cost"], 2);
            } else {
                $out["error"]  = "Insufficient money";
            }
        } else {
            $out["error"]  = "No Availability";
        }

        return response($out);
    }

    public function returnMoney(Request $request){

    }
}
