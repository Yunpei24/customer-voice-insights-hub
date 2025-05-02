
const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-auto py-4">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} SENELEC Customer Voice. All rights reserved.</p>
        <p className="mt-1">Your feedback helps us improve our services.</p>
      </div>
    </footer>
  );
};

export default Footer;
