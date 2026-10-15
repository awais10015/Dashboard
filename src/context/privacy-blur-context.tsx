"use client";

import * as React from "react";

type PrivacyBlurContextValue = {
  blurActive: boolean;
  setBlurActive: (active: boolean) => void;
  toggleBlur: () => void;
};

const PrivacyBlurContext = React.createContext<PrivacyBlurContextValue | null>(
  null
);

export function PrivacyBlurProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [blurActive, setBlurActive] = React.useState(false);

  const toggleBlur = React.useCallback(() => {
    setBlurActive((prev) => !prev);
  }, []);

  const value = React.useMemo(
    () => ({ blurActive, setBlurActive, toggleBlur }),
    [blurActive, toggleBlur]
  );

  return (
    <PrivacyBlurContext.Provider value={value}>
      {children}
    </PrivacyBlurContext.Provider>
  );
}

export function usePrivacyBlur() {
  const context = React.useContext(PrivacyBlurContext);
  if (!context) {
    throw new Error("usePrivacyBlur must be used within PrivacyBlurProvider");
  }
  return context;
}
