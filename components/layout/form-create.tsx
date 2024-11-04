import { FormButton } from "@/components/ui/form-button";

interface FormCreateProps {
    setName: React.Dispatch<React.SetStateAction<string | null>>;
    setImage: React.Dispatch<React.ChangeEvent<HTMLInputElement>>;
}
export default function FormCreate({ ...props }: FormCreateProps) {
    return (
        <form
            className="grid w-full grid-cols-1 gap-3  md:grid-cols-2 "
            action=""
        >
            {/* nome */}
            <div className="w-full p-2">
                <label
                    htmlFor="name"
                    className="text-sm leading-7 text-gray-600"
                >
                    Nome Progetto
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Progetto"
                    onChange={(e) => props.setName(e.target.value)}
                    className="w-full rounded border border-gray-300 bg-gray-100 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500"
                />
            </div>
            <div className="w-full p-2">
                <label
                    htmlFor="image"
                    className="text-sm leading-7 text-gray-600"
                >
                    image
                </label>
                <input
                    onChange={(e) => props.setImage(e)}
                    type="file"
                    id="image"
                    name="image"
                    placeholder="image"
                    className="w-full rounded border border-gray-300 bg-gray-100 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500"
                />
            </div>

            {/* testo */}
            <div className="w-full p-2 md:col-span-2">
                <label
                    htmlFor="message"
                    className="text-sm leading-7 text-gray-600"
                >
                    descrizione
                </label>
                <textarea
                    placeholder="text..."
                    id="message"
                    name="message"
                    className="h-24 w-full resize-none rounded border border-gray-300 bg-gray-100 px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500"
                ></textarea>
            </div>
            {/* submit */}
            <div className=" w-full p-2 md:col-span-2 ">
                <FormButton text={"invia"} />
                {/* <div className="text-red-700">{state.error}</div> */}
            </div>
        </form>
    );
}
