import { array } from "zod";
import React from "react";
import { StaticImageData } from "next/image";
import CCalendar from "@/app/[lang]/components/_atoms/cCalendar";

interface selectProps {
  disabled?: boolean;
  select?: { title: string; value: number };
  setSelect?: React.Dispatch<React.SetStateAction<{ title: string; value: number }>>;
  title: string;
  className?: string;
  selected?: boolean;
  selectList?: { title: string; value: number }[];
  classList?: string;
}

interface containerBoxRowProps {
  children: React.ReactNode;
  justifyContent?: string;
  alignItems?: string;
  marginBottom?: string;
  marginTop?: string;
  width?: string;
  gap?: string;
  classList?: string;
}

interface customInputProps {
  type: string;
  placeholder?: any;
  label?: string | undefined;
  value?: string | number;
  unit?: React.ReactNode;
  classList?: string;
  disabled?: boolean;
}

interface buttonProps {
  type?: "submit" | "reset" | "button";
  title: string;
  className: string;
  onClick: Function;
}

interface checkBoxProps {
  label: string;
  value: any;
}

interface accordionBoxProps {
  title: string;
  content: string | Array<string>;
  image?: Array<{ src: string; alt: string }>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  classList?: string;
}
{
  /* 반응형 */
}
interface cPopUpProps {
  children?: React.ReactNode;
  classList?: string;
  className?: string;
  isActive: boolean;
  notOverflow?: boolean;
}
interface imageButtonProps {
  image: StaticImageData;
  title: string;
  classList?: string;
  imagePosition?: string;
  onClick?: MouseEvent<HTMLButtonElement>;
  titleHidden?: boolean;
}
interface cPopHeaderProps {
  label: string;
  className?: string;
  onClick: Function;
}
interface cTooltipProps {
  children?: React.ReactNode;
  className?: string;
}
interface cCalendarProps {
  label: string;
}
