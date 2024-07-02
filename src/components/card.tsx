import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

interface ICardProps {
  card: {
    desc: string;
    filesize: string;
    close: boolean;
    isTag: boolean;
    tag: {
      title: string;
      bgColor: string;
    };
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  referance: any;
}

export const Card = ({ card, referance }: ICardProps) => {
  return (
    <motion.div
      drag
      dragConstraints={referance}
      whileDrag={{ scaleX: 1.2 }}
      className="relative flex-shrink-0 w-60 h-72 px-8 py-10 rounded-[40px] text-white bg-zinc-900/90 overflow-hidden"
    >
      {/* icon */}
      <FaRegFileAlt />

      {/* text */}
      <p className=" text-sm leading-tight mt-5 font-semibold">{card.desc}</p>

      {/* footer */}
      <div className="footer absolute bottom-0 w-full  left-0">
        <div className="flex items-center  py-3 px-8  justify-between mb-5">
          <h5>{card.filesize}</h5>
          <span className="w-7 h-7  bg-zinc-600 rounded-full flex items-center justify-center">
            {card.close ? (
              <IoIosClose color="#fff" />
            ) : (
              <LuDownload color="#fff" />
            )}
          </span>
        </div>
        {card.isTag && (
          <div
            className={`tag w-full py-4 ${card.tag.bgColor} flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{card.tag.title}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};
