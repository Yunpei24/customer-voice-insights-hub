
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
        title: "Rating Required",
        description: "Please provide a rating for your feedback.",
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
      title: "Feedback Submitted",
      description: "Thank you for your valuable feedback!",
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
        <Label htmlFor="category">Category</Label>
        <select
          id="category"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="general">General</option>
          <option value="billing">Billing</option>
          <option value="service">Service Quality</option>
          <option value="outage">Power Outage</option>
          <option value="customer_service">Customer Service</option>
        </select>
      </div>
      
      <div>
        <Label>Rating</Label>
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
                    ? "fill-yellow-400 text-yellow-400" 
                    : "text-gray-300"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <Label htmlFor="comment">Comment</Label>
        <Textarea
          id="comment"
          placeholder="Share your experience or suggestion..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          className="resize-none"
        />
      </div>
      
      <div>
        <Label htmlFor="image">Upload Image (Optional)</Label>
        <Input 
          id="image" 
          type="file" 
          accept="image/*"
          onChange={handleImageChange}
          className="mt-1"
        />
        {image && (
          <p className="text-sm text-muted-foreground mt-1">
            Selected file: {image.name}
          </p>
        )}
      </div>
      
      <Button type="submit" className="w-full">
        Submit Feedback
      </Button>
    </form>
  );
};

export default FeedbackForm;
