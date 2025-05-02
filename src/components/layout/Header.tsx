
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Menu, X, MessageSquare, BarChart4, User, LogOut } from "lucide-react";

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
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6" />
            <h1 className="text-xl font-bold">SENELEC Customer Voice</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate("/")}>Dashboard</Button>
            <Button variant="ghost" onClick={() => navigate("/feedback")}>My Feedback</Button>
            <Button variant="ghost" onClick={() => navigate("/profile")}>Profile</Button>
            <Button variant="outline">Log Out</Button>
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
              Dashboard
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
              My Feedback
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
              Profile
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <LogOut className="mr-2 h-5 w-5" />
              Log Out
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
