import { array } from "zod";
import React from "react";
import { StaticImageData } from "next/image";
import CCalendar from "@/app/[lang]/components/_atoms/cCalendar";

interface selectProps {
  id?: string;
  code?: string;
  name: string;
  disabled?: boolean;
  select?: { title: string; value: string };
  setSelect?: React.Dispatch<React.SetStateAction<{ title: string; value: string }>>;
  title: string;
  className?: string;
  selected?: boolean;
  selectList?: { title: string; value: string }[];
  classList?: string;
  disabled?: boolean;
  params?: any;
  initValue?: string | null;
  value?: string | null;
  required?: boolean;
  onChange?: Function;
  validMessage?: { message: string; format?: string[] };
  data?: any;
  number?: number;
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
  name?: string;
  type: string;
  placeholder?: any;
  label?: string | undefined;
  value?: string | number;
  unit?: React.ReactNode;
  classList?: string;
  disabled?: boolean;
  required?: boolean;
  isfocus?: boolean;
  isPositive?: boolean;
  onChange?: Function;
  validMessage?: { message: string; format?: string[] };
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

interface CTitleProps {
  title: string;
  children?: React.ReactNode;
  classList?: string;
}

interface cPageContainerProps {
  children: React.ReactNode;
  className: string;
}

interface ProductItem {
  id: number;
  productType: string;
  modelName: string;
  qty: string;
  function: string;
  step: string;
  capacity: string;
  del: string;
}
