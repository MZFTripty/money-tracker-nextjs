/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react"

export  function useIsMobile(breakpoint = 768): boolean {
    const [isMobile, setIsMobile] = useState<boolean>(() =>
        typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
    )

    useEffect(() => {
        if (typeof window === "undefined") return

        const mq = window.matchMedia(`(max-width: ${breakpoint}px)`)
        const handler = (e: MediaQueryListEvent | MediaQueryList) =>
            setIsMobile("matches" in e ? e.matches : Boolean((e as any).matches))

        // set initial value and subscribe to changes
        setIsMobile(mq.matches)
        if (mq.addEventListener) {
            mq.addEventListener("change", handler as EventListener)
        } else {
            // older browsers
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (mq as any).addListener(handler)
        }

        return () => {
            if (mq.removeEventListener) {
                mq.removeEventListener("change", handler as EventListener)
            } else {
                ;(mq as any).removeListener(handler)
            }
        }
    }, [breakpoint])

    return isMobile
}