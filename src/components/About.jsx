import certificateImage from "../assets/certificate.jpeg"

function About() {
    return (
        <section
            id="about"
            className="py-24 px-6 bg-[#F5F7F2]"
        >
            <div className="max-w-6xl mx-auto">

                
                <div className="text-center mb-16">
                    <p className="text-xl text-[#3F6B4F] font-semibold font-medium mb-2">
                        know more
                    </p>

                   <h2 className="text-4xl md:text-5xl font-bold text-[#20251F]">
                        About Me
                    </h2>
                </div>

                
                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* Text */}
                    <div className="bg-white border border-[#D5DDD5] rounded-2xl p-8">
                        <h3 className="text-2xl font-semibold text-[#20251F] mb-6">
                            I am Monjur E Alahi
                        </h3>

                        <p className="text-[#667066] leading-relaxed mb-6">
                            an undergraduate student studying
                            Computer Science & Engineering at Metropolitan
                            University, Sylhet. I am currently in my 8th semester.
                        </p>

                        <p className="text-[#667066] leading-relaxed mb-6">
                            I am passionate about technology and enjoy solving
                            problems in my own way. I enjoy learning new
                            technologies, building projects and exploring
                            different areas of programming.
                        </p>

                        <p className="text-[#667066] leading-relaxed">
                            Outside of academics and programming, I enjoy
                            video gaming and cycling.
                        </p>
                    </div>

                    {/* Education */}
                    <div className="bg-white border border-[#D5DDD5] rounded-2xl p-8">
                        <h3 className="text-2xl font-semibold text-[#20251F] mb-6">
                            Education
                        </h3>

                        <div className="space-y-6">

                            {/* University */}
                            <div className="border-l-4 border-[#3F6B4F] pl-6">
                                <h4 className="text-xl font-bold text-[#20251F]">
                                    Metropolitan University
                                </h4>

                                <p className="text-[#667066] font-semibold mt-1">
                                    BSc in Computer Science & Engineering
                                </p>

                                <p className="text-[#667066] font-semibold mt-2">
                                    2024 - running
                                    </p>
                            </div>

                            {/* College */}
                            <div className="border-l-4 border-[#D5DDD5] pl-6">
                                <h4 className="text-xl font-bold text-[#20251F]">
                                    Scholarshome Majortila College
                                </h4>

                                <p className="text-[#667066] font-semibold mt-2">
                                    Higher Secondary Certificate
                            
                                </p>

                                <p className="text-[#667066] font-semibold mt-2">
                                    2020 - 2023
                                </p>


                            </div>

                            {/* School */}
                            <div className="border-l-4 border-[#D5DDD5] pl-6">
                                <h4 className="text-xl font-bold text-[#20251F]">
                                    Jalalabad Cantonment Board High School
                                </h4>

                                <p className="text-[#667066] font-semibold  mt-2">
                                    Secondary School Certificate
                                </p>
                                <p className="text-[#667066] font-semibold mt-2">
                                    2018 - 2020
                                </p>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="mt-12 bg-white border border-[#D5DDD5] rounded-2xl p-8">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                       
                        <div>
                            <p className="text-[#3F6B4F] text-2xl font-medium mb-2">
                                Extracurricular Activites 
                            </p>

                            <h3 className="text-2xl md:text-2xl font-semibold text-[#20251F] mb-6">
                                Volunteer Director
                                </h3>

                                <p className="text-[#667066] leading-relaxed mb-5">
                                    I had the opportunity to serve as a Volunteer Director in the "Vison & Smile - 2026" event organized by Metropolitan University Social Services Club. 
                                </p>
                                </div>

                                {/*certificate*/}

                                <div className="flex justify-center md:justify-end">
                                    <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-[#D5DDD5] shadow-sm">
                                        <img src={certificateImage}
                                        alt="Certificate for Volunteer Director role"
                                        className="w-full h-auto object-contain"
                                        />
                                        

                                    </div>
                                </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;