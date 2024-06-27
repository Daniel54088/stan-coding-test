import React, { useState, useEffect, ReactNode, ErrorInfo } from "react";

interface Props {
  children: ReactNode;
}

export default function ErrorBoundary({ children }: Props) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error: Error, errorInfo: ErrorInfo) => {
      console.error("ErrorBoundary caught an error: ", error, errorInfo);
      setHasError(true);
    };

    const originalConsoleError = console.error;
    console.error = (...args) => {
      handleError(new Error(args[0]), { componentStack: "" } as ErrorInfo);
      originalConsoleError.apply(console, args);
    };

    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  if (hasError) {
    return (
      <div className="error">
        <span> Oops, something went wrong..</span>
      </div>
    );
  }

  return <>{children}</>;
}
