import { Amiri, Roboto } from 'next/font/google'



export const roboto = Roboto({
    subsets: ['latin'],
})

export const amiri = Amiri({
    weight: ['400'],
    variable: '--font-amiri',
    subsets: ['latin'],
})
