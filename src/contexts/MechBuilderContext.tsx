"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface MechBuilderContextType {
  selectedFaction: string;
  setSelectedFaction: (faction: string) => void;
  arm1: string;
  setArm1: (arm: string) => void;
  arm2: string;
  setArm2: (arm: string) => void;
}

const MechBuilderContext = createContext<MechBuilderContextType | undefined>(undefined);

const STORAGE_KEY = "mechBuilder";

export function MechBuilderProvider({ children }: { children: ReactNode }) {
  const [selectedFaction, setSelectedFactionState] = useState<string>("");
  const [arm1, setArm1State] = useState<string>("");
  const [arm2, setArm2State] = useState<string>("");
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from sessionStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const data = JSON.parse(stored);
          setSelectedFactionState(data.selectedFaction || "");
          setArm1State(data.arm1 || "");
          setArm2State(data.arm2 || "");
        } catch (error) {
          console.error("Failed to parse stored mech builder data:", error);
        }
      }
      setIsInitialized(true);
    }
  }, []);

  // Save to sessionStorage whenever state changes
  useEffect(() => {
    if (isInitialized && typeof window !== "undefined") {
      const data = {
        selectedFaction,
        arm1,
        arm2,
      };
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  }, [selectedFaction, arm1, arm2, isInitialized]);

  const setSelectedFaction = (faction: string) => {
    setSelectedFactionState(faction);
  };

  const setArm1 = (arm: string) => {
    setArm1State(arm);
  };

  const setArm2 = (arm: string) => {
    setArm2State(arm);
  };

  return (
    <MechBuilderContext.Provider
      value={{
        selectedFaction,
        setSelectedFaction,
        arm1,
        setArm1,
        arm2,
        setArm2,
      }}>
      {children}
    </MechBuilderContext.Provider>
  );
}

export function useMechBuilder() {
  const context = useContext(MechBuilderContext);
  if (context === undefined) {
    throw new Error("useMechBuilder must be used within a MechBuilderProvider");
  }
  return context;
}
