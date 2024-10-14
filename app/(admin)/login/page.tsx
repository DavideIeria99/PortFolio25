"use client";
import Logo from "@/components/icons/logo";
import { FormButton } from "@/components/ui/form-button";
import { useFormState } from "react-dom";
import { FormState, loginAction } from "../action";

const initialState: FormState = {
    message: "",
};
export default function Login() {
    const [state, formAction] = useFormState(loginAction, initialState);

    return (
        <main className="min-h-screen w-full">
            <section className="mx-auto w-full rounded border-4 bg-slate-200 bg-opacity-50 p-3 md:w-1/2 md:border-orange-400 md:p-0">
                <div className="p-8 text-center sm:px-12 lg:px-16 lg:py-12 ">
                    <Logo className="mx-auto block h-12 w-full" />

                    <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                        Welcome Admin
                    </h1>
                    <form
                        action={formAction}
                        className="mt-8 p-2 *:my-2 lg:p-5"
                    >
                        <div className="mx-auto  ">
                            <label
                                htmlFor="Email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>

                            <input
                                required
                                type="email"
                                id="Email"
                                name="email"
                                className="mt-1 w-full  rounded-md border-gray-200 bg-body px-3 py-1 text-sm text-gray-700 shadow-sm"
                            />
                        </div>

                        <div className="mx-auto">
                            <label
                                htmlFor="Password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>

                            <input
                                required
                                type="password"
                                id="Password"
                                name="password"
                                className="mt-1 w-full rounded-md border-gray-200 bg-body px-3 py-1 text-sm text-gray-700 shadow-sm"
                            />
                        </div>
                        <FormButton text={"login"} />

                        <div className="text-red-700">{state.message}</div>
                    </form>
                </div>
            </section>
        </main>
    );
}
