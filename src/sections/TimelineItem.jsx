import { motion } from "framer-motion";

const TimelineItem = ({ data, delay }) => {
  return (
    <motion.div
      className="flex items-center gap-5 p-5 rounded-xl cursor-pointer shadow-md 
             bg-gradient-to-r from-[#3e2d3dff] to-[#74225bff] 
             hover:shadow-[#ffb0fc]/60 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ delay: delay / 1000, duration: 0.6, ease: 'easeOut' }}
    >
      {data.img && (
        <motion.img
          src={data.img}
          alt={data.title}
          className="w-16 h-auto object-cover  border-2 border-[#a949a8ff]"
          whileHover={{ rotate: 5 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      )}

      <div className="text-left">
        <h3 className="font-bold text-white text-lg md:text-xl transition-colors duration-300 hover:text-[#792376ff]">
          {data.title}
        </h3>
        <p className="text-gray-300 text-sm md:text-base">{data.institution}</p>
        <span className="text-gray-400 text-xs md:text-sm">{data.duration}</span>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
