import React, {useLayoutEffect, useEffect, useRef} from 'react'
import gsap from 'gsap';

const Popup = ({isOpen, onClose, children}) => {
    const popupRef = useRef();
    const bgRef = useRef(null);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        document.body.classList.toggle("overflow-hidden", isOpen);
        console.log(document.body);
        return () => document.body.style.overflow = "";
            document.body.classList.remove("overflow-hidden");
    }, [isOpen]);

    useLayoutEffect(() => {
        if (!isOpen) return;

        gsap.to(bgRef.current, {
          opacity:0.5,
          duration:0.6,
        })
        gsap.fromTo(
            popupRef.current,
            {
            y: "100%",
            },
            {
            y: "0%",
            duration: 0.6,
            ease: "back.out(1.1)",
            }
        );
    }, [isOpen]);

    const handleClose = () =>
    {
        gsap.to(bgRef.current, {
          opacity:0,
          duration:0.5,
          ease:'power2.in'
        })
        gsap.to(popupRef.current, {
            y:"100%",
            duration: 0.5,
            ease:'power2.in',
            onComplete: onClose,
        });
    };

    if (!isOpen) return null;

  return (
    <div
  className="fixed inset-0 z-50"
  onClick={handleClose}
>
  {/* Background */}
  <div ref={bgRef} className="absolute inset-0 bg-DarkArea-50 opacity-0" />

  {/* Scrollable content */}
  <div className="relative h-full overflow-y-auto overscroll-contain px-5 py-5">
    <div className="flex min-h-full items-center justify-center">
      <div
        ref={popupRef}
        className="relative h-fit min-h-screen rounded-lg bg-UIBackground-50 outline outline-Borders-50 max-w-full w-[1000px]"
        onClick={(e) => e.stopPropagation()}
      >
        {children}

        <button
          onClick={handleClose}
          className="absolute right-6 top-6 rounded bg-DarkArea-50 px-4 py-2 text-SecondaryText-50 duration-150 hover:scale-110"
        >
          ✕
        </button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Popup
