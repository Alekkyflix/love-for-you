import { Camera, Calendar, MapPin, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import memoriesBackground from "@/assets/memories-background.jpg";
import coupleImage from "@/assets/1.jpg";

const memories = [
  {
    title: "Our first meet up",
    date: "After the maandamano huku",
    location: "Where our story began",
    description: "Aki nilikuwa naskia navas😂."
  },

  {
    title: "That Perfect Weekends",
    date: "A weekend to remember",
    location: "Your place",
    description: "Just you and me, no distractions. We talk and play 🤭🤭."

  },
  {
    title: "The moment I knew",
    date: "When I realized",

    location: "In your 😊😊",
    description: "There was this moment when I looked at you and just knew you were my person💯."
  },

  {
    title: "Our stories kila siku",
    date: "Every single day",

    location: "Everywhere with 🫵🏼",
    description: "Even the simplest moments become adventures when I'm with you. Cooking, watching movies and dancing🕺💃🏼, it's all perfect."
  }
];

const LoveMemories = () => {
  return (
    <section id="memories" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${memoriesBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-rose-light/50 to-gold-light/30" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Camera className="w-12 h-12 text-rose mx-auto mb-6 animate-heart-beat" />
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-deep to-gold bg-clip-text text-transparent">
            Our Beautiful Memories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every moment with you becomes a cherished memory that I carry in my heart forever.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Memory Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_60px_-10px_hsl(340_75%_55%_/_0.3)]">
              <img 
                src={coupleImage} 
                alt="Beautiful memory of us together" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">Us Against the World</h3>
                <p className="text-white/90">Every sunset is more beautiful when shared with you</p>
              </div>
            </div>
          </div>

          {/* Memory Cards */}
          <div className="space-y-4">
            {memories.map((memory, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-[0_10px_30px_-5px_hsl(340_50%_80%_/_0.4)] transition-all duration-300 hover:scale-102 border-rose/20 bg-card/90 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose to-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {memory.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {memory.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {memory.location}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {memory.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveMemories;