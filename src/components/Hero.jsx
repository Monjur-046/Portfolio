import profileImage from "../assets/profile.jpeg";

function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center px-6 pt-20"
        >
            <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

                {/*My Intro*/}
                <div className="text-center md:text-left">

                    {/* Name */}
                    <h1 className="text-5xl md:text-7xl font-bold text-[#20251F] mb-6">

                            Monjur E Alahi
                        
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-[#667066] mb-6">
                        Computer Science & Engineering Student
                    </h2>

                   
                    <p className="text-[#667066] text-lg max-w-2xl md:mx-0 mx-auto mb-10 leading-relaxed">
                        I am passionate about technology and love problem solving. I enjoy learning new things, building projects
                        and having fun along the way.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">

                        <a
                            href="#about"
                            className="px-7 py-3 bg-[#11afb8] hover:bg-[#00abab] text-white rounded-lg font-medium transition"
                        >
                            Learn More About Me
                        </a>

                        {/* <a
                            href="#contact"
                            className="px-7 py-3 bg-[#3F6B4F] hover:bg-[#345A42] text-white rounded-lg font-medium transition"
                        >
                            Contact Me
                        </a> */}

                    </div>

                </div>

                {/*Profile Picture */}
                <div className="flex justify-center md:justify-end">
                    <div className="relative">
                        <img
                            src={profileImage}
                            alt="Monjur E Alahi"
                            className="w-90 h-90 md:w-110 md:h-110 object-cover rounded-2xl shadow-x1 border-8 border-[#F5F7F2]"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;

