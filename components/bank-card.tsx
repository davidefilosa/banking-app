import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Fingerprint, Globe, Nfc } from "lucide-react";
import Image from "next/image";

type Props = {
  type: "visa" | "mastercard";
};

export const BankCard = ({ type }: Props) => {
  return (
    <Card
      className={cn(
        "rounded-xl  flex items-center justify-between p-0 h-[180px] font-semibold shadow-lg relative",
        type === "visa"
          ? "bg-slate-900"
          : "bg-gradient-to-b from-black to-slate-900"
      )}
    >
      {type === "mastercard" && (
        <Image
          src={"/lines.png"}
          fill
          alt="mastercard"
          className="object-cover opacity-25"
        />
      )}
      <div className="flex flex-col justify-between text-white h-full p-4 w-full z-10">
        <div className="text-base">Bank Name</div>
        <div className="text-xs flex flex-col gap-2">
          <div className="flex items-center justify-between w-full pr-4">
            <div>Davide Filosa</div>
            <div>06/26</div>
          </div>
          <div className="text-base">
            &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679;
            &#9679;&#9679;&#9679;&#9679; 2131
          </div>
        </div>
      </div>
      <div
        className={cn(
          "relative flex flex-col justify-between text-white h-full p-4 pl-10",
          type === "visa" &&
            " bg-gradient-to-tr from-pink-200 via-indigo-500 to-blue-400 rounded-r-lg"
        )}
      >
        {type === "visa" && (
          <Image
            src={"/lines.png"}
            fill
            alt="mastercard"
            className="object-cover"
          />
        )}
        <Nfc />
        {type === "visa" ? (
          <Image src={"/visa.svg"} height={60} width={60} alt="visa" />
        ) : (
          <Image src={"/mastercard.svg"} height={60} width={60} alt="visa" />
        )}
      </div>
    </Card>
  );
};
