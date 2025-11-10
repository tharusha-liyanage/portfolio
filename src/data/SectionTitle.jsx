import React from "react";

export const SectionTitle = ({  title }) => (
    <h2 className="text-3xl font-extrabold text-gray-300 text-center mb-10 relative"> {/* Updated text color */}
        <span className="inline-flex items-center space-x-3  px-6 py-2  shadow-lg"> {/* Updated colors */}
            
            <span>{title}</span>
        </span>
        <div className="absolute left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#a949a8ff] rounded-full mt-2"></div> {/* Updated color */}
    </h2>
);
