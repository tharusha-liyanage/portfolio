import React from "react";
import { Card } from "../data/card";


const TimelineItem = ({ data, delay }) => (
    <Card delay={delay}>
        <div className="flex items-center space-x-4">
            <div className={`p-3 rounded-full ${data.type === 'Education' ? 'bg-blue-900/30 text-blue-400' : data.type === 'Achievement' ? 'bg-yellow-900/30 text-yellow-400' : 'bg-purple-900/30 text-purple-400'} flex-shrink-0`}> {/* Updated bg opacity */}
                {data.icon}
            </div>
            <div>
                <h3 className="text-lg font-semibold text-white">{data.title}</h3>
                <p className="text-sm text-gray-300">{data.institution}</p>
                <p className="text-xs text-[#c084fc] mt-1">{data.duration}</p> {/* Updated color */}
            </div>
        </div>
    </Card>
);
export default TimelineItem;