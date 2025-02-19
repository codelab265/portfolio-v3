<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MainController extends Controller
{
    public function index()
    {
        $reviews = Review::where('approved', true)->with('user')->orderBy('created_at', 'desc')->get();
        $projects = Project::query()->limit(3)->get();
        return Inertia::render('Welcome', ['reviews' => $reviews, 'projects' => $projects]);
    }

    public function projects()
    {
        $projects = Project::all();
        return Inertia::render('Projects', ['projects' => $projects]);
    }

    public function reviews()
    {
        if (Auth::check()) {
            $reviews = Review::where('approved', true)->with('user')->orderBy('created_at', 'desc')->get();
            return Inertia::render('Reviews', ['reviews' => $reviews]);
        }
        return redirect()->route('login');
    }

    public function createReview(Request $request)
    {
        if (!Auth::check()) {
            return redirect()->route('login');
        }

        $request->validate([
            'company' => 'required',
            'rating' => 'required|integer|min:1|max:5',
            'message' => 'required|string',
        ]);

        Review::updateOrCreate([
            'user_id' => Auth::user()->id,
        ], [
            'company' => $request->company,
            'rating' => $request->rating,
            'message' => $request->message,
        ]);

        return redirect()->route('reviews')->with('success', 'Thank you for your review!, it will be approved soon.');
    }
}
