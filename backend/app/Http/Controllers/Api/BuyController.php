<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\BuyRequest;
use App\Http\Requests\ReturnMoneyRequest;
use Illuminate\Http\Request;

class BuyController extends Controller
{
    /**
     * Handle a request to buy an item.
     */
    public function buyItem(BuyRequest $request){
        $data            = $request->validated();
        $out = [];

        // Check item availability
        if ($data["item"]["availability"] > 0) {
            if ($data["item"]["cost"] <= $data["money"]) {
                // Capitalize item names
                $out["message"]  = "Enjoy your " . ucfirst($data["item"]["name"]);
                // Substract 1
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


    /**
     * Handle a request to return money.
     */
    public function returnMoney(ReturnMoneyRequest $request)
    {
        $data             = $request->validated();
        $moneyHistory     = $data["moneyHistory"];
        // Format to only have 2 number after point
        $moneyHistorySum  = number_format(array_sum($data["moneyHistory"]), 2);
        // Format to only have 2 number after point
        $totalMoney       = number_format($data["totalMoney"], 2);

        // Check if the total count has the same sum which is in the input money
        if ($totalMoney > 0 && $totalMoney == $moneyHistorySum) {
            // Split every response by line
            $out["response"] = implode(",\n", $moneyHistory);
            $out["message"]  = "Returned Money";
        } else {
            $out["error"]  = "You didn't insert money to return it";
        }

        return response($out);
    }
}
