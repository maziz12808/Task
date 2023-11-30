import { Transition } from '@headlessui/react'

export const Fade = ({children,state=false,className=null})=>{
    const design = (
      <>
        <Transition
          show={state}
          enter="transition duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {children}
        </Transition>
      </>
    );
    return design;
  }

