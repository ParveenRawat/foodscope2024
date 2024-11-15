import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import CircularChart from '../chart/CircularChart';

export default function Modal({ title, res }) {
  const [showModal, setShowModal] = React.useState(false);

  // Safely access data from `res` or set defaults
  const payload = res?.Calories || {}; // Use an empty object as fallback
  console.log(res)
  // Calculate percentages (ensure payload values exist)
  const dailyCalories = 2000; // Daily recommended calories
  const dailyProtein = 50;    // Daily recommended protein (g)
  const dailyEnergy = 2500;   // Daily recommended energy (kcal)

  const percentCalories = payload.Calories
    ? ((parseFloat(payload) / dailyCalories) * 100).toFixed(1)
    : 0;

  const percentProtein = payload["Protein (g)"]
    ? ((parseFloat(payload["Protein (g)"]) / dailyProtein) * 100).toFixed(1)
    : 0;

  const percentEnergy = payload["Energy (kcal)"]
    ? ((parseFloat(payload["Energy (kcal)"]) / dailyEnergy) * 100).toFixed(1)
    : 0;

  return (
    <>
      {/* Button to open the modal */}
      <button
        className="bg-[#DAB785] rounded-full my-auto w-8 h-8 text-center justify-center hover:bg-[#C49A6C] transition duration-300"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <IoInformationCircleOutline className="p-0 m-auto size-6" />
      </button>

      {/* Modal */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/* Content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* Header */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{title}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                {/* Body */}
                <div className="relative p-6 flex-auto overflow-y-auto max-h-64">
                  <div className="flex justify-around items-center">
                    <CircularChart
                      value={percentCalories}
                      label="Calories"
                      color="#E27D60"
                    />
                    <CircularChart
                      value={percentProtein}
                      label="Protein"
                      color="#A3B9A2"
                    />
                    <CircularChart
                      value={percentEnergy}
                      label="Energy"
                      color="#DAB785"
                    />
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
