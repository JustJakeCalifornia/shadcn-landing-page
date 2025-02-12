"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    name: "Charlotte Brown",
    userName: "UX Designer at Aussie Digital Lab (Australia)",
    comment:
      "We introduced this solution to several local councils, and the response was overwhelmingly positive. The platform’s modern UI and quick documentation process for assets like streetlights and trees have significantly streamlined municipal workflows.",
    rating: 4.9,
  },
  {
    name: "Johann Müller",
    userName: "Geschäftsführer at BerlinTech GmbH (Germany)",
    comment:
      "Unsere Gemeinde-Partner sind begeistert von der benutzerfreundlichen iOS- und Web-App. Ob Straßenlaternen, Bäume oder Mülleimer – die Dokumentation war noch nie so einfach. Ein echter Gewinn für die kommunale Verwaltung!",
    rating: 5.0,
  },
  {
    name: "Jessica Thompson",
    userName: "Marketing Director at Acme Corp (U.S.)",
    comment:
      "We’ve helped multiple cities adopt this platform, and the feedback has been fantastic. The ability to track and update various assets on both iOS and web—like gullies and streetlights—has genuinely transformed local government operations.",
    rating: 4.8,
  },
  {
    name: "Helena Schulz",
    userName: "Lead Developer at München Innovations (Germany)",
    comment:
      "Die Integration eines zentralen Systems zur Erfassung von Straßenlaternen, Bäumen und Co. funktioniert reibungslos. Vor allem das Echtzeit-Reporting und die intuitive Bedienung sind ein großes Plus für unsere Kommunen.",
    rating: 4.9,
  },
  {
    name: "Oliver Smith",
    userName: "CTO at SydneyTech Solutions (Australia)",
    comment:
      "This platform offers one of the most efficient ways to manage municipal data that I’ve seen. From iOS app to web dashboard, the flow is seamless, and our clients love how quick it is to document assets like rubbish bins and streetlights.",
    rating: 5.0,
  },
  {
    name: "Michael Anderson",
    userName: "CEO at Redwood Analytics (U.S.)",
    comment:
      "Adopting this software has made asset tracking effortless for our partner municipalities. The simple user interface and real-time updates on everything from gullies to garbage cans mean cities can operate far more efficiently.",
    rating: 5.0,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our 1000+ Clients Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
