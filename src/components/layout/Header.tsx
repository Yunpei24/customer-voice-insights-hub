
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Menu, X, MessageSquare, BarChart4, User, LogIn } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => navigate("/")}
          >
            <div className="w-10 h-10 rounded-full senelec-gradient flex items-center justify-center">
              <MessageSquare className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">SENELEC</h1>
              <p className="text-xs text-primary-foreground/80">Écho Client</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate("/")}>Tableau de bord</Button>
            <Button variant="ghost" onClick={() => navigate("/feedback")}>Mes avis</Button>
            <Button variant="ghost" onClick={() => navigate("/profile")}>Profil</Button>
            <Button variant="secondary" className="bg-secondary text-white hover:bg-secondary/90" onClick={() => navigate("/login")}>
              <LogIn className="mr-2 h-4 w-4" /> Connexion
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-2">
            <Button 
              variant="ghost" 
              className="w-full justify-start" 
              onClick={() => {
                navigate("/");
                setMobileMenuOpen(false);
              }}
            >
              <BarChart4 className="mr-2 h-5 w-5" />
              Tableau de bord
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start" 
              onClick={() => {
                navigate("/feedback");
                setMobileMenuOpen(false);
              }}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Mes avis
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start" 
              onClick={() => {
                navigate("/profile");
                setMobileMenuOpen(false);
              }}
            >
              <User className="mr-2 h-5 w-5" />
              Profil
            </Button>
            <Button 
              variant="secondary" 
              className="w-full justify-start bg-secondary text-white hover:bg-secondary/90"
              onClick={() => {
                navigate("/login");
                setMobileMenuOpen(false);
              }}
            >
              <LogIn className="mr-2 h-5 w-5" />
              Connexion
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
