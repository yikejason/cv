"use client";
import { PrinterIcon } from "lucide-react";
import { Button } from "./ui/button";
export function PrintButton() {
  return (
    <Button
      onClick={() => window.print()}
      variant="outline"
      size="icon"
      className="fixed right-16 top-16 rounded-full shadow-2xl print:hidden"
    >
      <PrinterIcon className="my-6 size-6" />
    </Button>
  );
}
