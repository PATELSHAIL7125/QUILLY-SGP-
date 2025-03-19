'use client'
import { useState } from "react"
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog"

import { Button } from "./components/ui/button"
import { DialogContent } from "@/components/ui/dialog"

const UploadButton = () => {
    const [isopen, setIsopen] = useState<boolean>(false)

    return (
        <Dialog
            open={isopen}
            onOpenChange={(v) => {
                if (!v) {
                    setIsopen(v)
                }
            }}>
            <DialogTrigger
                onClick={() => setIsopen(true)}
                asChild>
                <Button>Upload PDF</Button>
            </DialogTrigger>
            <DialogContent>
                enter
            </DialogContent>
          
        </Dialog>
    )
}

export default UploadButton