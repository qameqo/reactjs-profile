import React, { useState } from "react";
import { Tooltip, Typography } from "@material-tailwind/react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { DialogWithTimeline } from "../components/DialogWithTimeline";

const contentTooltip = "more about me.. ";
const dataEducation = [
  {
    title: "Primary School.",
    desc1: "Rungruang Wittaya School",
    desc2: "โรงเรียนรุ่งเรืองวิทยา",
    fileimg: "primary.jpg",
  },
  {
    title: "Second School.",
    desc1: "Ratwinitsuvarnnabhum School (Science and Math)",
    desc2: "โรงเรียนราชวินิตสุวรรณภูมิ (วิทย์ คณิต)",
    fileimg: "second.jpg",
  },
  {
    title: "Bachelor Degrees.",
    desc1:
      "Rajamangala University of Technology Tawan-Ok, Chakrabongse Bhuvanarth (Computer Science)",
    desc2:
      "มหาวิทยาลัยเทคโนโลยีราชมงคลตะวันออกมหาวิทยาลัยจักรพงษภูวนารถ(วิทยาการคอมพิวเดอร์)",
    fileimg: "degrees.jpg",
  },
];
const dataJob = [
  {
    title: "2021-03 to 2021-05",
    desc1: "JUST CAR CO., LTD.",
    desc2:
      "Develop Website Position front-end using html , css(Bootstrap) , JavaScript , php(CI4)",
    fileimg: "",
  },
  {
    title: "2021-06 to Current",
    desc1: "TECH SOFT HOLDING CO., LTD.",
    desc2:
      "Onsite EasyBuy Position .NET Developer Develop Website UI , API and EXE  using C# (.NET Core and.NET Framework) ",
    fileimg: "",
  },
];

