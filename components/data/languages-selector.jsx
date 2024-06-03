import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectLanguage({ placeholder = "Select a language" }) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Language</SelectLabel>
          <SelectItem value="apple">French</SelectItem>
          <SelectItem value="banana">English</SelectItem>
          <SelectItem value="blueberry">Deutsche</SelectItem>
          <SelectItem value="grapes">Spanish</SelectItem>
          <SelectItem value="pineapple">Latin</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
