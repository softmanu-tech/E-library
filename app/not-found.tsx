import React from 'react'
import Link from "next/link";
import {ArrowLeft} from "lucide-react";

function NotFoundPage () {
    return (
        <div className={` flex flex-col items-center justify-center min-h-screen p-4`}>
            <div className={`text-center`}>
                <h1 className={`text-6xl font-bold text-primary mb-4`}>
                    404
                </h1>
                <h2 className={`text-2xl font-semibold mb-4`}>
                    Not found

                </h2>
                <p className={`text-muted-foreground mb-8 max-w-md`}>
                    Don&apos;t worry, even the best data sometimes gets lost in the internet.
                </p>
                <div className={`flex flex-col items-center justify-center sm:flex-row gap-4`}  >
                    <Link href={"/"} className={`flex items-center justify-center px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/80 transition-colors`}>
                        <ArrowLeft className={`w-4 h-4 mr-2`} />
                        Back to Dashboard

                    </Link>

                </div>

            </div>


        </div>
    )
}