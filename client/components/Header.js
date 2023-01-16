import React from "react";

function Header({ account }) {
  return (
    <nav className="flex flex-row items-center justify-between p-4 bg-gray-500">
      <h1 className="text-4xl text-pink-600 font-bold ">Lottery Dapp</h1>
      <div className="px-6 py-3 bg-gray-600 rounded-full font-semibold text-lg ">
        {account ? (
          <p >
           <span className="text-white pr-2"> Hi!,</span> {account.slice(0, 4) +
              "..." +
              account.slice(account.length - 4, account.length)}
          </p>
        ) : (
          <p>{"Connect Wallet"}</p>
        )}
      </div>
    </nav>
  );
}

export default Header;
