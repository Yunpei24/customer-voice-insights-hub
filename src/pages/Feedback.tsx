
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import FeedbackCard from "@/components/feedback/FeedbackCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const sampleFeedbacks = [
  {
    id: "1",
    category: "billing",
    rating: 2,
    comment: "I believe there's an error in my latest bill. The amount is much higher than usual despite no change in my usage pattern.",
    date: "2025-04-28",
    status: "processing",
  },
  {
    id: "2",
    category: "outage",
    rating: 3,
    comment: "There was an unscheduled power outage in my neighborhood that lasted for about 3 hours.",
    date: "2025-04-20",
    status: "completed",
    imageUrl: "https://placehold.co/400x300",
  },
  {
    id: "3",
    category: "customer_service",
    rating: 5,
    comment: "The customer service representative was very helpful in resolving my issue quickly.",
    date: "2025-04-15",
    status: "completed",
  },
  {
    id: "4",
    category: "service",
    rating: 1,
    comment: "Frequent power fluctuations are damaging my electronic appliances.",
    date: "2025-04-10",
    status: "pending",
  },
];

const Feedback = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  
  const filteredFeedbacks = sampleFeedbacks.filter((feedback) => {
    const matchesSearch = feedback.comment.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || feedback.category === filterCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Feedback History</h1>
        
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search feedback..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <select
            className="h-10 px-3 py-2 rounded-md border border-input bg-background text-sm"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="general">General</option>
            <option value="billing">Billing</option>
            <option value="service">Service Quality</option>
            <option value="outage">Power Outage</option>
            <option value="customer_service">Customer Service</option>
          </select>
        </div>
        
        {filteredFeedbacks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeedbacks.map((feedback) => (
              <FeedbackCard
                key={feedback.id}
                id={feedback.id}
                category={feedback.category}
                rating={feedback.rating}
                comment={feedback.comment}
                date={feedback.date}
                status={feedback.status as "pending" | "processing" | "completed"}
                imageUrl={feedback.imageUrl}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-muted-foreground">No feedback found matching your criteria</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Feedback;
