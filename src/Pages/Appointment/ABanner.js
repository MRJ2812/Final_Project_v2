import React from 'react';
import bgImage from '../../../src/Asset/appointment(2).jpg';
import { DayPicker } from 'react-day-picker';
import { format, isSameDay } from 'date-fns';
import Lottie from 'lottie-react';
import animationData from '../../../src/Asset/Business Team.json';

const ABanner = ({ selectedDate, setSelectedDate }) => {

    const today = new Date();
    const isPastDate = (date) => {
        return date < today && !isSameDay(date, today);
    };


    return (
        <div>
            <div href="#" style={{ height: "430px" }} className="bg-yellow-300 shadow  md:min-w-full   dark:border-gray-700 dark:bg-gray-800 ">

                <div className='flex flex-col md:flex-row md:h-96'>
                    <div className="flex justify-center items-center leading-normal md:w-1/2">

                        <DayPicker
                            className='p-3 rounded-lg bg-white'
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={isPastDate}
                        />
                    </div>

                    <div className='w-full md:w-1/2 flex justify-center '>
                        <Lottie animationData={animationData} />
                    </div>

                </div>

                <h1 style={{ color: '#1eedb9', marginLeft: "420px", marginRight: "420px", }} className='font-bold text-xl bg-white  rounded-lg'>Available Appointsment on {format(selectedDate, 'PP')}</h1>

            </div>

        </div>
    );
};

export default ABanner;