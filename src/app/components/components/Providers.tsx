"use client"

import { Children as ReactChildren, PropsWithChildren, ReactNode, useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createTRPCProxyClient, httpBatchLink as trpcHttpBatchLink } from '@trpc/client'

const Providers = ({ children }: PropsWithChildren) => {
    const [queryClient] = useState(() => new QueryClient())
    const [trpcClient] = useState(() => 
        createTRPCProxyClient({
            links: [
                trpcHttpBatchLink({
                    url: 'http://localhost:3000/api/trpc',
                }),
            ],
        })
    )

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default Providers