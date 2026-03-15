
import Image from 'next/image'

const FullLogo = ({ height, width, className }: { height: number, width: number, className?: string }) => {
    return (
        <div className="flex items-center  group px-1">
            <div className="relative flex items-baseline">
                {/* Light Theme Logo */}
                <Image
                    src="/GPS_DarkBg.png"
                    alt="GPS Manipur Logo"
                    width={height}
                    height={width}
                    className={`${className} w-auto block dark:hidden object-contain transition-transform duration-300 group-hover:scale-110`}
                    priority
                />
                {/* Dark Theme Logo */}
                <Image
                    src="/GPS_LightBg.png"
                    alt="GPS Manipur Logo"
                    width={width}
                    height={height}
                    className={`${className} w-auto hidden dark:block object-contain transition-transform duration-300 group-hover:scale-110`}
                    priority
                />
            </div>
            <div className="flex flex-col">
                <span className="text-lg font-black tracking-tighter leading-none bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent uppercase font-geist">
                    GPS Manipur
                </span>
                {/* <span className="text-[8px] font-bold tracking-[0.2em] text-muted-foreground/60 uppercase leading-none mt-1">
                    Empowering Education
                </span> */}
            </div>
        </div>
    )
}

export default FullLogo