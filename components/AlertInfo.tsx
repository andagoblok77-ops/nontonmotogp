import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";

const AlertInfo = ({
  title,
  message,
}: {
  title: string | null;
  message: string | null;
}) => {
  return (
    <Alert variant="destructive" className="w-full">
      <AlertCircleIcon />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default AlertInfo;
