import React from "react";
import data from "../../data.json";

export default function ResultSummary() {
  const categoryColors = {
    Reaction: "bg-red-50 text-red",
    Memory: "bg-yellow-50 text-yellow",
    Verbal: "bg-teal-50 text-teal",
    Visual: "bg-indigo-50 text-blue",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-paleBlue">
      <div className="flex flex-col md:flex-row sm:rounded-3xl sm:overflow-hidden shadow-lg sm:max-w-[700px] w-full sm:bg-white h-screen sm:h-4/5">
        {/* Left box (Result) */}
        <div className="flex flex-col items-center justify-center text-center text-white bg-gradient-to-b from-slateBlue to-royalBlue md:w-1/2 p-8 space-y-4 rounded-b-3xl sm:rounded-br-3xl sm:rounded-tr-3xl">
          <h2 className="text-lg font-bold text-lavender">Your Result</h2>
          <div className="w-32 h-32 rounded-full bg-gradient-to-b from-violetBlue to-gradeBlue flex flex-col items-center justify-center">
            <p className="text-5xl font-semibold">76</p>
            <p className="text-sm text-lavender">of 100</p>
          </div>
          <h3 className="text-2xl font-bold">Great</h3>
          <p className="text-lg px-4 text-lavender">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>

        {/* Right box (Summary) */}
        <div className="bg-white md:w-1/2 p-8 flex flex-col justify-between space-y-6 rounded-b-3xl md:rounded-bl-2xl md:rounded-tl-2xl">
          <h2 className=" text-2xl sm:text-lg font-semibold text-darkGrayBlue">
            Summary
          </h2>

          <div className="space-y-3">
            {data.map((item) => (
              <div
                key={item.category}
                className={`flex justify-between items-center p-3 rounded-lg h-20  sm:h-auto ${
                  categoryColors[item.category]
                }`}
              >
                <div className="flex items-center space-x-2">
                  <img
                    src={item.icon}
                    alt={`${item.category} icon`}
                    className="w-5 h-5"
                  />
                  <span className="font-semibold sm:font-bold">
                    {item.category}
                  </span>
                </div>
                <span className="font-semibold text-darkGrayBlue">
                  {item.score} <span className="text-lavender">/100</span>
                </span>
              </div>
            ))}
          </div>

          <button className="w-full h-16  sm:h-auto bg-darkGrayBlue text-white text-2xl sm:text-base py-3 rounded-full hover:bg-gradient-to-b from-violetBlue to-royalBlue hover:cursor-pointer transition">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
