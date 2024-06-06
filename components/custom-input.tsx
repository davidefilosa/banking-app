import { authFormSchema } from "@/lib/schema";
import React from "react";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

const formSchema = authFormSchema("sign-up");

type Props = {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
};

export const CustomInput = ({ control, name, label, placeholder }: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex flex-col gap-1.5">
          <FormLabel className="text-[14px] leading-[20px] w-full max-w-[280px] font-medium text-gray-700">
            {label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                type={name === "password" ? "password" : "text"}
                {...field}
                className="text-[16px] leading-[22px] rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500"
              />
            </FormControl>
            <FormMessage className="mt-2 text-[12px] leading-[18px] text-red-500" />
          </div>
        </div>
      )}
    />
  );
};
