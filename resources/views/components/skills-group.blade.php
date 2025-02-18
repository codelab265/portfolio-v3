@props(['title', 'skills'])

<div class="bg-[#2d2d2d] p-4 rounded-lg">
    <h3 class="text-xl font-bold mb-4">{{ $title }}</h3>
    <div class="space-y-2">
        @foreach ($skills as $skill)
            <span class="inline-block px-3 py-1 bg-[#1a1d21] rounded mr-2 mb-2 text-sm">{{ $skill }}</span>
        @endforeach
    </div>
</div>
