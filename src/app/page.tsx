'use client';

import { Window } from "@/components/window";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#1E1E2E] flex flex-col justify-center items-center w-screen h-screen">
      <Window className="flex" title="aa55h - @koblizekxd">
        <div className="flex flex-col gap-y-2 basis-1/3 justify-center items-center">
          <Image width={128} height={128} className="rounded-xl" src={'https://github.com/KoblizekXD.png'} alt="Not found!" />
          <h1 className={'text-xl font-bold text-yellow-400'}>Hey! That's me!</h1>
          <h2 className={'font-semibold text-blue-400'}>@aa55h</h2>
        </div>
        <div className="flex-1 flex flex-col gap-y-1 py-2 px-4">
          <h1 className={'font-bold text-2xl text-green-500'}># About me</h1>
          <p>
            Hi! I'm aa55h, a young developer from Czech Republic. Great to see you around!
            This is my personal website where I share my projects and other stuff. Take 
            a look around if you want to know more about me!
          </p>
          <h1 className={'font-bold text-2xl text-green-500'}># Notable Projects</h1>
          <p>
            Throughout my coding journey, I've worked on quite a few projects. Here are some of them:
          </p>
          <ul className="font-semibold gap-y-1 flex flex-col">
            <li className="flex">
              <Link className="underline" href={'https://www.github.com/KoblizekXD/byte-lens'}>
                ByteLens
              </Link>
              &nbsp;- Simple Java bytecode viewer written in JavaFX.
            </li>
            <li>
              <Link className="underline" href={'https://www.github.com/Chigga-Solutions/Cock-Down-Shooter'}>
                Cock Down Shooter
              </Link>
              &nbsp;- Online game about shooting down chicken!
            </li>
            <li>
              <Link className="underline" href={'https://github.com/KoblizekXD/myedu'}>
                MyEdu
              </Link>
              &nbsp;- Simple grading software
            </li>
          </ul>
          <p className="text-violet-300 font-extrabold">
            See the projects window for more!
          </p>
        </div>
      </Window>
    </main>
  );
}
