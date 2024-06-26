import { useState } from "react";
import MealsCard from "../cards/MealsCard.tsx";
import { UserHistory } from "../../models/firebase/user-history.ts";
import { IoMdArrowDropdown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  history: UserHistory;
}

export default function HistoryDropdown({ history }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="grid flex-1 rounded-lg bg-white border">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex justify-between items-center rounded-md p-4 text-gray-700 text-start">
        <span>
          History: {history.searchDate.toDate().toLocaleDateString()} : {history.searchDate.toDate().toLocaleTimeString()}
        </span>
        <IoMdArrowDropdown
          className={`transition-transform ${isExpanded ? "" : "transform rotate-90"}`}
          size="1.5rem"
        />
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="grid gap-5 py-5 mx-32">
            <MealsCard
              title="Breakfast"
              start={history?.calorie.breakfast.calorieStart || 0}
              end={history?.calorie.breakfast.calorieEnd || 0}
              foods={history?.breakfastFood || []}
            />
            <MealsCard
              title="Lunch"
              start={history?.calorie.lunch.calorieStart || 0}
              end={history?.calorie.lunch.calorieEnd || 0}
              foods={history?.lunchFood || []}
            />
            <MealsCard
              title="Dinner"
              start={history?.calorie.dinner.calorieStart || 0}
              end={history?.calorie.dinner.calorieEnd || 0}
              foods={history?.dinnerFood || []}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
