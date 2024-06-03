"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectLanguage } from "@/components/data/languages-selector";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AiFillPlusCircle } from "react-icons/ai";
import { useForm } from "react-hook-form";
export default function AddWord() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      className="flex w-full max-w-6xl gap-2 flex-col "
      onSubmit={handleSubmit(onSubmit)}>
      <div className="flex w-full justify-between gap-4">
        <div className="flex flex-col gap-4 w-full">
          <Input
            label="Word"
            id="word"
            placeholder="the word you want to save"
            {...register("word", { required: true })}
          />
          <Label htmlFor="word">Word to save</Label>
          <SelectLanguage
            placeholder="choose the language of the word"
            {...register("word_language", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <Input
            label="meaning"
            id="meaning"
            placeholder="the meaning of the word"
            {...register("meaning", { required: true })}
          />
          <Label htmlFor="meaning">Meaning in...</Label>
          <SelectLanguage
            {...register("meaning_language", { required: true })}
            placeholder="choose your language"
          />
        </div>
      </div>
      <p>{"can't"} see your language ? add new language</p>
      <div className="flex">
        <Button>
          Add Language <AiFillPlusCircle className="mx-4" />
        </Button>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <Label>Description (facultative)</Label>
        <Textarea
          {...register("description", { required: true })}
          label="Example"
          placeholder="add the description..."
        />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
}
