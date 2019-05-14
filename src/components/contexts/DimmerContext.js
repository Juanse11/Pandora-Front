import React from "react";

const DimmerContext = React.createContext({});

export const DimmerProvider = DimmerContext.Provider;
export const DimmerConsumer = DimmerContext.Consumer;