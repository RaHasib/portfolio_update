import React from "react";
import Socials from "../Socials";
import { Drawer } from 'vaul';
import Button from '@mui/material/Button';
import DadJoke from "../Dad_jokes/dadJokes";
import ReadMoreIcon from '@mui/icons-material/ReadMore';

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
      <p>Raisul Amin Hasib © {new Date().getUTCFullYear()}</p>
      </h1>
        <Drawer.Root shouldScaleBackground>
            <Drawer.Trigger asChild>
                <Button variant="outlined" size="small" endIcon={<ReadMoreIcon />}>Open Drawer</Button>
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] h-full mt-24 max-h-[96%] fixed bottom-0 left-0 right-0">
                    <div className="p-4 bg-white rounded-t-[10px] flex-1">
                        <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
                        <div className="max-w-md mx-auto">
                            <Drawer.Title className="font-medium mb-4">Random Dad Jokes :p</Drawer.Title>
                            <DadJoke/>
                        </div>
                    </div>
                    <div className="p-4 bg-gray-100 border-t border-gray-200 mt-auto">
                        <div className="flex gap-6 justify-center max-w-md mx-auto">
                            <p>Raisul Amin Hasib © {new Date().getUTCFullYear()}</p>
                        </div>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    </>
  );
};

export default Footer;
