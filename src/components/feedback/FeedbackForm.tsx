
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Star } from "lucide-react";

const FeedbackForm = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [category, setCategory] = useState("general");
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setImage(e.target.files[0]);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!rating) {
      toast({
        title: "Note requise",
        description: "Veuillez attribuer une note à votre avis.",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would submit the feedback data to your backend
    console.log({
      rating,
      comment,
      category,
      image,
      date: new Date(),
    });
    
    toast({
      title: "Avis soumis",
      description: "Merci pour votre précieux retour !",
    });
    
    // Reset the form
    setRating(null);
    setComment("");
    setImage(null);
    setCategory("general");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="category" className="text-secondary">Catégorie</Label>
        <select
          id="category"
          className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="general">Général</option>
          <option value="billing">Facturation</option>
          <option value="service">Qualité du service</option>
          <option value="outage">Coupure de courant</option>
          <option value="customer_service">Service client</option>
        </select>
      </div>
      
      <div>
        <Label className="text-secondary">Note</Label>
        <div className="flex gap-1 mt-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className="p-1 hover:scale-110 transition-transform"
            >
              <Star
                className={`h-8 w-8 ${
                  rating && rating >= star 
                    ? "fill-accent text-accent" 
                    : "text-gray-300"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <Label htmlFor="comment" className="text-secondary">Commentaire</Label>
        <Textarea
          id="comment"
          placeholder="Partagez votre expérience ou suggestion..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          className="resize-none border-primary/20 focus-visible:ring-primary"
        />
      </div>
      
      <div>
        <Label htmlFor="image" className="text-secondary">Télécharger une image (Optionnel)</Label>
        <Input 
          id="image" 
          type="file" 
          accept="image/*"
          onChange={handleImageChange}
          className="mt-1 border-primary/20 focus-visible:ring-primary"
        />
        {image && (
          <p className="text-sm text-muted-foreground mt-1">
            Fichier sélectionné : {image.name}
          </p>
        )}
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-secondary to-accent text-white hover:opacity-90"
      >
        Soumettre l'avis
      </Button>
    </form>
  );
};

export default FeedbackForm;
