import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { ModalWithImage } from "./ModalWithImage";

export function TimelineWithData({ data }) {
  console.log(data);
  return (
    <div className="2xl:w-[32rem] sm:w-fit mr-auto ml-auto ">
      <Timeline>
        {data.map((item, index) => (
          <TimelineItem key={index}>
            {item.fileimg == "" && index + 1 != data.length ? (
              <TimelineConnector className="tl-noimg-conn" />
            ) : null}
            {item.fileimg != "" && index + 1 != data.length ? (
              <TimelineConnector className="tl-img-conn" />
            ) : null}
            <TimelineHeader>
              {item.fileimg == "" ? (
                <TimelineIcon />
              ) : (
                <TimelineIcon className="p-0">
                  <ModalWithImage isOpen={true} isFilename={item.fileimg} />
                </TimelineIcon>
              )}
              <Typography variant="h5" color="blue-gray">
                {item.title}
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8 ">
              <Typography className="font-normal text-gray-600  text-start ">
                {item.desc1}
              </Typography>
              <Typography className="font-normal text-gray-600  text-start ">
                {item.desc2}
              </Typography>
            </TimelineBody>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
