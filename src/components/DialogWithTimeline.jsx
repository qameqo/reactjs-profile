import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";
import { ImCross } from "react-icons/im";
import { TimelineWithData } from "./TimelineWithData";

export function DialogWithTimeline({ isOpen, isTopic, data }) {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState(isTopic);
  const handleOpen = () => {
    setOpen(!open);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <p
        className=" text-base cont-cen hover:cursor-pointer 2xl:h-full sm:h-full"
        onClick={handleOpen}
      >
        {topic}
      </p>
      <Dialog
        className="modal-dialog bg-dialog"
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>
          <p className="border-b-2 border-b-black shadow-lg shadow-blue-gray-100">
            {isTopic}
          </p>
          <IconButton
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center
           items-center dark:hover:bg-gray-600 dark:hover:text-white shadow-none border-white focus:outline-none"
            onClick={handleOpen}
          >
            <ImCross />
          </IconButton>
        </DialogHeader>
        <DialogBody className="sm:overflow-y-auto 2xl:h-fit sm:h-96">
          <TimelineWithData data={data} />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="white"
            onClick={handleOpen}
            className="mr-1 bg-pur hover:text-black hover:bg-purple-200 border-white focus:outline-none"
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
