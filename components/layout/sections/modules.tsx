import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

enum NewModule {
  YES = 1,
  NO = 0,
}

interface ModuleProps {
  title: string;
  newModule: NewModule;
  description: string;
  logo: string;
}

const moduleList: ModuleProps[] = [
  {
    title: "GullyGonzo",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit adipisicing.",
    newModule: 0,
    logo: "/gullygonzo.jpg",
  },
  {
    title: "RatGonzo",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, dicta.",
    newModule: 0,
    logo: "/ratgonzo.jpg",
  },
  {
    title: "StreetGonzo",
    description: "Lorem dolor sit amet adipisicing.",
    newModule: 0,
    logo: "/streetgonzo.jpg",
  },
  {
    title: "ParkGonzo",
    description: "Lorem ipsum dolor sit amet consectetur.",
    newModule: 1,
    logo: "/parkgonzo.jpg",
  },
];

export const ModulesSection = () => {
  return (
    <section id="modules" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Modules
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Everything you need to manage your city
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Choose from our comprehensive suite of modules to build the perfect
        solution for your municipality.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full lg:w-[80%] mx-auto">
        {moduleList.map(({ title, description, newModule, logo }) => (
          <Card
            key={title}
            className="group bg-background border-2 relative rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
          >
            <Badge
              data-newmodule={NewModule.YES === newModule}
              variant="secondary"
              className="absolute top-6 right-6 data-[newmodule=false]:hidden z-10 bg-primary/10 text-primary border border-primary/20 font-medium px-2.5 py-0.5"
            >
              NEW
            </Badge>

            <CardHeader className="p-8">
              <div className="flex flex-col gap-6">
                <div className="w-16 h-16 relative shrink-0 rounded-2xl overflow-hidden bg-muted/30 p-2 ring-2 ring-muted/20 group-hover:ring-primary/20 transition-all duration-300">
                  <Image
                    src={logo}
                    alt={`${title} logo`}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                <div className="space-y-3">
                  <CardTitle className="text-2xl font-semibold tracking-tight">
                    {title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
