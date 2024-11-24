'use client';

import { useEffect, useRef, useState } from "react";

interface WindowProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  visible?: 'visible' | 'hidden' | 'undefined';
  visiblityChanged?: (visible: 'visible' | 'hidden') => void;
  keyEvent?: (e: KeyboardEvent) => void;
  zIndex?: number;
}

export function Window({ title = "Window", children, className, zIndex = 1, visible = 'undefined', visiblityChanged, keyEvent }: WindowProps) {
  const [isMaximized, setIsMaximized] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && windowRef.current) {
        // TODO: Fix this window dragging
        // const left = parseInt(windowRef.current.style.left) - windowRef.current.clientWidth / 2;
        windowRef.current.style.left = `${e.clientX + (windowRef.current.clientWidth / 2) - 200}px`;
        windowRef.current.style.top = `${e.clientY + (windowRef.current.clientHeight / 2) - 10}px`;
      }
    };

    const handleKeyPress = (e: KeyboardEvent) => {
      keyEvent?.(e);

      if (e.key === 'Escape') {
        setIsDragging(false);
      }
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('keydown', handleKeyPress);
    }
  }, [isDragging]);

  useEffect(() => {
    if (isMaximized && windowRef.current) {
      windowRef.current.style.left = '0';
      windowRef.current.style.top = '0';
    } else {
      windowRef.current?.style.removeProperty('left');
      windowRef.current?.style.removeProperty('top');
    }
  }, [isMaximized])

  useEffect(() => {
    if (visiblityChanged) {
      visiblityChanged(hidden ? 'hidden' : 'visible');
    }
  }, [hidden]);

  useEffect(() => {
    if (visible === 'hidden') {
      setHidden(true);
    } else if (visible === 'visible') {
      setHidden(false);
    }
  }, [visible]);

  return (
    <div style={{zIndex: zIndex}} onMouseUp={() => setIsDragging(false)} ref={windowRef} className={`rounded-xl border border-[#11111B] duration-200 ${hidden ? 'opacity-0 invisible' : 'opacity-100 visible'} flex flex-col transition-[opacity,visibility] absolute ${isMaximized ? 'w-full h-full left-0 top-0' : 'w-1/2 min-h-1/2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'} select-none shadow bg-[#181825]`}>
      <div onMouseDown={() => {
        setIsMaximized(false);
        setIsDragging(true);
      }} className="bg-[#11111B] w-full py-1 cursor-move px-2 flex items-center rounded-t-lg">
        <div className="flex gap-x-1 py-1">
          <span onClick={() => setHidden(true)} title="Close" className={'rounded-[50%] cursor-pointer w-[15px] h-[15px] inline-block bg-red-500'}></span>
          <span onClick={() => {
            setIsMaximized(!isMaximized);
          }} title="Maximize" className={'rounded-[50%] cursor-pointer w-[15px] h-[15px] inline-block bg-[#FFBC2C]'}></span>
          <span title="Minimize" className={'rounded-[50%] cursor-pointer w-[15px] h-[15px] inline-block bg-[#28C940]'}></span>
        </div>
        <h1 className="text-[#FFBC2C] select-none pointer-events-none absolute left-1/2 -translate-x-1/2 text-sm font-bold">{title}</h1>
      </div>
      <div className={`flex-1 ${className}`}>
        {children}
      </div>
    </div>
  );
}