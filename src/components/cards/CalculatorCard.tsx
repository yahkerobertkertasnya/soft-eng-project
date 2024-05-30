import useAuth from "../../hooks/use-auth.ts";
import { useState } from "react";
import calorieCalculator from "../../utils/calorie/calorie-calculator.ts";
import { UserCalorie } from "../../models/firebase/user-calorie.ts";
import { UserData } from "../../models/firebase/user-data.ts";

interface Props {
  getData: (calorie: UserCalorie) => void;
}

export default function CalculatorCard({ getData }: Props) {
  const { user, updateUser } = useAuth();
  const [height, setHeight] = useState(user?.height ?? 0);
  const [weight, setWeight] = useState(user?.weight ?? 0);

  const currentAge = (Date.now() - Date.parse(user?.dateOfBirth || "")) / 31556952000;

  const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser = {
      ...user,
      height,
      weight,
    } as UserData;

    await updateUser(newUser);
  };

  const handleGetData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const calorie = calorieCalculator(weight, height, currentAge, user?.gender ?? "");
    getData(calorie);
  };

  return (
    <div className="flex gap-10">
      <form
        onSubmit={handleUpdateUser}
        className="grid flex-1 rounded-lg bg-white border">
        <div className="p-5 space-y-3">
          <h3 className="flex items-end text-4xl gap-4 font-bold text-secondary text-start">Statistics</h3>
        </div>
        <hr className="border-gray-300" />
        <div className="p-5 space-y-3">
          <label className="flex items-center gap-4 text-lg text-secondary">
            <span className="min-w-20 text-start">Age</span>
            <span className="ps-3 text-start">{currentAge.toFixed(1)}</span>
          </label>
          <label className="flex items-center gap-4 text-lg text-secondary">
            <span className="min-w-20 text-start">Height</span>
            <input
              className="w-1/2 p-2 border rounded-lg"
              type="number"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
            />
          </label>
          <label className="flex items-center gap-4 text-lg text-secondary">
            <span className="min-w-20 text-start">Weight</span>
            <input
              className="w-1/2 p-2 border rounded-lg"
              type="number"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
            />
          </label>
        </div>
        <div className="relative">
          <button
            type="submit"
            className="absolute end-2.5 bottom-2 font-medium text-white transition border rounded-md cursor-pointer border-primary bg-primary hover:bg-opacity-90 text-sm px-4 py-2">
            Update
          </button>
        </div>
      </form>
      <form
        onSubmit={handleGetData}
        className="grid flex-1 rounded-lg bg-white border">
        <div className="p-5 space-y-3">
          <h3 className="flex items-end text-4xl gap-4 font-bold text-secondary text-start">Calculator</h3>
        </div>
        <hr className="border-gray-300" />
        <div className="p-5 space-y-3">
          <label className="flex items-center gap-4 text-lg text-secondary">
            <span className="min-w-20 text-start">Calories</span>
            <span className="ps-3 text-start">2,000 - 500,000 / day</span>
          </label>
          <label className="flex items-center gap-4 text-lg text-secondary">
            <span className="min-w-20 text-start">Protein</span>
            <span className="ps-3 text-start">50 - 2000000 / day</span>
          </label>
          <label className="flex items-center gap-4 text-lg text-secondary">
            <span className="min-w-20 text-start">Fat</span>
            <span className="ps-3 text-start">50 - 500000 / day</span>
          </label>
        </div>
        <div className="relative">
          <button
            type="submit"
            className="absolute end-2.5 bottom-2 font-medium text-white transition border rounded-md cursor-pointer border-primary bg-primary hover:bg-opacity-90 text-sm px-4 py-2">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
