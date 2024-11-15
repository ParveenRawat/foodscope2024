import { FaPlus as PlusIcon } from "react-icons/fa6";
import { FaMinus as MinusIcon } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
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
