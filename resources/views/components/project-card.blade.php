@props(['title', 'description', 'image', 'technologies', 'liveLink' => null, 'cacheLink' => null])

<div class="bg-[#2d2d2d] rounded-lg overflow-hidden">
    <img src="{{ $image }}" alt="{{ $title }}" class="w-full h-48 object-cover">
    <div class="p-6 space-y-4">
        <p class="text-sm text-gray-400">{{ implode(' ', $technologies) }}</p>
        <h3 class="text-xl font-bold">{{ $title }}</h3>
        <p class="text-gray-400">{{ $description }}</p>
        <div class="flex space-x-4">
            @if ($liveLink)
                <a href="{{ $liveLink }}" target="_blank"
                    class="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300">
                    <span>Live</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                </a>
            @endif
            @if ($cacheLink)
                <a href="{{ $cacheLink }}" target="_blank"
                    class="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300">
                    <span>Cached ></span>
                </a>
            @endif
        </div>
    </div>
</div>
