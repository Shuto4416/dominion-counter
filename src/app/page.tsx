"use client"

import { useState } from "react";

export default function Home() {
  const [money, setMoney] = useState(0)
  const [action, setAction] = useState(1)

  const handleAction = ()=>{
    setMoney(0)
    setAction(1)
  }

  return (
    <div className="flex justify-center w-screen h-screen pt-8">
      <div className="inline-flex flex-col space-y-4 text-2xl">
        <div className="flex space-x-4">
          <div>お金: {money}</div>
          <div className="space-x-8">
            <button onClick={()=>{setMoney((prev)=>prev + 1)}}>+</button>
            <button onClick={()=>{setMoney((prev)=>prev - 1)}}>-</button>
          </div>
        </div>
        <div className="flex space-x-4">
          <div>アクション回数: {action}</div>
          <div className="space-x-8">
            <button onClick={()=>{setAction((prev)=>prev + 1)}}>+</button>
            <button onClick={()=>{setAction((prev)=>prev - 1)}}>-</button>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <button onClick={handleAction} className="w-18 rounded border-white border p-2">reset</button>
        </div>
      </div>
    </div>
  );
}
