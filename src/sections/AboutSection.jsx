import React from "react";
import img2 from "../assets/img3.png";


export default function AboutSection() {
  return (
   <section id="about" className="py-16 bg-[#551252ff]/50"> {/* Section background */}
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content: Text */}
                <div className="animate-slideInLeft">
                    {/* Title styled like the image */}
                    <h2 className="text-4xl font-bold text-white mb-6 relative inline-block">
                    <span className="font-serif italic text-gray-300">About</span>{' '}
                    <span className="text-[#8e2489ff]">me</span>

                    <div className="absolute left-1/2 -translate-x-[60%] w-24 h-1 bg-[#a949a8ff] rounded-full mt-2"></div>
                    </h2>

                    <p className="text-gray-400 leading-relaxed space-y-4">
                        {/* This is the text from the image and CV */}
                        <span>
                            I am an undergraduate in Computer Science and Technology, passionate
                            about becoming a software engineer.
                        </span>
                        <span>
                            I have a solid understanding
                            of full-stack development through academic projects and self
                            learning, using technologies like PHP, React, MERN stack, and Spring
                            Boot. I enjoy problem solving, teamwork, and learning new tools to
                            build efficient and user friendly software solutions.
                        </span>
                    </p>
                </div>
                {/* Right Content: Image */}
                <div className="animate-slideInRight">
                    <img 
                        src={img2} 
                        alt="About Me Illustration" 
                        className="rounded-xl shadow-2xl shadow-[#a955f7]/20 border border-[#5a3a7b]/50"
                    />
                </div>
            </div>
        </div>
    </section>
  );
}
