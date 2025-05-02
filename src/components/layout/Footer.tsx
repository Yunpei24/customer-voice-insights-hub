
const Footer = () => {
  return (
    <footer className="bg-primary/10 mt-auto py-4 border-t border-primary/20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-full senelec-gradient flex items-center justify-center mb-2">
            <span className="text-white text-xs font-bold">SENELEC</span>
          </div>
          <p className="text-sm text-foreground">&copy; {new Date().getFullYear()} SENELEC Customer Voice. All rights reserved.</p>
          <p className="mt-1 text-sm text-muted-foreground">Your feedback helps us improve our services.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
