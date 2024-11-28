import { cn, formatDateTime } from "@/lib/utils";
import React from "react";
interface types {
  date: string;
  className: string;
}
const FormattedDateTime = ({ date, className }: types) => {
  return (
    <p className={cn("body-1 text-gray-200", className)}>
      {formatDateTime(date)}
    </p>
  );
};

export default FormattedDateTime;
