import { Geist, Roboto, Zain } from 'next/font/google'


export const geist = Geist({
    subsets: ['latin'],
})
export const roboto = Roboto({
    variable: '--font-roboto',
    subsets: ['latin'],
})

export const zain = Zain({
    weight: ['400'],
    variable: '--font-zain',
    subsets: ['latin'],
})
