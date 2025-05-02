
import MainLayout from "@/components/layout/MainLayout";
import FeedbackForm from "@/components/feedback/FeedbackForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, BarChart4, ThumbsUp } from "lucide-react";

const Index = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full senelec-gradient flex items-center justify-center">
              <span className="text-white text-2xl font-bold">SENELEC</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary via-primary to-accent">
            Welcome to SENELEC Customer Voice
          </h1>
          <p className="text-muted-foreground">Your feedback helps us improve our services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card className="senelec-card border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
              <MessageSquare className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">24</div>
            </CardContent>
          </Card>
          <Card className="senelec-card border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
              <BarChart4 className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">4.2</div>
            </CardContent>
          </Card>
          <Card className="senelec-card border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Resolved Issues</CardTitle>
              <ThumbsUp className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">18</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-bold mb-4 text-primary">Submit New Feedback</h2>
            <Card className="senelec-card border-primary/20">
              <CardContent className="pt-6">
                <FeedbackForm />
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4 text-primary">Recent Announcements</h2>
            <Card className="senelec-card border-secondary/20 bg-gradient-to-br from-secondary/5 to-accent/5">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-primary/10 hover:shadow-md transition-all duration-300">
                    <h3 className="font-medium text-secondary">Scheduled Maintenance</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      There will be a scheduled maintenance on May 5th from 10 PM to 2 AM. 
                      Some areas may experience power outages during this time.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-primary/10 hover:shadow-md transition-all duration-300">
                    <h3 className="font-medium text-secondary">New Billing System</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      We've updated our billing system to provide more detailed information about your energy usage.
                      The new bills will be available starting next month.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-primary/10 hover:shadow-md transition-all duration-300">
                    <h3 className="font-medium text-secondary">Customer Satisfaction Survey</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Please participate in our annual customer satisfaction survey. Your feedback is important to us!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
