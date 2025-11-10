export const SectionTitle = ({ icon, title }) => (
    <h2 className="text-3xl font-extrabold text-[#e0b0ff] text-center mb-10 relative"> {/* Updated text color */}
        <span className="inline-flex items-center space-x-3 bg-[#2a1a3e]/50 px-6 py-2 rounded-full border border-[#5a3a7b]/50 shadow-lg"> {/* Updated colors */}
            {icon}
            <span>{title}</span>
        </span>
        <div className="absolute left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#a955f7] rounded-full mt-2"></div> {/* Updated color */}
    </h2>
);
