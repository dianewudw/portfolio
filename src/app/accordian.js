'use client'
// page isn't connected with anything
export default function Accordian(){
    return(
        <>
            <div className="relative">
                <button type="button"
                        className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray"
                        aria-expanded="false">
                    <span>Work</span>
                </button>
                <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                    <div
                        className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                            <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                <div>
                                    <a href="#" className="font-semibold text-gray-900">
                                        001
                                        <span className="absolute inset-0"></span>
                                    </a>
                                    <p className="mt-1 text-gray-600">KetoDiet</p>
                                </div>
                            </div>
                            <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                <div>
                                    <a href="#" className="font-semibold text-gray-900">
                                        002
                                        <span className="absolute inset-0"></span>
                                    </a>
                                    <p className="mt-1 text-gray-600">Ever Home Care</p>
                                </div>
                            </div>
                            <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                <div>
                                    <a href="#" className="font-semibold text-gray-900">
                                        003
                                        <span className="absolute inset-0"></span>
                                    </a>
                                    <p className="mt-1 text-gray-600">Artfolio</p>
                                </div>
                            </div>
                            <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                <div>
                                    <a href="#" className="font-semibold text-gray-900">
                                        004
                                        <span className="absolute inset-0"></span>
                                    </a>
                                    <p className="mt-1 text-gray-600">Neighborly</p>
                                </div>
                            </div>
                            <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                <div>
                                    <a href="#" className="font-semibold text-gray-900">
                                        005
                                        <span className="absolute inset-0"></span>
                                    </a>
                                    <p className="mt-1 text-gray-600">Foodie</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}