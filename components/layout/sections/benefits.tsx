import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Streamline Asset Management",
    description:
      "Efficiently document and manage municipal assets with our structured digital solution. Transform complex infrastructure data into organized, accessible records.",
  },
  {
    icon: "LineChart",
    title: "Enhance Decision Making",
    description:
      "Make informed decisions with comprehensive asset data at your fingertips. Track maintenance needs, identify patterns, and optimize resource allocation.",
  },
  {
    icon: "Wallet",
    title: "Reduce Operational Costs",
    description:
      "Cut down on manual documentation efforts and minimize maintenance oversights. Our system helps prevent costly repairs through better tracking and early intervention.",
  },
  {
    icon: "Sparkle",
    title: "Improve Service Quality",
    description:
      "Deliver better public services through systematic asset monitoring. From street lighting to urban greenery, ensure every asset receives timely attention.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Shortcut to Success
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Modernize your infrastructure management with our digital solution.
            From street furniture to urban greenery, efficiently track and
            maintain your municipal assets while reducing costs and improving
            service delivery.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
