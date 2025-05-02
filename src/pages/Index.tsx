
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
            Bienvenue sur SENELEC Voix du Client
          </h1>
          <p className="text-muted-foreground">Votre avis nous aide à améliorer nos services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card className="senelec-card border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Total des soumissions</CardTitle>
              <MessageSquare className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">24</div>
            </CardContent>
          </Card>
          <Card className="senelec-card border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Note moyenne</CardTitle>
              <BarChart4 className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">4.2</div>
            </CardContent>
          </Card>
          <Card className="senelec-card border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Problèmes résolus</CardTitle>
              <ThumbsUp className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">18</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-bold mb-4 text-primary">Soumettre un nouvel avis</h2>
            <Card className="senelec-card border-primary/20">
              <CardContent className="pt-6">
                <FeedbackForm />
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4 text-primary">Annonces récentes</h2>
            <Card className="senelec-card border-secondary/20 bg-gradient-to-br from-secondary/5 to-accent/5">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-primary/10 hover:shadow-md transition-all duration-300">
                    <h3 className="font-medium text-secondary">Maintenance programmée</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Une maintenance programmée aura lieu le 5 mai de 22h à 2h.
                      Certaines zones peuvent connaître des coupures de courant pendant cette période.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-primary/10 hover:shadow-md transition-all duration-300">
                    <h3 className="font-medium text-secondary">Nouveau système de facturation</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Nous avons mis à jour notre système de facturation pour fournir des informations plus détaillées sur votre consommation d'énergie.
                      Les nouvelles factures seront disponibles à partir du mois prochain.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-primary/10 hover:shadow-md transition-all duration-300">
                    <h3 className="font-medium text-secondary">Enquête de satisfaction client</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Veuillez participer à notre enquête annuelle de satisfaction client. Votre avis est important pour nous !
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
