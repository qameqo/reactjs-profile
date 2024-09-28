import { Avatar, Dialog, DialogBody } from "@material-tailwind/react";
import React, { useState } from "react";
export function ModalWithImage({ isOpen, isFilename }) {
  const [open, setOpen] = useState(false);
  const [Filename, setFilename] = useState(isFilename);
  const handleOpen = () => {
    setOpen(!open);
  };
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <Avatar
        size="sm"
        src={window.location.origin + "/" + Filename}
        alt="user 1"
        withBorder
        className="cursor-pointer"
        onClick={handleOpen}
      />
      <Dialog
        size="md"
        open={open}
        handler={handleOpen}
        className="modal-dialog"
      >
        <DialogBody className="sm:overflow-y-auto 2xl:h-fit sm:h-fit">
          <img
            alt="nature"
            className="h-[48rem] w-full rounded-lg object-cover object-center sm:h-fit"
            src={window.location.origin + "/" + Filename}
          />
        </DialogBody>
      </Dialog>
    </>
  );
}
