import React from "react";
import { AnimatedCounter } from "./animated-counter";
import { DoughnutChart } from "./doughnut-chart";

type Props = {
  accounts: string[];
  totalBanks: number;
  totalCurrentBalance: number;
};

export const TotalBalanceBox = ({
  accounts,
  totalBanks,
  totalCurrentBalance,
}: Props) => {
  return (
    <section className="flex w-full items-center gap-4 rounded-xl border border-gray-200 p-4 sm:gap-6 sm:p-6 drop-shadow-md">
      <div className="flex size-full max-w-[100px] items-center sm:max-w-[120px]">
        <DoughnutChart />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="text-[18px] leading-[22px] font-semibold text-gray-900">
          {totalBanks} Bank Accounts
        </h2>
        <div className="flex flex-col gap-2">
          <p className="text-[14px] leading-[20px] font-medium text-gray-600">
            Total Current Balance
          </p>

          <div className="text-[24px] leading-[30px] lg:text-[30px] lg:leading-[38px] flex-1 font-semibold text-gray-900 flex items-center justify-center gap-2">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};
