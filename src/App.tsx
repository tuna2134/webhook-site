import React from "react";
import { useForm } from "react-hook-form";

const App: React.FC = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = React.useState<string>("");
    return (
        <div className="bg-slate-800 text-white w-full min-h-screen items-center flex flex-col justify-center">
            <div className="w-full max-w-80">
                <p>{data}</p>
                <form className="w-full" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                    <div className="space-y-6">
                        <div>
                            <label className="text-lg block font-bold">Webhook</label>
                            <input className="mt-2 border border-gray-200 p-1.5 block w-full bg-white/5" {...register("webhook")} />
                        </div>
                        <div className="">
                            <label className="text-lg block font-bold">Title</label>
                            <input className="mt-2 border border-gray-200 p-1.5 block w-full bg-white/5" {...register("title")} />
                        </div>
                    </div>
                    <button className="mt-8 rounded hover:bg-green-400 bg-green-400/50 px-5 py-2 text-lg">送信</button>
                </form>
            </div>
        </div>
    )
}

export default App;