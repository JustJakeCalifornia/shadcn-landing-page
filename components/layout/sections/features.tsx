import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "ClipboardList",
    title: "Digital Documentation",
    description:
      "Easily document and manage city infrastructure including gullies, trees, street lights, and more.",
  },
  {
    icon: "TabletSmartphone",
    title: "iOS App",
    description:
      "Easily document and manage city infrastructure including gullies, trees, street lights, and more.",
  },
  {
    icon: "BarChart3",
    title: "Control Panel",
    description:
      "Comprehensive reporting and analytics to track efficiency and make data-driven decisions.",
  },
  {
    icon: "PictureInPicture",
    title: "Strong Visuals",
    description:
      "Clean and modern UI that enhances usability and accessibility, making navigation effortless.",
  },
  {
    icon: "Sparkle",
    title: "Real-Time Updates",
    description:
      "Instant communication between office staff and field workers for efficient task management.",
  },
  {
    icon: "Bell",
    title: "Smart Notifications",
    description:
      "Automated alerts for maintenance schedules, urgent repairs, and task assignments.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Transforming municipal efficiency by streamlining the documentation of
        essential assets like gullies, trees, and street lights. Our solutions
        empower local governments to manage their resources effectively and
        enhance community services.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
