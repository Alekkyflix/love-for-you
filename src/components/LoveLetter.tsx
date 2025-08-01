import { Heart, PenTool, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const LoveLetter = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background to-rose-light/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <PenTool className="w-12 h-12 text-rose mx-auto mb-6 animate-heart-beat" />
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-deep to-gold bg-clip-text text-transparent">
            A letter from this guy😊
          </h2>
        </div>

        <Card className="p-8 md:p-12 border-rose/20 bg-card/90 backdrop-blur-sm shadow-[0_20px_60px_-10px_hsl(340_75%_55%_/_0.2)] animate-fade-in">
          <div className="relative">
            {/* Decorative Elements */}
            <Heart className="absolute -top-4 -left-4 w-8 h-8 text-rose/30 animate-float" />
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-gold/40 animate-float" style={{ animationDelay: '2s' }} />
            
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p className="text-2xl text-rose font-semibold mb-8">My little pookie patootie bear🐻🫰🏼,</p>
              
              <p>
                I know ni siku ya girls for girls

                As I write this, my heart is overflowing with so much love for you that words seem inadequate. 
                You came into my life like a gentle breeze that turned into the most beautiful storm, 
                changing everything in the most wonderful way.
              </p>
              
              <p>
                Every morning I wake up grateful for another day to love you, to see your beautiful face, 
                to hear your voice, and to share this incredible journey of life together. You've taught me 
                what it means to love someone with every fiber of my being.
              </p>
              
              <p>
                Your strength inspires me, your kindness moves me, and your love completes me. 
                In a world full of uncertainty, you are my constant, my safe harbor, my home. 
                With you, I've discovered that love isn't just a feeling, it's a choice we make every day, 
                and I choose you, today and always.
              </p>
              
              <p>
                Thank you for being you, perfectly imperfect, beautifully authentic, and absolutely amazing. 
                Thank you for loving me, for believing in us, and for making every day feel like a gift.
              </p>
              
              <p>
                I love you more than all the stars in the sky, deeper than the ocean, 
                and with a love that grows stronger with each passing moment.
                English si rahisi weeeh😂😂
              </p>
              
              <div className="pt-8 text-right">
                <p className="text-2xl text-rose font-semibold">Forever yours,</p>
                <p className="text-xl text-gold font-medium mt-2">Your's truly Flix❤️</p>
              </div>
            </div>
          </div>
        </Card>
        
        <div className="text-center mt-12">
          <div className="flex justify-center items-center gap-2 text-muted-foreground">
            <Heart className="w-5 h-5 text-rose animate-heart-beat" />
            <span className="text-lg">Happy Girlfriend's Day, Miss Bisieri❤️🥺</span>
            <Heart className="w-5 h-5 text-rose animate-heart-beat" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;