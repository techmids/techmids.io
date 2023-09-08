export default function Banner() {
    return (
        <div className="items-center justify-center gap-x-6 bg-white px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
            <p className="text-sm leading-6 text-black fit-content">
                <a className="w-items" href="https://conf.techmids.io">
                    <strong className="font-semibold">TechMids Conf October 2023</strong>
                    <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                        <circle cx={1} cy={1} r={1} />
                    </svg>
                    Join us in Birmingham&apos;s ICC on 20th October 2023<span aria-hidden="true">&rarr;</span>
                </a>
            </p>
        </div>
    )
}
