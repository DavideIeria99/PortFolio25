"use client";

import { useFormStatus } from "react-dom";
import Loader from "./loader";

interface formButtomProps {
    text: string;
}
export const FormButton = ({ text }: formButtomProps) => {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            className=" mx-auto flex w-auto justify-around rounded  border-0 bg-indigo-500 px-8 py-2 text-lg text-white transition-transform  hover:bg-indigo-600 focus:outline-none"
        >
            <span>{text}</span>
            {pending && (
                <span className="ms-2">
                    <Loader />
                </span>
            )}
        </button>
    );
};
