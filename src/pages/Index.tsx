import { Heart, Shield, MessageCircle, Lock, Sparkles, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/lovesnap-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-romantic">
      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h1 className="mb-6 text-5xl md:text-7xl font-bold bg-gradient-love bg-clip-text text-transparent">
              LoveSnap
            </h1>
            <p className="mb-4 text-2xl md:text-3xl text-foreground/80 font-medium">
              Where Love is Safe and Private
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The ultimate messaging app for couples who value privacy, security, and fun in their communication. 
              Share intimate moments that disappear after viewing, keeping your love truly private.
            </p>
          </div>
          
          <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-love hover:shadow-love transition-love px-8 py-6 text-lg font-semibold">
              <Heart className="mr-2 w-5 h-5 heart-pulse" />
              Start Your Love Story
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg">
              <Shield className="mr-2 w-5 h-5" />
              Learn About Privacy
            </Button>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <img 
              src={heroImage} 
              alt="LoveSnap romantic messaging interface" 
              className="rounded-3xl shadow-love w-full h-auto"
            />
            <div className="absolute -top-4 -right-4 bg-gradient-heart p-4 rounded-full glow-heart">
              <Heart className="w-8 h-8 text-white heart-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Made for <span className="bg-gradient-love bg-clip-text text-transparent">Lovers</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-romantic transition-romantic love-glow">
              <div className="mb-6 bg-gradient-heart p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Disappearing Messages</h3>
              <p className="text-muted-foreground leading-relaxed">
                Send intimate photos, videos, and messages that vanish after viewing or after 24 hours. 
                Your private moments stay truly private.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-romantic transition-romantic love-glow">
              <div className="mb-6 bg-gradient-heart p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">End-to-End Encryption</h3>
              <p className="text-muted-foreground leading-relaxed">
                Military-grade encryption ensures only you and your partner can see your messages. 
                Not even we can access your love notes.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-romantic transition-romantic love-glow">
              <div className="mb-6 bg-gradient-heart p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Romantic Features</h3>
              <p className="text-muted-foreground leading-relaxed">
                Love filters, heart stickers, couple themes, and AI-powered date suggestions. 
                Make every conversation magical.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Promise Section */}
      <section className="py-20 px-6 bg-gradient-love">
        <div className="container mx-auto max-w-4xl text-center">
          <Lock className="w-16 h-16 text-white mx-auto mb-8 glow-heart" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Your Love, Your Privacy
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            We believe your intimate moments should be yours alone. That's why LoveSnap uses 
            zero-knowledge architecture - we can't see your messages even if we wanted to.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg">
            <Shield className="mr-2 w-5 h-5" />
            Read Our Privacy Promise
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Ready to Share Your Love Safely?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Join thousands of couples who trust LoveSnap to keep their romantic moments private and secure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-love hover:shadow-love transition-love px-12 py-6 text-xl font-semibold">
              <Phone className="mr-2 w-6 h-6" />
              Download LoveSnap
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 px-12 py-6 text-xl">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 text-primary mr-3 heart-pulse" />
            <span className="text-2xl font-bold bg-gradient-love bg-clip-text text-transparent">LoveSnap</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Where Love is Safe and Private
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 LoveSnap. Made with ❤️ for couples everywhere.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;