"use client";
import ContactDialog from "@/components/dialogs/contact-dialog";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

export const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("control-panel");

  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span> GonzoCity is out now! </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Transform Municipal Operations with
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Real-Time
              </span>
              Efficiency
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`Streamline city infrastructure documentation and management. Connect
            field workers and office staff in real-time for seamless
            coordination.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <ContactDialog buttonName="Start Free Trial" buttonSize="lg" />
            <Button variant="default" className="w-5/6 md:w-1/4 font-bold">
              <Smartphone className="mr-2 h-4 w-4"></Smartphone>
              <a href="https://google.com" target="_blank">
                Download iOS app
              </a>
            </Button>
            {/* <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              Get Started
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button> */}

            {/* <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link
                href="https://github.com/nobruf/shadcn-landing-page.git"
                target="_blank"
              >
                Github respository
              </Link>
            </Button> */}
          </div>
        </div>

        <div className="relative group mt-14">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="flex justify-center mb-4">
              <TabsList>
                <TabsTrigger value="control-panel">Control Panel</TabsTrigger>
                <TabsTrigger value="ios-app">iOS App</TabsTrigger>
              </TabsList>
            </div>

            <div className="overflow-hidden relative">
              <TabsContent value="control-panel">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem className="flex justify-center">
                      <Image
                        width={1200}
                        height={1200}
                        className="w-full max-w-[1200px] rounded-lg border border-t-2 border-secondary border-t-primary/30"
                        src="/hero-image-light.jpeg"
                        alt="dashboard light"
                      />
                    </CarouselItem>
                    <CarouselItem className="flex justify-center">
                      <Image
                        width={1200}
                        height={1200}
                        className="w-full max-w-[1200px] rounded-lg border border-t-2 border-secondary border-t-primary/30"
                        src="/hero-image-dark.jpeg"
                        alt="dashboard dark"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10" />
                  <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10" />
                </Carousel>
              </TabsContent>

              <TabsContent value="ios-app">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem className="flex justify-center">
                      <Image
                        width={1200}
                        height={1200}
                        className="w-full max-w-[1200px] rounded-lg border border-t-2 border-secondary border-t-primary/30"
                        src="/hero-image-light.jpeg"
                        alt="iOS app image 1"
                      />
                    </CarouselItem>
                    <CarouselItem className="flex justify-center">
                      <Image
                        width={1200}
                        height={1200}
                        className="w-full max-w-[1200px] rounded-lg border border-t-2 border-secondary border-t-primary/30"
                        src="/hero-image-dark.jpeg"
                        alt="iOS app image 2"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10" />
                  <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10" />
                </Carousel>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
