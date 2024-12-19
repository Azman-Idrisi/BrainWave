import React from "react";
import Section from "./Section";
import { socials } from "../constants";

export const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
  {socials.map((item) => (
    <a
      key={item.id}
      href={item.url}
      target="_blank"
      className={`flex items-center justify-center w-10 h-10 bg-n-7 rounded-full 
      transition-all duration-300 hover:scale-110 group
      ${item.title === 'Discord' && 'hover:bg-[#5865F2]'}
      ${item.title === 'Twitter' && 'hover:bg-[#1DA1F2]'}
      ${item.title === 'Instagram' && 'hover:bg-gradient-to-r from-[#405DE6] via-[#E1306C] to-[#FFDC80]'}
      ${item.title === 'Telegram' && 'hover:bg-[#229ED9]'}
      ${item.title === 'Facebook' && 'hover:bg-[#1877F2]'}`}
    >
      <img 
        src={item.iconUrl} 
        width={16} 
        height={16} 
        alt={item.title}
        className="transition-colors group-hover:brightness-0 group-hover:invert" 
      />
    </a>
  ))}
</ul>
      </div>
    </Section>
  );
};
