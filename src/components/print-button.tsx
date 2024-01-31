"use client";
import { PrinterIcon } from "lucide-react";
import { Button } from "./ui/button";
export const PrintButton = () => {
  return (
    <Button
      onClick={() => window.print()}
      variant="outline"
      size="icon"
      className="fixed right-16 top-16 hidden rounded-full shadow-2xl lg:block print:hidden"
    >
      <PrinterIcon className="print-icon-margin-left size-6" />
    </Button>
  );
};
