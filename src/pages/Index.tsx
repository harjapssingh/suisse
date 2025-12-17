import { useEffect, useState, useRef } from "react";
import { Mountain, Thermometer, Coins, Languages, MapPin, Utensils, Users, Plane, BookOpen, ChevronDown } from "lucide-react";
import { SwissQuiz } from "@/components/SwissQuiz";
import { InfoCard } from "@/components/InfoCard";
import { ImageCard } from "@/components/ImageCard";

// Images
import heroImage from "@/assets/hero-swiss-alps.jpg";
import lacLemanImage from "@/assets/lac-leman.jpg";
import matterhornImage from "@/assets/matterhorn.jpg";
import fondueImage from "@/assets/fondue.jpg";
import chateauImage from "@/assets/chateau-chillon.jpg";
import rhineFallsImage from "@/assets/rhine-falls.jpg";
import chocolateImage from "@/assets/chocolate.jpg";
import bernImage from "@/assets/bern.jpg";
import raclette from "@/assets/raclette.jpg";
import swissFlag from "@/assets/swiss.jpg";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#introduction');
    if (target) {
      target.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section with Parallax */}
      <header ref={heroRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 scale-110"
          style={{ 
            transform: `translateY(${scrollY * 0.4}px) scale(1.1)`,
          }}
        >
          <img
            src={heroImage}
            alt="Les Alpes suisses avec un lac alpin"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-20 w-48 h-48 bg-alpine-blue/30 rounded-full blur-3xl" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Swiss Flag Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-white/10 backdrop-blur-sm animate-fade-up overflow-hidden" style={{ animationDelay: "0s" }}>
            <img src={swissFlag} alt="Drapeau suisse" className="w-16 h-16 object-cover rounded-xl" />
          </div>
          
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 animate-fade-up tracking-tight"
            style={{ 
              textShadow: '0 8px 40px rgba(0,0,0,0.6), 0 4px 20px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3)',
              animationDelay: "0.1s",
              letterSpacing: '-0.02em'
            }}
          >
            La Suisse
          </h1>
          
          <p 
            className="text-xl md:text-2xl lg:text-3xl text-white mb-12 animate-fade-up font-light"
            style={{ 
              animationDelay: "0.2s",
              textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 2px 10px rgba(0,0,0,0.3)'
            }}
          >
            Notre voyage incroyable par Harjap et Junyang
          </p>
          
          <a
            href="#introduction"
            onClick={handleSmoothScroll}
            className="inline-flex items-center gap-3 text-lg animate-fade-up px-8 py-4 rounded-xl font-medium transition-all duration-300 bg-[hsl(35,40%,96%)]/95 text-[hsl(220,25%,12%)] hover:bg-[hsl(35,40%,96%)] hover:shadow-lg hover:scale-105 backdrop-blur-sm"
            style={{ animationDelay: "0.3s" }}
          >
            Découvrir notre aventure
            <Mountain className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary-foreground/60" />
        </div>
      </header>

      {/* Introduction */}
      <section id="introduction" className="relative py-28 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <div className="decorative-blur bg-primary/10 top-20 -left-40" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="section-title">Notre aventure suisse</h2>
          <div className="swiss-divider" />
          <p className="text-xl text-muted-foreground leading-relaxed">
            Nous nous sommes réveillés très tôt pour prendre l'avion vers la Suisse. 
            Pendant le voyage, nous nous sommes amusés à regarder des films. 
            Quand nous sommes arrivés à Zurich, la famille de Junyang nous a accueillis chaleureusement. 
            Elle nous a préparé un délicieux repas suisse et nous lui avons offert des cadeaux du Canada.
          </p>
        </div>
      </section>

      {/* Informations sur le pays */}
      <section className="relative py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-accent/30 to-secondary/50" />
        <div className="decorative-blur bg-alpine-blue/20 -top-20 right-0" />
        <div className="decorative-blur bg-primary/10 bottom-0 -left-20" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-xl overflow-hidden">
              <img src={swissFlag} alt="Drapeau suisse" className="w-full h-full object-cover" />
            </div>
            <h2 className="section-title">Informations sur la Suisse</h2>
            <div className="swiss-divider" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <InfoCard icon={<Thermometer className="w-6 h-6" />} title="Le climat">
              <p>
                En hiver, il fait très froid dans les montagnes et il neige beaucoup. 
                Nous nous sommes habillés chaudement chaque jour! 
                En été, le climat est agréable et on peut se promener dans les prairies.
              </p>
            </InfoCard>
            
            <InfoCard icon={<Mountain className="w-6 h-6" />} title="La géographie">
              <p>
                La Suisse se trouve au centre de l'Europe. 
                Elle est célèbre pour ses montagnes magnifiques, les Alpes. 
                Nous les avons admirées pendant tout notre séjour. Il y a aussi beaucoup de lacs.
              </p>
            </InfoCard>
            
            <InfoCard icon={<Coins className="w-6 h-6" />} title="La monnaie">
              <p>
                La monnaie suisse est le franc suisse (CHF). 
                Nous l'avons utilisé pour acheter des souvenirs et du chocolat. 
                Un franc suisse vaut environ 1,50 dollar canadien.
              </p>
            </InfoCard>
            
            <InfoCard icon={<Languages className="w-6 h-6" />} title="Les langues">
              <p>
                En Suisse, on parle quatre langues officielles: le français, l'allemand, l'italien et le romanche. 
                Nous nous sommes exprimés en français à Genève et on nous a compris parfaitement!
              </p>
            </InfoCard>
          </div>
        </div>
      </section>

      {/* Notre voyage */}
      <section className="relative py-28 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title">Notre itinéraire</h2>
            <div className="swiss-divider" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="swiss-card text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Plane className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-4">Jours 1-3: Zurich</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nous sommes arrivés à Zurich et nous nous sommes installés chez la famille. 
                Elle nous a montré la vieille ville. Nous l'avons trouvée magnifique!
              </p>
            </div>
            
            <div className="swiss-card text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <MapPin className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-4">Jours 4-6: Genève</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nous nous sommes déplacés en train vers Genève. 
                Le lac Léman nous a impressionnés! Nous nous sommes promenés le long du lac chaque jour.
              </p>
            </div>
            
            <div className="swiss-card text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-4">Jours 7-10: Zermatt</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nous nous sommes rendus à Zermatt pour voir le Cervin. 
                Nous avons fait du ski et nous nous sommes bien amusés. La montagne nous a émerveillés!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sites naturels */}
      <section className="relative py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-secondary/30 to-muted/40" />
        <div className="decorative-blur bg-alpine-blue/30 top-1/4 -right-20" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title">Sites naturels</h2>
            <div className="swiss-divider" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              La Suisse possède des paysages naturels extraordinaires. 
              Nous les avons visités et nous les avons photographiés pour vous les montrer.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ImageCard
              src={matterhornImage}
              alt="Le Cervin, montagne emblématique de la Suisse"
              title="Le Cervin (Matterhorn)"
              description="Nous l'avons admiré depuis Zermatt"
            />
            <ImageCard
              src={lacLemanImage}
              alt="Le lac Léman entre la Suisse et la France"
              title="Le lac Léman"
              description="Nous nous y sommes promenés en bateau"
            />
            <ImageCard
              src={rhineFallsImage}
              alt="Les chutes du Rhin, les plus grandes d'Europe"
              title="Les chutes du Rhin"
              description="Elles nous ont impressionnés par leur puissance"
            />
          </div>
        </div>
      </section>

      {/* Sites culturels */}
      <section className="relative py-28 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title">Sites culturels</h2>
            <div className="swiss-divider" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              La Suisse a une histoire riche. 
              Nous avons découvert ses châteaux et ses villes historiques. Ils nous ont fascinés!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ImageCard
              src={chateauImage}
              alt="Le Château de Chillon sur le lac Léman"
              title="Le Château de Chillon"
              description="Nous l'avons visité près de Montreux. Le guide nous a raconté son histoire."
            />
            <ImageCard
              src={bernImage}
              alt="La vieille ville de Berne, capitale de la Suisse"
              title="La vieille ville de Berne"
              description="Nous nous sommes perdus dans ses ruelles charmantes. Elle est classée au patrimoine mondial."
            />
          </div>
        </div>
      </section>

      {/* Cuisine suisse */}
      <section className="relative py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-accent/40 to-secondary/50" />
        <div className="decorative-blur bg-warm-gold/20 -bottom-20 left-1/4" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title">La cuisine suisse</h2>
            <div className="swiss-divider" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="swiss-card overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={fondueImage}
                  alt="Fondue au fromage traditionnelle suisse"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4">
                  <Utensils className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">La fondue au fromage</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nous l'avons goûtée le premier soir. La famille nous a servi ce plat traditionnel. 
                  On trempe du pain dans le fromage fondu. Nous l'avons adorée!
                </p>
              </div>
            </div>
            
            <div className="swiss-card overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={raclette}
                  alt="Raclette suisse traditionnelle"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4">
                  <Utensils className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">La raclette</h3>
                <p className="text-muted-foreground leading-relaxed">
                  On fait fondre le fromage et on le verse sur des pommes de terre. 
                  Nous l'avons mangée à Zermatt après le ski. Elle nous a réchauffés!
                </p>
              </div>
            </div>
            
            <div className="swiss-card overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={chocolateImage}
                  alt="Chocolat suisse de qualité"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4">
                  <Utensils className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">Le chocolat suisse</h3>
                <p className="text-muted-foreground leading-relaxed">
                  La Suisse est célèbre pour son chocolat. Nous en avons acheté beaucoup! 
                  Nous l'avons rapporté au Canada pour notre famille. Elle l'a adoré.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz */}
      <section className="relative py-28 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title">Testez vos connaissances!</h2>
            <div className="swiss-divider" />
            <p className="text-lg text-muted-foreground">
              Avez-vous bien lu notre présentation? Répondez à ces questions pour le découvrir!
            </p>
          </div>
          
          <SwissQuiz />
        </div>
      </section>
      
      {/* Sources */}
      <section className="relative py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-muted/30 to-secondary/40" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title">Sources</h2>
            <div className="swiss-divider" />
          </div>
          
          <div className="swiss-card">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl">Bibliographie</h3>
            </div>
            
            <ul className="space-y-5 text-muted-foreground">
              <li className="pl-8 -indent-8 leading-relaxed">
                «Suisse.» <em>Encyclopædia Britannica</em>, Encyclopædia Britannica, Inc., 2024, 
                www.britannica.com/place/Switzerland. Consulté le 15 décembre 2024.
              </li>
              <li className="pl-8 -indent-8 leading-relaxed">
                Office fédéral de la statistique. «Langues.» <em>Confédération suisse</em>, 
                www.bfs.admin.ch/bfs/fr/home/statistiques/population/langues.html. Consulté le 15 décembre 2024.
              </li>
              <li className="pl-8 -indent-8 leading-relaxed">
                «Switzerland Tourism.» <em>MySwitzerland.com</em>, Switzerland Tourism, 2024, 
                www.myswitzerland.com/fr/. Consulté le 14 décembre 2024.
              </li>
              <li className="pl-8 -indent-8 leading-relaxed">
                «Château de Chillon.» <em>Château de Chillon</em>, Fondation du Château de Chillon, 2024, 
                www.chillon.ch/fr/. Consulté le 14 décembre 2024.
              </li>
              <li className="pl-8 -indent-8 leading-relaxed">
                «La fondue suisse.» <em>House of Switzerland</em>, Présence Suisse, 2024, 
                www.houseofswitzerland.org/fr/swissstories/cuisine-suisse. Consulté le 13 décembre 2024.
              </li>
              <li className="pl-8 -indent-8 leading-relaxed">
                «Les chutes du Rhin.» <em>Rheinfall.ch</em>, Rhine Falls Tourism, 2024, 
                www.rheinfall.ch/fr/. Consulté le 13 décembre 2024.
              </li>
              <li className="pl-8 -indent-8 leading-relaxed">
                «Zermatt Matterhorn.» <em>Zermatt Tourism</em>, Zermatt Tourismus, 2024, 
                www.zermatt.ch/fr. Consulté le 12 décembre 2024.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;