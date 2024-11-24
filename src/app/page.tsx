'use client';

import { Clock } from "@/components/clock";
import { Tooltip } from "@/components/tooltip";
import { Window } from "@/components/window";
import { commandHandler, randomColor } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import './globals.css'
import { ReactNode, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SummonButton = ({ className, children, onClick }: { className?: string; children?: ReactNode, onClick?: () => void }) => {
  const [color, setColor] = useState<string | null>('text-red-400');

  useEffect(() => {
    setColor(randomColor());
  }, []);

  return (
    <div onClick={onClick} className={`cursor-pointer underline ${color} ${className}`}>
      {children}
    </div>
  );
}

export default function Home() {
  const [aboutVisible, setAboutVisible] = useState<'visible' | 'hidden' | 'undefined'>('visible');
  const [skillsVisible, setSkillsVisible] = useState<'visible' | 'hidden' | 'undefined'>('hidden');
  const [contactsVisible, setContactsVisible] = useState<'visible' | 'hidden' | 'undefined'>('hidden');
  const [terminalVisible, setTerminalVisible] = useState<'visible' | 'hidden' | 'undefined'>('hidden');
  const [sentCommands, setSentCommands] = useState<string[]>([]);
  const [topZIndex, setZIndex] = useState(1);

  return (
    <main className="bg-[#1E1E2E] flex flex-col items-center w-screen h-screen">
      <nav className="w-full font-semibold gap-x-4 py-2 flex select-none px-2 bg-[#11111B] rounded-b">
        <SummonButton onClick={() => {
          setAboutVisible('visible');
        }}>About me</SummonButton>
        <SummonButton onClick={() => {
          setSkillsVisible('visible');
        }}>Skills</SummonButton>
        <SummonButton>Projects</SummonButton>
        <SummonButton onClick={() => {
          setContactsVisible('visible');
        }}>Contacts</SummonButton>
        <SummonButton onClick={() => {
          setTerminalVisible('visible');
        }}>Terminal</SummonButton>
        <div className="ml-auto flex items-center gap-x-2 justify-center">
          <Tooltip tooltip={<h1>I live in UTC+1 by the way</h1>}>
            <Clock />
          </Tooltip>
        </div>
      </nav>
      <Window visiblityChanged={v => {
        if (aboutVisible === 'visible')
          setAboutVisible(v === 'hidden' ? 'hidden' : 'visible');
      }} visible={aboutVisible} className="flex" title="aa55h - @koblizekxd">
        <div className="flex flex-col gap-y-2 basis-1/3 justify-center items-center">
          <Image width={128} height={128} className="rounded-xl" src={'https://github.com/KoblizekXD.png'} alt="Not found!" />
          <h1 className={'text-xl font-bold text-yellow-400'}>Hey! That's me!</h1>
          <h2 className={'font-semibold text-blue-400'}>@aa55h</h2>
        </div>
        <div className="flex-1 flex flex-col gap-y-1 py-2 px-4">
          <h1 className={'font-bold text-2xl text-green-500'}># About me</h1>
          <div>
            Hi! I'm aa55h, a young developer from <Tooltip tooltip={<div>Yes</div>}>Czech Republic</Tooltip>. Great to see you around!
            This is my personal website where I share my projects and other stuff. Take 
            a look around if you want to know more about me!
          </div>
          <h1 className={'font-bold text-2xl text-green-500'}># Notable Projects</h1>
          <p>
            Throughout my coding journey, I've worked on quite a few projects. Here are some of them:
          </p>
          <ul className="font-semibold gap-y-1 flex flex-col">
            <li className="flex">
              <Link target='_blank' className="underline" href={'https://www.github.com/KoblizekXD/byte-lens'}>
                ByteLens
              </Link>
              &nbsp;- Simple Java bytecode viewer written in JavaFX.
            </li>
            <li>
              <Link target='_blank' className="underline" href={'https://www.github.com/Chigga-Solutions/Cock-Down-Shooter'}>
                Cock Down Shooter
              </Link>
              &nbsp;- Online game about shooting down chicken!
            </li>
            <li>
              <Link target='_blank' className="underline" href={'https://github.com/KoblizekXD/myedu'}>
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
      <Window visiblityChanged={v => {
        if (skillsVisible === 'visible')
          setSkillsVisible(v === 'hidden' ? 'hidden' : 'visible');
      }} visible={skillsVisible} className={'px-12 py-4'} title={'Skills'}>
        <h1 className={'text-xl font-bold text-green-400'}># My skills</h1>
        <p>
          Here are things I have worked throughout my years of coding.
        </p>
        <Progress value={80}>
          <h1 className="font-extrabold text-lg">Java</h1>
          <p>
            ASM, Bukkit, Spring Boot, JavaFX, Gradle Plugin API
          </p>
        </Progress>
        <Progress color="text-blue-500" value={70}>
          <h1 className="font-extrabold text-lg">Web Development</h1>
          <p>
            HTML, CSS, JavaScript, React, Next.js, TailwindCSS
          </p>
        </Progress>
        <Progress color="text-violet-700" value={60}>
          <h1 className="font-extrabold text-lg">C#/.NET</h1>
          <p>
            C#, Windows Forms, WinUI3
          </p>
        </Progress>
        <Progress color="text-gray-500" value={40}>
          <h1 className="font-extrabold text-lg">C</h1>
          <p>
            Mild knowledge in Win32 API, Raylib
          </p>
        </Progress>
        <Progress color="text-gray-500" value={40}>
          <h1 className="font-extrabold text-lg">Linux</h1>
          <p>
            Knowledge in Linux, systemd commands, bash scripting(I use Arch btw), System V ABI
          </p>
        </Progress>
        <Progress color="text-gray-700" value={10}>
          <h1 className="font-extrabold text-lg">OS Development</h1>
          <p>
            Includes: Makefiles, x86-64 Linux assembly, C
          </p>
        </Progress>
        <Progress color="text-purple-300" value={3}>
          <h1 className="font-extrabold text-lg">PHP</h1>
          <p>
            Forced to use it in school. I hate it.
          </p>
        </Progress>
      </Window>
      <Window visiblityChanged={v => {
        if (contactsVisible === 'visible')
          setContactsVisible(v === 'hidden' ? 'hidden' : 'visible');
      }} visible={contactsVisible} className="p-4 flex flex-col gap-y-4" title="Contacts">
        <h1 className={'text-xl font-bold text-violet-400'}>Okay, so you want to contact me...</h1>
        <p>
          There are multiple social media platforms where you can contact me.
        </p>
        <table className="max-w-fit">
          <tbody>
            <tr className="*:p-2">
              <td>
                <FontAwesomeIcon size="2xl" icon={faDiscord} />
              </td>
              <td>
                <h3 className="font-bold text-blue-500">@aa55h</h3>
              </td>
            </tr>
            <tr className="*:p-2">
              <td className="flex justify-center items-center">
                <FontAwesomeIcon size="2xl" icon={faLinkedin} />
              </td>
              <td>
                <Link href="https://www.linkedin.com/in/jprokupek" target="_blank" className="font-bold text-blue-500">@jprokupek</Link>
              </td>
            </tr>
            <tr className="*:p-2">
              <td className="flex justify-center items-center">
                <FontAwesomeIcon size="2xl" icon={faGithub} />
              </td>
              <td>
                <Link href="https://www.github.com/KoblizekXD" target="_blank" className="font-bold text-blue-500">@aa55h</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </Window>
      <Window visiblityChanged={v => {
        if (terminalVisible === 'visible')
          setTerminalVisible(v === 'hidden' ? 'hidden' : 'visible');
      }} visible={terminalVisible} className="min-h-[50vh] flex flex-col p-2" title="Terminal">
        <div className="flex flex-col">
          {sentCommands.map((cmd, i) => (
            <div key={i} className="flex gap-x-1 text-gray-400">
              {cmd}
            </div>
          ))}
        </div>
        <form onSubmit={e => {
          e.preventDefault();
          const command = new FormData(e.currentTarget).get('command') || '';
          const res = commandHandler(command as string, sentCommands);
          setSentCommands([...res.history, `[aa55h@arch ~]$ ${command}`, res.result]);
          e.currentTarget.reset();
        }} action={''} className="flex gap-x-2">
          [aa55h@arch ~]$
          <input name="command" type="text" className='border-0 outline-none bg-transparent' />
        </form>
      </Window>
    </main>
  );
}

const Progress = ({value, children, color = 'text-green-500'}: {value: number, children: ReactNode, color?: string}) => {
  return (
    <label>
      {children}
      <progress value={value} max={100} className={`w-full rounded ${color} bg-transparent appearance-none`} />
    </label>
  );
}