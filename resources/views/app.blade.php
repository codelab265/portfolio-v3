<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#282C33">
    <meta name="description"
        content="Mphatso Mlenga - Full Stack Developer specializing in web and mobile app development. Creating modern, responsive applications with cutting-edge technologies.">
    <meta name="keywords"
        content="Mphatso Mlenga, Web Developer, Mobile App Developer, Full Stack Developer, React Developer, Laravel Developer, Malawi Developer">
    <meta name="author" content="Mphatso Mlenga">
    <meta name="robots" content="index, follow">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ config('app.url') }}">
    <meta property="og:title" content="{{ config('app.name') }} - Full Stack Developer">
    <meta property="og:description"
        content="Full Stack Developer specializing in web and mobile app development. Creating modern, responsive applications with cutting-edge technologies.">
    <meta property="og:image" content="{{ asset('images/hero2.png') }}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="{{ config('app.url') }}">
    <meta property="twitter:title" content="{{ config('app.name') }} - Full Stack Developer">
    <meta property="twitter:description"
        content="Full Stack Developer specializing in web and mobile app development. Creating modern, responsive applications with cutting-edge technologies.">
    <meta property="twitter:image" content="{{ asset('images/hero2.png') }}">

    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="{{ asset('images/logo.svg') }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('images/logo.svg') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('images/logo.svg') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('images/logo.svg') }}">
    <link rel="manifest" href="/site.webmanifest">

    <title inertia>{{ config('app.name', 'Mphatso Mlenga') }} - Full Stack Developer</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap" rel="stylesheet">

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-fira-code antialiased bg-background text-foreground">
    @inertia
</body>

</html>
