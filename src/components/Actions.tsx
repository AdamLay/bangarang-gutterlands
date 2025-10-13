"use client";

import { actions } from "@/lib/data";
import { useState } from "react";

export default function Actions() {
  const [action1, setAction1] = useState<string>("");
  const [action2, setAction2] = useState<string>("");
  const [action3, setAction3] = useState<string>("");

  const handleClear = () => {
    setAction1("");
    setAction2("");
    setAction3("");
  };

  return (
    <div className="flex flex-col gap-4">
      <ActionPicker index={1} value={action1} setValue={setAction1} />
      <ActionPicker index={2} value={action2} setValue={setAction2} />
      <ActionPicker index={3} value={action3} setValue={setAction3} />
      <button className="btn" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
}

function ActionPicker({
  index,
  value,
  setValue,
}: {
  index: number;
  value: string;
  setValue: (v: string) => void;
}) {
  const selected = actions.find((x) => x.name === value);
  return (
    <div>
      <label>Action {index}</label>
      <select className="select w-full" value={value} onChange={(e) => setValue(e.target.value)}>
        <option value="" disabled>
          Pick an action
        </option>
        {actions.map((f) => (
          <option key={f.name} value={f.name}>
            {f.name}
          </option>
        ))}
      </select>
      {selected && <p className="text-sm mt-2">{selected.rule}</p>}
    </div>
  );
}
