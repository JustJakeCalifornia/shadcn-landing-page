import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
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

            <CardContent className="p-6">
              <div className="flex gap-6">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                  <Image
                    src={logo}
                    alt={`${title} logo`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="64px"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold">{title}</h2>
                  <p className="text-muted-foreground">{description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
