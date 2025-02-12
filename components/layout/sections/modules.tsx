import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum NewModule {
  YES = 1,
  NO = 0,
}
interface ModuleProps {
  title: string;
  newModule: NewModule;
  description: string;
}
const moduleList: ModuleProps[] = [
  {
    title: "GullyGonzo",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit adipisicing.",
    newModule: 0,
  },
  {
    title: "Social Media Integrations",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, dicta.",
    newModule: 0,
  },
  {
    title: "Email Marketing Integrations",
    description: "Lorem dolor sit amet adipisicing.",
    newModule: 0,
  },
  {
    title: "SEO Optimization",
    description: "Lorem ipsum dolor sit amet consectetur.",
    newModule: 1,
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

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {moduleList.map(({ title, description, newModule }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-newmodule={NewModule.YES === newModule}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[newmodule=false]:hidden"
            >
              NEW
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
