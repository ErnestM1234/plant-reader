


import React from 'react';

export default function Title({ children }: { children: any }) {
    return (
        <div 
            className="title container grid items-center justify-center gap-4 px-4 text-center sm:gap-10 md:gap-8"
        >
            <div className="max-w-[90vw] mx-auto">
                <h2
                    className={`text-[3rem] font-medium sm:text-[3rem] md:text-[4.5rem] lg:text-[4.5rem] xl:text-[4.5rem]`}
                >
                    {children}
                </h2>   
            </div>
        </div>
    );
};
