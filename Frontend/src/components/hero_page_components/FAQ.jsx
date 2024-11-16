import { FaPlus as PlusIcon } from "react-icons/fa6";
import { FaMinus as MinusIcon } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

const items = [
  {
    question: "What kind of recipes can I find on this website?",
    answer:
      "You can explore a diverse collection of recipes ranging from appetizers, main courses, desserts, and beverages to vegetarian, vegan, and gluten-free options. Our categories cover various cuisines and dietary preferences.",
  },
  {
    question: "Are the recipes beginner-friendly?",
    answer:
      "Absolutely! Our recipes include detailed instructions and tips to help cooks of all levels, including beginners, create delicious meals.",
  },
  {
    question: " How can I search for a specific recipe?",
    answer:
      "Use the search bar on the homepage to find recipes by name, ingredients, or cuisine. You can also filter results based on dietary preferences and cooking time.",
  },
  {
    question: "Are the recipes free to access?",
    answer:
      "Yes, all the recipes on our website are free to access. Simply browse, select, and start cooking!",
  },
];

const AccordionItems = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/30 py-7">
      <div className="flex items-center" onClick={() => setIsOpen(!isOpen)}>
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={clsx("mt-4", {
              hidden: !isOpen,
              "": isOpen === true,
            })}
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            animate={{ opacity: 1, marginTop: "16px", height: "auto" }}
            exit={{ opacity: 0, marginTop: 0, height: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <section className="bg-gradient-to-b from-cream to-green pt-[72px] text-white sm:py-24">
      <div className="container text-jade">
        <h2 className="section-header text-center mx-auto text-3xl font-bold">
          Frequently asked questions
        </h2>
        <div className="mx-auto mt-12 max-w-[648px]">
          {items.map(({ question, answer }) => (
            <AccordionItems
              question={question}
              answer={answer}
              key={question}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
