const TimelineItem = ({ data, delay }) => {
  return (
    <div
      className="light-card flex items-center gap-5 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {data.img && (
        <img src={data.img} alt={data.title} className="h-auto w-16 object-cover border-2 border-[#a949a8ff]" />
      )}

      <div className="text-left">
        <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 hover:text-violet-700 md:text-xl">{data.title}</h3>
        <p className="text-sm text-gray-300 md:text-base">{data.institution}</p>
        <span className="text-xs text-gray-400 md:text-sm">{data.duration}</span>
      </div>
    </div>
  );
};

export default TimelineItem;
