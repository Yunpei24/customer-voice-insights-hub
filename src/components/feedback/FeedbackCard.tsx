
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
  pending: "bg-yellow-100 text-yellow-800",
  processing: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
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
    <Card className="w-full">
      <CardHeader className="pb-2 space-y-2">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="capitalize">
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
                i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
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
              className="rounded-md max-h-40 w-auto"
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
