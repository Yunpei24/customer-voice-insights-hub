
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface FeedbackCardProps {
  id: string;
  category: string;
  rating: number;
  comment: string;
  date: string;
  status: "pending" | "processing" | "completed";
  imageUrl?: string;
}

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  processing: "bg-secondary/10 text-secondary border-secondary/20",
  completed: "bg-primary/10 text-primary border-primary/20",
};

const FeedbackCard = ({
  category,
  rating,
  comment,
  date,
  status,
  imageUrl,
}: FeedbackCardProps) => {
  return (
    <Card className="w-full senelec-card border-primary/20 hover:shadow-md transition-all duration-300">
      <CardHeader className="pb-2 space-y-2">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="capitalize bg-accent/10 text-accent border-accent/20">
            {category}
          </Badge>
          <Badge className={statusColors[status]}>
            {status}
          </Badge>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? "fill-accent text-accent" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{comment}</p>
        {imageUrl && (
          <div className="mt-3">
            <img
              src={imageUrl}
              alt="Feedback image"
              className="rounded-md max-h-40 w-auto border border-primary/20"
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        Submitted on {date}
      </CardFooter>
    </Card>
  );
};

export default FeedbackCard;
