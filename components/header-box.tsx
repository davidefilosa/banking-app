import { TotalBalanceBox } from "./total-balance-box";

type Props = {
  type?: "title" | "greeting";
  title: string;
  user?: string;
  subtext: string;
};

export const HeaderBox = ({ title, type = "title", user, subtext }: Props) => {
  return (
    <header className="flex flex-col gap-1">
      <h1 className="text-[24px] leading-[30px] xl:text-[30px] xl:leading-[38px] font-semibold text-gray-90">
        {title}
        {type === "greeting" && (
          <span className="text-blue-500">&nbsp;{user}</span>
        )}
      </h1>
      <p className="text-[14px] leading-[20px] xl:text-[16px] xl:leading-[24px] font-normal text-gray-600">
        {subtext}
      </p>
      <TotalBalanceBox
        accounts={[]}
        totalBanks={3}
        totalCurrentBalance={5000}
      />
    </header>
  );
};
