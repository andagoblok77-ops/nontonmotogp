import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangleIcon } from "lucide-react";
import React from "react";

const AlertWarning = ({
  title,
  message,
}: {
  title: string | null | React.ReactNode;
  message: string | null | React.ReactNode;
}) => {
  return (
    <Alert
      className=" w-full
  border-yellow-300
  bg-yellow-50
  text-yellow-900
  dark:border-yellow-800
  dark:bg-yellow-900/30
  dark:text-yellow-200"
    >
      <AlertTriangleIcon />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default AlertWarning;
