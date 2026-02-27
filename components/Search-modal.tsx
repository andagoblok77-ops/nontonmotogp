"use client";

import { useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchModal({ open, onOpenChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-lg"
        onOpenAutoFocus={(e) => {
          e.preventDefault(); // prevent default focus
          inputRef.current?.focus();
        }}
      >
        {/* Required for accessibility */}
        <VisuallyHidden asChild>
          <DialogTitle>Search</DialogTitle>
        </VisuallyHidden>

        <Input
          ref={inputRef}
          placeholder="Search..."
          aria-label="Search"
        />
      </DialogContent>
    </Dialog>
  );
}