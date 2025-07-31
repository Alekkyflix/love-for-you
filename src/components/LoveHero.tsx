import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const LoveHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-rose-light/50 to-rose/30" />
      
      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-20 left-20 w-8 h-8 text-rose/30 animate-float" />
        <Heart className="absolute top-40 right-32 w-6 h-6 text-gold/40 animate-float" style={{ animationDelay: '2s' }} />
        <Heart className="absolute bottom-32 left-40 w-10 h-10 text-rose/25 animate-float" style={{ animationDelay: '4s' }} />
        <Heart className="absolute bottom-20 right-20 w-7 h-7 text-gold/35 animate-float" style={{ animationDelay: '1s' }} />
        <Sparkles className="absolute top-60 left-1/4 w-5 h-5 text-gold/50 animate-float" style={{ animationDelay: '3s' }} />
        <Sparkles className="absolute bottom-40 right-1/3 w-6 h-6 text-rose/40 animate-float" style={{ animationDelay: '5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <Heart className="w-16 h-16 text-rose mx-auto mb-6 animate-heart-beat" />
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-rose-deep to-gold bg-clip-text text-transparent">
            My Love
          </h1>
          <p className="text-2xl md:text-3xl text-foreground/80 mb-8 font-light">
            For the most beautiful soul in my world
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Every day with you feels like a dream come true. You light up my world with your smile, 
            your laugh, and the way you make everything better just by being you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="romantic" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => document.getElementById('reasons')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Heart className="w-5 h-5" />
              Why I Love You
            </Button>
            <Button 
              variant="gold" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => document.getElementById('memories')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="w-5 h-5" />
              Our Memories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveHero;