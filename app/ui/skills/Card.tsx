import Logo from "@/app/ui/logo";

type CardProps = {
  title: string;
  description: string;
};
export default function Card({ title, description }: CardProps) {
  return (
    <div className=" relative flex bg-darkBlue/20  h-80 w-full px-5 py-14   gap-4 justify-center items-start rounded-2xl ">
      <div className=" flex justify-center items-center lg:basis-18 xl:basis-12">
        <Logo color="skyBlue" size={"small"} />
      </div>
      <div className="text">
        <h3 className="font-bold text-3xl mb-3">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
