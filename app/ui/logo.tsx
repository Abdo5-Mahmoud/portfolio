import clsx from "clsx";

type LogoProps = {
  color: string;
  size?: string;
};

export default function Logo({ color, size }: LogoProps) {
  return (
    <div className="logo-hover-container logo-hover-animation">
      <div className="flex items-center justify-center ">
        <div
          className={clsx(
            " flex flex-wrap w-[70px] h-full justify-start items-start",
            size == "small" ? "max-w-8 h-8" : "lg:w-22 "
          )}
        >
          <span
            className={clsx(
              ` bg-${color} rounded-bl-full block`,
              size == "small" ? "w-4 h-4" : "w-6 h-6 lg:h-11 lg:w-11"
            )}
          ></span>
          <span
            className={clsx(
              ` bg-${color} rounded-tl-full block`,
              size == "small" ? "w-4 h-4" : "w-6 h-6 lg:h-11 lg:w-11"
            )}
          ></span>
          <span
            className={clsx(
              ` bg-${color} rounded-br-full block`,
              size == "small" ? "w-4 h-4" : "w-6 h-6 lg:h-11 lg:w-11"
            )}
          ></span>
          <span
            className={clsx(
              ` bg-${color} rounded-tr-full block`,
              size == "small" ? "w-4 h-4" : "w-6 h-6 lg:h-11 lg:w-11"
            )}
          ></span>
        </div>
      </div>
    </div>
  );
}
