<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return response()->json($posts);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|max:255'
        ]);

        Post::create($request->all());

        return response()->json(['message' => 'Post Created Successfully'], 201);
    }

    public function update(Request $request, int $id)
    {
        $request->validate([
            'title' => 'required|max:255'
        ]);

        $post = Post::find($id);
        $post->update($request->all());

        return response()->json(['message' => 'Post Updated Successfully']);
    }

    public function destroy(Request $request, int $id)
    {
        $post = Post::find($id);
        $post->delete();

        return response()->json(['message' => 'Post Deleted Successfully']);
    }

    public function show(Post $post)
    {
        return response()->json($post);
    }
}
