<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name') }} - Web Designer & Front-end Developer</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="bg-[#1a1d21] text-gray-200 min-h-screen">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full p-4 z-50 bg-[#1a1d21]/80 backdrop-blur-sm">
        <div class="container mx-auto flex justify-between items-center">
            <a href="/" class="text-xl font-bold">Elias</a>
            <div class="space-x-6">
                <a href="#home" class="hover:text-purple-400">Home</a>
                <a href="#works" class="hover:text-purple-400">Works</a>
                <a href="#about-me" class="hover:text-purple-400">About me</a>
                <a href="#contacts" class="hover:text-purple-400">Contacts</a>
                <a href="#" class="hover:text-purple-400">EN</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex items-center pt-20">
        <div class="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="space-y-4">
                <h1 class="text-4xl font-bold">
                    Elias is a <span class="text-purple-400">web designer</span> and
                    <span class="text-purple-400">front-end developer</span>
                </h1>
                <p class="text-gray-400">
                    He crafts responsive websites where technologies meet creativity
                </p>
                <button
                    class="px-6 py-2 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-colors">
                    Contact me!!
                </button>
                <div class="mt-8">
                    <p class="text-sm">Currently working on</p>
                    <span class="inline-block mt-2 px-4 py-1 bg-[#2d2d2d] rounded">Portfolio</span>
                </div>
            </div>
            <div class="relative">
                <div class="relative z-10">
                    <img src="/images/hero.png" alt="Profile" class="w-full max-w-md mx-auto">
                </div>
                <div class="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent"></div>
            </div>
        </div>
    </section>

    <!-- Quote Section -->
    <section class="py-20">
        <div class="container mx-auto px-4">
            <blockquote class="max-w-2xl mx-auto text-center">
                <p class="text-2xl italic">"With great power comes great electricity bill"</p>
                <footer class="mt-4 text-right text-gray-400">- Dr. Who</footer>
            </blockquote>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="works" class="py-20">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center mb-8">
                <h2 class="text-2xl font-bold"><span class="text-purple-400">#</span>projects</h2>
                <a href="#" class="text-gray-400 hover:text-purple-400">View all →</a>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <x-project-card title="ChertNodes" description="Minecraft servers hosting"
                    image="/images/chertnodes.png" :technologies="['HTML', 'SCSS', 'Python', 'Flask']" liveLink="#" cacheLink="#" />
                <x-project-card title="ProtectX" description="Discord anti-crash bot" image="/images/protectx.png"
                    :technologies="['React', 'Express', 'Discord.js', 'Node.js']" liveLink="#" />
                <x-project-card title="Kahoot Answers Viewer" description="Get answers to your kahoot quiz"
                    image="/images/kahoot.png" :technologies="['CSS', 'Express', 'Node.js']" liveLink="#" />
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20">
        <div class="container mx-auto px-4">
            <h2 class="text-2xl font-bold mb-8"><span class="text-purple-400">#</span>skills</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <x-skills-group title="Languages" :skills="['TypeScript', 'Lua', 'Python', 'JavaScript']" />
                <x-skills-group title="Databases" :skills="['SQLite', 'PostgreSQL', 'Mongo']" />
                <x-skills-group title="Tools" :skills="['VSCode', 'Neovim', 'Linux', 'Figma', 'XFCE', 'Arch', 'Git', 'Font Awesome']" />
                <x-skills-group title="Other" :skills="['HTML', 'CSS', 'EJS', 'SCSS', 'REST', 'Jinja']" />
                <x-skills-group title="Frameworks" :skills="['React', 'Vue', 'Discord.js', 'Flask', 'Express.js']" />
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about-me" class="py-20">
        <div class="container mx-auto px-4">
            <h2 class="text-2xl font-bold mb-8"><span class="text-purple-400">#</span>about-me</h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="space-y-4">
                    <p>Hello, I'm Elias!</p>
                    <p class="text-gray-400">
                        I'm a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites
                        from scratch and raise them into modern user-friendly web experiences.
                    </p>
                    <p class="text-gray-400">
                        Transforming my creativity and knowledge into a websites has been my passion for over a year. I
                        have been helping various clients to establish their presence online. I always strive to learn
                        about the newest technologies and frameworks.
                    </p>
                    <button
                        class="px-6 py-2 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-colors">
                        Read more →
                    </button>
                </div>
                <div class="relative">
                    <img src="/images/about.png" alt="About" class="w-full max-w-md mx-auto">
                </div>
            </div>
        </div>
    </section>

    <!-- Contacts Section -->
    <section id="contacts" class="py-20">
        <div class="container mx-auto px-4">
            <h2 class="text-2xl font-bold mb-8"><span class="text-purple-400">#</span>contacts</h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <p class="text-gray-400">
                    I'm interested in freelance opportunities. However, if you have other request or question, don't
                    hesitate to contact me
                </p>
                <div class="bg-[#2d2d2d] p-6 rounded-lg">
                    <h3 class="text-xl mb-4">Message me here</h3>
                    <div class="space-y-2">
                        <p>
                            <i class="fab fa-discord"></i>
                            <span class="ml-2">Elias#9519</span>
                        </p>
                        <p>
                            <i class="fas fa-envelope"></i>
                            <span class="ml-2">elias@elias.me</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 border-t border-gray-800">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="flex items-center space-x-2">
                    <span class="font-bold">Elias</span>
                    <span class="text-gray-400">elias@elias-dev.ml</span>
                </div>
                <p class="text-gray-400">Web designer and front-end developer</p>
                <div class="mt-4 md:mt-0">
                    <p class="text-center text-gray-400">Media</p>
                    <div class="flex space-x-4 mt-2">
                        <a href="#" class="hover:text-purple-400"><i class="fab fa-github"></i></a>
                        <a href="#" class="hover:text-purple-400"><i class="fab fa-figma"></i></a>
                        <a href="#" class="hover:text-purple-400"><i class="fab fa-discord"></i></a>
                    </div>
                </div>
            </div>
            <div class="text-center mt-8 text-gray-400">
                © Copyright 2023. Made by Elias
            </div>
        </div>
    </footer>
</body>

</html>
