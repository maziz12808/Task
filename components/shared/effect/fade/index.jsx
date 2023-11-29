import { Transition } from '@headlessui/react'
export const Fade = ({children,show=false})=>{
    return (
        <Transition
            show={show}
        >
            {children}
        </Transition>
    )
}

export const FadeIn = ({children,show=false})=>{
    return (
        <Transition
            show={show} 
            enter="transition duration-50"
            enterFrom="scale-x-0"
            enterTo="scale-x-125"
            leave="transition duration-50"
            leaveFrom="scale-x-125"
            leaveTo="scale-x-0"
        >
            {children}
        </Transition>
    )
}