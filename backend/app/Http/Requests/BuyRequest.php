<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BuyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'item'              => 'required|array',
            'item.availability' => 'required|numeric',
            'item.code'         => 'required|numeric',
            'item.cost'         => 'required|numeric',
            'item.name'         => ['required', 'string', 'max:22'],
            'money'             => 'required|numeric'
        ];
    }
}
