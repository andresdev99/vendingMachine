<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\BuyRequest;
use App\Http\Requests\ReturnMoneyRequest;
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

    public function returnMoney(ReturnMoneyRequest $request)
    {
        $data             = $request->validated();
        $moneyHistory     = $data["moneyHistory"];
        $moneyHistorySum  = number_format(array_sum($data["moneyHistory"]), 2);
        $totalMoney       = number_format($data["totalMoney"], 2);

        if ($totalMoney > 0 && $totalMoney == $moneyHistorySum) {
            $out["response"] = implode(",\n", $moneyHistory);
            $out["message"]  = "Returned Money";
        } else {
            $out["error"]  = "You didn't insert money to return it";
        }

        return response($out);
    }
}
