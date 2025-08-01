import { Heart, Smile, Star, Sun, Moon, Flower, Music, Coffee } from "lucide-react";
import { Card } from "@/components/ui/card";

const reasons = [
  {
    icon: Smile,
    title: "Your beautiful smile",
    description: "The way your eyes light up when you smile makes my heart skip a beat every single time.😫"
  },
  {
    icon: Heart,
    title: "Your Kind Heart",
    description: "You have the most compassionate soul I've ever met fr. Thanks for alwys listening😍."
  },
  {
    icon: Star,
    title: "You're my little nuclear reactor",
    description: "You always find a way to fill the room🥰💀."
  },
  {
    icon: Sun,
    title: "Your warmth",
    description: "Being with you feels like basking in the warm sunshine on a perfect spring day.😉"
  },
  {
    icon: Music,
    title: "Your laugh",
    description: "Your laughter is my favorite song😂. It fills my heart with joy and makes me fall in love all over again."
  },
  {
    icon: Moon,
    title: "Our quiet moments",
    description: "The peaceful moments we share together are my most treasured memories. Acha nisichome 😂😂"
  },
  {
    icon: Flower,
    title: "Your beauty",
    description: "You're more beautiful than any flower🥀, sunset 🌇, or work of art. Inside and out, you're absolutely stunning."
  },
  {
    icon: Coffee,
    title: "Our little rituals",
    description: "From morning coffee to bedtime talks, every little moment (even those weird ones🤭😂) we share becomes a precious memory."
  }
];

const LoveReasons = () => {
  return (
    <section id="reasons" className="py-20 px-6 bg-gradient-to-br from-background to-rose-light/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Heart className="w-12 h-12 text-rose mx-auto mb-6 animate-heart-beat" />
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-deep to-gold bg-clip-text text-transparent">
            Why I Love You
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            There are countless reasons, but here are just a few that make my heart overflow with love for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-[0_20px_60px_-10px_hsl(340_75%_55%_/_0.2)] transition-all duration-300 hover:scale-105 border-rose/20 bg-card/80 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-rose to-gold rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LoveReasons;