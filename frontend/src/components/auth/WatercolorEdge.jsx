import React from 'react';

export const WatercolorEdge = () => (
    <div className="absolute right-0 top-0 bottom-0 w-24 translate-x-[45%] pointer-events-none z-10"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 1000' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23FFFFFF' d='M100,0 H0 C10,50 40,80 20,120 C-10,180 30,220 10,250 C-10,280 20,320 0,350 C-20,380 30,420 10,480 C-10,520 40,580 20,620 C-5,650 35,680 15,720 C-10,780 20,820 0,850 C-20,880 30,920 10,950 C-5,970 15,990 0,1000 H100 Z'/%3E%3C/svg%3E")`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            filter: 'drop-shadow(-5px 0px 10px rgba(255,255,255,0.8))'
        }}
    />
);