function Profile() {
  return (
    <>
      <div className="2xl:mt-28  mt-20 md:mb-10 sm:mb-10 sm:mt-10 ">
        <div className="grid grid-cols-4 gap-4 md:grid-cols-4 sm:grid-cols-1 justify-around">
          <Tooltip
            className="p-0"
            content={
              <div className="w-30 p-1 bg-gradienttoright rounded-md">
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal opacity-80"
                >
                  {contentTooltip + "😄"}
                </Typography>
              </div>
            }
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <div
              className="mr-10 ml-10 mb-10 rounded-md text-center 2xl:w-32 2xl:ml-auto h-32 md:h-28 shadow-lg 
            shadow-[#905b9a] border-deep-purple-50 border-solid border-2 content-center hover:shadow-xl hover:shadow-[#905b9a] hover:animate-shake hover:cursor-pointer bg-gradienttoright"
            >
              <p className="indent-0 text-base">INFO</p>
            </div>
          </Tooltip>
          <div className="mr-10 ml-10 mt-16 brd-tr h-32 "></div>
          <div className="mr-10 ml-10 mt-16 brd-tl h-32 "></div>
          <Tooltip
            className="p-0"
            content={
              <div className="w-30 p-1 bg-gradienttoright rounded-md">
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal opacity-80"
                >
                  {contentTooltip + "👨‍🎓"}
                </Typography>
              </div>
            }
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <div
              className="mr-10 ml-10 mb-10 rounded-md text-center 2xl:w-32 2xl:mr-auto h-32 md:h-28 shadow-lg 
            shadow-[#905b9a] border-deep-purple-50 border-solid border-2 content-center hover:shadow-xl hover:shadow-[#905b9a] hover:animate-shake hover:cursor-pointer bg-gradienttoleft "
            >
              <DialogWithTimeline
                isOpen={true}
                isTopic={"EDUCATION"}
                data={dataEducation}
              />
            </div>
          </Tooltip>
        </div>

        <div className="grid grid-cols-5 gap-4 md:grid-cols-5 sm:grid-cols-1 justify-around">
          <Tooltip
            className="p-0"
            content={
              <div className="w-30 p-1 bg-gradienttoright rounded-md">
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal opacity-80"
                >
                  {contentTooltip + "🌐"}
                </Typography>
              </div>
            }
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <div
              className="mr-10 ml-10 mt-auto 2xl:ml-auto 2xl:mb-auto  xl:mb-auto lg:mb-auto md:mb-auto rounded-md text-center 2xl:w-32 h-32 md:h-28  shadow-lg md:ml-5 md:mr-5 
             shadow-[#905b9a] border-deep-purple-50 border-solid border-2 content-center hover:shadow-xl hover:shadow-[#905b9a] hover:animate-shake hover:cursor-pointer bg-gradienttoright"
            >
              <p className="indent-0 text-base ">SOCIAL</p>
            </div>
          </Tooltip>
          <div className="mr-10 ml-10 mt-auto md:mt-32 brd-t h-32 "></div>
          <div className="flex justify-center">
            <Tooltip
              className="p-1"
              content={
                <div className="w-80 p-1 bg-gradienttoright rounded-md">
                  <Typography color="white" className="font-medium">
                    Mr.Atipat Rongmuang (Game)
                  </Typography>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal opacity-80"
                  >
                    Looking at this picture, you might notice that I'm sleepy,
                    which I really am. haha 😂🥱💤
                  </Typography>
                </div>
              }
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div
                className="2xl:h-56 2xl:w-56 lg:h-48 lg:w-48 md:h-36 md:w-40 sm:h-56 sm:w-56 object-cover rounded-full img-profile md:mt-auto md:mb-auto shadow-lg
             shadow-[#FFF] border-deep-purple-50 border-solid border-2 hover:animate-shake"
              ></div>
            </Tooltip>
          </div>
          <div className="mr-10 ml-10 mt-auto md:mt-32 brd-t2 h-32 "></div>
          <Tooltip
            className="p-0"
            content={
              <div className="w-30 p-1 bg-gradienttoright rounded-md">
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal opacity-80"
                >
                  {contentTooltip + "✍️"}
                </Typography>
              </div>
            }
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <div
              className="mr-10 ml-10 mt-auto 2xl:mb-auto  xl:mb-auto lg:mb-auto md:mb-auto rounded-md text-center 2xl:w-32 h-32 md:h-28 2xl:mr-auto sm:mb-10 shadow-lg md:ml-5 md:mr-5
             shadow-[#905b9a] border-deep-purple-50 border-solid  border-2 content-center hover:shadow-xl hover:shadow-[#905b9a] hover:animate-shake hover:cursor-pointer bg-gradienttoleft"
            >
              <DialogWithTimeline
                isOpen={true}
                isTopic={"JOB TITLE"}
                data={dataJob}
              />
            </div>
          </Tooltip>
        </div>

        <div className="grid grid-cols-4 gap-4 md:grid-cols-4 sm:grid-cols-1 justify-around ">
          <Tooltip
            className="p-0"
            content={
              <div className="w-30 p-1 bg-gradienttoright rounded-md">
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal opacity-80"
                >
                  {contentTooltip + "🎮"}
                </Typography>
              </div>
            }
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <div
              className="mr-10 ml-10 mt-auto rounded-md text-center 2xl:w-32 2xl:ml-auto h-32 md:h-28 shadow-lg
             shadow-[#905b9a] border-deep-purple-50 border-solid border-2 content-center hover:shadow-xl hover:shadow-[#905b9a] hover:animate-shake hover:cursor-pointer bg-gradienttoright"
            >
              <p className="indent-0 text-base content-center">HOBBIES</p>
            </div>
          </Tooltip>

          <div className="mr-10 ml-10 mb-16 brd-br h-32 "></div>
          <div className="mr-10 ml-10 mb-16 brd-bl h-32 "></div>
          <Tooltip
            className="p-0"
            content={
              <div className="w-30 p-1 bg-gradienttoright rounded-md">
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal opacity-80"
                >
                  {contentTooltip + "💻"}
                </Typography>
              </div>
            }
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <div
              className="mr-10 ml-10  mt-auto rounded-md text-center 2xl:w-32 2xl:mr-auto h-32 md:h-28 shadow-lg
             shadow-[#905b9a] border-deep-purple-50 border-solid border-2 content-center hover:shadow-xl hover:shadow-[#905b9a]
              hover:animate-shake  bg-gradienttoleft"
            >
              <DialogWithTimeline
                isOpen={true}
                isTopic={"Programming Language"}
                data={dataEducation}
              />
            </div>
          </Tooltip>
        </div>
      </div>
    </>
  );
}

export default Profile;
