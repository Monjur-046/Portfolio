function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center px-6 pt-20"
        >
            <div className="max-w-4xl mx-auto text-center">

                
                {/* Name */}
                <h1 className="text-5xl md:text-7xl font-bold text-[#20251F] mb-6">
                    I'm{" "}
                    <span className="text-[#3F6B4F]">
                        Monjur E Alahi
                    </span>
                </h1>

                {/* Role */}
                <h2 className="text-2xl md:text-3xl text-[#667066] mb-6">
                    Computer Science & Engineering Student
                </h2>

                {/* Introduction */}
                <p className="text-[#667066] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                    I am passionate about technology and love solving problems in
                    my own way. I enjoy learning new things, building projects
                    and having fun along the way.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">

                    <a
                        href="#about"
                        className="px-7 py-3 bg-[#3F6B4F] hover:bg-[#345A42] text-white rounded-lg font-medium transition"
                    >
                        Learn More About Me
                    </a>

                    <a
                        href="#contact"
                        className="px-7 py-3 bg-[#3F6B4F] hover:bg-[#345A42] text-white rounded-lg font-medium transition"
                    >
                        Contact Me
                    </a>

                </div>

            </div>
        </section>
    );
}

export default Hero;